# 🦸‍⚡ Flash

Manage your vehicle fleet, see aggregate and individual commercial vehicle insurance policy information.

## Installation / Use

1. `git clone git@github.com:StephenKoller/flash.git`
2. `npm i --only=prod && npm run start`
3. [http://localhost:3000/](http://localhost:3000/)

## Code Test Instructions

Provide the following:

1. data structure for a single car:

- id
- year
- make
- model
- purchase value
- VIN
- license plate state
- license plate number

2. data structure for aggregate metrics:

- total count
- count by year
- total purchase price

3. method to take in list of cars, return aggregate data
4. design data structure or method to provide quick lookups by VIN
5. design simple UI to display the results of numbers three and four
6. provide response to another design question. \*see section below

### Note on #4

> Design a data structure/method to provide quick lookups for automobiles by VIN.

My first thought was to implement a hash table for lightning-fast lookups by a unique id,
until I realized that "In JavaScript (see also JSON), all objects behave as associative arrays with string-valued keys..." [source: Wikipedia](https://en.wikipedia.org/wiki/Associative_array#Language_support).

Therefore, my solution was to structure the vehicles data as a large JSON object, using the VIN as the key.

Additionally, by maintaining a consistent data shape to the vehicle objects, we can rely upon V8's
performance optimizations using Shapes and Inline Caches under the hood. https://mathiasbynens.be/notes/shapes-ics

My very un-scientific results show a roughly O(n) lookup time:

| Vehicle Count | Time to GET vehicle by VIN (ms) |
| ------------- | ------------------------------- |
| 100           | 5                               |
| 1,000         | 31                              |
| 10,000        | 315                             |
| 100,000       | 3102                            |

### Answer to #6

> How would you design a data structure/method to provide sorted lists of car data
> structures by property field?

## Personal Goals

### keep it `m i n i m a l`

Avoid:

- too many external packages / setup
- transpilation (React, TypeScript)
- bundlers (Webpack & friends)
- client-side rendering / SPA frameworks

Topics not touched on:

- security (XSS, CORS, input sanitization, `helmet`)
- containerization
- databases
- extensive testing (e2e, integration)
- UX and visual design

## Tools used

| Package                | Reason                                                |
| ---------------------- | ----------------------------------------------------- |
| node                   | JavaScript on the server                              |
| express                | API & routing                                         |
| path                   | relative file path munging                            |
| pug                    | JS templating                                         |
| fs                     | file I/O                                              |
| body-parser            | parsing form data                                     |
| jest                   | unit testing                                          |
| json-schema            | schema validation for car / aggregate data structures |
| faker / randexp / uuid | random data generation                                |
| morgan                 | simple server logging middleware                      |
| lodash                 | `countBy`, `sample` collection utils                  |
| eslint / prettier      | DX - code linting / formatting                        |
| eslint-config-airbnb   | decent default lint config                            |
