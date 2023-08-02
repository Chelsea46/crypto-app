
import { useState, createContext, useEffect, useContext } from 'react';
import { CryptoContext } from "./CyrptoContext";
import axios from 'axios';

export const PortfolioContext = createContext();

function PorfolioContextProvider(props) {
  // states from context
  const { currencyApi } = useContext(CryptoContext);

//   state for users coin
  const [userCoinStats, setUserCoinStats] = useState({
    name: '',
    amount: '',
    date: '',
  })

  // state for search input
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  // state for owned amount
  const [owned, setOwned] = useState([]);
  // state for date
  const [dateCreated, setDateCreated] = useState([]);
  //   state for selected coin
  const [coinSelected, setCoinSelected] = useState([]);
  // New state for matching search options
  const [results, setResults] = useState([]);
  //   state for dropdown
  const [dropdownOpen, setdropDownOpen] = useState(false);
   // state for edit details modal
   const [editDetailsModal, setEditDetailsModal] = useState(false);
  //  state for coin to be edited
  const [coinToEdit, setCoinToEdit] = useState([])

  

    // function to fetch API data
    async function fetchApiData() {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyApi}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`);
        setSearchData(response.data);
    } catch (error) {
        console.error('Error fetching API data:', error);
    }
    }

  // function to handle search input
  function handleSearchInput(e) {
    setSearchInput(e.target.value);
    const filteredSearch = searchData.filter((data) => data.id.includes(searchInput.toLowerCase()));
    setResults(filteredSearch)
    setdropDownOpen(filteredSearch.length > 0);
  }


  // compare searchinput to api call to find selected coin
  function selectedCoin(e){
    setCoinSelected(e.target.innerText)
    setdropDownOpen(false)
  }

  //   function for owned input
  function ownedInput(e) {
    setOwned(e.target.value);
  }

  // function for date
  function handleDate(e) {
    setDateCreated(e.target.value || e.target.defaultValue);
  }

//   function to save object
function saveData(){
    setUserCoinStats((prevData) => ({
        ...prevData,
        name: coinSelected,
        amount: owned,
        date: dateCreated,
    }))
}

// function to open edit form modal
function openEditModal(coin){
  setEditDetailsModal(true)
  setCoinToEdit(coin)
}

  const value = { 
    handleSearchInput, 
    ownedInput, 
    handleDate, 
    fetchApiData, 
    results, 
    setResults, 
    selectedCoin, 
    saveData, 
    dropdownOpen, 
    userCoinStats, 
    searchData, 
    openEditModal,
    editDetailsModal,
    setEditDetailsModal,
    coinToEdit,
    setUserCoinStats
  };

  return (
    <PortfolioContext.Provider value={value}>
      {props.children}
    </PortfolioContext.Provider>
  );
}

export default PorfolioContextProvider;
