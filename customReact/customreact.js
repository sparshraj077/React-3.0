function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.textContent = reactElement.children; // Use textContent for safety

    // Loop through props and add attributes
    for (const prop in reactElement.props) {
        if (prop === "children") continue; // Skip children as it's not an attribute
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

// React-like element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me'
};

// Select the root container and render the element
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
