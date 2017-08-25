function find_put_back(arr,target) {
    let cnt=0;
    arr=arr.filter(value=>{
        if(value===target){
            cnt++;
            return false;
        }
        return true;
    });
    while(cnt--){
        arr.push(target);
    }
    return arr;
}

console.log(find_put_back([0,1,0,3,12],0));