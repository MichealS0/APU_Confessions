import React, {useState, useEffect} from 'react';

function App() {
  const [confession, setConfession] = useState(null);

  useEffect(() => {
    fetch('localhost:8800/ConfessionsMain')
    .then((response) => response.json())
    .then((data) => {
      setConfession(data[0].confession);
      console.log(data)
    })
    .catch((error) => console.log(error));
  })

  return (
    <div>
      <h1>{confession}</h1>
    </div>
  );
}

export default App;
