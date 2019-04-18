function(msg) {// document searhing and modification techniques
  var log = document.getElementById("debuglog");

  if (!log) {
    log = document.createElement("div");
    log.id = "debug";
    log.innerHTML = "<h1>Debug Log</h1>";
    document.body.appendChild(log);
  }
  var pre = document.createElement("pre");
  var text = document.createTextNode(msg);
  pre.appendChild(text);
  log.appendChild(pre);
}
