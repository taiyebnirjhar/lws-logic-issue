//  select dom elements

const incrementEle = document.getElementById("increment");
const decrementEle = document.getElementById("decrement");
const counterEle = document.getElementById("counter");

//  action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators

const increment = (value = 1) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value = 1) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// initial state
const initialState = {
  value: 0,
  name: "taiyeb",
};

// state ==> reducer function ==> action  ==> store ==> dispatch ==> render

// reducer function
function counterReducer(state = initialState, action) {
  // if (action.type === INCREMENT) {
  //   return {
  //     ...state,
  //     value: state.value + action.payload,
  //   };
  // }
  if (action.type === INCREMENT) {
    state.value = state.value + action.payload;
    return state;

    // return {
    //   // ...state,
    //   value: state.value + action.payload,
    // };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// redux store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  console.log(state);
  counterEle.innerText = state.value.toString();
};

// update ui initially
render();

store.subscribe(render);

// event listner
incrementEle.addEventListener("click", () => {
  store.dispatch(increment(5));
  //   dispatch recvies an action ==>> which is an object
});

decrementEle.addEventListener("click", () => {
  store.dispatch(decrement(5));
});
