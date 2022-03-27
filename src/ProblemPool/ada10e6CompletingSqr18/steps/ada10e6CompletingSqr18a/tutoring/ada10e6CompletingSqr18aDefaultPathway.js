var hints = [{id: "ada10e6CompletingSqr18a-h1", type: "hint", dependencies: [], title: "Formula", text: "The pattern of perfect square $$=$$ $$a^2+2ab+b^2$$", variabilization: {}}, {id: "ada10e6CompletingSqr18a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$m^2$$"], dependencies: ["ada10e6CompletingSqr18a-h1"], title: "Identification", text: "What is $$a^2$$ $$=$$?", variabilization: {}}, {id: "ada10e6CompletingSqr18a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["m"], dependencies: ["ada10e6CompletingSqr18a-h2"], title: "Identification", text: "$$a=$$?", variabilization: {}}, {id: "ada10e6CompletingSqr18a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-26m"], dependencies: ["ada10e6CompletingSqr18a-h3"], title: "Identification", text: "What is 2ab?", variabilization: {}}, {id: "ada10e6CompletingSqr18a-h5", type: "hint", dependencies: ["ada10e6CompletingSqr18a-h4"], title: "Substitution", text: "With the known a and 2ab, b can be calculated", variabilization: {}}, {id: "ada10e6CompletingSqr18a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-13"], dependencies: ["ada10e6CompletingSqr18a-h5"], title: "Calculation", text: "$$b=$$?", variabilization: {}}, {id: "ada10e6CompletingSqr18a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-13"], dependencies: ["ada10e6CompletingSqr18a-h6"], title: "Calculation", text: "$$2m b=-26m$$, what is m?", variabilization: {}}, {id: "ada10e6CompletingSqr18a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["169"], dependencies: ["ada10e6CompletingSqr18a-h7"], title: "Substitution", text: "What is the third term $$b^2$$ in the perfect square?", variabilization: {}}, {id: "ada10e6CompletingSqr18a-h9", type: "hint", dependencies: ["ada10e6CompletingSqr18a-h8"], title: "Principle", text: "Remember that $${\\left(-x\\right)}^2=\\left(-x\\right) \\left(-x\\right)=x^2$$", variabilization: {}}, {id: "ada10e6CompletingSqr18a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["169"], dependencies: ["ada10e6CompletingSqr18a-h9"], title: "Squaring", text: "What is $${\\left(-13\\right)}^2$$?", variabilization: {}}, {id: "ada10e6CompletingSqr18a-h11", type: "hint", dependencies: ["ada10e6CompletingSqr18a-h10"], title: "Principle", text: "Recall that $$a^2+2ab+b^2={\\left(a+b\\right)}^2$$", variabilization: {}}, ]; export {hints};