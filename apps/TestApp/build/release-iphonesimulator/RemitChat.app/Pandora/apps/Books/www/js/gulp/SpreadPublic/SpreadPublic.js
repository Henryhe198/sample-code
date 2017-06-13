
// 交易品种的html添加
function addMenuTradesChildrenHtml(bol,trades, tradesAll)
{
    var tradesHtml = '';
    var cls = bol ? 'a_span' : '';
        for (var i = 0; i < tradesAll.length; i++) {
            if (trades.indexOf(tradesAll[i]) > -1) {
                tradesHtml += '<a href="javascript:;"><span class="'+cls+'">' + tradesAll[i] + '</span></a>';
            } else {
                tradesHtml += '<a href="javascript:;"><span>' + tradesAll[i] + '</span></a>';
            }
        }

        return tradesHtml;

}


//把交易品种写入菜单
function addMenuTrades(_this, trades, tradesAll) {
    var tradesHtml = "";
    if (trades.length >= tradesAll.length) {
        tradesHtml += ' <a href="javascript:;"><span class="a_Tspan">全部显示</span></a>'
        tradesHtml += addMenuTradesChildrenHtml(true, trades, tradesAll);
    }
    else {
        tradesHtml += ' <a href="javascript:;"><span>全部显示</span></a>'
        tradesHtml += addMenuTradesChildrenHtml(true, trades, tradesAll);
    }



   
    _this.append(tradesHtml);
}

//把交易商写入菜单(DOM,显示大小,)
//function addMenuTraders(_ddTraders, tradersChart, tradersAll) {
//    var tradesHtml = "", traIndexOf;
//    for (var i = 0; i < tradersAll.length; i++) {
//        traIndexOf = tradersChart ? tradersChart.indexOf(tradersAll[i]) - 0 : traders.indexOf(tradersAll[i]) - 0;
//        if (traIndexOf > -1) {
//            tradesHtml += '<a href="javascript:;"><span class="a_span">' + tradesAll[i] + '</span></a>';
//        } else {
//            tradesHtml += '<a href="javascript:;"><span>' + tradesAll[i] + '</span></a>';
//        }
//    }
//    _ddTraders.append(tradesHtml);

//}

//把交易品种写入页面
function addHtmlTrades(_this,trades) {
    var tableHtml = "";
    var taLength = trades.length;
    //tableHtml += '<th class="sort" width="300">&nbsp;</th>';
    if (taLength) {
        for (var i = 0; i < taLength; i++) {
            var tradesName = trades[i].replace(/\//g, "")
            tableHtml += '<p class="bold" id="' + tradesName + '">' + trades[i] + '</p>'
        }
        //console.log(trades)
        _this.html(tableHtml)
      //  _this.children("p").eq(taLength-1).nextAll().remove();
        $(".Right_content").children("ul").each(function (index) {
            var tdSize = $(this).children("li").size();
            if ($(this).attr("id") == "s_loading") { return false}
            if (taLength < tdSize) {
                $(this).children("li").eq(taLength-1).nextAll().remove();
            } else {
                for (var i = 0; i < taLength - tdSize; i++) {
                    $(this).append('<li>-</li>');
                }
            }
        })
    }
}



//6|57|2|107.288|107.267|2.1
//把数据组合成新的数组并返回该数组
function selJson(data, dataMsg) {
    var data = data.split("|");
    for (var i = 0; i < dataMsg.length; i++) {
        if (Number(data[0]) == Number(dataMsg[i].PlatId)) {
            //var PlatName = dataMsg[i].PlatName.replace(/\s+/g, "")//去掉名称空格
            data[0] = dataMsg[i].PlatName;
            var TradingModels = dataMsg[i].TradingModels;
            for (var o = 0; o < TradingModels.length; o++) {
                if (Number(data[2]) == Number(TradingModels[o].UnifiedId)) {
                    data[2] = TradingModels[o].UnifieldName;
                }
            }
        }

    }
   // var imgUrl = imgUrlSelect(data[0]);
  //  var linkUrl = linkSelect(data[0])
  //  data.push(imgUrl);
  //  data.push(linkUrl);
    return data;
}






