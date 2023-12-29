function mobile(){

    let winHeight = window.innerHeight;
    $('.s1').height(winHeight);
 
    let navSwitch = false;
    $('.navOpen').on('click' , function(){
    
        navSwitch = !navSwitch;
    
        if(navSwitch == true){
           setTimeout(function(){
            $('nav div').css({
                'transform' : 'translateX(0)'
            });
           });

           $('nav').stop().slideDown();
           $(this).addClass('close');
        }else{
            setTimeout(function(){
                $('nav div').css({
                    'transform' : 'translateX(-100%)'
                })
               });
            $('nav').stop().slideUp();
            $(this).removeClass('close');

        }
    
    });

   
 
    // header 클릭시 이동
    
    let menuList = $('.menu a'); 
    let section = $('section');
    menuList.click(function(e){
        e.preventDefault();
        let i = $(this).index();
        let destination = section.eq(i+1).offset().top;
        $('html, body').stop()
        .animate({'scrollTop' : destination});
    });

    let aboutUs = $('.menu .about')
      let pro = $('#pro-top')
      aboutUs.click(function(e){
        e.preventDefault();
          let dest = pro.offset().top;
          $('html, body').stop()
          .animate({'scrollTop' : dest});
      })

      let services = $('.menu .services');
      let ser = $('.s2');
      services.click(function(e){
        e.preventDefault();
          let dest = ser.offset().top - 100;
          $('html, body').stop()
          .animate({'scrollTop' : dest});
      })

    // 

     // s4
    //  const highlight = document.getElementById("highlight-style");

    //  gsap.registerPlugin(ScrollTrigger);
     
    //  gsap.utils.toArray(".text-highlight").forEach((highlight) => {
    //    ScrollTrigger.create({
    //      trigger: highlight,
    //      start: "-100px center",
    //      onEnter: () => highlight.classList.add("active")
    //    });
    //  });
     
    //  const setHighlightStyle = (value) =>
    //    document.body.setAttribute("data-highlight", value);
     
    //  highlight.addEventListener("change", (e) => setHighlightStyle(e.target.value));
     
    //  setHighlightStyle(highlight.value);
     // s4

     $('nav .menu a').click(function(){
        $(this).addClass('blue').siblings().removeClass('blue');
    })
   
}//mobile
