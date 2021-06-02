var hints = [{id: "Multiply24a-h1", type: "hint", dependencies: [], title: "Substitute", text: "We first need to substitute -3 for x and 14 for y.", variabilization: {}}, {id: "Multiply24a-h2", type: "hint", dependencies: ["Multiply24a-h1"], title: "Add", text: "We then need to add inside parentheses.", variabilization: {}}, {id: "Multiply24a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["11"], dependencies: ["Multiply24a-h2"], title: "Add", text: "What do we get for $$-\\left(3\\right)+\\left(14\\right)$$?", variabilization: {}}, {id: "Multiply24a-h4", type: "hint", dependencies: ["Multiply24a-h3"], title: "Exponents", text: "We then need to evaluate the exponentiation term.", variabilization: {}}, {id: "Multiply24a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["121"], dependencies: ["Multiply24a-h4"], title: "Exponents", text: "What do we get for $${\\left(11\\right)}^2$$?", variabilization: {}}, ]; export {hints};