var html = '<div class="weui-tabbar">'+
    '<a href="apptab0.html" class="weui-tabbar__item">'+
      '<div class="weui-tabbar__icon">'+
       '<img src="./static/images/char_room.png" alt="">'+
      '</div>'+
      '<p class="weui-tabbar__label">聊天室</p>'+
    '</a>'+
    '<a href="apptab1.html" class="weui-tabbar__item">'+
      '<div class="weui-tabbar__icon">'+
        '<img src="./static/images/online_betting.png" alt="">'+
      '</div>'+
      '<p class="weui-tabbar__label">在线投注</p>'+
    '</a>'+
	  '</div>';

$(function() {
	$("body").append(html);
	var val = $(".tabShow").val();
	if ('0' === val) {
		// 改变字体样式
		$(".weui-tabbar__item:eq(" + val +")" ).addClass("tab_active");

		// 获取icon路径并改变
		var src = $(".weui-tabbar__item:eq("+val+") img" ).attr("src");
		var src1 = src.slice(0,-4);
		$(".weui-tabbar__item:eq("+val+") img" ).attr("src", src1 + "1.png");

		// 触发跳转链接
		$(".weui-tabbar").on("tap", "a", function() {
			// 点击触发跳转
			location.href = $(this).attr("href");
		});
	} else {
		// 改变字体样式
		$(".weui-tabbar__item:eq(" + val +")" ).addClass("tab_active");

		// 获取icon路径并改变
		var src = $(".weui-tabbar__item:eq("+val+") img" ).attr("src");
		var src1 = src.slice(0,-4);
		$(".weui-tabbar__item:eq("+val+") img" ).attr("src", src1 + "1.png");

		// 触发跳转链接
		$(".weui-tabbar").on("tap", "a", function() {
			// 点击触发跳转
			location.href = $(this).attr("href");
		});
	}

});
