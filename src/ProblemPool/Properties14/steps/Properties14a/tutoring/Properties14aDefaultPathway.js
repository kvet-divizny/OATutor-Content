var hints = [{id: "Properties14a-h1", type: "hint", dependencies: [], title: "Distributive Property", text: "Observing this question, we find that we will need to apply the distributive property twice, once for each of the parentheses."}, {id: "Properties14a-h2", type: "hint", dependencies: ["Properties14a-h1"], title: "Distributive Property", text: "The distributive property states that if a, b, c are real numbers, then $$a \\left(b+c\\right)=ab+ac$$, and $$a \\left(b-c\\right)=ab-ac$$."}, {id: "Properties14a-h3", type: "hint", dependencies: ["Properties14a-h2"], title: "Applying the Distributive Property", text: "Applying the distributive property to $$\\left(5\\right) \\left(\\left(2\\right) n+\\left(9\\right)\\right)$$, we get the expression $$\\left(5\\right) \\left(2\\right) n+\\left(5\\right) \\left(9\\right)$$."}, {id: "Properties14a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10n"], dependencies: ["Properties14a-h3"], title: "Multiplying", text: "What is $$\\left(5\\right) \\left(2\\right) n$$?"}, {id: "Properties14a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["45"], dependencies: ["Properties14a-h3"], title: "Multiplying", text: "What is $$\\left(5\\right) \\left(9\\right)$$?"}, {id: "Properties14a-h6", type: "hint", dependencies: ["Properties14a-h4", "Properties14a-h5"], title: "First Expression", text: "Putting together the previous two parts, we get $$\\left(5\\right) \\left(\\left(2\\right) n+\\left(9\\right)\\right)=\\left(10\\right) n+\\left(45\\right)$$."}, {id: "Properties14a-h7", type: "hint", dependencies: ["Properties14a-h2"], title: "Applying the Distributive Property", text: "Applying the distributive property to $$\\left(12\\right) \\left(n-\\left(3\\right)\\right)$$, we get the expression $$\\left(12\\right) n-\\left(12\\right) \\left(3\\right)$$."}, {id: "Properties14a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["36"], dependencies: ["Properties14a-h7"], title: "Multiplying", text: "What is $$\\left(12\\right) \\left(3\\right)$$?"}, {id: "Properties14a-h9", type: "hint", dependencies: ["Properties14a-h8"], title: "Second Expression", text: "Putting together the previous parts, we get $$\\left(12\\right) \\left(n-\\left(3\\right)\\right)=12n-36$$."}, {id: "Properties14a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["22n+9"], dependencies: ["Properties14a-h6", "Properties14a-h9"], title: "Combine Like Terms", text: "After applying the distributive property, the expression becomes $$\\left(10\\right) n+\\left(45\\right)+\\left(12\\right) n-\\left(36\\right)$$. Combine like terms, what do you get?"}, ]; export {hints};