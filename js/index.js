$(function(){
    // functionStarts
    // functionStarts
    // functionStarts
    // functionStarts
    try {
        // your code here
 
// SETTING
// SETTING
// SETTING
// jquery easing cdn
jQuery.easing.def = "easeOutQuad";
// window reszing prevention
var size = [668,800];  //public variable
$(window).resize(function(){
    window.resizeTo(size[0],size[1]);
});
// window reszing prevention



const fullSection = $(".fullsection");

// closed fullSection => height:0%();
$(".fullsection").each(function(index, item){
        if(!$(item).hasClass("active")){
            $(item).find(".wrapper").fadeOut();
            $(item).hide();
        }else{
            $(item).find(".wrapper").fadeIn();
             // this prevents users from scrolling 
            $('html, body').css({
                'overflow': 'hidden',
                'height': '100%'
              })
        }
    });
    // openned fullSection => height:100%();
    let i = 1000;
    $(".fullsection").each(function(index, item){
        if(!$(item).hasClass("active")){
            // sliding down effect at first opening
            $(item).fadeIn(i-800,function(){
                setTimeout(function() {
                    $(item).on("click",firstClick);
                    console.log("setting switch on!");
                }, 1000)
            });
            i += 500;
            // giving delay to each slideDown;
        }else{
            $(item).find(".wrapper").stop().delay(2000).animate({opacity : "1"});
            // this prevents users from scrolling until after 3 secs
            setTimeout(() => {
                $('html, body').css({
                    'overflow': 'auto',
                    'height': 'auto'
                  })
            }, 3000);  
        }
    });

// SETTING
// SETTING
// SETTING


// CLICK EVENT
// CLICK EVENT
// CLICK EVENT

    function firstClick (){
        console.log("firstClick function has started");

        const widthactive = parseInt($(this).siblings(".active").css("width"));
            // Check if there are any openned section
            // if so, closing.
            $(this).siblings().each(function(index, item){
                const eachWidthNum = parseInt($(this).css("width"));
                if(Math.floor(eachWidthNum) == Math.floor(widthactive)){
                    $(item).find(".wrapper").hide();
                    $(item).removeClass("active");
                    // $(fullSection).off("click");
                }
            });
                // call function to adjust label position
                handleLabel(); 

            // Wait for 500ms to active next div:click
            // Without this, it shakes abit
            setTimeout(() => {
                    $(this).on("click",firstClick);
                      }, "1000");
                      console.log("firstClick function has kicked in");
                    //   $(this).find(".wrapper").stop().delay(1000).animate({opacity : "1"});
                    $(this).find(".wrapper").show();
                    $(this).addClass("active");
                    $(".label_cover").off("click");
                    console.log("firstClick function has ended");
    }
  
// CLICK EVENT
// CLICK EVENT
// CLICK EVENT

 function handleLabel(){
    $(fullSection).each(function(index, item){
        if(index !== 0){
            if($(item).hasClass("active")){
                $(item).find(".label").fadeIn();
                $(item).find(".label").hide();
                console.log("handleLabel in process");
            }else{
                $(item).find(".label").show();
            }
        }else{
            console.log("handleLabel FOR LOGO in process");
            if(!$(item).hasClass("active")){
                $(".section_1 img").addClass("folded_label");
            }else{
                $(".section_1 img").removeClass("folded_label");
            }
        }
    });
 }
} catch (e) {
    // handle error here
    console.error(e);
  }

    // functionEnds
    // functionEnds
    // functionEnds
    // functionEnds
});










