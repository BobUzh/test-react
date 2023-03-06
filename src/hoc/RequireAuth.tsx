import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

interface RequireAuthProps {
    children: JSX.Element
}

const RequireAuth = ({children}:RequireAuthProps) => {
    const {isAuthorized} = useAppSelector(state => state.user)

    if(! isAuthorized) {
        return <Navigate to="/" />
    }

    return children;
}

export default RequireAuth;