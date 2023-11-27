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
import Logout from './components/logout/Logout';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken')
        return {}
    }
    );

    const loginSubmitHandler = async (values) => {
        const result = await userService.login(values.email, values.password);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        const result = await userService.register(values.email, values.password);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        navigate(Path.Home);
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <div id="box">
            <AuthContext.Provider value={values}>

                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path='/games' element={<GameList />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create-game' element={<CreateGame />} />
                    <Route path='/games/:gameId' element={<GameDetails />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>

            </AuthContext.Provider>
        </div>
    )
}

export default App
