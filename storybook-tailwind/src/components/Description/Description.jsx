import React from "react";
import PropTypes from "prop-types";

export default function description({
    description="Choose between 100% electric or plug-in hybrid vehicles. With BYD, advanced technology, safety, and driving confidence come together to help you build your ideal car.",
    descriptionSize="md",
    descriptionWeight="light",
    descriptionAlign="left"
}) {
    const alignClass =
        descriptionAlign === "center"
            ? "text-center"
            : descriptionAlign === "right"
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
        <p
            className={`${sizeMap[descriptionSize]} ${weightMap[descriptionWeight]} ${alignClass} mb-9`}
        >
            {description}
        </p>
    );
}

description.propTypes = {
    description: PropTypes.string.isRequired,
    descriptionSize: PropTypes.oneOf(["sm", "md", "lg"]),
    descriptionWeight: PropTypes.oneOf(["light", "normal", "bold"]),
    descriptionAlign: PropTypes.oneOf(["left", "center", "right"]),

}