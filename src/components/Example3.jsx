import React from "react";

// useState => count
// useState => {count : 0};
export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });
  return (
    <div>
      <p>You Clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setState((state) => ({
      count: state.count + 1,
    }));
  }

  // setState만 사용하는게 아니라 setState가 어떤 것에 의존해서 사용하고 있는지 중요함.
  // 따른 훅들과 사용하게 되면 Dependency가 들어가게 되는데
  // setState안에서 인자로 받은것을 다시 새로운 state로 변경해서 리턴하게 되면 외부에 만들어 놓은 state에 의존하지 않게된다.
}
