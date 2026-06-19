import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    buttonText: {
      control: "text",
      description: "Text displayed inside the button",
    },

    buttonVariant: {
      control: "radio",
      options: ["primary", "secondary", "disabled"],
      description: "Select the button style",
    },
  },
};

export const Default = {
    args: {
    buttonText: "Click Here",
    buttonVariant: "secondary",
  },
}

export const Primary = {
  args: {
    buttonText: "Click Here",
    buttonVariant: "primary",
  },
};

export const Secondary = {
  args: {
    buttonText: "Learn More",
    buttonVariant: "secondary",
  },
};

export const Disabled = {
  args: {
    buttonText: "Learn More",
    buttonVariant: "disabled",
  },
};