import React from "react";
import PropTypes from "prop-types";
import byd from "../../assets/byd.jpg";


export default function Image({
    objectFit = "cover",
    grayscale = false,
    borderRadius = "none"
}) {

    const objectFitClass = {
        cover: "object-cover",
        contain: "object-contain",
        fill: "object-fill",
    };

    const radiusClass = {
        none: "rounded-none",
        large: "rounded-4xl",
        full: "rounded-full",
    };

    return (
        <img src={byd} alt="BYD" className={`
        w-full h-full
        ${objectFitClass[objectFit]}
        ${radiusClass[borderRadius]}
        ${grayscale ? "grayscale" : ""}
      `} />
    );
}

Image.propTypes = {
    objectFit: PropTypes.oneOf(["cover", "contain", "fill"]),
    grayscale: PropTypes.bool,
    borderRadius: PropTypes.oneOf(["none", "large", "full"]),
};