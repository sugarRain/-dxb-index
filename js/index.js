//单击背景变色
$(function(){
	$("#all-top li").on('click', function(){
		$(this).addClass('all-top-select').siblings().removeClass('all-top-select');
	});
	var index = 0;
	function changebg (index){
		$("#core-top li").eq(index).addClass("bg1-select").siblings().removeClass("bg1-select");
	}
	$("#core-top li").on('click', function(){
		index = $(this).index();
		changebg(index);
	})
	$('#btn').on('click', function(){
		index++;
		if(index == $("#core-top li").length){
			index = 0;
		}
		changebg(index);
	});
});
//焦点轮播图
$(function(){
	var index = 0;
	function changediv (){
		$("#notice-list .list-hide:eq("+index+")").css("display","block").siblings(".list-hide").css("display","none");
		$("#notice-list  li:eq("+index+")").addClass("list-select").siblings().removeClass("list-select");
	}	
	$("#notice-list  li").on('click', function(){
		index = $(this).index();
		changediv(index);
	})
	function start (){
		timer = setInterval(function(){
			index++;
			if(index == $("#notice-list  li").length){
				index = 0;
			}
			changediv(index);
		},2000);
	} 
	start ();
	$("#notice-list ").on('mouseover', function(){
		clearInterval(timer);
	});
	$("#notice-list ").on('mouseout',function(){
		start ();
	})
});	
//选项卡
$(function(){
	$("#rec-nav-select li").on('click', function(){
		$(this).addClass("rec-select").siblings().removeClass("rec-select");
		var index = $(this).index();
		$("#rec-con-show").find(".rec-sel:eq("+index+")").css("display",'inline-block').siblings().css("display",'none')
	})
});
//展开收缩	
$(function(){
	$(".slg-show-list-tit").on('click', function(){
		$(this).siblings(".slg-show-list-body").toggle();
	});
});					
//切换模块	 
$(function(){
	var index = 0;

	function changeImg(index){
		$("#meth").html('0'+(index+1)+'/05');
		$('#con-left li').eq(index).addClass('bg-change').siblings().removeClass('bg-change');
		$("#con-right-body .con-right").eq(index).css("display","block").siblings().css("display","none");
	}

	$('#con-left li').on('click', function(){
		index = $(this).index();//获取当前li的索引
		changeImg(index);
	});
	$('#con-left-bottom-lef').on('click', function(){
		index++;
		if(index == $('#con-left li').length){
			index = 0;
		}
		changeImg(index);
	});
	$('#con-left-bottom-rig').on('click', function(){
		index--;
		if(index == -1){
			index = $('#con-left li').length - 1;
		}
		changeImg(index);
	});
});	