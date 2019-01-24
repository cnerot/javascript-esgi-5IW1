class Form extends React.Component {

    constructor(props, submit_text = "Submit", func = function (e) {
    }) {
        super(props);
        this.fields = [];
        this.submit_text = submit_text;
        this.func = func;
    }
 
    add(data) {
        if (Array.isArray(data)) {
            for (var d in data) {
                this.add(d);
            }
        } else {
            if (data.type == "textarea") {
                delete data.type;
                var value = "";
                if (data.value) {
                    var value = data.value
                    delete data.value
                }
                this.fields.push(React.createElement('textarea', data, value));
                this.fields.push(React.createElement('br'));
            } else {
                this.fields.push(React.createElement('input', data));
                this.fields.push(React.createElement('br'));
            }
        }
    }
 
    submit(func) {
        this.func = func;
    }
 
    build() {
        let f = this.func
        let button = React.createElement('button', {
            onclick: function (e) {
                e.preventDefault();
                var data = new FormData(e.target.form);
                var data_res = {};
                for (var pair of data.entries()) {
                    data_res[pair[0]] = pair[1];
                }
                f(e, data_res);
            }
        }, this.submit_text);
        var form = React.createElement('form', null, [...this.fields, button]);
        return form;
    }
}