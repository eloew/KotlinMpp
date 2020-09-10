package com.erl.mpp.mobile

actual fun platformName() =  "Javascript"

internal actual fun printThrowable(t: Throwable) {
    t.printStackTrace()
}
