var searchYouTube = ({key, query, max}, callback) => {
      $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        type: 'GET',
        data: {
          part: 'snippet',
          key: key,
          q: query,
          maxResults: max,
          type: 'video',
          videoEmbeddable: true
        },
        contentType: 'application/json',
        success: function (data) {
            return callback(data.items);
        },
        error: function (data) {
            console.error('Failed', data);
        }
    })
};

window.searchYouTube = searchYouTube;
