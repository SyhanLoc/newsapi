/*global $ APIKEY*/ //you need this 
$(document).ready(function() { 
    $.ajax({ //ajax grabs the sources from api to list infomation
        method: "GET", // use CAPS
        url: "https://newsapi.org/v2/sources", //the api source 
        data: { country:"us", language:"en", category: "", apiKey: APIKEY }, // links API key to github repo
        success: function(data){
                for (var i = 0; i < data.sources.length; i++) {
                    var source = document.createElement("OPTION"); 
                    source.setAttribute("value", data.sources[i].id); 
                    source.innerHTML = data.sources[i].name; 
                    document.getElementById("pickThis").appendChild(source); 
                }
            }    
        });
    });
        $('#source').submit(function(event) { 
        event.preventDefault();// wont work without this
        $.ajax({  
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: {sources: (document.getElementById("pickThis").value), apiKey: APIKEY}, 
            success: function(data){
                console.log(data);
            for (var i = 0; i < data.articles.length; i++) {
                var headlines = document.createElement("LI"); 
                headlines.innerHTML = data.articles[i].title; 
                document.getElementById("topStories").appendChild(headlines); 
            }    
        }
    });
});