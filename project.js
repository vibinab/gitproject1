function save(event){
    event.preventDefault();
    const email=event.target.email.value
    const amount=event.target.amo.value;
    const desc=event.target.des.value
    const category=event.target.cat.value

    obj={
        email:email,
        amount:amount,
        desc:desc,
        category:category
    }

    // console.log(obj)
    localStorage.setItem('obj.email',JSON.stringify(obj))
    show(obj)
      

}



window.addEventListener("DOMContentLoaded",()=> {
    const localobj=localStorage;
    const localkeys=Object.keys(localobj) 

    for(var i=0;i<localkeys.length; i++){
        const key=localkeys[i]
        const userdstr= localobj[key];
        const userdobj=JSON.parse(userdstr);
        console.log(userdobj)
        show(userdobj)
    }
   })

function show(user){
    const parent= document.getElementById('showuser');
    const  child=`<li id=${user.email}>${user.email}${user.amount} ${user.desc}${user.category} <button onclick=edituser('${user.email}','${user.amount}','${user.desc}')> edit </button> 
    <button onclick=deletedata('${user.email}')>delete</button></li>`
    parent.innerHTML=parent.innerHTML+child;
}


function deletedata(email){
    localStorage.removeItem(email)
    screenremover(email)
}

function screenremover(email){
    const parent= document.getElementById('showuser')
    const deletechild=document.getElementById(email)
    parent.removeChild(deletechild)
}








