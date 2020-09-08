package com.erl.mpp.mobile

import com.erl.mpp.mobile.models.Model
import com.erl.mpp.mobile.models.ItemDataSummary
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlin.native.concurrent.ensureNeverFrozen

class NativeViewModel(
    private val viewUpdate: (ItemDataSummary) -> Unit,
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
            model.getKtorMessage(message)?.let { errorString ->
                errorUpdate(errorString)
            }
        }
    }


    fun onDestroy() {
        scope.onDestroy()
    }
}
