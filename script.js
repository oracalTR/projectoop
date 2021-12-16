const DomElement = function(selector, width, height, bg, fontSize) {
    this.selector = selector;
    this.width = parseInt(width);
    this.height = parseInt(height);
    this.bg = bg;
    this.fontSize = parseInt(fontSize) + 'px';
    this.createElem = function(elem) {
        const newElem = document.createElement(elem);
        newElem.style.cssText = `width: ${this.width + 'px'}; height: ${this.height + 'px'}; font-size: ${this.fontSize}; 
        background: ${bg}; position: absolute; text-align: center; top: 0; left: 0;`;
        if(selector.substr(0, 1) == '.') {
            newElem.classList.add(selector.substr(1));
        } else if(selector.substr(0, 1) == '#') {
            newElem.setAttribute('id', selector.substr(1));
        }
        document.body.insertAdjacentElement('afterbegin', newElem);
    };
    this.textContent = function(selector, text) {
        const elem = document.querySelector(selector);
        elem.textContent = text;
    };
    this.moveBox = function(selector) {
        const elem = document.querySelector(selector);
        console.log(elem);
        document.body.addEventListener('keydown', function(event) {
            switch (event.key) {
                case 'ArrowUp':
                    if(parseInt(elem.style.top) == 0) {
                        break;
                    }
                    elem.style.top = parseInt(elem.style.top) - 10 + 'px';
                    break; 
                case 'ArrowDown':
                    if(parseInt(elem.style.top) + height >= document.documentElement.clientHeight) {
                        break;
                    }
                    elem.style.top = parseInt(elem.style.top) + 10 + 'px';
                    break; 
                case 'ArrowLeft':
                    if(parseInt(elem.style.left) == 0) {
                        break;
                    }
                    elem.style.left = parseInt(elem.style.left) - 10 + 'px';
                    break; 
                case 'ArrowRight':
                    console.log(this);
                    if(parseInt(elem.style.left) + width >= document.documentElement.clientWidth) {
                        break;
                    }
                    elem.style.left = parseInt(elem.style.left) + 10 + 'px';
                    break; 
                default:
                    break;
            }
        });
    };
};

const div = new DomElement('.block', 100, 100, '#ccc', 22);
div.createElem('div');
div.textContent('.block', 'ООП');
div.moveBox('.block');