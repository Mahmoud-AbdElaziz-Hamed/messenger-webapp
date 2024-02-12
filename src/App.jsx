import './App.css';
import { LoginPage } from './containers/LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';
// import { SignUpPage } from './containers/SignUpPage';
// import { ChatPage } from './containers/ChatPage/index.jsx';

export function App() {
  return (
    // <ChatPage />
    <Router>
      <LoginPage />
      {/* <SignUpPage /> */}
    </Router>
  );
}
