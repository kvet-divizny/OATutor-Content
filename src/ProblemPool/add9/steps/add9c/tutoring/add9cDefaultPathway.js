var hints = [{id: "add9c-h1", type: "hint", dependencies: [], title: "Finding the Value of $$|n|$$", text: "The first step is to find the value of $$|n|$$.", variabilization: {}}, {id: "add9c-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["37"], dependencies: ["add9c-h1"], title: "Calculating $$|n|$$", text: "$$n=37$$. What is $$|37|$$?", subHints: [{id: "add9c-h2-s1", type: "hint", dependencies: [], title: "Absolute Value of a Positive Number", text: "The absolute value of a positive number is just that positive number. For example, $$|24|=24$$.", variabilization: {}}], variabilization: {}}, {id: "add9c-h3", type: "hint", dependencies: ["add9c-h2"], title: "Finding the Value of $$-|n|$$", text: "Multiply $$|n|$$ by -1 to find $$-|n|$$.", variabilization: {}}, {id: "add9c-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-37"], dependencies: ["add9c-h3"], title: "Calculating $$-|n|$$ with the Substituted Value of n", text: "What is $$-\\left(1\\right) \\left(37\\right)$$?", variabilization: {}}, ]; export {hints};