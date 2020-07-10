/**
 * Capitalize first letter of a string
 * @param {*} inputStr
 */
function capitalize(inputStr) {
  let capitalizedStr = "";

  if (inputStr === "") {
    return "";
  } else if (inputStr === null) {
    return null;
  } else {
    for (let i = 0; i < inputStr.length; i++) {
      if (i === 0) {
        capitalizedStr = inputStr[0].toUpperCase();
      } else {
        capitalizedStr += inputStr[i];
      }
    }

    capitalizedStr[0] = capitalizedStr[0].toUpperCase();
  }

  return capitalizedStr;
}

function reverse(inputStr) {
  if (inputStr === "") {
    return "";
  } else if (inputStr === null) {
    return null;
  } else {
  }
}

/**
 * tests capitalize function
 */
function capitalizeTest() {
  const capitalizeTestArr = ["yes", "wow", "Nice", "0", null, ""];

  let passedStatusArr = [];

  console.log("\nCapitalize Test");
  for (let i = 0; i < capitalizeTestArr.length; i++) {
    let capitalizeOutput = capitalize(capitalizeTestArr[i]);
    let passedStatus;

    if (capitalizeTestArr[i] === "") {
      if (capitalizeOutput === "") {
        passedStatus = true;
        passedStatusArr.push(true);
        printTestResults(
          i,
          capitalizeTestArr[i],
          capitalizeOutput,
          passedStatus
        );
      }
    } else if (capitalizeTestArr[i] === null) {
      if (capitalizeOutput === null) {
        passedStatus = true;
        passedStatusArr.push(true);
        printTestResults(
          i,
          capitalizeTestArr[i],
          capitalizeOutput,
          passedStatus
        );
      } else {
        passedStatusArr.push(false);
        passedStatus = false;
        printTestResults(
          i,
          capitalizeTestArr[i],
          capitalizeOutput,
          passedStatus
        );
      }
    } else {
      passedStatus = capitalizeOutput[0] === capitalizeOutput[0].toUpperCase();
      passedStatusArr.push(passedStatus);
      printTestResults(i, capitalizeTestArr[i], capitalizeOutput, passedStatus);
    }
  }
}

function printTestResults(testNum, testInput, output, testStatus) {
  console.log("\nTest #" + (testNum + 1));
  console.log('Input: "' + testInput + '"');
  console.log('Output: "' + output + '"');
  console.log("Passed?: " + testStatus);
}

/**
 * Prints how many tests have passed
 * @param {*} testResultsArr
 */
function getPassedStatus(testResultsArr) {
  let counter = 0;
  for (let i = 0; i < testResultsArr.length; i++) {
    if (testResultsArr[i] === true) {
      counter++;
    }
  }
  return "Tests Passed: " + counter + "/" + testResultsArr.length;
}

capitalizeTest();
