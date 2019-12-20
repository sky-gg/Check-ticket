// 调用桌面通知
if (!('Notification' in window)) {
    alert('抱歉，您的浏览器不支持桌面通知，请使用Chrome浏览器');
} else {
    Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
            // '用户允许通知'，执行查票代码，开始查票
            //checkTicket(['SWZ_6i0000G84000', 'SWZ_6i0000G8260B'])
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
    //用于计数
    this.count = 0;
    //设置定时器3秒查询一次
    this.timer = setInterval(() => {
        this.count++;
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
                //获取车次名称
                let ticketName = $(`#ticket_${num}`).find('a').html()
                //车次高亮
                $(`#ticket_${num}`).css({backgroundColor:'red'})
                //调用12306声音提示
                $('#tryPlayer').click()
                // 调用api，进行电脑端提醒
                new Notification(`共查询${this.count}次`, {
                    dir: 'auto',
                    body: `${ticketName}:车次有票，快买。`,
                    icon: 'https://www.12306.cn/index/images/favicon.ico',
                    requireInteraction: true
                })
            }
        })
        //代替人手，进行查票操作
        $("#query_ticket").click();
    }, 3000)
}
