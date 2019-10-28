document.addEventListener("DOMContentLoaded", function () {


    $('#select-menu').on('change', function () {
        const selected = $(this).val();
        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/' + selected + '.json?api-key=eCWDoGwIaY6G5tsDbjAVN3TmgUIJ1W6S'
        })
        .done(function (data) {
            $('header').addClass('loading');
            const results = data.results;
            console.log(results);

            const filteredResults = results.filter(function(article){
                console.log("article", article);
            return article.multimedia[4];
            });
            const slicedResults = filteredResults.slice(0, 12);
            
            console.log('filtered', filteredResults)
            $('.articles').empty();

            $.each(slicedResults, function (key, value) {
            $('.articles').append("<a href='" + value.url + "' target='_blank'>" + "<li style='background-image: url(" + value.multimedia[4].url + "'>" + "<p>" + value.abstract + "</p>" + "</li>" + "</a>");
            })
        })
    });

});
