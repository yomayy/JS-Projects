"use strict";

$(document).ready(function(){
    
    ///
    ///
    
    
    
    $('aside').css('left', '-260px');
    
    let toogleFlag = true;
    
    $('#menu').click(function(){
        //$('aside').slideToggle(600);
        if(toogleFlag == true){
            toogleFlag = false;
            $('aside').animate({left: '0px'}, 600);
        }else{
            toogleFlag = true;
            $('aside').animate({left: '-280px'}, 600);
        }   
    });
    
    $('aside ul li a').hover(
        function(){
            $(this).animate({paddingLeft: '20px', color: 'cyan'}, 400);
        },
        function(){
            $(this).animate({paddingLeft: '0px', color: 'purple'}, 400)
        }
    );
    
    $('#p1').css('left', '0px');
    $('#p2').css('left', '500px');
    $('#p3').css('left', '1000px');
    $('#p4').css('left', '1500px');
    
    let pos = $('#p1').position();
    let pos_left = pos.left;
    let first_load = true;
    
    let slide_flag = 0;
    function rotate_left(){
        if(slide_flag < 3){
            $('#p1').animate({left: '-=500px'}, 600);
            $('#p2').animate({left: '-=500px'}, 600);
            $('#p3').animate({left: '-=500px'}, 600);
            $('#p4').animate({left: '-=500px'}, 600);
            slide_flag++;
        } else{
            // $('#p1').css('left', '0px');
            // $('#p2').css('left', '500px');
            // $('#p3').css('left', '1000px');
            $('#p1').animate({left: '0px'}, 300)
            $('#p2').animate({left: '500px'}, 300)
            $('#p3').animate({left: '1000px'}, 300)
            $('#p4').animate({left: '1500px'}, 300)
            slide_flag = 0;
        }
    }
    
    $('#left').click(function(){
        rotate_left();
        first_load = false;
    });
    
    function rotate_right(){
        if(slide_flag > 0){
            $('#p1').animate({left: '+=500px'}, 600);
            $('#p2').animate({left: '+=500px'}, 600);
            $('#p3').animate({left: '+=500px'}, 600);
            $('#p4').animate({left: '+=500px'}, 600);
            slide_flag--;
        } else{
            // $('#p1').css('left', '0px');
            // $('#p2').css('left', '500px');
            // $('#p3').css('left', '1000px');
            $('#p1').animate({left: '-1500px'}, 300)
            $('#p2').animate({left: '-1000px'}, 300)
            $('#p3').animate({left: '-500px'}, 300)
            $('#p4').animate({left: '0px'}, 300)
            slide_flag = 3;
        }
    }
    
    $('#right').click(function(){
       rotate_right(600); 
    });
    
    let interval = 0;
    $('#h_right').click(function(){
        //interval = $('#interval').val()*100;
        // TODO не работает интервал
        timer = setInterval(rotate_right, 1000);
        $('#help_btns').attr('hidden', true);
        $('#right').attr('disabled', true);
        $('#left').attr('disabled', true);
    })
    
    $('#h_left').click(function(){
        //interval = $('#interval').val()*100;
        timer = setInterval(rotate_left, 1000);
        $('#help_btns').attr('hidden', true);
        $('#right').attr('disabled', true);
        $('#left').attr('disabled', true);   
    })
    
    let timer = {};
    $('#start').click(function(){
        $('#help_btns').attr('hidden', false);
        $('#left').attr('disabled', true);
        $('#right').attr('disabled', true);
    });
    
    $('#stop').click(function(){
        clearInterval(timer);
        $('#help_btns').attr('hidden', true);
        $('#start').attr('disabled', false);
        $('#right').attr('disabled', false);
        $('#left').attr('disabled', false);
    });
    
});