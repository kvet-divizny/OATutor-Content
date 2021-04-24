var hints = [{id: "SubAdd17d-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "SubAdd17d-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["p+2.4-2.4=-9.3-2.4"], dependencies: ["SubAdd17d-h1"], title: "Subtraction", text: "Subtract 2.4 from each side.", variabilization: {}}, {id: "SubAdd17d-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["p=-11.7"], dependencies: ["SubAdd17d-h2"], title: "Simplification", text: "Simplify the equation.", variabilization: {}}, {id: "SubAdd17d-h4", type: "hint", dependencies: ["SubAdd17d-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "SubAdd17d-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["SubAdd17d-h4"], title: "Verification", text: "Check whether $$-\\left(11.7\\right)+\\left(2.4\\right)$$ equals -9.3.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};