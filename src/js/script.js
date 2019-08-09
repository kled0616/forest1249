var list = document.querySelector('.list'); //計算完新增資了
var Count = document.querySelector('.Count'); //計算的按鈕
var data = JSON.parse(localStorage.getItem('listData')) || [];//存入的值
Count.addEventListener('click', addData);//計算的按鈕
list.addEventListener('click', DeleteButton);//刪除的按鈕
updateList(data); //初始化JSON上Data的資料


function addData(e) {  //資料處理DAS
    e.preventDefault();
    var heightStr = document.querySelector('.height').value;
    var weightStr = document.querySelector('.weight').value;
    var BMI = ((weightStr / (Math.pow(heightStr, 2))) * 10000).toFixed(2);;


    var todo = {
        Counter: heightStr, weightStr, BMI//就是上面height欄位的資料
    };
    data.push(todo);
    updateList(data);
    localStorage.setItem('listData', JSON.stringify(data)); //把data存在listData 再把JSON.stringify便字串
}








function updateList(items) {   //輸出處理-->第8句-->第3句存入的值去跑回圈後才能用刪除的部分
    str = '';
    var len = items.length;
    for (var i = 0; i < len; i++) {


        if (items[i].BMI != "NaN" && items[i].BMI != "Infinity" && items[i].BMI != "0.00") {

            if (items[i].BMI < 18.5) {
                str += '<li class="BMI_content  BMI_content_level_1"><a href="#" data-index=' + i + ' />  刪除</a> <span >' + "<span class='mr-50'> 理想</span>身高 : " + items[i].Counter + "cm <span class='mr-50'></span>體重 : " + items[i].weightStr + "kg<span class='mr-50'></span>BMI : " + items[i].BMI + '</span></li><br>';

            } else if (18.5 <= items[i].BMI && items[i].BMI < 24) {
                str += '<li class="BMI_content  BMI_content_level_2"><a href="#" data-index=' + i + ' />刪除</a> <span>' + "<span class='mr-50'>過輕</span>身高 : " + items[i].Counter + "cm <span class='mr-50'></span>體重 : " + items[i].weightStr + "kg<span class='mr-50'></span>BMI : " + items[i].BMI + '</span></li><br>';
            } else if (24 <= items[i].BMI && items[i].BMI < 27) {
                str += '<li class="BMI_content  BMI_content_level_3"><a href="#" data-index=' + i + ' />刪除</a> <span>' + "<span class='mr-50'>過重</span>身高 : " + items[i].Counter + "cm <span class='mr-50'></span>體重 : " + items[i].weightStr + "kg<span class='mr-50'></span>BMI : " + items[i].BMI + '</span></li><br>';
            } else if (27 <= items[i].BMI && items[i].BMI < 30) {
                str += '<li class="BMI_content  BMI_content_level_4"><a href="#" data-index=' + i + ' />刪除</a> <span>' + "<span class='mr-50'>輕度肥胖</span>身高 : " + items[i].Counter + "cm <span class='mr-50'></span>體重 : " + items[i].weightStr + "kg<span class='mr-50'></span>BMI : " + items[i].BMI + '</span></li><br>';
            } else if (30 <= items[i].BMI && items[i].BMI < 35) {
                str += '<li class="BMI_content  BMI_content_level_5"><a href="#" data-index=' + i + ' />刪除</a> <span>' + "<span class='mr-50'>中度肥胖</span>身高 : " + items[i].Counter + "cm <span class='mr-50'></span>體重 : " + items[i].weightStr + "kg<span class='mr-50'></span>BMI : " + items[i].BMI + '</span></li><br>';
            } else {
                str += '<li class="BMI_content  BMI_content_level_6"><a href="#" data-index=' + i + ' />刪除</a> <span>' + "<span class='mr-50'>重度肥胖</span>身高 : " + items[i].Counter + "cm <span class='mr-50'></span>體重 : " + items[i].weightStr + "kg<span class='mr-50'></span>BMI : " + items[i].BMI + '</span></li><br>';
            }
        } else {
            str += '<li class="BMI_content  BMI_content_level_7"><a href="#" data-index=' + i + ' />刪除</a> <span>輸入錯誤</span></li><br>';

        }



    }
    list.innerHTML = str;
}
function DeleteButton(e) {//刪除的按鈕
    e.preventDefault();
    if (e.target.tagName != 'A') { return };
    var index = e.target.dataset.index;
    data.splice(index, 1);
    localStorage.setItem('listData', JSON.stringify(data));
    updateList(data);
}



