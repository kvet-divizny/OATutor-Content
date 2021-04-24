var hints = [{id: "MoApp9a-h1", type: "hint", dependencies: [], title: "Identify known quantities", text: "There are two known quantities, 54 ft and 3 ft.", variabilization: {}}, {id: "MoApp9a-h2", type: "hint", dependencies: ["MoApp9a-h1"], title: "Determine unknown quantities", text: "There are two unknown quantities, the length L and width W of the patio.", variabilization: {}}, {id: "MoApp9a-h3", type: "hint", dependencies: ["MoApp9a-h2"], title: "Assign a variable", text: "In this question, there are more than one unknown quantities, we need to choose one, for example, the width of the patio equal to x.", variabilization: {}}, {id: "MoApp9a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x+3"], dependencies: ["MoApp9a-h3"], title: "Express other quantities", text: "What the length of the patio in terms of x?", variabilization: {}}, {id: "MoApp9a-h5", type: "hint", dependencies: ["MoApp9a-h4"], title: "Using a formula", text: "The formula we can use in this problem is the perimeter formula $$P=\\left(2\\right) L+\\left(2\\right) W$$.", variabilization: {}}, {id: "MoApp9a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2x+2(x+3)=54"], dependencies: ["MoApp9a-h5"], title: "Translation to Math Operations", text: "What is the mathematical form of \"the perimeter of a rectangular outdoor patio is 54 ft\"?", variabilization: {}}, {id: "MoApp9a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12"], dependencies: ["MoApp9a-h6"], title: "Simplify and Solve", text: "Solve the equation we write. What is x?", variabilization: {}}, {id: "MoApp9a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["15"], dependencies: ["MoApp9a-h7"], title: "Calculate the other quantity", text: "What is $$x+\\left(3\\right)$$?", variabilization: {}}, {id: "MoApp9a-h9", type: "hint", dependencies: ["MoApp9a-h8"], title: "Explain the solution", text: "The dimensions are $$L=15$$ ft and $$W=12$$ ft.", variabilization: {}}, ]; export {hints};