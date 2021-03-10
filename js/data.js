$(document).ready(function() {
    fetchAndroidList();
});

function fetchAndroidList() {
    skils_android = [
        " (Java) - Android Programming",
        " Gson, Retrofit",
        " Google Map Api",
        " ( Crashlytics , Push Notification) – Firebase",
        " (Room , SQLite) – DataBase",
        " (LiveData , RxJava , RxAndroid) - Reactive Programming",
        " (Model-View-ViewModel) MVVM",
        " (Dagger2) - Dependency Injection"
    ];

    var container = document.getElementById("android_list");
    container.innerHTML = "";
    for (var i = 0; i < skils_android.length; i++) {
        div = '<li class="col-md-6 p-2 list_item"> <i class="far fa-check-circle"></i> ' + skils_android[i] + '</li>';
        container.innerHTML += div;
    }
}

// fetch('./data/android.json')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         appendData(data);
//     })
//     .catch(function(err) {
//         console.log('error: ' + err);
//     });

// function appendData(data) {
//     var mainContainer = document.getElementById("myData");
//     for (var i = 0; i < data.length; i++) {
//         var div = document.createElement("div");
//         div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//         mainContainer.appendChild(div);
//     }
// }