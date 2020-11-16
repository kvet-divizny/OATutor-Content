var hints = [{id: "block1a-h1", type: "hint", dependencies: [], title: "Properties of the System", text: "The chances of a modestly armed attacker getting “lucky” and successfully double spending without having 51% of the network falls along a Poisson distribution."}, {id: "block1a-h2", type: "hint", dependencies: [], title: "Definition of Terms", text: "Assume $$q=probability$$ the attacker finds the next block. What’s the probability p of an honest node finding the next block?"}, {id: "block1a-h3", type: "hint", dependencies: [], title: "Probability", text: "What’s the probability q_z that the attacker will catch up from z blocks behind?"}, {id: "block1a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["block1a-h3"], title: "Probability 1.1", text: "What’s the probability q_z if $$p\\leqq$$?"}, {id: "block1a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(q/p)^z "], dependencies: ["block1a-h4"], title: "Probability 1.2", text: "What’s the probability q_z if $$p>q$$?"}, {id: "block1a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["q/p"], dependencies: ["block1a-h4", "block1a-h5"], title: "Probability 1.2.a", text: "What’s the probability of the attacker achieving a block?"}, {id: "block1a-h7", type: "hint", dependencies: ["block1a-h4", "block1a-h5"], title: "Probability 1.2.a.2", text: "Recall that the probability of independent events should be multiplied."}, {id: "block1a-h8", type: "hint", dependencies: ["block1a-h3"], title: "Equations", text: "The attacker’s potential progress will be a Poisson distribution with expected value lambda=z $$\\frac{q}{p}$$. To get the probability the attacker could catch up, we’ll multiply the Poisson density for the progress $$made the$$ probability of making that progress:\n##figure1.gif##"}, {id: "block1a-h9", type: "hint", dependencies: ["block1a-h3"], title: "Provided Values", text: "Solving for $$P<0.001$$ (0.1%): $$q=0.1$$ $$z=5$$ $$q=0.15$$ $$z=8$$ $$q=0.2$$ $$z=11$$ $$q=0.25$$ $$z=15$$ $$q=0.3$$ $$z=24$$ $$q=0.35$$ $$z=41$$ $$q=0.4$$ $$z=89$$ $$q=0.45$$ $$z=340$$ $$q=0.3$$ $$z=0$$ $$P=1$$ $$z=5$$ $$P=0.1773523$$ $$z=10$$ $$P=0.0416605$$ $$z=15$$ $$P=0.0101008$$ $$z=20$$ $$P=0.0024804$$ $$z=25$$ $$P=0.0006132$$ $$z=30$$ $$P=0.0001522$$ $$z=35$$ $$P=3.79e-05$$ $$z=40$$ $$P=9.5e-06$$ $$z=45$$ $$P=2.4e-06$$ $$z=50$$ $$P=6e-07$$"}, {id: "block1a-h10", type: "hint", dependencies: ["block1a-h3", "block1a-h9"], title: "Assumption", text: "The question gave us that we could assume conservatively that Perxon X controls 30% of the network. Therefore, the probability the attacker finds the next block $$q=0.3$$."}, {id: "block1a-h11", type: "hint", dependencies: ["block1a-h3", "block1a-h10"], title: "Answer", text: "Answer is 24 blocks. We better settle in, or find another buyer! Note that if we had assumed Person X controlled ^10% of the network, the probability of a double spend attack<0.1% can be achieved in 5 blocks."}, ]; export {hints};