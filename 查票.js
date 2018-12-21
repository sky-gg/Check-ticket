function checkTicket(arr) {
  this.count = 0;//计数
  let flag, num, ticketName;
  this.timer = setInterval(() => {
    this.count++;
    arr.map((item) => {
      flag = $('#' + item).attr("class")
      if (flag) {
        clearInterval(this.timer);
        num = item.slice(-12)
        ticketName = $(`#ticket_${num}`).find('a').html()
        console.log("共查询：" + this.count + "次！");
        var a = $(`<a href='${ticketName}:有票，快买' target='_blank'>查询结果</a>`).get(0);
        a.click()
      }
    })
    $("#query_ticket").click();
  }, 3000)
}
// checkTicket(['SWZ_6i0000G84000', 'SWZ_6i0000G8260B'])
