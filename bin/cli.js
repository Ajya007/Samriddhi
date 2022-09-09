#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (err) {
    console.error(`Failed to execute ${command}`, err);
    return false;
  }
  return true;
};
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://gitlab.com/paras205/boilerplate-react ${repoName}`;

const installDepsCommand = `cd ${repoName} && yarn && git remote remove origin`;

console.log(`Cloning the repository with name ${repoName}`);

const checkOut = runCommand(gitCheckoutCommand);

if (!checkOut) process.exit(-1);
console.log(`Installing dependencies for ${repoName}`);

const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(-1);

console.log(
  `Congratulations! You are ready.Follow the following commands to start`
);

console.log(`cd ${repoName} && yarn start`);
