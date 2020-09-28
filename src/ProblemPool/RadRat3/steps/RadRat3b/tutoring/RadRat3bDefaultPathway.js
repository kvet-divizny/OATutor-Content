var hints = [{id: "RadRat3b-h1", type: "hint", dependencies: [], title: "Perfect Square", text: "Factor a perfect square from the radicand to simplify the expression:sqrt(162(a**5)(b**4))=sqrt(81(a**4)(b**4)*2a)"}, {id: "RadRat3b-h2", type: "hint", dependencies: ["RadRat3b-h1"], title: "The Product Rule for Simplifying Square Roots", text: "If a and b are nonnegative, the square root of the product ab is equal to the product of the square roots of a and b:sqrt(ab)=sqrt(a)*sqrt(b)"}, {id: "RadRat3b-h3", type: "hint", dependencies: ["RadRat3b-h2"], title: "The Product Rule for Simplifying Square Roots", text: "Use the product rule to simplify the expression:sqrt(81(a**4)(b**4)*2a)=sqrt(81(a**4)*(b**4))*sqrt(2a)"}, {id: "RadRat3b-h4", type: "hint", dependencies: ["RadRat3b-h3"], title: "Principal Square Root", text: "Simplify the expression:sqrt(81a**4*b**4)*sqrt(2a)=9a**2*b**2*sqrt(2a)"}, ]; export {hints};