import { createContext, useState} from "react";
import axios from "axios";

export const UserContext = createContext();

function UserContextProvider(props) {

    const[loginUser, setLoginUser] = useState({
        userEmail: '',
        userPassword: ''
    });

    const[registerUser, setRegisterUser] = useState({
        userName: '',
        userEmail: '',
        userPassword:'',
    })

    function handleRegisterFormChange(e){
        const { name, value } = e.target;
        if(name === 'name'){
            setRegisterUser((prevFormData) => ({
                ...prevFormData,
                userName: value.charAt(0).toUpperCase() + value.slice(1)
            }))
        }else if(name === 'email'){
            setRegisterUser((prevFormData) => ({
                ...prevFormData,
                userEmail: value.charAt(0).toUpperCase() + value.slice(1)
            }))
        }else if(name === 'password'){
            setRegisterUser((prevFormData) => ({
                ...prevFormData,
                userPassword: value
            }))
        }
    }

    function handleLoginFormChange(e){
        const { name, value } = e.target;
        if(name === 'email'){
            setLoginUser((prevFormData) => ({
                ...prevFormData,
                userEmail: value.charAt(0).toUpperCase() + value.slice(1)
            }))
        }else if(name === 'password'){
            setLoginUser((prevFormData) => ({
                ...prevFormData,
                userPassword: value
            }))
        }
    }
    
    async function handleRegistrationSubmit(event) {
        event.preventDefault()

        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}`, registerUser)
        const addedUser = res.data
    }
        

    const value = { handleRegisterFormChange, handleLoginFormChange, handleRegistrationSubmit };

    return (
        <UserContext.Provider value={value}>
        {props.children}
        </UserContext.Provider>
    );
    }

export default UserContextProvider;
