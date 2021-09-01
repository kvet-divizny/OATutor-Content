var hints = [{id: "DivMul23a-h1", type: "hint", dependencies: [], title: "Translation", text: "The first step is translating the sentences into an equation.", variabilization: {}}, {id: "DivMul23a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$143=-11y$$"], dependencies: ["DivMul23a-h1"], title: "Translation", text: "Translate it into an equation.", variabilization: {}}, {id: "DivMul23a-h3", type: "hint", dependencies: ["DivMul23a-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "DivMul23a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$y=-13$$"], dependencies: ["DivMul23a-h3"], title: "Division", text: "Divide both sides by -11.", variabilization: {}}, {id: "DivMul23a-h5", type: "hint", dependencies: ["DivMul23a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul23a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul23a-h5"], title: "Verification", text: "Check whether 143 equals $$-\\left(11\\right) \\left(-13\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};