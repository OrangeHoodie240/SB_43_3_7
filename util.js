
function getMid(start, end){
    let d = end - start; 
    if(d % 2 === 0){
        return start + (d / 2); 
    }
    else{
        return start + ((d + 1) / 2); 
    }

}

function getIndWithNum(arr, start, end, num) {
    if (arr[0] === num) return 0;
    let i = getMid(start, end);
    if (arr[i] > num) {
        end = i;
    }
    else if(arr[i] < num) {
        start = i;
    }
    else{
        return i;
    }
    i = getMid(start, end);
    if(arr[i] === num) return i; 

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

function getRotatedStartInd(arr, start, end){
    let mid = getMid(start, end);
    while(true){
        if(arr[start] > arr[mid]){
            if(arr[mid - 1] > arr[mid]){
                return mid; 
            }
            else{
                end = mid; 
            }
        }
        else if(arr[mid] > arr[end]){
            if(arr[end - 1] > arr[end]){
                return end; 
            }
            else{
                start = mid; 
            }
        }

        mid = getMid(start, end);
    }
}


module.exports = {getMid, getIndWithNum, getRotatedStartInd};