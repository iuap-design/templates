ec.Text = u.Text.extend({
    init: function(){
    	ec.Text.superclass.init.apply(this, arguments);

        u.on(this._input, 'keydown', this._keydownHandler.bind(this));
		u.on(this._input, 'keyup', this._keyupHandler.bind(this));
    },
    _keydownHandler: function (event) {
        if (event.keyCode === 13) {
           this._input.blur();
        }
        this.trigger('u.text.keydown');
    },
    _keyupHandler: function (event) {
        this.trigger('u.text.keyup');
    },
     _blur : function (event) {
        u.removeClass(this.element, this._CssClasses.IS_FOCUSED);
        this.trigger('u.text.blur');
    },


});

u.compMgr.regComp({
    comp: ec.Text,
    compAsString: 'ec.Text',
    css: 'ec-text'
})

ec.TextFieldAdapter = u.TextFieldAdapter.extend({
    
    initialize: function (options) {
        u.TextFieldAdapter.superclass.initialize.apply(this, arguments);
        var dataType = this.dataModel.getMeta(this.field,'type') || 'string';

        this.comp = new ec.Text(this.element);
        this.element['ec.Text'] = this.comp;


        if (dataType === 'float'){
            this.trueAdpt = new u.FloatAdapter(options);
        }
        else if (dataType === 'string'){
            this.trueAdpt = new u.StringAdapter(options);
        }
        else if (dataType === 'integer'){
            this.trueAdpt = new u.IntegerAdapter(options);
        }else{
            throw new Error("'u-text' only support 'float' or 'string' or 'integer' field type, not support type: '" + dataType + "', field: '" +this.field+ "'");
        }
        u.extend(this, this.trueAdpt);


        this.trueAdpt.comp = this.comp;
        this.trueAdpt.setShowValue = function (showValue) {
            this.showValue = showValue;
            //if (this.comp.compType === 'text')
            this.comp.change(showValue);
            this.element.title = showValue;
        }
        return this.trueAdpt;
    }
});

u.compMgr.addDataAdapter(
{
    adapter: ec.TextFieldAdapter,
    name: 'ec-text'
})