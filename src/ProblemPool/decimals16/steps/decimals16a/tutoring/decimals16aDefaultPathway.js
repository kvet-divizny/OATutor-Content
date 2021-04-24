var hints = [{id: "decimals16a-h1", type: "hint", dependencies: [], title: "Match Up", text: "Match up the decimal points, adding zeroes as placeholders. In this case, we write the expression as 5.123+18.470.", variabilization: {}}, {id: "decimals16a-h2", type: "hint", dependencies: ["decimals16a-h1"], title: "Add", text: "Add the numbers as if they were whole numbers.", variabilization: {}}, {id: "decimals16a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["23593"], dependencies: ["decimals16a-h2"], title: "Add", text: "What is $$\\left(5123\\right)+\\left(18470\\right)$$? Remember to carry when needed.", variabilization: {}}, {id: "decimals16a-h4", type: "hint", dependencies: ["decimals16a-h3"], title: "Putting Decimal Point", text: "Place the decimal point in the sum at the same place as where it is in the given numbers, which gives us 23.593.", variabilization: {}}, ]; export {hints};