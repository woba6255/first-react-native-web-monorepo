import logo from './logo.svg';
import './App.css';
import { Button } from "@mono/ui-components";
import { useEffect, useState } from "react";

const params = {
    username: '123',
    password: '123'
}
const headers = {
    Authorization: `Basic ${btoa(`${params.username}:${params.password}`)}`,
    'Content-Type': 'application/json',
};

function App() {
    const [buttonName, setButtonName] = useState()

    const onClick = () => {
        fetch('/dcpc/stations', {headers})
            .then((r) => r.json())
            .then((data) => {
                setButtonName(JSON.stringify(data))
            })
    }


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Lets see you @mono/ui-components button:
                </p>
                <Button onClick={onClick}>{buttonName}</Button>
            </header>
        </div>
    );
}

export default App;
