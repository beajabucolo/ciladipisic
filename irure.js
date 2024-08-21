class Observer {
    constructor() {
        this.patches = [];
    }

    // Method to record a patch/change
    recordPatch(patch) {
        this.patches.push(patch);
    }

    // Method to clear patches
    clearPatches() {
        this.patches = [];
    }
}

// Usage
const observer = new Observer();

// Record some changes
observer.recordPatch({ type: 'update', key: 'name', value: 'Alice' });
observer.recordPatch({ type: 'delete', key: 'age' });

// Clear all patches
observer.patches = [];  // This is equivalent to observer.clearPatches();

console.log(observer.patches);  // Output: []
