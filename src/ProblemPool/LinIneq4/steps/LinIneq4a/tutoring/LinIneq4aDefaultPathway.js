var hints = [{id: "LinIneq4a-h1", type: "hint", dependencies: [], title: "Multiplication Property", text: "The multiplication property of inequality: If $$a<b$$ and $$c>0$$, then $$ac<bc$$ if $$a<b$$ and $$c<0$$, then $$ac>bc$$", variabilization: {}}, {id: "LinIneq4a-h2", type: "hint", dependencies: ["LinIneq4a-h1"], title: "Applying the Multiplication Property", text: "Our goal is to isolate x (have x on one side and numbers on the other side)", variabilization: {}}, {id: "LinIneq4a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/3"], dependencies: ["LinIneq4a-h2"], title: "Applying the Multiplication Property", text: "What number should we multiply to both sides of the inequality to isolate x?", variabilization: {}}, {id: "LinIneq4a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x"], dependencies: ["LinIneq4a-h3"], title: "Left Side", text: "What is the left side after multiplying $$\\frac{1}{3}$$?", variabilization: {}}, {id: "LinIneq4a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["LinIneq4a-h4"], title: "Right Side", text: "What is the right side after multiplying by $$\\frac{1}{3}$$?", variabilization: {}}, ]; export {hints};