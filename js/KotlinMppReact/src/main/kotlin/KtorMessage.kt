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


class KtorMessage : RComponent<RProps, RState>(), MainView, CoroutineScope {

    val presenter = MainPresenter(uiContext = coroutineContext, view = this)


    //<editor-fold desc="CoroutineScope">
    private var job: Job = Job()

    var errorMessage = ""

    override val coroutineContext: CoroutineContext
        get() = Dispatchers.Main + job
    //</editor-fold>

    override fun RBuilder.render() {
        div("App-header") {
            h1 {
                +createApplicationScreenMessage()
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