import { Route, Routes } from 'react-router-dom';

import AuthContext from './contexts/AuthContext';

import Home from './components/home/Home';
import Header from './components/header/Header';
import GameList from './components/game-list/GameList';
import Login from './components/login/Login';
import Register from './components/register/Register';
import CreateGame from './components/create-game/CreateGame';
import GameDetails from './components/game-details/GameDetails';

function App() {
    const loginSubmitHadler = () => {

    };
    
    return (
        <div id="box">
            <Header />
            <AuthContext.Provider value={loginSubmitHadler}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/games' element={<GameList />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create-game' element={<CreateGame />} />
                    <Route path='/games/:gameId' element={<GameDetails />} />
                </Routes>
            </AuthContext.Provider>
        </div>
    )
}

export default App
