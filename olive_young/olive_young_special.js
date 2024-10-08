let cateNo = get_url_info("cateNo");
let itemNo = get_url_info("itemNo")-1;

const ITEM = ITEM_LIST[cateNo][itemNo];


let list = `

<div class="special_title">
<div class="special_title_txt">${ITEM.name}</div>
<div class="social_media"></div>
</div>
<div class="special_img">
<img src="../img/olive_young/${menu_array[cateNo]}/${menu_array[cateNo]}_${itemNo+1}.jpg" alt="">
</div>
<div class="special_nav">
<div class="special_li">전체</div>
<div class="special_li">${ITEM.title1} ${ITEM.title2}</div>
<div class="special_li"></div>
<div class="special_li"></div>
</div>
<div class="special_item_header"
style="background:${ITEM.color}"
>${ITEM.title1} ${ITEM.title2}</div>
<div class="special_item_box">
</div>
<div class="special_long_bar"></div>

`
$('.contents_area.main').append(list)

load_items_7(itemNo, cateNo)


$(document).ready(function(){

})