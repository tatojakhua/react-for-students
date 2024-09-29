# Naming conversions

.spec.js .spec.jsx .spec.ts .spec.tsx
.test.js .test.jsx .test.ts .test.tsx

or folder **tests**

# Describe block

describe block is to group related test into 1 headline

for example:

descripe('App component test",()=>{
test("renders headline component",()=>{

})
})

# it method

it method is an alias of test.

# Code coverage

A metric that can help you understand how much of your software code is tested.

- Statement coverage: how many of the statements in the software code have been executed.
- Branches coverage: how many of the branches of the controls structures (if statements for instance) have been executed.
- Function coverage: how many of the functions defined have been called
- Line coverage: how many of lines of source code have been tested.

## Code coverage script

"coverage": "yarn test --coverage --collectCoverageFrom='src/components/\*_/_.{js,jsx,ts,tsx}'"

### to ignore files add --collectCoverageFrom='!src/components/{REGEX}'

## Code coverage Threshold

"jest": {
"coverageThreshold": {
"global": {
"branches": 80,
"functions": 80,
"lines": 80,
"statements": -10
}
}
}

## RTL Queries

- getByRole()

HTML tag roles
https://www.w3.org/TR/html-aria/#docconformance

- getByText (you can use string or regex)
- getByLabelText
- getByPlaceholderText
- getByTestId

## Query Multiple Elements

- getAllByRole

## queryBy

- queryByRole

## findBy

- findByRole (appearance/disappearance)
