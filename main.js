const url = "https://fakestoreapi.com/products";

async function fetchData(){
const response=await fetch(url);
  const data=await response.json();
  console.log(data);
  const list=document.createElement("div");


  list.classList.add("d-flex");

  list.classList.add("flex-wrap");

  list.classList.add("container-fluid");

  list.classList.add("col-12");

  list.classList.add("col-sm-12");

  list.classList.add('p-2');

  list.classList.add("gap-1");
 
  data.forEach((element)=>{
    let div=document.createElement("div");
    div.classList.add("container-fluid");
   div.classList.add("col-12");
 div.classList.add("col-sm-4");
    div.style.border='1px solid grey';

    let title=document.createElement("h3");
    title.innerText=element.title;

    let price=document.createElement("h3");
    price.innerText=element.price;


    let img=document.createElement("img");
   img.classList.add("img-fluid");
    img.src=element.image;


    div.append(title);
    div.append(img);
    list.append(div);
    div.append(price);
    document.body.append(list);

  });
}
fetchData();

