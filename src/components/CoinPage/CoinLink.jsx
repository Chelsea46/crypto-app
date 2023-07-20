import { CoinLinkStlye} from "../styled/CoinPage/CoinLink.styled";


export default function CoinLink({ individualCoin, loading }) {
    if (loading) {
      return <div>Loading...</div>; 
    }

    return (
        <CoinLinkStlye>
            <img src={individualCoin.image.small} alt="" />
            <h3>{individualCoin.name}</h3>
            <a href={individualCoin.links.homepage[0]}>{individualCoin.links.homepage[0]}</a>
        </ CoinLinkStlye>
    );
  }
  
  