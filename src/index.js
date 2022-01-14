import React, {useState, Component, useEffect} from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button
          onClick={() => setValue((v) => v + 1)}>+</button>
        <button
          onClick={() => setVisible(false)}>hide</button>
        <HookCounter value={value} />
        <ClassCounter value={value} />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
};

class ClassCounter extends Component {

  componentDidMount() {
    console.log('class: mount');
  };

  componentDidUpdate(props) {
    console.log('class: update');
  }

  componentWillUnmount() {
    console.log('class: unmount');
  }

  render() {
    return <p>{this.props.value}</p>
  }
};

const HookCounter = ({ value }) => {

  useEffect(() => {
    console.log('useEffect()');
    return () => console.log('clear');
  }, [ value ]);

  return <p>{value}</p>
};

ReactDOM.render(<App />, document.getElementById('root'));