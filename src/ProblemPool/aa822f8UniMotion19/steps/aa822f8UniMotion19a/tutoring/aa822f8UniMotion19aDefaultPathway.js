var hints = [{id: "aa822f8UniMotion19a-h1", type: "hint", dependencies: [], title: "Setting up the equation", text: "Set up the equation first by setting r as the speed of Tony's driving on country roads", variabilization: {}}, {id: "aa822f8UniMotion19a-h2", type: "hint", dependencies: ["aa822f8UniMotion19a-h1"], title: "Setting up the equation", text: "Next, understand how the two speeds relate to each other.", variabilization: {}}, {id: "aa822f8UniMotion19a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{208}{r+15}+\\frac{40}{r}=4$$"], dependencies: ["aa822f8UniMotion19a-h2"], title: "Setting up the equation", text: "What is the relationship between the two speeds?", variabilization: {}}, {id: "aa822f8UniMotion19a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["50"], dependencies: ["aa822f8UniMotion19a-h3"], title: "Solving the equation", text: "Solve for r.", variabilization: {}}, {id: "aa822f8UniMotion19a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["65"], dependencies: ["aa822f8UniMotion19a-h4"], title: "Solving for the undefined speed", text: "If Tony's drive on the country roads is 50mph, then what is his speed on the interstate, looking at the context of the qeustion?", variabilization: {}}, {id: "aa822f8UniMotion19a-h6", type: "hint", dependencies: ["aa822f8UniMotion19a-h5"], title: "Double-Checking", text: "Double check that the answer makes sense in terms of the context of the question.", variabilization: {}}, ]; export {hints};