(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-client-json-jsLegacy', 'ktor-ktor-client-serialization-jsLegacy', 'ktor-ktor-client-core-jsLegacy', 'ktor-ktor-http-jsLegacy', 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-client-json-jsLegacy'), require('ktor-ktor-client-serialization-jsLegacy'), require('ktor-ktor-client-core-jsLegacy'), require('ktor-ktor-http-jsLegacy'), require('kotlinx-serialization-kotlinx-serialization-core-jsLegacy'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinMpp-SharedCode'.");
    }if (typeof this['ktor-ktor-client-json-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'ktor-ktor-client-json-jsLegacy' was not found. Please, check whether 'ktor-ktor-client-json-jsLegacy' is loaded prior to 'KotlinMpp-SharedCode'.");
    }if (typeof this['ktor-ktor-client-serialization-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'ktor-ktor-client-serialization-jsLegacy' was not found. Please, check whether 'ktor-ktor-client-serialization-jsLegacy' is loaded prior to 'KotlinMpp-SharedCode'.");
    }if (typeof this['ktor-ktor-client-core-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'ktor-ktor-client-core-jsLegacy' was not found. Please, check whether 'ktor-ktor-client-core-jsLegacy' is loaded prior to 'KotlinMpp-SharedCode'.");
    }if (typeof this['ktor-ktor-http-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'ktor-ktor-http-jsLegacy' was not found. Please, check whether 'ktor-ktor-http-jsLegacy' is loaded prior to 'KotlinMpp-SharedCode'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy' is loaded prior to 'KotlinMpp-SharedCode'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMpp-SharedCode'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'KotlinMpp-SharedCode'.");
    }root['KotlinMpp-SharedCode'] = factory(typeof this['KotlinMpp-SharedCode'] === 'undefined' ? {} : this['KotlinMpp-SharedCode'], kotlin, this['ktor-ktor-client-json-jsLegacy'], this['ktor-ktor-client-serialization-jsLegacy'], this['ktor-ktor-client-core-jsLegacy'], this['ktor-ktor-http-jsLegacy'], this['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_client_json_jsLegacy, $module$ktor_ktor_client_serialization_jsLegacy, $module$ktor_ktor_client_core_jsLegacy, $module$ktor_ktor_http_jsLegacy, $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var JsonFeature = $module$ktor_ktor_client_json_jsLegacy.io.ktor.client.features.json.JsonFeature;
  var KotlinxSerializer = $module$ktor_ktor_client_serialization_jsLegacy.io.ktor.client.features.json.serializer.KotlinxSerializer;
  var Unit = Kotlin.kotlin.Unit;
  var HttpClient = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.HttpClient_f0veat$;
  var get_hostWithPort = $module$ktor_ktor_http_jsLegacy.io.ktor.http.get_hostWithPort_5y8s0c$;
  var get_fullPath = $module$ktor_ktor_http_jsLegacy.io.ktor.http.get_fullPath_5y8s0c$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var HttpMethod = $module$ktor_ktor_http_jsLegacy.io.ktor.http.HttpMethod;
  var ContentType = $module$ktor_ktor_http_jsLegacy.io.ktor.http.ContentType;
  var contentType = $module$ktor_ktor_http_jsLegacy.io.ktor.http.contentType_41kwpe$;
  var getKClass = Kotlin.getKClass;
  var createKType = Kotlin.createKType;
  var http = $module$ktor_ktor_http_jsLegacy.io.ktor.http;
  var header = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.header_xadl6p$;
  var takeFrom = $module$ktor_ktor_http_jsLegacy.io.ktor.http.takeFrom_jl1sg7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var takeFrom_0 = $module$ktor_ktor_client_core_jsLegacy.$$importsForInline$$['ktor-ktor-http-jsLegacy'].io.ktor.http.takeFrom_jl1sg7$;
  var utils = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod_0 = $module$ktor_ktor_client_core_jsLegacy.$$importsForInline$$['ktor-ktor-http-jsLegacy'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.HttpRequestBuilder;
  var HttpStatement_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpStatement;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var HttpResponse = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpResponse;
  var complete = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.complete_abn2de$;
  var call = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.call.TypeInfo;
  var toString = Kotlin.toString;
  var Exception = Kotlin.kotlin.Exception;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.MissingFieldException;
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
    this.ip = '10.0.0.32';
    this.port = '8081';
    this.root = 'kotlinmppktor';
    this.messageCall = 'getApplicationScreenMessage';
  }
  ConstantsShared.prototype.getEndPoint = function () {
    if (this.port.length > 0)
      return 'http://10.0.0.32:8081';
    else
      return 'http://10.0.0.32';
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
    }return ConstantsShared_instance;
  }
  function getHttpClient$lambda$lambda($receiver) {
    $receiver.serializer = new KotlinxSerializer();
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
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$response = void 0;
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
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(MessageResponse);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, MessageResponse) ? tmp$_5 : throwCCE();
              this.state_0 = 9;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 7;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = new TypeInfo_init(getKClass(MessageResponse), call.JsType, createKType(getKClass(MessageResponse), [], false));
              } catch (_) {
                typeInfo$result_0 = new TypeInfo_init(getKClass(MessageResponse), call.JsType);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_jo9acv$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, MessageResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, MessageResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$response = void 0;
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
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(MessageResponse);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, MessageResponse) ? tmp$_5 : throwCCE();
              this.state_0 = 9;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 7;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = new TypeInfo_init(getKClass(MessageResponse), call.JsType, createKType(getKClass(MessageResponse), [], false));
              } catch (_) {
                typeInfo$result_0 = new TypeInfo_init(getKClass(MessageResponse), call.JsType);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_jo9acv$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, MessageResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, MessageResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
  function get$lambda_0($receiver) {
    return Unit;
  }
  function createApplicationScreenMessage() {
    return 'Kotlin Rocks on ' + platformName();
  }
  function Coroutine$getApplicationScreenMessage(message_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
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
            this.exceptionState_0 = 2;
            var api = new KotlinMppApi(ConstantsShared_getInstance().getEndPoint(), getHttpClient());
            this.state_0 = 1;
            this.result_0 = api.getApplicationScreenMessage_agc8b4$(new MessageRequest(this.local$message), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var response = this.result_0;
            return response.message;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              return toString(e.message);
            } else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
    this.exceptionState_0 = 12;
    this.local$response = void 0;
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
            this.exceptionState_0 = 9;
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
            var $this_0 = new HttpStatement_init($receiver_1, client);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(MessageResponse);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, MessageResponse) ? tmp$_5 : throwCCE();
              this.state_0 = 8;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 6;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = new TypeInfo_init(getKClass(MessageResponse), call.JsType, createKType(getKClass(MessageResponse), [], false));
              } catch (_) {
                typeInfo$result_0 = new TypeInfo_init(getKClass(MessageResponse), call.JsType);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_jo9acv$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, MessageResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 7;
            continue;
          case 4:
            this.finallyPath_0 = [9];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, MessageResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.result_0;
            var respone = this.result_0;
            return respone.message;
          case 9:
            this.exceptionState_0 = 12;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              return toString(e.message);
            } else {
              throw e;
            }

          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            return;
          case 12:
            throw this.exception_0;
          default:this.state_0 = 12;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 12) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
    }return MessageRequest$Companion_instance;
  }
  function MessageRequest$$serializer() {
    this.descriptor_b6gsqz$_0 = new PluginGeneratedSerialDescriptor('com.erl.data.MessageRequest', this, 1);
    this.descriptor.addElement_ivxn3r$('message', false);
    MessageRequest$$serializer_instance = this;
  }
  Object.defineProperty(MessageRequest$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_b6gsqz$_0;
    }
  });
  MessageRequest$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.message);
    output.endStructure_24f42q$(this.descriptor);
  };
  MessageRequest$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
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
    }return MessageRequest$$serializer_instance;
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
    }return MessageResponse$Companion_instance;
  }
  function MessageResponse$$serializer() {
    this.descriptor_v6gm11$_0 = new PluginGeneratedSerialDescriptor('com.erl.data.MessageResponse', this, 1);
    this.descriptor.addElement_ivxn3r$('message', false);
    MessageResponse$$serializer_instance = this;
  }
  Object.defineProperty(MessageResponse$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_v6gm11$_0;
    }
  });
  MessageResponse$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.message);
    output.endStructure_24f42q$(this.descriptor);
  };
  MessageResponse$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
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
    }return MessageResponse$$serializer_instance;
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
    configurable: true,
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
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
  $$importsForInline$$['ktor-ktor-client-core-jsLegacy'] = $module$ktor_ktor_client_core_jsLegacy;
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
  package$data.MessageRequest_init_q11ckg$ = MessageRequest_init;
  package$data.MessageRequest = MessageRequest;
  Object.defineProperty(MessageResponse, 'Companion', {
    get: MessageResponse$Companion_getInstance
  });
  Object.defineProperty(MessageResponse, '$serializer', {
    get: MessageResponse$$serializer_getInstance
  });
  package$data.MessageResponse_init_q11ckg$ = MessageResponse_init;
  package$data.MessageResponse = MessageResponse;
  var package$presentation = package$mobile_0.presentation || (package$mobile_0.presentation = {});
  package$presentation.BaseView = BaseView;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$presentation.CoroutinePresenter = CoroutinePresenter;
  package$presentation.MainPresenter = MainPresenter;
  package$presentation.MainView = MainView;
  package$mobile.platformName = platformName;
  MessageRequest$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  MessageRequest$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  MessageResponse$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  MessageResponse$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Kotlin.defineModule('KotlinMpp-SharedCode', _);
  return _;
}));

//# sourceMappingURL=KotlinMpp-SharedCode.js.map
