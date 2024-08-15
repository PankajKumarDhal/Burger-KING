let orderBtn = document.querySelector('#Order-now');

let burger = document.querySelector('#burger');
let fries = document.querySelector('#fries');
let drinks = document.querySelector('#drinks');
let orderProducts = document.querySelector('.Order-Product');

let isLoaded = false;
let str = "";

orderBtn.addEventListener('click', ()=>{
  isLoaded = true
  str = isLoaded ? " Order is Loading..." : "";
  orderProducts.innerHTML = `<span>${str}</span>`;
  setTimeout(function(){
  
    if(burger.checked && fries.checked && drinks.checked){
      
    
      let Product = `<img src="https://static.skipthedishes.com/c1c31b68-a2f9-47b4-b792-98af79f56c7a-item-image-1533767012097." width="350px" height="350px" class ="burger"/>;<br>
      <p class = "orderID">
       <b>Order ID - </b>181</p>
        <p>Order is Sucessfully </p>`;
      
      orderProducts.innerHTML = Product;
      isLoaded = false;
    }
    else if(burger.checked && fries.checked){
      let Product = `<img src="https://cdn.vox-cdn.com/thumbor/DWf_eoA5KRtR3nX4Txh8mBfz6ww=/0x0:3780x2516/1200x800/filters:focal(1588x956:2192x1560)/cdn.vox-cdn.com/uploads/chorus_image/image/63692118/1134335296.jpg.0.jpg" width="350px" height="350px"  class ="burger"/>
      <p class = "orderID"><b>Order ID - </b>186</p>`;
      orderProducts.innerHTML = Product;
    }
    else if(burger.checked && drinks.checked){
      let Product = `<img src="https://tse4.mm.bing.net/th?id=OIP.JwUA-A-U9WwhPGxal-eorwHaHP&pid=Api&P=0&h=180" width="350px" height="350px"  class ="burger"/>
      <p class = "orderID"><b>Order ID - </b>125</p>`;
      orderProducts.innerHTML = Product;
    }
    else if(fries.checked && drinks.checked){
      let Product = `
      <img src="https://thumbs.dreamstime.com/b/fresh-french-fries-served-cold-drink-old-wooden-table-40714348.jpg" width="350px" height="350px"  class ="burger"/>
      <p class = "orderID"><b>Order ID - </b>139</p>`;
      orderProducts.innerHTML = Product;
    }
    else if(fries.checked){
      let Product = `<img src="https://www.inspiredtaste.net/wp-content/uploads/2023/09/Baked-French-Fries-Video.jpg"  width="350px" height="350px"  class ="burger"/>
      <p class = "orderID"><b>Order ID - </b>158</p>`;
      orderProducts.innerHTML = Product;
    }
    else if(drinks.checked){
      let Product = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdeKGMyq3Te4z3UOK7IOLnxVhUTsIRegr4w&s"  width="350px" height="350px"/>
      <p class = "orderID"  class ="burger"><b>Order ID - </b>185</p>`;
      orderProducts.innerHTML = Product;
    }
   
    else if(burger.checked){
      let Product = `<img src="https://www.shutterstock.com/image-photo/mouth-watering-cheesy-cheese-beef-600nw-2472579519.jpg"  width="350px" height="350px"  class ="burger"/>;
      <p class = "orderID"><b>Order ID - </b>182</p>`;

      orderProducts.innerHTML = Product;
    }
    else{
      orderProducts.innerHTML = '';
    }
  },3000);
})