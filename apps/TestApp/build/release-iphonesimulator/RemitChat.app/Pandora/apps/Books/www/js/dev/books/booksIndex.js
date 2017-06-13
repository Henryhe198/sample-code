require(['vue', 'booksMethod'], function(vue, bk) {
	
	$("body").show();
	// 实例化Vue.js
	var vm = new vue({
		el: '#booksVue',
		data: {
			booksTypeId: [7, 1, 2, 3, 4, 5, 6],
			booksHot: [], //热门
			booksNews: [], //最新
			booksFinance: [], //财经 7
			booksBasis: [], //基础 1
			booksEconomic: [], //经济指标 2
			booksTechnology: [], //技术综合 3
			booksMoney: [], //资金管理 4
			booksShort: [], //短线交易 5
			booksGold: [], //黄金白银 6
			booksSearch: [], //搜索
			bookName: "",
			chapterId: 0,
			onLine: true,
			bar: 0
		}
	});
	// 存储用户ID
	var uId = GetQueryString("uId") || 0;
	localStorage.setItem("uId", uId);
	
	var page = {
		pageIndex: 1,
		totalPage: 0
	}
	
	mui.plusReady(function() {
		mui('.ct-scroll-01').scroll({
			scrollX: true,
			scrollY: false,
			indicators: false,
			bounce: false
		})

		mui.init({
			pullRefresh: {
				deceleration: 0.0006,
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
		//mui('#books').pullRefresh().disablePullupToRefresh();
		
		getBookMark();

		//判断当前网络是否连接
		onLine(function onLine() {
			vm.onLine = true;
		}, function offLine() {
			vm.onLine = false;
		})

		ajaxInit();

		mui(".ct-scroll").on("dragstart", ".mui-scroll", function() {
			$("#search").blur();
		})

		$(".ct-head-a").on("tap", function() {
			$("#search").blur();
		})

		// 点击搜索事件
		$("#search").bind("tap", function() {
			if(vm.onLine) {
				onSearch();
				if(!location.hash)
					history.pushState({
						a: 1
					}, "", "#search");
			} else {
				mui.toast("网络未连接，请检查网络！");
			}

		})

		// 后退前进事件
		window.onpopstate = function(o) {
			if(o.state == null) {
				offSearch();
			} else {
				onSearch();
			}

		}

		// 点击继续看书
		$("body").on("tap", ".ct-tips", function() {
			$("#search").blur();
			if(vm.onLine) {
				//打开页面
				mui.openWindow({
					url: 'booksDetails.html?id=' + vm.chapterId,
					id: 'booksDetails',
					waiting:{
						autoShow:false
					}
				});
				if(mui.os.ios) {
					bk.booksInit("closeMenu");
				}
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		// 搜索返回首页
		$('body').on('tap', '.ct-search-close', function() {
			history.go(-1);
		})

		//侧导航书籍列表跳转
		$('body').on('tap', '.ct-ul-list li', function() {
			if(vm.onLine) {
				var typeId = $(this).data("id");
				mui.openWindow({
					url: 'booksList.html?id=' + typeId,
					id: 'booksList',
					waiting:{
						autoShow:false
					}
				});
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		//热门推荐--新品速递 --跳转到书籍详情
		$('body').on('tap', '.ct-src-right', function() {
			if(vm.onLine) {
				var booksId = $(this).data("id");
				mui.openWindow({
					url: 'booksIntroduction.html?id=' + booksId,
					id: 'booksIntroduction',
					waiting:{
						autoShow:false
					}
				});
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		//热门财经推荐头条
		$('body').on('tap', '.first-img', function() {
			if(vm.onLine) {
				var booksId = $(this).data("id");
				mui.openWindow({
					url: 'booksIntroduction.html?id=' + booksId,
					id: 'booksIntroduction',
					waiting:{
						autoShow:false
					}
				});
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		//书籍跳转到书籍
		$('body').on('tap', '.book-show li', function() {
			if(vm.onLine) {
				var booksId = $(this).data("id");
				mui.openWindow({
					url: 'booksIntroduction.html?id=' + booksId,
					id: 'booksIntroduction',
					waiting:{
						autoShow:false
					}
				});
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		//书籍类型--更多  
		$('body').on('tap', '.view-more', function() {
			if(vm.onLine) {
				var typeId = $(this).data("id");
				mui.openWindow({
					url: 'booksList.html?id=' + typeId,
					id: 'booksList',
					styles:{
						scrollIndicator:'none'
					},
					waiting:{
						autoShow:false
					}
				});
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		//搜索书籍跳转到书籍详情
		$('body').on('tap', '#search-item li', function() {
			if(vm.onLine) {
				var booksId = $(this).data("id");
				mui.openWindow({
					url: 'booksIntroduction.html?id=' + booksId,
					id: 'booksIntroduction',
					waiting:{
						autoShow:false
					}
				});
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		var cpLock = false;
		$('#search').on('compositionstart', function() {
			cpLock = true;
		});
		$('#search').on('compositionend', function() {
			cpLock = false;
		});

		// 返回
		mui.back = function() {
			if(vm.onLine) {
				bk.booksInit("exitHtml");
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		}

		// 监听搜索框值
		$("#search").on("input", function() {
			if(!cpLock) {
				var pattern = /[^\u4E00-\u9FA5A-Za-z0-9]/ig,
					$this = $(this);
				$this.val($this.val().replace(pattern, ''));
				vm.booksSearch = [];
				var searchVal = $.trim($(this).val());
				if(!searchVal) {
					$(".searchTips").text("请输入搜索关键词！");
					return false;
				}
				mui('#books').pullRefresh().refresh(true);
				page.pageIndex = 1;
				getBooksSearchData(searchVal)
			}

		})
	})
	// 打开搜索
	function onSearch() {
		$(".indexHtml").hide().next().show();
		$(".ct-search-close").show();
		$(".ct-search").removeClass("w100");
		$("#search")[0].focus();
		$(".searchTips").height($(window).height() - 64 - $("#search2").height())
	}

	// 关闭搜索
	function offSearch() {
		$(".ct-search-close").hide();
		$(".ct-search").addClass("w100");
		if(mui.os.ios) {
			$("#books").css("padding-top", "64px");
		} else {
			$("#books").css("padding-top", "44px");
		}

		$(".indexHtml").show().next().hide();
		$("#search").blur().val("");
		mui('#books').pullRefresh().disablePullupToRefresh();
	}
	// 获取当前书的章节位置
	function getBookMark() {
		$.ajax({
			type: 'get',
			url: Consts.OKRUrl148 + 'api/BookMarkApiMobile?bookId=0&uid=' + uId,
			dataType: 'json',
			async: false,
			success: function(data) {
				if(data.code == "0") {
					var dataCent = eval('(' + data.bodyMessage + ')');
					if(dataCent) {
						vm.bookName = dataCent.BookName;
						vm.chapterId = dataCent.ChapterId;
						$(".ct-tips").show();
						setTimeout(function() {
							$(".ct-tips").css("height", 0);
						}, 3000)
					}
				}
			},
			error: function(xhr, type) {
				mui.toast('请求超时');
			}
		})
	}

	// 遍历请求
	function ajaxInit() {
		var arr = ['booksHot', 'booksNews', 'booksFinance', 'booksBasis', 'booksEconomic', 'booksTechnology', 'booksMoney', 'booksShort', 'booksGold'];
		for(var i = 0; i < arr.length; i++) {
			getBooksData(arr[i]);
		}
	}

	// 获取请求路径
	function getAjaxUrl(type) {
		switch(type) {
			case 'booksHot':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?clicksTop=10';
				break;
			case 'booksNews':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?newTop=10';
				break;
			case 'booksFinance':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=4&category=' + vm.booksTypeId[0];
				break;
			case 'booksBasis':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&category=' + vm.booksTypeId[1];
				break;
			case 'booksEconomic':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&category=' + vm.booksTypeId[2];
				break;
			case 'booksTechnology':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&category=' + vm.booksTypeId[3];
				break;
			case 'booksMoney':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&category=' + vm.booksTypeId[4];
				break;
			case 'booksShort':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&category=' + vm.booksTypeId[5];
				break;
			case 'booksGold':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&category=' + vm.booksTypeId[6];
				break;
			default:
				break;
		}
		return url;
	}

	// 获取书籍数据方法
	function getBooksData(type) {
		var url = getAjaxUrl(type);
		mui.ajax(url, {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				if(data.code == 0) {
					if(data.bodyMessage) {
						vm.bar++;
						var dataMsg = eval('(' + data.bodyMessage + ')');
						vm[type] = dataMsg instanceof Array ? dataMsg : dataMsg.PageDatas;
					}
				} else {
					vm[type] = "no";
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('请求超时');
			}
		});
	}

	function pullFresh() {
		var searchVal = $.trim($('#search').val());
		page.pageIndex++;
		getBooksSearchData(searchVal);
	}

	function getBooksSearchData(searchVal) {
		var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=' + page.pageIndex + '&pageSize=10&keyword=' + searchVal;
		mui.ajax(url, {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				if(data.code == 0) {
					if(data.bodyMessage) {
						var dataMsg = eval('(' + data.bodyMessage + ')');
						page.totalPage = dataMsg.TotalPages;
						vm.booksSearch = page.pageIndex == 1 ? dataMsg.PageDatas : vm.booksSearch.concat(dataMsg.PageDatas);
						if(vm.booksSearch.length >= 10) {
							mui('#books').pullRefresh().enablePullupToRefresh();
						} else {
							mui('#books').pullRefresh().disablePullupToRefresh();
						}

						if(vm.booksSearch.length == 0) {
							$(".searchTips").text("无相关内容！")
						};

						if(page.pageIndex >= page.totalPage) {
							mui('#books').pullRefresh().endPullupToRefresh(true);
						} else {
							mui('#books').pullRefresh().endPullupToRefresh(false);
						}
					}
				} else {
					vm.booksSearch = "no";
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('请求超时');
			}
		});
	}
})