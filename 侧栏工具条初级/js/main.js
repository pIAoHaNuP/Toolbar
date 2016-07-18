requirejs.config({                                
	paths: {
		jquery: 'jquery-3.0.0.min'                   //设置别名
	}
});

requirejs(['jquery'], function($) {                  //引入jQuery模块
	$('#backTop').on('click', move);                 //为返回顶部按钮添加点击事件
	$(window).on('scroll', function() {              //监听window对象滚动事件
		checkPosition($(window).height());
	});
    checkPosition($(window).height());


	function move() {                                //实现滚动功能
		$('html body').animate({
			scrollTop: 0
		}, 800);
	}



	function checkPosition(pos) {                    //判断当前滚动条高度
		if ($(window).scrollTop() > pos) {
			$('#backTop').fadeIn();
		} else {
			$('#backTop').fadeOut();
		}
	}
});