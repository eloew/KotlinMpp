import com.erl.data.MessageResponse
import kotlin.browser.document

import react.*
import react.dom.*
import com.erl.mpp.mobile.createApplicationScreenMessage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import org.kotlin.mpp.mobile.presentation.MainPresenter
import org.kotlin.mpp.mobile.presentation.MainView
import kotlin.coroutines.CoroutineContext


class KtorMessage1 : RComponent<RProps, RState>() {

    override fun RBuilder.render() {
        div("App-header") {
            h1 {
                +createApplicationScreenMessage()
            }
        }
    }


}