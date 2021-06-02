var hints = [{id: "SubAdd8a-h1", type: "hint", dependencies: [], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "SubAdd8a-h2", type: "hint", dependencies: ["SubAdd8a-h1"], title: "Addition", text: "After adding 28 to each side of the equation, we get $$a-\\left(28\\right)+\\left(28\\right)=-\\left(37\\right)+\\left(28\\right)$$.", variabilization: {}}, {id: "SubAdd8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-9"], dependencies: ["SubAdd8a-h2"], title: "Simplification", text: "What do we get for a after simplifying the equation?", variabilization: {}}, {id: "SubAdd8a-h4", type: "hint", dependencies: ["SubAdd8a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "SubAdd8a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["SubAdd8a-h4"], title: "Verification", text: "Check whether -9-28 equals -37.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};