import { useState } from "react";
import "antd/dist/antd.min.css";
import { AutoComplete } from 'antd';

const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});

const searchFontWithFragment = (str) => {
    const fontList = ["Lobster", "Arial", "Times New Roman", "Courier New", "Verdana"];
    const filteredFonts = fontList.filter(font => font.toLowerCase().includes(str.toLowerCase()));
    return filteredFonts.map(font => ({ label: font, value: font }));
}

function FontList(props) {

    const [value, setValue] = useState("");
    const [options, setOptions] = useState([]);

    const onSelect = (data) => {
        console.log('onSelect', data);
        props.callback(data);
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
    </>
    )
}

export default FontList;
