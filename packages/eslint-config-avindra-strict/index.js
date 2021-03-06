'use strict';

module.exports = {
  extends : '@avindra/eslint-config-avindra',
  rules : {
    "array-bracket-spacing": 0,
    "comma-dangle": [2, 'never'],
    "computed-property-spacing": [ 2, 'never' ],
    "curly": 2,
    "eqeqeq": [1, 'smart'],
    "indent": [ 2, 2, { SwitchCase: 1 } ],
    "keyword-spacing": 2,
    "max-len": [ 1, 150 ],
    "new-cap": [ 2, { capIsNew: false } ],
    "no-eq-null": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [ 2, { max: 2 } ],
    "no-trailing-spaces": 2,
    "no-use-before-define": [ 2, 'nofunc' ],
    "no-warning-comments": [1, { terms: [ 'todo', 'fixme' ], location: 'anywhere' }],
    "object-curly-spacing": [ 1, 'always' ],
    "radix": 2,
    "semi": [ 2, 'always' ],
    "space-before-blocks": [ 2, 'always' ],

    // React stuff.
    "react/display-name": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 2,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/jsx-wrap-multilines": 2,
    "react/jsx-key": 2,
    "react/prefer-es6-class": [2, 'always'],
  }
};