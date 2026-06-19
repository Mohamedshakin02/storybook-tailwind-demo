import Description from "./Description";

export default {
  title: "Components/Description",
  component: Description,
  tags: ["autodocs"],

  argTypes: {
    description: {
      control: "text",
      description: "The description text",
    },

    descriptionSize: {
      control: "",
      options: ["sm", "md", "lg"],
      description: "The text alignment of the description",
    },

    descriptionWeight: {
      control: "radio",
      options: ["light", "normal", "bold"],
      description: "The size of the description text",
    },

    descriptionAlign: {
      control: "radio",
      options: ["left", "center", "right"],
      description: "The text alignment of the description",
    },
  },
};

export const Default = {
  args: {
    description: "Choose between 100% electric or plug-in hybrid vehicles. With BYD, advanced technology, safety, and driving confidence come together to help you build your ideal car.",
    descriptionSize: "md",
    descriptionWeight: "light",
    descriptionAlign: "left",
  },
};

export const Centered = {
  args: {
    description: "Choose between 100% electric or plug-in hybrid vehicles. With BYD, advanced technology, safety, and driving confidence come together to help you build your ideal car.",
     descriptionSize: "md",
    descriptionWeight: "light",
    descriptionAlign: "center",
  },
};

export const Small = {
  args: {
    description: "Choose between 100% electric or plug-in hybrid vehicles. With BYD, advanced technology, safety, and driving confidence come together to help you build your ideal car.",
    descriptionSize: "sm",
    descriptionWeight: "light",
    descriptionAlign: "left",
  },
};


export const Bold = {
  args: {
    description: "Choose between 100% electric or plug-in hybrid vehicles. With BYD, advanced technology, safety, and driving confidence come together to help you build your ideal car.",
    descriptionSize: "md",
    descriptionWeight: "bold",
    descriptionAlign: "left",
  },
};