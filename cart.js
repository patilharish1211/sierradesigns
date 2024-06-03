function fetchdata(){
    fetch("http://localhost:3000/cart")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      Cardlist(data)})
    .catch((err)=>console.log(err))
}
fetchdata();

function Cardlist(data){
    let totalcard=data.map((el)=>singlecard(el.title,el.description,el.image,el.price,el.id))
    document.getElementsByClassName("maincart").innerHTML=totalcard.join("")
}

function singlecard(title,description,image,price,id){
  let card=  `<div class="container">
    <div class="row">
      <div class="col-3">
       <div class="row">
        <h1 class="ms-3 mb-5 pt-4">Shopping cart</h1>
<div class="col-6 mt-3">
<img src="${image}" width="150px" alt="">
</div>
<div class="col-6 align-content-center ">
<h2 class="h3_cart">${title}</h2>
<h2 class="h3_cart">${price}</h2>
<p>${description}</p>
</div>
       </div>
      </div>
      <div class="col-6">
      <i class="bi bi-trash3-fill delete" data-id=${id}></i>
      </div>
    </div>
  </div>`
  return card
}
document.addEventListener("click",(event)=>{
  if(event.target.classList.contains("delete")){
    DeletePitch(event.target.dataset.id)
  }
})

function DeletePitch(id)
{
  fetch(`https:://java-script-a91o.onrender.com/cart/${id}`,{
    method: "DELETE",
  })
  .then((res)=>res.json())
  .then((data)=>alert("Your product is deleted!"))
  .catch((err)=>console.log(err))
}