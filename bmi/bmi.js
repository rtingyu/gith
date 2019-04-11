// var tall = document.getElementById('tall');
// var weight = document.getElementById('weight');
var bmiresult = document.getElementById('bmibt');

// bmiresult.click=function () {}

bmiresult.addEventListener('click', bmi, false);

var data = JSON.parse(localStorage.getItem('listData')) || [];
uplist(data);


function bmi() {
    var tall = document.getElementById('tall').value;
    // 寫在裡面的話，還未轉型才可以測試是否為空值，如是parseInt後都沒有寫資料的空值，則可能視為0，所以才無法執行!!
    var weight = document.getElementById('weight').value;

    if (tall == '' && weight == '') {
        document.querySelector(".tallerror").textContent = '請填入資料';
        document.querySelector('#tall').style.borderColor = '#64646473';
        document.querySelector(".weighterror").textContent = '請填入資料';
        document.querySelector('#weight').style.borderColor = '#64646473';

        return;
    } else if (tall == '') {
        document.querySelector(".tallerror").textContent = '請填入資料';
        // document.querySelector('#tall').style.border = '0px';比較不顯眼
        document.querySelector('#tall').style.borderColor = '#64646473';

        return;
    } else if (weight == '') {
        document.querySelector(".weighterror").textContent = '請填入資料';
        document.querySelector('#weight').style.borderColor = '#64646473';
        // document.querySelector('#weight').style.borderColor = '#ee9044';
        // !!js改css，borderColor的位置是寫預更改的cssText，不是寫像css，border-color這樣會出錯，無法執行
        // http://easonyo.pixnet.net/blog/post/22306963-javascript%E4%BF%AE%E6%94%B9css%E6%A8%A3%E5%BC%8F
        return;
    }

    tall = parseInt(document.getElementById('tall').value) / 100;;
    // console.log(typeof(tall));
    // console顯示nan有時表示沒有連線
    weight = parseInt(document.getElementById('weight').value)
        // console.log(tall);
        // console.log(weight);
        // var bminum = 　Math.round(weight / (tall * tall));
        // Math.round取到整數
    var bminum = 　weight / (tall * tall);
    // bminum　 = bminum.toFixed(2);
    //  bminum.toFixed(2) 原始資料取到小數第二位，四捨五入
    bminum = Math.floor(bminum * 100) / 100;
    // Math.floor是可以第二位後無條件捨去，但注意：Math.floor()容易出現精度問題
    // https://translate.google.com.tw/translate?hl=zh-TW&sl=zh-CN&u=http://www.runoob.com/w3cnote/javascript-two-decimal.html&prev=search
    //  http://i-yow.blogspot.com/2010/08/javascript.html
    // http://sendohlun.pixnet.net/blog/post/452989010-%5Bjavascript%5D-tofixed-%E5%8F%96%E5%B0%8F%E6%95%B8%E9%BB%9E%E7%AC%AC%E5%B9%BE%E4%BD%8D-%26%26-parsefloat-%E5%8E%BB

    // http://www.itread01.com/content/1498655047.html
    // file:///C:/Users/USER/Desktop/%E5%87%BD%E=


    // if (bminum < 18.5) {
    //     console.log('體重過輕了唷，要吃胖點');
    // } else if (18.5 <= bminum < 24) {
    //     console.log('正常範圍，很棒唷');
    // } else if (24 <= bminum < 27) {
    //     console.log('體重過重了唷，要注意一下');
    // } else {
    //     console.log('體重過重了唷，屬於重度肥胖了!，趕快減肥');
    // } 數學式子才會寫這樣18.5 <= bminum < 24，這種的程式無法辨認，
    // 要寫成bminum >= 18.5 && bminum < 24，才是程式的寫法，才能正確輸出!!

    if (bminum < 18.5) {
        document.querySelector('.bmibt').style.cssText = 'border:5px solid #31baf9;color:#31baf9 ; background-color:transparent ; font-size : 32px  ; line-height:90px;box-shadow:none';
        // 語法
        // https://translate.google.com.tw/translate?hl=zh-TW&sl=en&u=https://www.w3schools.com/jsref/prop_style_csstext.asp&prev=search
        document.querySelector('.bmibt').textContent = bminum;
        // document.querySelector('.bmilogo').style.cssText = 'display:block;color:#31baf9';

        var str = document.createElement('p');
        str.textContent = 'BMI';
        str.setAttribute('class', 'bmilogo');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmilogo').style.cssText = 'color:#31baf9';

        var str = document.createElement('p');
        str.textContent = '過輕';
        str.setAttribute('class', 'bmitext');
        document.querySelector('.bmibt').appendChild(str);
        // document.querySelector('.bmitext').textContent = '過輕';
        document.querySelector('.bmitext').style.cssText = 'color:#31baf9';

        // var todo = {
        //     content: str,
        //     bmi: bminum,
        //     tall: tall,
        //     weight: weight,
        // };
        //無法


        var str = document.createElement('p');
        str.setAttribute('class', 'bmiicon');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmiicon').style.cssText = 'background-color:#31baf9';

        console.log('體重過輕了唷，要吃胖點');
        document.querySelector('.list').style.cssText = 'border-left: 7px solid #31baf9;display:block';

        // data.push(todo);
        // localStorage.setItem('listData', JSON.stringify(data));
        // uplist(data);
        // 無法


        // document.querySelector('.list').style.cssText = 'border-left: 7px solid #31baf9;display:block';
        // var list = document.querySelector('.list');
        // var str = '<li>過輕<sapn class="ts1">BMI</sapn>' + bminum + '<sapn class="ts1">weight</sapn>' + weight + '<sapn class="ts1">height</sapn>' + tall + '</li>';
        // list.innerHTML = str
        // 直接用innerHTML寫在這裡面，會刪除原本的資料，覆蓋新的一筆資料;
        // 或許可以寫副程式，在這裏面呼叫即可



    } else if (bminum >= 18.5 && bminum < 24) {
        document.querySelector('.bmibt').style.cssText = 'border:5px solid #86d73f ;color:#86d73f ; background-color:transparent; font-size : 32px; line-height:90px;box-shadow:none';
        document.querySelector('.bmibt').textContent = bminum;

        var str = document.createElement('p');
        str.textContent = 'BMI';
        str.setAttribute('class', 'bmilogo');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmilogo').style.cssText = 'color:#86d73f';
        // 注意這行樣式寫在還未組成的段落前，會無法執行!!

        var str = document.createElement('p');
        str.textContent = '理想';
        str.setAttribute('class', 'bmitext');
        document.querySelector('.bmibt').appendChild(str);
        // document.querySelector('.bmitext').textContent = '理想';
        document.querySelector('.bmitext').style.cssText = 'color:#86d73f';
        console.log('正常範圍，很棒唷');

        var str = document.createElement('p');
        str.setAttribute('class', 'bmiicon');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmiicon').style.cssText = 'background-color:#86d73f';

        document.querySelector('.list').style.cssText = 'border-left: 7px solid #86d73f;display:block';
    } else if (bminum >= 24 && bminum < 27) {
        document.querySelector('.bmibt').style.cssText = 'border:5px solid #ff982d ; color:#ff982d ;background-color:transparent; font-size : 32px; line-height:90px;box-shadow:none'
        document.querySelector('.bmibt').textContent = bminum;

        var str = document.createElement('p');
        str.textContent = 'BMI';
        str.setAttribute('class', 'bmilogo');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmilogo').style.cssText = 'color:#ff982d';

        var str = document.createElement('p');
        str.textContent = '過重';
        str.setAttribute('class', 'bmitext');
        document.querySelector('.bmibt').appendChild(str);
        // document.querySelector('.bmitext').textContent = '過重';
        document.querySelector('.bmitext').style.cssText = 'color:#ff982d';

        var str = document.createElement('p');
        str.setAttribute('class', 'bmiicon');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmiicon').style.cssText = 'background-color:#ff982d';

        console.log('體重過重了唷，要注意一下');
    } else if (bminum >= 27 && bminum < 30) {
        document.querySelector('.bmibt').style.cssText = 'border:5px solid #ff6c03; color:#ff6c03;background-color:transparent; font-size : 32px; line-height:90px;box-shadow:none';
        document.querySelector('.bmibt').textContent = bminum;

        var str = document.createElement('p');
        str.textContent = 'BMI';
        str.setAttribute('class', 'bmilogo');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmilogo').style.cssText = 'color:#ff6c03';

        var str = document.createElement('p');
        str.textContent = '輕度肥胖';
        str.setAttribute('class', 'bmitext');
        document.querySelector('.bmibt').appendChild(str);
        // document.querySelector('.bmitext').textContent = '輕度肥胖';
        // document.querySelector('.bmitext').style.cssText = 'color:#ff6c03;right:200px';
        document.querySelector('.bmitext').style.cssText = 'color:#ff6c03;width:150px';

        var str = document.createElement('p');
        str.setAttribute('class', 'bmiicon');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmiicon').style.cssText = 'background-color:#ff6c03';

        console.log('體重過重了唷，屬於輕度肥胖了');
    } else if (bminum >= 30 && bminum < 35) {
        document.querySelector('.bmibt').style.cssText = 'border:5px solid #ff6c03 ;color:#ff6c03;background-color:transparent; font-size : 32px; line-height:90px;box-shadow:none';
        document.querySelector('.bmibt').textContent = bminum;

        var str = document.createElement('p');
        str.textContent = 'BMI';
        str.setAttribute('class', 'bmilogo');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmilogo').style.cssText = 'color:#ff6c03';


        // document.querySelector('.bmitext').textContent = '中度肥胖';

        var str = document.createElement('p');
        str.textContent = '中度肥胖';
        str.setAttribute('class', 'bmitext');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmitext').style.cssText = 'color:#ff6c03;width:150px';
        console.log('體重過重了唷，屬於中度肥胖了!');

        var str = document.createElement('p');
        str.setAttribute('class', 'bmiicon');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmiicon').style.cssText = 'background-color:#ff6c03';


    } else {
        document.querySelector('.bmibt').style.cssText = 'border:5px solid #ff1200 ;color:#ff1200;background-color:transparent; font-size : 32px; line-height:90px;box-shadow:none';
        document.querySelector('.bmibt').textContent = bminum;

        var str = document.createElement('p');
        str.textContent = 'BMI';
        str.setAttribute('class', 'bmilogo');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmilogo').style.cssText = 'color:#ff1200';

        var str = document.createElement('p');
        str.textContent = '重度肥胖';
        str.setAttribute('class', 'bmitext');
        document.querySelector('.bmibt').appendChild(str);
        // document.querySelector('.bmitext').textContent = '重度肥胖';
        document.querySelector('.bmitext').style.cssText = 'color:#ff1200;width:150px';
        console.log('體重過重了唷，屬於重度肥胖了!，趕快減肥');

        var str = document.createElement('p');
        str.setAttribute('class', 'bmiicon');
        document.querySelector('.bmibt').appendChild(str);
        document.querySelector('.bmiicon').style.cssText = 'background-color:#ff1200';
    }

}
// bmi公式 http://depart.femh.org.tw/dietary/3opd/bmi.htm


