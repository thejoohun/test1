let cateNo = get_url_info("cateNo");
let itemNo = get_url_info("itemNo")-1;

const ITEM = ITEM_LIST[cateNo][itemNo];

console.log(menu_array[cateNo], itemNo+1)

let list = `
    <div class="item_box">
        <div class="item_box_left">
            <div class="item_big_img">
                <img src="../img/olive_young/${menu_array[cateNo]}/${menu_array[cateNo]}_${ITEM.src}" alt="">
            </div>
            <div class="item_small_box">
                <img class="active" src="../img/olive_young/${menu_array[cateNo]}/${menu_array[cateNo]}_${ITEM.src}" alt="">
                <img src="../img/olive_young/mini/${menu_array[cateNo]}/${itemNo+1}.jpg" alt="">
            </div>
            <div class="review_box">
                <div class="review_title">고객 리뷰</div>
                <div class="review_star"></div>
                <div class="review_point">4.9</div>
                <div class="review_count">(2,943건)</div>
                <div class="social_media_icon"></div>
            </div>
        </div>
        <div class="item_box_right">
            <div class="brand">브랜드 방문<span class="right_sign">></span></div>
            <div class="item_box_title">
                ${ITEM.title1}
                ${ITEM.title2}
            </div>
            <div class="item_price_box">

                ${ITEM.original_price != undefined?`<span class="original_price">${ITEM.original_price.toLocaleString('ko')}원</span>`:''}    

                <span class="item_price">${ITEM.item_price.toLocaleString('ko')}원</span>
                <div class="item_events">
                    ${ITEM.sale?`<div class="item_events_sale">세일</div>`:''}
                    ${ITEM.today_get?`<div class="item_events_today">오늘드림</div>`:''}
                    ${ITEM.coupon?`<div class="item_events_coupon">쿠폰</div>`:''}
                    
                </div>
            </div>
            <div class="viewing">
                n명이 보고있어요
            </div>
            <div class="delivery d1">
                <div class="div">배송정보</div>
                <table class="delivery_txt">
                    <td>일반배송</td>
                    <td>2,500원 ( 20,000 원 이상 무료배송 )
                        올리브영 배송 ( 평균 3일 이내 배송 )</td>
                </table>
                <table class="delivery_txt">
                    <td>오늘드림</td>
                    <td>2,500원 또는 5,000원</td>
                </table>
                <table class="delivery_txt">
                    <td>픽업</td>
                    <td>배송비 조건 없음</td>
                </table>
            </div>
            <div class="item_long_bar"></div>

            <div class="delivery">
                <div class="div">결제혜택</div>
                <div class="pay_adv">THE CJ 카드 추가 10%할인</div>
                <div class="pay_adv">CJ ONE 포인트 최대 1% 적립 예상 CJ</div>
            </div>
            <div class="item_long_bar"></div>
            <div class="item_count_box">
                <div>구매수량</div>
                <div class="item_count">
                    <div class="minus">-</div>
                    <input class="item_qty" type="text" value="1">
                    <div class="plus">+</div>
                </div>
            </div>
            <div class="item_sum_box">
                <div class="item_sum_txt">상품금액 합계</div>
                <div class="item_sum_price">${ITEM.item_price.toLocaleString('ko')}원</div>
            </div>
            <div class="check_box">
                <div class="check_box_block"></div>
                <div class="check_box_txt">오늘드림으로 받아 보시겠어요?</div>
            </div>
            <div class="purchase_box">
                <div class="my_bag">장바구니</div>
                <div class="purchase_directly">바로구매</div>
                <div class="gift"></div>
                <div class="heart"></div>
            </div>
        </div>
        <div class="freebie">
            <div>증정품 안내</div>
            <div>[일반배송 소진완료] 오늘드림, 픽업 주문 시 증정 미제공</div>
            <div>[올리브영 특별행사] 전 회원 구매 상품 1개당, 증정품 1개 선착순 증정</div>
            <div class="freebie_more">더보기 〉</div>
        </div>
        <div class="find_box">
            <div class="find_shop">구매 가능 올영매장 찾기 〉</div>
            <div class="find_long_bar"></div>
            <div class="find_brand">브랜드관 〉</div>
        </div>
        <div class="item_box_below">
            <div class="below_title">
                <div class="active">상품설명</div>
                <div>리뷰 (2,943)</div>
                <div>Q&A (19)</div>
            </div>
            <div class="below_pan p1">
                <img src="../img/olive_young/how_about_this/item_desc1.jpg" alt="">
            </div>
            <div class="below_pan p2">
                <div class="p2_face">
                    <div class="face_img"></div>
                    <div class="face_name">최고</div>
                </div>
                <div class="p2_star">
                    <div class="p2_star_count">(총2,943건)</div>
                    <div class="p2_star_point">
                        <div>4.9</div>
                        <div>점</div>
                    </div>
                    <div class="p2_star_star"></div>
                </div>
                <div class="p2_graph">
                    <div class="graph_box">
                        <div class="graph_area">
                            <div class="percent">89%</div>
                            <div class="graph_bar">
                                <div class="bar_height"></div>
                            </div>
                            <div class="graph_score">5점</div>
                        </div>
                        <div class="graph_area">
                            <div class="percent">9%</div>
                            <div class="graph_bar">
                                <div class="bar_height"></div>
                            </div>
                            <div class="graph_score">4점</div>
                        </div>
                        <div class="graph_area">
                            <div class="percent">2%</div>
                            <div class="graph_bar">
                                <div class="bar_height"></div>
                            </div>
                            <div class="graph_score">3점</div>
                        </div>
                        <div class="graph_area">
                            <div class="percent">0%</div>
                            <div class="graph_bar">
                                <div class="bar_height"></div>
                            </div>
                            <div class="graph_score">2점</div>
                        </div>
                        <div class="graph_area">
                            <div class="percent">0%</div>
                            <div class="graph_bar">
                                <div class="bar_height"></div>
                            </div>
                            <div class="graph_score">1점</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="below_pan p3"></div>
        </div>
    </div>
`

