require(['vue'], function(vue) {

	if(mui.os.ios) {
		$("header").css({"padding-top":"20px","height":"64px"})
		$(".ct-scroll").css({"padding-top":"64px"})
		$("#domBar").css({"top":"64px"})
	}
	else{
		$("#domBar").css({"top":"44px"})
	}
	$("body").show();	
	

	if(mui.os.ios) {
		$("header").css({"padding-top":"20px","height":"64px"})
		$(".ct-scroll").css({"padding-top":"64px"})
	}
	$("body").show();	
	
	mui.init({
		pullRefresh: {
			container: '#books', //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
			up: {
				height: 50, //可选.默认50.触发上拉加载拖动距离
				auto: false, //可选,默认false.自动上拉加载一次
				contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
				contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
				callback: pullFresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			}
		}
	});

	//初始化滚动条
	mui('#domBar').progressbar({
		progress: 0
	}).show();
	
	//判断当前网络是否连接
	onLine(function onLine(){
		vm.onLine=true;
	},function offLine(){
		vm.onLine=false;
	})	

	// 实例化Vue.js
	var vm = new vue({
		el: '#books',
		data: {
			booksComments: [],
			onLine:true
		}
	});
	
    var BookId = GetQueryString('id');
    //var pageIndex = 1;
    var pageSize =10;
    var page = {
        totalCount: 0,        //总评论数
        pageIndex: 1,         //当前页
        pageSize:10			  //当前调用条数
    }
    
	// 加载更多函数
	function pullFresh(){
		page.pageIndex++;
		commentslist();
	}
	
    $(function () {
        commentslist(1);

        //点赞
        $("body").on('tap', ".book_zag", function () {
			if(vm.onLine){
            	postSupports($(this));			
			}else{
				mui.toast("网络未连接，请检查网络！");
			}          	     
        })
        
        //点击显示完整评论
	    $('body').on("tap", ".commetn_icon_show", function () {
	        $commetn_icon = $(this);
	        if (($commetn_icon.hasClass('active_s_icon'))) {
	            $commetn_icon.siblings('p').addClass('activeshow');
	            $commetn_icon.removeClass('active_s_icon');
	            $(this).children('i').removeClass('mui-icon-arrowup').addClass("mui-icon-arrowdown"); 
	        }
	        else {
	            $commetn_icon.siblings('p').removeClass('activeshow');
	            $commetn_icon.addClass('active_s_icon');
	            $(this).children('i').removeClass('mui-icon-arrowdown').addClass("mui-icon-arrowup");
	        }
	    })

	    //发表评论 
	    $('body').on('tap', '.publish_comment', function () {
			if(vm.onLine){
		        var booksId = GetQueryString('id');
			    mui.openWindow({
			    	url: 'booksSubmitComment.html?id='+ booksId, 
			    	id:'booksSubmitComment'
			  	});   		
			}else{
				mui.toast("网络未连接，请检查网络！");
			}  	    	    
	    }) 
	    
    })


    
    //评论内容过多时，隐藏一部分  
    //需要改进，遍历做了大量重复的计算
    function comment_mach() {
    	$(".comment").each(function(){
    		$commentp=$(this).children('p');
    		$commentpspan = $commentp.children('span');
    		if ($commentpspan.height() > $commentp.height()) {
            $commentp.siblings('.commetn_icon_show').addClass('active_icon');
           }
    	})
    }


    //获取评论
    function commentslist(type) {
        mui.ajax({
            type: 'GET',
            url: Consts.OKRUrl148 + 'api/BookApiMobile?commentBookId=' + BookId + '&pageIndex=' + page.pageIndex + '&pageSize=' + page.pageSize,
            data: {},
            dataType: 'json',
            timeout:10000,//超时时间设置为10秒；
            success: function (data) {
                if (data.code == 0) {
                    if (data.bodyMessage) {
                        dataMsg = eval('(' + data.bodyMessage + ')');
						vm.booksComments = vm.booksComments.concat(dataMsg.PageDatas);
						page.totalPage = dataMsg.TotalPages;
						if(page.pageIndex >= page.totalPage){
							mui('#books').pullRefresh().endPullupToRefresh(true);
						}else{
							mui('#books').pullRefresh().endPullupToRefresh(false);
						}
						vue.filter('time', function (value) {
	                        return dateFormat(new Date(value.replace(/[/-]/gi, '/')), "MM月dd日");
	                   	})
						vue.nextTick(function () {
						comment_mach();
						})
						if(type){
							mui('#domBar').progressbar().setProgress(100);
							mui('#domBar').progressbar().hide();
						}
						
                    } else {
                        vm.booksComments = "no";
                    }
                }
            },
            error: function (xhr, type) {
                mui.toast('请求超时')
            }
        })
    }

    // 点赞
    function postSupports($this,uId, commentId) {
        var uId = localStorage.getItem("uId");
        var commentId = $this.parents(".comment_read").data("commentid");
        var bookzan = parseInt($this.children('em').text());
        
        $.ajax({
            type: 'GET',
            url: Consts.OKRUrl148 + 'api/BookApiMobile?aid=' + commentId + '&uid=' + uId,
            dataType: 'json',
            success: function (data) {
                if (data.code == "0") {
                    if (!($this.children('strong').hasClass('animation'))) {
                        $this.children('strong').addClass('animation');
                        var vule=$this.parents(".comment_read").index();
                       	vm.booksComments[vule].Supports++;
                    }
                } else {
                    //alert("您已经赞过了！")
                    mui.toast("您已经赞过了！");
                }
            },
            error: function (xhr, type) {
                mui.toast('请求超时');
            }
        })
    }	
    
    // 对Date的扩展，将 Date 转化为指定格式的String   
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
    // 例子：   
    // (new Date()).Format("yyyy-MM-dd HH:mm:ss.S") ==> 2006-07-02 08:09:04.423   
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
    function dateFormat(date, fmt) {
        //author: meizz   
        var o = {
            "M+": date.getMonth() + 1,                 //月份   
            "d+": date.getDate(),                    //日   
            "H+": date.getHours(),                   //小时   
            "m+": date.getMinutes(),                 //分   
            "s+": date.getSeconds(),                 //秒   
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
            "S": date.getMilliseconds()             //毫秒   
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
})