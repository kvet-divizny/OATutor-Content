var hints = [{id: "use12a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute 2 for x and simplify the expression $$\\left(6\\right) {\\left(2\\right)}^2-\\left(4\\right) \\left(2\\right)-\\left(7\\right)$$.", variabilization: {}}, {id: "use12a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["use12a-h1"], title: "Exponentiation", text: "What is $${\\left(2\\right)}^2$$?", variabilization: {}}, {id: "use12a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["24"], dependencies: ["use12a-h2"], title: "Multiplication", text: "What is $$\\left(6\\right) {\\left(2\\right)}^2$$, given that $${\\left(2\\right)}^2=4$$?", variabilization: {}}, {id: "use12a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["use12a-h3"], title: "Multiplication", text: "What is 4(2)?", variabilization: {}}, {id: "use12a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["use12a-h4"], title: "Subtraction", text: "What is 24-8-7?", variabilization: {}}, ]; export {hints};