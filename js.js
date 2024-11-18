const Gparent=document.getElementById("grand");
Gparent.addEventListener("click",(e)=>{
    setTimeout(()=>{
        console.log("grand parent clicked");
        Gparent.style.backgroundColor="red"
    },1000)
},true)

const P=document.getElementById("parent");
P.addEventListener("click",(e)=>{
    setTimeout(()=>{
        console.log(" parent clicked");
        P.style.backgroundColor="blue"
    },2000)

},false)

const C=document.getElementById("child");
C.addEventListener("click",(e)=>{
    setTimeout(()=>{
        console.log(" child clicked");
        C.style.backgroundColor="green"
    },3000)
},false)


const G= document.getElementById("grand1");
G.addEventListener("click", (e) => {
    e.stopPropagation();
    setTimeout(() => {
        console.log("grand parent clikced");
        G.style.backgroundColor = "green"
    }, 1000)
}, true)

const A = document.getElementById("parent1");
A.addEventListener("click", (e) => {
    setTimeout(() => {
        console.log(" parent clikced");
        A.style.backgroundColor = "red"
    }, 2000)
}, false)

const D= document.getElementById("child1");
D.addEventListener("click", (e) => {
    setTimeout(() => {
        D.style.backgroundColor = "pink"
        console.log("child clikced");
    }, 3000)
}, true)


const g= document.getElementById("grand2");
g.addEventListener("click", (e) => {
    setTimeout(() => {
        console.log("grand parent clikced");
        g.style.backgroundColor = "gray"
    }, 1000)
}, true)

const a = document.getElementById("parent2");
a.addEventListener("click", (e) => {
    setTimeout(() => {
        console.log(" parent clikced");
        a.style.backgroundColor = "pink"
    }, 2000)
}, false)

const d= document.getElementById("child2");
d.addEventListener("click", (e) => {
    e.stopPropagation();
    setTimeout(() => {
        d.style.backgroundColor = "black"
        console.log("child clikced");
    }, 3000)
}, true)



