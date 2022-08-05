import { useState, useEffect } from "react";
import { Transition, CSSTransition } from "react-transition-group";

const BtnItem = (props) => {
  const index = props.index;
  const [showBtn, setShowBtn] = useState(true);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    setShowBtn(true);
  }, []);

  const removeItemHandler = () => {
    props.onRemove(index);
    setShowBtn(false);
  };

  const duration = 300;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 1,
    transform: "translateX(0%)",
  };

  const transitionStyles = {
    entering: { opacity: 1, transform: "translateX(-100%)" },
    entered: { opacity: 1, transform: "translateX(0%)" },
    exiting: { opacity: 0, transform: "translateX(0%)" },
    exited: { opacity: 0, transform: "translateX(100%)" },
  };

  return (
    // <CSSTransition
    //   in={showBtn}
    //   timeout={100}
    //   classNames="my-node"
    //   unmountOnExit
    //   mountOnEnter
    // >
    //   {(state) => (
    <li className="btn-select__item">
      <button className="sub-btn" onMouseDown={removeItemHandler}>
        {props.item}
      </button>
    </li>
    //   )}
    // </CSSTransition>
  );
};

export default BtnItem;
