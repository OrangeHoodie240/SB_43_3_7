const { getMid } = require('./util');

function sortedFrequency(arr, num) {
    let end = arr.length - 1;
    let start = 0;
    
    if (arr[start] === num && arr[end] === num) {
        return arr.length;
    }

    let i = getMid(start, end);
    if (arr[i] !== num) {
        i = getIndWithNum(arr, start, end, num);
        if(i === -1){
            return i; 
        }
    }

    let li = null; 
    let ri = null; 
    if(i === 0){
        li = 0;
    }
    else{
        li = getIndLeftOfNum(arr, i, num);
    }
    
    if(i === arr.length - 1){
        ri = i;
    }
    else{
        ri = getIndRightOfNum(arr, i, num);
    }

    return Math.abs(ri - li) + 1;
}

function getIndLeftOfNum(arr, i, num){
    let seekingNum = false;
    let start = 0; 
    let end = i;  
    i = getMid(start, end);
    while(true){
        if(seekingNum && arr[i] === num){
            if(arr[i - 1] !== num){
                return i; 
            }
            else{
                seekingNum = false; 
                end = i; 
            }
        }
        else if(!seekingNum && arr[i] !== num){
            if(arr[i + 1] === num){
                return i + 1; 
            }
            else{
                seekingNum = true; 
                start = i; 
            }
        }
        else if(seekingNum){
            start = i; 
        }
        else{
            end = i; 
        }
        i = getMid(start, end);
    } 

}

function getIndRightOfNum(arr, i, num){
    let seekingNum = false;
    let start = i; 
    let end = arr.length - 1;  
    i = getMid(start, end);
    while(true){
        if(seekingNum && arr[i] === num){
            if(arr[i + 1] !== num){
                return i; 
            }
            else{
                seekingNum = false; 
                start = i; 
            }
        }
        else if(!seekingNum && arr[i] !== num){
            if(arr[i - 1] === num){
                return i - 1; 
            }
            else{
                seekingNum = true; 
                end = i; 
            }
        }
        else if(seekingNum){
            end = i; 
        }
        else{
            start = i; 
        }
        i = getMid(start, end);
    } 
}

function getIndWithNum(arr, start, end, num) {
    if (arr[0] === num) return 0;
    let i = getMid(start, end);
    if (arr[i] > num) {
        end = i;
    }
    else {
        start = i;
    }
    i = getMid(start, end);

    while (true) {
        let initialI = i; 
        if (arr[i] === num) {
            return i;
        }
        else if (arr[i] < num) {
            start = i;
        }
        else if(arr[i] > num) {
            end = i;
        }
        i = getMid(start, end);
        if(initialI === i){
            return -1; 
        }
    }
}

module.exports = sortedFrequency