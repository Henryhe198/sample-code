
// 参数 pull为iscroll对象，fn上拉回调方法，downFn下拉回调方法
function pullUpDown(pull, upFn, downFn) {
    var pullUpEl = $('#pullUp');
    var pullDownEl = $('#pullDown');
    var pullUpL = pullUpEl.find('.pullUpLabel');
    var pullDownL = pullDownEl.find('.pullDownLabel');
    var loadingStep = 0;//加载状态0默认，1显示加载状态，2执行加载数据，只有当为0时才能再次加载，这是防止过快拉动刷新  

    //滚动时  
    pull.on('scroll', function () {
        if (pullUpEl.length) {//上拉刷新效果  如果this.y > 40 时 为下拉           
            if (this.y < (this.maxScrollY - 40) && !pullUpEl.hasClass('flip')) {
                pullUpEl.show();
                pullUpEl.addClass('flip');
                pullUpL.text('松开立即加载数据');
                loadingStep = 1;
                pull.refresh();
            }
        }
        if (pullDownEl.length) {
            if (this.y > 40) {
                pullDownEl.show();
                pullDownEl.addClass('flip');
                pullDownL.text('松开立即加载数据');
                loadingStep = 1;
                pull.refresh();
            }
        }
    });
    //滚动完毕  
    pull.on('scrollEnd', function () {
        if (loadingStep == 1) {
            if (pullUpEl.hasClass('flip')) {
                pullUpEl.removeClass('flip').addClass('loading');
                pullUpL.text('努力加载中');
                loadingStep = 2;
                var bool = upFn();
                if (!bool) { pullUpL.text('没有更多了') };
                setTimeout(function () {
                    pullUpEl.attr('class', '').hide();
                    pull.refresh();
                    loadingStep = 0;
                }, 500)
            } else if (pullDownEl.hasClass('flip')) {
                pullDownEl.removeClass('flip').addClass('loading');
                pullDownL.text('努力加载中');
                loadingStep = 2;
                var bool = downFn();
                if (!bool) { pullDownL.text('没有更多了') };
                setTimeout(function () {
                    pullDownEl.attr('class', '').hide();
                    pull.refresh();
                    loadingStep = 0;
                }, 500)
            }
        } else {
            //pullUpL.text('上拉加载更多...');
            //pullUpEl.attr('class', '').hide();
            //pullDownL.text('下拉加载更多...');
            //pullDownEl.attr('class', '').hide();
            //pull.refresh();
            //loadingStep = 0;
        }
    });


    document.addEventListener('touchmove', function (e) { e.preventDefault() }, false);
}