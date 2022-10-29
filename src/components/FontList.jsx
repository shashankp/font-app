import { useState } from "react";
import "antd/dist/antd.min.css";
import { AutoComplete } from 'antd';

const fontList = ["Lobster", "Arial",
"Chathura-Bold",
"Chathura-ExtraBold",
"Chathura-Light",
"Chathura-Regular",
"Chathura-Thin",
"JIMS-Italic",
"JIMS",
"LakkiReddy",
"Mandali-Bold",
"Mandali-BoldItalic",
"Mandali-Italic",
"Mandali-Regular",
"Peddana-Regular",
"Ponnala",
"Potti Sreeramulu",
"Ramabhadra-Italic",
"Ramabhadra-Regular",
"RamaneeyaWin",
"Ramaraja-Regular",
"RaviPrakash",
"SPBalasubrahmanyam",
"TenaliRamakrishna-Regular",
"TimmanaRegular",
"Annamayya",
"AnnamayyaBold",
"AnnamayyaBoldItalic",
"AnnamayyaItalic",
"Dhurjati-Italic",
"Dhurjati",
"Gidugu-Italic",
"Gidugu",
"Gurajada-Italic",
"Gurajada",
"JIMS-Italic",
"JIMS",
"KanakaDurga-Italic",
"KanakaDurga",
"Lobster_1.3",
"Mallanna-Italic",
"Mallanna",
"Mandali-Bold Italic",
"Mandali-Bold",
"Mandali-Italic",
"Mandali-Regular",
"Nandakam Regular",
"NATS-Italic",
"NATS",
"NTR-Italic",
"NTR",
"Potti Sreeramulu",
"Purushothamaa-Italic",
"Purushothamaa",
"PVNR",
"Ramabhadra-Italic",
"Ramabhadra-Regular",
"SPBalasubrahmanyam",
"Sree Krushnadevaraya-Italic",
"Sree Krushnadevaraya",
"Suranna Bold Italic",
"Suranna Bold",
"Suranna Regular",
"Suranna-Italic",
"Suravaram-Italic",
"Suravaram",
"Syamala Ramana",
];

const searchFontWithFragment = (str) => {
    const filteredFonts = fontList.filter(font => font.toLowerCase().includes(str.toLowerCase()));
    return filteredFonts.map(font => ({ label: font, value: font }));
}

function FontList(props) {

    const [value, setValue] = useState("");
    const [options, setOptions] = useState([]);

    const onSelect = (data) => {
        console.log('onSelect', data);
        props.callback(data);
        setValue("");
    };
    
    const onChange = (data) => {
        setValue(data);
    };

    const onSearch = (searchText) => {
        setOptions(
            !searchText ? [] : searchFontWithFragment(searchText),
          );
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
          />
          {/* TODO: preview font in dropdown */}
    </>
    )
}

export default FontList;
