function toggle()
{
  var tag = document.getElementByld( "chart" );
  var hid = ( tag.style.visibility !== "visible");
  tag.style.visibility = (hid) ? "visible" : "hidden" ;
  tag.style.height = (hid) ? "auto" : "0px" ;
}
