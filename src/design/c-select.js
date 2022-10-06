import React from 'react';
import Select from "react-select";


const CSelect = ({label, onChange,...others}) => {
    return (
        <div className="e-select">
            <label>{label}</label>
            <Select onChange={onChange} {...others}/>
        </div>

    )
}

export default CSelect;