import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

//make the story interactible

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({}); //make a copy
Primary.args = {
  label: "Button",
  bg: "red",
  color: "white",
  size: "medium",
  borderRadius: 0,
};

export const Secondary = Template.bind({}); //make a copy

Secondary.args = {
  ...Primary.args,
  color: "purple",
  bg: "#ecded9",
};

export const Success = Template.bind({}); //make a copy
Success.args = {
  ...Primary.args,
  bg: "green",
};
