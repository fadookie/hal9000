//Google search API (deprecated)
console.log('Hello!');
/*
google.load('search', '1');
var searchControl;

function initialize() {
  // Create a search control
//  console.log('Google search start');
  searchControl = new google.search.SearchControl();

  // Add in a full set of searchers
  var localSearch = new google.search.LocalSearch();
//  searchControl.addSearcher(localSearch);
  searchControl.addSearcher(new google.search.WebSearch());
//  searchControl.addSearcher(new google.search.VideoSearch());
//  searchControl.addSearcher(new google.search.BlogSearch());
//  searchControl.addSearcher(new google.search.NewsSearch());
//  searchControl.addSearcher(new google.search.ImageSearch());
//  searchControl.addSearcher(new google.search.BookSearch());
//  searchControl.addSearcher(new google.search.PatentSearch());

  // Set the Local Search center point
  localSearch.setCenterPoint("Redwood City, CA");

  // tell the searcher to draw itself and tell it where to attach
  searchControl.draw(document.getElementById("searchcontrol"));
  searchControl.setOnKeepCallback(this, MyKeepHandler);

  // execute an inital search
//  console.log('Google search done');
}
google.setOnLoadCallback(initialize);
*/
        
    meSpeak.loadConfig("mespeak_config.json");
    meSpeak.loadVoice("voices/en/en.json");
  
    /*
    function loadVoice(id) {
      var fname="voices/"+id+".json";
      meSpeak.loadVoice(fname, voiceLoaded);
    }
    */
  
    /*
    function voiceLoaded(success, message) {
      if (success) {
        alert("Voice loaded: "+message+".");
      }
      else {
        alert("Failed to load a voice: "+message);
      }
    }
    */


$( "#speechToTextBox" ).on('input', function() {
    console.log('TextChange');
//    searchControl.execute($( "#speechToTextBox" ).val());
    var queryURL = 'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&' + $.param({q: $( "#speechToTextBox" ).val()}) + '&callback=?';
    console.log(queryURL);
    jQuery.getJSON(queryURL, function(data) {
//      var items = [];
        var content = data.responseData.results[0].content; 
        if(content)
        {
            var contentStrip = $('<p>'+content+'</p>').text();
            console.log(contentStrip);
            meSpeak.speak(contentStrip);
        } else {
            console.log("no content found.");
        }

        /*
      $.each(data.responseData, function(key, val) {
          console.log("Got key: " + key + " val: " + val);
      });
      */
    });
});

    /*
$( "#searchcontrol" ).bind("DOMSubtreeModified", function() {
    alert("tree changed");
});
*/

    /*
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    console.log(mutations, observer);
    // ...
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});
*/
