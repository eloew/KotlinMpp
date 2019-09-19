import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import io.ktor.client.HttpClient
import io.ktor.client.features.defaultRequest
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.features.json.serializer.KotlinxSerializer
import io.ktor.http.*
import kotlinx.serialization.json.JSON

fun getHttpClient(): HttpClient {
    val client = HttpClient {
        install(JsonFeature) {
            serializer = KotlinxSerializer(JSON.nonstrict).apply {
                setMapper(MessageRequest::class, MessageRequest.serializer())
                setMapper(MessageResponse::class, MessageResponse.serializer())
            }
        }
    }
    return client
}

private val Url.hostWithPortIfRequired: String get() = if (port == protocol.defaultPort) host else hostWithPort
private val Url.fullUrl: String get() = "${protocol.name}://$hostWithPortIfRequired$fullPath"