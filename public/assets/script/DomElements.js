export class InputField {
    constructor(gridArea, id) {
        this.node = document.createElement("input");
        this.node.style.gridArea = gridArea;
        this.node.style.margin = "2px";
        this.node.style.width = "80%";
        this.node.id = id;
        this.node.type = "number";
        this.node.min = 0;
        return this.node;
    }
}

export class Label {
    constructor(text, htmlFor, gridArea, id = "") {
        this.node = document.createElement("label");
        this.node.textContent = text;
        this.node.style.gridArea = gridArea;
        this.node.style.margin = "2px";
        this.node.htmlFor = htmlFor;
        if (id != "") this.node.id = id;
        return this.node;
    }
}

export class Button {
    constructor(text, gridArea, width) {
        this.node = document.createElement("button");
        this.node.textContent = text;
        this.node.style.gridArea = gridArea;
        this.node.style.margin = "2px";
        this.node.style.width = width;
        this.node.style.height = "60%";
        return this.node;
    }
}
