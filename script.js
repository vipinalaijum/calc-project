function buttonclick(val){
    document.getElementById("input").value+=val;
}
function clearDisply(){

    document.getElementById("input").value="";
}
function eqalClick(){
    var text=document.getElementById("input").value
    var result=eval(text)
    document.getElementById("input").value=result
}