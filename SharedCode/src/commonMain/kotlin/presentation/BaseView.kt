package org.kotlin.mpp.mobile.presentation

interface BaseView {
    fun showError(error: Throwable)
    fun showError(message: String)
}