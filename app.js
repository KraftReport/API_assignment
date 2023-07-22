
let btn =document.querySelector('.btn');
let back = document.querySelector('.back');
let number = 0;
btn.addEventListener("click",function(){
    number += 1;
    console.log(number);

     
 fetch('https://artist.myanmarlocalartists.com/api/artists').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata=>{
    console.log(completedata[0].artist_name);
   let data1 = "";
   
    data1 =`<div class="card">
    <div class="profile">
        <img src=${completedata[number].artist_pp} alt="">
        <div class="title">Name : ${completedata[number].artist_name}</div>
    </div>
    <img src="${completedata[number].artist_cover}" alt="">
    <p class="category">Type : ${completedata[number].artist_type}</p>
    <p class="price">Slug : ${completedata[number].artist_slug}</p>

</div>`

   
   document.getElementById("cards").innerHTML =data1;
})).catch((error)=>{
    console.log(error);
})



if(number>=23){
    number =0;
}
})

back.addEventListener("click",function(){
    number -=1;
    // console.log(number);
    fetch('https://artist.myanmarlocalartists.com/api/artists').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata=>{
    console.log(completedata[0].artist_name);
   let data1 = "";
   
    data1 =`<div class="card">
    <div class="profile">
        <img src=${completedata[number].artist_pp} alt="">
        <div class="title">Name : ${completedata[number].artist_name}</div>
    </div>
    <img src="${completedata[number].artist_cover}" alt="">
    <p class="category">Type : ${completedata[number].artist_type}</p>
    <p class="price">Slug : ${completedata[number].artist_slug}</p>

</div>`

   
   document.getElementById("cards").innerHTML =data1;
})).catch((error)=>{
    console.log(error);
})



if(number>=23){
    number =0;
}

if(number<=0){
    number=23;
}
})

 




 





 
 




