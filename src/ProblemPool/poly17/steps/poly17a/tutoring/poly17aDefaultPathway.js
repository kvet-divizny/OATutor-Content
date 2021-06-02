var hints = [{id: "poly17a-h1", type: "hint", dependencies: [], title: "FOIL Method", text: "Use the FOIL (first, outside, inside, last) method to multiply the binomials.", variabilization: {}}, {id: "poly17a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["24x^2"], dependencies: ["poly17a-h1"], title: "FOIL Method", text: "What is the product of the first two terms of the binomials?", variabilization: {}}, {id: "poly17a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-16x"], dependencies: ["poly17a-h2"], title: "FOIL Method", text: "What is the product of the outside two terms of the binomials?", variabilization: {}}, {id: "poly17a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12x"], dependencies: ["poly17a-h3"], title: "FOIL Method", text: "What is the product of the inside two terms of the binomials?", variabilization: {}}, {id: "poly17a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-8"], dependencies: ["poly17a-h4"], title: "FOIL Method", text: "What is the product of the last two terms of the binomials?", variabilization: {}}, {id: "poly17a-h6", type: "hint", dependencies: ["poly17a-h5"], title: "Combine Like Terms", text: "Add the products and combine like terms.", variabilization: {}}, ]; export {hints};