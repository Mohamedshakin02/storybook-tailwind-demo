import React from "react";
import PropTypes from "prop-types";

export default function Heading({
    heading="Explore BYD Offers",
    headingSize="lg",
    headingWeight="normal",
    headingAlign="left"
}) {
    const alignClass =
        headingAlign === "center"
            ? "text-center"
            : headingAlign === "right"
                ? "text-right justify-end"
                : "text-left justify-start";

    const sizeMap = {
        sm: "text-sm",
        md: "text-normal",
        lg: "text-2xl",
    };

    const weightMap = {
        light: "font-light",
        normal: "font-normal",
        bold: "font-bold",
    };


    return (
        <h2
            className={`${sizeMap[headingSize]} ${weightMap[headingWeight]} ${alignClass} my-6 mb-4 capitalize`}
        >
            {heading}
        </h2>
    );
}

Heading.propTypes = {
    heading: PropTypes.string.isRequired,
    headingSize: PropTypes.oneOf(["sm", "md", "lg"]),
    headingWeight: PropTypes.oneOf(["light", "normal", "bold"]),
    headingAlign: PropTypes.oneOf(["left", "center", "right"]),

}