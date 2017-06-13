require(['vue'], function(vue) {

	if(mui.os.ios) {
		$("header").css({"padding-top":"20px","height":"64px"})
		$(".ct-scroll").css({"padding-top":"64px"})
	}
	$("body").show();	
	$("#comment").focus();
	
	//返回
	var old_back = mui.back;
	mui.back = function() {
		$("#comment").blur();
		setTimeout(function(){
			old_back();			
		},500)
	}
	// 实例化Vue.js
	var vm = new vue({
		el: '#books',
		data: {
			onLine:true
		}
	});
	
	//判断当前网络是否连接
	onLine(function onLine(){
		vm.onLine=true;
	},function offLine(){
		vm.onLine=false;
	})	

	//发布评论
    $(".rank-but").on("tap", function () {
		if(vm.onLine){
			$("#comment").blur();
	    	booksId = GetQueryString("id");
	        uId = localStorage.getItem("uId");
	        postComments(booksId,uId); 			
		}else{
			mui.toast("网络未连接，请检查网络！");
		}      	
    })
    
    //获得ip
    getIp();
    
    function validation(str) {
        if (!str) {
            mui.toast("评论不能为空！");
            return false;
        } else {
            return true;
        } 
    }
    
    var postComments = function (booksId,uId) {
        var comment = $("#comment").val().trim();
        if (validation(comment)) {
            mui.ajax({
                type: 'post',
                url: Consts.OKRUrl148 + 'api/BookApiMobile',
                data: {Id: booksId, Uid: uId, Ip: ip, Content: comment },
                dataType: 'json',
                success: function (data) {
                    if (data.code == "0") {
                        mui.toast('评论发布成功，请等待审核');
                        //可以改进
                        setTimeout(function(){
                        	window.history.go(-1);
                        },1000)                     	
                    } else {
                        mui.toast('评论发布失败！')
                    }
                },
                error: function (xhr, type) {
                    mui.toast('请求超时');
                }
            })
        }
    }
	
	//获取IP
    function getIp() {
        var url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_=' + Math.random();
        $.getJSON(url, function (data) {
            ip = data.Ip;
        });
    }	
	
})