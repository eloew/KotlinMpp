import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import react.dom.*
import view.ApplicationComponent
import kotlin.browser.document
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
