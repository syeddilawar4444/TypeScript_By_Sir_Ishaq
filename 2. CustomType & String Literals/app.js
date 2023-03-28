/////////////////////////////////////////////
var person = {
    name: "Syed Dilawar Hussain",
    rollNo: 300,
    hobbies: ["reading,Racket"],
};
var data = [];
data.push({
    name: "hassnain",
    rollNo: 200,
    hobbies: ["find", "fill", "nothing"],
    email: "syeddilawar4444@gmail.com",
});
//number means function return type
var add = function (val1, val2) {
    return val1 + val2;
};
var func;
func = add;
//TypeScript Type Literal
// means wo typeki value jo ma set karw araha hu
var twoOperation = function (val1, val2, calc //string Literals
) {
    if (calc === "add") {
        return val1 + val2;
    }
    else if (calc === "subtract") {
        return val1 - val2;
    }
};
console.log(twoOperation(30, 50, "add"));
