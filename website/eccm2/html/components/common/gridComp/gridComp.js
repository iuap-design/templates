var gridCompProto = $.fn.grid.gridComp.prototype;
gridCompProto.initOptionsTree = function() {

}

gridCompProto.initGrid  = function() {
		if(!this.options.columns || this.options.columns.length == 0){
			return;
		}
		var oThis = this;
		this.initOptions();
		this.initVariable();
		this.initWidthVariable();
		this.initGridCompColumn();
		this.initDataSource();
		this.createDivs();
		// 去掉
		//this.inte = setInterval(function(){oThis.setIntervalFun.call(oThis)}, 300);
	},

gridCompProto.createContentLeft = function() {
		var oThis = this,htmlStr = "",left = 0,hStr;
		if(this.options.multiSelect){
			htmlStr += '<div class="u-grid-content-left" id="' + this.options.id + '_content_multiSelect" style="width:' + this.multiSelectWidth + 'px;' + hStr + '">';
			// 遍历生成所有行
			if (this.dataSourceObj.rows) {
				$.each(this.dataSourceObj.rows, function(i) {
					htmlStr += oThis.createContentLeftMultiSelectRow(this);
				});
			}
			htmlStr += '</div>';
			left += this.multiSelectWidth;
		}
		if (this.options.showNumCol) {
			htmlStr += '<div class="u-grid-content-left" id="' + this.options.id + '_content_numCol" style="width:' + this.numWidth + 'px;left:' + left + 'px;' + hStr + '">';
			// 遍历生成所有行
			if (this.dataSourceObj.rows) {
				this.treeNumCounter = 1;
				$.each(this.dataSourceObj.rows, function(i, row) {
					htmlStr += oThis.createContentLeftNumColRow(i, row.value);
				});
			}
			htmlStr += '</div>';
		}
		return htmlStr;
	}


gridCompProto.createContentLeftNumColRow = function(index, row) {
	if(this.options.showTree) {
		if(!row.parentId) {
			return '<div style="width:' + this.numWidth + 'px;" class="u-grid-content-num topLevel">' + (this.treeNumCounter++) + '</div>';
		} else {
			return '<div style="width:' + this.numWidth + 'px;display:none;" class="u-grid-content-num"></div>';;
		}
	}
	var htmlStr = '<div style="width:' + this.numWidth + 'px;" class="u-grid-content-num">' + (index+1) + '</div>';
	return htmlStr;
}
var oriResetNumCol = gridCompProto.resetNumCol;
gridCompProto.resetNumCol = function() {
	if(!this.options.showTree) {
		return oriResetNumCol.call(this);
	}
	var numCols = $('#' + this.options.id + '_content_numCol >.u-grid-content-num');
  var num = 1;
	$.each(numCols,function(i){
		if(u.hasClass(this, 'topLevel')) {
			this.innerHTML = num++;
		}
	});
}

var oriClickFunTree = gridCompProto.clickFunTree;
gridCompProto.clickFunTree = function(e) {
	oriClickFunTree.call(this,e);
	var trs = $('#' + this.options.id + '_content_table > tbody > tr');
	var numCols = $('#' + this.options.id + '_content_numCol >.u-grid-content-num');

	$.each(trs,function(i, tr){
		var visible = $(tr).is(":visible"), $num = $(numCols[i])
		if(visible) {
			$num.show();
		} else {
			$num.hide();
		}
	})

}

gridCompProto.createHeader = function() {
	var wrapStr = '',headerShowStr = '';
	if(!this.options.showHeader)
		headerShowStr = 'style="display:none;"';
	var htmlStr = '<div class="u-grid-header" id="' + this.options.id + '_header" ' + headerShowStr + '><div class="u-grid-header-wrap" id="' + this.options.id + '_header_wrap" data-role="resizable" ' + wrapStr + '>';
	htmlStr += '<div class="u-grid-header-columnmenu fa fa-bars"></div>';
	if (this.options.multiSelect || this.options.showNumCol) {
		htmlStr += '<div id="' + this.options.id + '_header_left" class="u-grid-header-left" style="width:' + this.leftW + 'px;">';
		if (this.options.multiSelect) {
			var gridBrowser = {},userAgent = navigator.userAgent,ua = userAgent.toLowerCase(),s;
			if (s=ua.match(/msie ([\d.]+)/)) {
				gridBrowser.isIE = true;
			}
			if (gridBrowser.isIE) {
				var mode = document.documentMode;
				if(mode == null){
				}else{
					if (mode == 8) {
						gridBrowser.isIE8 = true;
					}
					else if (mode == 9) {
						gridBrowser.isIE9 = true;
					}
				}
			}
			if(gridBrowser.isIE8){
				//htmlStr += '<div class="u-grid-header-multi-select" style="width:' + this.multiWidth + 'px;"><input class="u-grid-multi-input"   type="checkbox" id="' + this.options.id + '_header_multi_input"></div>'
				htmlStr += '<div class="u-grid-header-multi-select" style="width:' + this.multiWidth + 'px;"><span class="u-grid-checkbox-outline" id="' + this.options.id + '_header_multi_input"><span class="u-grid-checkbox-tick-outline"></span></span></div>'

			}else{
				//htmlStr += '<div class="u-grid-header-multi-select  checkbox check-success" style="width:' + this.multiWidth + 'px;"><input  class="u-grid-multi-input"  type="checkbox" id="' + this.options.id + '_header_multi_input"><label for="' + this.options.id + '_header_multi_input"></label></div>'
				htmlStr += '<div class="u-grid-header-multi-select  checkbox check-success" style="width:' + this.multiWidth + 'px;"><span class="u-grid-checkbox-outline" id="' + this.options.id + '_header_multi_input"><span class="u-grid-checkbox-tick-outline"></span></span></div>'
			}
		}
		if (this.options.showNumCol) {
			htmlStr += '<div class="u-grid-header-num" style="width:' + this.numWidth + 'px;">序号</div>';
		}
		htmlStr += '</div>';
	}
	htmlStr += this.createHeaderTableFixed();
	htmlStr += this.createHeaderTable();
	htmlStr += '</div>';
	htmlStr += this.createHeaderDrag();;
	htmlStr += '</div>';
	return htmlStr;
}
