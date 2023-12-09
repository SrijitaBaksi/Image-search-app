const accessKey= "kpWlB1gOuwqVY39Nx0z3M-jvv3XJRRh3mfvMG5JyzYw";

const formEle= document.querySelector("form");
const input=document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore= document.getElementById("show-more-btn");

let keyword=""
let page= 1

async function searchImages(){
    keyword= input.value;
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    const results= data.results;

    if(page === 1)
    {
        searchResults.innerHTML=""
    }

    results.map((result)=>{
        const imageWrapper= document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image= document.createElement('img');
        image.src= result.urls.small;
        image.alt= result.alt_description;
        const imageLink= document.createElement('a')
        imageLink.href = result.links.html;
        imageLink.target= "_blank";
        imageLink.textContent= result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    })
    page++
    if(page>1){
        showMore.style.display="block"
    }
   
    

}
    formEle.addEventListener("submit",(e)=>{
        e.preventDefault();
        page=1;
        searchImages();
    })

    showMore.addEventListener("click",()=>{
            searchImages()
    })
    










