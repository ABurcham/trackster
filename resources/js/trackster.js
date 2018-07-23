var Trackster = {};
$(document).ready(function(){
  $('#search-button').click(function(){
    Trackster.searchTracksByTitle($('#search-input').val());
  });
});

const API_KEY = '439b2b133f043b578cf1b99d6ca39ef3';
/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    success: function(response) {
      Trackster.renderTracks(response.results.trackmatches.track);
    }
  });
};
/*User Interactions with the Button*/
