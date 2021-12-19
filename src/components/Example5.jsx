import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount");

    return () => {
      // cleanup
      // componentWillUnmount
    };
  }, []);
  // 함수뒤에 배열을 넣을경우 최초에만 실행이 되는걸 의미.
  // 순차적으로 실행하는 동기 방식
  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      // cleanup
      console.log("cleanup by count", count);
    };
  }, [count]);
  // useEffect는 componentDidMount와 componentDidUpdate를 실행하는데 리턴되고나서 계속 랜더될때마다 이 함수를 실행해달라는 뜻.
  // 리렌더링 될때 return값에 있는것을 먼저 실행한뒤에 useEffect안의 내용이 실행된다.

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
