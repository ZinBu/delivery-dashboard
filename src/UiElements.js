import React from 'react'
// import PropTypes from 'prop-types';


export const Button = (props) => {
    return(
        <button className={props.ButtonClassName || ""} onClick={props.onClick}>
            {props.text}
        </button>
    )
}


// Button.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     ButtonClassName: PropTypes.string,
//     text: PropTypes.string.isRequired
// };
