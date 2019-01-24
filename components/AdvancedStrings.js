String.prototype.interpolate = function (data) {
    var a = this.split("{{");
 
    for (var i = 1; i < a.length; i++) {
        var d = a[i].split("}}");
        d[0] = data[d[0].trim()];
        a[i] = d.join("")
    }
    return a.join("");
};

class AdvancedStrings extends React.Component {

    constructor(props) {
        super(props);
    }
    build() {
        var form_interpolate = new Form();
        form_interpolate.add({type: "text", name: "AdvancedStringInput", value: "this is {{data}}"});
        form_interpolate.add({type: "textarea", name: "AdvancedStringData", value: "{ \"data\":\"a test run\" }"});
        form_interpolate.submit(function (e, data) {
            var d = JSON.parse(data.AdvancedStringData);
            alert(data.AdvancedStringInput.interpolate(d));
        });
        return React.createElement('div', null, [
            form_interpolate
        ]);
    }
}