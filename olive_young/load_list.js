let dt = new Date();
let month = dt.getMonth() + 1

const ITEM_LIST = [
    // thesedays
    [
        {item_no: 1 , src: '1.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 22500, item_price: 19700, best: true, sale: true, today_get: true, coupon: true},
        {item_no: 2 , src: '2.jpg', title1: `퍼프도 줍니다`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 26500, item_price: 20000, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 3 , src: '3.jpg', title1: `[${month}월 올영픽 / 짱짱토너]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 18900, item_price: 16000, best: false, sale: true, today_get: false, coupon: false},
        {item_no: 4 , src: '4.jpg', title1: `1등토너`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', item_price: 45000, best: true, sale: false, today_get: false, coupon: true},
        {item_no: 5 , src: '5.jpg', title1: `[${month}월 올영픽]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 22500, item_price: 17300, best: true, sale: true, today_get: false, coupon: true},
        {item_no: 6 , src: '6.jpg', title1: `엄청난 스킨케어`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 30000, item_price: 23800, best: false, sale: true, today_get: true, coupon: false}
    ]
    ,
    // for_you
    [ 
        {item_no: 1 , src: '1.jpg', title1: `[${month}월 올영픽 / 예쁜 틴트]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', item_price: 12000, best: true, sale: false, today_get: true, coupon: true},
        {item_no: 2 , src: '2.jpg', title1: `남성틴트`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 11500, item_price: 10000, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 3 , src: '3.jpg', title1: `여성청결제`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 32900, item_price: 19800, best: true, sale: true, today_get: false, coupon: false},
        {item_no: 4 , src: '4.jpg', title1: `몬스터토너패드`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', item_price: 25000, best: false, sale: false, today_get: false, coupon: true}
    ],
    // weekly_special
    [
        {item_no: 1 , src: '1.jpg', title1: `모델들의 피부를`, title2: '원하시나요?',hashtag: '#바이컬러로 가자', name:'바이컬러 스페셜 키트', color:'#3e3e78'},
        {item_no: 2 , src: '2.jpg', title1: `피부 활력 충전`, title2: '단 10분만에',hashtag: '#짱짱아이크림', name:'멋진 아이크림', color:'#053951'}
    ],
    // popular_event_mian
    [
        {item_no: 1, src: '1_1_main.jpg', desc1: `좋은 피부`, desc2: '만들어드릴게요!',brand:'비그린'},

        {item_no: 2, src: '1_2_main.jpg', desc1: `멋진 피부를`, desc2: '가지고 싶나요?',brand:'피지오겔'},
        {item_no: 3, src: '2_1_main.jpg', desc1: `한끼 음료`, desc2: '마시고 화이팅하세요',brand:'피키타카'},
        {item_no: 4, src: '2_2_main.jpg', desc1: `오버나이트`, desc2: '편안한 밤 되세요',brand:'템포'},

        {item_no: 5, src: '3_1_main.jpg', desc1: `카즈하도 쓴다!`, desc2: '감사합니다',brand:'아도르'},
        {item_no: 6, src: '3_2_main.jpg', desc1: `귀여운 키링`, desc2: '필요하신가요?',brand:'코시모시'},
        {item_no: 7, src: '4_1_main.jpg', desc1: `에코에너지`, desc2: '에!코!',brand:'더샘'},
        {item_no: 8, src: '4_2_main.jpg', desc1: `아이섀도우`, desc2: '하나만 써보세용',brand:'오프라'}
    ],
    // popular_event
    [

        {item_no: 1 , src: '1_1_1.jpg', title1: `[${month}월 올영픽]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 43300, item_price: 39700, best: true, sale: true, today_get: true, coupon: true},
        {item_no: 2 , src: '1_1_2.jpg', title1: `노랑앰플`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 48500, item_price: 45470, best: true, sale: true, today_get: true, coupon: true},
        {item_no: 3 , src: '1_2_1.jpg', title1: `피지오겔로션`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 38900, item_price: 29100, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 4 , src: '1_2_2.jpg', title1: `갈색앰플`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 38100, item_price: 27000, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 5 , src: '2_1_1.jpg', title1: `[${month}월 올영픽 / 한끼드링크 바틀]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 19900, item_price: 15900, best: false, sale: true, today_get: false, coupon: false},
        {item_no: 6 , src: '2_1_2.jpg', title1: `[${month}월 올영픽 / 한끼드링크 팩]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 17700, item_price: 15000, best: false, sale: true, today_get: false, coupon: false},
        {item_no: 7 , src: '2_2_1.jpg', title1: `[${month}월 올영픽]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', item_price: 15000, best: true, sale: false, today_get: false, coupon: true},
        {item_no: 8 , src: '2_2_2.jpg', title1: `[${month}월 올영픽]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', item_price: 27000, best: false, sale: false, today_get: false, coupon: true},
        {item_no: 9 , src: '3_1_1.jpg', title1: `[카즈하픽]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 22500, item_price: 17300, best: true, sale: true, today_get: false, coupon: true},
        {item_no: 10 , src: '3_1_2.jpg', title1: `동물키링도 줍니다`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 12500, item_price: 10300, best: true, sale: true, today_get: false, coupon: true},
        {item_no: 11 , src: '3_2_1.jpg', title1: `귀여운 키링`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 5000, item_price: 3800, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 12 , src: '3_2_2.jpg', title1: `한정판 키링`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 5000, item_price: 3800, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 13 , src: '4_1_1.jpg', title1: `에코 스킨케어 no.1`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 29000, item_price: 22800, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 14 , src: '4_1_2.jpg', title1: `에코 스킨케어 no.2`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 29000, item_price: 22800, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 15 , src: '4_2_1.jpg', title1: `인기 아이섀도우`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 30000, item_price: 23800, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 16 , src: '4_2_2.jpg', title1: `[${month}월 올영픽]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 30000, item_price: 23800, best: false, sale: true, today_get: true, coupon: false}
    ],
    // only
    [
        {item_no: 1, src: '1.jpg', title1: `브링그린 세트`, title2: '하나만 써보세용',hashtag: '#브링그린', name:'바이컬러 스페셜 키트', color:'#d9ebf7'},
        {item_no: 2, src: '2.jpg', title1: `미연픽`, title2: '아주 좋아요',hashtag: '#짱짱쿠션', name:'바이컬러 스페셜 키트', color:'#ecd5cd'},
        {item_no: 3, src: '3.jpg', title1: `오징어채`, title2: '하나 먹어보세요',hashtag: '#과자', name:'바이컬러 스페셜 키트', color:'#e5dfca'},
        {item_no: 4, src: '4.jpg', title1: `노란색`, title2: '스킨케어 세트',hashtag: '#브링그린', name:'바이컬러 스페셜 키트', color:'#ece283'},
        {item_no: 5, src: '5.jpg', title1: `틴트`, title2: '아주 저렴합니다',hashtag: '#짱짱틴트', name:'바이컬러 스페셜 키트', color:'#eadac7'},
        {item_no: 6, src: '6.jpg', title1: `아이섀도우`, title2: '아주 좋아요',hashtag: '#짱짱아이섀도우', name:'바이컬러 스페셜 키트', color:'#b3b49c'}
    ],
    // how_about
    [ 
        {item_no: 1 , src: '1.jpg', title1: `[${month}월 올영픽 / 김지영픽]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', item_price: 22000, best: true, sale: false, today_get: true, coupon: true},
        {item_no: 2 , src: '2.jpg', title1: `맛있는 젤리`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 24500, item_price: 20000, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 3 , src: '3.jpg', title1: `캔들 4종`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 28800, item_price: 26000, best: true, sale: true, today_get: false, coupon: false},
        {item_no: 4 , src: '4.jpg', title1: `인기 팩`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', item_price: 15000, best: false, sale: false, today_get: false, coupon: true},
        {item_no: 5 , src: '5.jpg', title1: `노랑앰플`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 48500, item_price: 45470, best: true, sale: true, today_get: true, coupon: true},
        {item_no: 6 , src: '6.jpg', title1: `파랑앰플`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 21500, item_price: 19500, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 7 , src: '7.jpg', title1: `숙취해소제`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 11900, item_price: 9800, best: true, sale: true, today_get: false, coupon: false},
        {item_no: 8 , src: '8.jpg', title1: `유세린 아이크림`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', item_price: 25200, best: false, sale: false, today_get: false, coupon: true},
        {item_no: 9 , src: '9.jpg', title1: `[${month}월 올영픽]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', item_price: 18000, best: true, sale: false, today_get: true, coupon: true},
        {item_no: 10 , src: '10.jpg', title1: `바이컬러`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 38100, item_price: 32000, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 11 , src: '11.jpg', title1: `짱짱가글`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 11900, item_price: 10000, best: true, sale: true, today_get: false, coupon: false},
        {item_no: 12 , src: '12.jpg', title1: `잡티앰플`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', item_price: 25000, best: false, sale: false, today_get: false, coupon: true}

    ],
    // lots_of
    [
        {item_no: 1 , src: '1.jpg', title1: `[${month}월 올영픽 / 장원영픽]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 22500, item_price: 21200, best: true, sale: false, today_get: true, coupon: true}, 
        {item_no: 2 , src: '2.jpg', title1: `[${month}월 올영픽 / 예나픽]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 19500, item_price: 15900, best: true, sale: false, today_get: true, coupon: true},
        {item_no: 3 , src: '3.jpg', title1: `[${month}월 올영픽]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 26500, item_price: 20000, best: true, sale: false, today_get: true, coupon: true},
        {item_no: 4 , src: '4.jpg', title1: `[${month}월 올영픽 / 미연픽]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 13400, item_price: 12000, best: true, sale: false, today_get: true, coupon: true},
        {item_no: 5 , src: '5.jpg', title1: `토너패드 1위제품`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 22100, item_price: 20900, best: true, sale: false, today_get: true, coupon: true},
        {item_no: 6 , src: '6.jpg', title1: `예쁜틴트`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', item_price: 12000, best: true, sale: false, today_get: true, coupon: true},
        {item_no: 7 , src: '7.jpg', title1: `남성틴트`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 11500, item_price: 10000, best: false, sale: true, today_get: true, coupon: false},
        {item_no: 8 , src: '8.jpg', title1: `헬로키티`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 15900, item_price: 12000, best: true, sale: false, today_get: true, coupon: true},
        {item_no: 9 , src: '9.jpg', title1: `[${month}월 올영픽 / 예쁜 파데]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 17800, item_price: 16000, best: true, sale: false, today_get: true, coupon: true},
        {item_no: 10 , src: '10.jpg', title1: `헬로키티2`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 15600, item_price: 12200, best: true, sale: false, today_get: true, coupon: true}
    ],
    // weekly_speical_1
    [
        {item_no: 1 , src: '1.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55200, item_price: 45700, best: true, sale: true, today_get: true, coupon: true},
        
        {item_no: 2 , src: '2.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true},
        
        {item_no: 3 , src: '3.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true}
    ],    
    
    // weekly_speical_2
    [
        {item_no: 1 , src: '1.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true},
        
        {item_no: 2 , src: '2.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true}
    ],

    // only_oliveyoung_1
    [
        {item_no: 1 , src: '1.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 95500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true},
        
        {item_no: 2 , src: '2.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true},
        
        {item_no: 3 , src: '3.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true}
    ],
        // only_oliveyoung_2
    [
        {item_no: 1 , src: '1.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 95500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true},
        
        {item_no: 2 , src: '2.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true},
        
        {item_no: 3 , src: '3.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true}
    ],
    // only_oliveyoung_3
    [
    {item_no: 1 , src: '1.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 95500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true},

    {item_no: 2 , src: '2.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true}
    ],
    // only_oliveyoung_4
    [
    {item_no: 1 , src: '1.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 95500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true},

    {item_no: 2 , src: '2.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true},
    {item_no: 3 , src: '3.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true}
    ],
    // only_oliveyoung_5
    [
    {item_no: 1 , src: '1.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 95500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true},

    {item_no: 2 , src: '2.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true}
    ],
    // only_oliveyoung_6
    [
    {item_no: 1 , src: '1.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 95500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true},

    {item_no: 2 , src: '2.jpg', title1: `[${month}월 올영픽 / 고윤정 PICK]`, title2: '상품에 대한 상세 설명입니다! 감사합니다.', original_price: 55500, item_price: 45700, best: true, sale: true, today_get: true, coupon: true}
    ]
]



const menu_array = ['popular','for_you','weekly_special','','event','only_in_oliveyoung','how_about_this','lots_of_view', 'weekly_special_list_1', 'weekly_special_list_2','only_in_oliveyoung_list_1','only_in_oliveyoung_list_2','only_in_oliveyoung_list_3','only_in_oliveyoung_list_4','only_in_oliveyoung_list_5','only_in_oliveyoung_list_6'];


function load_items_1(category, eq_num, parent){
    count = ITEM_LIST[eq_num].length
    for (let i = 0; i < count; i+=2) {
        let tmp = 
        `
    <div class="sec1_box">
        <div class="sec1_contents" data-itemNo=${ITEM_LIST[eq_num][i].item_no}>
            <a href="./olive_young_item.html?cateNo=${eq_num}&itemNo=${ITEM_LIST[eq_num][i].item_no}">            
                <div class="sec1_contents_img">
                    <img src="../img/olive_young/${category}/${category}_${ITEM_LIST[eq_num][i].src}" alt="">
                    ${ITEM_LIST[eq_num][i].best?`<div class="best_item">베스트</div>`:''}
                </div>
                <div class="sec1_contents_txt">
                    <div class="sec1_contents_item_desc">
                        <div>${ITEM_LIST[eq_num][i].title1}</div>
                        <div>${ITEM_LIST[eq_num][i].title2}</div>
                    </div>
                    <div class="item_price_box">
                        ${ITEM_LIST[eq_num][i].original_price != undefined?`<span class="original_price">${ITEM_LIST[eq_num][i].original_price.toLocaleString('ko')}원</span>`:''}
                        <span class="item_price">${ITEM_LIST[eq_num][i].item_price.toLocaleString('ko')}원</span>
                        <img src="../img/olive_young/icon_bag.png" alt="">
                        <div class="item_events">
                            ${ITEM_LIST[eq_num][i].sale?`<div class="item_events_sale">세일</div>`:''}
                            ${ITEM_LIST[eq_num][i].today_get?`<div class="item_events_today">오늘드림</div>`:''}
                            ${ITEM_LIST[eq_num][i].coupon?`<div class="item_events_coupon">쿠폰</div>`:''}
                            
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="sec1_contents">
            <a href="./olive_young_item.html?cateNo=${eq_num}&itemNo=${ITEM_LIST[eq_num][i+1].item_no}">
                <div class="sec1_contents_img">
                    <img src="../img/olive_young/${category}/${category}_${ITEM_LIST[eq_num][i+1].src}" alt="">
                    ${ITEM_LIST[eq_num][i+1].best?`<div class="best_item">베스트</div>`:''}
                </div>
                <div class="sec1_contents_txt">
                    <div class="sec1_contents_item_desc">
                        <div>${ITEM_LIST[eq_num][i+1].title1}</div>
                        <div>${ITEM_LIST[eq_num][i+1].title2}</div>
                    </div>
                    <div class="item_price_box">
                        ${ITEM_LIST[eq_num][i+1].original_price != undefined?`<span class="original_price">${ITEM_LIST[eq_num][i+1].original_price.toLocaleString('ko')}원</span>`:''}
                        <span class="item_price">${ITEM_LIST[eq_num][i+1].item_price.toLocaleString('ko')}원</span>
                        <img src="../img/olive_young/icon_bag.png" alt="">
                        <div class="item_events">
                            ${ITEM_LIST[eq_num][i+1].sale?`<div class="item_events_sale">세일</div>`:''}
                            ${ITEM_LIST[eq_num][i+1].today_get?`<div class="item_events_today">오늘드림</div>`:''}
                            ${ITEM_LIST[eq_num][i+1].coupon?`<div class="item_events_today">오늘드림</div>`:''}
                            
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
        `
    parent.append(tmp)
    }
}
function load_items_2(){
    let tmp = 
        `
        <div class="weekly_special">
            <a href="./olive_young_special.html?cateNo=2&itemNo=${ITEM_LIST[2][0].item_no}">
                <img src="../img/olive_young/weekly_special/weekly_special_${ITEM_LIST[2][0].src}" alt="">
                <div class="weekly_txt">
                    <div>${ITEM_LIST[2][0].title1}</div>
                    <div>${ITEM_LIST[2][0].title2}</div>
                    <div class="weekly_hashtag">${ITEM_LIST[2][0].hashtag}</div>
                </div>
            </a>
        </div>
        <div class="weekly_special">
            <a href="./olive_young_special.html?cateNo=2&itemNo=${ITEM_LIST[2][1].item_no}">
                <img src="../img/olive_young/weekly_special/weekly_special_${ITEM_LIST[2][1].src}" alt="">
                <div class="weekly_txt">
                    <div>${ITEM_LIST[2][1].title1}</div>
                    <div>${ITEM_LIST[2][1].title2}</div>
                    <div class="weekly_hashtag">${ITEM_LIST[2][1].hashtag}</div>
                </div>
            </a>
        </div>
        `
    $('.weekly_special_box').eq(0).append(tmp)
    
}

function load_items_3(){
    let count = ITEM_LIST[3].length / 2
    for (let i = 0; i < count; i++) {
    let tmp = 
    `
    <div class="popular_banner">
        <div class="popular_event_sec" style="background: url(../img/olive_young/event/event${ITEM_LIST[3][2*i].src}) no-repeat top / contain">
            <div class="popular_txt">
                <div>${ITEM_LIST[3][2*i].desc1}</div>
                <div>${ITEM_LIST[3][2*i].desc2}</div>
                <div class="weekly_hashtag">${ITEM_LIST[3][2*i].brand}</div>
            </div>
            <div class="popular_event_contents_box">
                <div class="tmp_box">
                    <a href="./olive_young_item.html?cateNo=4&itemNo=${ITEM_LIST[4][4*i].item_no}">
                        <div class="popular_event_contents_img">
                            <img src="../img/olive_young/event/event_${ITEM_LIST[4][4*i].src}" alt="">
                            ${ITEM_LIST[0][i].best?`<div class="best_item">베스트</div>`:''}
                        </div>
                        <div class="sec1_contents_txt">
                            <div class="sec1_contents_item_desc">
                                <div>${ITEM_LIST[4][4*i].title1}</div>
                                <div>${ITEM_LIST[4][4*i].title2}</div>
                            </div>
                            <div class="item_price_box">
                                ${ITEM_LIST[4][4*i].original_price != undefined?`<span class="original_price">${ITEM_LIST[4][4*i].original_price.toLocaleString('ko')}원</span>`:''}
                                <span class="item_price">${ITEM_LIST[4][4*i].item_price.toLocaleString('ko')}원</span>
                                <div class="item_events">
                                    ${ITEM_LIST[4][4*i].sale?`<div class="item_events_sale">세일</div>`:''}
                                    ${ITEM_LIST[4][4*i].today_get?`<div class="item_events_today">오늘드림</div>`:''}
                                    ${ITEM_LIST[4][4*i].coupon?`<div class="item_events_coupon">쿠폰</div>`:''}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="tmp_box">
                    <a href="./olive_young_item.html?cateNo=4&itemNo=${ITEM_LIST[4][4*i+1].item_no}">
                        <div class="popular_event_contents_img">
                            <img src="../img/olive_young/event/event_${ITEM_LIST[4][4*i+1].src}" alt="">
                            ${ITEM_LIST[0][i].best?`<div class="best_item">베스트</div>`:''}
                        </div>
                        <div class="sec1_contents_txt">
                            <div class="sec1_contents_item_desc">
                                <div>${ITEM_LIST[4][4*i+1].title1}</div>
                                <div>${ITEM_LIST[4][4*i+1].title2}</div>
                            </div>
                            <div class="item_price_box">
                                ${ITEM_LIST[4][4*i+1].original_price != undefined?`<span class="original_price">${ITEM_LIST[4][4*i+1].original_price.toLocaleString('ko')}원</span>`:''}
                                <span class="item_price">${ITEM_LIST[4][4*i+1].item_price.toLocaleString('ko')}원</span>
                                <div class="item_events">
                                    ${ITEM_LIST[4][4*i+1].sale?`<div class="item_events_sale">세일</div>`:''}
                                    ${ITEM_LIST[4][4*i+1].today_get?`<div class="item_events_today">오늘드림</div>`:''}
                                    ${ITEM_LIST[4][4*i+1].coupon?`<div class="item_events_coupon">쿠폰</div>`:''}
                                </div>
                            </div>
                        </div>
                    <a>
                </div>
            </div>
        </div>
        <div class="popular_event_long_bar"></div>
        <div class="popular_event_sec" style="background: url(../img/olive_young/event/event${ITEM_LIST[3][2*i+1].src}) no-repeat top / contain">
            <div class="popular_txt">
                <div>${ITEM_LIST[3][2*i+1].desc1}</div>
                <div>${ITEM_LIST[3][2*i+1].desc2}</div>
                <div class="weekly_hashtag">${ITEM_LIST[3][2*i+1].brand}</div>
            </div>
            <div class="popular_event_contents_box">
                <div class="tmp_box">
                    <a href="./olive_young_item.html?cateNo=4&itemNo=${ITEM_LIST[4][4*i+2].item_no}">
                        <div class="popular_event_contents_img">
                            <img src="../img/olive_young/event/event_${ITEM_LIST[4][4*i+2].src}" alt="">
                            ${ITEM_LIST[0][i].best?`<div class="best_item">베스트</div>`:''}
                        </div>
                        <div class="sec1_contents_txt">
                            <div class="sec1_contents_item_desc">
                                <div>${ITEM_LIST[4][4*i+2].title1}</div>
                                <div>${ITEM_LIST[4][4*i+2].title2}</div>
                            </div>
                            <div class="item_price_box">
                                ${ITEM_LIST[4][4*i+2].original_price != undefined?`<span class="original_price">${ITEM_LIST[4][4*i+2].original_price.toLocaleString('ko')}원</span>`:''}
                                <span class="item_price">${ITEM_LIST[4][4*i+2].item_price.toLocaleString('ko')}원</span>
                                <div class="item_events">
                                    ${ITEM_LIST[4][4*i+2].sale?`<div class="item_events_sale">세일</div>`:''}
                                    ${ITEM_LIST[4][4*i+2].today_get?`<div class="item_events_today">오늘드림</div>`:''}
                                    ${ITEM_LIST[4][4*i+2].coupon?`<div class="item_events_coupon">쿠폰</div>`:''}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="tmp_box">
                    <a href="./olive_young_item.html?cateNo=4&itemNo=${ITEM_LIST[4][4*i+3].item_no}">
                        <div class="popular_event_contents_img">
                            <img src="../img/olive_young/event/event_${ITEM_LIST[4][4*i+3].src}" alt="">
                            ${ITEM_LIST[0][i].best?`<div class="best_item">베스트</div>`:''}
                        </div>
                        <div class="sec1_contents_txt">
                            <div class="sec1_contents_item_desc">
                                <div>${ITEM_LIST[4][4*i+3].title1}</div>
                                <div>${ITEM_LIST[4][4*i+3].title2}</div>
                            </div>
                            <div class="item_price_box">
                                ${ITEM_LIST[4][4*i+3].original_price != undefined?`<span class="original_price">${ITEM_LIST[4][4*i+3].original_price.toLocaleString('ko')}원</span>`:''}
                                <span class="item_price">${ITEM_LIST[4][4*i+3].item_price.toLocaleString('ko')}원</span>
                                <div class="item_events">
                                    ${ITEM_LIST[4][4*i+3].sale?`<div class="item_events_sale">세일</div>`:''}
                                    ${ITEM_LIST[4][4*i+3].today_get?`<div class="item_events_today">오늘드림</div>`:''}
                                    ${ITEM_LIST[4][4*i+3].coupon?`<div class="item_events_coupon">쿠폰</div>`:''}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `
    $('.popular_event_box').eq(0).append(tmp)

    
    }
}
function load_items_4(){
    let count = ITEM_LIST[5].length / 4
    for (let i = 0; i < count; i++) {
        let tmp = 
        `
        <div class="only_banner_sec">
            <div class="only_banner only_banner_1">
                <a href="./olive_young_special.html?cateNo=5&itemNo=${ITEM_LIST[5][3*i].item_no}">
                    <img src="../img/olive_young/only_in_oliveyoung/only_in_oliveyoung_${ITEM_LIST[5][3*i+0].src}" alt="">
                    <div class="only_banner_txt">
                        <div>${ITEM_LIST[5][3*i+0].title1}</div>
                        <div>${ITEM_LIST[5][3*i+0].title2}</div>
                        <div class="only_txt_desc">${ITEM_LIST[5][3*i+0].hashtag}</div>
                    </div>
                </a>
            </div>
            <div class="only_banner only_banner_2">
                <a href="./olive_young_special.html?cateNo=5&itemNo=${ITEM_LIST[5][3*i+1].item_no}">
                    <img src="../img/olive_young/only_in_oliveyoung/only_in_oliveyoung_${ITEM_LIST[5][3*i+1].src}" alt="">
                    <div class="only_banner_txt">
                        <div>${ITEM_LIST[5][3*i+1].title1}</div>
                        <div>${ITEM_LIST[5][3*i+1].title2}</div>
                        <div class="only_txt_desc">${ITEM_LIST[5][3*i+1].hashtag}</div>
                    </div>
                </a>
            </div>
            <div class="only_banner only_banner_3">
                <a href="./olive_young_special.html?cateNo=5&itemNo=${ITEM_LIST[5][3*i+2].item_no}">
                    <img src="../img/olive_young/only_in_oliveyoung/only_in_oliveyoung_${ITEM_LIST[5][3*i+2].src}" alt="">
                    <div class="only_banner_txt">
                        <div>${ITEM_LIST[5][3*i+2].title1}</div>
                        <div>${ITEM_LIST[5][3*i+2].title2}</div>
                        <div class="only_txt_desc">${ITEM_LIST[5][3*i+2].hashtag}</div>
                    </div>
                </a>
            </div>
        </div>
        `
        $('.only_banner_box').append(tmp)
    }
}

function load_items_5(){
    count = ITEM_LIST[6].length/4
    for (let i = 0; i < count; i+=1) {
        let tmp = 
        `
    <div class="how_about_box">
        <div class="sec1_contents">
            <a href="./olive_young_item.html?cateNo=6&itemNo=${ITEM_LIST[6][4*i].item_no}">
                <div class="sec1_contents_img">
                    <img src="../img/olive_young/how_about_this/how_about_this_${ITEM_LIST[6][4*i].src}" alt="">
                    ${ITEM_LIST[6][4*i].best?`<div class="best_item">베스트</div>`:''}
                </div>
                <div class="sec1_contents_txt">
                    <div class="sec1_contents_item_desc">
                        <div>${ITEM_LIST[6][4*i].title1}</div>
                        <div>${ITEM_LIST[6][4*i].title2}</div>
                    </div>
                    <div class="item_price_box">
                        ${ITEM_LIST[6][4*i].original_price != undefined?`<span class="original_price">${ITEM_LIST[6][4*i].original_price.toLocaleString('ko')}원</span>`:''}
                        <span class="item_price">${ITEM_LIST[6][4*i].item_price.toLocaleString('ko')}원</span>
                        <div class="item_events">
                            ${ITEM_LIST[6][4*i].sale?`<div class="item_events_sale">세일</div>`:''}
                            ${ITEM_LIST[6][4*i].today_get?`<div class="item_events_today">오늘드림</div>`:''}
                            ${ITEM_LIST[6][4*i].coupon?`<div class="item_events_coupon">쿠폰</div>`:''}
                            
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="sec1_contents">
            <a href="./olive_young_item.html?cateNo=6&itemNo=${ITEM_LIST[6][4*i+1].item_no}">
                <div class="sec1_contents_img">
                    <img src="../img/olive_young/how_about_this/how_about_this_${ITEM_LIST[6][4*i+1].src}" alt="">
                    ${ITEM_LIST[6][4*i+1].best?`<div class="best_item">베스트</div>`:''}
                </div>
                <div class="sec1_contents_txt">
                    <div class="sec1_contents_item_desc">
                        <div>${ITEM_LIST[6][4*i+1].title1}</div>
                        <div>${ITEM_LIST[6][4*i+1].title2}</div>
                    </div>
                    <div class="item_price_box">
                        ${ITEM_LIST[6][4*i+1].original_price != undefined?`<span class="original_price">${ITEM_LIST[6][4*i+1].original_price.toLocaleString('ko')}원</span>`:''}
                        <span class="item_price">${ITEM_LIST[6][4*i+1].item_price.toLocaleString('ko')}원</span>
                        <div class="item_events">
                            ${ITEM_LIST[6][4*i+1].sale?`<div class="item_events_sale">세일</div>`:''}
                            ${ITEM_LIST[6][4*i+1].today_get?`<div class="item_events_today">오늘드림</div>`:''}
                            ${ITEM_LIST[6][4*i].coupon?`<div class="item_events_coupon">쿠폰</div>`:''}
                            
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="sec1_contents">
            <a href="./olive_young_item.html?cateNo=6&itemNo=${ITEM_LIST[6][4*i+2].item_no}">
                <div class="sec1_contents_img">
                    <img src="../img/olive_young/how_about_this/how_about_this_${ITEM_LIST[6][4*i+2].src}" alt="">
                    ${ITEM_LIST[6][4*i+2].best?`<div class="best_item">베스트</div>`:''}
                </div>
                <div class="sec1_contents_txt">
                    <div class="sec1_contents_item_desc">
                        <div>${ITEM_LIST[6][4*i+2].title1}</div>
                        <div>${ITEM_LIST[6][4*i+2].title2}</div>
                    </div>    
                    <div class="item_price_box">
                        ${ITEM_LIST[6][4*i+2].original_price != undefined?`<span class="original_price">${ITEM_LIST[6][4*i+2].original_price.toLocaleString('ko')}원</span>`:''}
                        <span class="item_price">${ITEM_LIST[6][4*i+2].item_price.toLocaleString('ko')}원</span>
                        <div class="item_events">
                            ${ITEM_LIST[6][4*i+2].sale?`<div class="item_events_sale">세일</div>`:''}
                            ${ITEM_LIST[6][4*i+2].today_get?`<div class="item_events_today">오늘드림</div>`:''}
                            ${ITEM_LIST[6][4*i].coupon?`<div class="item_events_coupon">쿠폰</div>`:''}
                            
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="sec1_contents">
            <a href="./olive_young_item.html?cateNo=6&itemNo=${ITEM_LIST[6][4*i+3].item_no}">
                <div class="sec1_contents_img">
                    <img src="../img/olive_young/how_about_this/how_about_this_${ITEM_LIST[6][4*i+3].src}" alt="">
                    ${ITEM_LIST[6][4*i+3].best?`<div class="best_item">베스트</div>`:''}
                </div>
                <div class="sec1_contents_txt">
                    <div class="sec1_contents_item_desc">
                        <div>${ITEM_LIST[6][4*i+3].title1}</div>
                        <div>${ITEM_LIST[6][4*i+3].title2}</div>
                    </div>
                    <div class="item_price_box">
                        ${ITEM_LIST[6][4*i+3].original_price != undefined?`<span class="original_price">${ITEM_LIST[6][4*i+3].original_price.toLocaleString('ko')}원</span>`:''}
                        <span class="item_price">${ITEM_LIST[6][4*i+3].item_price.toLocaleString('ko')}원</span>
                        <div class="item_events">
                            ${ITEM_LIST[6][4*i+3].sale?`<div class="item_events_sale">세일</div>`:''}
                            ${ITEM_LIST[6][4*i+3].today_get?`<div class="item_events_today">오늘드림</div>`:''}
                            ${ITEM_LIST[6][4*i].coupon?`<div class="item_events_coupon">쿠폰</div>`:''}

                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
        `
    $('.how_about_banner_box').append(tmp)
    }
}
function load_items_6(){
    let count = ITEM_LIST[7].length
    for (let i = 0; i < count; i++) {
    let tmp1 = 

    `
    <div class="lots_of_left_contents">
        <a href="./olive_young_item.html?cateNo=7&itemNo=${ITEM_LIST[7][i].item_no}">
            <img class="lots_of_left_img" src="../img/olive_young/lots_of_view/lots_of_view_${ITEM_LIST[7][i].src}" alt="">
            <div class="lots_of_left_txt">
                <div class="viewing">
                    n명이 보고있어요
                </div>
                <div class="lots_of_item_title">
                    짱짱쿠션
                </div>
                <div class="lots_of_item_desc">
                    ${ITEM_LIST[7][i].title1}
                    ${ITEM_LIST[7][i].title2}
                </div>
                <div class="item_price_box">
                    ${ITEM_LIST[7][i].original_price != undefined?`<span class="original_price">${ITEM_LIST[7][ i].original_price.toLocaleString('ko')}원</span>`:''}
                    <span class="item_price">${ITEM_LIST[7][   i].item_price.toLocaleString('ko')}원</span>
                    <div class="item_events">
                        ${ITEM_LIST[7][i].sale?`<div class="item_events_sale">세일</div>`:''}
                        ${ITEM_LIST[7][i].today_get?`<div class="item_events_today">오늘드림</div>`:''}
                        ${ITEM_LIST[7][i].coupon?`<div class="item_events_coupon">쿠폰</div>`:''}

                    </div>
                </div>

            </div>
        </a>
    </div>
        `

    let tmp2 = 
    `
        <div class="lots_of_right_contents">
            <div class="lots_of_right_no">${i+1}</div>
            <div class="lots_of_right_name">
                    ${ITEM_LIST[7][i].title1}
                    ${ITEM_LIST[7][i].title2}
            </div>
        </div>
    `

    $('.lots_of_left').append(tmp1)
    $('.lots_of_right_box').append(tmp2)
    
    }    

}

function load_items_7(eq_num, cate_no){
    let tmp_cate_no = 0;
    if (cate_no==2){
        tmp_cate_no = +cate_no+6
    }
    else if(cate_no==5){
        tmp_cate_no = +cate_no + 5
    }
    console.log(ITEM_LIST[+tmp_cate_no + eq_num][0])
    
    count = ITEM_LIST[+tmp_cate_no + eq_num].length
    for (let i = 0; i < count; i+=1) {
        let tmp = 
        `

        <div class="sec1_contents">
            <a href="./olive_young_item.html?cateNo=${eq_num + tmp_cate_no}&itemNo=${i+1}">
                <div class="sec1_contents_img">
                    <img src="../img/olive_young/${menu_array[+tmp_cate_no+eq_num]}/${menu_array[+tmp_cate_no + eq_num]}_${i+1}.jpg" alt="">
                    
                    ${ITEM_LIST[+tmp_cate_no + eq_num][i].best?`<div class="best_item">베스트</div>`:''}
                </div>
                <div class="sec1_contents_txt">
                    <div class="sec1_contents_item_desc">
                        <div>${ITEM_LIST[+tmp_cate_no + eq_num][i].title1}</div>
                        <div>${ITEM_LIST[+tmp_cate_no + eq_num][i].title2}</div>
                    </div>
                    <div class="item_price_box">
                        ${ITEM_LIST[+tmp_cate_no + eq_num][i].original_price != undefined?`<span class="original_price">${ITEM_LIST[+tmp_cate_no + eq_num][i].original_price.toLocaleString('ko')}원</span>`:''}
                        <span class="item_price">${ITEM_LIST[+tmp_cate_no + eq_num][i].item_price.toLocaleString('ko')}원</span>
                        <div class="item_events">
                            ${ITEM_LIST[+tmp_cate_no + eq_num][i].sale?`<div class="item_events_sale">세일</div>`:''}
                            ${ITEM_LIST[+tmp_cate_no + eq_num][i].today_get?`<div class="item_events_today">오늘드림</div>`:''}
                            ${ITEM_LIST[+tmp_cate_no + eq_num][i].coupon?`<div class="item_events_coupon">쿠폰</div>`:''}
                            
                        </div>
                    </div>
                </div>
            </a>
        </div>
                `
    $('.special_item_box').append(tmp)
    }
}




function get_url_info(key) {
    let url = location.href; 
    // file:///C:/Users/user1/Desktop/web/244.theComma(product).html?cateNo=0
    // 245.theComma(item).html?cateNo=0&itemNo=4#review
    
    url = url.split("?")[1];
    url = url.split("#")[0];
    // [file:///C:/Users/user1/Desktop/web/244.theComma(product).html , ddd=099&cateNo=0]
    // [245.theComma(item).html , cateNo=0&itemNo=4#review]
    // [cateNo=0&itemNo=4 , review]

    url = url.split("&"); // [ddd=099 , cateNo=0]

    for(let i=0; i<url.length; i++) {
        let tmp = url[i].split("="); // [ddd , 099],   [cateNo , 0]

        if(tmp[0] == key) {
            return tmp[1]
        }
    }
    return null;
}