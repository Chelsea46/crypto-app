import { createContext, useState} from "react";
import axios from "axios";

export const UserContext = createContext();

function UserContextProvider(props) {

    const[loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    });

    const[registerUser, setRegisterUser] = useState({
        name: '',
        email: '',
        password:'',
    })

    function handleRegisterFormChange(e){
        const { name, value } = e.target;
        if(name === 'name'){
            setRegisterUser((prevFormData) => ({
                ...prevFormData,
                name: value.charAt(0).toUpperCase() + value.slice(1)
            }))
        }else if(name === 'email'){
            setRegisterUser((prevFormData) => ({
                ...prevFormData,
                email: value.charAt(0).toUpperCase() + value.slice(1)
            }))
        }else if(name === 'password'){
            setRegisterUser((prevFormData) => ({
                ...prevFormData,
                password: value
            }))
        }
    }

    function handleLoginFormChange(e){
        const { name, value } = e.target;
        if(name === 'email'){
            setLoginUser((prevFormData) => ({
                ...prevFormData,
                email: value.charAt(0).toUpperCase() + value.slice(1)
            }))
        }else if(name === 'password'){
            setLoginUser((prevFormData) => ({
                ...prevFormData,
                password: value
            }))
        }
    }
    
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL_LOGIN}`, loginUser);
          console.log(response.data); 
        } catch (error) {
          console.error('Error:', error);
        }
      };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL_REGISTER}`, registerUser);
          console.log(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
        

    const value = { handleRegisterFormChange, handleLoginFormChange, handleRegistrationSubmit, handleLoginSubmit };

    return (
        <UserContext.Provider value={value}>
        {props.children}
        </UserContext.Provider>
    );
    }

export default UserContextProvider;
