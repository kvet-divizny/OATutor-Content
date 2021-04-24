var hints = [{id: "poly18a-h1", type: "hint", dependencies: [], title: "FOIL Method", text: "Use the FOIL (first, outside, inside, last) method to multiply the binomials.", variabilization: {}}, {id: "poly18a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["24b^4"], dependencies: ["poly18a-h1"], title: "FOIL Method", text: "What is the product of the first two terms of the binomials?", variabilization: {}}, {id: "poly18a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-24b^2"], dependencies: ["poly18a-h2"], title: "FOIL Method", text: "What is the product of the outside two terms of the binomials?", variabilization: {}}, {id: "poly18a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-24b^2"], dependencies: ["poly18a-h3"], title: "FOIL Method", text: "What is the product of the inside two terms of the binomials?", variabilization: {}}, {id: "poly18a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["24"], dependencies: ["poly18a-h4"], title: "FOIL Method", text: "What is the product of the last two terms of the binomials?", variabilization: {}}, {id: "poly18a-h6", type: "hint", dependencies: ["poly18a-h5"], title: "Combine Like Terms", text: "Add the products and combine like terms.", variabilization: {}}, ]; export {hints};