function prevIndexInArray(array, index){
    if(index === 0){
        return array.length -1;
    }else{
        return index-1
    }
}

function nextIndexInArray(array, index){
    if(index === array.length-1){
        return 0;
    }else{
        return index+1
    }
}