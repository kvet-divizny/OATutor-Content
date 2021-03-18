var hints = [{id: "DivMul14a-h1", type: "hint", dependencies: [], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "DivMul14a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(9/25)/(-4/5)=-(4/5)z/(-4/5)"], dependencies: ["DivMul14a-h1"], title: "Division", text: "Divide $$\\frac{-\\left(4\\right)}{5}$$ from each side."}, {id: "DivMul14a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-9/20"], dependencies: ["DivMul14a-h2"], title: "Simplification", text: "What do we get for z after simplifying the equation?"}, {id: "DivMul14a-h4", type: "hint", dependencies: ["DivMul14a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "DivMul14a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul14a-h4"], title: "Verification", text: "Check whether $$\\frac{9}{25}$$ equals $$-\\left(\\frac{4}{5}\\right) \\frac{\\left(\\-9\\right)}{20}$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};