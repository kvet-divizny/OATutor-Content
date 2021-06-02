var hints = [{id: "factor27a-h1", type: "hint", dependencies: [], title: "Perfect Square Trinomial", text: "A perfect square trinomial has the form $$a^2+\\left(2\\right) ab+b^2$$.", variabilization: {}}, {id: "factor27a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["15"], dependencies: ["factor27a-h1"], title: "Square Root of 225", text: "What is the square root of 225?", variabilization: {}}, {id: "factor27a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["factor27a-h2"], title: "Square Root of 16", text: "What is the square root of 16?", variabilization: {}}, {id: "factor27a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["120"], dependencies: ["factor27a-h3"], title: "2ab", text: "What is the product of 2ab?", variabilization: {}}, {id: "factor27a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["factor27a-h4"], title: "Classifying the Expression", text: "Is the expression a perfect square trinomial?", choices: ["Yes", "No"], variabilization: {}}, {id: "factor27a-h6", type: "hint", dependencies: ["factor27a-h5"], title: "Factoring a Square Trinomial", text: "A perfect square trinomial with the form $$a^2+\\left(2\\right) ab+b^2$$ can be factored as $${\\left(a+b\\right)}^2$$.", variabilization: {}}, ]; export {hints};