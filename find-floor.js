const { getMid } = require('./util');

function findFloor(arr, num) {
    let start = 0; 
    let end = arr.length - 1; 

    if(arr[start] > num){
        return -1; 
    }
    else if(arr[end] < num){
        return arr[end];
    }


    let i = getMid(start, end); 
    while(true){
            if(arr[i] > num){
                if(arr[i - 1] < num){
                    return arr[i - 1]; 
                }
                end = i; 
            }
            else if(arr[i] < num){
                if(arr[i + 1] > num){
                    return arr[i + 1]; 
                }
                start = i;
            }
            i = getMid(start, end); 
    }
}

module.exports = findFloor;