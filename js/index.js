document.addEventListener("DOMContentLoaded", function () {

    $(document).ready(function () {
        $('.logo').addClass('logo-animation');
        $('select').selectric();
    })

    $('#select-menu').on('change', function () {
        $('.loading-icon').show();
        const selected = $(this).val();

        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/' + selected + '.json?api-key=eCWDoGwIaY6G5tsDbjAVN3TmgUIJ1W6S'
        })
            .done(function (data) {
                $('header').addClass('post-change-header');
                const results = data.results;

                //filter
                const filteredResults = results.filter(function (article) {
                    return article.multimedia[4];
                });
                const slicedResults = filteredResults.slice(0, 12);

                //refresher
                $('.articles').empty();

                //loop
                $.each(slicedResults, function (key, value) {
                    $('.articles').append("<a href='" + value.url + "' target='_blank'>" + "<li style='background-image: url(" + value.multimedia[4].url + "'>" + "<p>" + value.abstract + "</p>" + "</li>" + "</a>");
                })
                
            }).fail(function () {
                alert('There was an issue getting data from the NYT API');

            }).always(function () {
                $('.loading-icon').hide();
            });
    });
});
