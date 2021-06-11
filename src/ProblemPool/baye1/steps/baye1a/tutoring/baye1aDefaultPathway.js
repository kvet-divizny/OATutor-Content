var hints = [{id: "baye1a-h1", type: "hint", dependencies: [], title: "Bayes' Theorem", text: "The probability of event A given event B may be computed by means of the following formula: P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)", variabilization: {}}, {id: "baye1a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.01"], dependencies: ["baye1a-h1"], title: "P(Fire)", text: "What is the probability that a dangerous fire will occur on any given day? Round your answer to two decimal places", subHints: [{id: "baye1a-h2-s1", type: "hint", dependencies: [], title: "P(Fire)", text: "Dangerous fires occur 1% of the time, Thus the probability of a dangerous fire occuring is 0.01", variabilization: {}}], variabilization: {}}, {id: "baye1a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.90"], dependencies: ["baye1a-h2"], title: "P(Smoke$$\mid$$Fire)", text: "What is the probability that there is smoke, given that there is a dangerous fire? Round your answer to two decimal places", subHints: [{id: "baye1a-h3-s1", type: "hint", dependencies: [], title: "P(Smoke$$\mid$$Fire)", text: "90% of dangerous fires cause smoke. Thus the probability of smoke, given that there is a dangerous fire, is 0.90", variabilization: {}}], variabilization: {}}, {id: "baye1a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.10"], dependencies: ["baye1a-h3"], title: "P(Smoke)", text: "What is the probability that there will be smoke in the air on any given day? Round your answer to two decimal places", subHints: [{id: "baye1a-h4-s1", type: "hint", dependencies: [], title: "P(Smoke)", text: "Smoke occurs 10% of the time on any given day. Thus the probability of there being smoke is 0.10", variabilization: {}}], variabilization: {}}, {id: "baye1a-h5", type: "hint", dependencies: ["baye1a-h4"], title: "P(Fire$$\mid$$Smoke)", text: "Using Bayes' Theorem, calculate P(Fire$$\mid$$Smoke) using P(Fire), P(Smoke$$\mid$$Fire), and P(Smoke)", variabilization: {}}, {id: "baye1a-h6", type: "hint", dependencies: ["baye1a-h5"], title: "P(Fire$$\mid$$Smoke)", text: "P(Fire$$\mid$$Smoke)=P(Fire)P(Smoke$$\mid$$Fire)/P(Smoke)=0.01*0.9/0.1=0.09, so the probability that there is a dangerous fire, given that there is smoke, is 0.09", variabilization: {}}, ]; export {hints};