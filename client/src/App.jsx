import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import GameList from './components/game-list/GameList';
import Login from './components/login/Login';
import Register from './components/register/Register';
import CreateGame from './components/create-game/CreateGame';

function App() {
    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/game-list' element={<GameList />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/create-game' element={<CreateGame />} />
            </Routes>
        </div>
    )
}

export default App
