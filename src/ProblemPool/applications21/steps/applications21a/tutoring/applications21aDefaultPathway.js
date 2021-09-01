var hints = [{id: "applications21a-h1", type: "hint", dependencies: [], title: "Create Variables", text: "Let s represent the senior employee's earnings and n represent the new employee's earning.", variabilization: {}}, {id: "applications21a-h2", type: "hint", dependencies: ["applications21a-h1"], title: "Translate Into System", text: "Together they earn $43 per hour, translating into $$s+n=43$$. The senior employee earns $5 less than twice the new employee per hour translating into $$s=\\left(2\\right) n-\\left(5\\right)$$.", variabilization: {}}, {id: "applications21a-h3", type: "hint", dependencies: ["applications21a-h2"], title: "Solve the System", text: "Using substitution we can substitute $$s=\\left(2\\right) n-\\left(5\\right)$$ into $$s+n=43$$ to solve for n, the new employee's earnings. \\n $$s+n=43$$ \\n $$\\left(2\\right) n-\\left(5\\right)+n=43$$ \\n $$\\left(3\\right) n-\\left(5\\right)=43$$ \\n $$\\left(3\\right) n=48$$", variabilization: {}}, {id: "applications21a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["applications21a-h3"], title: "Finding the New Employee's Earnings", text: "How does the new employee earn per hour?", variabilization: {}}, {id: "applications21a-h5", type: "hint", dependencies: ["applications21a-h4"], title: "Finding the Senior Employee's Earnings", text: "Given $$n=16$$, plug in the known value to solve for s. \\n $$s=\\left(2\\right) n-\\left(5\\right)$$ \\n $$s=\\left(2\\right) \\left(16\\right)-\\left(5\\right)$$", variabilization: {}}, {id: "applications21a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["27"], dependencies: ["applications21a-h5"], title: "Finding the Senior Employee's Earnings", text: "How does the senior employee earn per hour?", variabilization: {}}, ]; export {hints};