var hints = [{id: "measure18a-h1", type: "hint", dependencies: [], title: "Multiply by 1", text: "The first step is to multiply the measurement to be converted by 1; write 1 as a fraction relating the units given and the units needed.", variabilization: {}}, {id: "measure18a-h2", type: "hint", dependencies: ["measure18a-h1"], title: "Relating Hours to Seconds", text: "The conversion from hours to seconds is 1 $$hour=3600$$ seconds.", variabilization: {}}, {id: "measure18a-h3", type: "hint", dependencies: ["measure18a-h2"], title: "Writing 1 as a Fraction", text: "Using the relation between hours and seconds, we can rewrite the 1 we multiply in the first step as (3600 seconds)/(1 hour), so we get the expression (1.5 hours)*(3600 seconds)/(1 hour).", variabilization: {}}, {id: "measure18a-h4", type: "hint", dependencies: ["measure18a-h3"], title: "Simplifying", text: "Hour divides out, so we get the expression (1.5)*(3600 seconds)/1.", variabilization: {}}, {id: "measure18a-h5", type: "hint", dependencies: ["measure18a-h4"], title: "Multiplying", text: "Multiply the expression, we get the final answer 5400 seconds.", variabilization: {}}, ]; export {hints};