require(['vue','booksMethod'], function(vue,bk) {
	
	if(mui.os.ios) {
		$("header").css({"padding-top":"20px","height":"64px"})
		$(".ct-scroll").css({"padding-top":"64px"})
		$("#domBar").css({"top":"64px"})
	}
	else{
		$("#domBar").css({"top":"44px"})
	}
	$("body").show();	

	//初始化滚动条
	mui('#domBar').progressbar({
		progress: 0
	}).show();
	
	var scroll = mui('.mui-scroll-wrapper').scroll({
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: true, //是否显示滚动条
		deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	});
		
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
			booksIntroduction: [], //书籍简介 81
			booksChapter: [], //目录
			booksRelevant: [], //相关
			booksComments: [], //评论
			onLine:true,
			bar:0
		}
	});
	var bookId = GetQueryString('id');
	getBooksIntroduction();
	
	var y = 0,scrollY = 0;
	document.querySelector('.mui-scroll-wrapper' ).addEventListener('scroll', function (e ) {
    	y = scroll.y;
    })
	
	//分享
	$("body").on("tap","#share",function(){
		if(vm.booksIntroduction){
			var bookId = vm.booksIntroduction.BookId,
				sTiele = vm.booksIntroduction.BookName,
				sImgUrl = vm.booksIntroduction.CoverImage,
				sSummary = vm.booksIntroduction.Summary;
			var obj = {
				'bookId':bookId,
				'sTiele':sTiele,
				'sImgUrl':sImgUrl,
				'sSummary':sSummary
			}
			bk.booksInit("booksShare",JSON.stringify(obj));
		}else{
			
		}
	})
	
	//点击看书
    $("body").on('tap', '#book_reading', function () {
		if(vm.onLine){
	        var chapter = $("#book_reading").data("id");
	        var chapterId = getBookMark();
	        if (chapterId) {
	            chapter = chapterId;
	        }
	        //打开页面
			mui.openWindow({
			    url: 'booksDetails.html?id=' + chapter, 
				id:'booksDetails'
			});
			
			if(mui.os.ios){bk.booksInit("closeMenu");}
		}else{
			mui.toast("网络未连接，请检查网络！");
		}      	
    })
	
	//书籍简介展开
	$(".book_click_inconajx").on('tap', function () {
        var $chapter = $(this).prev().find(".book_introduction");
        if ($chapter.hasClass('book_more')) {
            $chapter.removeClass('book_more');
            $(this).children('i').removeClass('mui-icon-arrowdown').addClass("mui-icon-arrowup");  
            scrollY = y;
        }
        else {
            $chapter.addClass('book_more');
            $(this).children('i').removeClass('mui-icon-arrowup').addClass("mui-icon-arrowdown");
            scroll.scrollTo(0,scrollY,0);
        }
    })
	//书籍目录展开
    $(".book_click_incon").on('tap', function () {
        var $chapter = $(this).prev().find(".book_chapter");
        if ($chapter.hasClass('book_more')) {
            $chapter.removeClass('book_more');
            $(this).children('i').removeClass('mui-icon-arrowdown').addClass("mui-icon-arrowup");  
            scrollY = y;
        }
        else {
            $chapter.addClass('book_more');
            $(this).children('i').removeClass('mui-icon-arrowup').addClass("mui-icon-arrowdown");
            scroll.scrollTo(0,scrollY,0);
        }
    })
    
    //点击书籍章节读书(title)
    $('body').on("tap",".ct-click-booksli h3",function(){
    	$books_h3click=$(this);
		if(vm.onLine){
	        var chapter = $books_h3click.data("id");
	        //打开页面
			mui.openWindow({
			    url: 'booksDetails.html?id=' + chapter, 
				id:'booksDetails'
			});
			
			if(mui.os.ios){bk.booksInit("closeMenu");}
		}else{
			mui.toast("网络未连接，请检查网络！");
		}      		
    })
    
    //点击书籍章节读书(li)
    $('body').on("tap",".ct-click-booksli ul li",function(){
    	$books_liclick=$(this);
		if(vm.onLine){
	        var chapter = $books_liclick.data("id");
	        //打开页面
			mui.openWindow({
			    url: 'booksDetails.html?id=' + chapter, 
				id:'booksDetails'
			});
			
			if(mui.os.ios){bk.booksInit("closeMenu");}
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
    
    //点赞动作
    $("body").on('tap',".book_zag", function () {
		if(vm.onLine){
        	postSupports($(this));  			
		}else{
			mui.toast("网络未连接，请检查网络！");
		}     	
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
	
	// 点赞
    function postSupports($this) {
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
                    mui.toast('您已经赞过了！')
                }
            },
            error: function (xhr, type) {
                mui.toast('请求超时');
            }
        })
    }
    
    //更多评论 跳转
    $('body').on('tap', '.book_ment_more', function () {
		if(vm.onLine){
	        var booksId = GetQueryString('id');
		    mui.openWindow({
		    	url: 'booksComments.html?id='+ booksId, 
		    	id:'booksComments'
		  	});    			
		}else{
			mui.toast("网络未连接，请检查网络！");
		}      	
    })
    
    //发表评论跳转 
    $('body').on('tap', '.book_ment_publish', function () {
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
    
    //相关书籍跳转到书籍详情
    $('body').on('tap', '#relevantBooks li', function () {
		if(vm.onLine){
	        var booksId = $(this).data("id");
		    mui.openWindow({
		    	url: 'booksIntroduction.html?id='+ booksId, 
		    	id:'booksIntroduction'
		  	});    			
		}else{
			mui.toast("网络未连接，请检查网络！");
		}      	      
    })  
    
    //加载进程条
    dombartime();
    function dombartime(){
    	var cleardombar=setTimeout(dombartime,10);
    	if(vm.bar < 4){
    		mui('#domBar').progressbar().setProgress(vm.bar * 25);
    	}else{
    		mui('#domBar').progressbar().setProgress(vm.bar * 25);
    		mui('#domBar').progressbar().hide();
    		clearTimeout(cleardombar);
    	}
    }
    
	//书籍简介
    function getBooksIntroduction() {
    	var url = Consts.OKRUrl148 + 'api/BookApiMobile?bookId=' + bookId;
        mui.ajax(url, {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				if(data.code == 0) {
					if(data.bodyMessage) {
						var dataMsg = eval('(' + data.bodyMessage + ')');
						vm.booksIntroduction = dataMsg;
						vm.bar++;
						//调用书籍目录ajax
                        getBooksChapter();
                        //调用相关书籍ajax
                        getBooksRelevant(dataMsg.CategoryId);
                        //调用书籍评论ajax
                        getBooksComments();
					}
				} else {
					vm.booksIntroduction = "no";
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('请求超时')
			}
		});
    }
    
    //书籍目录
    function getBooksChapter() {
    	var url = Consts.OKRUrl148 + 'api/BookApiMobile?catalogBookId=' + bookId;
        mui.ajax(url, {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				if(data.code == 0) {
					if(data.bodyMessage) {
						var dataMsg = eval('(' + data.bodyMessage + ')');
						vm.booksChapter = dataMsg;
						vm.bar++;
					}
				} else {
					vm.booksChapter = "no";
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('请求超时')
			}
		});
    }
    
    //书籍相关
    function getBooksRelevant(categoryId) {
    	var url = Consts.OKRUrl148 + 'api/BookApiMobile?topSize=6&catalog='+ categoryId +'&bookId=' + bookId;
        mui.ajax(url, {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				if(data.code == 0) {
					if(data.bodyMessage) {
						var dataMsg = eval('(' + data.bodyMessage + ')');
						vm.booksRelevant = dataMsg;
						vm.bar++;
					}
				} else {
					vm.booksRelevant = "no";
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('请求超时')
			}
		});
    }
    
    //书籍评论
    function getBooksComments() {
    	var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&commentBookId=' + bookId;
        mui.ajax(url, {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				if(data.code == 0) {
					if(data.bodyMessage) {
						var dataMsg = eval('(' + data.bodyMessage + ')');
						vm.booksComments = dataMsg.PageDatas;
						vue.filter('time', function (value) {
	                        return dateFormat(new Date(value.replace(/[/-]/gi, '/')), "MM月dd日");
	                    })
						
						//dom打印完成后执行
						vue.nextTick(function () {
							comment_mach();
							vm.bar++;
						})
					}
				} else {
					vm.booksComments = "no";
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('请求超时')
			}
		});
    }
    
    // 获取当前书的章节位置
    function getBookMark() {
        var uId = localStorage.getItem("uId") || 0;
        var chapterId = 0;

        $.ajax({
            type: 'get',
            url: Consts.OKRUrl148 + 'api/BookMarkApiMobile?bookId=' + bookId + '&uid=' + uId,
            dataType: 'json',
            async:false,
            success: function (data) {
                if (data.code == "0") {
                    var dataCent = eval('(' + data.bodyMessage + ')');
                    if (dataCent) {
                        chapterId = dataCent.ChapterId;
                    } else {
                        chapterId = 0;
                    }
                } else {
                    chapterId = 0;
                }
            },
            error: function (xhr, type) {
                mui.toast('请求超时');
            }
        })
        return chapterId
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