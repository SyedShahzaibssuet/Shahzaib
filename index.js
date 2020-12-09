const exp = require('express');
const testserver = exp();
const port =3300;

testserver.get('/',(req,res)=>{
    res.send('Home')
    console.log('This is My First Home page');
})
testserver.listen(port,()=>{
    console.log(`This is Listening Fromn Port No ${port}`);
})
testserver.get('/CV',(req,rep)=>{
    var test = Abc();
    test.map((x)=>{
        rep.send(`<b>Cv</b><br>Name:${x.name}<br>Father Name: ${x.fname}<br>Age: ${x.age}<br>N.I.C: ${x.nic}`)
    })    
})
testserver.get('/ContactUS',(req,rep)=>{
    rep.send('Contact Us')
})
function Abc() {
    var array1=[{
        name:"Syed Shahzaib",
        fname:"Syed Anwer Ali",
        age:20,
        nic:"42301-4682481-3"
    }]
    return array1;
}