package com.erl.mpp.mobile.api

import com.erl.data.MessageRequest
import com.erl.mpp.mobile.ConstantsShared
import getHttpClient
import kotlinx.coroutines.CoroutineScope
import org.kotlin.mpp.mobile.KotlinMppApi
import kotlin.coroutines.CoroutineContext

class KotlinMppApiJs(override val coroutineContext: CoroutineContext): CoroutineScope {
    suspend fun getApplicationScreenMessage(coroutineContext: CoroutineContext, message: String): String {
        val api = KotlinMppApi(ConstantsShared.Endpoint, getHttpClient())
        val response = api.getApplicationScreenMessage(MessageRequest(message))
        return response.message
    }

}