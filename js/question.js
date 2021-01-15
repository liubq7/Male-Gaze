var nextBtn=document.getElementById('next');
var camera = window.localStorage.getItem('camera')

nextBtn.onclick=function(){
    var ipt=document.getElementById('ipt').value;
    console.log(ipt)
    if(ipt){
        window.localStorage.setItem('val',ipt);
        location.href="./selfview.html";
        if (camera == "on") {          
            window.localStorage.setItem('look',"./assets/selfview/look-camera.gif");
         } else {
            window.localStorage.setItem('look',"./assets/selfview/look-black.gif");
         }
    }else{
        showError();
    }
}
function showError(){
    document.getElementById('errorText').style.display = 'block';

}