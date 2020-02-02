package services

import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import com.erl.mpp.mobile.ConstantsShared
import kotlinx.coroutines.await
import kotlinx.coroutines.withContext
import kotlinx.serialization.json.Json
import kotlinx.serialization.list
import org.w3c.fetch.RequestInit
import kotlin.browser.window
import kotlin.coroutines.CoroutineContext
import kotlin.js.json

class KotlinMaapApiService(private val coroutineContext: CoroutineContext) {

    suspend fun getMessage(message: String): String {
        val url = "${ConstantsShared.Endpoint}/${ConstantsShared.root}/${ConstantsShared.messageCall}"
        console.log(url)
        val response = post(url, message)
        val messageResponse =  Json.parse(MessageResponse.serializer(), response)
        return messageResponse.message
    }

    private suspend fun fetch(url: String): String {
        return withContext(coroutineContext) {
            val response = window.fetch(url, RequestInit("GET", headers = json(
                "Accept" to "application/json",
                "Content-Type" to "application/json"
            ))).await()

            response.text().await()
        }
    }
    private suspend fun post(url: String, message: String): String {

        return withContext(coroutineContext) {
            val request = MessageRequest(message)
            val response = window.fetch(url, RequestInit("POST", headers = json(
                "Accept" to "application/json",
                "Content-Type" to "application/json",
                "Access-Control-Allow-Origin" to "*"
            ),body = JSON.stringify(request)

            )).await()

            response.text().await()
        }
    }
}