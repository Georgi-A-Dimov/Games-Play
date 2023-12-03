import { Route, Routes } from 'react-router-dom';

import Path from './paths';

import Home from './components/home/Home';
import Header from './components/header/Header';
import GameList from './components/game-list/GameList';
import Login from './components/login/Login';
import Register from './components/register/Register';
import CreateGame from './components/create-game/CreateGame';
import GameDetails from './components/game-details/GameDetails';
import Logout from './components/logout/Logout';
import { AuthProvider } from './contexts/authContext';
import GameEdit from './components/edit-game/EditGame';

function App() {

    return (
        <AuthProvider>
            <div id="box">
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path='/games' element={<GameList />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create-game' element={<CreateGame />} />
                    <Route path='/games/:gameId' element={<GameDetails />} />
                    <Route path={Path.GameEdit} element={<GameEdit />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>
            </div>
        </AuthProvider>
    )
}

export default App
