import React from "react";
import PropTypes from "prop-types";

export default function Button({ buttonText="Learn More", buttonVariant="secondary" }) {
    const buttonStyles = {
        primary: "border border-black bg-black text-white",
        secondary: "border border-black bg-white text-black",
        disabled: "border border-gray-400 bg-gray-200 text-gray-500 cursor-not-allowed",
    };

    return (
        <button className={`py-3 px-12 uppercase font-medium text-sm mb-4 ${buttonStyles[buttonVariant]}`}
            disabled={buttonVariant === "disabled"}>
            {buttonText}
        </button>
    );
}

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonVariant: PropTypes.oneOf(["primary", "secondary", "disabled"]),
}