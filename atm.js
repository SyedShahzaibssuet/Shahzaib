const { mainModule } = require('process');
var read= require('readline');
var Tkin=read.createInterface(process.stdin,process.stdout);
var Balance=100000;
function Mainmenu(){
 console.log("\t\tATM Machine Transaction");
 console.log("\t\t***********************");
 console.log("***********************************");
 console.log("*\t 1. Cash WithDrawl *");
 console.log("*\t 2. Online *");
 console.log("*\t 3. Balance Enquiry *");
 console.log("*\t 4. Fast Cash *");
 console.log("*\t 5. Exit *")
 console.log("***********************************");
 Tkin.question("Please Enter Number of Option Which you want to Select: ",(b)=>{
 var test=parseInt(b);
 if(test==1)
 {
 CashWithdrawl();
 }
 else if(test==2)
 {
 Online();
 }
 else if(test==3)
 {
 BalanceEnquiry();
 }
 else if(test==4)
 {
 FastCash();
 }
 else if(test==5)
 {
 Tkin.close();
 }
 else
 {
 Mainmenu();
 }
 })
}
function CashWithdrawl()
{
 console.log("\n\t\tCash WithDrawl Menu");
 console.log("\t\t*******************"); 
 Tkin.question("\nPlease Enter Amount of Cash Withdrawl:",(x)=>{
 var amounttrans=parseInt(x);
 if(amounttrans<25000){
 Balance=Balance-amounttrans;
 console.log("\tTransaction Amount:"+amounttrans);
 console.log("\tBalance Amount:"+Balance);
 Recalling();
 }
 else
 {
 console.log("\t You do not have enough Amount");
 CashWithdrawl();
 }
 })
}
function Online(){
 console.log("\t\tOnline Transfer Menu");
 console.log("\t\t*******************");
 Tkin.question("Please Enter Account No:",(x)=>{
 Tkin.question("Please Enter Amount:",(y)=>{
 var accountno=parseInt(x);
 var amounton=parseInt(y);
 if(Balance>amounton)
 {
 Balance=Balance-amounton;
 console.log("\n\tAccount No:"+accountno);
 console.log("\tTransaction Amount:"+amounton);
 console.log("\tBalance Amount:"+Balance);
 Recalling();
 }
 else
 {
 console.log("\t You do not have enough Amount");
 }
 })
 })
}
function BalanceEnquiry(){
 console.log("\t\tBalance Enquiry Menu");
 console.log("\t\t*******************");
 console.log("\n\t\tYour Remaining Balance is:"+Balance);
 Recalling();
}
function FastCash(){
 console.log("\t\tFast Cash Menu");
 console.log("\t\t***************");
 console.log("*\t 1. 10000\t\t2. 5000");
 console.log("*\t 3. 20000\t\t4. 2000");
 console.log("*\t 5. 500   \t\t 6.1000");
 console.log("***********************");
 Tkin.question("Please Enter No:",(q)=>{
 if(parseInt(q)==1){
 fastcashview(10000);
 }
 else if(parseInt(q)==2){
 fastcashview(5000);
 } 
 else if(parseInt(q)==3){
 fastcashview(20000);
 }
 else if(parseInt(q)==4){
 fastcashview(2000);
 }
 else if(parseInt(q)==5){
 fastcashview(500);
 }
 else if(parseInt(q)==6){
 fastcashview(1000);
 }
 else {
 FastCash();
 }
 Recalling();
 })
}
function Recalling(){
 Tkin.question("\nDo you want To Continue: y/n: ",(x)=>{
 if(x=="y")
 {
 Mainmenu();
 }
 else if(x=="n")
 {
 Tkin.close();
 }
 else
 {
 Mainmenu();
 }
 })
}
function fastcashview(abc){
 Balance=Balance-abc;
 console.log("\tTransaction Amount:"+abc);
 console.log("\tBalance Amount:"+Balance);
}
Mainmenu(); 