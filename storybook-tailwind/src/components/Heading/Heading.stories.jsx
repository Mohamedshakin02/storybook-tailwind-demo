import Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],

  argTypes: {
    heading: {
      control: "text",
      description: "The heading text",
    },

    headingSize: {
      control: "",
      options: ["sm", "md", "lg"],
      description: "The text alignment of the heading",
    },

    headingWeight: {
      control: "radio",
      options: ["light", "normal", "bold"],
      description: "The size of the heading text",
    },

    headingAlign: {
      control: "radio",
      options: ["left", "center", "right"],
      description: "The text alignment of the heading",
    },
  },
};

export const Default = {
  args: {
    heading: "Explore BYD Offers",
    headingSize: "lg",
    headingWeight: "normal",
    headingAlign: "left",
  },
};

export const Centered = {
  args: {
    heading: "Explore BYD Offers",
    headingSize: "lg",
    headingWeight: "normal",
    headingAlign: "center",
  },
};

export const Small = {
  args: {
    heading: "Explore BYD Offers",
    headingSize: "sm",
    headingWeight: "normal",
    headingAlign: "left",
  },
};


export const Bold = {
  args: {
    heading: "Explore BYD Offers",
    headingSize: "lg",
    headingWeight: "bold",
    headingAlign: "left",
  },
};