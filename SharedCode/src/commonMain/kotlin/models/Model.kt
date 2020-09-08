package com.erl.mpp.mobile.models


import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import com.erl.mpp.mobile.ConstantsShared
import getHttpClient
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.launch
import org.kotlin.mpp.mobile.KotlinMppApi


class Model() {

    suspend fun getKtorMessage(message: String): String {
        val request = MessageRequest(message)
        val api = KotlinMppApi(ConstantsShared.getEndPoint(), getHttpClient())
        val response = api.getApplicationScreenMessage(request)
        return response.message
    }
}
