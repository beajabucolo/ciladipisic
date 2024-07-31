// Assuming dist is some kind of distribution manager or factory
const dist = {
    distributions: function(dists) {
        // Configure distributions
        this.dists = dists;
        return this; // Return this for chaining
    },
    weights: function(weights) {
        // Assign weights to these distributions
        this.weights = weights;
        return this; // Return this for chaining
    }
};

// Example usage
const dists = ['normal', 'uniform'];
const weights = [0.5, 0.5];

const configuredDist = dist.distributions(dists).weights(weights);

console.log(configuredDist);
// Output could be something like:
// { dists: ['normal', 'uniform'], weights: [0.5, 0.5] }
