// ==UserScript==
// @name         10.0.0.55 enhance
// @namespace    http://tampermonkey.net/
// @version      0.9.7
// @description  make 10.0.0.55 clearer and better
// @author       FKYnJYQ
// @match        http://10.0.0.55/srun_portal_pc.php?ac_id=*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

// 注意还有头文件在TM编辑器中

// 加入此句以消除GM的影响
// https://stackoverflow.com/questions/12146445/jquery-in-greasemonkey-1-0-conflicts-with-websites-using-jquery
// this.$ = this.jQuery = jQuery.noConflict(true);
// 不要了

(function () {
    'use strict';

    $("style").remove(); {
        GM_addStyle(`
.hbtn,#button {
position: relative;
box-sizing: border-box;
display: inline-block;
overflow: hidden;
padding: 8px 20px;
margin: 0px 3px 6px;
text-align: center;
border: 2px solid rgb(255, 255, 255);
text-decoration: none;
color: rgb(255, 255, 255);
white-space: nowrap;
z-index: 0;

}


.hbtn i,#button {
padding-right: 8px;
}


.hb-border-bottom-br4 ,#button {
position: relative;
transition-duration: 0.3s;
overflow: visible;
box-sizing: border-box;
border: none;
padding: 10px 22px;

transition: box-shadow 0.3s ease-in-out;
}


.hb-border-bottom-br4::after ,#button::after {
box-sizing: border-box;
position: absolute;
width: 100%;
height: 100%;
content: "";
border: 2px solid rgb(255, 255, 255);
z-index: 2;
margin: 0px;
left: 0px;
bottom: 0px;
border-top-width: 2px;
transition: border-top-width 0.1s 0.2s, height 0.2s 0.1s, width 0.2s 0s, margin 0.2s 0s, border-bottom-width 0.2s 0s;
box-shadow: 3px 4px 6px rgba(27,31,35,0.35);
}


.hb-border-bottom-br4:hover::after ,#button:hover::after{
width: 60%;
height: 0px;
border-width: 0px 2px 4px;
margin: 0px 20%;
transition: border-top-width 0.1s 0s, height 0.2s 0.1s, width 0.2s 0.2s, margin 0.2s 0.2s, border-bottom-width 0.2s 0.2s;

opacity: 1;
}

*{
font-family: monospace;
box-sizing:border-box;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
border: 0;
-webkit-text-fill-color: white;
background: transparent !important;
transition: background-color 5000s ease-in-out 0s;
}

@-webkit-keyframes autofill {
to {
color: #FFFFFF;
background: transparent;
}
}

input:-webkit-autofill {
-webkit-animation-name: autofill;
-webkit-animation-fill-mode: both;
}
`);

    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function pick_color() {
        return bg_colors[getRandomInt(bg_colors.length)];
    }
    function htmlEncode(value){
        return $('<div/>').text(value).html();
    }
    var Local = {}
    Local.username = GM_getValue("username") || "";
    Local.password = GM_getValue("password") || "";
    Local.input_text = GM_getValue("input_text") || "For Freedom";

    var bg_colors = [
        "#777FAD", "#880E4F", "#3F51B5",
        "#2196F3", "#0081EA", "#0097A7", "#009688", "#71897E",
        "#C8967B", "#616161", "#607D8B", "#516B85",
        "#688D68", "#874F59","#86CC73","#FF8E88","#CCBDB6","#5F8597","#674172","#013243",
        "#22313F","#336E7B","#1E824C"
    ];
    var bg_color = pick_color();


    $(".logo").remove();
    //     $("body").css("background-image","url(http://localhost:10000/bg-1.JPG)");
    $("body").css("background-color", bg_color);
    $(" ul.login>li:nth-child(3)>label:nth-child(2)").remove();
    $("label.margbt").remove();
    //     $(".container").css("height","-webkit-fill-available");
    $("p.margbt").remove();
    $(".float_l").remove();
    $(".footer").remove();
    $(".navbar").remove();
    $(".a.a_demo_one, #pc_logout, #goto_services").addClass("hbtn").addClass("hb-border-bottom-br4").removeClass("a_demo_one");
    $("body").css("margin", "0");
    $("body").append($(`<div id="menu" >
<div><div>
<a href="http://10.0.0.54:8800" target="_blank" class ="hbtn hb-border-bottom-br4">自服务</a>
</div></div>
<div><div>
<a href="http://nsc-mis.info.bit.edu.cn/selfServicePaid" target="_blank" class ="hbtn hb-border-bottom-br4">在线充值</a>
</div></div>
<div><div>
<a class ="hbtn hb-border-bottom-br4"> <input type="text" id="input_text"> </a>
</div></div>
<div><div>
<a class ="hbtn hb-border-bottom-br4">some</a>
</div></div>
</div>`));
    $("body").append($('<div id="yingying" ><a id="ying" class="hbtn hb-border-bottom-br4" style="font-size:40px">Welcome To BIT</a></div>'));
    $("body").append($(`<div id="form" >
<form autocomplete="nope">
<div><div><div class="hbtn hb-border-bottom-br4" ><input type="edmail" name="edmail" id="GM_username" autocomplete="nope" disableautocomplete></div></div></div>
<div><div><div class="hbtn hb-border-bottom-br4" ><input type="password" name="firstname" id="GM_password" autocomplete="nope" disableautocomplete></div></div></div>
</form>
</div>`));


    // set value in GM_*

    $("#GM_username")[0].value = Local.username;
    $("#GM_password")[0].value = Local.password;
    $("#input_text")[0].value = Local.input_text;

    $("#ying").text(Local.input_text); {
        function store_value(id_name) {
            return function () {
                var strings = $("#GM_" + id_name)[0].value;
                Local[id_name] = strings;
                console.log(strings)
                GM_setValue(id_name, strings);
            }
        }
        $("#GM_username")[0].oninput = store_value('username');
        $("#GM_password")[0].oninput = store_value('password');
        $("#input_text")[0].oninput = function () {
            var strings = $("#input_text")[0].value;
            Local["input_text"] = strings;
            console.log(strings)
            GM_setValue("input_text", strings);
            console.log(2342344);
            $("#ying").text(Local.input_text);
        };

    }

    var yingying = $("#yingying");
    var login_button = document.getElementById('button');
    var logout_button = document.getElementById('pc_logout');
    document.getElementById("GM_username").onchange = function () {
        console.log('123');
        yingying.show("fast");
    };
    $("#ying").mousedown((event) => {
        // left with out ctrl
        if (event.which == 1 && !event.ctrlKey) {
            console.log(Local.username)
            $("#username")[0].value = Local.username || $("#username")[0].value;
            $("#password")[0].value = Local.password || $("#password")[0].value;
            console.log(typeof Local.username)
            login_button.click();
        }
        // left with ctrl
        else if (event.which == 1 && event.ctrlKey) {
            var menu = $("#menu>div")
            if(menu.is(":hidden")){
            $("#menu>div").first().slideToggle("fast", function showNext() {
                $(this).next("div").slideToggle("fast", showNext);
            });
            }
            else{
                $("#menu>div").last().slideToggle("fast", function showNext() {
                $(this).prev("div").slideToggle("fast", showNext);
            });
            }

        }
        // right
        else if (event.which == 2) {
            $("#form").toggle("slow");
        } else if (event.which == 3) {
            $("#username")[0].value = Local.username || $("#username")[0].value;
            $("#password")[0].value = Local.password || $("#password")[0].value;
            logout_button.click();
            return false;
        }
    });

    // 注释掉此行得到完整表单
    $(".container").css("width", "auto").css("height", "auto").hide();

    $("html,body").css("height", "100%");
    $("#yingying").css({
        "height": "70px",
        "width": "100%",
        "margin": "auto",
        "line-height": "70px",
        "position": "relative",
        "top": "30%"
    });
    $("#ying,input").css({"text-shadow":"2px 4px 6px rgba(27,31,35,0.35)"});
    $("#menu>div").css({"box-shadow":"3px 4px 6px rgba(27,31,35,0.35)"});
    $("#GM_username,#GM_password").css({
        "background": "transparent",
        "border": "0",
        "color": "white",
        "font-size": "20px",
        "text-align": "center"
    });
    $("#input_text").css({
        "background": "transparent",
        "border": "0",
        "font-size": "20px",
        "color": "white",
        "width": "100%",
        "height": "100%",
        "text-align": "center"
    });
    $("#form >form>div").css({
        "margin": "0",
        "width": "50%",
        "float": "left"
    });
    $("#form >form>div>div").css({
        "width": "290px",
        "margin": "auto",
        "left": "auto",
        "right": "auto"
    });

    $("#menu>div").css({
        "float": "left",
        "width": "25%",
        "height": "70px",
        "background": "#C9C9C9"
    }).hide();
    $("#menu>div>div").css({
        "width": "50%",
        "height": "40px",
        "margin": "auto",
        "margin-top": "15px"
    });
    $("#menu a").css({
        "height": "40px",
        "line-height": "20px",
        "width": "100%",
        "font-size": "20px",
        "overflow": "hidden"
    });
    $("#menu>div:nth-child(4) a").text(bg_color);
    $("#yingying").css("text-align", "center").hide();
    $("#menu").css({
        "height": "70px"
    });
    $("#form").toggle().css({
        "position": "relative",
        "top": "60%"
    });
    if (Local.username && Local.password) {
        $("#yingying").show("fast");
    }
    else{
        $("#form").toggle("slow");
    }
})();