import React, {useEffect} from 'react';
import Home from './screens/Home';

const App: React.FC = () => {
  // check for fetching => doesn't download
  useEffect(() => {
    console.log('start useEffect');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(async response => await response.json())
      .then(json => {
        console.log('end fetch');
        console.log(json);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return <Home />;
};

export default App;
