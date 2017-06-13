
//时间戳转化成日期字符串
function timeStamp(timestamp)
{
    var d = new Date(timestamp * 1000);
    var date = (d.getFullYear()) + "-" +
               (d.getMonth() + 1) + "-" +
               (d.getDate()) + " " +
               (d.getHours()) + ":" +
               (d.getMinutes()) + ":" +
               (d.getSeconds());
    return date;
}




//日期字符串转化成时间戳
function timeStr(date)
{
    date = date.substring(0,19);    
    date = date.replace(/-/g,'/'); 
    var timestamp = new Date(date).getTime();
    return timestamp;
}