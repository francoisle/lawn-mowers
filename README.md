# Lawn Mower - (not framework - pure Javascript)

This is a solution to the lawn-mower problem where given a lawn and some lawn-mowers and their moves, we need to compute
the final position of lawn mowers.

This solution has been written in pure Javascript and is meant to run on node.js (depends on fs to read files on the
disk).

## Warning:

This solution has been developed and tested against node.js v14.15.4 (https://nodejs.org/download/release/v14.15.4/). It
should work with any recent version of node.js but in case of any issue try with this node version.

## Running the program:

To start, first run npm install in the root folder of the project. This will install two dev-dependencies: eslint and
jest.

To run the program, you will need an input-file that represents the data (or the scenario to run). For convenience, one
scenario is provided in the `input-file` folder.

To run the program, you need to run:

`npm run start file=[filename]`
where filename is the name of the file to use and its name must end with `.txt`

For example, you can run:
`npm run start file=input-files/input-file.txt`

## Unit test

### Note:

We only test the functions that are exported and available for direct uses. Other non exported functions are tested via
the tests of the exported function that uses them.

### Executing the tests:

To run the test, just run:
`npm run test`

This will start jest with the coverage enabled.

Most of the tests can be seen as unit tests but for more looking integration tests, take a look at the file
lawnMower/Engine.test.js as it is basically used to test whole scenarios.

## Example:

If you run:
`npm run start file=input-files/input-file.txt`

You should see the following output in the console:

```
Input file:
5 5
1 2 N
LFLFLFLFF
3 3 E
FFRFFRFRRF

Output: (final position of mowers:
1 3 N
5 1 E
```

## Github
You can find a version of this project on github

https://github.com/francoisle/lawn-mowers
