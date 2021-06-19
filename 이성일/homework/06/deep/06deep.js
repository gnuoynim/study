// 네이버 뉴스 (https://news.naver.com/) 에서, 하위 메뉴 선택시 해당 페이지에서
// 사용되는 TAG 이름과 갯수를 파싱하여, 객체로 만들어 주는 코드

// tag 이름과 갯수를 을 모두 읽어 온다.
// 반복하면서, 객에체 이름 값으로 저장하고,객체에 있는 이름이면 이름의 카운터를 올려 준다.

document.addEventListener('click', (e) => {
    e.preventDefault(); // 이벤트 전파 방지용 함수
    let url;

    if(e.path[0].href!==undefined) {
        url = e.path[0].href;
    }
    else if(e.path[1].href!==undefined){
        url = e.path[1].href;
    }
    else{
        console.log("No Link :",e);
    }
    getTargetDocument(url)
    // 클릭한 값의 url 확인, 빈값일 경우 아래 함수를 실행 하지 않는 형식으로 구조
});


///테스트 커밋

async function getTargetDocument(url) {
    // HTML URL 데이터 획득을 위한 XMLHttpRequest...
    let target = new XMLHttpRequest();
    target.onreadystatechange = function() {
        if(target.readyState === 4 && target.status === 200) {
            const parser = new DOMParser(); // 문자열을 html 형식으로 변환 해주는 객체
            const doc = parser.parseFromString(target.responseText, "text/html");
            documentTagParser(doc);
        }
    }
    //oepn 은 단순히 접속 설정
    target.open("GET", url, false); // async : true는 비동기, false는 동기(send 응담까지 대기)
    // send는 open에서 작성한 설정을 기준으로, 서버에 요청을 보냄
    target.send();
}

function documentTagParser(document){
    const documentList = document.all;
    let documnetTag = [];
    let documentTagCount = {};

    for (let i in document.all){
        if(documentList[i].nodeName !== undefined){
            const tagName = (documentList[i].nodeName).toLowerCase();
            if(documnetTag.includes(tagName)) {
                documentTagCount[tagName]++
            }
            else{
                documentTagCount[tagName] = 1;
            }
            documnetTag.push(tagName);

        }
    }
    console.log(documentTagCount);
}

/*
*  XMLHttpRequest 학습
* xhr.onreadystatechange : 동기와 네이티브 코드(실행파일,컴파일과정이 없는 코드) 에서 사용하면 안됨 근데 이게 뭐지..?
* xhr.status : URL 접근 결과를 나타냄,
*              UNSENT: 0
               OPENED: 0
               LOADING: 200
               DONE: 200
  xhr.readyState : XML 전체 상태 Cehck qustn
          * 0	UNSENT	Client has been created. open() not called yet.
            1	OPENED	open() has been called.
            2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
            3	LOADING	Downloading; responseText holds partial data.
            4	DONE	The operation is complete.
*
* */
