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
    setItems((arr) => {
      //   if (arr.length === 0) return [1];
      //   const maxNum = arr.reduce((a, c) => (a >= c ? a : c));
      //   const reformedArr = Array(maxNum)
      //     .fill("")
      //     .map((_, i) => (arr.includes(i + 1) ? i + 1 : ""));
      //   const firstStrLocation = reformedArr.indexOf("");
      //   firstStrLocation >= 0 &&
      //     reformedArr.splice(firstStrLocation, 1, firstStrLocation + 1);
      //   if (reformedArr.join("") === arr.join(""))
      //     reformedArr.push(arr.length + 1);
      //   return reformedArr;

      let i = 0;
      if (arr.length === 0) return [1];

      while (i < arr.length) {
        const arrCopy = arr.slice(0);
        if (arr[0] > 1 && i === 0) {
          arrCopy.splice(0, 0, 1);
          return arrCopy;
        }
        if (arr[i + 1] > arr[i] + 1) {
          arrCopy.splice(i + 1, 0, arr[i] + 1);
          return arrCopy;
        }
        if (i === arr.length - 1) {
          arrCopy.push(arr[arr.length - 1] + 1);
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
        <TransitionGroup className="btn-select__list" component="ul">
          {items.length > 0 &&
            items.map((item, i) => (
              <CSSTransition classNames="trans-item" timeout={300} key={item}>
                <li
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
