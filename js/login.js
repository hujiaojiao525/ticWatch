require.config({
	baseUrl:'../lib/',
	paths:{
		"jquery":"jquery",
	}
})
require(['jquery'],function($){	
	$('.login-form').on('keyup','.Id',function(){
		testId();
		testVals();
	}).on('keyup','.Code',function(){
		testId();
		testVals();
	})
	//检测验证码是否是数字；
	function testId(){
		var regId=/\D/g,
			tapStr='入网证件号码必须是数字哦！',
			val=$('.Id').val();
		if(regId.test(val)){
			$('.login-tap').text(tapStr);
		}else{
			$('.login-tap').text('');
		}
	}
	function testVals(){
		if($('.Id').val()=="" || $('.Code').val()==""){
			$('.login-btn').addClass('btn-dis');
		}else{
			$('.login-btn').removeClass('btn-dis');
		}
	}
	function getCode(){

	}

})