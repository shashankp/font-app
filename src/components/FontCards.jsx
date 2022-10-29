import FontCard from "./FontCard";
import "antd/dist/antd.min.css";
import '../styles/FontCards.css';

function FontCards(props) {
    return (
        <div className="cards">
            {props.fonts.map((font, index) => {
            return (<div className="card" key={index}>
                <FontCard font={font} title={props.title} />
            </div>)
            })}
        </div>
    )
}

export default FontCards;
