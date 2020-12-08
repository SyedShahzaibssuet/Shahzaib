const { log } = require('console');
var read = require('readline');
var tin = read.createInterface(process.stdin,process.stdout);
class Student
{
    constructor(rollno,name,fname,age,librarid,uniclass)
    {
        this._rol=rollno;
        this._nam=name;
        this._fnam=fname;
        this._ag=age;
        this._libid=librarid;
        this._unclas=uniclass;
    }
}
class LibraryRecord
{
    constructor(departname,bookcode,libraryid)
    {
        this._departname=departname;
        this._bookcode=bookcode;
        this._libraryid=libraryid
    }
}
var stdrecrd =[]
var phybook=[]
var matbook=[]
var librarybkrecrd=[]
class Library
{
    menulayout(title,a,b,c)
    {
        console.log(`\n\n------------${title}------------`);
        console.log(`------------------------------------------`);
        console.log(`*\t1.${a}\n*\t2.${b}\n*\t3.${c}`);
        console.log(`------------------------------------------\n`);
    }
    Menu()
    {
        this.menulayout("Library Management","Books","Studnet Detail","Exit")
        tin.question("Please Select Option you want : ",(numb)=>{
            var num = parseInt(numb);
            switch (num) {
                case 1:
                    this.booksname();
                    break;
                case 2:                    
                    this.stdnm();
                    break;            
                case 3:
                    tin.close();
                    break;
                default:
                   this.Menu();
                    break;
            }
        })
    }    
    stdnm()
    {
        this.menulayout("Student Detail","Add Student","View Student","Exit")        
        tin.question("Please Select Any One Option : ",(numb)=>{
            var n = parseInt(numb);
            switch (n) {
                case 1:
                    this.enterstddata();
                    break;            
                case 2:
                    this.getstdata();
                    break;
                case 3:
                    tin.close();
                    break;
                default:
                    break;
            }
        })
    }
    enterstddata()
    {
        console.log(`\t--------------Student Detail--------------`);        
        console.log(`\t------------------------------------------`);
            tin.question("Please Enter Student Name : ",(stdnm)=>{
                tin.question("Please Enter Student Father Name : ",(stdfnm)=>{
                    tin.question("Please Enter Student Age: ",(stdage)=>{
                        tin.question("Please Enter Student Library Id : ",(stdlibid)=>{
                            tin.question("Please Enter Student Class : ",(stdcls)=>{                                
                                var std= new Student(stdrecrd.length+1,stdnm,stdfnm,stdage,stdlibid,stdcls)
                                stdrecrd.push(std);
                                console.log(`\n\tNew Student Record Is Added`);                                
                                this.Menu();
                            })
                        })
                    })
                })
            })        
    }
    getstdata()
    {
        tin.question("Please Enter Student Roll No : ",(xin)=>{
            var inx = parseInt(xin);
            var std = stdrecrd.find(function(x){
                return x._rol == inx;
            })
            if(std !== undefined)
            {                
                var bknm = librarybkrecrd.find((y)=>{
                    return y._libraryid == std._libid;
                })                
                console.log(`\n\t--------------Student Detail--------------`);   
                console.log(`\tRoll No:   ${std._rol}\n\tStudent Name: ${std._nam}`);
                console.log(`\tFather Name: ${std._fnam}\n\tAge: ${std._ag}`);
                console.log(`\tLibrary ID: ${std._libid}\n\tClass Name: ${std._unclas}`);
                console.log(`\tBooks Borrow Name:${bknm==undefined ? "No Books" : bknm._departname}`);
                this.Menu();
            }
            else
            {
                console.log(`\n\t No Record is found`);
                this.Menu();
            }
        })       
    }
    booksname()
    {
        this.menulayout("Books Name","Physics","Math","Exit")       
        tin.question("Please Select Which Department Book you want: ",(numb)=>{
            var num = parseInt(numb);
            switch (num) {
                case 1:
                    this.books(phybook,"Physics")
                    this.strbkagnststd(phybook);
                    break;                               
                case 2:
                    this.books(matbook,"Mathemtaics")
                    this.strbkagnststd(matbook);
                    break;         
                case 3:
                    tin.close();                
                default:
                    this.booksname();
                    break;
            }
        })

    }
    strbkagnststd(depart)
    {
        tin.question("Please Select Which Book you want: ",(numb)=>{
            tin.question("Please Student Library Id :",(lid)=>{
            var num = parseInt(numb);
            var libobj = new LibraryRecord(depart[num-1],num,lid)
            librarybkrecrd.push(libobj);
            console.log(`Book is Issued Against this Library ID: ${lid}`);
            this.Menu();                
        })
    })
    }
    books(arrnm,bknm)
    {
        for(var i =0;i <= 5; i++)
        {
            arrnm[i]=bknm+i;
        }
        var a=0;
        arrnm.map((x)=>{ 
            a=a+1;                     
            return console.log(`${a}. ${x}`);                        
        })  
    }    
}
var objstd = new Library();
objstd.Menu();