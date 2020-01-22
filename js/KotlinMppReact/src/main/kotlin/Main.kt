import kotlin.browser.document

import react.*
import react.dom.*
import com.erl.mpp.mobile.createApplicationScreenMessage
import kotlinx.coroutines.CoroutineScope


interface AppProps : RProps {
    var coroutineScope: CoroutineScope
}

class App : RComponent<AppProps, RState>() {
    override fun RBuilder.render() {
        div("App-header") {
            h2 {
                //+"Welcome to React with Kotlin"
                +createApplicationScreenMessage()
                br {}
                label { +"From KTOR" }
                //child(KtorMessage1::class) {}
                //child(KtorMessage::class) {}
                //child(KtorMessage::class) {

               // }
            }
        }
    }
}

fun RBuilder.app() = child(App::class) {}

fun main() {
    render(document.getElementById("root")) {
        app()

    }
}