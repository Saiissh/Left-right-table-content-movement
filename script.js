
document.getElementById("add").addEventListener("click",arradd);

let arr1=[];let arr2=[];
let obj1,obj2;

function arradd(){

    let name = document.getElementById("name").value;
    let age= document.getElementById("age").value;

    let col=document.getElementById("colno").value;
    
    if(col==='col1')
   { 
    obj1={name:name,age:age,col:col};
    arr1.push(obj1);
   
   }

    else {
        obj2={name:name,age:age,col:col};
        arr2.push(obj2);
       
    }
   
    if(arr1.length!=0)
    print(arr1);

    if(arr2.length!=0)
    print(arr2);

}

let col1=document.querySelector(".col1");
let col2=document.querySelector(".col2");

function print(arr){

    let col=arr[0].col;

    if(col=="col1")
    document.querySelector(".col1").innerHTML="";


    else
    document.querySelector(".col2").innerHTML="";

  
   
  for(let i=0; i<arr.length; i++)
  {

            if(col=='col1')
        {
            
            let toadd=document.createElement("div");
            toadd.innerHTML=`
            <div class="col col1data">
            
            <h2>${arr[i].name}</h2> <br />
            <h3>${arr[i].age}</h3>
            <button  onclick="moveright(${i})">moveright</button>

            </div>
            `
            col1.appendChild(toadd);

        }

        else if(col=="col2"){
            let toadd=document.createElement("div");
            toadd.innerHTML=`
            <div class="col col2data">
            
            <h2>${arr[i].name}</h2> <br />
            <h3>${arr[i].age}</h3>
            <button onclick="moveleft(${i})">moveleft</button>

            </div>
            `
            col2.appendChild(toadd);
        }
  }



}

    
  function moveleft(i){

    let name=arr2[i].name;
    let age=arr2[i].age;


    let obj={name:name, age:age,col:"col1"}

    arr1.push(obj);

    arr2.splice(i, 1);

    if(arr2.length==0)
    {
        document.querySelector(".col2").innerHTML="";
    }
  
    if(arr1.length!=0)
    print(arr1);

    if(arr2.length!=0)
    print(arr2);
   
    // console.log(arr1 ,"arr1");
    // console.log(arr2 ,"arr2");
  }

  function moveright(i){
   
    console.log("before",arr1.length,arr2.length);


    let name=arr1[i].name;
    let age=arr1[i].age;
    // let col2=arr1[i].col;

    let obj={name:name, age:age,col:"col2"}

    console.log(obj);
    arr2.push(obj);

    arr1.splice(i, 1);

   
    if(arr1.length==0)
    {
        document.querySelector(".col1").innerHTML="";
    }


    document.querySelector(".col1").innerHTML="";
    document.querySelector(".col2").innerHTML="";

    if(arr1.length!=0)
    print(arr1);

    if(arr2.length!=0)
    print(arr2);

    console.log("after",arr1.length,arr2.length);
    console.log(arr1);
    console.log(arr2);
   
  }