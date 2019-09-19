package org.kotlin.mpp.mobile.model

import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import getHttpClient
import org.kotlin.mpp.mobile.KotlinMppApi
import org.kotlin.mpp.mobile.presentation.DataRepository

class KotlinMppDataRepository(var endPoint: String): DataRepository {


    var idUser: Int = 0

    private val api = KotlinMppApi(endPoint, getHttpClient())

    override suspend fun applicationScreenMessage(request: MessageRequest): MessageResponse {
        return api.getApplicationScreenMessage(request)
    }

}