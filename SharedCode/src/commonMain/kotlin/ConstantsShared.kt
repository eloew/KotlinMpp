package com.erl.mpp.mobile

object ConstantsShared {

    const val httpProtocol = "http"
    const val ip = "172.20.20.20"
    const val port = "8081"


    const val root = "kotlinmppktor"
    const val messageCall = "getApplicationScreenMessage"


    fun getEndPoint(): String {
        if (port.isNotEmpty())
            return "${httpProtocol}://${ip}:${port}"
        else
            return "${httpProtocol}://${ip}"
    }
}
