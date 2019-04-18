function log() {// a simple logging method that works on all browsers
  try {// an attempt to log in the most common fashion
    console.log.apply(console, arguments);
  }
  catch(e) {// catching failure
    try {// an attempt to log the Opera way
      opera.postError.apply(opera, arguments);
    }
    catch(e){
      alert(Array.prototype.join.call( arguments, " "));// alert if all fails, the old way of logging
    }
  }
}
