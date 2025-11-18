var customRender = function (element, container) {
    /*const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    domElement.setAttribute('href', element.props.href);
    domElement.setAttribute('target', element.props.target);

    container?.appendChild(domElement);*/
    var domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (var prop in element.props) {
        var key = prop;
        domElement.setAttribute(key, element.props[key]);
    }
    container === null || container === void 0 ? void 0 : container.appendChild(domElement);
};
var reactElement = /** @class */ (function () {
    function reactElement(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
    return reactElement;
}());
var element1 = new reactElement('a', { href: 'https://google.com', target: '_blank' }, 'Click me to visit Google');
var mainContainer = document.querySelector('#root');
customRender(element1, mainContainer);
