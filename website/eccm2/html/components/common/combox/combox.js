ec.Combo = u.Combo.extend({
	_Constant: {
        EVENT_BEFOR_FOCUS: 'ec.combo.beforefocus',
        EVENT_AFTER_FOCUS: 'ec.combo.afterfocus',
    },
    init: function(){
	  	ec.Combo.superclass.init.apply(this, arguments);
        u.on(this._input, 'focus', this._focusHandler.bind(this));
        u.on(this._input, 'keyup', this._keyupHandler.bind(this));
    },
    _focusHandler:function(e){
      var self = this;
      this.trigger(this._Constant.EVENT_BEFOR_FOCUS);
      if ( u.isArray(this.datasource) ) {
        this.setComboData(this.datasource);
        this.initialComboData = this.comboDatas;
      }
      else if ( typeof this.datasource === "string" ){
        url = this.datasource;
        u.ajax({
            url: url,
            dataType: "json",
            success: function(data) {
              self.setComboData(JSON.parse(data));
              self.initialComboData = self.comboDatas;
            },
            error: function() {
            }
          });
      }
      this.show();
      this.trigger(this._Constant.EVENT_AFTER_FOCUS);
    },
    _keyupHandler: function (e) {
				var self = this;

				switch (e.keyCode) {
					case 38: // up
						u.stopEvent(e);
						break;
					case 40: // down
						u.stopEvent(e);
						break;
					case 9: // tab
					case 13: // return
							// make sure to blur off the current field
							// self.element.blur();
							u.stopEvent(e);
						break;
					default:
						if (this.timeout) clearTimeout(this.timeout);
						this.timeout = setTimeout(function() {
							self.onChange();
						}, 400);
						break;
				}
    },
		onChange: function() {
			var v = this._input.value;
			if(!v) v = '';
			var filterData = [];
			for(var i = 0, len = this.initialComboData.length; i< len; i++){
					if(this.initialComboData[i].name.indexOf(v) >= 0
							|| this.initialComboData[i].value.indexOf(v) >= 0) {
						filterData.push(this.initialComboData[i]);
					}
			}
			this.setComboData(filterData);
			this.show();
		}


});

u.compMgr.regComp({
    comp: ec.Combo,
    compAsString: 'ec.Combo',
    css: 'ec-combo'
})


ec.ComboboxAdapter = u.ComboboxAdapter.extend({
    init: function () {
        var self = this;
        //u.ComboboxAdapter.superclass.initialize.apply(this, arguments);
        this.datasource = u.getJSObject(this.viewModel, this.options['datasource']);


        this.mutil = this.options.mutil || false;
        this.onlySelect = this.options.onlySelect || false;
        this.validType = 'combobox';
        this.comp = new ec.Combo({el:this.element,mutilSelect:this.mutil,onlySelect:this.onlySelect});
        this.element['ec.Combo'] = this.comp;
        this.comp.datasource = this.datasource;
        // if (this.datasource){
        //     this.comp.setComboData(this.datasource);
				// 		this.comp.initialComboData = this.comp.comboDatas;
        // }else{
        //     if(u.isIE8 || u.isIE9)
        //         alert("IE8/IE9必须设置datasource");
        // }

        this.comp.on('select', function(event){
            self.setValue(event.value);
        });
    },

});

u.compMgr.addDataAdapter(
    {
        adapter: ec.ComboboxAdapter,
        name: 'ec-combobox'
    });
