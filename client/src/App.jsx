import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import AuthContext from './contexts/AuthContext';
import * as userService from './services/userService';
import Path from './paths';

import Home from './components/home/Home';
import Header from './components/header/Header';
import GameList from './components/game-list/GameList';
import Login from './components/login/Login';
import Register from './components/register/Register';
import CreateGame from './components/create-game/CreateGame';
import GameDetails from './components/game-details/GameDetails';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async(values) => {
        const result = await userService.login(values.email, values.password);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async(values) => {
        const result = await userService.register(values.email, values.password);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
    }

    return (
        <div id="box">
            <Header />
            <AuthContext.Provider value={values}>
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
