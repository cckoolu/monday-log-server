const STATUS = {
    "Error": 0,
    "Warn": 1,
    "Info": 2,
    "Debug": 3,
    "Trace": 4,
    "BeginCheckpoint": 5,
    "EndCheckpoint": 6,
    "Variable": 7,
    "Input": 8,
    "Output": 9
}

// 'http://localhost:8080/add_log'

export function SaturdayLog(method, url,data) {
  var request = new XMLHttpRequest();


  xmlhttp.onload = function () {
    if (xmlhttp.status != 200) {
        console.error('[ERROR] Send message to Monday Log Server...failed');
    }
    var response =xmlhttp.response;
    console.log(response)
}

xmlhttp.onerror = function(){
    console.error("[ERROR] cURL Error (" + xmlhttp.error + "):" + xmlhttp.error)
}

  request.open(method, url, false);
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(data));
}


