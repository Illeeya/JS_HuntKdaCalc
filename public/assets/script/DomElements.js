export class InputField {
    constructor(gridArea, id) {
        this.node = document.createElement("input");
        this.node.style.gridArea = gridArea;
        this.node.style.margin = "2px";
        this.node.style.width = "80%";
        this.node.classList.add("input-group");
        // this.node.classList.add("mb-3");
        this.node.id = id;
        this.node.type = "number";
        this.node.min = 0;
        return this.node;
    }
}

export class Label {
    constructor(text, htmlFor, gridArea, id = "") {
        this.parNode = document.createElement(`div`);
        this.parNode.style.gridArea = gridArea;
        this.parNode.style.display = "inline";
        //
        this.node = document.createElement("label");
        this.node.textContent = text;
        this.node.style.margin = "2px";
        this.node.htmlFor = htmlFor;
        if (id != "") this.node.id = id;
        //
        this.parNode.appendChild(this.node);
        return this.parNode;
    }
}

export class DivedImg {
    constructor(source) {
        this.parNode = document.createElement(`div`);
        this.parNode.classList.add("labelIconBox");
        //
        this.node = document.createElement(`img`);
        this.node.src = source;
        this.node.classList.add("labelIcon");
        //
        this.parNode.appendChild(this.node);
        return this.parNode;
    }
}

// const IMG_NAME =
//             text == "Kills" ?
//             "kill" :
//             text == "Assists" ?
//             "assist" :
//             text == "Deaths" ?
//             "death" :
//             "";

export class Button {
    constructor(text, gridArea, width, buttonClass = "") {
        this.node = document.createElement("button");
        this.node.textContent = text;
        this.node.style.gridArea = gridArea;
        this.node.style.margin = "2px";
        this.node.style.width = width;
        this.node.style.height = "60%";
        if (buttonClass) {
            this.node.classList.add("btn");
            this.node.classList.add(buttonClass);
        }
        return this.node;
    }
}
