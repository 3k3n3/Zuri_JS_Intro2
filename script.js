//Welcome Message
alert("Welcome! \nSimple JavaScript Calculator")

//An array/list conataining maths operators/signs
let signsArray = ['%', '*', '-', '+', '/', '**']

//Define function myCalc
function myCalc() {

    //num1 is first number, num2 is second number
    let num1 = prompt("Enter first number:")
    if (isNaN(num1)) {
        alert("Error: '" + num1 + "' is not a number!")
        //Invalid input, the function is called back to beginning/restart 
        myCalc();

        //checks if num1 isNaN is false and proceeds to get operator sign
    } else if (!isNaN(num1)) {
        let sign = prompt("Enter math operator: %, *, -, +, /, **:")
        //checks if the sign entered is included in the array
        if (!signsArray.includes(sign)) {
            alert("Unexpected Token '" + sign + "'!");
            //if sign is not in list/array, the fuction myCalc is restarted
            myCalc();

            //see comments for num1
        } else {
            let num2 = prompt("Enter second number:")
            if (isNaN(num2)) {
                alert("Error: '" + num2 + "' is not a number!")
                myCalc();

                //perform arithmetic operations if all input is correct
            } else {
                //modulo
                if (sign === "%") {
                    alert(num1 % num2);
                }
                //multiplication
                else if (sign === "*") {
                    alert(num1 * num2);
                }
                //subtraction
                else if (sign === "-") {
                    alert(num1 - num2);
                }
                //addition
                else if (sign === "+") {
                    alert(num1 + num2);
                }
                //division
                else if (sign === "/") {
                    alert(num1 / num2);
                }
                // power of
                else if (sign === "**") {
                    alert(num1 ** num2);
                }
            }
        }
    }
}
myCalc();
