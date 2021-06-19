function checkNum(){
    let num1 = Number(document.getElementsByTagName("input")[0].value);
    let num2 = Number(document.getElementsByTagName("input")[1].value);

    document.getElementById("e").value = (num1===num2) ? num1 * num2 : num1 + num2;
    console.log(document.getElementById("e").value);
}