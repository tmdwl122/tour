// 여기서부터 resize이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램
var deviceSize1 = 1064;
var deviceSize2 = 800;
function scrollOX(status) {
    $('html').css({
        overflowY: status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hidden') // 구해진 htmlWith값은 변수에 담김
var sws = scrollOX('scroll')
var swd = swh - sws  // 17
console.log(swd)
// 세로 스크롤바가 있는 화면에서는 17, 없는 화면에서는 0
// 세로 스크롤바가 있으면 미디어쿼리 넓이에서 17을 뺀 넓이값으로 재계산
// 세로 스크롤바가 없으면 아래 if문을 수행하지 않으므로 원래 넓이값 사용
if (swd>0) { 
    deviceSize1 = deviceSize1- swd
    deviceSize2 = deviceSize2- swd
}
// 여기까지 스크롤바상태 유무 프로그램


var winWidth = $(window).width()

$(window).on('resize', function(){
    winWidth= $(this).width()
    if (winWidth>deviceSize2) {
        $('#header .header_cont').css ({
            display:'block'
        })
    } else {
        $('#header .header_cont').css ({
            display:'none'
        })
        $('#header').removeClass('on')

    }
   
})

$('.gnb>li').on('mouseenter', function(){
    if (winWidth>deviceSize2) {
        $(this).addClass('on')
        $(this).siblings().removeClass('on')
        $('.decobox').fadeIn(0)
    }
   
})


$('nav, .decobox').hover(
    function(){ 
        if (winWidth>deviceSize2) {  // mouseover
        $('.decobox').fadeIn(0)
    }
},  
    function(){ 
        if (winWidth>deviceSize2) {    //mouseout
        $('.decobox').fadeOut(0)
        $('.gnb>li').removeClass('on')
    }
})


// quick_area

    $('.to_top a').on('click', function(e){
        e.preventDefault() 
        $('html, body').animate({
            scrollTop:0
        }, 600)
        // return falsex
    })


    $('.openMOgnb').on('click', function(){
        if (!$('#header').hasClass('on')) {
        $('#header').addClass('on')
        $('#header .header_cont').slideDown(500)
    } else {
        $('#header .header_cont').slideUp(300, function(){
            $('#header').removeClass('on')
        })
    }
    return false
})

$(window).on('scroll', function(){
    let sct = $(this).scrollTop()
    if (sct>50) {
        $('.to_top').addClass('on')
    } else {
        $('.to_top').removeClass('on')
    }
})

