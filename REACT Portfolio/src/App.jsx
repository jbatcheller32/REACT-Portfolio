import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (

        <>
        <Header />
            <NavTabs />
            <main className="mx-3">
                <Outlet />
            </main>
        <Footer />
        </>


    );
}

export default App
