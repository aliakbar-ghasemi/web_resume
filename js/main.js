var strings;

$(document).ready(function() {
    //initStrings();

});

function getLanguage() {
    (localStorage.getItem('strings') == null) ? setLanguage('en'): false;
    $.ajax({
        url: '/language/' + localStorage.getItem('language') + '.json',
        dataType: 'json',
        async: false,
        dataType: 'json',
        success: function(lang) { strings = lang }
    });
}

function setLanguage() {
    var lang = document.getElementById("langselector").value;
    //print("lang:"+lang)
    localStorage.setItem('language', lang);
    if (lang == "en") {
        document.getElementById("main").style.direction = "ltr";
        document.getElementById("main").style.textAlign = "initial";
    }
    if (lang == "fa") {
        document.getElementById("main").style.direction = "rtl";
        document.getElementById("main").style.textAlign = "initial";
    }

    initStrings();
}
/**
 * set string depends on language
 */
function initStrings() {
    getLanguage();
    $('#avatar_name').text(language.avatar_name);
    $('#avatar_descryption').text(language.avatar_descryption);
    $('.skils_title').text(language.skils);
    $('#about_me').text(language.aboutme)
}