console.log('This would be the main JS file.');

xhttp=new XMLHttpRequest();
xhttp.open("GET","reports/checkstyle.xml",false);
xhttp.send();
xmlDoc=xhttp.responseXML;

totalerrors = xmlDoc.getElementsByTagName( "error" ).length;
document.write(totalerrors);

// for (var i=0;i<totalerrors;i++)
// { 
// 	txt=xmlDoc.getElementsByTagName("error")[i].getAttribute("message");
// 	document.write(txt, '<br>');
// }

