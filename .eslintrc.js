module.exports = {
  extends: 'wesbos',
  rules: {
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'no-nested-ternary': 0,
    'no-unused-expressions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-unused-vars': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
  },
};
