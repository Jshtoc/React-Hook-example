import { createRef, useRef, useState } from "react";

export default function Example8() {
  const [value, setValue] = useState("");
  const input1Ref = createRef(); // 항상 래퍼런스를 생성해서 렌더될때마다 넣어줌.
  const input2Ref = useRef(); // 렌더 사이에도 유지해줌.
  // 렌더 사이에 어떤 상태를 유지해주는 경우. 클래스컴포넌트에선 상관없지만 function같은 경우에는 계속 새로 생성되기때문에 상태를 유지하는 경우가 필요하다.

  console.log(input1Ref.current, input2Ref.current);

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={input1Ref}></input>
      {/* controlled ref */}
      <input ref={input2Ref}></input>
      {/* unControlled ref */}
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
