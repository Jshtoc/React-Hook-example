import { useReducer } from "react";

// reducer => state 를 변경하는 로직이 담겨 있는 함수
const reducer = (state, action) => {
  if (action.type === "PLUS") {
    return {
      count: state.count + 1,
    };
  }
  return state;
};

// dispatch => action 객체를 넣어서 실행

// action => 객체이고 필수 프로퍼티로 type 을 가진다.

export default function Example6() {
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // useReducer(reducer는 함수 , 초기값)

  return (
    <div>
      <p>You Clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    dispatch({ type: "PLUS" });
  }
}

// useReducer 는 다수의 하위값을 포함하는 복잡한 state일경우 사용하면 좋다
// 이전 state를 가지고있다가 action과 조합해서 새로운 state를 만드는경우에 이전 state에 의존하는거기 때문에 좋다.
