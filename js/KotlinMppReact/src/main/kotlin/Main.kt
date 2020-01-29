import kotlin.browser.document

import react.*
import react.dom.*
import com.erl.mpp.mobile.createApplicationScreenMessage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import view.ApplicationComponent
import kotlin.coroutines.CoroutineContext


private class Application : CoroutineScope {
    override val coroutineContext: CoroutineContext = Job()

    fun start() {
        render(document.getElementById("root")) {
            child(ApplicationComponent::class) {
                attrs.coroutineScope = this@Application
            }
        }
    }
}

fun main() {
    Application().start()
}