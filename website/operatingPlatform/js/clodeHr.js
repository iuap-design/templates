/**
 * Created by Administrator on 2016/10/9.
 */
/*
document.getElementById('combo1')['u.Combo'].setComboData([{value:'01',name:'男'},{value:'02',name:'女'}]);*/
u.compMgr.updateComp();
var dataArray = [{value:'01',name:'2016'},{value:'02',name:'2015'}];//value为：下拉框真实值，name为下拉显示值

document.getElementById('combo1')['u.Combo'].setComboData(dataArray);