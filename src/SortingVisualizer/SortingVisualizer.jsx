import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/sortingAlgorithms';
import './SortingVisualizer.css';
import firebase from '../../firebase.json'


const movingColor = 'red'
const baseColor = 'while'

const SPEED = 5;

const num_of_bars = 159;

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }
    componentDidMount() {
        this.resetArray();
    }
    resetArray(){
        const array = [];
        for (let i = 0; i < num_of_bars; i++) {
            array.push(randomIntFromInterval(5,730));
        }
        this.setState({array});
        console.log(array)
    }
    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? movingColor : baseColor;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * SPEED);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * SPEED);
          }
        }
      }


    // testAlgorithms(){
    //     for (let i =0; i < 100; i++){
    //         const array = [];
    //         const length = randomIntFromInterval(1,1000);
    //         for (let i = 0; i < length; i++){
    //             array.push(randomIntFromInterval(-1000,1000));
    //         }
    //         const javaScriptSortedArray = array.slice().sort((a,b) => a - b);
    //         const mergeSortedArray = getMergeSort(array.slice());
    //         console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    //     }
    // }

    render(){
        const {array} = this.state;

        return(
            <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: baseColor,
                  height: `${value}px`,
                }}></div>
            ))}
                <div>
                  <button onClick={() => this.resetArray()}>Generate New array</button>
                  <button onClick={() => this.mergeSort()}>Non-White Percentage Sort</button>
                  <button onClick={() => this.mergeSort()}>Population Sort</button>
                  <button onClick={() => this.mergeSort()}>Merge Sort</button>
                  <button onClick={() => this.mergeSort()}>Merge Sort</button>
                  <button onClick={() => this.mergeSort()}>Merge Sort</button>
                  <button onClick={() => this.mergeSort()}>Merge Sort</button>
                  {/* <button onClick={() => this.quickSort()}>Quick Sort</button>
                  <button onClick={() => this.heapSort()}>Heap Sort</button>
                  <button onClick={() => this.bubbleSort()}>Bubble Sort</button> */}
                  {/* <button onClick={() => this.testAlgorithms()}>Test Algorithms</button> */}
                </div> 
            </div>
        );
    }
}

// from https://www.youtube.com/watch?time_continue=89&v=pFXYym4Wbkc&feature=emb_logo
function randomIntFromInterval(min, max){
    //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function arraysAreEqual(arrayOne, arrayTwo) {
//     if (arrayOne.length !== arrayTwo.length) return false;
//     for (let i = 0; i < arrayOne.length; i++) {
//         if (arrayOne[i] !== arrayTwo[i]) return false;
//     }
//     return true;
// }