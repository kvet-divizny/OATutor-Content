var hints = [{id: "systems24a-h1", type: "hint", dependencies: [], title: "Subtract", text: "First, subtract the two equations to eliminate x.", variabilization: {}}, {id: "systems24a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x^2+y^2-y=6+x^2,y^2-y=6"], dependencies: ["systems24a-h1"], title: "Subtract", text: "After subtracting, what equation are you left with?", variabilization: {}}, {id: "systems24a-h3", type: "hint", dependencies: ["systems24a-h2"], title: "Simplify", text: "Now, simplfiy the equation to eliminate $$x^2$$ by subtracting it from each side.", variabilization: {}}, {id: "systems24a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$y^2-y=6$$"], dependencies: ["systems24a-h3"], title: "Simplify", text: "What are you left with after subtracting $$x^2$$ from both sides?", choices: ["$$y^2-y=6$$", "$$x^2-x=6$$", "$$y^2-x=6$$", "$$x^2-y=6$$"], variabilization: {}}, {id: "systems24a-h5", type: "hint", dependencies: ["systems24a-h4"], title: "Simplfiy", text: "Subtract 6 from both sides to get $$y^2-y-\\left(6\\right)$$.", variabilization: {}}, {id: "systems24a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(y-\\left(3\\right)\\right) \\left(y+\\left(2\\right)\\right)$$"], dependencies: ["systems24a-h5"], title: "Factor", text: "Now, factor the equation. Your answer should be in the form $$\\left(ay+b\\right) \\left(cy+d\\right)$$", choices: ["$$\\left(y-\\left(3\\right)\\right) \\left(y+\\left(2\\right)\\right)$$", "$$\\left(y+\\left(3\\right)\\right) \\left(y-\\left(2\\right)\\right)$$", "$$\\left(x+\\left(3\\right)\\right) \\left(x-\\left(2\\right)\\right)$$", "$$\\left(x-\\left(3\\right)\\right) \\left(x+\\left(2\\right)\\right)$$"], variabilization: {}}, {id: "systems24a-h7", type: "hint", dependencies: ["systems24a-h6"], title: "Find solutions", text: "This means $$y=3$$ and $$y=-2$$. Plug both of these values into either of the original equations and solve for x.", variabilization: {}}, {id: "systems24a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["systems24a-h7"], title: "Substitute and Solve", text: "Plug $$y=3$$ into either of the original equations. What does x equal?", subHints: [{id: "systems24a-h8-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is 0.", variabilization: {}}], variabilization: {}}, {id: "systems24a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["sqrt(5)"], dependencies: ["systems24a-h8"], title: "Substitute and Solve", text: "Plug $$y=-2$$ into either of the original equations. What does x equal?", subHints: [{id: "systems24a-h9-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$\\sqrt{5}$$.", variabilization: {}}], variabilization: {}}, {id: "systems24a-h10", type: "hint", dependencies: ["systems24a-h9"], title: "Answer", text: "Therefore, the final answers are three coordinate points: $$(0,3)(sqrt(5),-2)(-sqrt(5),-2).$$", variabilization: {}}, ]; export {hints};