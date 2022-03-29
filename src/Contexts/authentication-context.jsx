import { authReducer } from "../Reducers/auth-reducer";

const { createContext, useContext, useReducer, useEffect } = require("react");

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(authReducer, { token : null });
    const getToken = localStorage.getItem("token");

    useEffect(() => {
        authDispatch({type : "CHECK_TOKEN", payload : getToken });
    }, [])


    return (
        <AuthContext.Provider value={{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth };

