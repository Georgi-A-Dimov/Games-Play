import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userService from '../services/userService';
import Path from '../paths';
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

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
        email: auth.email,
        userId: auth._id,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;