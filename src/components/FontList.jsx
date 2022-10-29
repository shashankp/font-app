import { useState } from "react";
import "antd/dist/antd.min.css";
import { AutoComplete } from 'antd';

const fontList = ["Lobster", "Arial",
"Annamayya",
"AnnamayyaBold",
"AnnamayyaBoldItalic",
"AnnamayyaItalic",
"Chathura-Bold",
"Chathura-ExtraBold",
"Chathura-Light",
"Chathura-Regular",
"Chathura-Thin",
"Dhurjati",
"Dhurjati-Italic",
"Gidugu",
"Gidugu-Italic",
"Gurajada",
"Gurajada-Italic",
"JIMS",
"JIMS-Italic",
"KanakaDurga",
"KanakaDurga-Italic",
"LakkiReddy",
"Lobster_1.3",
"Mallanna",
"Mallanna-Italic",
"Mandali-Bold Italic",
"Mandali-Bold",
"Mandali-BoldItalic",
"Mandali-Italic",
"Mandali-Regular",
"NATS",
"NATS-Italic",
"NTR",
"NTR-Italic",
"Nandakam Regular",
"PVNR",
"Peddana-Regular",
"Ponnala",
"Potti Sreeramulu",
"Purushothamaa",
"Purushothamaa-Italic",
"Ramabhadra-Italic",
"Ramabhadra-Regular",
"RamaneeyaWin",
"Ramaraja-Regular",
"RaviPrakash",
"SPBalasubrahmanyam",
"Sree Krushnadevaraya",
"Sree Krushnadevaraya-Italic",
"Suranna Bold Italic",
"Suranna Bold",
"Suranna Regular",
"Suranna-Italic",
"Suravaram",
"Suravaram-Italic",
"Syamala Ramana",
"TenaliRamakrishna-Regular",
"TimmanaRegular",
];

function FontList(props) {

    const [value, setValue] = useState("");
    const [options, setOptions] = useState([]);

    const onSelect = (data) => {
        props.callback(data);
    };
    
    const onChange = (data) => {
        setValue(data);
    };

    const onSearch = (searchText) => {
        let filteredFonts = []
        if (searchText) {
            filteredFonts = fontList.filter(font => font.toLowerCase().includes(searchText.toLowerCase()))
                                          .map(font => ({ label: <span style={{fontFamily: font, fontSize: 20}}>అ - {font}</span>, value: font }));
        }
        setOptions(filteredFonts);
    }

    return (
    <>
        <AutoComplete 
          value={value}
          options={options}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={onSearch}
          onChange={onChange}
          placeholder="Add Font"
          size="large"
          />
    </>
    )
}

export default FontList;
