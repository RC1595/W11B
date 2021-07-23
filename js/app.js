let button = document.getElementById("btn");
button.addEventListener("click", getApi);

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

let btnTwo = document.getElementById('btn2');
btnTwo.addEventListener("click", fox);

function fox(){
    axios.request({
        method: "GET",
        url: "https://randomfox.ca/floof/"    
    }).then(result).catch(fail);
}

function result(returnData){
    console.log(returnData);
    let slyFox = returnData.data.image;
    document.getElementById('fox').src = slyFox;
}

function fail(err){
    console.log(err);
}