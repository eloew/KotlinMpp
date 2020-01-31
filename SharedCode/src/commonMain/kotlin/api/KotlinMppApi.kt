package org.kotlin.mpp.mobile

import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import com.erl.mpp.mobile.ConstantsShared
import io.ktor.client.HttpClient
import io.ktor.client.request.*

import io.ktor.http.*

class KotlinMppApi(var endPoint: String, var client: HttpClient) {

    suspend fun getApplicationScreenMessage(request: MessageRequest): MessageResponse = client.post {
        apiUrl("${ConstantsShared.root}/getApplicationScreenMessage")
        method = HttpMethod.Post
        contentType(ContentType.Application.Json)
        body = request
    }

    private fun HttpRequestBuilder.json() {
        contentType(ContentType.Application.Json)
    }

    private fun HttpRequestBuilder.apiUrl(path: String, userId: String? = null) {
        if (userId != null) {
            header(HttpHeaders.Authorization, "Bearer $userId")
        }
        header(HttpHeaders.CacheControl, "no-cache")
        url {
            takeFrom(endPoint)
            encodedPath = path
        }
    }
}