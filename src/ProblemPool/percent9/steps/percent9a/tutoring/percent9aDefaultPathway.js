var hints = [{id: "percent9a-h1", type: "hint", dependencies: [], title: "Find the Difference", text: "Find the difference between the two numbers.", variabilization: {}}, {id: "percent9a-h2", type: "hint", dependencies: ["percent9a-h1"], title: "The Difference", text: "The difference is $36-$26, or $10.", variabilization: {}}, {id: "percent9a-h3", type: "hint", dependencies: ["percent9a-h2"], title: "Find the Percent", text: "Divide the difference by the original value.", variabilization: {}}, {id: "percent9a-h4", type: "hint", dependencies: ["percent9a-h3"], title: "The Percentage", text: "10 divided by 26 is 0.384. Change this to percent form.", variabilization: {}}, {id: "percent9a-h5", type: "hint", dependencies: ["percent9a-h4"], title: "The Answer", text: "Multiply by 100 to change to percentage. The percentage is 38.4%.", variabilization: {}}, ]; export {hints};