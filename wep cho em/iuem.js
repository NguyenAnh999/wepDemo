//Thay phần kịch bản bằng kịch bản của bạn
var kichban = [
    ['QAnh à, anh có điều muốn nói','Anh nói đi'],
    ['Anh muốn hỏi em là:....','Đừng ngại, anh cứ nói đi :>']
]
//Thay loiToTinh bằng lời tỏ tình của bạn
var loiToTinh = 'Em có yêu anh không?'
//Thay lời xác nhận bằng lời xác nhận của bạn
var xacnhan = 'Anh cũng yêu em :>';
//Tốc độ in chữ ra
var tocDo = 50;
//Khi chọn Không thì sẽ thông báo ra:
var khiChonKhong = 'Đừng ngoan cố thế chọn nút kia đi!'
var linkToMess = 'https://www.facebook.com/profile.php?id=100025970529346&mibextid=LQQJ4d'


document.getElementById("result").style.width="fit-content"
document.getElementById("result").style.display="none"
var imgNumber = 0
function imgChange(){
    if (imgNumber==0) {
          document.getElementById("result").innerHTML="<img class='anh'  src='../media/tải xuống.jpg'  alt=''>"
          imgNumber=1
          console.log(imgNumber);
          
    }else{
          document.getElementById("result").innerHTML="<img class='anh'  src='../media/tải xuống (1).jpg'  alt=''>"
          imgNumber=0
          console.log(imgNumber);
    }
    
}

var i = 0;
var l=0,k=0;
function typeKichban() {

// document.getElementById("start").style.display="none"
if (l < kichban[0][0].length) {
    document.getElementById("titleKichBan").innerHTML += kichban[0][0].charAt(l);
    l++;
    setTimeout(typeKichban, tocDo );
}else{
    setTimeout(()=>{
        document.getElementById("ansKichBan").innerHTML = `<button class="button-55" role="button">${kichban[0][1]}</button>`
    }, tocDo );
}
}
typeKichban()
document.getElementById("ansKichBan").onmousedown=()=>{i=0;k+=1;l=0;document.getElementById("titleKichBan").innerHTML="";next()}
function next() {

// document.getElementById("start").style.display="none"
if (l < kichban[0][0].length) {
    document.getElementById("titleKichBan").innerHTML += kichban[1][0].charAt(l);
    l++;
    setTimeout(next, tocDo );
}else{
    setTimeout(()=>{
        document.getElementById("ansKichBan").innerHTML = `<button class="button-55" role="button">${kichban[1][1]}</button>`
    }, tocDo );
}
if(k==2){
    document.getElementById("kichban").style.transition="2s"
    document.getElementById("kichban").style.transform="translateY(-100rem)"
    k+=1;
}if(k==3){
    setTimeout(()=>{
        document.getElementById("mainQues").style.transform="translateY(-20rem)"
    }, 1000 );
    setTimeout(()=>{
        typer()
    }, 1000 );
    
}
}

function hate() {
alert(khiChonKhong)
}
var n=0;
function typer() {
// document.getElementById("start").style.display="none"
if (n < loiToTinh.length) {
    document.getElementById("loiToTinh").innerHTML += loiToTinh.charAt(n);
    n++;
    setTimeout(typer, tocDo );
}
}

function typeWriter() {
document.getElementById("hate").style.display="none"
document.getElementById("ques").style.display="none"
document.getElementById("mainQues").style.display="none"
document.getElementById("main").classList.remove("hidden")
document.getElementById("ques").style.marginTop="0"
// document.getElementById("start").style.display="none"
if (i < xacnhan.length) {
    document.getElementById("main").innerHTML += xacnhan.charAt(i);
    i++;
    setTimeout(typeWriter, tocDo );
}else {
    document.getElementById("result").style.display="block"
    setInterval(imgChange, 300);
    setTimeout(() => {
        document.getElementById("linkToFB").style.display="block"   
    }, 2000);
   
}
}
document.getElementById("hate").onmouseover=()=>{
// document.getElementById("hate").style.position="fixed"
document.getElementById("hate").style.transform=`translate(${(Math.floor(Math.random() * 4)?Math.floor(Math.random() * 4):1)*100}px,${Math.floor(Math.random() * 4)*100}px)`
}

document.getElementById("linkToFB").innerHTML=
`   <a href='${linkToMess}'>
    <button class="button-55" role="button">Nói với anh tình cảm của em nào:></button>
</a>`



