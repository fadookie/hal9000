meSpeak.loadConfig("mespeak_config.json");
meSpeak.loadVoice("voices/en/en.json");

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
            console.log(data.responseData.results[0]. urlcontentStrip);
            meSpeak.speak(contentStrip);
        } else {
            console.log("no content found.");
        }

    });
});
