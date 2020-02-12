package com.erl

import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import com.erl.util.Constants
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*
import io.ktor.routing.*
import io.ktor.http.*
import freemarker.cache.*
import io.ktor.freemarker.*
import io.ktor.features.*
import io.ktor.auth.*
import io.ktor.gson.*
import io.ktor.http.content.*
import java.io.File
import java.lang.Exception
import kotlin.collections.toList



fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

@Suppress("unused") // Referenced in application.conf
@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {

    install(FreeMarker) {
        templateLoader = ClassTemplateLoader(this::class.java.classLoader, "templates")
    }
    install(CallLogging)


    install(Authentication) {
        basic("myBasicAuth") {
            realm = "Ktor Server"
            validate { if (it.name == "zaphod" && it.password == "Hou3ston@1") UserIdPrincipal(it.name) else null }
        }


    }

    install(ContentNegotiation) {
        gson {
        }
    }

    routing {
        trace { application.log.trace(it.buildText()) }
        install(StatusPages) {
            exception<AuthenticationException> { cause ->
                call.respond(HttpStatusCode.Unauthorized)
            }
            exception<AuthorizationException> { cause ->
                call.respond(HttpStatusCode.Forbidden)
            }

        }
        // Static feature. Try to access `/static/ktor_logo.svg`
        route("/kotlinmppktor") {
            static("/static") {
                resources("static")

            }
            static("json") {
                staticRootFolder = File("/json") // Establishes a root folder
                file("rewardType.json")
            }

            get("/") {
                call.respondText("Hello World, KotlinMppKtor")
            }

            post("/getApplicationScreenMessage") {
                val request = call.receive<MessageRequest>()
                call.respond(MessageResponse(message = request.message))  //"Kotlin Rocks on Ktor!"
            }

            get("/test") {
                call.respond(MessageResponse(message = "zztop"))
            }
        }
    }

}

fun Application.TurnOffLogger() {
    //https://stackoverflow.com/questions/30137564/how-to-disable-mongodb-java-driver-logging
    val logMan = java.util.logging.LogManager.getLogManager()

    logMan.loggerNames.toList().forEach {
        print("${it}\n")
    }

    //logMan.getLogger("org.mongodb.driver.protocol.command").setLevel(java.util.logging.Level.OFF);
    //logMan.getLogger("org.mongodb.driver.cluster").setLevel(java.util.logging.Level.OFF);
}


val Application.log get() = environment.log

var baseUserId = ""

data class IndexData(val items: List<Int>)

class AuthenticationException : RuntimeException()
class AuthorizationException : RuntimeException()

