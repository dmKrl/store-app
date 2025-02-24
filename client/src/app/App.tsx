import { useEffect } from 'react';
import './styles/App.css';
import '../index.css';
import AppRoutes from '../routes';
import { useCatalogStore } from 'features/store';

function App() {
    const { getAllDevices } = useCatalogStore();

    useEffect(() => {
        getAllDevices();
    }, []);
    return (
        <div className="app">
            <div className="wrapper">
                <AppRoutes />
            </div>
        </div>
    );
}

export default App;
