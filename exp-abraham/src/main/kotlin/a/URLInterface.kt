package a

interface URLInterface {
    fun setProtocol(protocol: String): URLInterface
    fun setHostName(hostname: String): URLInterface
    fun setPort(port: String): URLInterface
    fun addPath(path: String): URLInterface
    fun addQueryParam(key: String, value: String): URLInterface
    fun build(): String

}