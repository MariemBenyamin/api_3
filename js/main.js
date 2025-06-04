// (function getApi(){
//      var xhttp = new XMLHttpRequest();
//      xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             var data = this.responseText;  //string
//             var result = JSON.parse(data).products; //string to json (array of object)

//     var myText = "";
//     for(var i = 0; i < result.length; i++){
//         var cartoona = `
//             <div class="col-md-4 text-center mb-5">
//             <img src="${result[i].images[0]}" class="w-100" style="height: 350px">
//             <h4>${result[i].title}</h4>
//             <h5>${result[i].category}</h5>
//             <h5>${result[i].price}$</h5>
//             </div>
//         `;
//      myText = myText + cartoona;
//     }
//         document.querySelector(".test").innerHTML = myText;
//           }
//      }
//      xhttp.open("GET","https://dummyjson.com/products",true);
//      xhttp.send();

// } )();

// ====================
// fetch ... then

// (fetch("https://jsonplaceholder.typicode.com/photos")
// .then(function(data){
//     return data.json();
// })
// .then(function(result){


//     var myText = "";
//     for(var i = 0; i < result.length; i++){
//         var cartoona = `
//             <div class="col-md-4 text-center mb-5">
//             <img src="${result[i].url}" class="w-100" style="height: 350px">
//             <h4>${result[i].title}</h4>
//             <h5>${result[i].id}</h5>
//             </div>

//         `;
//      myText = myText + cartoona;
//     }
//     document.querySelector(".test").innerHTML = myText;
//     })
    
// )();
// =======================

(async function getApi (){
    var data = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    var result = await data.json();
    var result = result.recipes;

    var myText = "";
    for(var i = 0; i < result.length; i++){
        var cartoona = `
            <div class="col-md-4 text-center mb-5">
            <img src="${result[i].image_url}" class="w-100" style="height: 350px">
            <h4>${result[i].title}</h4>
            <h5>${result[i].publisher}</h5>
            </div>

        `;
     myText = myText + cartoona;
        document.querySelector(".test").innerHTML += cartoona;
    }

})();        //self invoke
