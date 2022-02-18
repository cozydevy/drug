import logo from './logo.svg';
import './App.css';
import Drug from './Drug';
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Drug></Drug>
  </BrowserRouter>
  );
}

export default App;
