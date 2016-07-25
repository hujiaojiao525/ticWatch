require.config({
	baseUrl:'../lib',
	paths:{
		"jquery":"jquery",
		"template":'template'
	}
})
require(['jquery','template'],function($,template){
	$.ajax({
		url:'../data/numList.json',
		dataType:'json',
		success:function(e){
			var html=template('test',e)
			$('.tel-number').html(html)
		}
	})
})