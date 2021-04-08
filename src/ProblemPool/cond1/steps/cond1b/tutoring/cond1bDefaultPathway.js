var hints = [{id: "cond1b-h1", type: "hint", dependencies: [], title: "Conditional Probability Formula", text: "The conditional probability of A given B may be computed by means of the following formula: P(A$$\mid$$B)=P(A$$\cap$$B)/P(B)"}, {id: "cond1b-h2", type: "hint", dependencies: ["cond1b-h1"], title: "Sample Spaces", text: "The sample space for this experiment is the set $$S=1 2 3 4 5 6$$, consisting of six equally likely outcomes. Let F denote the event “a five is rolled” and let O denote the event “an odd number is rolled,” so that $$F=5$$ and $$O=1 3 5$$,"}, {id: "cond1b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/6"], dependencies: ["cond1b-h2"], title: "P(F$$\cap$$O)", text: "What is the probability of rolling a number in both set F AND set O?", subHints: [{id: "cond1b-h3-s1", type: "hint", dependencies: [], title: "P(F$$\cap$$O)", text: "5 is the only number in both F AND O. Rolling a 5 is only 1 possible outcome out of 6. Therefore, probability of rolling a 5 is $$\\frac{1}{6}$$"}]}, {id: "cond1b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/6"], dependencies: ["cond1b-h2"], title: "P(F)", text: "What is the probability of rolling a number in set F?", subHints: [{id: "cond1b-h4-s1", type: "hint", dependencies: [], title: "P(F)", text: "Rolling a 5 is only 1 possible outcome out of 6. Therefore, probability of rolling a number in set F is $$\\frac{1}{6}$$"}]}, {id: "cond1b-h5", type: "hint", dependencies: ["cond1b-h3", "cond1b-h4"], title: "P(O$$\mid$$F)", text: "Using the conditional probability formula, calculate P(O$$\mid$$F) using P(F$$\cap$$O) and P(F)"}, {id: "cond1b-h6", type: "hint", dependencies: ["cond1b-h5"], title: "P(O$$\mid$$F)", text: "P(O$$\mid$$F)=P(F$$\cap$$O)/P(F)=(1/6)/(1/6)=1"}, ]; export {hints};