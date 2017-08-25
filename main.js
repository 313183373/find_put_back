function find_put_back(arr,target) {
    let temp=[];
    while(arr.some(value=>value===target)){
        arr.splice(arr.indexOf(target),1);
        temp.push(target);
    }
    return arr.concat(temp);
}

console.log(find_put_back([0,1,0,3,12],0));