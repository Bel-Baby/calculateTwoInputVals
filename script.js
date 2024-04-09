const sumInputs = document.getElementById("sumInputs");



const calculateTotalInputs = (input1, input2) => {
    return input1 + input2
}

const showSum = () => {
    const inputField = document.getElementById("inputField");
    const inputField2 = document.getElementById("inputField2");
    const result = document.getElementById("result");

    const sumOfInputs = calculateTotalInputs(inputField, inputField2)
    const addTwo = calculateTotalInputs(sumOfInputs,2)
    result.textContent = sumOfInputs;
}

sumInputs.addEventListener("click", showSum);