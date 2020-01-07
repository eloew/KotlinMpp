package org.kotlin.mpp.mobile.presentation

import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import com.erl.mpp.mobile.ConstantsShared
import getHttpClient
import kotlinx.coroutines.launch
import org.kotlin.mpp.mobile.KotlinMppApi
import kotlin.coroutines.CoroutineContext

class MainPresenter(uiContext: CoroutineContext,
                              private val view: MainView): CoroutinePresenter(uiContext, view)  {

    fun getApplicationScreenMessage(request: MessageRequest) {
        var response = MessageResponse("")
        launch {
            val api = KotlinMppApi(ConstantsShared.Endpoint, getHttpClient())
            response = api.getApplicationScreenMessage(request)
        }.invokeOnCompletion {
            view.showApplicationScreenMessage(response)
        }
    }
}