//随机背景图，图源为cdn上的fgo图库
var backimg=[];
for(let i=1;i<=96;i++){
    backimg.push("url(https://cdn.jsdelivr.net/gh/henuyuanxiao/cdn/img/fgobg/"+i+".png")
};
let index =Math.ceil(Math.random() * (backimg.length-1))-1;
document.getElementById("web_bg").style.backgroundImage = backimg[index]