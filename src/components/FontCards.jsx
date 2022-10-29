import "antd/dist/antd.min.css";
import ImageCard from "./ImageCard";
import FontList  from "./FontList";
import { useState, useEffect } from 'react';
import { Card, InputNumber, Input, Row, Col } from "antd";
import { HeartFilled, HeartOutlined, DeleteOutlined } from "@ant-design/icons";
import '../styles/FontCards.css';
import '../styles/fonts.css';

function FontCards(props) {

    const [title, setTitle] = useState("");
    const [fontSize, setFontSize] = useState(0);
    const [textX, setTextX] = useState(0);
    const [textY, setTextY] = useState(0);
    const [color, setColor] = useState('');
    const [fonts, setFonts] = useState([]);

    useEffect(() => {
        const savedtitle = JSON.parse(localStorage.getItem('title'));
        if (savedtitle) setTitle(savedtitle);
        const savedfontSize = JSON.parse(localStorage.getItem('fontSize'));
        if (savedfontSize) setFontSize(savedfontSize);
        const savedtextX = JSON.parse(localStorage.getItem('textX'));
        if (savedtextX) setTextX(savedtextX);
        const savedtextY = JSON.parse(localStorage.getItem('textY'));
        if (savedtextY) setTextY(savedtextY);
        const savedcolor = JSON.parse(localStorage.getItem('color'));
        if (savedcolor) setColor(savedcolor);
        const savedfonts = JSON.parse(localStorage.getItem('fonts'));
        if (savedfonts && savedfonts.length > 0) setFonts(savedfonts);
        else setFonts([{ name: "Lobster", heart: true}]);
    }, []);

    useEffect(() => {
        localStorage.setItem('title', JSON.stringify(title));
    }, [title]);

    useEffect(() => {
        localStorage.setItem('fontSize', JSON.stringify(fontSize));
    }, [fontSize]);

    useEffect(() => {
        localStorage.setItem('textX', JSON.stringify(textX));
    }, [textX]);

    useEffect(() => {
        localStorage.setItem('textY', JSON.stringify(textY));
    }, [textY]);

    useEffect(() => {
        localStorage.setItem('color', JSON.stringify(color));
    }, [color]);

    useEffect(() => {
        if (fonts && fonts.length > 0) {
            localStorage.setItem('fonts', JSON.stringify(fonts));
        }
    }, [fonts]);

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
        <Input.Group>
        <Row justify="center">
            <Col span={4}>
                <Input size="medium" placeholder='Title' name="title" type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} /> 
            </Col>
            <Col span={2}>
                <InputNumber min={10} max={50} value={fontSize} name="fontSize" onChange={(e) => setFontSize(e)} />
            </Col>
            <Col span={2}>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
            </Col>
            <Col span={2}>
                <InputNumber min={0} max={250} step={5} value={textX} onChange={(e) => setTextX(e)}  />
            </Col>
            <Col span={2}>
                <InputNumber min={0} max={250} step={5} value={textY} onChange={(e) => setTextY(e)}/>
            </Col>            
        </Row>
        </Input.Group>
            
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
                        margin: "5px",
                    }}
                    actions={actions}
                    >
                    <div>
                        <ImageCard title={title} font={font.name} color={color} fontSize={fontSize} textx={textX} texty={textY}/>
                    </div>
                </Card>
            </div>)
            })}
        </div>
        </>
    )
}

export default FontCards;
