import Layout from "./Layout";

export default {
  title: "Layout/Layout",
  component: Layout,
  argTypes: {
    noOfChildren: {
      type: "number",
      defaultValue: 4,
    },
  },
};

const Template = ({ noOfChildren, childWidth, ...args }) => (
  <Layout {...args}>
    {[...Array(noOfChildren).keys()].map((key) => (
      <div
        key={key}
        style={{
          background: "red",
          width: `${childWidth}px`,
          height: `${childWidth}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        {key + 1}
      </div>
    ))}
  </Layout>
);

export const FlexRow = Template.bind({});
FlexRow.args = {
  gap: 2,
  direction: "row",
  wrap: true,
};
