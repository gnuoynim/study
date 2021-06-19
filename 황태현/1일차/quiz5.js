const testObj = {
    a: "1",
    b: "2",
    "안녕": "하세요",
    "ab-tes": "test"
}

 testObj.a = 3;

 testObj = {
     a: 1,
     b: 2
 }

 console.log(testObj.안녕);
 console.log(testObj["ab-tes"]);

