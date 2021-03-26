var strings;

$(document).ready(function() {
    //loadLanguage();
    //initStrings();
    setLanguage();
});

function loadLanguage() {

    // if (localStorage.getItem('language') == null) {
    //     setLanguage('fa')
    // }
    $.ajax({
        url: '/language/' + localStorage.getItem('language') + '.json',
        dataType: 'json',
        async: true,
        success: function(lang_strings) {
            strings = lang_strings;
            initStrings();
        }
    });
}

function setLanguage(lang) {
    //var lang = document.getElementById("langselector").value;
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

    loadLanguage();
}
/**
 * set string depends on language
 */
function initStrings() {
    //loadLanguage();
    $('#avatar_name').text(strings.avatar_name);
    $('#avatar_descryption').text(strings.avatar_descryption);
    $('#about_me').text(strings.aboutme);
    // $('.skils_title').text(strings.skils);
    setStringListUI("profileInfoList", strings.profileInfoList);
}

function setStringListUI(id, jsonData) {
    var container = document.getElementById(id);
    container.innerHTML = "";
    Object.keys(jsonData).forEach(function(key) {
        var value = jsonData[key];
        div = '<p class="px-2">' + key + " : " + value + '</p>';
        container.innerHTML += div;
    });
    // for (var i = 0; i < list.length; i++) {
    //     div = '<p class="px-2">' + list[i] + '</p>';
    //     container.innerHTML += div;
    // }
}