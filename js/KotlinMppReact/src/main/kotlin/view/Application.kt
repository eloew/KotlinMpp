package view

import kotlinx.coroutines.CoroutineScope

import react.*
import react.dom.div
import react.dom.h2
import kotlinx.css.*
import react.dom.img
import styled.*
import styled.StyledComponents.css


interface ApplicationProps : RProps {
    var coroutineScope: CoroutineScope
}



class ApplicationComponent : RComponent<ApplicationProps, RState>() {

    init {
        //require("bootstrap/dist/css/bootstrap.css")
       //require("bootstrap/dist/js/bootstrap.js")
    }

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun RBuilder.render() {
        styledImg {
            css {
                width  =  50.px
                height = 50.px
            }
            attrs {

                src  = "Kotlin-logo.svg"
            }
        }
        img {


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
