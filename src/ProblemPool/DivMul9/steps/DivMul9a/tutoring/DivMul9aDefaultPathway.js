var hints = [{id: "DivMul9a-h1", type: "hint", dependencies: [], title: "Minus sign", text: "Remember -g is equivalent to $$\\left(-1\\right) g$$.", variabilization: {}}, {id: "DivMul9a-h2", type: "hint", dependencies: ["DivMul9a-h1"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "DivMul9a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-g/(-1)=3/(-1)"], dependencies: ["DivMul9a-h2"], title: "Division", text: "Divide -1 from each side.", variabilization: {}}, {id: "DivMul9a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3"], dependencies: ["DivMul9a-h3"], title: "Simplification", text: "What do we get for g after simplifying the equation?", variabilization: {}}, {id: "DivMul9a-h5", type: "hint", dependencies: ["DivMul9a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul9a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul9a-h5"], title: "Verification", text: "Check whether -(-3) equals 3.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};