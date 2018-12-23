/*
* param {arr} Array
*/ 
function checkTicket(arr) {
  this.count = 0;//用于计数
  this.timer = setInterval(() => {//设置定时器3秒查询一次
    this.count++;
    arr.map((item) => {//遍历传入数组
      this.flag = $('#' + item).attr("class")//是否有class属性
      if (this.flag) {//如果有证明有票
        clearInterval(this.timer);//清除定时器，停止查询
        this.num = item.slice(-12)//获取id后缀数字，用于查询有票的那个车次
        this.ticketName = $(`#ticket_${this.num}`).find('a').html()//获取车次名称
        console.log("共查询：" + this.count + "次！");
        this.a = $(`<a href='${this.ticketName}:有票，快买' target='_blank'>查询结果</a>`).get(0);//使用a标签来最大化浏览器达到提醒功能
        this.a.click()//打开新窗口
      }
    })
    $("#query_ticket").click();//代替人手，进行查票操作
  }, 3000)
}
// checkTicket(['SWZ_6i0000G84000', 'SWZ_6i0000G8260B'])
