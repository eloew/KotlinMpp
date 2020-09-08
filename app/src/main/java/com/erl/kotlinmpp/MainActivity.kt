package com.erl.kotlinmpp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import kotlinx.android.synthetic.main.activity_main.*
import com.erl.mpp.mobile.createApplicationScreenMessage
import com.erl.mpp.mobile.models.Model
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import org.jetbrains.anko.longToast
import kotlin.coroutines.CoroutineContext

class MainActivity : AppCompatActivity(), CoroutineScope {

    private val TAG = "MainActivity"

    //<editor-fold desc="CoroutineScope">
    private var job: Job = Job()

    var errorMessage = ""

    override val coroutineContext: CoroutineContext
        get() = Dispatchers.Main + job
    //</editor-fold>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        main_text.text = createApplicationScreenMessage()

        getMessageFromKtor()
    }

    private fun getMessageFromKtor() {
        var message = ""
        launch {
            try {
                val model = Model()
                message = model.getKtorMessage("Kotlin Rocks on Ktor!")
            } catch (e: Exception) {
                e.message?.let {
                    message = it
                }?: run {
                    message = "Unknown Error"
                }
            }
        }.invokeOnCompletion {
            ktorText.text = message
        }
    }


}
