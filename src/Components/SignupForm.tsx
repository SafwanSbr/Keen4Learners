import { useState } from "react"
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";

const SignupForm = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [agree, setAgree] = useState<string>("");
    
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    
    const {signup} = useAuth();
    const navigation = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> ) =>{
        event.preventDefault(); 
        if( password !== confirmPassword){
            return setError("Password didn't Match!");
        }

        try{
            setError("");
            setLoading(true);
            await signup(email, password, username);
            navigation("/");
        } catch(error){
            console.log(error);
            setLoading(false);
            setError("Failed to create Account");
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <TextInput 
                type="text"
                placeholder="Enter your username"  
                icon="person"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
            />
            
            <TextInput 
                type="email"
                placeholder="Enter your email"  
                icon="alternate_email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput 
                type="password"
                placeholder="Create a strong password"  
                icon="lock"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
            />

            <TextInput 
                type="password"
                placeholder="Confirm your password"  
                icon="lock_clock"
                value={confirmPassword}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Checkbox
                required
                text="I agree to the Terms &amp; Conditions"
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
            />

            <Button disabled={loading} type="submit">
                <span>{loading ? "Creating account..." : "Create Account"}</span>
            </Button>

            {error && <p className="error">{error}</p>}
            <div className="info">
                Already have an account? <Link to="/login" className="font-semibold hover:underline">Sign in</Link> instead.
            </div>
        </Form>
    );
}

export default SignupForm