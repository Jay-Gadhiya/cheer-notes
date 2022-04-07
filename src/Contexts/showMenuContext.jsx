import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.development";

const ShowMenuContext = createContext();
const useMenu = () => useContext(ShowMenuContext);

const ShowMenuProvider = ({children}) => {

    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <ShowMenuContext.Provider value = {{showMenu, setShowMenu}}>
            {children}
        </ShowMenuContext.Provider>
    )
}

export { ShowMenuProvider, useMenu };