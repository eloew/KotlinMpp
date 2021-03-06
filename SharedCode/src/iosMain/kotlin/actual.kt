package com.erl.mpp.mobile

import platform.UIKit.UIDevice

actual fun platformName(): String {
    return UIDevice.currentDevice.systemName() +
            " " +
            UIDevice.currentDevice.systemVersion
}

internal actual fun printThrowable(t: Throwable) {
    t.printStackTrace()
}