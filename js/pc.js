function pc(){

    let winHeight = window.innerHeight;
  
    $(window).scroll(function(){
      let scr = $(window).scrollTop();
  
      //윈도우 스크롤 시 헤더 변화
      if(scr >= winHeight){
        $('header').removeClass('on');
      }else{
        $('header').addClass('on');
      }

      if(scr >= winHeight * 3 && scr <= winHeight*5){
        $('header').addClass('non-bg');
      }else{
        $('header').removeClass('non-bg');
      }
  
      //윈도우 스크롤 시 백그라운드 변화
      if(scr >= winHeight * 2 && scr <= winHeight*3){
        $('body').addClass('bg');
      }else{
        $('body').removeClass('bg');
      }
  
  
    }); 
  
    //메뉴이동명령
    let menuList = $('.menu a'); 
    menuList.click(function(e){
        e.preventDefault();
        let i = $(this).index();
       
        if(i == 0){
        $('html, body').stop()
        .animate({'scrollTop' : winHeight});
        }
  
        if(i == 1){
          $('html, body').stop()
          .animate({'scrollTop' : winHeight * 2});
          }
  
          if(i == 2){
            $('html, body').stop()
            .animate({'scrollTop' : winHeight * 5});
            }
  
        
    });
      
      // s4
      // const highlight = document.getElementById("highlight-style");
  
      // gsap.registerPlugin(ScrollTrigger);
      
      // gsap.utils.toArray(".text-highlight").forEach((highlight) => {
      //   ScrollTrigger.create({
      //     trigger: highlight,
      //     start: "-100px center",
      //     onEnter: () => highlight.classList.add("active")
      //   });
      // });
      
      // const setHighlightStyle = (value) =>
      //   document.body.setAttribute("data-highlight", value);
      
      // highlight.addEventListener("change", (e) => setHighlightStyle(e.target.value));
      
      // setHighlightStyle(highlight.value);
      // s4
  
      document.addEventListener("mousemove", function(event) {
          var x = event.clientX; // 마우스의 X 좌표
          var y = event.clientY; // 마우스의 Y 좌표
          
          var cursor = document.querySelector(".custom");
          cursor.style.transition = "none"; // 딜레이 동안의 전환 효과 제거
          
          setTimeout(function() {
            cursor.style.transition = "all 0.1s ease"; // 딜레이 이후 전환 효과 다시 추가
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
          }, 70); // 500ms(0.5초)의 딜레이
      });
  
      $('.on').mouseover(function(){
          $('.custom').addClass('active');
          $('.cursor').addClass('active');
        }).mouseleave(function(){
          $('.custom').removeClass('active');
          $('.cursor').removeClass('active');
      });
  
      $('#on').mouseover(function(){
          $('.custom').addClass('active');
          $('.cursor').addClass('active');
        }).mouseleave(function(){
          $('.custom').removeClass('active');
          $('.cursor').removeClass('active');
      });
  
      $('.swiper-button-prev').mouseover(function(){
        $('.custom').addClass('active');
        $('.cursor').addClass('active');
      }).mouseleave(function(){
        $('.custom').removeClass('active');
        $('.cursor').removeClass('active');
      });
  
      $('.swiper-button-next').mouseover(function(){
        $('.custom').addClass('active');
        $('.cursor').addClass('active');
      }).mouseleave(function(){
        $('.custom').removeClass('active');
        $('.cursor').removeClass('active');
      });
   

      //mounse wheel

      $('.s1').on('mousewheel',function(e,d){

        if(d > 0){
           
        }else if(d < 0){
            let nxt = window.innerHeight;
            $('html,body').stop().animate({'scrollTop':nxt});
        }

      });//s1

      $('.s2').on('mousewheel',function(e,d){

        let winHeight = window.innerHeight;
        if(d > 0){
            $('html,body').stop().animate({'scrollTop':0});

        }else if(d < 0){
            $('html,body').stop().animate({'scrollTop':winHeight*2});
        }

      });//s2
   
      
      $('.s3').on('mousewheel',function(e,d){

        let winHeight = window.innerHeight;
        if(d > 0){
            $('html,body').stop().animate({'scrollTop':winHeight});

        }else if(d < 0){
            $('html,body').stop().animate({'scrollTop':winHeight*3});
        }

      });//s3

      $('.pr1').on('mousewheel',function(e,d){

        let winHeight = window.innerHeight;
        if(d > 0){
            $('html,body').stop().animate({'scrollTop':winHeight*2});

        }else if(d < 0){
            $('html,body').stop().animate({'scrollTop':winHeight*4});
        }

      });//pr1


      $('.pr2').on('mousewheel',function(e,d){

        let winHeight = window.innerHeight;
        if(d > 0){
            $('html,body').stop().animate({'scrollTop':winHeight*3});

        }else if(d < 0){
            $('html,body').stop().animate({'scrollTop':winHeight*5});
        }

      });//pr2
  }