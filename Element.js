
class Element {
    constructor(tagName, contents, attributes) {
        this.tagName = tagName;
        this.contents = contents;
        this.attributes = attributes; 
    };

    createEl(parent) {
        let div = document.getElementById(parent);
        let elem = document.createElement(this.tagName);
        if (!this.attributes) return elem;
        for (let [attr, value] of Object.entries(this.attributes)) {
            elem.setAttribute(attr, value);
        }

        elem.textContent = this.contents;
        div.append(elem);
    };

    deletEl(attribut) {
        let deletEl = document.querySelector(attribut);
        deletEl.remove();
    };

    replacementEl(newTag, oldTag) {
        let newTagEl = document.getElementById(newTag);
        let oldTagEl = document.getElementById(oldTag);
        div.replaceChild(newTagEl, oldTagEl);
    };

    cloneEl(cloneTag, contents, attr) {
        let newcloneTag = document.getElementById(cloneTag);
        let cloneEl = newcloneTag.cloneNode(false);
        cloneEl.textContent = contents;
        newcloneTag.classList.add(attr);
        newcloneTag.after(cloneEl);
    };
}

let myButton = new Element('button', 'Hello word!', {id: "my-button", class: 'color'});
myButton.createEl('div');
myButton.cloneEl('my-button', 'I am a clone', 'clone01');

let myInput = new Element('input', '', {id: "my-input", class: 'text-enter', type: 'text', placeholder: 'Your name'});
myInput.createEl('div');

let mySpan = new Element('span', 'Element replacement', {id: "my-span", class: 'text-enter'});
mySpan.createEl('div');
mySpan.replacementEl('my-span', 'my-input');

myButton.deletEl('.clone01');




 



