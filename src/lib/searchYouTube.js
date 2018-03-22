var searchYouTube = (options, callback) => {
  $.ajax({
    url: '',
    type: 'GET',
    data: {
      
    },
    contentType: 'application/json',
    success: function (data) {

    },
    error: function (data) {
      console.error('Failed', data);
    }
    })
};

window.searchYouTube = searchYouTube;
