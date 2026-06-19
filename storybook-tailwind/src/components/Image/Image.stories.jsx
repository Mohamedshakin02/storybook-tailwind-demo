import Image from "./Image";

export default {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],

  argTypes: {
    objectFit: {
      control: "radio",
      options: ["cover", "contain", "fill"],
      description: "Controls how the image fits inside the container",
    },

    grayscale: {
      control: "boolean",
      description: "Applies grayscale filter to the image",
    },

    borderRadius: {
      control: "radio",
      options: ["none", "large", "full"],
      description: "Changes the rounded corners of the image",
    },
  },
};

export const Default = {
  args: {
    objectFit: "cover",
    grayscale: false,
    borderRadius: "none",
  },
};

export const Contain = {
  args: {
    objectFit: "contain",
    grayscale: false,
    borderRadius: "none",
  },
};

export const Grayscale = {
  args: {
    objectFit: "cover",
    grayscale: true,
    borderRadius: "none",
  },
};

export const RoundedBorder = {
  args: {
    objectFit: "cover",
    grayscale: false,
    borderRadius: "large",
  },
};