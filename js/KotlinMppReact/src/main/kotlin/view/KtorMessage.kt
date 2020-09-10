package view

import react.*
import react.dom.*
import com.erl.mpp.mobile.createApplicationScreenMessage
import com.erl.mpp.mobile.getApplicationScreenMessage
import kotlinx.coroutines.*
import kotlin.coroutines.CoroutineContext


class KtorMessageState : RState {
    var messageSharedCode: String = ""
    var message: String = ""
    var endpoint: String = ""
}

class KtorMessage : RComponent<ApplicationProps, KtorMessageState>(), CoroutineScope {

    init {
        state = KtorMessageState()
    }

    override val coroutineContext: CoroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun componentDidMount() {
        props.coroutineScope.launch {
            var value = createApplicationScreenMessage()
            setState {
                messageSharedCode = value
            }

            launch() {
                //TODO: Not getting error message if ktor project is not running
                value = getApplicationScreenMessage( "Kotlin Rocks with React & KTOR")
                setState {
                    message = value
                }
            }

            //setState {
                //endpoint = "${ConstantsShared.getEndPoint()}/${ConstantsShared.root}/${ConstantsShared.messageCall}"
            //}
        }


    }

    override fun RBuilder.render() {
        div("App-header") {
            br {  }
            label { +"From SharedCode:" }
            h1 {
                + state.messageSharedCode
            }
            label { +"From Ktor:" }
            h1 {
                + state.message
            }
            /*
                       br {  }
                       label { +"Endpoint: " }
                       label { +state.endpoint }

                        */
        }
    }

}
