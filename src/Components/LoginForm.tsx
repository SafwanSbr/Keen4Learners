import { useState } from "react"
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import TextInput from "./TextInput";
import Button from "./Button";

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const {login} = useAuth();
    const navigation = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try{
            setError("");
            setLoading(true);
            
            await login(email, password);
            navigation("/");

        } catch (error){
            console.log(error);
            setLoading(false);
            setError("Failed to login");
        }
    }

    return (
        <Form className={""} onSubmit={handleSubmit}>
            <TextInput type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Valid Email" required icon={"alternate_email"} />

            <TextInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Valid Password" required icon={"lock"} />

            <Button className="" type="submit" disabled={loading}>
                <span>Submit Now</span>
            </Button>
            
            {error && <p className="error">{error}</p>}
            <div className="info">
                Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    )
}

export default LoginForm