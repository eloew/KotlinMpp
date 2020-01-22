package view


import com.erl.mpp.mobile.createApplicationScreenMessage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.async
import kotlinx.coroutines.launch
import react.*
import react.dom.div
import react.dom.h2
import kotlin.random.Random



interface ApplicationProps : RProps {
    var coroutineScope: CoroutineScope
}

class ApplicationComponent : RComponent<ApplicationProps, RState>() {

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun RBuilder.render() {
        div("App-header") {
            h2 {
                +createApplicationScreenMessage()
            }
            h2 {
                child(KtorMessage::class) {
                    attrs.coroutineScope = props.coroutineScope
                }
            }
        }
    }

}
