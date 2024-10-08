$(document).ready(function(){
    let category_idx = 0;

    $('.nav_category').click(function(){
        if(category_idx % 2 == 0){
            $('.nav_category').css({background: '#2f3030', color: '#fff'})
            $('.ham_btn >.row_bar').css({background:'#fff'})
            category_idx ++
        }
        else{
            $('.nav_category').css({background: '#fff', color: '#000'})
            $('.row_bar').css({background:'#000'})
            category_idx ++
        }
    })
})