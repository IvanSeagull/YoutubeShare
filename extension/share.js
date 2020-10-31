
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
    getData()
  }
}


function getData (){
  
  var data = {} //тут у нас будет результат
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://192.168.1.71:8080/dataaa.json' , false);
  
  xhr.send();
  
  if (xhr.status != 200) {
    // обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
  } else {
    // вывести результат
    
    
    data = xhr.responseText;
    alert (data)
  }
    }
