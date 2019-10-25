document.addEventListener("DOMContentLoaded", function () {


    $('#select-menu').on('change', function () {
        const selected = $(this).val();
        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/' + selected + '.json?api-key=eCWDoGwIaY6G5tsDbjAVN3TmgUIJ1W6S'
        })
        .done(function (data) {
            console.log(data.results);
            $('.articles').empty();
        
            if (data.results) {
                data.results.splice(13, data.results.length);
            }
            $.each(data.results, function (key, value) {
                if (value.multimedia.length > 0) {
                    $('.articles').append("<a href='" + value.url + "' target='_blank'>" + "<li style='background-image: url(" + value.multimedia[4].url + "'>" + "<p>" + value.abstract + "</p>" + "</li>" + "</a>");
                }
            })
        })
        // if (selected == 'home') {
        //     $.ajax({
        //         method: 'GET',
        //         url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=eCWDoGwIaY6G5tsDbjAVN3TmgUIJ1W6S'
        //     })
        //         .done(function (data) {
        //             console.log(data.results);
        //             $('.articles').empty();
        //             $.each(data.results, function (key, value) {
        //                 if (value.multimedia[4]) {
        //                     $('.articles').append("<a href='" + value.url + "' target='_blank'>" + "<li style='background-image: url(" + value.multimedia[4].url + "'>" + "<p>" + value.abstract + "</p>" + "</li>" + "</a>");
        //                     if (data.results) {
        //                         data.results.splice(13, data.results.length);
        //                     }
        //                 }
        //             })
        //         })
        // } else if (selected == 'arts') {
        //     $.ajax({
        //         method: 'GET',
        //         url: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=eCWDoGwIaY6G5tsDbjAVN3TmgUIJ1W6S'
        //     })
        //         .done(function (data) {
        //             console.log(data.results);
        //             $('.articles').empty();
        //             $.each(data.results, function (key, value) {
        //                 console.log(value.multimedia)
        //                 // if (value.multimedia.length > 0 ) {
        //                 //     $('.articles').append("<a href='" + value.url + "' target='_blank'>" + "<li style='background-image: url(" + value.multimedia[4].url + "'>" + "<p>" + value.abstract + "</p>" + "</li>" + "</a>");
        //                     // if (data.results) {
        //                     //     data.results.splice(13, data.results.length);
        //                     // }
        //                 // }
        //             })
        //         })
        // }
    });

});

// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=eCWDoGwIaY6G5tsDbjAVN3TmgUIJ1W6S
// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=eCWDoGwIaY6G5tsDbjAVN3TmgUIJ1W6S
// https://api.nytimes.com/svc/topstories/v2/business.json?api-key=eCWDoGwIaY6G5tsDbjAVN3TmgUIJ1W6S
// https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=eCWDoGwIaY6G5tsDbjAVN3TmgUIJ1W6S
// https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=eCWDoGwIaY6G5tsDbjAVN3TmgUIJ1W6S
// https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=eCWDoGwIaY6G5tsDbjAVN3TmgUIJ1W6S