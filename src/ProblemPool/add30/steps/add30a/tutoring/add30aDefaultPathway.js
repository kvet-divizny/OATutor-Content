var hints = [{id: "add30a-h1", type: "hint", dependencies: [], title: "Simplify Both Sides", text: "We want to start by simplifying both sides and comparing the simplified value. Since the left hand side is already simplified, all we need to do is to evaluate the right hand side.", variabilization: {}}, {id: "add30a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-7"], dependencies: ["add30a-h1"], title: "Right Hand Side", text: "What does $$-|\\left(-7\\right)|$$ evaluate to?", subHints: [{id: "add30a-h2-s1", type: "hint", dependencies: [], title: "Right Hand Side", text: "We know that $$|\\left(-7\\right)|=distance$$ from -7 to $$0=7$$, so the opposite of $$|\\left(-7\\right)|$$ is -7.", variabilization: {}}], variabilization: {}}, {id: "add30a-h3", type: "hint", dependencies: ["add30a-h2"], title: "Comparing Numbers", text: "Now we are left to compare 7 and -7. Since 7 is to the right of -7 on the number line, we say $$7>-\\left(7\\right)$$. Therefore, $$7>-|\\left(-7\\right)|$$.", variabilization: {}}, ]; export {hints};