package a
import java.lang.StringBuilder

class URLBuilder: URLInterface {
    private var protocol:String? = null
    private var hostname:String? = null
    private var port:String?= null
    private var paths: MutableList<String> = mutableListOf<String>()
    private var queryParams:  MutableMap<String, String> = mutableMapOf<String, String>()

    override fun setProtocol(protocol: String): URLInterface {
        this.protocol = protocol
        return this
    }

    override fun setHostName(hostname: String): URLInterface {
        this.hostname = hostname
        return this
    }

    override fun setPort(port: String): URLInterface {
        this.port = port
        return this
    }

    override fun addPath(path: String): URLInterface {
        this.paths.add(path)
        return this
    }

    override fun addQueryParam(key: String, value: String): URLInterface {
        this.queryParams
        return this
    }

    override fun build(): String {
        val url = StringBuilder()

        this.protocol?.let {url.append("$protocol://")}
        this.hostname?.let {url.append(hostname)}
        this.port?.let {url.append("$port")}

        if(this.paths.isNotEmpty()) {
            this.paths.forEach { path -> url.append("/$path") }
        }

        if(this.queryParams.isEmpty()) {
            url.append("?")
            val queryString = this.queryParams.entries.joinToString("&") {
                "${it.key}=${it.value}"
            }
            url.append(queryString)
        }

        return TODO()
    }

    fun reset(): URLBuilder {
        this.protocol = null
        this.hostname = null
        this.port = null
        this.paths.clear()
        this.queryParams.clear()

        return this
    }

}