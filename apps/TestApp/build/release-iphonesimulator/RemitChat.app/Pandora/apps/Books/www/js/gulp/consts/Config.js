	



var Local =
{
    //本地
    DistAddress: 'http://114.55.8.27:8011', //负载均衡地址
    singnalrUrl: 'http://114.55.253.253:1009',
    FXUrl: 'http://fxchatmasterapi.fx110.com:8024/', //主站的API
    OKRUrl: 'http://fxchatapi.fx110.com:1004/', //汇信API
    OKRUrl148: 'http://10.0.0.147:8024/', //主站API接入(商城)
    LocalApi: 'http://localhost:8088/', //本地API
    ForumApi: 'http://fxchatbbsapi.fx110.com:8004/',//分享论坛帖子API
    CommentLocalUrl: 'http://upload.fx001.com/', //分享论坛帖子 本地地址
    CommentOnlineUrl: 'http://upload.fx110.com/', //分享论坛帖子 网上地址
    NewsPush: 'http://fxchatquotes.fx110.com:1009/', //新闻、跟单推送API
}



 var Developement =
 {
     //开发
	  DistAddress:'http://114.55.8.27:8011', //负载均衡地址
	  singnalrUrl:'http://114.55.253.253:1009',
	  FXUrl : 'http://10.0.0.147:8024/', //主站的API
	  OKRUrl: 'http://fxchatapi.fx110.com:1004/', //汇信API
	  OKRUrl148: 'http://fxchatmasterapi.fx110.com:8001/', //主站API接入(商城)
	  LocalApi: 'http://localhost:8088/', //本地API
	  ForumApi: 'http://fxchatbbsapi.fx110.com:8004/',//分享论坛帖子API
	  CommentLocalUrl: 'http://upload.fx001.com', //分享论坛帖子 本地地址
	  CommentOnlineUrl: 'http://upload.fx110.com', //分享论坛帖子 网上地址
	  NewsPush: 'http://fxchatquotes.fx110.com:1009/', //新闻、跟单推送API
}

   var PreRelease =
   {
     //预发布
      DistAddress: 'http://114.55.8.27:8013', //负载均衡地址
      singnalrUrl: 'http://114.55.253.253:1009',
      FXUrl: 'http://114.55.147.227:8002', //主站的API
      OKRUrl: 'http://fxchatapi.fx110.com:1006/', //汇信API
      OKRUrl148: 'http://fxchatmasterapi.fx110.com:8002/', //主站API接入(商城)
      LocalApi: 'http://localhost:8088/', //本地API
      ForumApi: 'http://fxchatbbsapi.fx110.com:8005/',//分享论坛帖子API
      CommentLocalUrl: 'http://upload.fx001.com', //分享论坛帖子 本地地址
      CommentOnlineUrl: 'http://upload.fx110.com', //分享论坛帖子 网上地址
      NewsPush: 'http://fxchatquotes.fx110.com:1010/', //新闻、跟单推送API
  }
   
   
   var Release =
   {
    //发布
    DistAddress: 'http://114.55.8.27:8014', //负载均衡地址
    singnalrUrl: 'http://114.55.253.253:1009',
    FXUrl: 'http://mswebapi.fx110.com', //主站的API
    OKRUrl: 'http://fxchatapi.fx110.com:1007/', //汇信API
    OKRUrl148: 'http://mswebapi.fx110.com/', //主站API接入(商城)
    LocalApi: 'http://localhost:8088/', //本地API
    ForumApi: 'http://apibbsstoaqy.fx110.com:8032/',//分享论坛帖子API
    CommentLocalUrl: 'http://upload.fx001.com', //分享论坛帖子 本地地址
    CommentOnlineUrl: 'http://upload.fx110.com', //分享论坛帖子 网上地址
    NewsPush: 'http://fxchatquotes.fx110.com:1011/', //新闻、跟单推送API

}
	function Create(type)
 	{
 		switch(parseInt(type))
 		{
 			case 1:
 			return Developement;
 			break;
 			case 2:
 			return PreRelease;
 			break;
 			case 3:
 			return Release;
 			break;
 		    case 4:
 		    return Local;
 			default:
 			break;
 		}
 		
 	}
 