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
        <Form onSubmit={handleSubmit}>
            <TextInput 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                required 
                icon={"alternate_email"} 
            />

            <TextInput 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
                required 
                icon={"lock"} 
            />

            <Button type="submit" disabled={loading}>
                <span>{loading ? "Signing in..." : "Sign In"}</span>
            </Button>
            
            {error && <p className="error">{error}</p>}
            <div className="info">
                Don't have an account? <Link to="/signup" className="font-semibold hover:underline">Sign up</Link> instead.
            </div>
        </Form>
    )
}

export default LoginForm