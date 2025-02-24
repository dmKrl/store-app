import { useEffect } from 'react';
import AppRoutes from '../routes';
import './styles/App.css';
import './styles/index.css';
import { useCatalogStore } from 'src/features/store';

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
