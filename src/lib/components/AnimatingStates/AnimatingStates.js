import React, { useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import useForceUpdate from "./useForceUpdate";
import {
  animateRoot,
  animatePrev,
  animateCurrent
} from "./animatingStatesUtils";

const AnimatingStates = React.memo(props => {
  const { animateOnMount, children, duration, state, ...others } = props;

  const forceUpdate = useForceUpdate();

  const updatingRef = useRef(false);
  const previousStateRef = useRef(null);
  const rootRef = useRef();
  const prevRef = useRef();
  const currentRef = useRef();

  const findStateElement = name => {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.find(child => child.props.name === name);
  };

  const renderPrevState = () => {
    if (previousStateRef.current === state) {
      return null;
    }
    const stateElement = findStateElement(previousStateRef.current);
    return stateElement
      ? React.cloneElement(stateElement, { ref: prevRef })
      : null;
  };

  const renderCurrentState = () => {
    const stateElement = findStateElement(state);
    return stateElement
      ? React.cloneElement(stateElement, { ref: currentRef })
      : null;
  };

  useLayoutEffect(() => {
    previousStateRef.current = state;

    if (!animateOnMount && !updatingRef.current) {
      updatingRef.current = true;
      return;
    }

    const prevHeight = prevRef.current ? prevRef.current.offsetHeight : 0;
    const currentHeight = currentRef.current
      ? currentRef.current.offsetHeight
      : 0;

    animateRoot(rootRef, prevHeight, currentHeight, duration, () => {
      previousStateRef.current = state;
      forceUpdate();
    });

    animatePrev(prevRef, duration);

    animateCurrent(currentRef, prevHeight, duration);
  }, [animateOnMount, state, duration, forceUpdate]);

  if (state === null && previousStateRef.current === null) {
    return null;
  }

  return (
    <div {...others} ref={rootRef}>
      {renderPrevState()}
      {renderCurrentState()}
    </div>
  );
});

AnimatingStates.propTypes = {
  animateOnMount: PropTypes.bool,
  children: PropTypes.node,
  duration: PropTypes.number,
  state: PropTypes.string
};

AnimatingStates.defaultProps = {
  animateOnMount: false,
  children: null,
  duration: 200,
  state: null
};

export default AnimatingStates;
