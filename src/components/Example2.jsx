import React from "react";

// class Example1 extends React.Component {
//   state = { count: 0 }; // 객체상태의 state

//   render() {
//     const { count } = this.state;

//     return (
//       <div>
//         <p>You Clicked {count} times</p>
//         <button onClick={this.click}>Click me</button>
//       </div>
//     );
//   }

//   click = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
// }

export default function Example2() {
  const [count, setCount] = React.useState(0); // 위 객체 카운트의 초기값과 같다고 생각하면 된다.
  // const 뒤 배열의 앞 인덱스는 실제 useState의 카운트가 업데이트됬을때의 값 = count
  // 뒤 인덱스는 count를 바꾸는 함수
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={click}>Click me</button>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> 로 하게되면 아래 function click은 필요없다.*/}
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
