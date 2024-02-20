import './App.css';
import { LoginPage } from './containers/LoginPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { ChatPage } from './containers/ChatPage/index.jsx';
import { NotFoundPage } from './containers/NotFoundPage/index.jsx';
import { SignUpPage } from './containers/SignUpPage/index.jsx';

const PrivateRoutes = () => {
  const isLogain = localStorage.getItem('token');
  const { pathname } = useLocation();
  if (!isLogain && pathname === '/signup') return <Navigate to={'/signup'} />;
  if (!isLogain) return <Navigate to={'/login'} />;
  return <Outlet />;
};

const PublicRoutes = () => {
  const pathes = ['/signup', '/login'];
  const { pathname } = useLocation();
  const isLogain = localStorage.getItem('token');
  if (isLogain && pathes.includes(pathname)) {
    return <Navigate to={'/'} />;
  }
  return <Outlet />;
};

export function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/signup' element={<SignUpPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route exact path='/' element={<ChatPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
