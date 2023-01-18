"use strict";
var Components;
(function (Components) {
    let SubComponents;
    (function (SubComponents) {
        class Test {
        }
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    class Header {
        constructor() {
            const element = document.createElement('div');
            element.innerText = "This is Header";
            document.body.appendChild(element);
        }
    }
    Components.Header = Header;
    class Content {
        constructor() {
            const element = document.createElement('div');
            element.innerText = "This is Content";
            document.body.appendChild(element);
        }
    }
    Components.Content = Content;
    class Footer {
        constructor() {
            const element = document.createElement('div');
            element.innerText = "This is Footer";
            document.body.appendChild(element);
        }
    }
    Components.Footer = Footer;
})(Components || (Components = {}));
var Home;
(function (Home) {
    class Page {
        constructor() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));
