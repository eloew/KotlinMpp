package view

import kotlinx.coroutines.CoroutineScope

import react.*
import react.dom.div
import react.dom.h2
import kotlinx.css.*
import kotlinx.html.ButtonType
import kotlinx.html.id
import kotlinx.html.hidden
import react.dom.button
import react.dom.img
import styled.*
import styled.StyledComponents.css
import react.dom.button

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

        div {
            h2 {
                +"Hello KotlinMpp React"
            }
        }
        styledDiv {
            css {
                padding(vertical = 16.px)

                backgroundColor = Color.green
            }
            +"Hello world!"
        }
        h2 {
            child(KtorMessage::class) {
                attrs.coroutineScope = props.coroutineScope
            }
        }
    }

}
