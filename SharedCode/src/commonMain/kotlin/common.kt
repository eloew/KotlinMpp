package com.erl.mpp.mobile

import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import getHttpClient
import kotlinx.coroutines.launch
import org.kotlin.mpp.mobile.KotlinMppApi
import kotlin.coroutines.CoroutineContext

expect fun platformName(): String

fun createApplicationScreenMessage() : String {
    return "Kotlin Rocks on ${platformName()}"
}


suspend fun getApplicationScreenMessage(message: String): String {
    val api = KotlinMppApi(ConstantsShared.Endpoint, getHttpClient())
    val response = api.getApplicationScreenMessage(MessageRequest(message))
    return response.message

}