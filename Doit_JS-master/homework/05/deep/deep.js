let inputString = prompt("문자를 입력해 주세요.");
let value = 0;
for(let i=0; i<inputString.length; i++){

    let num = Number(inputString.substr(i,1));

    if(!isNaN(num)){
        console.log("number :",num);
        value+=num;
    }
}
console.log(value);

let findNum = (str) => {
    let num_arr = [];
    let temp = '';
    for(i in str){
        if(!isNaN(parseInt(str[i]))){
            temp = temp + str[i];
        } else {
            if(temp.trim().length > 0) {
                num_arr.push(parseInt(temp));
                temp = '';
            }
        }
    }
    return num_arr.sort((a,b) =>{
        return a-b;
    });
}