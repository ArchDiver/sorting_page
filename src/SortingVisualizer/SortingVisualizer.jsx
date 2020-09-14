import React from 'react';
import { getMergeSort } from '../sortingAlgorithms/sortingAlgorithms';
import './SortingVisualizer.css';


const movingColor = 'red'

const staticColor = 'teal'

const animation_speed_ms = 1;

const num_of_bars = 100;

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
    mergeSort(){
        // const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
        // const sortedArray = mergeSort(this.state.array);
        // console.log(arraysAreEqual(javaScriptSortedArray, sortedArray))
        const animations = getMergeSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? movingColor : staticColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animation_speed_ms);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * animation_speed_ms)
            }
        }     
    }

    quickSort(){}

    heapSort(){}

    bubbleSort(){}

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
            <div className='array-container'>
                {array.map((value, idx) => (
                    <div 
                        className="array-bar" 
                        key={idx} 
                        style={{
                            backgroundColor: staticColor,
                            height: `${value}px`,
                            }}></div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                {/* <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button> */}
                {/* <button onClick={() => this.testAlgorithms()}>Test Algorithms</button> */}
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