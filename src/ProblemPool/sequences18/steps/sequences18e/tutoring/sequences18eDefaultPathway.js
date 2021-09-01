var hints = [{id: "sequences18e-h1", type: "hint", dependencies: [], title: "Substitution", text: "Substitute $$n=5$$ into the formula", variabilization: {}}, {id: "sequences18e-h2", type: "hint", dependencies: ["sequences18e-h1"], title: "Simplification", text: "Calculate the expression $$\\frac{{\\left(-1\\right)}^5 {\\left(5\\right)}^2}{\\left(5\\right)+\\left(1\\right)}$$", variabilization: {}}, {id: "sequences18e-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-25"], dependencies: ["sequences18e-h2"], title: "Calculate the numerator", text: "What is $${\\left(-1\\right)}^5 {\\left(5\\right)}^2$$", variabilization: {}}, {id: "sequences18e-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["sequences18e-h3"], title: "Calculate the denominator", text: "What is $$\\left(5\\right)+\\left(1\\right)$$", variabilization: {}}, {id: "sequences18e-h5", type: "hint", dependencies: ["sequences18e-h4"], title: "Putting It Together", text: "Put the numerator and denominator together to create a fraction", variabilization: {}}, ]; export {hints};