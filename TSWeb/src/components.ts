namespace Components{
    export namespace SubComponents{
        export class Test{
            
        }
    }

    export class Header {
        constructor() {
            const element = document.createElement('div');
            element.innerText = "This is Header";
            document.body.appendChild(element);
        }
    }

    export class Content {
        constructor() {
            const element = document.createElement('div');
            element.innerText = "This is Content";
            document.body.appendChild(element);
        }
    }

    export class Footer {
        constructor() {
            const element = document.createElement('div');
            element.innerText = "This is Footer";
            document.body.appendChild(element);
        }
    }
}