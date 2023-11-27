import { useContext, useEffect } from "react";
import * as userService from '../../services/userService';
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Path from "../../paths";

export default function Logout() {

    const { logoutHandler } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        userService.logout()
            .then(() => {
                logoutHandler();
                navigate(Path.Home);
            })
            .catch(() => navigate(Path.Home))
    })

    return null
};