// 7/6把下面的提示輸入p段落，用innerHtml帶進去比較好?(解決)
// 7/6還未更改輸入資料後，要把p輸入提示去掉不顯示(解決)
// 7/7還未解決顯示結果顏色跟文字(解決)

var tall = document.getElementById('tall');
var weight = document.getElementById('weight');

tall.addEventListener('blur', invalue, false);
weight.addEventListener('blur', invalue2, false);

function invalue(e) {
    var el = e.target.value;
    if (el != '') {
        document.querySelector(".bmierror").textContent = '';
        document.querySelector('#tall').style.borderColor = '#ffd366';
    } else {
        // var str = document.createElement('p');
        // str.textContent = '請填入資料';
        // str.setAttribute('class', 'bmierror');
        // document.querySelector('#tt1').appendChild(str);
        // 用createElement也可以，但有個缺點是只要點後失去焦點，他會一直組字串下去，變成很多的P請填入資料！！
        // 且用createElement會出現再填寫後，提示文字還不會自動消失的缺點！！必須刪除剛增加的提示文字！！
        document.querySelector(".tallerror").textContent = '請填入資料';
        document.querySelector('#tall').style.borderColor = '#64646473';
    }
}
// blur else的部分是在按之前就檢查好， 但如果只有blur，使用者直接按看結果，就不會出現提示請填入資料的文字，因此要雙重檢查得比較好，blur&click都有!!

