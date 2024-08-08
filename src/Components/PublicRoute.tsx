import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

type Props = {
    children: JSX.Element;
}
const PublicRoute = ({children}: Props) => {
    const { currentUser } = useAuth();

    return !currentUser ? children : <Navigate to="/" />;
}

export default PublicRoute