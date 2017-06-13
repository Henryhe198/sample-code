require(['vue', 'IsLoadMethod','molieInit'], function (vue, IsLoadMethod, init) {
	//微信弹层
    init.wechatMethod(function(){
    	$('mask').show();
    })
    // AppInstall(Consts._AppRoute.Default, function () { $('#isload').find('.ct-share-headimg').html("下载汇信APP，查看更多精彩内容") }, function () { $('#isload').find('.ct-share-headimg').html("打开汇信APP，查看更多精彩内容") });
    document.getElementById("isload").onclick = IsLoadMethod.init;

	if(mui.os.ios) {
		$("header").css({"padding-top":"20px","height":"64px"})
		$(".ct-scroll").css({"padding-top":"64px"})
		$("#domBar").css({"top":"64px"})
	}
	else{
		$("#domBar").css({"top":"44px"})
	}
	$("body").show();	
	
	//初始化滚动
	mui('.ct-scroll').scroll({
		scrollX: false,
		scrollY: true,
		indicators: false
	})
	
	//初始化滚动条
//	mui('#domBar').progressbar({
//		progress: 0
//	}).show();
		
//	mui.init({
//		pullRefresh: {
//			container: '#books', //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
//			up: {
//				height: 50, //可选.默认50.触发上拉加载拖动距离
//				auto: false, //可选,默认false.自动上拉加载一次
//				contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
//				contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
//				callback: pullFresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
//			}
//		}
//	});
//	
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
			share: [],
			relevant:[],
			onLine:true
		}
	});
   //获取分享
	$.ajax({
		type: 'GET',
		url:Consts.ForumApi + 'api/BBSPostedNormalApi?ShareId=' + WinUrlId + '&SharecurUserId=' + UsercurId + '&SharepUserId=' + UserUrlid,
		data: {},
		cache:true,
		dataType: 'json',
		success: function(data) {
			if(data.code == 0) {
				if(data.bodyMessage && data.bodyMessage != "null") {
					var html = "";
					var comment="";
					var dataCen = eval('(' + data.bodyMessage + ')');
					var dataMP = dataCen.MainPost[0];
					var dates = new Date(dataMP.Time);
                    var Time_Month = dates.getMonth() + 1;
                    var Time_Date = dates.getDate();
					if(dataMP.Title && dataMP.Time && dataMP.NickName && dataMP.Mcontent) {	
						html +='<div class="ct-name-time"><span>' + Time_Month +'月'+ Time_Date +'日'+ '</span><span>'+ dataMP.NickName +'</span></div>';
                       	dataMcon = eval('(' + dataMP.Mcontent + ')');
                        var dataMcentent = dataMcon.Content;
                        if (dataMcon.Url.length > 0) {
                            var dataMPPic = dataMcon.Url;
                            if (dataMPPic.length > 0) {
                                for (var i = 0; i < dataMPPic.length; i++) {
                                    if (dataMcentent.indexOf('{img' + i + '}') >= 0) {
                                        dataMcentent = dataMcentent.replace('{img' + i + '}', '<img src="' + dataMPPic[i].SmallPic + '"data-preview-src="" data-preview-group="1">');
                                    }

                                }
                            }
                        }
                        
						html += '<p>' + dataMcentent + '</p>';
						vm.share = html;
						mui.previewImage();

					} else {
						html = '<div id="no-data"><img src="../../img/public/data_icon.png"><p>暂无内容</p></div>';
					}
                    var dataPage = dataCen.Reply.PageDatas;
                    if (dataPage.length > 0)
                    {
                        for (var t = 0; t < 4; t++) {
                        	comment +='<div class="comment_read"><div class="comment_img"><img src="' + dataPage[t].UserHeadImg + '"></div>';
                        	comment +='<div class="comment"><h3 class="name">'+ dataPage[t].UserName + '<span class="book_zag"><em>'+dataPage[t].Zhichi+'</em><strong class="book_jiayi">+1</strong></span></h3>';
                            datapageCen = eval('(' + dataPage[t].MContent + ')');
                            var datapagecentent = datapageCen.Content;
                            if (datapageCen.Url.length > 0) {
                                var datapagePic = datapageCen.Url;
                                if (datapagePic.length > 0) {
                                    for (var i = 0; i < datapagePic.length; i++) {
                                        if (datapagecentent.indexOf('{img' + i + '}') >= 0) {
                                            datapagecentent = datapagecentent.replace('{img' + i + '}', '<img src="' + datapagePic[i].SmallPic + '">');
                                        }

                                    }
                                }
                            }
                            comment += '<p class="activeshow"><span>' + datapagecentent + ' </span></p><div class="commetn_icon_show"><i class="mui-icon mui-icon-arrowdown"></i></div></div></div>'
                           
                        }
                       vm.comment = comment;
                    }
                    
				} else {
					mui.toast('暂无内容');
				}
			} else {
				mui.toast('数据请求失败');
			}

		},
		error: function(xhr, type) {
			mui.toast('请求超时');
		}

	})
    	
})