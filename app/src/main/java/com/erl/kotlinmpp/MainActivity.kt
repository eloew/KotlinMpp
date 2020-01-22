package com.erl.kotlinmpp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import com.erl.data.MessageRequest
import com.erl.data.MessageResponse
import kotlinx.android.synthetic.main.activity_main.*
import com.erl.mpp.mobile.createApplicationScreenMessage
import com.erl.mpp.mobile.getApplicationScreenMessage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import org.jetbrains.anko.longToast
import org.kotlin.mpp.mobile.presentation.MainPresenter
import org.kotlin.mpp.mobile.presentation.MainView
import kotlin.coroutines.CoroutineContext

class MainActivity : AppCompatActivity(), MainView, CoroutineScope {

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

        val presenter = MainPresenter(uiContext = coroutineContext, view = this)
        presenter.getApplicationScreenMessage(MessageRequest(message = "Kotlin Rocks on Ktor!"))


    }

    //<editor-fold desc="MainView">
    override fun showApplicationScreenMessage(response: MessageResponse) {
        //runOnUiThread {
            ktorText.text = response.message
        //}
    }

    override fun showError(error: Throwable) {
        runOnUiThread {
            val errorMessage = error.message?: "error"
            longToast(errorMessage)
            ktorText.text = errorMessage
        }
        Log.d(TAG, error.message)
    }

    override fun showError(message: String) {
        runOnUiThread {
            longToast(message)
            ktorText.text = message
        }
        Log.d(TAG, message)
    }
    //</editor-fold>

}
