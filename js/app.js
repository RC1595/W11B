let button = document.getElementById("btn");
button.addEventListener("click", getApi);
let mainDiv="container";


function getApi(e){
    axios.request({
            method: "GET",
            url: "https://yesno.wtf/api"
        }).then(success).catch(failure);
    }

function success(response){
    console.log(response)
    let returnedImg = response.data.image;
    document.getElementById('img').src = returnedImg;
}
function failure(error){
    console.log(error);
}