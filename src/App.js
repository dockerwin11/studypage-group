// import logo from './logo.svg';
// import './App.css';

// React project
import Main from './Main.jsx';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Main />
        </BrowserRouter>
    );
}

export default App;
