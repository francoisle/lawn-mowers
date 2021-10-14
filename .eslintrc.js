module.exports = {
    "env": {
        "browser": false,
        "node": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": [2, "double", {"avoidEscape": true}],
        "prefer-const": "error"
    }
};
