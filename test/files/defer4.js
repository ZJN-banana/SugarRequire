//defer为控制流模块，执行resolve将返回成功callback
defer(function(resolve, reject) {
    //获取数据
    var data = this.data;

    //延时返回数据
    setTimeout(function() {
        resolve('Iamdefer4 ' + data);
    }, 200);
});