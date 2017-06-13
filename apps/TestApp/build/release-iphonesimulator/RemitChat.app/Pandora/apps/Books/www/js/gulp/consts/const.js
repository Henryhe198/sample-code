

var script=document.createElement('script');
    script.src="../js/gulp/consts/Config.js";
	script.type = "text/javascript";
	document.getElementsByTagName('head')[0].appendChild(script);
 	
 

 	
 
 	
var Consts = 
{ 

	_browseType: { //手机类型枚举
	    Android: 1,
	    Ios: 2
	}, 
	_IosType: {  //苹果手机类型
	    iPhone :1,
	    iPod: 2,
	    iPad: 3
	},
	_AppRoute: { //汇信APP 打开的路径
	    Default: 'com.fxchat://',  //安卓App默认地址   首页
	    IosDefault:'', //Ios App默认地址
	    IosLoadLink: '',//Ios汇信版的下载链接
	    AndroidLoadLink: 'http://im.fx110.com/ReleaseLoad/fxchat-ui-release_fabu81_sign.apk'//安卓版汇信的下载链接
	}
}

 	// 1  开发
 	// 2 预发布
 	// 3 发布
 		script.onload = function(){
 			var config =  Create(1);
 			
 			for(var tem in config){
				Consts[tem]=config[tem];
			}

		}



