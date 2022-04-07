import { createContext, useContext, useState } from "react";

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