import React from 'react'
import PropTypes from 'prop-types';


export const Button = (props) => {
    const disabled = props.isDisabled || false
    const greyButtonColor = {"background": "grey"}
    return(
        <button 
            disabled={disabled} 
            className={props.ButtonClassName || ""} 
            onClick={props.onClick}
            style={disabled ? greyButtonColor: null}
        >
            {props.text}
        </button>
    )
}


Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    ButtonClassName: PropTypes.string,
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired
};
