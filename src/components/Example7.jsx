import { useCallback, useMemo, useState } from "react";

function sum(persons) {
  console.log("sum...");

  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}
export default function Example7() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "Mark", age: 39 },
    { name: "Seung-ho", age: 26 },
  ]);

  const count = useMemo(() => {
    return sum(persons);
  }, [persons]); // 저장소 개념

  const click = useCallback(() => {
    console.log("useCallback", value);
  }, []); // useEffect componetDidMount의 최초에만 이함수가 생성되게 하는 방식
  // dependency array에 의존해서 필요시에만 부르는 함수 = useCallback

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
