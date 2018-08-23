function checkTicket() {
  var count = 0;//用于统计查票次数
  this.timer = setInterval(() => {//每3秒钟查询一次
    count++;//查询次数加一
    this.a = $("#ZY_5l0000G10470").attr("class") || $("#YZ_58000K13160C").attr("class")|| $("#YW_58000K13160C").attr("class");;
    //$("#ZY_5l0000G10470").attr("class") 有票的座位会包含class名 以此来判断
    // 可以查询多个
    if (this.a) {//存在即有票
      console.log("共查询：" + count + "次！");//输出查询次数
      clearInterval(this.timer);//清空计时器 停止查询
      alert("有票，快买");//alert 方法能够在浏览器最小化时自动最大化浏览器
    }
    $("#query_ticket").click();//替代人手进行点击查询
  }, 3000)
}
checkTicket();