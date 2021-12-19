import React from "react";

export default function withHasMounted(Component) {
  class NewComponent extends React.Component {
    state = {
      hasMounted: false,
    };
    render() {
      const { hasMounted } = this.state;
      return <Component {...this.props} hasMounted={hasMounted} />;
      // unrelated props 는 그냥 통과시켜줘야 하므로 NewComponent에 있는 this.props를 통과시켜줘야한다.
    }
    componentDidMount() {
      this.setState({ hasMounted: true });
    }
  }

  NewComponent.displayName = `withHasMounted(${Component.name})`;
  // displayName 을 하는 이유는 디버깅할때 좋음 설정안할경우 undefined

  return NewComponent;
}
