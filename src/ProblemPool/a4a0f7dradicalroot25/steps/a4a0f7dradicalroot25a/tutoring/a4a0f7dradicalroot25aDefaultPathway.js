var hints = [{id: "a4a0f7dradicalroot25a-h1", type: "hint", dependencies: [], title: "Isolating the Radical", text: "First you must isolate the radical. If this is already done then think about how we can isolate the variable.", variabilization: {}}, {id: "a4a0f7dradicalroot25a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\sqrt{4m+2}=4$$"], dependencies: ["a4a0f7dradicalroot25a-h1"], title: "Isolating the Radical", text: "What is the result?", variabilization: {}}, {id: "a4a0f7dradicalroot25a-h3", type: "hint", dependencies: ["a4a0f7dradicalroot25a-h2"], title: "Isolating the Variable", text: "Square both sides of the equation and isolate the variable.", variabilization: {}}, {id: "a4a0f7dradicalroot25a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$4m=14$$"], dependencies: ["a4a0f7dradicalroot25a-h3"], title: "Isolating the Variable", text: "What is the result?", variabilization: {}}, {id: "a4a0f7dradicalroot25a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$m=3$$ or $$m=5$$"], dependencies: ["a4a0f7dradicalroot25a-h4"], title: "Solving the Equation", text: "What is the answer?", choices: ["$$m=3$$ or $$m=4$$", "$$m=2$$ or $$m=5$$", "$$m=3$$ or $$m=5$$"], variabilization: {}}, {id: "a4a0f7dradicalroot25a-h6", type: "hint", dependencies: ["a4a0f7dradicalroot25a-h5"], title: "Double Checking", text: "Plug the answer back in to check if the answer is correct. This needs to be done because the radical can lead to some equations having no answers. If it doesn't work then there are no solutions to the equation.", variabilization: {}}, ]; export {hints};