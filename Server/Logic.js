export const Evaluate = (num1, num2 , op)=>{
    let ans;
    switch (op) {
        case '+':
            ans = num1+num2
            break;
        case "-":
            ans =  num1-num2;
            break;
        case "*":
            ans = num1*num2;
            break;
        case "/":
            ans = num1/num2;
            break;
        default:
            break;
    }
    return ans;
}