var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function genarateError(message, code) {
    throw { message: message, errorCode: code };
}
genarateError('error message', 500);
