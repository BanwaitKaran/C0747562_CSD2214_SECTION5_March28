
var request;
if(window.XMLHttpRequest){
    request= new XMLHttpRequest();
}
else{
    request=new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET','data.xml');
request.onreadystatechange=function (){
    if( request.readyState==4 &&request.status==200){
        console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);

        var items=request.responseXML.getElementsByTagName('name');
        var output="<ul>";
        for (let i = 0; i < items.length; i++) {
            output+="<li>"+items[i].firstChild.nodeValue+
            "</li>";
        }
        output+="</ul>"

        document.getElementById('update').innerHTML=output;
    }
}
request.send();

// request.onreadystatechange=function (){
//     if( request.readyState==4 &&request.status==200){
//         //console.log(request);
//         //document.writeln(request.responseText);
//         var modify =
//             document.getElementsByTagName('li');
//        // modify[3].innerHTML=request.responseText;
//        for (let index = 0; index < modify.length; index++) {
//             modify[index].innerHTML=request.responseText;           
//        }
//     }
// }