package org.kotlin.mpp.mobile.presentation

import com.erl.data.MessageRequest
import com.erl.data.MessageResponse

interface DataRepository {
    suspend fun applicationScreenMessage(request: MessageRequest): MessageResponse
}
