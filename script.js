const correctDate="07/06/2026";
const image=["image/1.jpg"];
let noCount=0,idx=0;
function show(id){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));document.getElementById(id).classList.add("active");}
function checkDate(){if(dateInput.value===correctDate)show("page2");else dateError.textContent="❌ Oops! Wrong date. Try Again.";}
function moveNoButton(){noCount++;let n=noBtn,y=yesBtn;n.style.position="absolute";n.style.left=Math.random()*70+"%";n.style.top=Math.random()*70+"%";n.style.transform=`scale(${Math.max(.2,1-noCount*.1)})`;y.style.transform=`scale(${1+noCount*.15})`;}
function yesClicked(){show("page3");}
function openGallery(){show("page4");document.getElementById("video").play().catch(()=>{});slide();}
function slide(){let im=document.getElementById("slideImage");im.src=images[idx];idx=(idx+1)%images.length;setTimeout(slide,2500);}