let inpVal = document.getElementById("input").value;
Array.from(document.getElementsByClassName("rows")).forEach(function (ele) {
  ele.addEventListener("click", function (event) {
    if (!inpVal) {
      inpVal = "" + event.target.textContent;
    } else {
      let lastOpVal = inpVal[inpVal.length - 1];
      if (
        ["+", "-", "/", "*"].includes(lastOpVal) &&
        ["+", "-"].includes(event.target.textContent)
      ) {
        return;
      }
      inpVal += event.target.textContent;
    }
    document.getElementById("input").value = inpVal;
  });
});
document
  .getElementsByClassName("equalsto")[0]
  .addEventListener("click", function () {
    inpVal = "" + eval(inpVal);
    document.getElementById("input").value = inpVal;
  });
document
  .getElementsByClassName("decimal")[0]
  .addEventListener("click", function () {
    let lastOperandVal = lastOperand(inpVal);
    if (!lastOperandVal.includes(".")) {
      inpVal += ".";
      document.getElementById("input").value = inpVal;
    }
  });

function lastOperand(str) {
  ["+", "-", "*", "/"].forEach(function (ele) {
    if (str.includes(ele)) {
      let splitString = str.split(ele);
      str = splitString[splitString.length - 1];
    }
  });
  return str;
}
document.getElementsByClassName("bs")[0].addEventListener("click", function () {
  inpVal = inpVal.substr(0, inpVal.length - 1);
  document.getElementById("input").value = inpVal;
});

Array.from(document.getElementsByClassName("row1")).forEach(function (values) {
  values.addEventListener("click", function (event) {
    if (event.target.textContent == "C") {
      inpVal = "";
    } else if (event.target.textContent == "÷") {
      let lastOpVal = inpVal[inpVal.length - 1];
      if (
        ["+'", "-", "/", "*"].includes(lastOpVal) &&
        ["÷"].includes(event.target.textContent)
      ) {
        return;
      }
      inpVal += "/";
    } else if (event.target.textContent == "×") {
      let lastOpVal = inpVal[inpVal.length - 1];
      if (
        ["+'", "-", "/", "*"].includes(lastOpVal) &&
        ["×"].includes(event.target.textContent)
      ) {
        return;
      }

      inpVal += "*";
    }
    document.getElementById("input").value = inpVal;
  });
});
