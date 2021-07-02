import logo from './logo.svg';
import './App.css';
import { Button } from "@mono/ui-components";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Lets see you @mono/ui-components button:
                </p>
                <Button>ОМЕГА БАТОН</Button>
            </header>
        </div>
    );
}

export default App;
