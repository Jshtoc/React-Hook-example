# React Hook

Functional Component = Stateless Component
= Stateless Functional Component

Functional Component != Stateless Component
because State hook

왜 useState 가 도입이 된건가?

- 컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵다.
  - 컨테이너 방식 말고(props 이용해서 재사용), 상태와 관련된 로직
- 복잡한 컴포넌트들은 이해하기 어렵다.(사람이)
- Class 는 사람과 기계를 혼동시킨다.
  - 컴파일 단계에서 코드를 최적화하기 어렵게 만든다.
- this.state 는 로직에서 렌더 사이에 레퍼런스를 공유하기 때문에 문제가 발생할 수 있다.
