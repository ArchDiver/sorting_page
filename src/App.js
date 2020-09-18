import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';
import firebase from '../.firebase';

function App() {
  React.useEffect(() => {
    const [GA, setGA] = React.useState([])

    const fetchData = async() => {
      const db = firebase.firestore()
      const data = await db.collection("my-app-lsc").get()
      setGA(data.docs.map(doc => doc.data()))
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}
export default App;
