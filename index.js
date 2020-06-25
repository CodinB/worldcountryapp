var items = [];
var serverURL="https://restcountries.eu/rest/v2/all";

class DisplayCountry{
    constructor(name,population,region,capital){
        this.name=name;
        this.population=population;
        this.region=region;
        this.capital=capital;
    }
}

function getMaps(){

    $.ajax({
        url:serverURL,
        type:"Get",
        success:function(res){
            console.log("it works",res)
        //    console.log(res.nativeName)
        //    document.getElementById("name").innerHTML=res.nativeName;
        //    console.log(res.population)
        //    document.getElementById("population").innerHTML="Population: " + res.population
        //    console.log(res.region)
        //    document.getElementById("region").innerHTML="Region: " + res.region
        //    console.log(res.subregion)
        //    console.log(res.capital)
        //    document.getElementById("capital").innerHTML="Capital: " + res.capital
        //    console.log(res.topLevelDomain[0])
        //    console.log(res.currencies[0].name)
        //    console.log(res.languages[0].name)
        //    console.log(res.borders)
        //    console.log(res.flag)

           for(var i=0;i<res.length;i++){
               var countryObject = res[i];
               addCountry(countryObject)
           }
            
        },
        error:function(details){
            console.log("error",details)
        }
    })
}

function addCountry(res){
    var layout = `
    <div id="${res.alpha3Code}" class="country-box">
                    <img class="flag" src="${res.flag}" alt="">
                    <div class="country-details">
                        <p>${res.name}</p>
                        <p>Population: ${res.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p> 
                        <p>Region: ${res.region}</p>
                        <p>Capital: ${res.capital}</p>
                    </div>
                </div>
    `
    $("#countries-div").append(layout);
}

function search(){
    //if input is included in res.name
    //#res.alpha3Code display
    //hide the rest
}

function init(){
    getMaps();
}

window.onload = init;