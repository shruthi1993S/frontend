/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import { GetUser } from '../services/ApiServices';
// import { useNavigate } from "react-router-dom";
const AuthContext = createContext({
    user: undefined,
    loading: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const getUser = async () => {
        try {
            const result = await GetUser();
            if (result && result._id) {
                setUser(result);
                setLoading(false);
            }
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, [user, getUser]);

    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
