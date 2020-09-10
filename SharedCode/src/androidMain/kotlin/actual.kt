package com.erl.mpp.mobile

actual fun platformName() = "Android"

internal actual fun printThrowable(t: Throwable) {
    t.printStackTrace()
}
