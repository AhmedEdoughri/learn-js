// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 


function logMsg() {
    console.log(`Errors Message: ${this.errMsg}`);
}
  
const o1 = {
    errMsg: "O1"
};

const o2 = {
    errMsg: "O2"
};

logMsg.call(o1);
logMsg.call(o2);