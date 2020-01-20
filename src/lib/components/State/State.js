import React from "react";
import PropTypes from "prop-types";

const State = React.memo(
  React.forwardRef((props, ref) => {
    const { children, name, ...others } = props;
    return (
      <div {...others} ref={ref}>
        {children}
      </div>
    );
  })
);

State.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired
};

State.defaultProps = {
  children: null
};

export default State;
