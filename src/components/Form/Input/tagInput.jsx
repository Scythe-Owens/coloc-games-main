import React, { useState } from "react";
import PropTypes from "prop-types";

function TagInput({ name, label, value, defaultChecked = false }) {
    const [isChecked, setChecked] = useState(defaultChecked);

    return (
        <React.Fragment>
            <input type="checkbox" id={ "tag-input-" + label.toLowerCase().trim() } name={ name } value={ value } checked={ isChecked } onChange={ handleChange } className="form-group-input form-group-tag-input"/>
            <label htmlFor={ "tag-input-" + label.toLowerCase().trim() } className={ "form-group-tag-label" }>{ label }</label>
        </React.Fragment>
    );

    function handleChange() {
        setChecked(!isChecked);
    }
}

TagInput.Prototypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    defaultChecked: PropTypes.bool.isRequired
}

export default TagInput;
