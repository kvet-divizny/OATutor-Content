var hints = [{id: "linear6a-h1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3"], dependencies: [], title: "Slope", text: "What is the slope of the function?", variabilization: {}}, {id: "linear6a-s1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["linear6a-h1"], title: "Sign", text: "Is this slope positive?", choices: ["Yes", "No"], variabilization: {}}, {id: "linear6a-s2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["linear6a-s1"], title: "Meaning", text: "Does this mean it is increasing?", choices: ["Yes", "No"], variabilization: {}}, ]; export {hints};