

function common(){


    // $('nav .menu a').addEventListener("mouseover",function(){
    //     $(this).addClass('blue').siblings().removeClass('blue');
    // })

    $('nav .menu a').mouseover(function(){
        $(this).addClass('blue');
    }).mouseleave(function(){
        $(this).removeClass('blue');
    })

    var swiperTopNum = $('.img-slider').find('.swiper-slide');
    var swiperSubNum = $('.txt-slider').find('.txt-slider');
    var imgSlider = new Swiper('.img-slider', {
	    spaceBetween: 10,	//슬라이드 간격
	    loop: true,	//슬라이드 반복
	    loopedSlides: swiperTopNum.length,	//loop 시 파라미터 duplicate 개수 - 정적으로 숫자 4 표현 가능
    });


    var txtSlider = new Swiper('.txt-slider', {
	    spaceBetween: 0,	//슬라이드 간격
	    navigation: {	//네비게이션 사용자 설정
		    nextEl: '.slider-arr-next',	//다음 버튼 클래스 설정
    	    prevEl: '.slider-arr-prev',	//이전 버튼 클래스 설정
	    },
	    slidesPerView: 'auto',	//한번에 보여지는 슬라이드 개수(auto 가능)
	    touchRatio: 0.2,	//드래그 비율 설정(기본값: 1, 기본값을 0으로 설정할 경우 드래그 불가능)
	    slideToClickedSlide: true,	//슬라이드가 여러개 나열되어 있을 경우, 클릭 시 해당 슬라이드 위치로 이동
	    pagination: {	//페이징 사용자 설정
    	    el: '.slider-pagination',	//페이징 태그 클래스 설정
		    type : 'fraction',	//페이징 타입 설정(종류: bullets, fraction, progressbar)
		    // fraction Numbering 설정
		    formatFractionCurrent: function (number) {
        	    return ('0' + number).slice(-2);
    	    },
    	    formatFractionTotal: function (number) {
        	    return ('0' + number).slice(-2);
    	    },
    	    renderFraction: function (currentClass, totalClass) {
        	    return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
    	    },
	    },
	    loop: true,	//슬라이드 반복
	    loopedSlides: swiperSubNum.length, //loop 시 파라미터 duplicate 개수 - 정적으로 숫자 4 표현 가능
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    
    //Main Swiper와 Thumbnail Swiper가 연동제어 서로를 제어
    imgSlider.controller.control = txtSlider;
    txtSlider.controller.control = imgSlider;

    var swiperSNo = $('.office-img-slider').find('.office-img-slider');
    var OIswiper = new Swiper('.office-img-slider', {
        navigation: {
          nextEl: '.ois-arr-next',
          prevEl: '.ois-arr-prev',
        },
        pagination: {
          el: '.ois-pagination',
          type: "fraction",
          formatFractionCurrent: function (number) {
              return ('0' + number).slice(-2);
        	},
        	formatFractionTotal: function (number) {
              return ('0' + number).slice(-2);
        	},
        	renderFraction: function (currentClass, totalClass) {
              return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
        	},
        },
        slidesPerView: 'auto',
        loop: true,	//슬라이드 반복
	    loopedSlides: swiperSNo.length, //loop 시 파라미터 duplicate 개수 - 정적으로 숫자 4 표현 가능
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
    });


    var bis = new Swiper(".back-slider", {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
  });
   
   
}


let winWidth = $(window).width();

if(winWidth < 1280){

    mobile();

}else{

    pc();
}


common();



$(window).resize(function(){

  let winWidth2 = $(window).width();

if(winWidth2 < 1280){

  mobile();

}else{
  setTimeout(function(){
    location.reload();
},500)
  pc();
}



})
