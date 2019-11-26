# Instanews <h1>

Second website project: Pulls content from NYT via API. 
The purpose of the project is to incorporate elements of jquery, ajax, json, sass/scss, and api with previously learned html and css. By doing so, this project pulls content from NYT in different categories such as business, fashion, sports etc. and loads them onto the website, displaying 12 articles.

# Tech/Framework <h2>

Languages used are: HTML, CSS -> SASS/SCSS, JAVASCRIPT/JQUERY
Notable: GULP, JSON, AJAX, API

# Goal & Learning <h2>

HTML is used to create the general layout of the website. It provides classes and IDs that can be referenced for CSS/SASS/SCSS and Javascript/Jquery. The select form and header is created through html. Animations for the header and article are styled through CSS/SASS/SCSS. The articles are loaded through the "GET" method where it obtains information via the API url provided. In the Javascript/Jquery function, when done, will append 12 articles through a loop. A filter is applied, where all articles without a certain size of image will be ignored and not appended. JQuery is used to create a loading icon through adding a class. It appears after the select form changes, but disappears when the articles are appended. If the articles fail to load, an error message will be shown. 

# Instructions <h2>

Navigate through the different types of articles through the select form. The select form contains a "Home", "Arts", "Sports", "Business", "Technology", and "Fashion" option. Each selection will append 12 excerpts of articles, where each article contains a link to it's article in NYT. 