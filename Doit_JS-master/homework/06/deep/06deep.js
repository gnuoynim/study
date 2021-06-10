// 네이버 뉴스 (https://news.naver.com/) 에서, 하위 메뉴 선택시 해당 페이지에서 사용되는 TAG 이름과 갯수를 파싱하여, 객체로 만들어 주는 코드

// tag 이름과 갯수를 을 모두 읽어 온다.
// 반복하면서, 객에체 이름 값으로 저장하고,객체에 있는 이름이면 이름의 카운터를 올려 준다.

console.log(document.all);
let tagName = '';
let tagUseNum = 0;

//window.document.querySelector("*")

document.addEventListener('click', (e) => {
    e.preventDefault(); // 이벤트 전파 방지용 함수
    console.log(e.path[1].href); // 클릭한 값의 url 확인
    (e.path[1].href!==undefined) ? console.log(e.path):console.log("undefined");
});

window.location.href