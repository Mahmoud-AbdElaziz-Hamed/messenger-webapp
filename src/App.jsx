import './App.css';
import { LoginPage } from './containers/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignUpPage } from './containers/SignUpPage';
import { ChatPage } from './containers/ChatPage/index.jsx';

export function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/signup' element={<SignUpPage />} />
        <Route exact path='/Chat' element={<ChatPage />} />
      </Routes>
    </Router>
  );
}
