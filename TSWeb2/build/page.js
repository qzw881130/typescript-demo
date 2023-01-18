define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    class Header {
        constructor() {
            const element = document.createElement('div');
            element.innerText = "This is Header";
            document.body.appendChild(element);
        }
    }
    exports.Header = Header;
    class Content {
        constructor() {
            const element = document.createElement('div');
            element.innerText = "This is Content";
            document.body.appendChild(element);
        }
    }
    exports.Content = Content;
    class Footer {
        constructor() {
            const element = document.createElement('div');
            element.innerText = "This is Footer";
            document.body.appendChild(element);
        }
    }
    exports.Footer = Footer;
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Page {
        constructor() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
    }
    exports.default = Page;
});