function invalue2(e) {
    var el = e.target.value;
    if (el != '') {
        document.querySelector(".weighterror").textContent = '';
        document.querySelector('#weight').style.borderColor = '#ffd366';
    } else {
        // var str = document.createElement('p');
        // str.textContent = '請填入資料';
        // str.setAttribute('class', 'bmierror');
        // document.querySelector('#ww1').appendChild(str);
        document.querySelector(".weighterror").textContent = '請填入資料';
        document.querySelector('#weight').style.borderColor = '#64646473';
    }
}



// 7/11 不能用innerHTML加入請輸入資料的P段落，因為會把前面身高&input的資料都刪掉!!
// innerHTML有個特性是會把選擇的原先值清空掉，再把賦予的值帶入!!
// 但用innerHTML的話，可再寫一個空的div加入p段落跟文字，就不會影響到前面的值，但就跟原本寫p後來加入文字差不多一樣@@!!
// 用createElement也可以，但有個缺點是只要點後失去焦點，他會一直組字串下去，變成很多的P請填入資料！！
// 且用createElement會出現再填寫後，提示文字還不會自動消失的缺點！！必須刪除剛增加的提示文字！！

// 7/12　按鈕看結果，在重新輸入數字後，要先回復按鈕的部分（改了成功）！！

tall.addEventListener('focus', rebtn, false);
weight.addEventListener('focus', rebtn, false);

