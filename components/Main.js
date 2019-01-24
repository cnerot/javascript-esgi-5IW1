String.prototype.interpolate = function (data) {
    var a = this.split("{{");

    for (var i = 1; i < a.length; i++) {
        var d = a[i].split("}}");
        d[0] = data[d[0].trim()];
        a[i] = d.join("")
    }
    return a.join("");


};
class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {route: window.location.pathname};
        this.logo = "Framework-Logo.jpg";
        console.log(window.location.pathname);
        this.routes = {
            "/": {
                name: "welcome",
                content: "WelcomePage"
            },
            "/example": {
                name: "Examples",
                content: "ExamplePage"
            }
        };
        let self = this;
        window.onpopstate = function(event) {
            self.setState({route: window.history.state.url});
        };

    }

    go_to(e) {
        e.preventDefault();
        window.history.pushState({url: e.target.dataset.goto}, '', e.target.dataset.goto);
        this.setState({route: e.target.dataset.goto});
    }

    back(e) {
        e.preventDefault();
        let self = this;
        window.history.back()

    }

    forward(e) {
        e.preventDefault();
        window.history.forward()
    }

    build() {
        var menu = [];
        var content = [];
        menu.push(React.createElement('a', {href: "#", class: "logo"},
            React.createElement('img', {src: config["image_path"] + this.logo})
        ));
        for (var route in this.routes) {
            if (this.routes.hasOwnProperty(route)) {
                var id = "" + Math.floor(Math.random() * 99) + Math.floor(Math.random() * 99)
                var active = (this.state.route == route);
                menu.push(React.createElement('a', {
                    href: "#",
                    class: "myTopnav_entry" + (active ? " active" : ""),
                    "data-goto": route,
                    onClick: this.go_to.bind(this)
                }, this.routes[route].name));
                var class_from_name = eval(this.routes[route].content);
                var component = new class_from_name();

                content.push(React.createElement('div', {
                        id: "myTopnav_" + id,
                        class: "myTopnav_content_entry" + (active ? "" : " hidden")
                    },
                    React.createElement('div', {class: "main_container"},
                        React.createElement('div', {
                            id: "myTopnav_content_" + id,
                            class: "main_container_content"
                        }, component)
                    )
                ));
            }
        }
        menu.push(React.createElement('a', {
            href: "#",
            class: "myTopnav_entry last",
            onClick: this.back.bind(this)
        }, " foward >>"));
        menu.push(React.createElement('a', {
            href: "#",
            class: "myTopnav_entry last",
            onClick: this.back.bind(this)
        }, "<< Back"));

        return React.createElement('div', null,
            React.createElement('div', {id: "myTopnav", class: "topnav"}, menu),
            React.createElement('div', {id: "myTopnav_content"}, "<div>{{ data }}</div>".interpolate({data: "test"})),
            React.createElement('div', {id: "myTopnav_content"}, content)
        );
    }
}

const counter = React.createElement(Main, null, null);
ReactDOM
    .render(counter, document

        .getElementById(
            'root'
        ))
;

