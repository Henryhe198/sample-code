
define(['layer'], function (layer) {
    function openAlert(str, time) {

        var style = document.createElement('link');
        style.href = "../../js/Gulp/layer_mobile/need/layer.css";
        style.rel = "stylesheet";
        document.body.appendChild(style);
    //提示
    layer.open({
        content: str
      , skin: 'msg'
      , time: time || 2
    });
}


return {
        openAlert:openAlert
    }
})