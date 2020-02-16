package com.erl.mpp.mobile

object ConstantsShared {
    /*
    const val httpProtocol = "http"
    const val ip = "192.168.1.67"
    const val port = "8081"
    */


    //https://bluenote.azurewebsites.net
    const val httpProtocol = "https"
    const val ip = "bluenote.azurewebsites.net"
    const val port = ""



    const val root = "kotlinmppktor"
    const val messageCall = "getApplicationScreenMessage"


    fun getEndPoint(): String {
        if (port.isNotEmpty())
            return "${httpProtocol}://${ip}:${port}"
        else
            return "${httpProtocol}://${ip}"
    }
}
