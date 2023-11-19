import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
    return (
        <div id="box">
            <Header />
            
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </div>
    )
}

export default App
