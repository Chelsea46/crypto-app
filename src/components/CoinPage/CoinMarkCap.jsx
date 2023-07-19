import { FaCaretDown, FaCaretUp, FaSquarePlus} from  "react-icons/fa6";
import { CoinMarketCapStlye } from "../styled/CoinMarketCap.styled";

export default function CoinMarkCap({ individualCoin, loading }) {
    if (loading) {
      return <div>Loading...</div>; 
    }
    console.log(individualCoin)
    return (
        <CoinMarketCapStlye>
        <ul className="top-ul">
            <li><FaSquarePlus className="sqaure"/>Market Cap:</li>
            <li><FaSquarePlus className="sqaure"/>Fully Diluted Valuation:</li>
            <li><FaSquarePlus className="sqaure"/>Vol 24h:</li>
            <li><FaSquarePlus className="sqaure" />Vol / Market:</li>
        </ul>

        <ul className="btm-ul">
            <li><FaSquarePlus className="sqaure"/>Total Vol:</li>
            <li><FaSquarePlus className="sqaure"/>Circulating Supply:</li>
            <li><FaSquarePlus className="sqaure"/>Max Supply:</li>
        </ul>
        </CoinMarketCapStlye>
    )
  }
  