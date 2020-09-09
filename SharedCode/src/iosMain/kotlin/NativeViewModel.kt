package com.erl.mpp.mobile

import com.erl.mpp.mobile.models.Model
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlin.native.concurrent.ensureNeverFrozen

class NativeViewModel(
    private val viewUpdate: (String) -> Unit,
    private val errorUpdate: (String) -> Unit
) {

    private val scope = MainScope(Dispatchers.Main)
    private val model: Model

    init {
        ensureNeverFrozen()
        model = Model()
    }


    fun getKtorMessage(message: String) {
        scope.launch {
            try {
                val value = model.getKtorMessage(message)
                viewUpdate(value)
            } catch (e: Exception) {
                e.message?.let {
                    errorUpdate(it)
                } ?: run {
                    errorUpdate("Unknown Error")
                }
            }
        }
    }


    fun onDestroy() {
        scope.onDestroy()
    }
}
