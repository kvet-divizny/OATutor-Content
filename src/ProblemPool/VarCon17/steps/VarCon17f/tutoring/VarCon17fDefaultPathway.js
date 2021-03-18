var hints = [{id: "VarCon17f-h1", type: "hint", dependencies: [], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "VarCon17f-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-8=4r"], dependencies: ["VarCon17f-h1"], title: "Addition", text: "Add 11r to each side of the equation."}, {id: "VarCon17f-h3", type: "hint", dependencies: ["VarCon17f-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon17f-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["r=-2"], dependencies: ["VarCon17f-h3"], title: "Division", text: "Divide 4 from each side."}, {id: "VarCon17f-h5", type: "hint", dependencies: ["VarCon17f-h4"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon17f-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon17f-h5"], title: "Verification", text: "Check whether $$-\\left(11\\right) \\left(\\-2\\right)-\\left(8\\right)$$ equals $$-\\left(7\\right) \\left(\\-2\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};