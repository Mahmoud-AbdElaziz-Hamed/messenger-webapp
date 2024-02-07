import './App.css';
import { LoginPage } from './containers/LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <LoginPage />
    </Router>
  );
}
