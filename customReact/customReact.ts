let customRender = (element : reactElement, container : Element | null) : void => {
    /*const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    domElement.setAttribute('href', element.props.href);
    domElement.setAttribute('target', element.props.target);

    container?.appendChild(domElement);*/

    const domElement =document.createElement(element.type);
    domElement.innerHTML = element.children;
    //Use this for indexing in Typescript, normal indexing works in js
    type PropKeys = keyof typeof element.props;
    for(const prop in element.props) {
        const key = prop as PropKeys;
        domElement.setAttribute(key, element.props[key]);
    }
    container?.appendChild(domElement);
}
class reactElement {
    type : string;
    props : {href:string, target:string};
    children : string;
    constructor(type:string, props:{href:string, target:string}, children : string) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
}
const element1 = new reactElement('a',{href:'https://google.com',target:'_blank'},'Click me to visit Google');

const mainContainer = document.querySelector('#root');

customRender(element1, mainContainer)

