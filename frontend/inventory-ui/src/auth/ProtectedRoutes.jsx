import {AuthContext} from './AuthContext';
import { useContext } from 'react';
import {Navigate} from "react-router-dom";
export default function ProtectedRoutes({children}) {

    const {user} = useContext(AuthContext);
    return user ? children : <Navigate to="/login" />
}