const {getMid} = require('./util'); 

function countZeroes(arr) {
    let searching = true; 
    let end = arr.length - 1; 
    let start = 0;
    let i = getMid(start, end);
    let seeking = null; 
    if(arr[i] === 0){
        seeking = 1;
        end = i; 
        i =getMid(start, end);
    }
    else{
        seeking = 0;
        start = i; 
        i = getMid(start, end);
    }

    let foundIndex = null;
    while(searching){
        if(arr[i] === seeking){
            if(seeking === 0){
                if(arr[i-1] === 1){
                    foundIndex = i; 
                    searching = false;
                }
                else{
                    seeking = 1; 
                    end = i; 
                    i = getMid(start, end);
                }
            }
            else{
                if(arr[i + 1] === 0){
                    foundIndex = i + 1; 
                    searching = false; 
                }
                else{
                    seeking = 0;
                    start = i;  
                    i = getMid(start, end);
                }
            }
        }
        else{
            if(seeking === 0){
                start = i; 
                i = getMid(start, end);
            }
            else{
                end = i; 
                i = getMid(start, end);
            }
        }
        if(i === arr.length - 1 && seeking === 0){
            return (arr[i] === 0) ? 1 : 0;
        }
        else if(start === 0 && end === 1 && i === 1){
            if(arr[0] === 1){
                return arr.length - 1; 
            }
            else{
                return arr.length; 
            }
        }
    }
    return Math.abs(foundIndex - arr.length);
}



module.exports = countZeroes;