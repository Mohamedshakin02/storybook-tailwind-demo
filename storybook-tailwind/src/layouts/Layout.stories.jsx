import Layout from "./Layout";

export default {
  title: "Layout/BYD Section",
  component: Layout,
  tags: ["autodocs"],

  argTypes: {
    heading: {
      control: "text",
      description: "Main heading text",
    },

    description: {
      control: "text",
      description: "Description text",
    },

    buttonText: {
      control: "text",
      description: "Button label text",
    },

    flexDirection: {
      control: "radio",
      options: ["row", "row-reverse", "column", "column-reverse"],
      description: "Layout direction",
    },

    headingAlign: {
      control: "radio",
      options: ["left", "center", "right"],
      description: "Alignment of heading/content",
    },

    headingSize: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Heading size",
    },

    descriptionSize: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Description text size",
    },

    headingWeight: {
      control: "radio",
      options: ["light", "normal", "bold"],
      description: "Heading font weight",
    },

    descriptionWeight: {
      control: "radio",
      options: ["light", "normal", "bold"],
      description: "Description font weight",
    },

    descriptionAlign: {
      control: "radio",
      options: ["left", "center", "right"],
      description: "The text alignment of the description",
    },

    buttonVariant: {
      control: "radio",
      options: ["primary", "secondary", "disabled"],
      description: "Button style variant",
    },

    objectFit: {
      control: "radio",
      options: ["cover", "contain", "fill"],
      description: "Image fit style",
    },

    grayscale: {
      control: "boolean",
      description: "Apply grayscale effect to image",
    },

    borderRadius: {
      control: "radio",
      options: ["none", "large", "full"],
      description: "Image border radius",
    },
  },
};

export const Default = {
  args: {
    heading: "Explore BYD Offers",
    headingSize: "lg",
    headingWeight: "normal",
    headingAlign: "left",

    description:
      "Choose between 100% electric or plug-in hybrid vehicles. With BYD, advanced technology, safety, and driving confidence come together to help you build your ideal car.",
    descriptionSize: "md",
    descriptionWeight: "light",
    descriptionAlign: "left",

    flexDirection: "row",
    headingAlign: "left",

    buttonText: "Click Here",
    buttonVariant: "primary",

    objectFit: "cover",
    grayscale: false,
    borderRadius: "none",
  },
};