$('.main').append(list)

$(document).ready(function(){

    // plus, minus
    $('.plus').click(function(){
        console.log(cateNo, itemNo)
        $('.item_qty').val(+$('.item_qty').val()+1)
        $('.item_sum_price').html((ITEM.item_price * $('.item_qty').val()).toLocaleString('ko')+'원')
    })
    $('.minus').click(function(){
        if($('.item_qty').val() > 1){
            $('.item_qty').val($('.item_qty').val()-1)

            $('.item_sum_price').html((ITEM.item_price * $('.item_qty').val()).toLocaleString('ko')+'원')
        }
        else{
            alert('최소 주문 수량은 1개입니다')
        }
    })
    $('.check_box_block').click(function(){
        alert('회원 전용 서비스입니다. 로그인하시겠습니까?')
    })
    $('.heart').click(function(){
        alert('회원 전용 서비스입니다. 로그인하시겠습니까?')
    })
    $('.below_pan').eq(0).addClass('active')

    for (let i = 0; i < $('.below_pan').length; i++) {
        $('.below_title > div').eq(i).click(function(){
            $('.below_title > div').removeClass('active')
            $('.below_title > div').eq(i).addClass('active')
            $('.below_pan').removeClass('active')
            $('.below_pan').eq(i).addClass('active')
        })
        
    }
    $('.item_small_box img').click(function(){

        if ($(this).index() == 1) {
            $('.item_big_img img').attr('src', `../img/olive_young/mini/${menu_array[cateNo]}/${itemNo+1}.jpg`)
        }
        else{
            $('.item_big_img img').attr('src', `../img/olive_young/${menu_array[cateNo]}/${menu_array[cateNo]}_${ITEM.src}`)
        }
        $('.item_small_box img').removeClass('active')

        $('.item_small_box img').eq($(this).index()).addClass('active')
    
    })
})