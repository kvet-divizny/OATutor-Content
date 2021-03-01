var hints = [{id: "domain29a-h1", type: "hint", dependencies: [], title: "Define the Domain", text: "A rational function is undefined when the denominator is equal to zero. So, let's start by setting the denominator equal to zero. In addition, this function also contains a square root in the numerator which is undefined when the expression under the square root is negative, so we can set the numerator greater than or equal to zero."}, {id: "domain29a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["domain29a-h1"], title: "Solving For the Denominator", text: "What is x for $$x-\\left(4\\right)=0$$?", subHints: [{id: "domain29a-h2-s1", type: "hint", dependencies: [], title: "Solving For the Denominator", text: "For $$x-\\left(4\\right)=0$$, add 4 to both sides, and $$x=4$$."}]}, {id: "domain29a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x \\geq -\\left(4\\right)$$"], dependencies: ["domain29a-h1"], title: "Solving For the Numerator", text: "What is x for $$\\sqrt{x+\\left(4\\right)} \\geq 0$$?", choices: ["$$x \\geq -\\left(4\\right)$$", "$$x \\leq -\\left(4\\right)$$", "$$x \\geq 4$$", "$$x \\leq 4$$"], subHints: [{id: "domain29a-h3-s1", type: "hint", dependencies: [], title: "Solving For the Numerator", text: "Set the expression under the numerator greater than or equal to 0, and subtract 4 to both sides. $$x \\geq -\\left(4\\right)$$."}]}, {id: "domain29a-h4", type: "hint", dependencies: ["domain29a-h2", "domain29a-h3"], title: "Answer", text: "So, the function is defined for every value greater than or equal to -4 other than 4.The domain of the function is $$[-4,4) \\cup (4,\\infty),$$ with the circle brackets denoting the fact that 4 is not a valid solution, and the U showing that values within the intervals are solutions."}, ]; export {hints};