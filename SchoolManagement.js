const { Console } = require('console');
var read =require('readline');
var takein = read.createInterface(process.stdin,process.stdout);
var stddataobj={
    Name:["Harris","Shahzaib"],
    Fname:["Maqbool","Anwer"],
    Age:[23,25],
    Stdclass:["B.A","B.C.S"]
}
var staffdata=[
    {id:1,Name:"Shah",Fname:"Nawaz",Sec:"A"},
    {id:2,Name:"Noman",Fname:"Rajput",Sec:"B"},
    {id:3,Name:"Faisal",Fname:"karamat",Sec:"C"}
]
var UserRecord=[
    {usid:1,UserName:"admin",password:"admin",isValid:true},
    {usid:2,UserName:"user",password:"user",isValid:true},
    {usid:3,UserName:"Haider",password:"123",isValid:false}
]
var Studentdatamp= new Map();
function Mainmenu() {
    console.log("\t\tSchool Management");
    console.log("\t\t*****************");
    console.log("***********************************");
    console.log("*\t 1. Student Data *");
    console.log("*\t 2. Staff Data *");
    console.log("*\t 3. User *");    
    console.log("*\t 4. Exit *");
    console.log("***********************************\n");
    takein.question("Please Enter Number of Option Which you want to Select: ",(b)=>{
        var test=parseInt(b);
        if(test==1)
        {
            Studentdata();
        }
        else if(test==2)
        {
            Staffdata();
        }
        else if(test==3)
        {
            Userdata();
        }
        else if(test==4)
        {
            takein.close();
        }        
        else
        {
            Mainmenu();
        }
    })
}
function Studentdata() {
    console.log("\n\n\t\tStudent Form");
    console.log("\t\t************");
    console.log("*\t 1. New Student *");
    console.log("*\t 2. Update Student *");
    console.log("*\t 3. Delete Student *");
    console.log("*\t 4. Exit *");
    console.log("*\t Press Any key To Back  *\n");
    takein.question("Please Enter Number of Option Which you want to Select: ",(b)=>{
        var test=parseInt(b);
        if(test==1)
        {
            newStudentdata();
        }
        else if(test==2)
        {
            Updatestudent();
        }
        else if(test==3)
        {
            delstudent();
        }
        else if(test==4)
        {
            takein.close();
        }
        else
        {
            Mainmenu();
        }
    })
}
function Staffdata() {
    console.log("\n\n\t\tStaff Form");
    console.log("\t\t**********");
    console.log("*\t 1. New Staff *");
    console.log("*\t 2. Update Staff *");
    console.log("*\t 3. Delete Staff *");
    console.log("*\t 4. Exit *");
    console.log("*\t Press Any key To Back  *\n");
    takein.question("Please Enter Number of Option Which you want to Select: ",(b)=>{
        var test=parseInt(b);
        if(test==1)
        {
            newStaff();
        }
        else if(test==2)
        {
            UpdateStaff();
        }
        else if(test==3)
        {
            delstaff();
        }
        else if(test==4)
        {
            takein.close();
        }
        else
        {
            Mainmenu();
        }
    })
}
function Userdata() {
    console.log("\n\n\t\tUser Form");
    console.log("\t\t*********");
    console.log("*\t 1. New User *");
    console.log("*\t 2. Update User *");
    console.log("*\t 3. Delete User *");
    console.log("*\t 4. Exit *");
    console.log("*\t Press Any key To Back  *\n");
    takein.question("Please Enter Number of Option Which you want to Select: ",(b)=>{
        var test = parseInt(b);
        if(test==1)
        {
            adduser();
        }
        else if(test==2)
        {
            updateuser();  
        }
        else if(test==3)
        {
            deleteuser();   
        }
        else if(test==4)
        {
            takein.close();
        }
        else
        {
            Mainmenu();
        }
    })
}
function Recalling(){
    takein.question("\nDo you want To Continue: y/n: ",(x)=>{
     if(x=="y")
    {
        Mainmenu();
    }
     else if(x=="n")
    {
        takein.close();
    }
     else
    {
        Mainmenu();
    }
    })
}
function newStudentdata() {
    console.log("\n\n\t\t New Student Form");
    console.log("\t\t****************\n");
    takein.question("Enter Student Name: ",(stdname)=>{
        takein.question("Enter Father Name: ",(fname)=>{
            takein.question("Enter Student Age: ",(stdage)=>{
                takein.question("Enter Student Class Name: ",(stdclass)=>{
                    addstddt(stdname,fname,stdage,stdclass);
                    takein.question("\nConfirm : Do you want To Add Record: y/n: ",(x)=>{
                        if(x=="y")
                       {
                           stddataobj.Name[stddataobj.Name.length]=Studentdatamp.get("Name");
                           stddataobj.Fname[stddataobj.Fname.length]=Studentdatamp.get("FName");
                           stddataobj.Age[stddataobj.Age.length]=Studentdatamp.get("Age");
                           stddataobj.Stdclass[stddataobj.Stdclass.length]=Studentdatamp.get("ClassName");
                           console.log("\n New Record is Added");
                           Recalling();
                       }
                        else
                       {
                           Mainmenu();
                       }
                       })
                })
            })
        })
    })    
}
var addstddt=(stdnm,stfnam,stdag,stdclas)=>{
    Studentdatamp.set("Name",stdnm);
    Studentdatamp.set("FName",stfnam);
    Studentdatamp.set("Age",stdag);
    Studentdatamp.set("ClassName",stdclas);
}
function Updatestudent() {
    console.log("\n\n\t\tStudent Update Form");
    console.log("\t\t*******************\n");
    printingstdata();
    takein.question("Please Enter Number of Option Which you want to Update: ",(b)=>{
        var test=parseInt(b)-1;
        if(test<=stddataobj.Name.length){        
        takein.question("Enter Student Name: ",(stdname)=>{
            takein.question("Enter Father Name: ",(fname)=>{
                takein.question("Enter Student Age: ",(stdage)=>{
                    takein.question("Enter Student Class Name: ",(stdclass)=>{
                        addstddt(stdname,fname,stdage,stdclass);
                        takein.question("\nConfirm : Do you want To Update Record: y/n: ",(x)=>{
                            if(x=="y")
                           {
                               stddataobj.Name[test]=Studentdatamp.get("Name");
                               stddataobj.Fname[test]=Studentdatamp.get("FName");
                               stddataobj.Age[test]=Studentdatamp.get("Age");
                               stddataobj.Stdclass[test]=Studentdatamp.get("ClassName");
                               console.log("\n Record is Updated");
                               Recalling();
                           }
                            else
                           {
                               Mainmenu();
                           }
                           })
                    })
                })
            })
        })
        }
        else {
            console.log("\n\tPlease Enter Correct Roll No: \n");
            Updatestudent();
        }
    })
}
function delstudent() {
    console.log("\n\n\t\tStudent Delete Form");
    console.log("\t\t*******************\n");
    printingstdata();
    takein.question("Please Enter Number of Option Which you want to Delete: ",(d)=>{
        var test=parseInt(d)-1;
        if(test<=stddataobj.Name.length)
        {
            takein.question("\nConfirm : Do you want To Delete Record: y/n: ",(x)=>{   
                if(x=="y")
                {                    
                    delete stddataobj.Name[test];
                    delete stddataobj.Fname[test];
                    delete stddataobj.Age[test];
                    delete stddataobj.Stdclass[test];
                    console.log(` Record is Deleted `);
                    Recalling();
                }
                else if(x=="n")
                {
                    Studentdata();
                }
                else
                {
                    Mainmenu();
                }
            })
        }
    })
} 
var printingstdata=()=>{
    for(var i=0;i<stddataobj.Name.length;i++){
        var a =i+1;        
        console.log("\t"+a+". "+stddataobj.Name[i]+" "+stddataobj.Fname[i]+" "+stddataobj.Age[i]+" "+stddataobj.Stdclass[i]);      
       
    }    
}
function newStaff() {
    console.log("\n\n\t\t New Staff Form");
    console.log("\t\t**************\n");
    takein.question("Enter Staff Name: ",(stfname)=>{
        takein.question("Enter Father Name: ",(stffname)=>{
            takein.question("Enter Staff Sec: ",(stfsec)=>{              
                    takein.question("\nConfirm : Do you want To Add Record: y/n: ",(x)=>{
                        if(x=="y")
                       {
                        var objstaff ={id:staffdata.length,Name:stfname,Fname:stffname,Sec:stfsec}
                        staffdata[staffdata.length]=objstaff;                             
                        console.log("\n New Record is Added");
                        Recalling();
                       }
                        else
                       {
                           Mainmenu();
                       }
                    })
                })
            })
        })
   
}
var printingstaffdata=()=>{
    var stfdat= staffdata.map(function(x){
        return console.log(`     ${x.id}   ${x.Name}   ${x.Fname}   ${x.Sec}`);
    })      
}
function  UpdateStaff() {
    console.log("\n\n\t\tStaff Update Form");
    console.log("\t\t*****************\n");
    printingstaffdata();
    takein.question("Please Enter Number of Option Which you want to Update: ",(c)=>{
        var test=parseInt(c)-1;
        if(test<=staffdata.length)
        {        
        takein.question("Enter Staff Name: ",(stfname)=>{
            takein.question("Enter Father Name: ",(stafname)=>{
                takein.question("Enter Section: ",(stfsec)=>{
                        takein.question("\nConfirm : Do you want To Update Record: y/n: ",(x)=>{
                            if(x=="y")
                           {                               
                               staffdata[test].Name=stfname;
                               staffdata[test].Fname=stafname;
                               staffdata[test].Sec=stfsec;                               
                               console.log("\n Record is Updated");
                               Recalling();
                           }
                            else
                           {
                               UpdateStaff();
                           }
                        })
                    })
                })
            })
       
        }
        else {
            console.log("\n\tPlease Enter Correct Id No: \n");
            UpdateStaff();
        }
    })
}
function delstaff() {
    console.log("\n\n\t\tStaff Delete Form");
    console.log("\t\t*****************\n");
    printingstaffdata();;
    takein.question("Please Enter Number of Option Which you want to Delete: ",(d)=>{
        var test=parseInt(d)-1;
        if(test<=staffdata.length)
        {
            takein.question("\nConfirm : Do you want To Delete Record: y/n: ",(x)=>{   
                if(x=="y")
                {
                    delete staffdata[test];
                    console.log(`  Record is Deleted  `);
                    Recalling();                    
                }
                else if(x=="n")
                {
                    Studentdata();
                }
                else
                {
                    Mainmenu();
                }
            })
        }
    })
} 
function adduser(){
    console.log("\n\n\t\t New User Form");
    console.log("\t\t*************\n");
    takein.question("Enter User Name: ",(usrname)=>{
        takein.question("Enter User Password: ",(passwrd)=>{
            takein.question("Please Inform User is Active or not (true/false) : ",(usrisvalid)=>{              
                    takein.question("\nConfirm : Do you want To Add Record: y/n: ",(x)=>{
                        if(x=="y")
                       {
                        var objusr ={usid:UserRecord.length,UserName:usrname,password:passwrd,isValid:usrisvalid};
                        UserRecord[UserRecord.length]=objusr;                             
                        console.log("\n New Record is Added");
                        Recalling();
                       }
                        else
                       {
                           Mainmenu();
                       }
                    })
                })
            })
        })
}
function updateuser(){
    console.log("\n\n\t\tUser Update Form");
    console.log("\t\t****************\n");
    printuserdata();
    takein.question("Please Enter Number of Option Which you want to Update: ",(c)=>{
        var test=parseInt(c)-1;
        if(test<=UserRecord.length)
        {        
            takein.question("Enter User Name: ",(usrname)=>{
                takein.question("Enter User Password: ",(passwrd)=>{
                    takein.question("Please Inform User is Active or not (true/false) : ",(usrisvalid)=>{
                        takein.question("\nConfirm : Do you want To Update Record: y/n: ",(x)=>{
                            if(x=="y")
                           {                               
                               UserRecord[test].UserName=usrname;
                               staffdata[test].password=passwrd;
                               staffdata[test].isValid=usrisvalid;                               
                               console.log("\n Record is Updated");
                               Recalling();
                           }
                            else
                           {
                               updateuser();
                           }
                        })
                    })
                })
            })
       
        }
        else {
            console.log("\n\tPlease Enter Correct Id No: \n");
            UpdateStaff();
        }
    })

}
function deleteuser(){
    console.log("\n\n\t\tUser Delete Form");
    console.log("\t\t****************\n");
    printuserdata();
    takein.question("Please Enter Number of Option Which you want to Delete: ",(d)=>{
        var test=parseInt(d)-1;
        if(test<=staffdata.length)
        {
            takein.question("\nConfirm : Do you want To Delete Record: y/n: ",(x)=>{   
                if(x=="y")
                {
                    delete UserRecord[test];
                    console.log(`  Record is Deleted  `);
                    Recalling();                    
                }
                else if(x=="n")
                {
                    Userdata();
                }
                else
                {
                    Mainmenu();
                }
            })
        }
    })
}
function printuserdata(){
    UserRecord.map((a)=>{
        return console.log(`    ${a.usid}   ${a.UserName}   ${a.password}  ${a.isValid}`);
    })
}
function entrypoint() {
    takein.question("Enter User Name:",(Usrname)=>{
        takein.question("Enter Password:",(paswrd)=>{
            var abc=UserRecord.find((x)=>{
               return x.UserName==Usrname //&& x.password==paswrd && x.isValid==true                            
            })            
            if(abc=!{}){
                Mainmenu();
            }
            else
            {
                console.log(`Please Enter Correct User Name`);
            }
        })
    })
}
entrypoint();
