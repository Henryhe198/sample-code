//define(function () {
    /*
    用途：检查输入字符串是否超出指定长度
    输入：
    s：字符串
    n：错误提示标签名
    l：验证长度
    返回：
    如果通过验证返回true,否则返回false
    */
    function IsOverLength(s, l) {
        if (s.length >= l) {
            return true;
        };
        return false;
    };
    /*
          用途：检查输入字符串是否为undefined
      输入：
      str:字符串,
      返回：
      如果是返回true,否则返回false*/
    function IsUndefined(str) {
        if (typeof (str) == 'undefined') {
            return true;
        };
    }
    /*
      用途：检查输入字符串是否为空为零或者非正数
      输入：
      str:字符串,
      n：错误提示标签名
      返回：
      如果全是空返回true,否则返回false
      */
    function IsNull(str) {
        if (str == "") {
            return true;
        }
        if (str == 0) {
            return true;
        }
        // var regu = "^[ ]+$";
        var reg = /^[0-9].*$/;
        if (!reg.test(str)) {
            return true;
        }
        return false;
    };
    /*
       用途：检查输入字符串是否为中文
       输入：
       str:字符串,
       返回：
       如果全是空返回true,否则返回false
       */
    function MatchChinese(str) {
        var reg = /^[\u4E00-\u9FFF]+$/;
        if (reg.test(str)) {
            return true;
        };
        return false;
    };
    /*匹配电话号码
     暂时第一位为1，第二位只有3578，总位数为11位
    */
    function PhoneNum(str) {
        var reg = /^[1][0-9]{10}$/;
        if (reg.test(str)) {
            return true;
        }
        return false;
    };
    /*匹配电话号码
     暂时第一位为1到9，总位数为5到10位
    */
    function QQNum(str) {
        var reg = /^[1-9][0-9]{5,10}/;
        if (reg.test(str)) {
            return true;
        }
        return false;
    };
    
    /* 匹配邮箱*/
    function CheckMail(mail) {
        var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (reg.test(mail)) { return true; }
        return false;
    };

    /* 匹配纯数字 */
    function Number(number)
    {
        var reg = /[^\d]/g;
        if (!reg.test(number)) { return true;}
        return false;
    }
    /* 匹配身份证 */

    function IsCard(str)
    {
        var reg = /[xX1-9]{18}/gi
        if (!reg.test(str)) { return true; }
        return false;
    }

    /* 匹配邮政编码*/
    function CheckPostcode(str) {
        var reg = /^[1-9][0-9]{5}$/;
        if (reg.test(str)) {
            return true;
        };
        return false;
    };
    /*匹配银行卡号*/
    function CheckBnak(str) {
        var reg = /^\d{16}|\d{19}$/;
        if (reg.test(str)) {
            return true;
        };
        return false;
    }
    /*验证是否包含特殊字符*/
    function IsSpecialCharacter(s) {
        if (s == "") {
            return false;
        }

        var pattern = new RegExp("[`~!%@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
        return pattern.test(s) ? false : true;
    }

//    return {
//        IsSpecialCharacter: IsSpecialCharacter, CheckBnak: CheckBnak, CheckPostcode: CheckPostcode, Number: Number, CheckMail: CheckMail, QQNum: QQNum, PhoneNum: PhoneNum, MatchChinese: MatchChinese, IsNull: IsNull, IsUndefined: IsUndefined, IsOverLength: IsOverLength
//    }
//})