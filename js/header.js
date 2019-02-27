$(function(){
    $("#wrapper header > ul > li:eq(0)").mouseenter(function(){
    $('a',this).text("포트폴리오");
    return false;
    });
    $("#wrapper header > ul > li:eq(1)").mouseenter(function(){
        $('a',this).text("자기소개");
        return false;
    });
    $("#wrapper header > ul > li:eq(2)").mouseenter(function(){
        $('a',this).text("에필로그");
        return false;
    });
    
    
    $("#wrapper header > ul > li:eq(0)").mouseleave(function(){
        $('a',this).text("설레는");
    });
    $("#wrapper header > ul > li:eq(1)").mouseleave(function(){
        $('a',this).text("두근거리는");
    });
    
    $("#wrapper header > ul > li:eq(2)").mouseleave(function(){
        $('a',this).text("달달한");
    });
    
});