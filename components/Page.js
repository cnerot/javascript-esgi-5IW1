class Page extends React.Component {

    constructor(props) {
        super(props);
        this.content = []
    }

    title(title, lvl = 1) {

        this.content.push(React.createElement('h' + lvl, null, title))
    }

    text(content) {
        this.content.push(React.createElement('p', null, content))
    }

    break() {
        this.content.push(React.createElement('br'))
    }

    img(src) {
        this.content.push(React.createElement('img', {src: config["image_path"] + src}))
    }

    build_page() {

    }

    build() {
        this.build_page();
        return React.createElement('div', null, this.content);
    }
}