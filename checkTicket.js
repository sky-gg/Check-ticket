// 调用桌面通知
if (!('Notification' in window)) {
    alert('抱歉，您的浏览器不支持桌面通知，请使用Chrome浏览器');
} else {
    Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
            // '用户允许通知'，执行查票代码，开始查票
            checkTicket(['ZE_6i0000D9020M', 'SWZ_6i0000G8260B'])
        } else if (permission === 'denied') {
            // '用户拒绝通知' 罢工
            alert('抱歉，您拒绝使用桌面通知，将终止查票');
        }
    });
}
/*
* param {arr} Array 席位ID
*/
function checkTicket(arr) {
    //设置定时器3秒查询一次
    this.timer = setInterval(() => {
        //遍历传入数组
        arr.map((item) => {
            //是否有class属性
            let flag = $('#' + item).attr("class")
            //如果有证明有票
            if (flag) {
                //清除定时器，停止查询
                clearInterval(this.timer);
                //获取id后缀数字，用于查询有票的那个车次
                let num = item.slice(-12)
                
                // 调用api，进行电脑端提醒
                new Notification('温馨提示：', {
                    dir: 'auto',
                    body: '已进入支付流程，请支付',
                    icon: 'https://www.12306.cn/index/images/favicon.ico',
                    requireInteraction: true
                })
                
                //调用12306声音提示
                $('#tryPlayer').click()
                
                //进入确认订单页
                $(`#ticket_${num} td:last a:first`).click();

            }
        })
        //代替人手，进行查票操作
        $("#query_ticket").click();
    }, 3000)
}

/* 订单页油猴脚本

// ==UserScript==
// @name         12306抢票
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://kyfw.12306.cn/otn/confirmPassenger/initDc
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function(){
        //选取乘车人 默认第一位
        $('#normalPassenger_0').click()

        //确认订单信息
        $('#submitOrder_id').click()
        setTimeout(function(){
            //提交订单
            $('#qr_submit_id').click()
        },1000)
    },1000)
})();

*/
