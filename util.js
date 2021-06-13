
function getMid(start, end){
    let d = end - start; 
    if(d % 2 === 0){
        return start + (d / 2); 
    }
    else{
        return start + ((d + 1) / 2); 
    }

}


module.exports = {getMid};