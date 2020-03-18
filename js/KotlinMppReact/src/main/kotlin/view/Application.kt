package view

import kotlinx.coroutines.CoroutineScope
import kotlinx.css.*
import kotlinx.html.hidden
import kotlinx.html.id
import org.w3c.dom.css.CSSMarginRule
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.button
import react.dom.h2
import styled.*

interface ApplicationProps : RProps {
    var coroutineScope: CoroutineScope
}



class ApplicationComponent : RComponent<ApplicationProps, RState>() {

    init {
        //require("bootstrap/dist/css/bootstrap.css")
       //require("bootstrap/dist/js/bootstrap.js")
    }

    object ComponentStyles : StyleSheet("ComponentStyles", isStatic = true) {
        val install by css {
            width  =  50.px
            height = 50.px
            paddingRight = 25.px
            float = Float.right
            backgroundColor = Color.blue
        }

    }

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun RBuilder.render() {
        styledDiv {
            css {
                padding(vertical = 16.px)

                backgroundColor = Color.green
                verticalAlign = VerticalAlign.middle
            }
            styledImg {
                css {
                    width  =  50.px
                    height = 50.px
                }
                attrs {

                    src  = "Kotlin-logo.svg"
                }
            }



            button(classes = "install") {
                attrs {
                    id = "butInstall"
                    hidden = true
                }
            }

        }
        h2{ +"Hello KotlinMpp React"}


        h2 {
            child(KtorMessage::class) {
                attrs.coroutineScope = props.coroutineScope
            }
        }
    }

}
