/*
 /!**
 * Created by zhangweiak on 2016/10/18.
 *!/

 $('.uf-anglearrowdown').on('click', function (e) {
 var n=$(e.target).parents('tr').index()+1;
 if(!$(e.target).parents('tr').hasClass('clicked')){
 inserTR(n);
 $(e.target).parents('tr').addClass('clicked');
 }

 });

 $('.uf-uparrow').on('click', function (e) {
 var m = $(e.target).parents('tr').index()+1;
 if($(e.target).parents('tr').hasClass('clicked')){
 delTR(m);
 $(e.target).parents('tr').removeClass('clicked');
 }
 })

 function inserTR(n){
 var tab=document.getElementById('mytable');
 var n=n;
 var tr=tab.insertRow(n);
 // var td=tr.insertCell(0);
 //tr.innerHTML='new '+Math.random(); //添加一列
 tr.innerHTML='<table class="u-table b-table"><thead style="background:#cecece;"><tr><th>申请标题</th><th>商品信息</th><th>价格</th></tr></thead></table>'
 }
 function delTR(m){
 var tab=document.getElementById('mytable');
 var m=m;
 tab.deleteRow(m);
 }*/

$('.specdown').on('click',function(e) {
    $(e.target).parent().parent().next().removeClass('hide');
    $(e.target).addClass('hide').siblings().removeClass('hide')
});

$('.specup').on('click',function(e){
    $(e.target).parent().parent().next().addClass('hide');
    $(e.target).addClass('hide').siblings().removeClass('hide')
});

viewModel = {
    dataTable: new u.DataTable({
        meta: {
            "title": "",
            "info": "",
            "price": "",
            "validate": "",
            "update":"",
            "human":"",
            "things":""
        }
    }, this)
};
//app = u.createApp({
//    el: '#task',
//    model: viewModel
//});
var app = new u.createApp();
//console.log(viewModel)
app.init(viewModel);

//console.log(viewModel)
//app.init(viewModel);
var data = {
    "pageIndex": 1,
    "pageSize": 10,
    "rows": [
        {
            "status": "nrm",
            "data": {
                "title": "赵四",
                "info": "lalalal",
                "price": "25",
                "validate":"2016-10-18",
                "update":"2016-10-20",
                "human":"张三",
                "things":"塑料"
            }
        }, {

            "status": "nrm",
            "data": {
                "title": "赵二",
                "info": "lalalal",
                "price": "25",
                "validate":"2016-10-18",
                "update":"2016-10-20",
                "human":"张三",
                "things":"塑料"
            }
        }, {
            "status": "nrm",
            "data": {
                "title": "齐三",
                "info": "lalalal",
                "price": "25",
                "validate":"2016-10-18",
                "update":"2016-10-20",
                "human":"张三",
                "things":"塑料"
            }
        }, {

            "status": "nrm",
            "data": {
                "title": "赵刘",
                "info": "lalalal",
                "price": "25",
                "validate":"2016-10-18",
                "update":"2016-10-20",
                "human":"张三",
                "things":"塑料"
            }
        }
    ]
}
viewModel.dataTable.removeAllRows();
viewModel.dataTable.setData(data);
