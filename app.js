function type_check_v1(object, type) {
    return typeof object === type;
}
function type_check_v2(object, type_object) {
    var ok = true;
    if (!type_check_v1(type_object.value, "undefined")) {
        if (object != type_object.value) {
            ok = false
        }
    }
    if (!type_check_v1(type_object.type, "undefined")) {
        if (!type_check_v1(object, type_object.type)) {
            ok = false
        }
    }
    if (!type_check_v1(type_object.enum, "undefined")) {
        if (type_object.enum.indexOf(object) == -1) {
            ok = false
        }
    }
    return ok;
}
function isStateLessComponent(element) {
    return !isClass(element) && typeof element === 'function'
}

function isClass(func) {
    return typeof func === 'function'
        && /^class\s/.test(Function.prototype.toString.call(func));
}

function shouldAddEventListener(property) {
    return /^on.*$/.test(property);
}


let rootDOMElement, rootReactElement;
const REACT_CLASS = 'REACT_CLASS';

function anElement(element, props, children) {
    if (isClass(element)) {
        return handleClass(element, props, children);
    } else if (isStateLessComponent(element)) {
        return element(props);
    } else {
        return handleHtmlElement(element, props, children);
    }
}

function createElement(el, props, ...children) {
    return anElement(el, props, children);
}

function handleClass(clazz, props, children) {
    const reactElement = new clazz(props);
    reactElement.children = children;
    reactElement.type = REACT_CLASS;
    return reactElement;
}

function handleHtmlElement(element, props, children) {
    const anElement = document.createElement(element);
    children.forEach(child => appendChild(anElement, child));
    if (props != null) {
        for (var prop in props) {
            if (props.hasOwnProperty(prop)) {
                appendProp(anElement, prop, props[prop])
            }
        }
        for (var prop in props) {
            if (props.hasOwnProperty(prop)) {
                appendProp(anElement, prop, props[prop])
            }
        }
    }
    return anElement;
}

function appendChild(element, child) {
    if (child.type === REACT_CLASS) {
        appendChild(element, child.render());
    } else if (Array.isArray(child)) {
        child.forEach(ch => appendChild(element, ch));
    } else  if (child instanceof String){
        element.innerHTML += child;
    }else if (typeof(child) === 'object') {
        element.appendChild(child);
    } else {
        element.innerHTML += child;
    }
}

function appendProp(element, propName, propVal) {
    if (shouldAddEventListener(propName)) {
        element.addEventListener(propName.substring(2).toLowerCase(), propVal);
    } else {
        element.setAttribute(propName, propVal);
    }
}

class Component {
    constructor(props) {
        this.type = REACT_CLASS;
        this.props = props;
        this.salt = '';
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 15; i++)
            this.salt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    build() {
    }

    reRender() {
        rootDOMElement = document.getElementById(this.salt);
        while (rootDOMElement.hasChildNodes()) {
            rootDOMElement.removeChild(rootDOMElement.lastChild);
        }
        rootDOMElement.appendChild(this.build());
    }
    render() {
        return React.createElement('div', {id:this.salt},
            this.build()
        );
    }

    setState(state) {
        this.state = Object.assign({}, this.state, state);
        this.reRender();
    }
}

window.React = {
    createElement,
    Component
};
window.ReactDOM = {
    render: (el, domEl) => {
        rootReactElement = el;
        rootDOMElement = domEl;
        const currentDOM = rootReactElement.render();
        rootDOMElement.appendChild(currentDOM);
    }
};
