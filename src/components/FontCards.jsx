import "antd/dist/antd.min.css";
import ImageCard from "./ImageCard";
import FontList  from "./FontList";
import { useState } from 'react';
import { Card } from "antd";
import { HeartFilled, HeartOutlined, DeleteOutlined } from "@ant-design/icons";
import '../styles/FontCards.css';
import '../styles/fonts.css';

function FontCards(props) {

    const [fonts, setFonts] = useState([{ name: "Lobster", heart: true}, {name:"Arial", heart: false}, {name: "monotype", heart: false}]);

    const createFontCard = (fontName) => {
        setFonts([...fonts, {name: fontName, heart: false}]);
    }

    const removeFont = (fontName) => {
        setFonts(fonts.filter(f => f.name !== fontName));
    }

    const heartFont = (fontName) => {
        const newFonts = fonts.map(f => {
            if (f.name === fontName) {
                f.heart = !f.heart;
            }
            return f;
        });
        setFonts(newFonts);
    }

    return (
        <>
        <FontList callback={createFontCard}/>
        <div className="columns" id="columns">
            {fonts.map((font, index) => {

                let actions = [
                    <h4 style={{ fontFamily: font.name }} key="Name" >
                        {font.name} 
                    </h4>
                ]

                if (font.heart) {
                    actions = [...actions, 
                        <span onClick={event => { event.stopPropagation(); heartFont(font.name)}}>
                            <HeartFilled style={{ color: "red" }} />
                        </span>
                    ]
                } else {
                    actions = [...actions,
                        <span onClick={event => { event.stopPropagation(); heartFont(font.name)}}>
                            <HeartOutlined />
                        </span>,
                        <DeleteOutlined onClick={event => { event.stopPropagation(); removeFont(font.name)}} />]
                }
                
            return (
            <div className="card" key={index}>
                <Card
                    hoverable
                    style={{
                        width: 300,
                        borderRadius: "5px",
                        overflow: "hidden",
                        margin: "5px"
                    }}
                    actions={actions}
                    >
                    <div style={{ fontFamily: font.name }}>
                        <ImageCard title={props.title} />
                    </div>
                </Card>
            </div>)
            })}
        </div>
        </>
    )
}

export default FontCards;
