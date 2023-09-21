import { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export const UserContext = createContext();

function UserContextProvider(props) {

    const [regModalClosed, setRegModalClosed] = useState(true);
    const [loginModalClosed, setLoginModalClosed] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const[loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    });

    const[registerUser, setRegisterUser] = useState({
        name: '',
        email: '',
        password:'',
    });

    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[cookieToken, setCookieToken] = useState('');
    const[userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        id: ''
    });

    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL_USERLOGGEDIN}`, 
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response =>{
            setIsLoggedIn(response.data.success);
            setCookieToken(response.data.token);
            setUserDetails(response.data.user);
        })
    },[])
    
    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    function addRegModal(){
        setRegModalClosed(false);
    }

    function addLoginModal(){
        setLoginModalClosed(false);
    }
    
    function close() {
        setRegModalClosed(true);
        setLoginModalClosed(true);
    }

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
          const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL_LOGIN}`, loginUser,
          {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
          });
          setIsLoggedIn(response.data.success);
          setCookieToken(response.data.token);
          setUserDetails(response.data.user);
          if(response){
            close()
            toggleDropdown()
        }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL_REGISTER}`, registerUser);
          console.log(response.data);
          if(response){
              close()
              toggleDropdown()
          }
        } catch (error) {
          console.error('Error:', error);

        }
      };

      function logOut(e){
        e.preventDefault();
        axios.get(`${import.meta.env.VITE_BACKEND_URL_LOGOUT}`, 
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response =>{
            console.log(response)
            navigate('/')
            toggleDropdown()
        })
      }
      
      function deleteUser(){
        console.log('user removed')
        axios.delete(`http://localhost:5000/auth/delete/${userDetails.id}`)
        toggleDropdown()
      }

    const value = { 
        handleRegisterFormChange,
        handleLoginFormChange,
        handleRegistrationSubmit,
        handleLoginSubmit,
        isLoggedIn,
        cookieToken,
        userDetails,
        loginModalClosed, 
        setLoginModalClosed,
        regModalClosed, 
        setRegModalClosed,
        close,
        addRegModal,
        addLoginModal,
        logOut,
        deleteUser,
        toggleDropdown,
        isDropdownOpen

    };

    return (
        <UserContext.Provider value={value}>
        {props.children}
        </UserContext.Provider>
    );
    }

export default UserContextProvider;
