const {getMid, getIndWithNum, getRotatedStartInd} = require('./util');


function findRotatedIndex(arr, num) {
    let first = arr[0]; 
    if(first === num) return 0; 

    let midInd = getMid(0, arr.length - 1);
    let mid = arr[midInd]; 
    if(mid === num) return midInd; 

    let last = arr[arr.length - 1]; 
    if(last === num) return arr.length - 1; 
    
    
    if(first < mid){
        if(num > first && num < mid){
            return getIndWithNum(arr, 0, midInd, num); 
        }
    }
    else if(first > mid){
        if(num > first){
            let end = getRotatedStartInd(arr, 0, midInd) - 1; 
            return getIndWithNum(arr, 0, end, num)
        }
        else if(num < mid){
            let start = getRotatedStartInd(arr, 0, midInd); 
            return getIndWithNum(arr, start, midInd, num);
        }
    }
    
    if(mid < last){
        if(num > mid && num < last){
            return getIndWithNum(arr, midInd, arr.length - 1, num);
        }
    }
    else if(mid > last){
        if(num > mid){
            let end = getRotatedStartInd(arr, midInd, arr.length - 1) - 1; 
            return getIndWithNum(arr, midInd, end, num); 
        }
        else if(num < last){
            let start = getRotatedStartInd(arr, midInd, arr.length - 1); 
            return getIndWithNum(arr, start, arr.length - 1, num);
        }
    }

}



module.exports = findRotatedIndex;