import a.URLBuilder

fun main(){
    // no builder

    val userId = 5
    var urlbuilder = URLBuilder()

    val url = urlbuilder
        .setProtocol("http")
        .setHostName("api.example.com")
        .setPort("8000")
        .addPath("users")
        .addPath(userId.toString())
        .addPath("details")
        .addQueryParam("city", "Coatzacoalcos")
        .build()

    println(url)
}