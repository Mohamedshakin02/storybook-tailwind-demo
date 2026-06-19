import React from "react";
import PropTypes from "prop-types";
import byd from "../assets/byd.jpg";

import Image from "../components/Image/Image";
import Heading from "../components/Heading/Heading";
import Description from "../components/Description/Description";
import Button from "../components/Button/Button";

export default function Layout({
    flexDirection = "row",

    heading = "Explore BYD Offers",
    description = "Choose between 100% electric or plug-in hybrid vehicles. With BYD, advanced technology, safety, and driving confidence come together to help you build your ideal car.",

    buttonText = "Learn more",

    headingSize = "lg",
    descriptionSize = "md",

    headingWeight = "normal",
    descriptionWeight = "light",

    headingAlign = "left",
    descriptionAlign = "left",

    buttonVariant = "primary",

    objectFit = "cover",
    grayscale = false,
    borderRadius = "none"

}) {
    const directionClass =
        flexDirection === "column"
            ? "flex-col"
            : flexDirection === "row-reverse"
                ? "flex-row-reverse"
                : flexDirection === "column-reverse"
                    ? "flex-col-reverse"
                    : "flex-row";

    const alignClass =
        headingAlign === "center"
            ? "text-center"
            : headingAlign === "right"
                ? "text-right justify-end"
                : "text-left justify-start";

    return (
        <section className={`w-full h-full flex font-sans ${directionClass}`}>

            {/* IMAGE */}
            <div className="w-full">
                <Image
                    objectFit={objectFit}
                    grayscale={grayscale}
                    borderRadius={borderRadius}
                />
            </div>

            {/* CONTENT */}
            <div className={`w-full flex items-center`}>
                <div className="px-6 md:px-8 pb-8">

                    {/* HEADING */}
                    <Heading
                        heading={heading}
                        headingSize={headingSize}
                        headingWeight={headingWeight}
                        headingAlign={headingAlign}
                    />

                    <Description
                        description={description}
                        descriptionSize={descriptionSize}
                        descriptionWeight={descriptionWeight}
                        descriptionAlign={descriptionAlign}
                    />

                    {/* BUTTON */}
                    <Button
                        buttonText={buttonText}
                        buttonVariant={buttonVariant}
                    />

                </div>
            </div>

        </section>
    );
}

Layout.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,

    flexDirection: PropTypes.oneOf([
        "row",
        "row-reverse",
        "column",
        "column-reverse",
    ]),

    headingAlign: PropTypes.oneOf(["left", "center", "right"]),

    descriptionAlign: PropTypes.oneOf(["left", "center", "right"]),

    headingSize: PropTypes.oneOf(["sm", "md", "lg"]),
    descriptionSize: PropTypes.oneOf(["sm", "md", "lg"]),

    headingWeight: PropTypes.oneOf(["light", "normal", "bold"]),
    descriptionWeight: PropTypes.oneOf(["light", "normal", "bold"]),

    buttonVariant: PropTypes.oneOf(["primary", "secondary", "disabled"]),

    objectFit: PropTypes.oneOf(["cover", "contain", "fill"]),
    grayscale: PropTypes.bool,
    borderRadius: PropTypes.oneOf(["none", "large", "full"]),
};