import React, { useState, useEffect } from "react";
import {
  Transition,
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";
import BtnItem from "./BtnItem";

const BtnSelect = () => {
  const [items, setItems] = useState([]);
  const [deletedItem, setDeletedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addItemHandler = () => {
    setItems((prev) => {
      //   if (prev.length === 0) return [1];
      //   const maxNum = prev.reduce((a, c) => (a >= c ? a : c));
      //   const reformedArr = Array(maxNum)
      //     .fill("")
      //     .map((_, i) => (prev.includes(i + 1) ? i + 1 : ""));
      //   const firstStrLocation = reformedArr.indexOf("");
      //   firstStrLocation >= 0 &&
      //     reformedArr.splice(firstStrLocation, 1, firstStrLocation + 1);
      //   if (reformedArr.join("") === prev.join(""))
      //     reformedArr.push(prev.length + 1);
      //   return reformedArr;

      let i = 0;
      if (prev.length === 0) return [1];

      while (i < prev.length) {
        const arrCopy = prev.slice(0);
        if (i + 1 < prev[0] && i === 0) {
          arrCopy.splice(0, 0, 1);
          return arrCopy;
        }
        if (prev[i + 1] > prev[i] + 1) {
          arrCopy.splice(i + 1, 0, prev[i] + 1);
          return arrCopy;
        }
        if (i === prev.length - 1) {
          arrCopy.push(prev[prev.length - 1] + 1);
          return arrCopy;
        }
        i++;
      }
    });
  };

  const toggleModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  const removeItemHandler = (num) => {
    // setItems((prev) => prev.filter((el) => el !== num));

    setItems((prev) => {
      const copy = prev.splice(0);
      copy.splice(num, 1);
      return copy;
    });
  };

  const defaultStyle = {
    transition: `all ${300}ms ease-in-out`,
    opacity: 0,
    visibility: "hidden",
  };

  const transitionStyles = {
    entering: { opacity: 1, visibility: "visible" },
    entered: { opacity: 1, visibility: "visible" },
    exiting: { opacity: 0, visibility: "hidden" },
    exited: { opacity: 0, visibility: "hidden" },
  };

  return (
    <main className="btn-select">
      <CSSTransition
        in={showModal}
        timeout={500}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <div className={`btn-select__overlay`}>
          <div className="btn-select__modal">
            <button
              className="main-btn btn-select__btn"
              onClick={toggleModalHandler}
            >
              Toggle Modal
            </button>
          </div>
        </div>
      </CSSTransition>

      <h1>modal Open</h1>
      <button className="main-btn btn-select__btn" onClick={toggleModalHandler}>
        Toggle Modal
      </button>

      <div className="btn-select__btn-demo">
        <h1>Animating Lists</h1>
        <button className="main-btn btn-select__btn" onClick={addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove</p>
        <ul className="btn-select__list">
          <TransitionGroup className="trans-ul">
            {items.length > 0 &&
              items.map((item, i) => (
                /* <BtnItem
                index={i}
                key={i}
                item={item}
                onRemove={() => {
                  removeItemHandler(item);
                }}
              /> */

                <CSSTransition classNames="trans-item" timeout={300} key={item}>
                  <li
                    key={i}
                    className="btn-select__item"
                    onClick={() => {
                      removeItemHandler(i);
                    }}
                  >
                    <button className="sub-btn">{item}</button>
                  </li>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </ul>
      </div>
    </main>
  );
};

export default BtnSelect;

//   const arr1 = [9182, 5, 2, 10, 2, 9, 3, -1, 6, -123];

//   function sorting(arr, isAsec = true) {
//     let output = [];
//     while (arr.length > 0) {
//       const smallestNum = arr.reduce((a, c) => (a >= c ? c : a));
//       isAsec ? output.push(smallestNum) : output.unshift(smallestNum);
//       const smallestNumIndex = arr.indexOf(smallestNum);
//       arr.splice(smallestNumIndex, 1);
//     }
//     console.log(output);
//   }

//   sorting(arr1, false);
