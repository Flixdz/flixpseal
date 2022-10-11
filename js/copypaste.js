function csclink(elementID){
var jc = document.getElementById(elementID).href;
cp(jc);
}
function jscopy(elementID){
var jc = document.getElementById(elementID).textContent;
cp(jc);
}
function cp(jc) {
   var el = document.createElement('textarea');
   el.value = jc;
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   el.select();
   document.execCommand('copy');
   document.body.removeChild(el);  
   paste();
  }