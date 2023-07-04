import "./style.js"
import { TextComponent } from "./style";

const Text = (props) => {
    return (
        <>
            <TextComponent>{props.ctext}</TextComponent>
        </>
    );
};

export default Text;
