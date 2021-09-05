# Cypress Web Application

## Description

A sample web application that uses Cypress a JavaScript End to End Testing, which can be used locally and on CI to test the web application. Cypress contains a number of benefits compared to other web testing frameworks like Selenium.  

## Contents

- [Setup Steps](#setup-steps)
- [How to run the project locally](#how-to-run-the-project-locally)
- [Tools](#tools)
- [Update Dependencies](#update-dependencies)
- [Releases](#releases)
- [Documentations](#documentations)
- [Helpful resources](#helpful-resources)

## Setup Steps

To setup a Cypress project, we need to go to the terminal and add the following

```javascript
mkdir cypress-web-application
```

Then change directory into `cypress-web-application` and run the following in your terminal at the root of the project to install Cypress and and keep a record saved of the dependency to the `package.json` file.

```javascript
npm install cypress --save-dev
```

After that we also want to install the following `ejs` and `Express` to make a simple project we can use to test Cypress. So, run the following at the root of the project in the terminal.

```javascript
npm install ejs --save
npm install express --save
```

Then we want to install the following `start-server-and-test`, see the Github repo [link](https://github.com/bahmutov/start-server-and-test), as it allows to start our node project server and be able to test on this server that has started. In the past, we would have issue where we could start the server, but could not run the tests in tandem, this library allows us to do both.

```javascript
npm install --save-dev start-server-and-test
```

To launch the `Cypress` dashboard and run the tests locally to make sure they work, run the following in your terminal.

```javascript
npx cypress open
```

To see a list of example tests that `Cypress` provides when installing the end to end test framework, go the following directory path.

```javascript
cypress/integration/examples
```

To create our own `Cypress` tests we want to do the following, let’s create a new file in the `cypress/integration` folder that was created for us when we installed `Cypress` called `sample_spec.js`.

In this file we want something like the following, the next time we run our tests locally or on CI, we can run these tests against our sample Express project.

```javascript
describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

// describe('My First Test', () => {
// it('Does not do much!', () => {
//     expect(true).to.equal(false)
// })
// })

// To test this locally we need to run the server in one tab and run the tests in another tab
// describe("Launch the website", () => {
//   it("Visits the Kitchen Sink", () => {
//     cy.visit("http://localhost:8080");
//   });
// });

describe('My First Test', function() {
  it('Visits page', function() {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
  })
})
```

To run our Cypress tests on CI specifically Github Actions, we want something like the following in out `.yml` file.

```yml
name: End-to-end tests
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    container: cypress/browsers:node12.18.3-chrome87-ff82
    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Cypress run
        uses: cypress-io/github-action@v2.9.3
        with:
          start: npm test
          wait-on: http://localhost:8080
```

We want to modify the `package.json` to be like the following to make running certain script commands easier like the following instead of using `node app.js` to launch our web server, we could use `npm start` instead. 

```json
{
  "name": "Cypress-web-application",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "cy:run": "cypress run",
    "test": "start-server-and-test start http://localhost:8080 cy:run"
  },
  "devDependencies": {
    "cypress": "^6.8.0",
    "start-server-and-test": "^1.12.1"
  },
  "dependencies": {
    "ejs": "^3.1.6",
    "express": "^4.17.1"
  }
}
```
## How to run the project locally

To open the `Cypress` Dashboard locally run, we want to type the following in our terminal at the root of the project.

```javascript
npx cypress open
```

To launch our web server, we want to type one of the following in our terminal at the root of the project. If we want to run our tests while having Cypress dashboard open, we need to have these running in separate terminal tabs.

```javascript
node app.js
```
or
```javascript
npm start
```

To run our `Cypress` tests locally we want to use the following in our terminal at the root of the project, which calls a script from our `package.json`.

```javascript
npm test
```

## Tools

**Linter:** we use the following linter [link](https://github.com/github/super-linter).

**Uploading Artifacts:**  we use the following way to upload Artifacts, they allow you to persist data like test results after a job has completed, see the following documentation [link](https://docs.github.com/en/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts).

**Creating images/icons:** we use Figma to create images and icon. Figma makes it very easy to create designs in many different formats.

**Creating a Mock Server:** we use a mock server with Postman to quickly test apis, to see how to create a mock server, see the following video [link](https://www.youtube.com/watch?v=rJY8uUH2TIk). 

### Mobile Specific Tools:
 
**Fastlane:** Fastlane allows us to automate our development and release process [link](https://docs.fastlane.tools/).

**App Center:** App Center is used to distribute an app, making it very easy to test on a physical device by using a fastlane plugin [link](https://github.com/microsoft/fastlane-plugin-appcenter).

**Proxyman:** we use Proxyman to view HTTP/HTTPS requests as they happen, it is easier to debug network connections on mobile on Proxyman where we can test and mock specific network responses, see the following documentation [link](https://docs.proxyman.io/debug-devices/ios-simulator). 

## Update Dependencies

**Npm:** How to update a npm package.
- [link](https://docs.npmjs.com/cli/update).

**Gemfile:** How to update a Gemfile package.
- [link](https://bundler.io/man/bundle-update.1.html#UPDATING-A-LIST-OF-GEMS).

## Documentations

**Git Squash:** How to Git Squash with VS Code [link](documentations/gitSquashDocument.md).

**Git Worktree:** How to use Git Worktree [link](documentations/gitWorktreeDocument.md).

**Git Empty Commit:** How to use Git Empty Commit [link](documentations/gitEmptyCommitDocument.md).

**Common Design Patterns and App Architectures for Mobile**: [link](https://www.raywenderlich.com/18409174-common-design-patterns-and-app-architectures-for-android#toc-anchor-001) and [link](https://dev.to/codalreef/learn-dependency-injection-with-doug-the-goldfish-3j43). 

## Releases

How to manage releases in a repository [link](https://help.github.com/en/github/administering-a-repository/managing-releases-in-a-repository). 

## Helpful resources

The following link provides helpful information on why you would want to use `Cypress` as your End to End test framework for Web development compared to Selenium.
- [link](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell).

The following link provides a helpful example on how you could set up your own simple website using nodejs and `Express` and how to test this with Cypress.
- [link](https://www.345tool.com/blog/automate-node-js-website-e2e-test-with-cypress-and-github-actions).

The following link provides a real world example of `Cypress` being used with `Github Actions`
- [link](https://docs.cypress.io/guides/continuous-integration/github-actions.html#Cypress-Real-World-Example-with-GitHub-Actions).

The following link provides info on how to set up `Cypress` over `CI`.
- [link](https://docs.cypress.io/guides/continuous-integration/introduction.html#Setting-up-CI).

The following link provides some information on how you would run `Cypress` tests on `Github Actions`.
- [link](https://www.cypress.io/blog/2019/11/20/drastically-simplify-your-testing-with-cypress-github-action/).

The following link provides some information on how you would write some real tests using `Cypress`.
- [link](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Write-a-real-test).

The following link provides information how would you write a test in `Cypress` to visit your server.
- [link](https://docs.cypress.io/guides/getting-started/testing-your-app.html#Step-2-Visit-your-server).

The following links to a library `start-server-and-test` that allows us to run our server and tests at the same time without it our ci would get stuck running the server and not be able to run the `Cypress` tests.
- [link](https://github.com/bahmutov/start-server-and-test).