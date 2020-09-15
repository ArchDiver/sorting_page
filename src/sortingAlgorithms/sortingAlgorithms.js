
// http://pythontutor.com/javascript.html#code=function%20mergeSort%28array%29%20%7B%0A%20%20%20%20if%20%28array.length%20%3D%3D%3D1%29%20return%20array%3B%0A%20%20%20%20const%20middleIdx%20%3D%20Math.floor%28array.length%20/%202%29%3B%0A%20%20%20%20const%20firstHalf%20%3D%20mergeSort%28array.slice%280,%20middleIdx%29%29%3B%0A%20%20%20%20const%20secondHalf%20%3D%20mergeSort%28array.slice%28middleIdx%29%29%3B%0A%20%20%20%20const%20sortedArray%20%3D%20%5B%5D%3B%0A%20%20%20%20let%20i%20%3D%200,%20j%20%3D%200%3B%0A%20%20%20%20while%20%28i%20%3C%20firstHalf.length%20%26%26%20j%20%3C%20secondHalf.length%29%20%7B%0A%20%20%20%20%20%20if%20%28firstHalf%5Bi%5D%20%3C%20secondHalf%5Bj%5D%29%7B%0A%20%20%20%20%20%20%20%20console.log%28firstHalf%5Bi%5D%29%3B%0A%20%20%20%20%20%20%20%20sortedArray.push%28firstHalf%5Bi%2B%2B%5D%29%3B%0A%20%20%20%20%20%20%20%20console.log%28firstHalf%5Bi%5D%29%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20console.log%28secondHalf%5Bj%5D%29%3B%0A%20%20%20%20%20%20%20%20sortedArray.push%28secondHalf%5Bj%2B%2B%5D%29%3B%0A%20%20%20%20%20%20%20%20console.log%28secondHalf%5Bj%5D%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20while%20%28i%20%3C%20firstHalf.length%29%20sortedArray.push%28firstHalf%5Bi%2B%2B%5D%29%3B%0A%20%20%20%20while%20%28j%20%3C%20secondHalf.length%29%20sortedArray.push%28secondHalf%5Bj%2B%2B%5D%29%3B%0A%20%20%20%20return%20sortedArray%3B%0A%7D%0A%0AmergeSort%28%5B-5,6,3,7,2,20%5D%29&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D
// export const mergeSort = array => {
//     if (array.length ===1) return array;
//     const middleIdx = Math.floor(array.length / 2);
//     const firstHalf = mergeSort(array.slice(0, middleIdx));
//     const secondHalf = mergeSort(array.slice(middleIdx));
//     const sortedArray = [];
//     let i = 0, j = 0;
//     while (i < firstHalf.length && j < secondHalf.length) {
//         if (firstHalf[i] < secondHalf[j]){
//             sortedArray.push(firstHalf[i++]);            
//         } else {
//             sortedArray.push(secondHalf[j++]);
//         }
//     }
//     while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
//     while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
//     return sortedArray;
// export function getMergeSortAnimations(array) {
//     const animations = [];
//     if (array.length <= 1) return array;
//     const auxArray = array.slice();
//     mergeSortHelper(array, 0, array.length - 1, auxArray, animations);
//     return animations;
// }

// function mergeSortHelper(mainArray, startIdx, endIdx, auxArray, animations){
//     if (startIdx === endIdx) return;
//     const middleIdx = Math.floor((startIdx + endIdx) / 2);
//     mergeSortHelper( auxArray, startIdx, middleIdx, mainArray, animations);
//     mergeSortHelper(auxArray, middleIdx + 1, endIdx, mainArray, animations);
//     doMerge(mainArray, startIdx, middleIdx, endIdx, auxArray, animations);
// }

// function doMerge(mainArray, startIdx, middleIdx, endIdx, auxArray, animations) {
//     let k, i = startIdx;
//     let j = middleIdx + 1;
//     while (i <= middleIdx && j <= endIdx) {
        
//         animations.push([i, j]); // comparing and changing color
//         animations.push([i, j]); //comparing and reverting color
//         if (auxArray[i] <= auxArray[j]) {
//             animations.push([k, auxArray[i]]); 
//             mainArray[k++] = auxArray[i++]; // overwrite index[k] in the origin with i
//         }else {
//             animations.push([k, auxArray[j]]);
//             mainArray[k++] = auxArray[j++]; // overwrite index[k] in the origin with j
//         }
//     }
//     while(i <= middleIdx) {
//         animations.push([i, i]); // values compared then pushed with color change
//         animations.push([i, i]);// second push to revert color
//         animations.push([k, auxArray[i]]); 
//         mainArray[k++] = auxArray[i++]; // overwrite main[k] with aux[i]
//     }
//     while (j <= endIdx) {
//         animations.push([j, j]); // values compared then pushed with color change
//         animations.push([j, j]);// second push to revert color
//         animations.push([k, auxArray[j]]); 
//         mainArray[k++] = auxArray[j++]; // overwrite main[k] with aux[j]
//     }
// }
export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }