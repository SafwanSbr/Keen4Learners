import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, User, UserCredential } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import "../firebase";

type AuthContextType = {
    currentUser: User|null;
    signup: (email:string, password:string, username:string) => void;
    login: (email:string, password:string) => Promise<UserCredential>;
    logout: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType|undefined>(undefined);

//A custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used within an AuthProvider");

    return context;
};

type Props = { children: React.ReactNode};

export const AuthProvider = ({children}: Props) =>{
    const [loading, setLoading] = useState<boolean>(true);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(()=>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user)=>{ //When user Signup, Firebase will auto signin the user, at that time this function will be fired into Firebase
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe; // Cleanup subscription on unmount & to prevent auto update function address
    }, []);

    //Signup 
    const signup = async (email: string, password: string, username: string) => {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password); // Create Account
    
        const user = auth.currentUser; // Get user
        if (user) {
          // Update Profile
          await updateProfile(user, { displayName: username });
          setCurrentUser({ ...user }); // Set updated user
        }
        else throw new Error("Error occured to get Auth from Firebase");
    };

    // Login Function
    const login = (email: string, password: string): Promise<UserCredential> => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const logout= () =>{
        const auth = getAuth();
        return signOut(auth);
    }

    const value: AuthContextType = {
        currentUser, signup, login, logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* Render children only when loading is false */}
        </AuthContext.Provider>
    );
}