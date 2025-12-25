import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

type Props = {
    children: ReactNode;
}

const PublicRoute = ({children}: Props) => {
    const { currentUser } = useAuth();

    return !currentUser ? children : <Navigate to="/" />;
}

export default PublicRoute;