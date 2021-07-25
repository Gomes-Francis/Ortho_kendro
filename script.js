//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none"; //button a click korle display ta "none" kore dibe
  //akhon amader transaction area ta k niye aste hobe jeno loginArea er jaigai transaction-area chole aste pare
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

//deposit button event handler
// const depositBtn = document.getElementById("addDeposit")
// depositBtn.addEventListener("click", function(){
//     //Deposit button a click korle deposit input field theke depositAmount id niye ashbe
//     const depositAmount = document.getElementById("depositAmount").value;
//     //suppose input a 120 likhlam, ebar browser er console log a giye doc.getElementByid("depositAmount").value likhe enter dile input er "120" ta pawa jabe
//     const depositNumber = parseFloat(depositAmount) //jehetu ans string a ashbe ty aita k convert kore nite hobe
//     //input er khetre maan ber korar jonno value dite hoy, r h1,h2,p etc tag er jonno innertext, ebong majhe majhe innerhtml bebohar kora hoyc
//     const currentDeposit = document.getElementById("currentDeposit").innerText; //age theke deposit koto chilo seta janar jonno
//     const currentDepositNumber = parseFloat(currentDeposit) //jehetu ans string a ashbe ty convert kore nite hobe
//     //akhon ager amount r bortoman deposit jog kore dibo
//     const totalDeposit = depositNumber + currentDepositNumber
//     document.getElementById("currentDeposit").innerText = totalDeposit; //akhon total ta k current deposit a pathai dibo

//     const currentBalance = document.getElementById("currentBalance").innerText
//     const currentBalanceNumber = parseFloat(currentBalance)
//     const totalBalance = depositNumber + currentBalanceNumber
//     document.getElementById("currentBalance").innerText = totalBalance

//     document.getElementById("depositAmount").value ="" //add korar pore input field ta khali kore dewar jonno
// })

//deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function() {
  // const depositAmount = document.getElementById("depositAmount").value;
  // const depositNumber = parseFloat(depositAmount);
  const depositNumber = getInputNumber("depositAmount")
  
  updateSpanText("currentDeposit", depositNumber)
//balance increase
  updateSpanText("currentBalance", depositNumber)

  document.getElementById("depositAmount").value =""
});
//withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw")
withdrawBtn.addEventListener("click",function(){
  // const withdrawAmount = document.getElementById("withdrawAmount").value
  // const withdrawNumber = parseFloat(withdrawAmount)
   const withdrawNumber = getInputNumber("withdrawAmount")
   updateSpanText("currentWithdraw", withdrawNumber)
   //balance theke jeno withdraw badh jai tar jonno same function e thakbe, kintu jehetu minus hobe ty -1 diye multiply(*) korte hobe
   updateSpanText("currentBalance", -1 * withdrawNumber)
   document.getElementById("withdrawAmount").value =""
})
// jehetu, depositNumber, withdrawNumber, currentNumber, 3tai parseFloat korte hocche, ty ekhane akta function kora jete pare
function getInputNumber(id){
  const amount = document.getElementById(id).value
  const amountNumber = parseFloat(amount)
  return amountNumber;
}

//jehetu depositNumber r currentDepositNumber jog kora ebong depositNumber r currentBalanceNumber jog kora ekoi kaj, tahole akta function call korlei hoy
function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
