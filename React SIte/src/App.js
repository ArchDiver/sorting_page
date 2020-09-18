import React, {useState} from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';
// import firebase from '../.firebase';

// import 'boottrap/dist/cs/bootstrap.min.css';
// import {Container, Row, Col, Form, Nav, Card, Badge, Button} from 'react-bootstrap';
// import { Confirmation } from './components/Confirmation';
import counties from './static/Georgia-County';

function App() {
  // React.useEffect(() => {
  //   const [GA, setGA] = React.useState([])

  //   const fetchData = async() => {
  //     const db = firebase.firestore()
  //     const data = await db.collection("my-app-lsc").get()
  //     setGA(data.docs.map(doc => doc.data()))
  //   }
  //   fetchData()
  // }, [])
  // const [ordered, setOrdered] = useState();{
  //   setOrdered(true);

  //   setTimeout(() => {
  //     setOrdered(false);
  //   }, 3000);
  // }

  return (
    <>
      {/* <Confirmation /> */}
      {/* <Container> */}
        <div className="App">
          {/* <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Title className="mb-0 font-weight-bold">Sorting Georgia Out</Card.Title> */}
            <SortingVisualizer></SortingVisualizer>
          {/* </Card> */}
        </div>
      {/* </Container> */}
    </>
  );
}
export default App;
