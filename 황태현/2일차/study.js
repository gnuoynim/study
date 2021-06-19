const testArr = ['a', 'a', 'b', 'c', 'a', 'b'];

const testObj = {};
const mapArr = testArr.map((item) => {
    testObj[item] ? testObj[item] += 1 : testObj[item] = 1
})

const filterArr = testArr.filter((item) => item === "a")

const reduceArr = testArr.reduce((pre, cur) => {
    pre[cur] ? pre[cur] += 1 : pre[cur] = 1;
    return pre;
}, {})

console.log(mapArr, testObj);
console.log(filterArr);
console.log(reduceArr);