var hints = [{id: "VarCon13a-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "VarCon13a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9=-3m"], dependencies: ["VarCon13a-h1"], title: "Subtraction", text: "Subtract 8m from each side."}, {id: "VarCon13a-h3", type: "hint", dependencies: ["VarCon13a-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon13a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["m=-3"], dependencies: ["VarCon13a-h3"], title: "Division", text: "Divide -3 from each side."}, {id: "VarCon13a-h5", type: "hint", dependencies: ["VarCon13a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon13a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon13a-h5"], title: "Verification", text: "Check whether $$\\left(8\\right) \\left(\\-3\\right)+\\left(9\\right)$$ equals $$\\left(5\\right) \\left(\\-3\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};