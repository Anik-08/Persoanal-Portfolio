document.getElementById("Download_resume").addEventListener("click",()=>{
    let loc="images/Anik_Tiwary.pdf";
    let link = document.createElement("a");
    link.href=loc;
    link.download="Anik_Tiwary.pdf" 

    link.click();

});

document.getElementById("scroll_btn").addEventListener("click",()=>{
    
    let rect=document.querySelector(".box4").getBoundingClientRect();
    let scrollPos=window.scrollY + rect.top;
    window.scrollTo({
        top: scrollPos,
        behavior: "smooth"
    })
})

document.getElementById("home").addEventListener("click",()=>{
    
    let rect=document.querySelector("main").getBoundingClientRect();
    let scrollPos=window.scrollY + rect.top - 80;
    window.scrollTo({
        top: scrollPos,
        behavior: "smooth"
    })
})

document.getElementById("about").addEventListener("click",()=>{
    
    let rect=document.querySelector(".box3").getBoundingClientRect();
    let scrollPos=window.scrollY + rect.top -80;
    window.scrollTo({
        top: scrollPos,
        behavior: "smooth"
    })
})

document.getElementById("skills").addEventListener("click",()=>{
    
    let rect=document.querySelector(".box1").getBoundingClientRect();
    let scrollPos=window.scrollY + rect.top -80;
    window.scrollTo({
        top: scrollPos,
        behavior: "smooth"
    })
})

document.getElementById("project").addEventListener("click",()=>{
    
    let rect=document.querySelector(".box2").getBoundingClientRect();
    let scrollPos=window.scrollY + rect.top - 80;
    window.scrollTo({
        top: scrollPos,
        behavior: "smooth"
    })
})

document.getElementById("temp_git").addEventListener("click",()=>{
    window.location.href = "https://github.com/Anik-08/Temperature-Convertor";
});

document.getElementById("temp_live").addEventListener("click",()=>{
    window.location.href = "https://anik-08.github.io/Temperature-Convertor/";
});

document.getElementById("tic_git").addEventListener("click",()=>{
    window.location.href = "https://github.com/Anik-08/Tic-Tac-Toe";

});

document.getElementById("tic_live").addEventListener("click",()=>{
    window.location.href = "https://anik-08.github.io/Tic-Tac-Toe/";

});

const path = require('path');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join('C:\Users\anikt\OneDrive\Desktop\Web Development\projects\portfolio\public', 'public', 'index.html'));
});
