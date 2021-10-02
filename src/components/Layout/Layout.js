import React from "react";
import PropTypes from "prop-types";
function Layout({ direction, wrap, gap, children, childWidth = 50 }) {
  const style = {
    display: "flex",
    flexDirection: direction,
    flexWrap: wrap ? "wrap" : "nowrap",
    gap: `${gap * 0.2}rem`,
  };

  return <div style={style}>{children}</div>;
}
Layout.propTypes = {
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "column"]),
  gap: PropTypes.number,
  childWidth: PropTypes.number,
};
export default Layout;
