const apikey = "8546c2b212ac40c1bc6d67b7d43cf3aa";
const url ="https://newsapi.org/v2/everything?q="

window.addEventListener("load", ()=>fetchnews("India"));

async function fetchnews(query){
    const res = await fetch(`${url}${query}&apiKey=${apikey}`);
    const data = await res.json()
    // console.log(data)
    binddata(data.articles)
}

function binddata(articles){
    const cardscontainer = document.getElementById("cards-container")
    const newstemplate = document.getElementById("templet-news-card")

    cardscontainer.innerHTML = "";  // navin call kela tr adhicha card emty karave nahitr tech cards part part yetat

    articles.forEach(article => {
        if(!article.url) return;
        const cardclone = newstemplate.content.cloneNode(true);
        fillThedataInCard(cardclone,article);
        cardscontainer.appendChild(cardclone);

        
    });

}

function fillThedataInCard(cardclone,article){
    const newsimg= cardclone.querySelector("#news-img")
    const newsTitle= cardclone.querySelector("#news-title")
    const newssource= cardclone.querySelector("#news-source")
    const newsDescription= cardclone.querySelector("#news-desc")

    newsimg.src = article.urlToImage;
    newsTitle.innerHTML=article.title;
    newsDescription.innerHTML=article.description;

    const date = new Date(article.publishedAt).toISOString("en-US",{
        timeZone : "Asia/Jakarta"
    })

    newssource.innerHTML=`${article.source.name} - ${date}`

    cardclone.firstElementChild.addEventListener("click", ()=>{
        window.open(article.url, "_blank");
    
        // _blank means new tab vr jat
    })

    


}

let currentnavitem=null;

function navitemclick(id){
    if(id=== "seached"){
        
    }else{
        const nl = document.getElementById("searched-item");
        nl.innerHTML=""
    
    fetchnews(id);
    const item=document.getElementById(id);
    currentnavitem?.classList.remove('active')
    currentnavitem=item;
    currentnavitem.classList.add('active')
    }

    // const appended = 
}

const searchbutton = document.getElementById('search-button')
const searchText = document.getElementById('search-input')

searchbutton.addEventListener("click", ()=>{

    const query=searchText.value;
    if(!query){
        return;
    }



    fetchnews(query)
    
    

    const nl = document.getElementById("searched-item");
    nl.innerHTML=searchText.value;
    currentnavitem?.classList.remove('active')
    currentnavitem=nl;
    currentnavitem.classList.add('active')

    searchText.value=""
})

function reload(){
    window.location.reload();
}


