import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  type: "text",
  borderRadius: 2,
  color: "black",
  placeholder: "Enter text",
  bg: "white",
  padding: 2,
};
