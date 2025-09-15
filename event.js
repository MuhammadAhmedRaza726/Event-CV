
function img(){
    document.getElementById("image").className=""

}



function details(){
document.getElementById("Detail").className=""

}


function frm(){
   var fr = document.getElementById("form").className=""
   var tt= document.getElementById("text").value
    var em =  document.getElementById("Email").value


    if(tt==""){
        alert("Enter name First!")

    }

    if(em == ""){
alert("Email First Please!")

    }

    else(
        alert("Thank you!")
    )
console.log(fr)
}