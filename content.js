// jQuery.ajax({
//     type: "GET",
//     url: "https://192.168.114.110:8000/",
//     dataType: "jsonp",
//     beforeSend: function (request){
//         request.withCredentials = true;
//         request.setRequestHeader("Authorization", "Basic " + btoa('admin' + ":" + 'password'));
//     },
//     success: function(responseText){
//         console.log(responseText)
//         chrome.runtime.sendMessage(responseText, function (response){console.log(response)});
//     },
//     error: function(XMLHttpRequest, textStatus, errorThrown) {
//         console.log("error");
//     }
// });