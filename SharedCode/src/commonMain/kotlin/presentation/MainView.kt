package org.kotlin.mpp.mobile.presentation

import com.erl.data.MessageResponse

@Deprecated("")
interface MainView : BaseView {
    fun showApplicationScreenMessage(response: MessageResponse)
}