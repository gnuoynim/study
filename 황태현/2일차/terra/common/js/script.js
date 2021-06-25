$(function(){
    // 변수 선언 ---> 전역변수
    var $menu = $('#gnb .m'),
        $sec = $('.sec');
    
    console.log($menu); // 배열형태로 [li.m, li.m, li.m, li.m]
    console.log($sec); // 배열형태로 [section.sec, section.sec, section.sec, section.sec]
    
    // 1. menu 클릭시 윈도우 스크롤 시킨다. 
    $menu.on('click','a',function(){
        console.log('a태그가 클릭되었습니다.');
        console.log( $(this)  ); // [a]태그 
        
        var $target = $(this).parent(), // 클릭한 a태그의 부모인 li 태그를 의미한다. ---> $target
            indexNum = $target.index(), // 클릭한 a태그의 부모인 li 태그가 $target이므로 li의 인덱스 번호를 알아온다.
            section = $sec.eq(indexNum), // li태그의 인덱스 번호와 일치하는 section을 찾아서 변수에 담는다.
            offsetT = section.offset().top; // section의 위에서부터 떨어진 위치 값을 구하여 변수에 담는다.
        
        $('html').animate({scrollTop : offsetT},800,'easeOutBack'); // section이 위치한 곳으로 윈도우가 스크롤 된다.
        
        console.log( $target  );
        console.log( indexNum  );
        console.log( section  );
        console.log( offsetT  );
        
        return false; // a태그에 있는 기본 링크 이벤트 실행을 막는다.
    }); // menu 클릭 끝부분
    
    // 2. 윈도우가 스크롤되면
    $(window).scroll(function(){
        var winScrollT = $(window).scrollTop(),  // 윈도우가 얼마만큼 스크롤 되었는가?    
            winScrollT2 = winScrollT + ($(window).height()/2);
        
        // 선택자를 사용해서 작성하는 방법
        // $('.sec').each(function(index, element){});
        // $sec.each(function(index, element){});
        
        // 선택자를 매개변수로 넘겨서 작성하는 방법
        $.each( $sec, function(idx){
            var $targetSection = $sec.eq(idx),
                targetT =$targetSection.offset().top;

            if( targetT <= winScrollT2 ){
                $menu.removeClass('active');
                $menu.eq(idx).addClass('active');
            }
            
            
            /*console.log( '타겟 확인 ');
            console.log( $targetSection );

            console.log( '타겟의 위치 값 ');
            console.log( targetT );*/
            
            
            
        });// each의 끝부분
        
        
        /*console.log('윈도우가 얼마만큼 스크롤 되었는가?');
        console.log( winScrollT );
        
        console.log('윈도우 실제 스크롤값에 윈도우 높이를 반으로 나눈값을 더해준 값');
        console.log( winScrollT2 );*/
        
    });// 윈도우 스크롤 끝부분
    
        
    
    // 위로가기 버튼 
    $('.btn_top').click(function(){
        $('html').animate({scrollTop : 0},1200,'easeOutBack');
    });    
});