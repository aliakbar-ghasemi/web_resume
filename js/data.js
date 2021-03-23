$(document).ready(function() {
    fetchAndroidList();
    fetchKotlinList();
    fetchFlutterList();
    fetchFrontEndList();
    fetchBackEndList();
});

function setListUI(list, id) {
    var container = document.getElementById(id);
    container.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        div = '<li class="col-md-6 p-2 list_item">' + list[i] + '</li>';
        container.innerHTML += div;
    }
}

function fetchAndroidList() {
    skils_android = [
        " Android (Java)",
        " MVVM (Model-View-ViewModel)",
        " Gson, Retrofit",
        " Google Map Api",
        " Firebase (Crashlytics, Push Notification)",
        " DataBase (Room, SQLite)",
        " Reactive Programming (LiveData, RxJava)",
        " Dependency Injection (Dagger2)",
        " Unit Test",
        " Services and Broadcast reciever",
        " Architecture Components(ViewModel, LiveData, Paging, Navigation, DataBinding)",
        " Code Documentation",
        " SOLID principles",
    ];

    setListUI(skils_android, "android_list");
}

function fetchKotlinList() {
    skils = [
        " Kotline Coroutine",
        " Dependency Injection (Koin)"
    ];

    setListUI(skils, "kotlin_list");
}

function fetchFlutterList() {
    skils = [
        "  آشنایی با فریمورک فلاتر و زبان dart",
        " آشنا با Restful APls و ارتباط با وب سرور"
    ];

    setListUI(skils, "flutter_list");
}

function fetchFrontEndList() {
    skils = [
        "  Html",
        "  Css",
        "  Bootstrap",
        "  Vue js"
    ];

    setListUI(skils, "frontend_list");
}

function fetchBackEndList() {
    skils = [
        "Familiar with Asp.Net Core"
    ];

    setListUI(skils, "backend_list");
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