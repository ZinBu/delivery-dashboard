import React from 'react'
import PropTypes from 'prop-types';

const greyButtonColor = {"background": "grey"}

export const Button = (props) => {
    return(
        <button 
            disabled={props.disabled}
            className={props.ButtonClassName || ""} 
            onClick={props.onClick}
            style={props.disabled ? greyButtonColor: null}
        >
            {props.children}
        </button>
    )
}


Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    ButtonClassName: PropTypes.string,
    disabled: PropTypes.bool.isRequired
};
