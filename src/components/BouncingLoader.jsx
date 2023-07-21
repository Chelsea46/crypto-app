import { BouncingLoaderStyle } from "./styled/BouncingLoader.styled";

export const BouncingDotsLoader = () => {
    return (
        <BouncingLoaderStyle>
            <div className="bouncing-loader">
            <div></div>
            <div></div>
            <div></div>
            </div>
        </BouncingLoaderStyle>
    );
  };