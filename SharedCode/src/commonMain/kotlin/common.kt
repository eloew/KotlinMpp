package com.erl.mpp.mobile

import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import kotlinx.coroutines.launch
import org.kotlin.mpp.mobile.KotlinMppApi

expect fun platformName(): String

fun createApplicationScreenMessage() : String {
    return "Kotlin Rocks on ${platformName()}"
}

