const removeFromArray = function(arr, ...args) {
    // let newArray = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i] !== arg){
    //         newArray.push(arr[i]);
    //     }       
    // }

    // return newArray;

    let newArr = [];

    arr.forEach(item => {
        if(!args.includes(item)){
            newArr.push(item);
        }
    });

    // for(let i=0; i<arr.length; i++){
    //     if(!args.includes(arr[i])){
    //         newArr.push(arr[i]);
    //     }
    // }

    console.log(newArr);
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
