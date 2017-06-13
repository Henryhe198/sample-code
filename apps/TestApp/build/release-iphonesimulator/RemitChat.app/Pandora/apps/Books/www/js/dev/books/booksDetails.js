var setBookMark;
require(['vue','booksMethod'], function(vue,bk) {

	if(mui.os.ios) {
		$("header").css({"padding-top":"20px","height":"64px"})
		$(".ct-scroll").css({"padding-top":"64px"})
	}
		
	mui('#menu-list').scroll({
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: true, //是否显示滚动条
		deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	});
	mui.init({
		keyEventBind: { 
			backbutton: true //打开back按键监听
		},
		pullRefresh: {
			deceleration:0.0006,
			container: '.ct-back-scr', //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
			up: {
				height: 50, //可选.默认50.触发上拉加载拖动距离
				auto: false, //可选,默认false.自动上拉加载一次
				contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
				contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
				contentup: "上拉加载下一章节",
				callback: nextChapter //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			},
			down: {
				height: 50, //可选,默认50.触发下拉刷新拖动距离,
				auto: false, //可选,默认false.自动下拉刷新一次
				contentrefresh: "正在加载...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
				contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
				contentdown: "下拉加载上一章节", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
				contentover: "松开加载上一章节", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
				callback: prevChapter //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			}
		}
	});
	
	//判断当前网络是否连接
	onLine(function onLine(){
		vm.onLine=true;
	},function offLine(){
		vm.onLine=false;
	})
	openMenu();//默认打开菜单
	
	$("body").on("dragstart",function(){
		closeMenu();
	})
	
	// 实例化Vue.js
	var vm = new vue({
		el: '#books',
		data: {
			booksChapter: [],
			booksContent: "",
			booksComments: [],
			ChapterIndex: 0, // 当前章
			ChapterPrvIndex: 0, // 最上章节
			BooksId: 81, // 书籍ID
			chapterID: [], // 章节ID数组
			fontSize:localStorage.getItem("fontSize"),
			sort:0,
			onLine:true
		}
	});
	
	$(".mui-pull-top-pocket").find(".mui-pull").html("下拉加载上一章节");

	// 后退前进事件
    mui.back = function(){
    	//mui.alert("savesdfdfsadf")
    	setBookMark();
		history.go(-1);	
    }

    if(vm.fontSize){
    	$("#bookContent").addClass(vm.fontSize);
    }
    
	// 呼出菜单
	$("#bookContent").on("tap", function() {
		if($(".book-top").css("display") == "none") {
			openMenu();
		} else {
			//clearTimeout(t)
			closeMenu();
		}
	})
	// 夜间模式
	$(".book-night").on("tap", function() {
		var $book_cont = $(".book-cont");
		if($book_cont.hasClass("black")) {
			$(this).text("夜间");
			$book_cont.removeClass("black");
		} else {
			$(this).text("白天");
			$book_cont.addClass("black");
		}
	})

	// 呼出字体大小设置
	$(".book-font").on("tap", function() {
		var $book_aa = $(".book-aa");
		if($book_aa.css("display") == "none") {
			$book_aa.show();
		} else {
			$book_aa.hide();
		}
	})

	// 设置字体大小
	$(".book-aa li").on("tap", function() {
		var _this = $(this),
			index = _this.index(),
			$cont = $(".book-html-cont");
		_this.children("span").show();
		_this.siblings().children("span").hide();
		switch(index) {
			case 0:
				$cont.removeClass("aamax").addClass("aamin");
				localStorage.setItem("fontSize","aamin");
				break;
			case 1:
				$cont.removeClass("aamin").removeClass("aamax");
				localStorage.setItem("fontSize","");
				break;
			case 2:
				$cont.removeClass("aamin").addClass("aamax");
				localStorage.setItem("fontSize","aamax");
				break;
		}
		$(".book-aa").hide();
	})

	$("body").on("tap", ".mui-table-view-cell a", function() {
		if(vm.onLine){
			var chapterId = $(this).data("id");
			mui('.mui-off-canvas-wrap').offCanvas().close();
			getBookContent(chapterId);
			$(".mui-pull-top-pocket").find(".mui-pull").html("下拉加载上一章节");
			return false; 			
		}else{
			mui.toast("网络未连接，请检查网络！");
		}  		
	})

	$("body").on("tap", ".mui-collapse-content", function() {
		if(vm.onLine){
			var chapterId = $(this).data("id");
			mui('.mui-off-canvas-wrap').offCanvas().close();
			getBookContent(chapterId);
			$(".mui-pull-top-pocket").find(".mui-pull").html("下拉加载上一章节");
			return false;		
		}else{
			mui.toast("网络未连接，请检查网络！");
		} 		
	})

	getBookContent(GetQueryString("id"), 1);

	// 下一章
	function nextChapter() {
		vm.ChapterIndex++;
//		if(vm.ChapterIndex < vm.chapterID.length - 1) {
//			$(".mui-pull-bottom-pocket").find(".mui-pull").html("没有下一章节");
//			mui('.ct-back-scr').pullRefresh().endPullupToRefresh(true);
//			vm.ChapterIndex--;
//		} else {
//			$(".mui-pull-bottom-pocket").find(".mui-pull").html("加载中...");
			getBookContent(vm.chapterID[vm.ChapterIndex], "next");
		//}
		
	}

	// 上一章
	function prevChapter() {
		vm.ChapterPrvIndex--;
		if(vm.ChapterPrvIndex < 0) {
			$(".mui-pull-top-pocket").find(".mui-pull").html("没有上一章节");
			mui('.ct-back-scr').pullRefresh().endPulldownToRefresh(true);
			vm.ChapterPrvIndex++;
		} else {
			$(".mui-pull-top-pocket").find(".mui-pull").html("加载中...");
			getBookContent(vm.chapterID[vm.ChapterPrvIndex], "prev");
		}

	}

	// 打开上下菜单
	function openMenu() {
		var type = mui.os.android
		if(mui.os.Android) {
			$(".book-top").css({
				"padding-top": "0",
				"height": "50px"
			});
		} else if(mui.os.ios) {
			$(".book-top").css({
				"padding-top": "20px",
				"height": "70px"
			});
		}

		$(".book-top").show();
		$(".book-bottom").show();
		if(mui.os.ios){
			bk.booksInit("openMenu");
		}
	}

	// 关闭上下菜单
	function closeMenu() {
		$(".book-top").hide();
		$(".book-bottom").hide();
		$(".book-aa").hide();
		if(mui.os.ios){
			bk.booksInit("closeMenu");
		}
	}
	
	//评论 跳转
    $('body').on('tap', '.ct-click-xq', function () {
		if(vm.onLine){
		    mui.openWindow({
		    	url: 'booksComments.html?id='+ vm.BooksId, 
		    	id:'booksComments'
		  	});  			
		}else{
			mui.toast("网络未连接，请检查网络！");
		}     	   
    })

	// 获取章节列表
	function getBookChapterTitle() {
		var url = Consts.OKRUrl148 + 'api/BookApiMobile?catalogBookId=' + vm.BooksId;
		mui.ajax(url, {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			async: false,
			success: function(data) {
				if(data.code == 0) {
					if(data.bodyMessage) {
						var dataMsg = eval('(' + data.bodyMessage + ')');
						vm.booksChapter = dataMsg;
						var bookLast = dataMsg[dataMsg.length - 1];
						var BookKnotListLength = bookLast.BookKnotList.length;
						addChapterId(dataMsg);

					}
				} else {
					vm.booksList = "no";
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('请求超时')
			}
		});
	}

	// 获取某一章节内容
	function getBookContent(chapterId, type) {
		var url = Consts.OKRUrl148 + 'api/BookApiMobile?chapterId=' + chapterId;
		var obj = getItemContent(chapterId);
		if(obj) {
			appendContent(type, obj);
		} else {
			mui.ajax(url, {
				data: {},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				success: function(data) {
					if(data.code == 0) {
						if(data.bodyMessage) {
							var dataMsg = eval('(' + data.bodyMessage + ')');
							setItemContent(dataMsg);
							appendContent(type, dataMsg);							
						}
					} else {
						vm.booksContent = "no";
					}
				},
				error: function(xhr, type, errorThrown) {
					mui.toast('请求超时')
				}
			});
		}
	}

	function appendContent(type, dataMsg) {
		vm.BooksId = dataMsg.BookId;
		if(type == 1) {
			getComments();
			getBookChapterTitle();
		}
		switch(type) {
			case "next":
				vm.ChapterIndex = dataMsg.Sort - 100;
				vm.sort = dataMsg.Sort - 100;
				if(vm.booksContent != "") {
					var content = vm.booksContent.ChapterContent;
					vm.booksContent = dataMsg;
					vm.booksContent.ChapterContent = content + '<div class="addContent">' + vm.booksContent.ChapterContent + '</div>';
				} else {
					vm.booksContent = dataMsg;
				}
				vm.$nextTick(function() {
					addImgAttr();
					mui.previewImage();
				})
				if(vm.ChapterIndex >= vm.chapterID.length -1){
					mui('.ct-back-scr').pullRefresh().endPullupToRefresh(true);
				}else{
					mui('.ct-back-scr').pullRefresh().refresh(true);
					mui('.ct-back-scr').pullRefresh().endPullupToRefresh(false);
				}
				break;
			case "prev":
				vm.ChapterPrvIndex = dataMsg.Sort - 100;
				if (!dataMsg.ChapterContent) { prevChapter() }; //当上一章内容为空时，自动加载上上一章
				if(vm.booksContent != "") {
					var content = vm.booksContent.ChapterContent;
					vm.booksContent = dataMsg;
					vm.booksContent.ChapterContent = '<div class="preContent">' + vm.booksContent.ChapterContent + '</div>' + content;
				} else {
					vm.booksContent = dataMsg;
				}
				$(".mui-pull-top-pocket").find(".mui-pull").html("下拉加载上一章节");
				mui('.ct-back-scr').pullRefresh().endPulldownToRefresh(true);

				vm.$nextTick(function() {
					addImgAttr();
					var y = $("#bookContent .preContent").height();
					if(y) {
						mui('.ct-back-scr').pullRefresh().refresh();
						mui('.ct-back-scr').pullRefresh().scrollTo(0, -y, 10);
					}
					mui.previewImage();
				})

				break;
			default:
				vm.ChapterIndex = dataMsg.Sort - 100;
				vm.ChapterPrvIndex = dataMsg.Sort - 100;
				vm.sort = dataMsg.Sort - 100;
				dataMsg.ChapterContent = '<div class="addContent">' + dataMsg.ChapterContent + '</div>';
				vm.booksContent = dataMsg;
				if(vm.ChapterIndex >= vm.chapterID.length -1){
					mui('.ct-back-scr').pullRefresh().endPullupToRefresh(true);
				}else{
					mui('.ct-back-scr').pullRefresh().refresh(true);
					mui('.ct-back-scr').pullRefresh().endPullupToRefresh(false);
				}
				
				vm.$nextTick(function() {
					addImgAttr();
					mui('.ct-back-scr').pullRefresh().refresh();
					mui('.ct-back-scr').pullRefresh().scrollTo(0, 0);
					if ($(".book-html-cont").height() < $(".ct-scroll").height()) {
			            nextChapter();
			       	}
					mui.previewImage();
				})
				break;
		}		
	}
	
	// 给图片添加放大属性
	function addImgAttr(){
		var $img = $("#bookContent").find("img");
		if($img.length > 0){
			$img.each(function(){
				$(this).data("preview-src","");
				$(this).data("preview-group","1");
			})
		}		
	}
	
	// 获取评论数量及书籍名称
	function getComments() {
		var url = Consts.OKRUrl148 + 'api/BookApiMobile?bookId=' + vm.BooksId;
		mui.ajax(url, {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				if(data.code == 0) {
					if(data.bodyMessage) {
						var dataMsg = eval('(' + data.bodyMessage + ')');
						vm.booksComments = dataMsg;
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

	// 传入数据记录书本章节ID
	function addChapterId(obj) {
		for(var i in obj) {
			if(obj.hasOwnProperty(i)) {
				vm.chapterID.push(obj[i].ChapterId)
			}
			if(obj[i].BookKnotList) {
				var BookKnotList = obj[i].BookKnotList;
				for(var x in BookKnotList) {
					if(BookKnotList.hasOwnProperty(x)) {
						vm.chapterID.push(BookKnotList[x].ChapterId)
					}
				}
			}
		}
	}

	// 设置localstorage存储 手机端存储时需要开启权限
	function setItemContent(obj) {
		var itemObj = {};
		itemObj.ChapterTitle = obj.ChapterTitle;
		itemObj.BookId = obj.BookId;
		itemObj.Sort = obj.Sort;
		itemObj.ChapterContent = obj.ChapterContent;
		localStorage.setItem(obj.ChapterId, JSON.stringify(itemObj));
	}

	// 读取localstorage内容 手机端存储时需要开启权限
	function getItemContent(id) {
		var itemStr = localStorage.getItem(id);
		var itemObj = eval('(' + itemStr + ')');
		return itemObj;
	}

	// 记录当前书签
	setBookMark = function () {
		var uId = GetQueryString("uId") || localStorage.getItem("uId");
		var chapterId = vm.chapterID[vm.ChapterIndex] || 0;
		$.ajax({
			type: 'post',
			url: Consts.OKRUrl148 + 'api/BookMarkApi',
			data: {
				uId: uId,
				BookId: vm.BooksId,
				chapterId: chapterId
			},
			dataType: 'json',
			async: false,
			success: function(data) {
				if(data.code == "0") {

				} else {

				}
			},
			error: function(xhr, type) {
				mui.toast('请求超时');
			}
		})
	}
})