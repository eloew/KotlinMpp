package org.kotlin.mpp.mobile.presentation

@Deprecated("")
interface BaseView {
    fun showError(error: Throwable)
    fun showError(message: String)
}