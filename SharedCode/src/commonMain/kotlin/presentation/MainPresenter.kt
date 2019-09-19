package org.kotlin.mpp.mobile.presentation

import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import kotlinx.coroutines.launch
import kotlin.coroutines.CoroutineContext

class MainPresenter(uiContext: CoroutineContext,
                              private val view: MainView,
                              private val repository: DataRepository): CoroutinePresenter(uiContext, view)  {

    fun getApplicationScreenMessage(request: MessageRequest) {
        var response = MessageResponse("")
        launch {
            response = repository.applicationScreenMessage(request)
        }.invokeOnCompletion {
            view.showApplicationScreenMessage(response)
        }
    }
}