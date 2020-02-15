(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-client-json', 'ktor-ktor-client-serialization', 'ktor-ktor-client-core', 'ktor-ktor-http', 'kotlinx-serialization-kotlinx-serialization-runtime', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-client-json'), require('ktor-ktor-client-serialization'), require('ktor-ktor-client-core'), require('ktor-ktor-http'), require('kotlinx-serialization-kotlinx-serialization-runtime'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinMpp-SharedCode'.");
    }
    if (typeof this['ktor-ktor-client-json'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'ktor-ktor-client-json' was not found. Please, check whether 'ktor-ktor-client-json' is loaded prior to 'KotlinMpp-SharedCode'.");
    }
    if (typeof this['ktor-ktor-client-serialization'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'ktor-ktor-client-serialization' was not found. Please, check whether 'ktor-ktor-client-serialization' is loaded prior to 'KotlinMpp-SharedCode'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'KotlinMpp-SharedCode'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'KotlinMpp-SharedCode'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'KotlinMpp-SharedCode'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'KotlinMpp-SharedCode'.");
    }
    root['KotlinMpp-SharedCode'] = factory(typeof this['KotlinMpp-SharedCode'] === 'undefined' ? {} : this['KotlinMpp-SharedCode'], kotlin, this['ktor-ktor-client-json'], this['ktor-ktor-client-serialization'], this['ktor-ktor-client-core'], this['ktor-ktor-http'], this['kotlinx-serialization-kotlinx-serialization-runtime'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_client_json, $module$ktor_ktor_client_serialization, $module$ktor_ktor_client_core, $module$ktor_ktor_http, $module$kotlinx_serialization_kotlinx_serialization_runtime, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var JsonFeature = $module$ktor_ktor_client_json.io.ktor.client.features.json.JsonFeature;
  var KotlinxSerializer = $module$ktor_ktor_client_serialization.io.ktor.client.features.json.serializer.KotlinxSerializer;
  var getKClass = Kotlin.getKClass;
  var Unit = Kotlin.kotlin.Unit;
  var HttpClient = $module$ktor_ktor_client_core.io.ktor.client.HttpClient_f0veat$;
  var get_hostWithPort = $module$ktor_ktor_http.io.ktor.http.get_hostWithPort_5y8s0c$;
  var get_fullPath = $module$ktor_ktor_http.io.ktor.http.get_fullPath_5y8s0c$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var HttpMethod = $module$ktor_ktor_http.io.ktor.http.HttpMethod;
  var ContentType = $module$ktor_ktor_http.io.ktor.http.ContentType;
  var contentType = $module$ktor_ktor_http.io.ktor.http.contentType_41kwpe$;
  var http = $module$ktor_ktor_http.io.ktor.http;
  var header = $module$ktor_ktor_client_core.io.ktor.client.request.header_xadl6p$;
  var takeFrom = $module$ktor_ktor_http.io.ktor.http.takeFrom_jl1sg7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var takeFrom_0 = $module$ktor_ktor_client_core.$$importsForInline$$['ktor-ktor-http'].io.ktor.http.takeFrom_jl1sg7$;
  var utils = $module$ktor_ktor_client_core.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod_0 = $module$ktor_ktor_client_core.$$importsForInline$$['ktor-ktor-http'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core.io.ktor.client.request.HttpRequestBuilder;
  var call = $module$ktor_ktor_client_core.io.ktor.client.call.call_30bfl5$;
  var throwCCE = Kotlin.throwCCE;
  var call_0 = $module$ktor_ktor_client_core.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core.io.ktor.client.call.TypeInfo;
  var toString = Kotlin.toString;
  var Exception = Kotlin.kotlin.Exception;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var AbstractCoroutineContextElement = Kotlin.kotlin.coroutines.AbstractCoroutineContextElement;
  var CoroutineExceptionHandler = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineExceptionHandler;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  MainPresenter.prototype = Object.create(CoroutinePresenter.prototype);
  MainPresenter.prototype.constructor = MainPresenter;
  function ConstantsShared() {
    ConstantsShared_instance = this;
    this.httpProtocol = 'http';
    this.ip = '192.168.1.67';
    this.port = '8081';
    this.root = 'kotlinmppktor';
    this.messageCall = 'getApplicationScreenMessage';
  }
  ConstantsShared.prototype.getEndPoint = function () {
    if (this.port.length > 0)
      return 'http://192.168.1.67:8081';
    else
      return 'http://192.168.1.67';
  };
  ConstantsShared.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConstantsShared',
    interfaces: []
  };
  var ConstantsShared_instance = null;
  function ConstantsShared_getInstance() {
    if (ConstantsShared_instance === null) {
      new ConstantsShared();
    }
    return ConstantsShared_instance;
  }
  function getHttpClient$lambda$lambda($receiver) {
    var $receiver_0 = new KotlinxSerializer();
    $receiver_0.setMapper_cfhkba$(getKClass(MessageRequest), MessageRequest$Companion_getInstance().serializer());
    $receiver_0.setMapper_cfhkba$(getKClass(MessageResponse), MessageResponse$Companion_getInstance().serializer());
    $receiver.serializer = $receiver_0;
    return Unit;
  }
  function getHttpClient$lambda($receiver) {
    $receiver.install_xlxg29$(JsonFeature.Feature, getHttpClient$lambda$lambda);
    return Unit;
  }
  function getHttpClient() {
    var client = HttpClient(getHttpClient$lambda);
    return client;
  }
  function get_hostWithPortIfRequired($receiver) {
    return $receiver.port === $receiver.protocol.defaultPort ? $receiver.host : get_hostWithPort($receiver);
  }
  function get_fullUrl($receiver) {
    return $receiver.protocol.name + '://' + get_hostWithPortIfRequired($receiver) + get_fullPath($receiver);
  }
  function post$lambda($receiver) {
    return Unit;
  }
  function get$lambda($receiver) {
    return Unit;
  }
  function KotlinMppApi(endPoint, client) {
    this.endPoint = endPoint;
    this.client = client;
  }
  function KotlinMppApi$getApplicationScreenMessage$lambda(closure$request) {
    return function ($receiver) {
      $receiver.method = HttpMethod.Companion.Post;
      contentType($receiver, ContentType.Application.Json);
      $receiver.body = closure$request;
      return Unit;
    };
  }
  function Coroutine$getApplicationScreenMessage_agc8b4$($this, request_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$request = request_0;
  }
  Coroutine$getApplicationScreenMessage_agc8b4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getApplicationScreenMessage_agc8b4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getApplicationScreenMessage_agc8b4$.prototype.constructor = Coroutine$getApplicationScreenMessage_agc8b4$;
  Coroutine$getApplicationScreenMessage_agc8b4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.client;
            var urlString = ConstantsShared_getInstance().getEndPoint() + '/' + ConstantsShared_getInstance().root + '/getApplicationScreenMessage';
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod_0.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom_0($receiver_1.url, urlString);
            KotlinMppApi$getApplicationScreenMessage$lambda(this.local$request)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MessageResponse), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MessageResponse) ? tmp$_0 : throwCCE();
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  KotlinMppApi.prototype.getApplicationScreenMessage_agc8b4$ = function (request_0, continuation_0, suspended) {
    var instance = new Coroutine$getApplicationScreenMessage_agc8b4$(this, request_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function KotlinMppApi$test$lambda(this$KotlinMppApi) {
    return function ($receiver) {
      this$KotlinMppApi.apiUrl_0($receiver, 'kotlinmppktor/test');
      $receiver.method = HttpMethod.Companion.Get;
      contentType($receiver, ContentType.Application.Json);
      return Unit;
    };
  }
  function Coroutine$test($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$test.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$test.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$test.prototype.constructor = Coroutine$test;
  Coroutine$test.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.client;
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host, 0, '/');
            $receiver_1.method = HttpMethod_0.Companion.Get;
            $receiver_1.body = body;
            KotlinMppApi$test$lambda(this.$this)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MessageResponse), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MessageResponse) ? tmp$_0 : throwCCE();
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  KotlinMppApi.prototype.test = function (continuation_0, suspended) {
    var instance = new Coroutine$test(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  KotlinMppApi.prototype.json_0 = function ($receiver) {
    contentType($receiver, ContentType.Application.Json);
  };
  function KotlinMppApi$apiUrl$lambda(this$KotlinMppApi, closure$path) {
    return function ($receiver, it) {
      takeFrom($receiver, this$KotlinMppApi.endPoint);
      $receiver.encodedPath = closure$path;
      return Unit;
    };
  }
  KotlinMppApi.prototype.apiUrl_0 = function ($receiver, path) {
    header($receiver, http.HttpHeaders.CacheControl, 'no-cache');
    $receiver.url_6yzzjr$(KotlinMppApi$apiUrl$lambda(this, path));
  };
  KotlinMppApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KotlinMppApi',
    interfaces: []
  };
  function post$lambda_0($receiver) {
    return Unit;
  }
  function get$lambda_0($receiver) {
    return Unit;
  }
  function createApplicationScreenMessage() {
    return 'Kotlin Rocks on ' + platformName();
  }
  function getApplicationScreenMessage$lambda(closure$message) {
    return function ($receiver) {
      $receiver.method = HttpMethod.Companion.Post;
      contentType($receiver, ContentType.Application.Json);
      $receiver.body = new MessageRequest(closure$message);
      return Unit;
    };
  }
  function Coroutine$getApplicationScreenMessage(message_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$message = message_0;
  }
  Coroutine$getApplicationScreenMessage.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getApplicationScreenMessage.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getApplicationScreenMessage.prototype.constructor = Coroutine$getApplicationScreenMessage;
  Coroutine$getApplicationScreenMessage.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 3;
            var client = getHttpClient();
            var urlString = ConstantsShared_getInstance().getEndPoint() + '/' + ConstantsShared_getInstance().root + '/getApplicationScreenMessage';
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod_0.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom_0($receiver_1.url, urlString);
            getApplicationScreenMessage$lambda(this.local$message)($receiver_1);
            this.state_0 = 1;
            this.result_0 = call(client, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var tmp$_0;
            this.state_0 = 2;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MessageResponse), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MessageResponse) ? tmp$_0 : throwCCE();
            this.result_0;
            var respone = this.result_0;
            return respone.message;
          case 3:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              return toString(e.message);
            }
             else {
              throw e;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function getApplicationScreenMessage(message_0, continuation_0, suspended) {
    var instance = new Coroutine$getApplicationScreenMessage(message_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$test1(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
  }
  Coroutine$test1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$test1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$test1.prototype.constructor = Coroutine$test1;
  Coroutine$test1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 3;
            var client = getHttpClient();
            var urlString = ConstantsShared_getInstance().getEndPoint() + '/' + ConstantsShared_getInstance().root + '/test';
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod_0.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom_0($receiver_1.url, urlString);
            get$lambda_0($receiver_1);
            this.state_0 = 1;
            this.result_0 = call(client, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var tmp$_0;
            this.state_0 = 2;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(MessageResponse), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, MessageResponse) ? tmp$_0 : throwCCE();
            this.result_0;
            var respone = this.result_0;
            return respone.message;
          case 3:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              return toString(e.message);
            }
             else {
              throw e;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function test1(continuation_0, suspended) {
    var instance = new Coroutine$test1(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function MessageRequest(message) {
    MessageRequest$Companion_getInstance();
    this.message = message;
  }
  function MessageRequest$Companion() {
    MessageRequest$Companion_instance = this;
  }
  MessageRequest$Companion.prototype.serializer = function () {
    return MessageRequest$$serializer_getInstance();
  };
  MessageRequest$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MessageRequest$Companion_instance = null;
  function MessageRequest$Companion_getInstance() {
    if (MessageRequest$Companion_instance === null) {
      new MessageRequest$Companion();
    }
    return MessageRequest$Companion_instance;
  }
  function MessageRequest$$serializer() {
    this.descriptor_b6gsqz$_0 = new SerialClassDescImpl('com.erl.data.MessageRequest', this);
    this.descriptor.addElement_ivxn3r$('message', false);
    MessageRequest$$serializer_instance = this;
  }
  Object.defineProperty(MessageRequest$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_b6gsqz$_0;
    }
  });
  MessageRequest$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.message);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MessageRequest$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MessageRequest_init(bitMask0, local0, null);
  };
  MessageRequest$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer];
  };
  MessageRequest$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MessageRequest$$serializer_instance = null;
  function MessageRequest$$serializer_getInstance() {
    if (MessageRequest$$serializer_instance === null) {
      new MessageRequest$$serializer();
    }
    return MessageRequest$$serializer_instance;
  }
  function MessageRequest_init(seen1, message, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MessageRequest.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('message');
    else
      $this.message = message;
    return $this;
  }
  MessageRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessageRequest',
    interfaces: []
  };
  MessageRequest.prototype.component1 = function () {
    return this.message;
  };
  MessageRequest.prototype.copy_61zpoe$ = function (message) {
    return new MessageRequest(message === void 0 ? this.message : message);
  };
  MessageRequest.prototype.toString = function () {
    return 'MessageRequest(message=' + Kotlin.toString(this.message) + ')';
  };
  MessageRequest.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  MessageRequest.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  function MessageResponse(message) {
    MessageResponse$Companion_getInstance();
    this.message = message;
  }
  function MessageResponse$Companion() {
    MessageResponse$Companion_instance = this;
  }
  MessageResponse$Companion.prototype.serializer = function () {
    return MessageResponse$$serializer_getInstance();
  };
  MessageResponse$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MessageResponse$Companion_instance = null;
  function MessageResponse$Companion_getInstance() {
    if (MessageResponse$Companion_instance === null) {
      new MessageResponse$Companion();
    }
    return MessageResponse$Companion_instance;
  }
  function MessageResponse$$serializer() {
    this.descriptor_v6gm11$_0 = new SerialClassDescImpl('com.erl.data.MessageResponse', this);
    this.descriptor.addElement_ivxn3r$('message', false);
    MessageResponse$$serializer_instance = this;
  }
  Object.defineProperty(MessageResponse$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_v6gm11$_0;
    }
  });
  MessageResponse$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.message);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MessageResponse$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MessageResponse_init(bitMask0, local0, null);
  };
  MessageResponse$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer];
  };
  MessageResponse$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MessageResponse$$serializer_instance = null;
  function MessageResponse$$serializer_getInstance() {
    if (MessageResponse$$serializer_instance === null) {
      new MessageResponse$$serializer();
    }
    return MessageResponse$$serializer_instance;
  }
  function MessageResponse_init(seen1, message, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MessageResponse.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('message');
    else
      $this.message = message;
    return $this;
  }
  MessageResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessageResponse',
    interfaces: []
  };
  function BaseView() {
  }
  BaseView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BaseView',
    interfaces: []
  };
  CoroutineExceptionHandler$ObjectLiteral.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineExceptionHandler$ObjectLiteral.prototype.constructor = CoroutineExceptionHandler$ObjectLiteral;
  function CoroutineExceptionHandler$ObjectLiteral(closure$handler, key) {
    this.closure$handler = closure$handler;
    AbstractCoroutineContextElement.call(this, key);
  }
  CoroutineExceptionHandler$ObjectLiteral.prototype.handleException_1ur55u$ = function (context, exception) {
    this.closure$handler(context, exception);
  };
  CoroutineExceptionHandler$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [CoroutineExceptionHandler, AbstractCoroutineContextElement]};
  function CoroutinePresenter(mainContext, baseView) {
    this.mainContext_6c62q2$_0 = mainContext;
    this.baseView_dh2xma$_0 = baseView;
    this.job_i38fap$_0 = Job();
    this.exceptionHandler_6afnv7$_0 = new CoroutineExceptionHandler$ObjectLiteral(CoroutinePresenter$exceptionHandler$lambda(this), CoroutineExceptionHandler.Key);
  }
  Object.defineProperty(CoroutinePresenter.prototype, 'coroutineContext', {
    get: function () {
      return this.mainContext_6c62q2$_0.plus_1fupul$(this.job_i38fap$_0).plus_1fupul$(this.exceptionHandler_6afnv7$_0);
    }
  });
  CoroutinePresenter.prototype.onDestroy = function () {
    this.job_i38fap$_0.cancel_m4sck1$();
  };
  function CoroutinePresenter$exceptionHandler$lambda(this$CoroutinePresenter) {
    return function (f, throwable) {
      this$CoroutinePresenter.baseView_dh2xma$_0.showError_tcv7n7$(throwable);
      return Unit;
    };
  }
  CoroutinePresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoroutinePresenter',
    interfaces: [CoroutineScope]
  };
  function MainPresenter(uiContext, view) {
    CoroutinePresenter.call(this, uiContext, view);
    this.view_0 = view;
  }
  function Coroutine$MainPresenter$getApplicationScreenMessage$lambda(closure$request_0, closure$response_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$request = closure$request_0;
    this.local$closure$response = closure$response_0;
  }
  Coroutine$MainPresenter$getApplicationScreenMessage$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MainPresenter$getApplicationScreenMessage$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MainPresenter$getApplicationScreenMessage$lambda.prototype.constructor = Coroutine$MainPresenter$getApplicationScreenMessage$lambda;
  Coroutine$MainPresenter$getApplicationScreenMessage$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var api = new KotlinMppApi(ConstantsShared_getInstance().getEndPoint(), getHttpClient());
            this.state_0 = 2;
            this.result_0 = api.getApplicationScreenMessage_agc8b4$(this.local$closure$request, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$response.v = this.result_0, Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MainPresenter$getApplicationScreenMessage$lambda(closure$request_0, closure$response_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MainPresenter$getApplicationScreenMessage$lambda(closure$request_0, closure$response_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MainPresenter$getApplicationScreenMessage$lambda_0(this$MainPresenter, closure$response) {
    return function (it) {
      this$MainPresenter.view_0.showApplicationScreenMessage_vyjocg$(closure$response.v);
      return Unit;
    };
  }
  MainPresenter.prototype.getApplicationScreenMessage_agc8b4$ = function (request) {
    var response = {v: new MessageResponse('')};
    launch(this, void 0, void 0, MainPresenter$getApplicationScreenMessage$lambda(request, response)).invokeOnCompletion_f05bi3$(MainPresenter$getApplicationScreenMessage$lambda_0(this, response));
  };
  MainPresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainPresenter',
    interfaces: [CoroutinePresenter]
  };
  function MainView() {
  }
  MainView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MainView',
    interfaces: [BaseView]
  };
  function platformName() {
    return 'Javascript';
  }
  var package$com = _.com || (_.com = {});
  var package$erl = package$com.erl || (package$com.erl = {});
  var package$mpp = package$erl.mpp || (package$erl.mpp = {});
  var package$mobile = package$mpp.mobile || (package$mpp.mobile = {});
  Object.defineProperty(package$mobile, 'ConstantsShared', {
    get: ConstantsShared_getInstance
  });
  _.getHttpClient = getHttpClient;
  $$importsForInline$$['ktor-ktor-client-core'] = $module$ktor_ktor_client_core;
  var package$org = _.org || (_.org = {});
  var package$kotlin = package$org.kotlin || (package$org.kotlin = {});
  var package$mpp_0 = package$kotlin.mpp || (package$kotlin.mpp = {});
  var package$mobile_0 = package$mpp_0.mobile || (package$mpp_0.mobile = {});
  package$mobile_0.KotlinMppApi = KotlinMppApi;
  package$mobile.createApplicationScreenMessage = createApplicationScreenMessage;
  package$mobile.getApplicationScreenMessage_61zpoe$ = getApplicationScreenMessage;
  package$mobile.test1 = test1;
  Object.defineProperty(MessageRequest, 'Companion', {
    get: MessageRequest$Companion_getInstance
  });
  Object.defineProperty(MessageRequest, '$serializer', {
    get: MessageRequest$$serializer_getInstance
  });
  var package$data = package$erl.data || (package$erl.data = {});
  package$data.MessageRequest_init_lmlwo5$ = MessageRequest_init;
  package$data.MessageRequest = MessageRequest;
  Object.defineProperty(MessageResponse, 'Companion', {
    get: MessageResponse$Companion_getInstance
  });
  Object.defineProperty(MessageResponse, '$serializer', {
    get: MessageResponse$$serializer_getInstance
  });
  package$data.MessageResponse_init_lmlwo5$ = MessageResponse_init;
  package$data.MessageResponse = MessageResponse;
  var package$presentation = package$mobile_0.presentation || (package$mobile_0.presentation = {});
  package$presentation.BaseView = BaseView;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$presentation.CoroutinePresenter = CoroutinePresenter;
  package$presentation.MainPresenter = MainPresenter;
  package$presentation.MainView = MainView;
  package$mobile.platformName = platformName;
  MessageRequest$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MessageResponse$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Kotlin.defineModule('KotlinMpp-SharedCode', _);
  return _;
}));

//# sourceMappingURL=KotlinMpp-SharedCode.js.map
