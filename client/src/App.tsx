import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import AppRoutes from './routes';
import axios from 'axios';

function App() {
    const [devices, setDevices] = useState<[] | undefined>();
    useEffect(() => {
        const fetchDevices = axios
            .get('http://localhost:5000/api/device')
            .then((response) => {
                setDevices(response.data);

                console.log(response);
            });
        console.log(devices, fetchDevices);
    }, [setDevices]);
    return (
        <div className="app">
            <div className="wrapper">
                <p>{devices}</p>
                <AppRoutes />
            </div>
        </div>
    );
}

export default App;
