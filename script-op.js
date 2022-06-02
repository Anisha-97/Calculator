let inpVal = document.getElementById("input").value;
Array.from(document.getElementsByClassName("calc-button")).forEach(function (
  ele
) {
  ele.addEventListener("click", function (event) {
    if (event.target.textContent == "C") {
      inpVal = "";
    } else if (event.target.textContent == "⌫") {
      inpVal = inpVal.substr(0, inpVal.length - 1);
    } else if (["+", "-", "÷", "×"].includes(event.target.textContent)) {
      let lastOpVal = inpVal[inpVal.length - 1];
      if (["+", "-", "/", "*"].includes(lastOpVal)) {
        return;
      }
      inpVal +=
        event.target.textContent == "÷"
          ? "/"
          : event.target.textContent == "×"
          ? "*"
          : event.target.textContent;
    } else if (event.target.textContent == "=") {
      inpVal = "" + eval(inpVal);
    } else if (event.target.textContent == ".") {
      let lastOperandVal = lastOperand(inpVal);
      if (!lastOperandVal.includes(".")) {
        inpVal += ".";
      }
    } else {
      if (!inpVal) {
        inpVal = "" + event.target.textContent;
      } else {
        inpVal += event.target.textContent;
      }
    }
    document.getElementById("input").value = inpVal;
  });
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
