$(function () {
    $(".phb").mouseover(function () {
        $(this).next("div").css("display", "block");
    })
    $(".phb").mouseout(function () {
        $(this).next("div").css("display", "none");
    })

    $(".phb").click(function () {
       $(this).next("div").css("display", "block");
    })
    

    // 当动态加载列表的时候需要使用这个方法绑定
    // $("ul").on("click", "a", function () {
    //    $(this).next("div").css("display", "block");
    // })

})

// 文字展开收起
function init(){
    var len = 10;      //默认显示字数
    var ctn = document.getElementById("content");  //获取div对象
    var content = ctn.innerHTML;                   //获取div里的内容

    //alert(content);
    var span = document.createElement("span");     //创建<span>元素
    var a = document.createElement("a");           //创建<a>元素
    span.innerHTML = content.substring(0,len);     //span里的内容为content的前len个字符

    a.innerHTML = content.length>len?"... 展开":"";  //判断显示的字数是否大于默认显示的字数    来设置a的显示        
    a.href = "javascript:void(0)";//让a链接点击不跳转

    a.onclick = function(){
        if(a.innerHTML.indexOf("展开")>0){      //如果a中含有"展开"则显示"收起"
          a.innerHTML = "<<&nbsp;收起";
          span.innerHTML = content;
        }else{
            a.innerHTML = "... 展开";
            span.innerHTML = content.substring(0,len);
        }
    }
    // 设置div内容为空，span元素 a元素加入到div中
    ctn.innerHTML = "";
    ctn.appendChild(span);
    ctn.appendChild(a);
 }

$(function () {
    //加载事件
        var collection = $(".dianji");
        $.each(collection, function () {
            $(this).addClass("start");
        });
    });
    //单击事件
    function dj(dom) {
        var collection = $(".dianji");
        $.each(collection, function () {
            $(this).removeClass("end");
            $(this).addClass("start");
        });
        $(dom).removeClass(".start");
        $(dom).addClass("end");
    }

    // 多条件筛选
 $("#select1 dd").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    if($(this).hasClass("select-all")){
        $("#selectA").remove();
    }else{
        var copyA = $(this).clone();
        if($("#selectA").length > 0){
            $("#selectA a").html($(this).text());
        }else{
            $(".select-result dl").append(copyA.attr("id","selectA"));
        }
    }
})
$("#select2 dd").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    if($(this).hasClass("select-all")){
        $("#selectB").remove();
    }else{
        var copyB = $(this).clone();
        if($("#selectB").length > 0){
            $("#selectB a").html($(this).text());
        }else{
            $(".select-result dl").append(copyB.attr("id","selectB"));
        }
    }
})
$("#select3 dd").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    if($(this).hasClass("select-all")){
        $("#selectC").remove();
    }else{
        var copyC = $(this).clone();
        if($("#selectC").length > 0){
            $("#selectC a").html($(this).text());
        }else{
            $(".select-result dl").append(copyC.attr("id","selectC"));
        }
    }
})
$("#select4 dd").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    if($(this).hasClass("select-all")){
        $("#selectD").remove();
    }else{
        var copyC = $(this).clone();
        if($("#selectD").length > 0){
            $("#selectD a").html($(this).text());
        }else{
            $(".select-result dl").append(copyC.attr("id","selectD"));
        }
    }
})
$("#selectA").on("click",function(){
    $(this).remove();
    $("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
})
$("#selectB").on("click",function(){
    $(this).remove();
    $("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
})
$("#selectC").on("click",function(){
    $(this).remove();
    $("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
})
$("#selectD").on("click",function(){
    $(this).remove();
    $("#select4 .select-all").addClass("selected").siblings().removeClass("selected");
})
$(".select dd").on("click", function () {
    if ($(".select-result dd").length > 1) {
        $(".select-no").hide();
    } else {
        $(".select-no").show();
    }
});
