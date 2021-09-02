let messageBag = {
  exceptions: {
    1: {
      num: 1009,
      message: "Network Connection Error!",
    },
    2: {
      num: 1002,
      message: "User is not logged-in.",
    },
  },
};

function prettyPrintMessageLog(jsObj) {
  let now = new Date();
  for (let item in jsObj.exceptions) {
    console.log(
      `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} Error Number ${
        jsObj.exceptions[item].num
      } : ${jsObj.exceptions[item].message}`
    );
  }
}

prettyPrintMessageLog(messageBag);
