var hints = [{id: "factor11b-h1", type: "hint", dependencies: [], title: "Cube Root", text: "What is the cube root of $${\\left(1000\\right)}^3$$?", variabilization: {}}, {id: "factor11b-h2", type: "hint", dependencies: ["factor11b-h1"], title: "Cube Root", text: "What is the cube root of 1?", variabilization: {}}, {id: "factor11b-h3", type: "hint", dependencies: ["factor11b-h2"], title: "Difference of Cubes Formula", text: "$$\\left(a-b\\right) \\left(a^2+ab+b^2\\right)$$.", variabilization: {}}, {id: "factor11b-h4", type: "hint", dependencies: ["factor11b-h3"], title: "variable values", text: "The value of a is 10x and the value of b is 1", variabilization: {}}, ]; export {hints};