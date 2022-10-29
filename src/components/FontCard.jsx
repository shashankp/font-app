import { Card } from "antd";
import "antd/dist/antd.min.css";
import '../styles/FontCard.css';

function FontCard(props) {
    const font = props.font || "monospace";

    return (
    <div className="App">
        <Card
        style={{
            width: 300,
            margin: "20px",
            borderRadius: "20px",
            overflow: "hidden"
        }}
        actions={[
            <h4 style={{ paddingTop: "6px", fontFamily: font }} key="Name" >
            {font} 
            </h4>
        ]}
        >
        <p style={{ fontFamily: font }}>{props.title}</p>
        </Card>
    </div>
    )
}

export default FontCard;
