
var request;
if(window.XMLHttpRequest){
    request= new XMLHttpRequest();
}
else{
    request=new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET','data.json');
request.onreadystatechange=function (){
    if( request.readyState==4 &&request.status==200){
        var items=JSON.parse(request.responseText);
        // console.log(items);
        var output = "<ul>";
        for (var key in items){
            output += "<li>"+items[key].name+"</li>";
        }
        output += "</ul>";
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