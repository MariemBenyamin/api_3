(function getApi(){
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = this.responseText;  //string
            var result = JSON.parse(data).products; //string to json (array of object)

    var myText = "";
    for(var i = 0; i < result.length; i++){
        var cartoona = `
            <div class="col-md-4 text-center mb-5">
            <img src="${result[i].images[0]}" class="w-100" style="height: 350px">
            <h4>${result[i].title}</h4>
            <h5>${result[i].category}</h5>
            <h5>${result[i].price}$</h5>
            </div>
        `;
     myText = myText + cartoona;
    }
        document.querySelector(".test").innerHTML = myText;
          }
     }
     xhttp.open("GET","https://dummyjson.com/products",true);
     xhttp.send();

} )();

