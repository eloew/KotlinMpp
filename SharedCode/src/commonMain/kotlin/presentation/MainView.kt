package org.kotlin.mpp.mobile.presentation

import com.erl.data.MessageResponse


interface MainView : BaseView {
    fun showApplicationScreenMessage(response: MessageResponse)
}