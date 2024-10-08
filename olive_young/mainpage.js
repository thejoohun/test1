load_items_1('popular','0',$('.sec1_box_container').eq(0))
load_items_1('for_you','1',$('.sec1_box_container').eq(1))

load_items_2()
load_items_3()
load_items_4()
load_items_5()
load_items_6()

$(document).ready(function(){
    let main_cur_idx = 0;
    let main_banner_length = $('.main_banner').length;
    let timer = 300
    let banner_interval;
    let interval_idx = 0;

    $('.banner_no').html(`${main_cur_idx+1}/${main_banner_length}`)

    function main_banner_interval() {
        banner_interval = setInterval(() => {
            $('#btnR').trigger('click')
        }, timer+2000);
    }
    function pointer_block(){
        $('.btn_slide').css({pointerEvents:'none'})
        setTimeout(() => {
            $('.btn_slide').css({pointerEvents:'auto'})
        }, timer);
    }
    function indi_block(){
        $('.indi').css({pointerEvents:'none'})
        setTimeout(() => {
            $('.indi').css({pointerEvents:'auto'})
        }, timer);
    }
    $('#btnR').click(function(){
        pointer_block()
        $('.main_banner').eq(main_cur_idx%main_banner_length).animate({opacity:0},timer)
        $('.main_banner').eq((main_cur_idx+1)%main_banner_length).animate({opacity:1},timer)
        main_cur_idx = main_cur_idx + 1
        if(main_cur_idx == main_banner_length){
            main_cur_idx = 0
        }
        $('.banner_no').html(`${main_cur_idx+1}/${main_banner_length}`)
    })
    $('#btnL').click(function(){
        pointer_block()
        $('.main_banner').eq(main_cur_idx%main_banner_length).animate({opacity:0},timer)
        $('.main_banner').eq((main_cur_idx-1)%main_banner_length).animate({opacity:1},timer)
        if(main_cur_idx == 0){
            main_cur_idx = main_banner_length
        }
        main_cur_idx = main_cur_idx - 1
        $('.banner_no').html(`${main_cur_idx+1}/${main_banner_length}`)
    })
    $('#pause').click(function(){
        if (interval_idx%2 == 0) {
            main_banner_interval()
            $('#pause').html('⏸')
            interval_idx = interval_idx + 1
        }
        else{
            clearInterval(banner_interval)
            interval_idx = interval_idx + 1
            $('#pause').html('▶︎')
        }
    })

    // sec1
    let thesedays_idx = 0;
    let thesedays_length = $('.thesedays .sec1_box').length
    let for_you_idx = 0;
    let for_you_length = $('.for_you .sec1_box').length

    $('.sec1_contents_more').eq(0).html(`다른상품 추천해드릴게요 ${thesedays_idx%thesedays_length + 1}/${thesedays_length}`)
    $('.sec1_contents_more').eq(1).html(`다른상품 추천해드릴게요 ${for_you_idx%for_you_length + 1}/${for_you_length}`)
    $('.sec1_box').eq(0).css({top:0})
    $('.for_you .sec1_box').eq(0).css({top:0})

    $('.sec1_contents_more').eq(0).click(function(){
        console.log(thesedays_idx)
        console.log(thesedays_length)
        $('.thesedays .sec1_box').eq(thesedays_idx % thesedays_length).css({top:'100%'})
        $('.thesedays .sec1_box').eq((thesedays_idx + 1) % thesedays_length).css({top:'0%'})
        thesedays_idx = thesedays_idx + 1
        $('.sec1_contents_more').eq(0).html(`다른상품 추천해드릴게요 ${thesedays_idx%thesedays_length + 1}/${thesedays_length}`)
    })    
    $('.sec1_contents_more').eq(1).click(function(){
        $('.for_you .sec1_box').eq(for_you_idx % for_you_length).css({top:'100%'})
        $('.for_you .sec1_box').eq((for_you_idx + 1) % for_you_length).css({top:'0%'})
        for_you_idx = for_you_idx + 1
        $('.sec1_contents_more').eq(1).html(`다른상품 추천해드릴게요 ${for_you_idx%for_you_length + 1}/${for_you_length}`)
    })
    
 
    

    /* popular */
    let popular_cur_idx = 0;
    $('.popular_banner').eq(0).css({left:0})


    $('#popular_btnR').click(function(){
        pointer_block()
        $('.popular_banner').eq(popular_cur_idx % $('.popular_banner').length).animate({left:'-100%'},timer)
        $('.popular_banner').eq((popular_cur_idx + 1) % $('.popular_banner').length).css({left:'100%'}).animate({left:'0%'},timer)

        popular_cur_idx = popular_cur_idx + 1
    })
    $('#popular_btnL').click(function(){
        pointer_block()
        $('.popular_banner').eq(popular_cur_idx % $('.popular_banner').length).animate({left:'100%'},timer)
        $('.popular_banner').eq((popular_cur_idx - 1) % $('.popular_banner').length).css({left:'-100%'}).animate({left:'0%'},timer)

        popular_cur_idx = popular_cur_idx - 1
    })

    
    // /* only_banner */

    $('.only_banner_sec').eq(0).css({left:0})
    let only_cur_idx = 0

    
    $('#sec4 .indi').click(function(){
        indi_block()
        if ($('#sec4 .indi.active').index() < $(this).index()) {
            $('.only_banner_sec').eq(only_cur_idx % $('.only_banner_sec').length).animate({left:'-100%'},timer)
            $('.only_banner_sec').eq((only_cur_idx + 1) % $('.only_banner_sec').length).css({left:'100%'}).animate({left:'0%'},timer)

            $('#sec4 .indi').removeClass('active')
            $('#sec4 .indi').eq($(this).index()).addClass('active')

            only_cur_idx = only_cur_idx + 1
        }
        else if ($('#sec4 .indi.active').index() > $(this).index()) {
            $('.only_banner_sec').eq(only_cur_idx % $('.only_banner_sec').length).animate({left:'100%'},timer)
            $('.only_banner_sec').eq((only_cur_idx - 1) % $('.only_banner_sec').length).css({left:'-100%'}).animate({left:'0%'},timer)

            $('#sec4 .indi').removeClass('active')
            $('#sec4 .indi').eq($(this).index()).addClass('active')

            only_cur_idx = only_cur_idx - 1   
        }
    })

    /* how about */
    let how_about_idx = 0;
    function slideR(timeset){
        $('.how_about_box').eq((how_about_idx) % $('.how_about_box').length).animate({left:'-100%'},timeset, 'linear')
        $('.how_about_box').eq((how_about_idx + 1) % $('.how_about_box').length).css({left:'100%'}).animate({left:'0%'},timeset, 'linear')

        
        how_about_idx = how_about_idx + 1
    }
    function slideL(timeset){
        $('.how_about_box').eq((how_about_idx) % $('.how_about_box').length).animate({left:'100%'},timeset, 'linear')
        $('.how_about_box').eq((how_about_idx - 1) % $('.how_about_box').length).css({left:'-100%'}).animate({left:'0%'}, timeset, 'linear')


        how_about_idx = how_about_idx - 1
    }

    $('.how_about_box').eq(0).css({left:0})

    $('#how_about_btnR').click(function(){
        pointer_block()
        $('#sec5 .indi').removeClass('active')
        $('#sec5 .indi').eq((how_about_idx + 1) % $('.how_about_box').length).addClass('active')
        slideR(timer)
    })

    $('#how_about_btnL').click(function(){
        pointer_block()
        $('#sec5 .indi').removeClass('active')
        $('#sec5 .indi').eq((how_about_idx - 1) % $('.how_about_box').length).addClass('active')
        slideL(timer)
    })


    $('#sec5 .indi').click(function(){
        indi_block()
        if($('#sec5 .indi.active').index() < $(this).index()){
            
            for (let i = 0; i < $(this).index() - $('#sec5 .indi.active').index(); i++) {
                setTimeout(() => {
                    slideR(timer/($(this).index() - $('#sec5 .indi.active').index()==2?2:1))
                }, timer * i );
            }
        }
        else if($('#sec5 .indi.active').index() > $(this).index()){
            for (let i = 0; i < $('#sec5 .indi.active').index() - $(this).index(); i++) {
                setTimeout(() => {
                    slideL(timer/($('#sec5 .indi.active').index() - $(this).index() == 2?2:1))
                }, timer * i );
            }


        }
        $('#sec5 .indi').removeClass('active')
        $('#sec5 .indi').eq($(this).index()).addClass('active')
    })

    /* 조회 급상승, 인기템 */

    let lots_of_idx = 0;
    let lots_tmp = 0;

    $('.lots_of_left_contents').eq(0).css({top:0})
    $('.lots_of_right_contents').eq(0).addClass('active')

    // $('.lots_of_right_box').eq(0).css({top:'0'})

    $('.lots_of_right_contents').click(function(){
        if(lots_of_idx != $(this).index()){
            $('.lots_of_left_contents').eq(lots_of_idx).animate({top:'-100%'},300)
            $('.lots_of_left_contents').eq($(this).index()).css({top:'100%'}).animate({top:'0%'},300)
            lots_of_idx = $(this).index()
            $('.lots_of_right_contents').removeClass('active')
            $('.lots_of_right_contents').eq(lots_of_idx).addClass('active')
        }
    })
    $('#sec6 .indi').click(function(){
        if ($(this).index() == 1) {
            lots_tmp = 0
        }
        else if ($(this).index() == 2){
            lots_tmp = -99
        }
        $('.lots_of_right_box').css({top:`${lots_tmp}%`})
        if($(this).index()==2){
            $('.lots_of_right_contents').eq(5).trigger('click')
        }
        else if($(this).index()==1){
            $('.lots_of_right_contents').eq(0).trigger('click')
        }

        $('#sec6 .indi').removeClass('active')
        $('#sec6 .indi').eq($(this).index()-1).addClass('active')
    })
    let lots_of_interval_index = 0;
    setInterval(function(){
        if($('.lots_of_right_contents.active').index()==4){
            $('#sec6 .indi').eq(1).trigger('click')
        }
        else if($('.lots_of_right_contents.active').index()==9){
            $('#sec6 .indi').eq(0).trigger('click')
        }
        else{
            $('.lots_of_right_contents').eq(($('.lots_of_right_contents.active').index()+1)%$('.lots_of_right_contents').length).trigger('click')
        }
    },3500)
})