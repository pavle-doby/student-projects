function generisiParagraf(className,innerHTML,parent){
    const paragraf = document.createElement("p");
    paragraf.className = className;
    paragraf.innerHTML = innerHTML;
    parent.appendChild(paragraf);

    return paragraf;
}

function generisiInput(type,className,parent){
    const input = document.createElement("input");
    input.type = type;
    input.className = className;
    parent.appendChild(input);

    return input;
}

function generisiDomElement(type,className,innerHTML,parent){
    const element = document.createElement(type);
    element.className = className;
    element.innerHTML = innerHTML;
    parent.appendChild(element);

    return element;
}

export {generisiDomElement, generisiInput, generisiParagraf};