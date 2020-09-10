package com.erl.mpp.mobile

import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import getHttpClient
import io.ktor.client.HttpClient
import io.ktor.client.request.get
import io.ktor.client.request.post
import io.ktor.http.ContentType
import io.ktor.http.HttpMethod
import io.ktor.http.contentType
import kotlinx.coroutines.launch
import org.kotlin.mpp.mobile.KotlinMppApi
import kotlin.coroutines.CoroutineContext

expect fun platformName(): String
internal expect fun printThrowable(t: Throwable)  //From KampKit

fun createApplicationScreenMessage() : String {
    return "Kotlin Rocks on ${platformName()}"
}


suspend fun getApplicationScreenMessage(message: String): String {
    try {
        val api = KotlinMppApi(ConstantsShared.getEndPoint(), getHttpClient())
        val response = api.getApplicationScreenMessage(MessageRequest(message))
        return response.message
    } catch (e: Exception) {
        return e.message.toString()
    }
}


suspend fun test1(): String {
    try {
        val client = getHttpClient()
        val respone = client.get<MessageResponse>("${ConstantsShared.getEndPoint()}/${ConstantsShared.root}/test")
        return respone.message
    } catch (e: Exception) {
        return e.message.toString()
    }
}

