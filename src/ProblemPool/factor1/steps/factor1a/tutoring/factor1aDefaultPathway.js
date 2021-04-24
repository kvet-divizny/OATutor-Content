var hints = [{id: "factor1a-h1", type: "hint", dependencies: [], title: "Greatest Common Factor", text: "First, factor out the Greatest Common Factor of the expression.", variabilization: {}}, {id: "factor1a-h2", type: "hint", dependencies: ["factor1a-h1"], title: "Greatest Common Factor", text: "The greatest common factor (GCF) of polynomials is the largest polynomial that divides evenly into the polynomials.", variabilization: {}}, {id: "factor1a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["3xy"], dependencies: ["factor1a-h2"], title: "Greatest Common Factor", text: "What is the Greatest Common Factor of the expression?", choices: ["3", "$${xy}^2$$", "y", "3xy"], variabilization: {}}, {id: "factor1a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["factor1a-h3"], title: "GCF of coefficients", text: "What is the Greatest Common Factor of the coefficients?", variabilization: {}}, {id: "factor1a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["x"], dependencies: ["factor1a-h4"], title: "GCF of x", text: "What is the Greatest Common Factor of the variable x?", choices: ["$$x^2$$", "x", "$$x^3$$"], variabilization: {}}, {id: "factor1a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["y"], dependencies: ["factor1a-h5"], title: "GCF of y", text: "What is the Greatest Common Factor of the variable y?", choices: ["$$y^2$$", "y", "$$y^3$$"], variabilization: {}}, {id: "factor1a-h7", type: "hint", dependencies: ["factor1a-h6"], title: "Finding the GCF", text: "The greatest common factor of the expression is the product of the GCF of its coefficients and variables.", variabilization: {}}, ]; export {hints};