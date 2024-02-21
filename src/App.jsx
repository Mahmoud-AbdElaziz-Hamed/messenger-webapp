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
  const isLogin = localStorage.getItem('token');
  if (!isLogin) return <Navigate to={'/login'} />;
  return <Outlet />;
};

const PublicRoutes = () => {
  const { urlPath } = useLocation();
  const pathes = ['/signup', '/login'];
  const isLogin = localStorage.getItem('token');
  if (isLogin && pathes.includes(urlPath)) {
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