function rebtn(e) {
    document.querySelector('.bmibt').style.cssText = 'background: #ffd466';
    document.querySelector('.bmibt').textContent = '看結果';
    // document.querySelector('.bmilogo').style.cssText = 'display:none';
    // document.querySelector('.bmitext').style.cssText = 'display:none';
}

// 7/12用全螢幕bmilogo&顯示文字跑掉了TT，明天改再用一個div包新的的顯示結果好了，再把原來得看結果隱藏起來
// 三塊排版用div排家內外距比較好，float不好排

//7/13把bmilogo用組字串的方式再後來加入，就不會因為textcONTENT只能加入單資料，而無法呈現，並且組字串的樣子新增必須寫在字串後面，才能執行

//7/14或許可以把重複帶入的資料，在寫個function代變數進去，之後點擊再呼叫函數即可!!(優化)

//7/15明天要用按鈕的小圓圈(解決)用background改

// 7/16要加入紀錄，之後看重複的程式，能否優化用呼叫

// 7/17先把紀錄弄好，再用看看ps結果圈圈

// 看結果和結果文字可用兩種html div寫，後者先隱藏


function addDate(e) {
    var todo = {
        content: str,
        bmi: bminum,
        tall: tall,
        weight: weight,
    };
    data.push(todo);
    uplist(data);
    localStorage.setItem('listData', JSON.stringify(data));
}

var list = document.querySelector('.list');

function uplist(data) {
    var str = '';
    var len = data.length;
    for (i = 0; i < len; i++) {
        str += '<li>' + data[i].content + '<sapn class="ts1">BMI</sapn>' + data[i].bmi + '<sapn class="ts1">weight</sapn>' + data[i].weight + '<sapn class="ts1">height</sapn>' + data[i].tall + '</li>';
    }
    list.innerHTML = str;
}
// 7/30無法顯示在頁面上