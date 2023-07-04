import "./style.js"
import {TextComponent} from "./style";

const Text = (props) => {
    return (
        <>
            <TextComponent>{props.text}</TextComponent>
        </>
    );
};

export default Text;
