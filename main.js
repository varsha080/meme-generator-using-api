const btn = document.getElementById('gen-meme');
const memeimg = document.getElementById('meme-img');
const url = 'https://meme-api.com/gimme/';
const subreddits = ["catmemes", "me_irl","dogmemes","wholesomememes"]
alert('hyee')
let getmeme= () =>{
    let randomsubred = subreddits[ Math.floor(Math.random()* 4)];
    fetch(url+randomsubred).then(resp => resp.json()).
    then((data) =>{
        console.log(data);
        memeimg.setAttribute("src",data.url);
    })
}

btn.addEventListener("click", getmeme);
getmeme();
