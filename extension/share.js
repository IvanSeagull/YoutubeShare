let a = ''
let button = document.getElementById("share_button")
const b = 'watch?v='
const c = 'embed/'
button.onclick = function(){chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  a = (tabs[0].url)
  edit();
});};

function edit (){
  
  if (a.includes(b)) {
    let d = (a.replace(b,c))
    alert(d)
  }
}

