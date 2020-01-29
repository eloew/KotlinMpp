package view

import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import com.erl.mpp.mobile.ConstantsShared
import com.erl.mpp.mobile.api.KotlinMppApiJs
import kotlin.browser.document

import react.*
import react.dom.*
import com.erl.mpp.mobile.createApplicationScreenMessage
import com.erl.mpp.mobile.getApplicationScreenMessage
import kotlinx.coroutines.*
import org.kotlin.mpp.mobile.KotlinMppApi
import org.kotlin.mpp.mobile.presentation.MainPresenter
import org.kotlin.mpp.mobile.presentation.MainView
import services.KotlinMaapApiService
import view.ApplicationProps
import kotlin.coroutines.CoroutineContext


class KtorMessageState : RState {
    var message: String = ""

}

class KtorMessage : RComponent<ApplicationProps, KtorMessageState>(), MainView, CoroutineScope {

    init {
        state = KtorMessageState()
    }

    override val coroutineContext: CoroutineContext
        get() = props.coroutineScope.coroutineContext


    //val presenter = MainPresenter(uiContext = coroutineContext, view = this)

    override fun componentDidMount() {
        props.coroutineScope.launch {
            val inputMessage = "Kotlin Rocks with React & KTOR"
            var value = ""
            //val value = getApplicationScreenMessage( "Kotlin Rocks with React & KTOR" )
            //var value = getApplicationScreeMessage(coroutineContext, "Kotlin Rocks with React & KTOR")
            //var value = createApplicationScreenMessage()

            //val api = KotlinMppApiJs(props.coroutineScope.coroutineContext)
            //var value = api.getApplicationScreenMessage(coroutineContext, "Kotlin Rocks with React & KTOR")

            val api = KotlinMaapApiService(coroutineContext)
            value = api.getMessage(inputMessage)

            setState {
                message = value
            }
        }
    }

    override fun RBuilder.render() {
        div("App-header") {
            label { +"From Ktor:" }
            h1 {
               + state.message
            }

        }
    }




    //<editor-fold desc="MainView">
    override fun showApplicationScreenMessage(response: MessageResponse) {

    }

    override fun showError(message: String) {

    }

    override fun showError(error: Throwable) {

    }
    //</editor-fold>

}