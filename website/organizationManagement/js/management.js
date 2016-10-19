var viewModel = {
    treeSetting: {
        view: {
            showLine: false,
            selectedMulti: false
        },
        callback: {
            onClick: function(e, id, node) {
                // alert(id)
                // alert(node)
                var rightInfo = node.name + '被选中';
                u.showMessage({ msg: rightInfo, position: "top" })


            }
        }
    },
    dataTable: new u.DataTable({
        meta: {
            'id': {
                'value': ""
            },
            'pid': {
                'value': ""
            },
            'title': {
                'value': ""
            }
        }
    })
};
var app = u.createApp({
    el: document.body,
    model: viewModel
})

// var data = [{ "id": "01", "pid": "root", "title": "f1" }, { "id": "02", "pid": "root", "title": "f2" }, { "id": "101", "pid": "01", "title": "f11" }, { "id": "102", "pid": "01", "title": "f12" }, { "id": "201", "pid": "02", "title": "f21" }]
// viewModel.dataTable.setSimpleData(data);

var data = {
    "pageIndex": 1,
    "pageSize": 10,
    "rows": [
        {
            "status": "nrm",
            "data": {
                "id": "01",
                "pid": "root",
                "title": "Parent1"
            }
        },
        {
            "status": "nrm",
            "data": {
                "id": "02",
                "pid": "root",
                "title": "Parent2"
            }
        },
        {
            "status": "nrm",
            "data": {
                "id": "101",
                "pid": "01",
                "title": "Child11"
            }
        },
        {
            "status": "nrm",
            "data": {
                "id": "102",
                "pid": "01",
                "title": "mChild12"
            }
        },
        {
            "status": "nrm",
            "data": {
                "id": "201",
                "pid": "02",
                "title": "Child21"
            }
        }
    ]
}
viewModel.dataTable.setData(data);

