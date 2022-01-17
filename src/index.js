import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button
          onClick={() => setValue((v) => v + 1)}>+</button>
        <button
          onClick={() => setVisible(false)}>hide</button>
        <PlanetInfo id={value} />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
};

const PlanetInfo = ( {id} ) => {

  const [planet, setPlanet] = useState('Planet Name');

  useEffect(() => {
    let cancelled = false;
    fetch(`https://www.swapi.tech/api/planets/${id}`)
      .then(res => res.json())
      .then(data => !cancelled && setPlanet(data.result.properties.name));
    return () => cancelled = true;
  }, [id]);

  return (
    <div>{id} - {planet}</div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));