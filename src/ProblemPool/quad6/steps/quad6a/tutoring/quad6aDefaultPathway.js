var hints = [{id: "quad6a-h1", type: "hint", dependencies: [], title: "Discriminant", text: "To find the discriminant, of a quadratic equation, we calculate $$b^2-4ac$$. If that value is greater than 0 it has 2 real solutions, if it is smaller than 0 it has no real solutions, and if it is equal to 0 it has 1 real solution."}, {id: "quad6a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["17"], dependencies: ["quad6a-h1"], title: "Discriminant", text: "In this case, what is our discriminant?"}, {id: "quad6a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(-1+sqrt(17))/2, (-1-sqrt(17))/2"], dependencies: ["quad6a-h2"], title: "Discriminant", text: "Since this value is greater than 0, this equation has 2 solutions. Using the rest of the formula (-b+sqrt(discriminant)/2a and -b-sqrt(discriminant)/2a) what are our two solutions?"}, ]; export {hints};