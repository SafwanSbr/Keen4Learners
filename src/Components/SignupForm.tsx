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
        <Form className={""} onSubmit={handleSubmit}>
            <TextInput 
                type="text"
                placeholder="Enter Your Username"  
                icon="person"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
            />
            
            <TextInput 
                type="email"
                placeholder="Enter Valid Email"  
                icon="alternate_email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput 
                type="password"
                placeholder="Enter A strong Password"  
                icon="lock"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
            />

            <TextInput 
                type="password"
                placeholder="Enter Same Password Again"  
                icon="lock_clock"
                value={confirmPassword}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Checkbox
                required
                text="I agree to the Terms &amp; Conditions"
                value={agree}
                onChange={(e) => setAgree(e.target.value)} className={""}            
            />

            <Button disabled={loading} type="submit" className={""}>
                <span>Submit Now</span>
            </Button>

            {error && <p className="error">{error}</p>}
            <div className="info">
                Already have an Account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
}

export default SignupForm