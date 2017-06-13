require(['vue'], function(vue) {

	//判断当前网络是否连接
	onLine(function onLine() {
		vm.onLine = true;
	}, function offLine() {
		vm.onLine = false;
	})

	// 实例化Vue.js
	var vm = new vue({
		el: '#books',
		data: {
			booksList: [],
			onLine: true
		}
	});

	var page = {
		listName: ['基础入门学习书库', '基本经济指标书库', '技术综合提升书库', '心态和资金管理书库', '短线交易学习书库', '黄金白银书库', '热门财经书库'],
		pageIndex: 1,
		pageSize: 10,
		totalPage: 0
	}
	mui.plusReady(function() {
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

		//书籍跳转到书籍
		$('body').on('tap', '.book_show', function() {
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

		$(".ct-head-title").text(page.listName[GetQueryString('id') - 1]);
		getBooksList(GetQueryString('id'));
	})
		// 加载更多函数
	function pullFresh() {
		page.pageIndex++;
		getBooksList(GetQueryString('id'));
	}

	// 获取书籍数据方法
	function getBooksList(id) {
		var url = Consts.OKRUrl148 + 'api/BookApiMobile?category=' + id + '&pageIndex=' + page.pageIndex + '&pageSize=' + page.pageSize;
		mui.ajax(url, {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				if(data.code == 0) {
					if(data.bodyMessage) {
						var dataMsg = eval('(' + data.bodyMessage + ')');
						vm.booksList = vm.booksList.concat(dataMsg.PageDatas);
						page.totalPage = dataMsg.TotalPages;
						if(page.pageIndex >= page.totalPage) {
							mui('#books').pullRefresh().endPullupToRefresh(true);
						} else {
							mui('#books').pullRefresh().endPullupToRefresh(false);
						}
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

})