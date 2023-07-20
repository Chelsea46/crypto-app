import { CoinDescStyle } from "../styled/CoinPage/CoinDesc.styled";
import { BsStack } from "react-icons/bs";

export default function CoinDesc({ individualCoin, loading }) {
    if (loading) {
        return <div>Loading...</div>;
    }

    const cleanedDescription = individualCoin.description.en.replace(/<[^>]+>/g, '');

    return (
        <CoinDescStyle>
            <h2 className="description-title">Description:</h2>
            <div className="description-p-container">
                <p className="description">
                    <span><BsStack className="stack"/></span>
                    {cleanedDescription}</p>
            </div>
        </CoinDescStyle>
    );
}
