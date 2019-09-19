package com.erl.data

import kotlinx.serialization.Serializable

@Serializable
data class MessageRequest(var message: String)