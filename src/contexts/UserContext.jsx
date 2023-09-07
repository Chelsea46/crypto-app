import { createContext, useState} from "react";

export const UserContext = createContext();

function UserContextProvider(props) {

    const [modalClosed, setModalClosed] = useState(false);

    

    const value = {setModalClosed};

    return (
        <UserContext.Provider value={value}>
        {props.children}
        </UserContext.Provider>
    );
    }

export default UserContextProvider;
