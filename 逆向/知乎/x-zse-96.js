var v_saf;!function(){var n=Function.toString,t=[],i=[],o=[].indexOf.bind(t),e=[].push.bind(t),r=[].push.bind(i);function u(n,t){return-1==o(n)&&(e(n),r(`function ${t||n.name||""}() { [native code] }`)),n}Object.defineProperty(Function.prototype,"toString",{enumerable:!1,configurable:!0,writable:!0,value:function(){return"function"==typeof this&&i[o(this)]||n.call(this)}}),u(Function.prototype.toString,"toString"),v_saf=u}();


function _inherits(t, e) {
  t.prototype = Object.create(e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 }
  }), e && Object.setPrototypeOf(t, e) }
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
  get() { return Object.getPrototypeOf(this).constructor.name }, configurable:true,
});
var v_new_toggle = true
Object.freeze(console)//only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
var v_console_log = function(){if (!v_new_toggle){ v_console_logger.apply(this, arguments) }}
var v_random = (function() { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)} })()
var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}


EventTarget = v_saf(function EventTarget(){;})
DOMTokenList = v_saf(function DOMTokenList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MessageChannel = v_saf(function MessageChannel(){;})
NodeList = v_saf(function NodeList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLAllCollection = v_saf(function HTMLAllCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
webkitURL = v_saf(function webkitURL(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
URLSearchParams = v_saf(function URLSearchParams(){;})
Blob = v_saf(function Blob(){;})
Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
HTMLCollection = v_saf(function HTMLCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
History = v_saf(function History(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
WebKitMutationObserver = v_saf(function WebKitMutationObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MutationObserver = v_saf(function MutationObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserver = v_saf(function PerformanceObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
StyleSheet = v_saf(function StyleSheet(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CSSRuleList = v_saf(function CSSRuleList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
DOMRectReadOnly = v_saf(function DOMRectReadOnly(){;})
IntersectionObserver = v_saf(function IntersectionObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
ResizeObserver = v_saf(function ResizeObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Headers = v_saf(function Headers(){;})
ResizeObserverEntry = v_saf(function ResizeObserverEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
IntersectionObserverEntry = v_saf(function IntersectionObserverEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Response = v_saf(function Response(){;})
TextDecoder = v_saf(function TextDecoder(){;})
Crypto = v_saf(function Crypto(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this.getRandomValues = function(){
    v_console_log('  [*] Crypto -> getRandomValues[func]')
    var e=arguments[0]; return e.map(function(x, i){return e[i]=v_random()*1073741824});}
  this.randomUUID = function(){
    v_console_log('  [*] Crypto -> randomUUID[func]')
    function get2(){return (v_random()*255^0).toString(16).padStart(2,'0')}
    function rpt(func,num){var r=[];for(var i=0;i<num;i++){r.push(func())};return r.join('')}
    return [rpt(get2,4),rpt(get2,2),rpt(get2,2),rpt(get2,2),rpt(get2,6)].join('-')}})
NavigatorUAData = v_saf(function NavigatorUAData(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].filename="internal-pdf-viewer";this[0].length=2;this[0].name="PDF Viewer";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].filename="internal-pdf-viewer";this[1].length=2;this[1].name="Chrome PDF Viewer";
  this[2]=v_new(Plugin);this[2].description="Portable Document Format";this[2].filename="internal-pdf-viewer";this[2].length=2;this[2].name="Chromium PDF Viewer";
  this[3]=v_new(Plugin);this[3].description="Portable Document Format";this[3].filename="internal-pdf-viewer";this[3].length=2;this[3].name="Microsoft Edge PDF Viewer";
  this[4]=v_new(Plugin);this[4].description="Portable Document Format";this[4].filename="internal-pdf-viewer";this[4].length=2;this[4].name="WebKit built-in PDF";})
Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
WebGLRenderingContext = v_saf(function WebGLRenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  function WebGLBuffer(){}
  function WebGLProgram(){}
  function WebGLShader(){}
  this._toggle = {}
  this.createBuffer = function(){ v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
  this.createProgram = function(){ v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
  this.createShader = function(){ v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
  this.getSupportedExtensions = function(){
    v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
    return [
      "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
      "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
      "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
      "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
      "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
      "WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBKIT_WEBGL_lose_context","WEBGL_multi_draw",
    ]
  }
  var self = this
  this.getExtension = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
    class WebGLDebugRendererInfo{
      get UNMASKED_VENDOR_WEBGL(){self._toggle[37445]=1;return 37445}
      get UNMASKED_RENDERER_WEBGL(){self._toggle[37446]=1;return 37446}
    }
    class EXTTextureFilterAnisotropic{}
    class WebGLLoseContext{
      loseContext(){}
      restoreContext(){}
    }
    if (key == 'WEBGL_debug_renderer_info'){ var r = new WebGLDebugRendererInfo }
    if (key == 'EXT_texture_filter_anisotropic'){ var r = new EXTTextureFilterAnisotropic }
    if (key == 'WEBGL_lose_context'){ var r = new WebGLLoseContext }
    else{ var r = new WebGLDebugRendererInfo }
    return r
  }
  this.getParameter = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
    if (this._toggle[key]){
      if (key == 37445){ return "Google Inc. (NVIDIA)" }
      if (key == 37446){ return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
    }else{
      if (key == 33902){ return new Float32Array([1,1]) }
      if (key == 33901){ return new Float32Array([1,1024]) }
      if (key == 35661){ return 32 }
      if (key == 34047){ return 16 }
      if (key == 34076){ return 16384 }
      if (key == 36349){ return 1024 }
      if (key == 34024){ return 16384 }
      if (key == 34930){ return 16 }
      if (key == 3379){ return 16384 }
      if (key == 36348){ return 30 }
      if (key == 34921){ return 16 }
      if (key == 35660){ return 16 }
      if (key == 36347){ return 4095 }
      if (key == 3386){ return new Int32Array([32767, 32767]) }
      if (key == 3410){ return 8 }
      if (key == 7937){ return "WebKit WebGL" }
      if (key == 35724){ return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
      if (key == 3415){ return 0 }
      if (key == 7936){ return "WebKit" }
      if (key == 7938){ return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
      if (key == 3411){ return 8 }
      if (key == 3412){ return 8 }
      if (key == 3413){ return 8 }
      if (key == 3414){ return 24 }
      return null
    }
  }
  this.getContextAttributes = function(){
    v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
    return {
      alpha: true,
      antialias: true,
      depth: true,
      desynchronized: false,
      failIfMajorPerformanceCaveat: false,
      powerPreference: "default",
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      stencil: false,
      xrCompatible: false,
    }
  }
  this.getShaderPrecisionFormat = function(a,b){
    v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
    function WebGLShaderPrecisionFormat(){}
    var r1 = v_new(WebGLShaderPrecisionFormat)
    r1.rangeMin = 127
    r1.rangeMax = 127
    r1.precision = 23
    var r2 = v_new(WebGLShaderPrecisionFormat)
    r2.rangeMin = 31
    r2.rangeMax = 30
    r2.precision = 0
    if (a == 35633 && b == 36338){ return r1 } if (a == 35633 && b == 36337){ return r1 } if (a == 35633 && b == 36336){ return r1 }
    if (a == 35633 && b == 36341){ return r2 } if (a == 35633 && b == 36340){ return r2 } if (a == 35633 && b == 36339){ return r2 }
    if (a == 35632 && b == 36338){ return r1 } if (a == 35632 && b == 36337){ return r1 } if (a == 35632 && b == 36336){ return r1 }
    if (a == 35632 && b == 36341){ return r2 } if (a == 35632 && b == 36340){ return r2 } if (a == 35632 && b == 36339){ return r2 }
    throw Error('getShaderPrecisionFormat')
  }
  v_saf(this.createBuffer, 'createBuffer')
  v_saf(this.createProgram, 'createProgram')
  v_saf(this.createShader, 'createShader')
  v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
  v_saf(this.getExtension, 'getExtension')
  v_saf(this.getParameter, 'getParameter')
  v_saf(this.getContextAttributes, 'getContextAttributes')
  v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')})
WebGLShaderPrecisionFormat = v_saf(function WebGLShaderPrecisionFormat(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
AudioParam = v_saf(function AudioParam(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
AudioBuffer = v_saf(function AudioBuffer(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
MessagePort = v_saf(function MessagePort(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MessagePort, EventTarget)
Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Screen, EventTarget)
ScreenOrientation = v_saf(function ScreenOrientation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(ScreenOrientation, EventTarget)
NetworkInformation = v_saf(function NetworkInformation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(NetworkInformation, EventTarget)
CSSStyleSheet = v_saf(function CSSStyleSheet(){;}); _inherits(CSSStyleSheet, StyleSheet)
DOMRect = v_saf(function DOMRect(){;}); _inherits(DOMRect, DOMRectReadOnly)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
MessageEvent = v_saf(function MessageEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MessageEvent, Event)
Worker = v_saf(function Worker(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Worker, EventTarget)
WebSocket = v_saf(function WebSocket(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(WebSocket, EventTarget)
TransitionEvent = v_saf(function TransitionEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(TransitionEvent, Event)
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
PageTransitionEvent = v_saf(function PageTransitionEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PageTransitionEvent, Event)
LayoutShift = v_saf(function LayoutShift(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(LayoutShift, PerformanceEntry)
BaseAudioContext = v_saf(function BaseAudioContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(BaseAudioContext, EventTarget)
AudioNode = v_saf(function AudioNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(AudioNode, EventTarget)
OfflineAudioCompletionEvent = v_saf(function OfflineAudioCompletionEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(OfflineAudioCompletionEvent, Event)
Document = v_saf(function Document(){;}); _inherits(Document, Node)
Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
XMLHttpRequest = v_saf(function XMLHttpRequest(){;}); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
AudioScheduledSourceNode = v_saf(function AudioScheduledSourceNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(AudioScheduledSourceNode, AudioNode)
DynamicsCompressorNode = v_saf(function DynamicsCompressorNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(DynamicsCompressorNode, AudioNode)
OfflineAudioContext = v_saf(function OfflineAudioContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(OfflineAudioContext, BaseAudioContext)
HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
PointerEvent = v_saf(function PointerEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PointerEvent, MouseEvent)
OscillatorNode = v_saf(function OscillatorNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(OscillatorNode, AudioScheduledSourceNode)
HTMLScriptElement = v_saf(function HTMLScriptElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLScriptElement, HTMLElement)
HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
HTMLMetaElement = v_saf(function HTMLMetaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMetaElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLinkElement, HTMLElement)
HTMLInputElement = v_saf(function HTMLInputElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLInputElement, HTMLElement)
HTMLStyleElement = v_saf(function HTMLStyleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLStyleElement, HTMLElement)
HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
HTMLAnchorElement = v_saf(function HTMLAnchorElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };v_hook_href(this, 'HTMLAnchorElement', location.href)}); _inherits(HTMLAnchorElement, HTMLElement)
Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
HTMLHeadElement = v_saf(function HTMLHeadElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].enabledPlugin={"0":{},"1":{}};this[0].suffixes="pdf";this[0].type="application/pdf";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].enabledPlugin={"0":{},"1":{}};this[1].suffixes="pdf";this[1].type="text/pdf";})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Location = v_saf(function Location(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceElementTiming = v_saf(function PerformanceElementTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceElementTiming, PerformanceEntry)
PerformanceEventTiming = v_saf(function PerformanceEventTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceEventTiming, PerformanceEntry)
PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceLongTaskTiming, PerformanceEntry)
PerformanceMark = v_saf(function PerformanceMark(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMark, PerformanceEntry)
PerformanceMeasure = v_saf(function PerformanceMeasure(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMeasure, PerformanceEntry)
PerformanceNavigation = v_saf(function PerformanceNavigation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformancePaintTiming = v_saf(function PerformancePaintTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformancePaintTiming, PerformanceEntry)
PerformanceServerTiming = v_saf(function PerformanceServerTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
HTMLUnknownElement = v_saf(function HTMLUnknownElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUnknownElement, HTMLElement)
Touch = v_saf(function Touch(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
TouchEvent = v_saf(function TouchEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(TouchEvent, UIEvent)
HTMLHtmlElement = v_saf(function HTMLHtmlElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHtmlElement, HTMLElement)
HTMLDivElement = v_saf(function HTMLDivElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDivElement, HTMLElement)
HTMLTitleElement = v_saf(function HTMLTitleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTitleElement, HTMLElement)
Object.defineProperties(EventTarget.prototype, {
  removeEventListener: {value: v_saf(function removeEventListener(){v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments));})},
  dispatchEvent: {value: v_saf(function dispatchEvent(){v_console_log("  [*] EventTarget -> dispatchEvent[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"EventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMTokenList.prototype, {
  length: {get(){ v_console_log("  [*] DOMTokenList -> length[get]", 0);return 0 }},
  add: {value: v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"DOMTokenList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Storage.prototype, {
  [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessageChannel.prototype, {
  port2: {get(){ v_console_log("  [*] MessageChannel -> port2[get]", {});return {} }},
  port1: {get(){ v_console_log("  [*] MessageChannel -> port1[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"MessageChannel",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NodeList.prototype, {
  length: {get(){ v_console_log("  [*] NodeList -> length[get]", 1);return 1 }},
  [Symbol.toStringTag]: {value:"NodeList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLAllCollection.prototype, {
  length: {get(){ v_console_log("  [*] HTMLAllCollection -> length[get]", 294);return 294 }},
  [Symbol.toStringTag]: {value:"HTMLAllCollection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Navigator.prototype, {
  userAgent: {get(){ v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36");return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" }},
  platform: {get(){ v_console_log("  [*] Navigator -> platform[get]", "Win32");return "Win32" }},
  cookieEnabled: {get(){ v_console_log("  [*] Navigator -> cookieEnabled[get]", true);return true }},
  javaEnabled: {value: v_saf(function javaEnabled(){v_console_log("  [*] Navigator -> javaEnabled[func]", [].slice.call(arguments));return true})},
  language: {get(){ v_console_log("  [*] Navigator -> language[get]", "zh-CN");return "zh-CN" }},
  connection: {get(){ v_console_log("  [*] Navigator -> connection[get]", {});return {} }},
  webdriver: {get(){ v_console_log("  [*] Navigator -> webdriver[get]", false);return false }},
  hardwareConcurrency: {get(){ v_console_log("  [*] Navigator -> hardwareConcurrency[get]", 32);return 32 }},
  appName: {get(){ v_console_log("  [*] Navigator -> appName[get]", "Netscape");return "Netscape" }},
  plugins: {get(){ v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []);return this._plugins || [] }},
  languages: {get(){ v_console_log("  [*] Navigator -> languages[get]", {});return {} }},
  maxTouchPoints: {get(){ v_console_log("  [*] Navigator -> maxTouchPoints[get]", 0);return 0 }},
  productSub: {get(){ v_console_log("  [*] Navigator -> productSub[get]", "20030107");return "20030107" }},
  [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(webkitURL.prototype, {
  searchParams: {get(){ v_console_log("  [*] webkitURL -> searchParams[get]", {});return {} }},
  pathname: {get(){ v_console_log("  [*] webkitURL -> pathname[get]", "/api/v4/me/switches");return "/api/v4/me/switches" },set(){ v_console_log("  [*] webkitURL -> pathname[set]", [].slice.call(arguments));return "/api/v4/me/switches" }},
  href: {get(){ v_console_log("  [*] webkitURL -> href[get]", "http://example.com/");return "http://example.com/" }},
  username: {get(){ v_console_log("  [*] webkitURL -> username[get]", "a");return "a" }},
  host: {get(){ v_console_log("  [*] webkitURL -> host[get]", "x");return "x" }},
  hash: {get(){ v_console_log("  [*] webkitURL -> hash[get]", "#%D0%B1");return "#%D0%B1" }},
  search: {get(){ v_console_log("  [*] webkitURL -> search[get]", "?include=oppose_right");return "?include=oppose_right" },set(){ v_console_log("  [*] webkitURL -> search[set]", [].slice.call(arguments));return "?include=oppose_right" }},
  [Symbol.toStringTag]: {value:"webkitURL",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(URLSearchParams.prototype, {
  forEach: {value: v_saf(function forEach(){v_console_log("  [*] URLSearchParams -> forEach[func]", [].slice.call(arguments));})},
  get: {value: v_saf(function get(){v_console_log("  [*] URLSearchParams -> get[func]", [].slice.call(arguments));})},
  toString: {value: v_saf(function toString(){v_console_log("  [*] URLSearchParams -> toString[func]", [].slice.call(arguments));})},
  has: {value: v_saf(function has(){v_console_log("  [*] URLSearchParams -> has[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"URLSearchParams",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Blob.prototype, {
  size: {get(){ v_console_log("  [*] Blob -> size[get]", 100);return 100 }},
  [Symbol.toStringTag]: {value:"Blob",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Image.prototype, {
  src: {get(){ v_console_log("  [*] Image -> src[get]", "https://pica.zhimg.com/80/v2-cebff2235cd53073e717b4047f6ab7ef_200x0.jpg?source=4e949a73");return "https://pica.zhimg.com/80/v2-cebff2235cd53073e717b4047f6ab7ef_200x0.jpg?source=4e949a73" },set(){ v_console_log("  [*] Image -> src[set]", [].slice.call(arguments));return "https://pica.zhimg.com/80/v2-cebff2235cd53073e717b4047f6ab7ef_200x0.jpg?source=4e949a73" }},
  [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCollection.prototype, {
  length: {get(){ v_console_log("  [*] HTMLCollection -> length[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"HTMLCollection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Event.prototype, {
  type: {get(){ v_console_log("  [*] Event -> type[get]", "blur");return "blur" }},
  target: {get(){ v_console_log("  [*] Event -> target[get]", {});return {} }},
  eventPhase: {get(){ v_console_log("  [*] Event -> eventPhase[get]", 2);return 2 }},
  bubbles: {get(){ v_console_log("  [*] Event -> bubbles[get]", false);return false }},
  cancelable: {get(){ v_console_log("  [*] Event -> cancelable[get]", false);return false }},
  timeStamp: {get(){ v_console_log("  [*] Event -> timeStamp[get]", 2440);return 2440 }},
  defaultPrevented: {get(){ v_console_log("  [*] Event -> defaultPrevented[get]", false);return false }},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(History.prototype, {
  state: {get(){ v_console_log("  [*] History -> state[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"History",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebKitMutationObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] WebKitMutationObserver -> observe[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"WebKitMutationObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MutationObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] MutationObserver -> observe[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"MutationObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceTiming.prototype, {
  navigationStart: {get(){ v_console_log("  [*] PerformanceTiming -> navigationStart[get]", 1733713739264);return 1733713739264 }},
  loadEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", 0);return 0 }},
  unloadEventStart: {get(){ v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", 1733713739408);return 1733713739408 }},
  unloadEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", 1733713739410);return 1733713739410 }},
  redirectStart: {get(){ v_console_log("  [*] PerformanceTiming -> redirectStart[get]", 0);return 0 }},
  redirectEnd: {get(){ v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", 0);return 0 }},
  fetchStart: {get(){ v_console_log("  [*] PerformanceTiming -> fetchStart[get]", 1733713739265);return 1733713739265 }},
  domainLookupStart: {get(){ v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", 1733713739265);return 1733713739265 }},
  domainLookupEnd: {get(){ v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", 1733713739265);return 1733713739265 }},
  connectStart: {get(){ v_console_log("  [*] PerformanceTiming -> connectStart[get]", 1733713739265);return 1733713739265 }},
  connectEnd: {get(){ v_console_log("  [*] PerformanceTiming -> connectEnd[get]", 1733713739265);return 1733713739265 }},
  secureConnectionStart: {get(){ v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", 0);return 0 }},
  requestStart: {get(){ v_console_log("  [*] PerformanceTiming -> requestStart[get]", 1733713739269);return 1733713739269 }},
  responseStart: {get(){ v_console_log("  [*] PerformanceTiming -> responseStart[get]", 1733713739387);return 1733713739387 }},
  responseEnd: {get(){ v_console_log("  [*] PerformanceTiming -> responseEnd[get]", 1733713739390);return 1733713739390 }},
  domLoading: {get(){ v_console_log("  [*] PerformanceTiming -> domLoading[get]", 1733713739415);return 1733713739415 }},
  domInteractive: {get(){ v_console_log("  [*] PerformanceTiming -> domInteractive[get]", 1733713739976);return 1733713739976 }},
  domContentLoadedEventStart: {get(){ v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", 1733713739993);return 1733713739993 }},
  domContentLoadedEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", 1733713740329);return 1733713740329 }},
  domComplete: {get(){ v_console_log("  [*] PerformanceTiming -> domComplete[get]", 1733713740597);return 1733713740597 }},
  loadEventStart: {get(){ v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", 1733713740599);return 1733713740599 }},
  [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEntry.prototype, {
  name: {get(){ v_console_log("  [*] PerformanceEntry -> name[get]", "first-contentful-paint");return "first-contentful-paint" }},
  startTime: {get(){ v_console_log("  [*] PerformanceEntry -> startTime[get]", 493.80000001192093);return 493.80000001192093 }},
  duration: {get(){ v_console_log("  [*] PerformanceEntry -> duration[get]", 366);return 366 }},
  [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] PerformanceObserver -> observe[func]", [].slice.call(arguments));})},
  takeRecords: {value: v_saf(function takeRecords(){v_console_log("  [*] PerformanceObserver -> takeRecords[func]", [].slice.call(arguments));})},
  disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] PerformanceObserver -> disconnect[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(StyleSheet.prototype, {
  [Symbol.toStringTag]: {value:"StyleSheet",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSRuleList.prototype, {
  length: {get(){ v_console_log("  [*] CSSRuleList -> length[get]", 312);return 312 }},
  [Symbol.toStringTag]: {value:"CSSRuleList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMRectReadOnly.prototype, {
  top: {get(){ v_console_log("  [*] DOMRectReadOnly -> top[get]", 4065.260498046875);return 4065.260498046875 }},
  left: {get(){ v_console_log("  [*] DOMRectReadOnly -> left[get]", 573.3333740234375);return 573.3333740234375 }},
  height: {get(){ v_console_log("  [*] DOMRectReadOnly -> height[get]", 946.65625);return 946.65625 }},
  bottom: {get(){ v_console_log("  [*] DOMRectReadOnly -> bottom[get]", 4013.385498046875);return 4013.385498046875 }},
  [Symbol.toStringTag]: {value:"DOMRectReadOnly",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IntersectionObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] IntersectionObserver -> observe[func]", [].slice.call(arguments));})},
  disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] IntersectionObserver -> disconnect[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"IntersectionObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(ResizeObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] ResizeObserver -> observe[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"ResizeObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Headers.prototype, {
  has: {value: v_saf(function has(){v_console_log("  [*] Headers -> has[func]", [].slice.call(arguments));})},
  get: {value: v_saf(function get(){v_console_log("  [*] Headers -> get[func]", [].slice.call(arguments));})},
  set: {value: v_saf(function set(){v_console_log("  [*] Headers -> set[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Headers",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(ResizeObserverEntry.prototype, {
  contentRect: {get(){ v_console_log("  [*] ResizeObserverEntry -> contentRect[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"ResizeObserverEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
  getEntries: {value: v_saf(function getEntries(){v_console_log("  [*] PerformanceObserverEntryList -> getEntries[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceObserverEntryList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IntersectionObserverEntry.prototype, {
  isIntersecting: {get(){ v_console_log("  [*] IntersectionObserverEntry -> isIntersecting[get]", false);return false }},
  intersectionRatio: {get(){ v_console_log("  [*] IntersectionObserverEntry -> intersectionRatio[get]", 0.2501486837863922);return 0.2501486837863922 }},
  target: {get(){ v_console_log("  [*] IntersectionObserverEntry -> target[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"IntersectionObserverEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Response.prototype, {
  status: {get(){ v_console_log("  [*] Response -> status[get]", 200);return 200 }},
  headers: {get(){ v_console_log("  [*] Response -> headers[get]", {});return {} }},
  json: {value: v_saf(function json(){v_console_log("  [*] Response -> json[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Response",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TextDecoder.prototype, {
  decode: {value: v_saf(function decode(){v_console_log("  [*] TextDecoder -> decode[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"TextDecoder",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Crypto.prototype, {
  [Symbol.toStringTag]: {value:"Crypto",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NavigatorUAData.prototype, {
  brands: {get(){ v_console_log("  [*] NavigatorUAData -> brands[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"NavigatorUAData",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PluginArray.prototype, {
  length: {get(){ v_console_log("  [*] PluginArray -> length[get]", 5);return 5 }},
  [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Plugin.prototype, {
  [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeType.prototype, {
  [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
  rect: {value: v_saf(function rect(){v_console_log("  [*] CanvasRenderingContext2D -> rect[func]", [].slice.call(arguments));})},
  isPointInPath: {value: v_saf(function isPointInPath(){v_console_log("  [*] CanvasRenderingContext2D -> isPointInPath[func]", [].slice.call(arguments));})},
  textBaseline: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> textBaseline[set]", [].slice.call(arguments)); }},
  fillStyle: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> fillStyle[set]", [].slice.call(arguments)); }},
  fillRect: {value: v_saf(function fillRect(){v_console_log("  [*] CanvasRenderingContext2D -> fillRect[func]", [].slice.call(arguments));})},
  font: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> font[set]", [].slice.call(arguments)); }},
  fillText: {value: v_saf(function fillText(){v_console_log("  [*] CanvasRenderingContext2D -> fillText[func]", [].slice.call(arguments));})},
  globalCompositeOperation: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> globalCompositeOperation[set]", [].slice.call(arguments)); }},
  beginPath: {value: v_saf(function beginPath(){v_console_log("  [*] CanvasRenderingContext2D -> beginPath[func]", [].slice.call(arguments));})},
  arc: {value: v_saf(function arc(){v_console_log("  [*] CanvasRenderingContext2D -> arc[func]", [].slice.call(arguments));})},
  closePath: {value: v_saf(function closePath(){v_console_log("  [*] CanvasRenderingContext2D -> closePath[func]", [].slice.call(arguments));})},
  fill: {value: v_saf(function fill(){v_console_log("  [*] CanvasRenderingContext2D -> fill[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebGLRenderingContext.prototype, {
  bindBuffer: {value: v_saf(function bindBuffer(){v_console_log("  [*] WebGLRenderingContext -> bindBuffer[func]", [].slice.call(arguments));})},
  bufferData: {value: v_saf(function bufferData(){v_console_log("  [*] WebGLRenderingContext -> bufferData[func]", [].slice.call(arguments));})},
  shaderSource: {value: v_saf(function shaderSource(){v_console_log("  [*] WebGLRenderingContext -> shaderSource[func]", [].slice.call(arguments));})},
  compileShader: {value: v_saf(function compileShader(){v_console_log("  [*] WebGLRenderingContext -> compileShader[func]", [].slice.call(arguments));})},
  attachShader: {value: v_saf(function attachShader(){v_console_log("  [*] WebGLRenderingContext -> attachShader[func]", [].slice.call(arguments));})},
  linkProgram: {value: v_saf(function linkProgram(){v_console_log("  [*] WebGLRenderingContext -> linkProgram[func]", [].slice.call(arguments));})},
  useProgram: {value: v_saf(function useProgram(){v_console_log("  [*] WebGLRenderingContext -> useProgram[func]", [].slice.call(arguments));})},
  getAttribLocation: {value: v_saf(function getAttribLocation(){v_console_log("  [*] WebGLRenderingContext -> getAttribLocation[func]", [].slice.call(arguments));})},
  getUniformLocation: {value: v_saf(function getUniformLocation(){v_console_log("  [*] WebGLRenderingContext -> getUniformLocation[func]", [].slice.call(arguments));})},
  enableVertexAttribArray: {value: v_saf(function enableVertexAttribArray(){v_console_log("  [*] WebGLRenderingContext -> enableVertexAttribArray[func]", [].slice.call(arguments));})},
  vertexAttribPointer: {value: v_saf(function vertexAttribPointer(){v_console_log("  [*] WebGLRenderingContext -> vertexAttribPointer[func]", [].slice.call(arguments));})},
  uniform2f: {value: v_saf(function uniform2f(){v_console_log("  [*] WebGLRenderingContext -> uniform2f[func]", [].slice.call(arguments));})},
  drawArrays: {value: v_saf(function drawArrays(){v_console_log("  [*] WebGLRenderingContext -> drawArrays[func]", [].slice.call(arguments));})},
  canvas: {get(){ v_console_log("  [*] WebGLRenderingContext -> canvas[get]", this._canvas);return this._canvas }},
  clearColor: {value: v_saf(function clearColor(){v_console_log("  [*] WebGLRenderingContext -> clearColor[func]", [].slice.call(arguments));})},
  enable: {value: v_saf(function enable(){v_console_log("  [*] WebGLRenderingContext -> enable[func]", [].slice.call(arguments));})},
  depthFunc: {value: v_saf(function depthFunc(){v_console_log("  [*] WebGLRenderingContext -> depthFunc[func]", [].slice.call(arguments));})},
  clear: {value: v_saf(function clear(){v_console_log("  [*] WebGLRenderingContext -> clear[func]", [].slice.call(arguments));})},
  DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
  COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
  POINTS: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  ZERO: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
  DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
  DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
  FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
  FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
  FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
  BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
  STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
  STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
  DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
  FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
  BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
  FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
  BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
  DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
  NO_ERROR: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
  INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
  INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
  OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
  CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
  CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
  LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
  FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
  VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
  COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
  COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
  PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
  MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
  SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
  RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
  GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
  BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
  ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
  SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
  COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
  DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
  FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
  NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
  GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
  BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
  SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
  INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
  FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
  ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
  RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
  RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
  FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
  MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
  MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
  SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
  DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
  LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
  VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
  ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
  SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
  NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
  LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
  EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
  LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
  GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
  NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
  GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
  ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
  KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
  REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
  INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
  DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
  INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
  INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
  DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
  VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
  RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
  VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
  NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
  LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
  MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
  REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
  CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
  MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
  BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
  COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
  LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
  HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
  LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
  HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
  RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
  RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
  RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
  COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
  MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
  INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
  CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
  BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
  RGB8: {"value":32849,"writable":false,"enumerable":true,"configurable":false},
  RGBA8: {"value":32856,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"WebGLRenderingContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebGLShaderPrecisionFormat.prototype, {
  precision: {get(){ v_console_log("  [*] WebGLShaderPrecisionFormat -> precision[get]", 0);return 0 }},
  rangeMin: {get(){ v_console_log("  [*] WebGLShaderPrecisionFormat -> rangeMin[get]", 31);return 31 }},
  rangeMax: {get(){ v_console_log("  [*] WebGLShaderPrecisionFormat -> rangeMax[get]", 30);return 30 }},
  [Symbol.toStringTag]: {value:"WebGLShaderPrecisionFormat",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(AudioParam.prototype, {
  setValueAtTime: {value: v_saf(function setValueAtTime(){v_console_log("  [*] AudioParam -> setValueAtTime[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"AudioParam",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(AudioBuffer.prototype, {
  getChannelData: {value: v_saf(function getChannelData(){v_console_log("  [*] AudioBuffer -> getChannelData[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"AudioBuffer",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Node.prototype, {
  appendChild: {value: v_saf(function appendChild(){v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments));})},
  parentNode: {get(){ v_console_log("  [*] Node -> parentNode[get]", {});return {} }},
  textContent: {get(){ v_console_log("  [*] Node -> textContent[get]", "新西兰议会表决争议性法案，多名毛利议员现场跳起战舞以示强烈抗议，事件后续可能会如何处理？");return "新西兰议会表决争议性法案，多名毛利议员现场跳起战舞以示强烈抗议，事件后续可能会如何处理？" },set(){ v_console_log("  [*] Node -> textContent[set]", [].slice.call(arguments));return "新西兰议会表决争议性法案，多名毛利议员现场跳起战舞以示强烈抗议，事件后续可能会如何处理？" }},
  nodeType: {get(){ v_console_log("  [*] Node -> nodeType[get]", 1);return 1 }},
  insertBefore: {value: v_saf(function insertBefore(){v_console_log("  [*] Node -> insertBefore[func]", [].slice.call(arguments));})},
  ownerDocument: {get(){ v_console_log("  [*] Node -> ownerDocument[get]", {});return {} }},
  firstChild: {get(){ v_console_log("  [*] Node -> firstChild[get]", {});return {} }},
  nextSibling: {get(){ v_console_log("  [*] Node -> nextSibling[get]", {});return {} }},
  nodeName: {get(){ v_console_log("  [*] Node -> nodeName[get]", "BODY");return "BODY" }},
  removeChild: {value: v_saf(function removeChild(){v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments));})},
  parentElement: {get(){ v_console_log("  [*] Node -> parentElement[get]", {});return {} }},
  isEqualNode: {value: v_saf(function isEqualNode(){v_console_log("  [*] Node -> isEqualNode[func]", [].slice.call(arguments));})},
  contains: {value: v_saf(function contains(){v_console_log("  [*] Node -> contains[func]", [].slice.call(arguments));})},
  ELEMENT_NODE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  ATTRIBUTE_NODE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TEXT_NODE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  CDATA_SECTION_NODE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_REFERENCE_NODE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_NODE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  PROCESSING_INSTRUCTION_NODE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
  COMMENT_NODE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_NODE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_TYPE_NODE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_FRAGMENT_NODE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
  NOTATION_NODE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_DISCONNECTED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_PRECEDING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_FOLLOWING: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINS: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINED_BY: {"value":16,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {"value":32,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Node",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessagePort.prototype, {
  onmessage: {set(){ v_console_log("  [*] MessagePort -> onmessage[set]", [].slice.call(arguments)); }},
  postMessage: {value: v_saf(function postMessage(){v_console_log("  [*] MessagePort -> postMessage[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"MessagePort",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Performance.prototype, {
  now: {value: v_saf(function now(){v_console_log("  [*] Performance -> now[func]", [].slice.call(arguments));})},
  timing: {get(){ v_console_log("  [*] Performance -> timing[get]", v_new(PerformanceTiming));return v_new(PerformanceTiming) }},
  getEntriesByType: {value: v_saf(function getEntriesByType(){v_console_log("  [*] Performance -> getEntriesByType[func]", [].slice.call(arguments));if (arguments[0]=='resource'){return v_new(PerformanceResourceTiming)}})},
  getEntries: {value: v_saf(function getEntries(){v_console_log("  [*] Performance -> getEntries[func]", [].slice.call(arguments));})},
  navigation: {get(){ v_console_log("  [*] Performance -> navigation[get]", {});return {} }},
  memory: {get(){ v_console_log("  [*] Performance -> memory[get]", {});return {} }},
  getEntriesByName: {value: v_saf(function getEntriesByName(){v_console_log("  [*] Performance -> getEntriesByName[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Screen.prototype, {
  width: {get(){ v_console_log("  [*] Screen -> width[get]", 1707);return 1707 }},
  height: {get(){ v_console_log("  [*] Screen -> height[get]", 1067);return 1067 }},
  colorDepth: {get(){ v_console_log("  [*] Screen -> colorDepth[get]", 24);return 24 }},
  orientation: {get(){ v_console_log("  [*] Screen -> orientation[get]", {});return {} }},
  availWidth: {get(){ v_console_log("  [*] Screen -> availWidth[get]", 1707);return 1707 }},
  availHeight: {get(){ v_console_log("  [*] Screen -> availHeight[get]", 1019);return 1019 }},
  [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(ScreenOrientation.prototype, {
  angle: {get(){ v_console_log("  [*] ScreenOrientation -> angle[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"ScreenOrientation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NetworkInformation.prototype, {
  effectiveType: {get(){ v_console_log("  [*] NetworkInformation -> effectiveType[get]", "4g");return "4g" }},
  saveData: {get(){ v_console_log("  [*] NetworkInformation -> saveData[get]", false);return false }},
  downlink: {get(){ v_console_log("  [*] NetworkInformation -> downlink[get]", 10);return 10 }},
  rtt: {get(){ v_console_log("  [*] NetworkInformation -> rtt[get]", 50);return 50 }},
  [Symbol.toStringTag]: {value:"NetworkInformation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleSheet.prototype, {
  cssRules: {get(){ v_console_log("  [*] CSSStyleSheet -> cssRules[get]", {});return {} }},
  insertRule: {value: v_saf(function insertRule(){v_console_log("  [*] CSSStyleSheet -> insertRule[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CSSStyleSheet",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMRect.prototype, {
  width: {get(){ v_console_log("  [*] DOMRect -> width[get]", 1690.666748046875);return 1690.666748046875 }},
  height: {get(){ v_console_log("  [*] DOMRect -> height[get]", 52);return 52 }},
  [Symbol.toStringTag]: {value:"DOMRect",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
  onerror: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[set]", [].slice.call(arguments));return {} }},
  onload: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onload[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onload[set]", [].slice.call(arguments));return {} }},
  onprogress: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onprogress[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessageEvent.prototype, {
  data: {get(){ v_console_log("  [*] MessageEvent -> data[get]", {});return {} }},
  source: {get(){ v_console_log("  [*] MessageEvent -> source[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"MessageEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Worker.prototype, {
  onmessage: {set(){ v_console_log("  [*] Worker -> onmessage[set]", [].slice.call(arguments)); }},
  postMessage: {value: v_saf(function postMessage(){v_console_log("  [*] Worker -> postMessage[func]", [].slice.call(arguments));})},
  terminate: {value: v_saf(function terminate(){v_console_log("  [*] Worker -> terminate[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Worker",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebSocket.prototype, {
  binaryType: {set(){ v_console_log("  [*] WebSocket -> binaryType[set]", [].slice.call(arguments)); }},
  readyState: {get(){ v_console_log("  [*] WebSocket -> readyState[get]", 0);return 0 }},
  onopen: {set(){ v_console_log("  [*] WebSocket -> onopen[set]", [].slice.call(arguments));return 0 }},
  onclose: {set(){ v_console_log("  [*] WebSocket -> onclose[set]", [].slice.call(arguments));return 0 }},
  onerror: {set(){ v_console_log("  [*] WebSocket -> onerror[set]", [].slice.call(arguments));return 0 }},
  onmessage: {set(){ v_console_log("  [*] WebSocket -> onmessage[set]", [].slice.call(arguments));return 0 }},
  bufferedAmount: {get(){ v_console_log("  [*] WebSocket -> bufferedAmount[get]", 137);return 137 }},
  send: {value: v_saf(function send(){v_console_log("  [*] WebSocket -> send[func]", [].slice.call(arguments));})},
  CONNECTING: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  OPEN: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  CLOSING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  CLOSED: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"WebSocket",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TransitionEvent.prototype, {
  propertyName: {get(){ v_console_log("  [*] TransitionEvent -> propertyName[get]", "color");return "color" }},
  [Symbol.toStringTag]: {value:"TransitionEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
  domainLookupEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> domainLookupEnd[get]", 0.8999999761581421);return 0.8999999761581421 }},
  domainLookupStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> domainLookupStart[get]", 0.8999999761581421);return 0.8999999761581421 }},
  connectEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> connectEnd[get]", 0.8999999761581421);return 0.8999999761581421 }},
  connectStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> connectStart[get]", 0.8999999761581421);return 0.8999999761581421 }},
  responseStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> responseStart[get]", 123.10000002384186);return 123.10000002384186 }},
  requestStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> requestStart[get]", 5.199999988079071);return 5.199999988079071 }},
  responseEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> responseEnd[get]", 126.10000002384186);return 126.10000002384186 }},
  secureConnectionStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> secureConnectionStart[get]", 0.8999999761581421);return 0.8999999761581421 }},
  fetchStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> fetchStart[get]", 0.8999999761581421);return 0.8999999761581421 }},
  redirectEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> redirectEnd[get]", 0);return 0 }},
  redirectStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> redirectStart[get]", 0);return 0 }},
  nextHopProtocol: {get(){ v_console_log("  [*] PerformanceResourceTiming -> nextHopProtocol[get]", "h2");return "h2" }},
  [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(UIEvent.prototype, {
  detail: {get(){ v_console_log("  [*] UIEvent -> detail[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PageTransitionEvent.prototype, {
  persisted: {get(){ v_console_log("  [*] PageTransitionEvent -> persisted[get]", false);return false }},
  [Symbol.toStringTag]: {value:"PageTransitionEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(LayoutShift.prototype, {
  hadRecentInput: {get(){ v_console_log("  [*] LayoutShift -> hadRecentInput[get]", false);return false }},
  value: {get(){ v_console_log("  [*] LayoutShift -> value[get]", 0.03487430897322739);return 0.03487430897322739 }},
  [Symbol.toStringTag]: {value:"LayoutShift",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(BaseAudioContext.prototype, {
  createOscillator: {value: v_saf(function createOscillator(){v_console_log("  [*] BaseAudioContext -> createOscillator[func]", [].slice.call(arguments));})},
  currentTime: {get(){ v_console_log("  [*] BaseAudioContext -> currentTime[get]", 0);return 0 }},
  createDynamicsCompressor: {value: v_saf(function createDynamicsCompressor(){v_console_log("  [*] BaseAudioContext -> createDynamicsCompressor[func]", [].slice.call(arguments));})},
  destination: {get(){ v_console_log("  [*] BaseAudioContext -> destination[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"BaseAudioContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(AudioNode.prototype, {
  connect: {value: v_saf(function connect(){v_console_log("  [*] AudioNode -> connect[func]", [].slice.call(arguments));})},
  disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] AudioNode -> disconnect[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"AudioNode",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(OfflineAudioCompletionEvent.prototype, {
  renderedBuffer: {get(){ v_console_log("  [*] OfflineAudioCompletionEvent -> renderedBuffer[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"OfflineAudioCompletionEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Document.prototype, {
  createElement: {value: v_saf(function createElement(){v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments));return _createElement(arguments[0])})},
  currentScript: {get(){ v_console_log("  [*] Document -> currentScript[get]", {});return {} }},
  all: {get(){ v_console_log("  [*] Document -> all[get]", {});return {} }},
  documentElement: {get(){ v_console_log("  [*] Document -> documentElement[get]", document);return document }},
  readyState: {get(){ v_console_log("  [*] Document -> readyState[get]", "interactive");return "interactive" }},
  visibilityState: {get(){ v_console_log("  [*] Document -> visibilityState[get]", "visible");return "visible" }},
  hidden: {get(){ v_console_log("  [*] Document -> hidden[get]", false);return false }},
  referrer: {get(){ v_console_log("  [*] Document -> referrer[get]", "https://www.zhihu.com/search?type=content&q=%E6%AF%9B%E5%88%A9%E6%B3%95%E6%A1%88");return "https://www.zhihu.com/search?type=content&q=%E6%AF%9B%E5%88%A9%E6%B3%95%E6%A1%88" }},
  title: {get(){ v_console_log("  [*] Document -> title[get]", "毛利法案 - 搜索结果 - 知乎");return "毛利法案 - 搜索结果 - 知乎" },set(){ v_console_log("  [*] Document -> title[set]", [].slice.call(arguments));return "毛利法案 - 搜索结果 - 知乎" }},
  scripts: {get(){ v_console_log("  [*] Document -> scripts[get]", {});return {} }},
  activeElement: {get(){ v_console_log("  [*] Document -> activeElement[get]", {});return {} }},
  createTextNode: {value: v_saf(function createTextNode(){v_console_log("  [*] Document -> createTextNode[func]", [].slice.call(arguments));})},
  createElementNS: {value: v_saf(function createElementNS(){v_console_log("  [*] Document -> createElementNS[func]", [].slice.call(arguments));})},
  oncopy: {set(){ v_console_log("  [*] Document -> oncopy[set]", [].slice.call(arguments));return {} }},
  createEvent: {value: v_saf(function createEvent(){v_console_log("  [*] Document -> createEvent[func]", [].slice.call(arguments));})},
  onreadystatechange: {"enumerable":true,"configurable":true},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Element.prototype, {
  getAttribute: {value: v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})},
  scrollTop: {get(){ v_console_log("  [*] Element -> scrollTop[get]", 0);return 0 }},
  setAttribute: {value: v_saf(function setAttribute(){v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));})},
  querySelectorAll: {value: v_saf(function querySelectorAll(){v_console_log("  [*] Element -> querySelectorAll[func]", [].slice.call(arguments));})},
  id: {get(){ v_console_log("  [*] Element -> id[get]", "");return "" },set(){ v_console_log("  [*] Element -> id[set]", [].slice.call(arguments));return "" }},
  classList: {get(){ v_console_log("  [*] Element -> classList[get]", {});return {} }},
  innerHTML: {set(){ v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments));return {} }},
  firstElementChild: {get(){ v_console_log("  [*] Element -> firstElementChild[get]", {});return {} }},
  querySelector: {value: v_saf(function querySelector(){v_console_log("  [*] Element -> querySelector[func]", [].slice.call(arguments));})},
  removeAttribute: {value: v_saf(function removeAttribute(){v_console_log("  [*] Element -> removeAttribute[func]", [].slice.call(arguments));})},
  namespaceURI: {get(){ v_console_log("  [*] Element -> namespaceURI[get]", "http://www.w3.org/1999/xhtml");return "http://www.w3.org/1999/xhtml" }},
  tagName: {get(){ v_console_log("  [*] Element -> tagName[get]", this.v_tagName);return this.v_tagName }},
  insertAdjacentElement: {value: v_saf(function insertAdjacentElement(){v_console_log("  [*] Element -> insertAdjacentElement[func]", [].slice.call(arguments));})},
  className: {get(){ v_console_log("  [*] Element -> className[get]", "itcauecng");return "itcauecng" },set(){ v_console_log("  [*] Element -> className[set]", [].slice.call(arguments));return "itcauecng" }},
  nextElementSibling: {get(){ v_console_log("  [*] Element -> nextElementSibling[get]", {});return {} }},
  clientWidth: {get(){ v_console_log("  [*] Element -> clientWidth[get]", 1691);return 1691 }},
  clientHeight: {get(){ v_console_log("  [*] Element -> clientHeight[get]", 675);return 675 }},
  getBoundingClientRect: {value: v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})},
  append: {value: v_saf(function append(){v_console_log("  [*] Element -> append[func]", [].slice.call(arguments));})},
  children: {get(){ v_console_log("  [*] Element -> children[get]", {});return {} }},
  closest: {value: v_saf(function closest(){v_console_log("  [*] Element -> closest[func]", [].slice.call(arguments));})},
  getElementsByTagName: {value: v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequest.prototype, {
  UNSENT: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
  domInteractive: {get(){ v_console_log("  [*] PerformanceNavigationTiming -> domInteractive[get]", 711.5);return 711.5 }},
  loadEventStart: {get(){ v_console_log("  [*] PerformanceNavigationTiming -> loadEventStart[get]", 1334.3999999761581);return 1334.3999999761581 }},
  domContentLoadedEventEnd: {get(){ v_console_log("  [*] PerformanceNavigationTiming -> domContentLoadedEventEnd[get]", 1065.199999988079);return 1065.199999988079 }},
  type: {get(){ v_console_log("  [*] PerformanceNavigationTiming -> type[get]", "reload");return "reload" }},
  [Symbol.toStringTag]: {value:"PerformanceNavigationTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MouseEvent.prototype, {
  [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(AudioScheduledSourceNode.prototype, {
  start: {value: v_saf(function start(){v_console_log("  [*] AudioScheduledSourceNode -> start[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"AudioScheduledSourceNode",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DynamicsCompressorNode.prototype, {
  threshold: {get(){ v_console_log("  [*] DynamicsCompressorNode -> threshold[get]", {});return {} }},
  knee: {get(){ v_console_log("  [*] DynamicsCompressorNode -> knee[get]", {});return {} }},
  ratio: {get(){ v_console_log("  [*] DynamicsCompressorNode -> ratio[get]", {});return {} }},
  reduction: {get(){ v_console_log("  [*] DynamicsCompressorNode -> reduction[get]", 0);return 0 }},
  attack: {get(){ v_console_log("  [*] DynamicsCompressorNode -> attack[get]", {});return {} }},
  release: {get(){ v_console_log("  [*] DynamicsCompressorNode -> release[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"DynamicsCompressorNode",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(OfflineAudioContext.prototype, {
  startRendering: {value: v_saf(function startRendering(){v_console_log("  [*] OfflineAudioContext -> startRendering[func]", [].slice.call(arguments));})},
  oncomplete: {set(){ v_console_log("  [*] OfflineAudioContext -> oncomplete[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"OfflineAudioContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLElement.prototype, {
  dataset: {get(){ v_console_log("  [*] HTMLElement -> dataset[get]", {});return {} }},
  onload: {get(){ v_console_log("  [*] HTMLElement -> onload[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments));return {} }},
  style: {get(){ v_console_log("  [*] HTMLElement -> style[get]", this.v_style);return this.v_style }},
  onerror: {get(){ v_console_log("  [*] HTMLElement -> onerror[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onerror[set]", [].slice.call(arguments));return {} }},
  contentEditable: {get(){ v_console_log("  [*] HTMLElement -> contentEditable[get]", "inherit");return "inherit" }},
  onclick: {get(){ v_console_log("  [*] HTMLElement -> onclick[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onclick[set]", [].slice.call(arguments));return {} }},
  innerText: {set(){ v_console_log("  [*] HTMLElement -> innerText[set]", [].slice.call(arguments));return {} }},
  oncopy: {set(){ v_console_log("  [*] HTMLElement -> oncopy[set]", [].slice.call(arguments));return {} }},
  click: {value: v_saf(function click(){v_console_log("  [*] HTMLElement -> click[func]", [].slice.call(arguments));})},
  offsetHeight: {get(){ v_console_log("  [*] HTMLElement -> offsetHeight[get]", 82);return 82 }},
  offsetWidth: {get(){ v_console_log("  [*] HTMLElement -> offsetWidth[get]", 653);return 653 }},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PointerEvent.prototype, {
  pointerType: {get(){ v_console_log("  [*] PointerEvent -> pointerType[get]", "");return "" }},
  [Symbol.toStringTag]: {value:"PointerEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(OscillatorNode.prototype, {
  type: {set(){ v_console_log("  [*] OscillatorNode -> type[set]", [].slice.call(arguments)); }},
  frequency: {get(){ v_console_log("  [*] OscillatorNode -> frequency[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"OscillatorNode",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLScriptElement.prototype, {
  crossOrigin: {set(){ v_console_log("  [*] HTMLScriptElement -> crossOrigin[set]", [].slice.call(arguments)); }},
  src: {get(){ v_console_log("  [*] HTMLScriptElement -> src[get]", "https://static.zhihu.com/heifetz/chunks/9165.d879f0eba99f617f88d8.js");return "https://static.zhihu.com/heifetz/chunks/9165.d879f0eba99f617f88d8.js" },set(){ v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments));return "https://static.zhihu.com/heifetz/chunks/9165.d879f0eba99f617f88d8.js" }},
  charset: {set(){ v_console_log("  [*] HTMLScriptElement -> charset[set]", [].slice.call(arguments));return "https://static.zhihu.com/heifetz/chunks/9165.d879f0eba99f617f88d8.js" }},
  [Symbol.toStringTag]: {value:"HTMLScriptElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLImageElement.prototype, {
  src: {get(){ v_console_log("  [*] HTMLImageElement -> src[get]", "https://pica.zhimg.com/80/v2-cebff2235cd53073e717b4047f6ab7ef_200x0.jpg?source=4e949a73");return "https://pica.zhimg.com/80/v2-cebff2235cd53073e717b4047f6ab7ef_200x0.jpg?source=4e949a73" },set(){ v_console_log("  [*] HTMLImageElement -> src[set]", [].slice.call(arguments));return "https://pica.zhimg.com/80/v2-cebff2235cd53073e717b4047f6ab7ef_200x0.jpg?source=4e949a73" }},
  [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMetaElement.prototype, {
  content: {set(){ v_console_log("  [*] HTMLMetaElement -> content[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLMetaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLinkElement.prototype, {
  rel: {get(){ v_console_log("  [*] HTMLLinkElement -> rel[get]", "stylesheet");return "stylesheet" },set(){ v_console_log("  [*] HTMLLinkElement -> rel[set]", [].slice.call(arguments));return "stylesheet" }},
  type: {set(){ v_console_log("  [*] HTMLLinkElement -> type[set]", [].slice.call(arguments));return "stylesheet" }},
  href: {get(){ v_console_log("  [*] HTMLLinkElement -> href[get]", "https://static.zhihu.com/heifetz/9625.216a26f4.fab316e5d80ef71e9e23.css");return "https://static.zhihu.com/heifetz/9625.216a26f4.fab316e5d80ef71e9e23.css" },set(){ v_console_log("  [*] HTMLLinkElement -> href[set]", [].slice.call(arguments));return "https://static.zhihu.com/heifetz/9625.216a26f4.fab316e5d80ef71e9e23.css" }},
  crossOrigin: {set(){ v_console_log("  [*] HTMLLinkElement -> crossOrigin[set]", [].slice.call(arguments));return "https://static.zhihu.com/heifetz/9625.216a26f4.fab316e5d80ef71e9e23.css" }},
  [Symbol.toStringTag]: {value:"HTMLLinkElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLInputElement.prototype, {
  type: {get(){ v_console_log("  [*] HTMLInputElement -> type[get]", "text");return "text" }},
  value: {get(){ v_console_log("  [*] HTMLInputElement -> value[get]", "毛利法案");return "毛利法案" },set(){ v_console_log("  [*] HTMLInputElement -> value[set]", [].slice.call(arguments));return "毛利法案" }},
  defaultValue: {get(){ v_console_log("  [*] HTMLInputElement -> defaultValue[get]", "毛利法案");return "毛利法案" },set(){ v_console_log("  [*] HTMLInputElement -> defaultValue[set]", [].slice.call(arguments));return "毛利法案" }},
  name: {get(){ v_console_log("  [*] HTMLInputElement -> name[get]", "");return "" }},
  defaultChecked: {set(){ v_console_log("  [*] HTMLInputElement -> defaultChecked[set]", [].slice.call(arguments));return "" }},
  [Symbol.toStringTag]: {value:"HTMLInputElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLStyleElement.prototype, {
  sheet: {get(){ v_console_log("  [*] HTMLStyleElement -> sheet[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"HTMLStyleElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCanvasElement.prototype, {
  getContext: {value: v_saf(function getContext(){v_console_log("  [*] HTMLCanvasElement -> getContext[func]", [].slice.call(arguments));if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null})},
  width: {set(){ v_console_log("  [*] HTMLCanvasElement -> width[set]", [].slice.call(arguments)); }},
  height: {set(){ v_console_log("  [*] HTMLCanvasElement -> height[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLAnchorElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLAnchorElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Window.prototype, {
  TEMPORARY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDocument.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHeadElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHeadElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLBodyElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeTypeArray.prototype, {
  [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
  [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Location.prototype, {
  [Symbol.toStringTag]: {value:"Location",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceElementTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceElementTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEventTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceEventTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceLongTaskTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceLongTaskTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMark.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceMark",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMeasure.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceMeasure",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigation.prototype, {
  TYPE_NAVIGATE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  TYPE_RELOAD: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  TYPE_BACK_FORWARD: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TYPE_RESERVED: {"value":255,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"PerformanceNavigation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformancePaintTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformancePaintTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceServerTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceServerTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMediaElement.prototype, {
  NETWORK_EMPTY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_IDLE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_LOADING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_NO_SOURCE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_NOTHING: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  HAVE_METADATA: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HAVE_CURRENT_DATA: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  HAVE_FUTURE_DATA: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_ENOUGH_DATA: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"HTMLMediaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLUnknownElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLUnknownElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Touch.prototype, {
  [Symbol.toStringTag]: {value:"Touch",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TouchEvent.prototype, {
  [Symbol.toStringTag]: {value:"TouchEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHtmlElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHtmlElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDivElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDivElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTitleElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTitleElement",writable:false,enumerable:false,configurable:true},
})




if (typeof __dirname != 'undefined'){ __dirname = undefined }
if (typeof __filename != 'undefined'){ __filename = undefined }
if (typeof require != 'undefined'){ require = undefined }
if (typeof exports != 'undefined'){ exports = undefined }
if (typeof module != 'undefined'){ module = undefined }
if (typeof Buffer != 'undefined'){ Buffer = undefined }
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
  get(a,b){ if(b=='global'){return}return a[b] || __globalThis__[b] },
  set(a,b,c){
    if (b == 'onclick' && typeof c == 'function') { window.addEventListener('click', c) }
    if (b == 'onmousedown' && typeof c == 'function') { window.addEventListener('mousedown', c) }
    if (b == 'onmouseup' && typeof c == 'function') { window.addEventListener('mouseup', c) }
    __globalThis__[b] = a[b] = c
    return true
  },
})
var v_hasOwnProperty = Object.prototype.hasOwnProperty
Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty(){
  if (this == window){ return v_hasOwnProperty.apply(__globalThis__, arguments) }
  return v_hasOwnProperty.apply(this, arguments)
})
Object.defineProperties(__globalThis__, {[Symbol.toStringTag]:{value:'Window'}})
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.history = v_new(History)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.crypto = v_new(Crypto)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)

var win = {
  window: window,
  frames: window,
  parent: window,
  self: window,
  top: window,
}
function v_repair_this(){
  win = {
    window: __globalThis__,
    frames: __globalThis__,
    parent: __globalThis__,
    self: __globalThis__,
    top: __globalThis__,
  }
}
Object.defineProperties(window, {
  window: {get:function(){return win.window},set:function(e){return win.window = e}},
  frames: {get:function(){return win.frames},set:function(e){return win.frames = e}},
  parent: {get:function(){return win.parent},set:function(e){return win.parent = e}},
  self:   {get:function(){return win.self},  set:function(e){return win.self = e}},
  top:    {get:function(){return win.top},   set:function(e){return win.top = e}},
})

function _createElement(name){
  var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLScriptElement":["script"],"HTMLImageElement":["img"],"HTMLMetaElement":["meta"],"HTMLLinkElement":["link"],"HTMLInputElement":["input"],"HTMLStyleElement":["style"],"HTMLCanvasElement":["canvas"],"HTMLAnchorElement":["a"],"HTMLHeadElement":["head"],"HTMLBodyElement":["body"],"HTMLMediaElement":[],"HTMLUnknownElement":[]}
  var ret, htmlmapkeys = Object.keys(htmlmap)
  name = name.toLocaleLowerCase()
  for (var i = 0; i < htmlmapkeys.length; i++) {
    if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1){
      ret = v_new(window[htmlmapkeys[i]])
      break
    }
  }
  if (!ret){ ret = v_new(HTMLUnknownElement) }
  if (typeof CSSStyleDeclaration != 'undefined') { ret.v_style = v_new(CSSStyleDeclaration) }
  ret.v_tagName = name.toUpperCase()
  return ret
}
function init_cookie(cookie){
  var cache = (cookie || "").trim();
  if (!cache){
    cache = ''
  }else if (cache.charAt(cache.length-1) != ';'){
    cache += '; '
  }else{
    cache += ' '
  }
  Object.defineProperty(Document.prototype, 'cookie', {
    get: function() {
      var r = cache.slice(0,cache.length-2);
      v_console_log('  [*] document -> cookie[get]', r)
      return r
    },
    set: function(c) {
      v_console_log('  [*] document -> cookie[set]', c)
      var ncookie = c.split(";")[0].split("=");
      if (!ncookie.slice(1).join('')){
        return c
      }
      var key = ncookie[0].trim()
      var val = ncookie.slice(1).join('').trim()
      var newc = key+'='+val
      var flag = false;
      var temp = cache.split("; ").map(function(a) {
        if (a.split("=")[0] === key) {
          flag = true;
          return newc;
        }
        return a;
      })
      cache = temp.join("; ");
      if (!flag) {
        cache += newc + "; ";
      }
      return cache;
    }
  });
}
function v_hook_href(obj, name, initurl){
  var r = Object.defineProperty(obj, 'href', {
    get: function(){
      if (!(this.protocol) && !(this.hostname)){
        r = ''
      }else{
        r = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
      }
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[get]:`, JSON.stringify(r))
      return r
    },
    set: function(href){
      href = href.trim()
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[set]:`, JSON.stringify(href))
      if (href.startsWith("http://") || href.startsWith("https://")){/*ok*/}
      else if(href.startsWith("//")){ href = (this.protocol?this.protocol:'http:') + href}
      else{ href = this.protocol+"//"+this.hostname + (this.port?":"+this.port:"") + '/' + ((href[0]=='/')?href.slice(1):href) }
      var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
      this.protocol = a[1] ? a[1] : "";
      this.hostname = a[2] ? a[2] : "";
      this.port     = a[3] ? a[3] : "";
      this.pathname = a[4] ? a[4] : "";
      this.search   = a[5] ? a[5] : "";
      this.hash     = a[6] ? a[6] : "";
      this.host     = this.hostname + (this.port?":"+this.port:"") ;
      this.origin   = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "");
    }
  });
  if (initurl && initurl.trim()){ var temp=v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
  return r
}
function v_hook_storage(){
  Storage.prototype.clear      = v_saf(function(){          v_console_log(`  [*] Storage -> clear[func]:`); var self=this;Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
  Storage.prototype.getItem    = v_saf(function(key){       v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key)?String(this[key]):null); return r}, 'getItem')
  Storage.prototype.setItem    = v_saf(function(key, val){  v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined)?null:String(val) }, 'setItem')
  Storage.prototype.key        = v_saf(function(key){       v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key||0];} , 'key')
  Storage.prototype.removeItem = v_saf(function(key){       v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key];}, 'removeItem')
  Object.defineProperty(Storage.prototype, 'length', {get: function(){
    if(this===Storage.prototype){ throw TypeError('Illegal invocation') }return Object.keys(this).length
  }})
  window.sessionStorage = new Proxy(sessionStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
  window.localStorage = new Proxy(localStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
}
function v_init_document(){
  Document.prototype.getElementById = v_saf(function getElementById(name){ var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
  Document.prototype.querySelector = v_saf(function querySelector(name){ var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
  Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name){ var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
  Document.prototype.getElementsByName = v_saf(function getElementsByName(name){ var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
  Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name){ var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
  Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name){ var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
  Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name){ var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
  var v_head = v_new(HTMLHeadElement)
  var v_body = v_new(HTMLBodyElement)
  Object.defineProperties(Document.prototype, {
    head: {get(){ v_console_log("  [*] Document -> head[get]", v_head);return v_head }},
    body: {get(){ v_console_log("  [*] Document -> body[get]", v_body);return v_body }},
  })
}
function v_init_canvas(){
  HTMLCanvasElement.prototype.getContext = function(){if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null}
  HTMLCanvasElement.prototype.toDataURL = function(){return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"}
}
var v_start_stamp = +new Date
var v_fake_stamp = +new Date
function v_init_event_target(){
  v_events = {}
  function add_event(_this, x){
    if (!v_events[x[0]]){
      v_events[x[0]] = []
    }
    v_events[x[0]].push([_this, x[1].bind(_this)])
  }
  function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
    if (type == 'click'){
      var m = new v_saf(function PointerEvent(){})
      m.pointerType = "mouse"
    }else{
      var m = new v_saf(function MouseEvent(){})
    }
    m.isTrusted = true
    m.type = type
    m.canBubble = canBubble
    m.cancelable = cancelable
    m.view = view
    m.detail = detail
    m.screenX = screenX; m.movementX = screenX
    m.screenY = screenY; m.movementY = screenY
    m.clientX = clientX; m.layerX = clientX; m.offsetX = clientX; m.pageX = clientX; m.x = clientX;
    m.clientY = clientY; m.layerY = clientY; m.offsetY = clientY; m.pageY = clientY; m.y = clientY;
    m.ctrlKey = ctrlKey
    m.altKey = altKey
    m.shiftKey = shiftKey
    m.metaKey = metaKey
    m.button = button
    m.relatedTarget = relatedTarget
    return m
  }
  function make_mouse(type, x, y){
    return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
  }
  function mouse_click(x, y){
    for (var i = 0; i < (v_events['click'] || []).length; i++) { v_events['click'][i][1](make_mouse('click', x, y)) }
    for (var i = 0; i < (v_events['mousedown'] || []).length; i++) { v_events['mousedown'][i][1](make_mouse('mousedown', x, y)) }
    for (var i = 0; i < (v_events['mouseup'] || []).length; i++) { v_events['mouseup'][i][1](make_mouse('mouseup', x, y)) }
  }
  var offr = Math.random()
  function make_touch(_this, type, x, y, timeStamp){
    var offx = Math.random()
    var offy = Math.random()
    var t = v_new(new v_saf(function Touch(){}))
    t = clientX = offx + x
    t = clientY = offy + y
    t = force = 1
    t = identifier = 0
    t = pageX = offx + x
    t = pageY = offy + y
    t = radiusX = 28 + offr
    t = radiusY = 28 + offr
    t = rotationAngle = 0
    t = screenX = 0
    t = screenY = 0
    var e = v_new(new v_saf(function TouchEvent(){}))
    e.isTrusted = true
    e.altKey = false
    e.bubbles = true
    e.cancelBubble = false
    e.cancelable = false
    e.changedTouches = e.targetTouches = e.touches = [t]
    e.composed = true
    e.ctrlKey = false
    e.currentTarget = null
    e.defaultPrevented = false
    e.detail = 0
    e.eventPhase = 0
    e.metaKey = false
    e.path = _this == window ? [window] : [_this, window]
    e.returnValue = true
    e.shiftKey = false
    e.sourceCapabilities = new v_saf(function InputDeviceCapabilities(){this.firesTouchEvents = true})
    e.srcElement = _this
    e.target = _this
    e.type = type
    e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random()*20) - v_start_stamp)
    e.view = window
    e.which = 0
    return e
  }
  function make_trace(x1, y1, x2, y2){
    // 贝塞尔曲线
    function step_len(x1, y1, x2, y2){
      var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
      return (ln / 10) ^ 0
    }
    var slen = step_len(x1, y1, x2, y2)
    if (slen < 3){
      return []
    }
    function factorial(x){
      for(var y = 1; x > 1;  x--) {
        y *= x
      }
      return y;
    }
    var lp = Math.random()
    var rp = Math.random()
    var xx1 = (x1 + (x2 - x1) / 12 * (4-lp*4)) ^ 0
    var yy1 = (y1 + (y2 - y1) / 12 * (8+lp*4)) ^ 0
    var xx2 = (x1 + (x2 - x1) / 12 * (8+rp*4)) ^ 0
    var yy2 = (y1 + (y2 - y1) / 12 * (4-rp*4)) ^ 0
    var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
    var N = points.length
    var n = N - 1
    var traces = []
    var step = slen
    for (var T = 0; T < step+1; T++) {
      var t = T*(1/step)
      var x = 0
      var y = 0
      for (var i = 0; i < N; i++) {
        var B = factorial(n)*t**i*(1-t)**(n-i)/(factorial(i)*factorial(n-i))
        x += points[i][0]*B
        y += points[i][1]*B
      }
      traces.push([x^0, y^0])
    }
    return traces
  }
  function touch(x1, y1, x2, y2){
    if (x2 == undefined && y2 == undefined){
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var i = 0; i < (v_events['touchstart'] || []).length; i++) { v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1)) }
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['touchmove'] || []).length; i++) { v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y)) }
    }
    for (var i = 0; i < (v_events['touchend'] || []).length; i++) { v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2)) }
  }
  function mouse_move(x1, y1, x2, y2){
    if (x2 == undefined && y2 == undefined){
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['mousemove'] || []).length; i++) { v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y)) }
    }
  }
  window.make_mouse = make_mouse
  window.mouse_click = mouse_click
  window.mouse_move = mouse_move
  window.touch = touch
  EventTarget.prototype.addEventListener = function(){v_console_log('  [*] EventTarget -> addEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  EventTarget.prototype.dispatchEvent = function(){v_console_log('  [*] EventTarget -> dispatchEvent[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  EventTarget.prototype.removeEventListener = function(){v_console_log('  [*] EventTarget -> removeEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
}
function v_init_Element_prototype(){
  Element.prototype.getAnimations          = Element.prototype.getAnimations          || v_saf(function getAnimations(){v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments));})
  Element.prototype.getAttribute           = Element.prototype.getAttribute           || v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNS         = Element.prototype.getAttributeNS         || v_saf(function getAttributeNS(){v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNames      = Element.prototype.getAttributeNames      || v_saf(function getAttributeNames(){v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNode       = Element.prototype.getAttributeNode       || v_saf(function getAttributeNode(){v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNodeNS     = Element.prototype.getAttributeNodeNS     || v_saf(function getAttributeNodeNS(){v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments));})
  Element.prototype.getBoundingClientRect  = Element.prototype.getBoundingClientRect  || v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})
  Element.prototype.getClientRects         = Element.prototype.getClientRects         || v_saf(function getClientRects(){v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByTagName   = Element.prototype.getElementsByTagName   || v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS(){v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments));})
  Element.prototype.getInnerHTML           = Element.prototype.getInnerHTML           || v_saf(function getInnerHTML(){v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments));})
  Element.prototype.hasAttribute           = Element.prototype.hasAttribute           || v_saf(function hasAttribute(){v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));})
  Element.prototype.hasAttributeNS         = Element.prototype.hasAttributeNS         || v_saf(function hasAttributeNS(){v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments));})
  Element.prototype.hasAttributes          = Element.prototype.hasAttributes          || v_saf(function hasAttributes(){v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments));})
  Element.prototype.hasPointerCapture      = Element.prototype.hasPointerCapture      || v_saf(function hasPointerCapture(){v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments));})
  Element.prototype.webkitMatchesSelector  = Element.prototype.webkitMatchesSelector  || v_saf(function webkitMatchesSelector(){v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));})
}
function v_init_DOMTokenList_prototype(){
  DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains(){v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries(){v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach(){v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item(){v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys(){v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length(){v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove(){v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace(){v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports(){v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle(){v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments));})
}
function v_init_CSSStyleDeclaration_prototype(){
  CSSStyleDeclaration.prototype["zoom"] = ''
  CSSStyleDeclaration.prototype["resize"] = ''
  CSSStyleDeclaration.prototype["text-rendering"] = ''
  CSSStyleDeclaration.prototype["text-align-last"] = ''
}
function v_init_PointerEvent_prototype(){
  PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents(){v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments));})
  PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents(){v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments));})
}
function v_init_PerformanceTiming_prototype(){
  try{
    Object.defineProperties(PerformanceTiming.prototype, {
      connectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd(){v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments));})},
      connectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart(){v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments));})},
      domComplete: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete(){v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments));})},
      domContentLoadedEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventEnd(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments));})},
      domContentLoadedEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventStart(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments));})},
      domInteractive: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domInteractive(){v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments));})},
      domLoading: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading(){v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments));})},
      domainLookupEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupEnd(){v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments));})},
      domainLookupStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupStart(){v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments));})},
      fetchStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart(){v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments));})},
      loadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd(){v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments));})},
      loadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventStart(){v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments));})},
      navigationStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function navigationStart(){v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments));})},
      redirectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd(){v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments));})},
      redirectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart(){v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments));})},
      requestStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart(){v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments));})},
      responseEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd(){v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments));})},
      responseStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart(){v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments));})},
      secureConnectionStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function secureConnectionStart(){v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments));})},
      unloadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventEnd(){v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments));})},
      unloadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventStart(){v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments));})},
    })
  }catch(e){}
}
function mk_atob_btoa(r){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);return{atob:function(r){var a,e,o,h,c,i,n;for(i=r.length,c=0,n="";c<i;){do{a=t[255&r.charCodeAt(c++)]}while(c<i&&-1==a);if(-1==a)break;do{e=t[255&r.charCodeAt(c++)]}while(c<i&&-1==e);if(-1==e)break;n+=String.fromCharCode(a<<2|(48&e)>>4);do{if(61==(o=255&r.charCodeAt(c++)))return n;o=t[o]}while(c<i&&-1==o);if(-1==o)break;n+=String.fromCharCode((15&e)<<4|(60&o)>>2);do{if(61==(h=255&r.charCodeAt(c++)))return n;h=t[h]}while(c<i&&-1==h);if(-1==h)break;n+=String.fromCharCode((3&o)<<6|h)}return n},btoa:function(r){var t,e,o,h,c,i;for(o=r.length,e=0,t="";e<o;){if(h=255&r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4),t+="==";break}if(c=r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2),t+="=";break}i=r.charCodeAt(e++),t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2|(192&i)>>6),t+=a.charAt(63&i)}return t}}}
var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

init_cookie("_xsrf=a2VMxk9NGZuwsA5FwpApeEAJoSJ5scoI; _zap=88477bc6-71b9-4289-91da-d8744ee30a5b; d_c0=AACSle1OoRmPTky12_QnGHmJPHa6XORHgmA=|1733101947; __snaker__id=D3w2USVAsoS7FOV7; gdxidpyhxdE=AAndCyaYp1%2F%2BbR4PBk8%2B6QMSe6wsLbavkWOsYTa3M35JCdHYEkJknx8pKEG4pAYNH%2BrbyU8uT6KWWzDESt0YPDtoSjYCPtJoCcIcY3wjWYN7aJk%2FR5HO07sKiWRKjmngt6NudWuhOI0E4gr0vaWqDrRp8DVSHBBWoCmjU5ITTV4RRMAR%3A1733113108665; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1733101945,1733380797,1733478971; HMACCOUNT=C54EA98278FFA5FF; __zse_ck=003_bCDLKIh4Vg7Sb9uTEkVeXyINc8P=BFCLZEgVOjhWPkdepgJWMB1mJC3IeXiSqgvNR7G7RCMCXFlMh4s=G/0bakX/QdjpCS27BT8DrkgvoTWH; SESSIONID=CCtK8W6MUMGk6DmUO9Tjul6pimrH5bJMFGv2nKm92MH; JOID=UV8cCk4rA5s7KBlvPiBRQ_DJXcwtbE7vfBZKV3N4StJQElsGZZ-HwlYqE2EyXMto93k79w9dtC_Ci6SaGLcv088=; osd=W1AUCkMhDJM7JRNgNiBcSf_BXcEnY0bvcRxFX3N1QN1YElYMapeHz1wlG2E_VsRg93Qx-AdduSXNg6SXErgn08I=; BEC=b7b0f394f3fd074c6bdd2ebbdd598b4e; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1733713740")
v_hook_href(window.location, 'location', "https://www.zhihu.com/search?type=content&q=%E6%AF%9B%E5%88%A9%E6%B3%95%E6%A1%88")
Location.prototype.toString = v_saf(function toString(){ return "https://www.zhihu.com/search?type=content&q=%E6%AF%9B%E5%88%A9%E6%B3%95%E6%A1%88" })
window.alert = v_saf(function alert(){})
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
v_init_Element_prototype()
v_init_DOMTokenList_prototype()
v_init_CSSStyleDeclaration_prototype()
v_init_PointerEvent_prototype()
v_init_PerformanceTiming_prototype()
window.innerWidth = 1707
window.innerHeight = 175
window.outerHeight = 1019
window.outerWidth = 1707
window.isSecureContext = true
window.origin = location.origin
function v_getele(name, func){
  if(name == "js-clientConfig" && func == "getElementById"){ return v_new(HTMLScriptElement) }
  if(name == "ariascripts" && func == "getElementById"){ return v_new(HTMLScriptElement) }
  if(name == ":defined" && func == "querySelector"){ return v_new(HTMLHtmlElement) }
  if(name == "head" && func == "querySelector"){ return v_new(HTMLHeadElement) }
  if(name == "[http-equiv='X-UA-Compatible']" && func == "querySelector"){ return v_new(HTMLMetaElement) }
  if(name == "js-initialData" && func == "getElementById"){ return v_new(HTMLScriptElement) }
  if(name == "root" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "style[data-emotion-css=\"1oxku7z\"]" && func == "querySelector"){ return v_new(HTMLStyleElement) }
  return null
}
function v_geteles(name, func){
  if(name == "style[data-emotion-css]" && func == "querySelectorAll"){ return [v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement)] }
  if(name == "body" && func == "querySelectorAll"){ return [v_new(HTMLBodyElement)] }
  if(name == "meta[http-equiv]" && func == "querySelectorAll"){ return [v_new(HTMLMetaElement)] }
  if(name == "script" && func == "getElementsByTagName"){ return [v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement)] }
  if(name == "link" && func == "getElementsByTagName"){ return [v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement)] }
  if(name == "head" && func == "getElementsByTagName"){ return [v_new(HTMLHeadElement)] }
  if(name == "style" && func == "getElementsByTagName"){ return [v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement)] }
  if(name == "link[rel=\"stylesheet\"]" && func == "querySelectorAll"){ return [v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement)] }
  if(name == "html" && func == "getElementsByTagName"){ return [v_new(HTMLHtmlElement)] }
  if(name == "title" && func == "getElementsByTagName"){ return [v_new(HTMLTitleElement)] }
  if(name == "link[data-rh]" && func == "querySelectorAll"){ return [v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement)] }
  if(name == "#ariascripts" && func == "querySelectorAll"){ return [v_new(HTMLScriptElement)] }
  if(name == "adsbox" && func == "getElementsByClassName"){ return [] }
  return null
}
var v_Date = Date;
var v_base_time = +new Date;
(function(){
  function ftime(){
    return new v_Date() - v_base_time + v_to_time
  }
  Date = function(_Date) {
    var bind = Function.bind;
    var unbind = bind.bind(bind);
    function instantiate(constructor, args) {
      return new (unbind(constructor, null).apply(null, args));
    }
    var names = Object.getOwnPropertyNames(_Date);
    for (var i = 0; i < names.length; i++) {
      if (names[i]in Date)
        continue;
      var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
      Object.defineProperty(Date, names[i], desc);
    }
    function Date() {
      var date = instantiate(_Date, [ftime()]);
      return date;
    }
    Date.prototype = _Date.prototype
    return v_saf(Date);
  }(Date);
  Date.now = v_saf(function now(){ return ftime() })
})();
var v_to_time = +new v_Date
// var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间

v_repair_this() // 修复 window 指向global
v_new_toggle = undefined
// v_console_log = function(){} // 关闭日志输出;

Math.random = function (){
    return 1;
};


/**
 * xZse96 l加密对象
 */
(function (){
    var h = {
    "zk": [
        1170614578,
        1024848638,
        1413669199,
        -343334464,
        -766094290,
        -1373058082,
        -143119608,
        -297228157,
        1933479194,
        -971186181,
        -406453910,
        460404854,
        -547427574,
        -1891326262,
        -1679095901,
        2119585428,
        -2029270069,
        2035090028,
        -1521520070,
        -5587175,
        -77751101,
        -2094365853,
        -1243052806,
        1579901135,
        1321810770,
        456816404,
        -1391643889,
        -229302305,
        330002838,
        -788960546,
        363569021,
        -1947871109
    ],
    "zb": [
        20,
        223,
        245,
        7,
        248,
        2,
        194,
        209,
        87,
        6,
        227,
        253,
        240,
        128,
        222,
        91,
        237,
        9,
        125,
        157,
        230,
        93,
        252,
        205,
        90,
        79,
        144,
        199,
        159,
        197,
        186,
        167,
        39,
        37,
        156,
        198,
        38,
        42,
        43,
        168,
        217,
        153,
        15,
        103,
        80,
        189,
        71,
        191,
        97,
        84,
        247,
        95,
        36,
        69,
        14,
        35,
        12,
        171,
        28,
        114,
        178,
        148,
        86,
        182,
        32,
        83,
        158,
        109,
        22,
        255,
        94,
        238,
        151,
        85,
        77,
        124,
        254,
        18,
        4,
        26,
        123,
        176,
        232,
        193,
        131,
        172,
        143,
        142,
        150,
        30,
        10,
        146,
        162,
        62,
        224,
        218,
        196,
        229,
        1,
        192,
        213,
        27,
        110,
        56,
        231,
        180,
        138,
        107,
        242,
        187,
        54,
        120,
        19,
        44,
        117,
        228,
        215,
        203,
        53,
        239,
        251,
        127,
        81,
        11,
        133,
        96,
        204,
        132,
        41,
        115,
        73,
        55,
        249,
        147,
        102,
        48,
        122,
        145,
        106,
        118,
        74,
        190,
        29,
        16,
        174,
        5,
        177,
        129,
        63,
        113,
        99,
        31,
        161,
        76,
        246,
        34,
        211,
        13,
        60,
        68,
        207,
        160,
        65,
        111,
        82,
        165,
        67,
        169,
        225,
        57,
        112,
        244,
        155,
        51,
        236,
        200,
        233,
        58,
        61,
        47,
        100,
        137,
        185,
        64,
        17,
        70,
        234,
        163,
        219,
        108,
        170,
        166,
        59,
        149,
        52,
        105,
        24,
        212,
        78,
        173,
        45,
        0,
        116,
        226,
        119,
        136,
        206,
        135,
        175,
        195,
        25,
        92,
        121,
        208,
        126,
        139,
        3,
        75,
        141,
        21,
        130,
        98,
        241,
        40,
        154,
        66,
        184,
        49,
        181,
        46,
        243,
        88,
        101,
        183,
        8,
        23,
        72,
        188,
        104,
        179,
        210,
        134,
        250,
        201,
        164,
        89,
        216,
        202,
        220,
        50,
        221,
        152,
        140,
        33,
        235,
        214
    ],
    "zm": [
        120,
        50,
        98,
        101,
        99,
        98,
        119,
        100,
        103,
        107,
        99,
        119,
        97,
        99,
        110,
        111
    ]
};

     x = function(tt) {
            return C(tt) || s(tt) || t()
        }
          , C = function(tt) {
            if (Array.isArray(tt)) {
                for (var te = 0, tr = Array(tt.length); te < tt.length; te++)
                    tr[te] = tt[te];
                return tr
            }
        }
          , s = function(tt) {
            if (Symbol.A in Object(tt) || "[object Arguments]" === Object.prototype.toString.call(tt))
                return Array.from(tt)
        }
          , t = function() {
            throw TypeError("Invalid attempt to spread non-iterable instance")
        }
          , i = function(tt, te, tr) {
            te[tr] = 255 & tt >>> 24,
            te[tr + 1] = 255 & tt >>> 16,
            te[tr + 2] = 255 & tt >>> 8,
            te[tr + 3] = 255 & tt
        }
          , B = function(tt, te) {
            return (255 & tt[te]) << 24 | (255 & tt[te + 1]) << 16 | (255 & tt[te + 2]) << 8 | 255 & tt[te + 3]
        }
          , Q = function(tt, te) {
            return (4294967295 & tt) << te | tt >>> 32 - te
        }
          , G = function(tt) {
            var te = [, , , , ]
              , tr = [, , , , ];
            i(tt, te, 0),
            tr[0] = h.zb[255 & te[0]],
            tr[1] = h.zb[255 & te[1]],
            tr[2] = h.zb[255 & te[2]],
            tr[3] = h.zb[255 & te[3]];
            var ti = B(tr, 0);
            return ti ^ Q(ti, 2) ^ Q(ti, 10) ^ Q(ti, 18) ^ Q(ti, 24)
        }
    B = function(tt, te) {
        return (255 & tt[te]) << 24 | (255 & tt[te + 1]) << 16 | (255 & tt[te + 2]) << 8 | 255 & tt[te + 3]
    };
     __g = {
        x: function(tt, te) {
            for (var tr = [], ti = tt.length, ta = 0; 0 < ti; ti -= 16) {
                for (var tu = tt.slice(16 * ta, 16 * (ta + 1)), tc = Array(16), tf = 0; tf < 16; tf++)
                    tc[tf] = tu[tf] ^ te[tf];
                te = __g.r(tc),
                tr = tr.concat(te),
                ta++
            }
            return tr
        },
        r: function(tt) {
            var te = Array(16)
              , tr = Array(36);
            tr[0] = B(tt, 0),
            tr[1] = B(tt, 4),
            tr[2] = B(tt, 8),
            tr[3] = B(tt, 12);
            for (var ti = 0; ti < 32; ti++) {
                var ta = G(tr[ti + 1] ^ tr[ti + 2] ^ tr[ti + 3] ^ h.zk[ti]);
                tr[ti + 4] = tr[ti] ^ ta
            }
            return i(tr[35], te, 0),
            i(tr[34], te, 4),
            i(tr[33], te, 8),
            i(tr[32], te, 12),
            te
        }
    };
    function tr(tt) {
        return tt && "undefined" != typeof Symbol && tt.constructor === Symbol ? "symbol" : typeof tt
    };
    function o(tt) {
        return (o = "function" == typeof Symbol && "symbol" == tr(Symbol.A) ? function(tt) {
            return void 0 === tt ? "undefined" : tr(tt)
        }
        : function(tt) {
            return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : void 0 === tt ? "undefined" : tr(tt)
        }
        )(tt)
    };
    l = function() {
            this.C = [0, 0, 0, 0],
            this.s = 0,
            this.t = [],
            this.S = [],
            this.h = [],
            this.i = [],
            this.B = [],
            this.Q = !1,
            this.G = [],
            this.D = [],
            this.w = 1024,
            this.g = null,
            this.a = Date.now(),
            this.e = 0,
            this.T = 255,
            this.V = null,
            this.U = Date.now,
            this.M = Array(32)
        };
        l.prototype.O = function(A, C, s) {
            for (var t, S, h, i, B, Q, G, D, w, g, a, e, E, T, r, V, U, M, O, c, I; this.T < this.w; )
                try {
                    switch (this.T) {
                    case 27:
                        this.C[this.c] = this.C[this.I] >> this.C[this.F],
                        this.M[12] = 35,
                        this.T = this.T * (this.C.length + (this.M[13] ? 3 : 9)) + 1;
                        break;
                    case 34:
                        this.C[this.c] = this.C[this.I] & this.C[this.F],
                        this.T = this.T * (this.M[15] - 6) + 12;
                        break;
                    case 41:
                        this.C[this.c] = this.C[this.I] <= this.C[this.F],
                        this.T = 8 * this.T + 27;
                        break;
                    case 48:
                        this.C[this.c] = !this.C[this.I],
                        this.T = 7 * this.T + 16;
                        break;
                    case 50:
                        this.C[this.c] = this.C[this.I] | this.C[this.F],
                        this.T = 6 * this.T + 52;
                        break;
                    case 57:
                        this.C[this.c] = this.C[this.I] >>> this.C[this.F],
                        this.T = 7 * this.T - 47;
                        break;
                    case 64:
                        this.C[this.c] = this.C[this.I] << this.C[this.F],
                        this.T = 5 * this.T + 32;
                        break;
                    case 71:
                        this.C[this.c] = this.C[this.I] ^ this.C[this.F],
                        this.T = 6 * this.T - 74;
                        break;
                    case 78:
                        this.C[this.c] = this.C[this.I] & this.C[this.F],
                        this.T = 4 * this.T + 40;
                        break;
                    case 80:
                        this.C[this.c] = this.C[this.I] < this.C[this.F],
                        this.T = 5 * this.T - 48;
                        break;
                    case 87:
                        this.C[this.c] = -this.C[this.I],
                        this.T = 3 * this.T + 91;
                        break;
                    case 94:
                        this.C[this.c] = this.C[this.I] > this.C[this.F],
                        this.T = 4 * this.T - 24;
                        break;
                    case 101:
                        this.C[this.c] = this.C[this.I]in this.C[this.F],
                        this.T = 3 * this.T + 49;
                        break;
                    case 108:
                        this.C[this.c] = o(this.C[this.I]),
                        this.T = 2 * this.T + 136;
                        break;
                    case 110:
                        this.C[this.c] = this.C[this.I] !== this.C[this.F],
                        this.T += 242;
                        break;
                    case 117:
                        this.C[this.c] = this.C[this.I] && this.C[this.F],
                        this.T = 3 * this.T + 1;
                        break;
                    case 124:
                        this.C[this.c] = this.C[this.I] || this.C[this.F],
                        this.T += 228;
                        break;
                    case 131:
                        this.C[this.c] = this.C[this.I] >= this.C[this.F],
                        this.T = 3 * this.T - 41;
                        break;
                    case 138:
                        this.C[this.c] = this.C[this.I] == this.C[this.F],
                        this.T = 2 * this.T + 76;
                        break;
                    case 140:
                        this.C[this.c] = this.C[this.I] % this.C[this.F],
                        this.T += 212;
                        break;
                    case 147:
                        this.C[this.c] = this.C[this.I] / this.C[this.F],
                        this.T += 205;
                        break;
                    case 154:
                        this.C[this.c] = this.C[this.I] * this.C[this.F],
                        this.T += 198;
                        break;
                    case 161:
                        this.C[this.c] = this.C[this.I] - this.C[this.F],
                        this.T += 191;
                        break;
                    case 168:
                        this.C[this.c] = this.C[this.I] + this.C[this.F],
                        this.T = 2 * this.T + 16;
                        break;
                    case 254:
                        this.C[this.c] = eval(i),
                        this.T += 20 < this.M[11] ? 98 : 89;
                        break;
                    case 255:
                        this.s = C || 0,
                        this.M[26] = 52,
                        this.T += this.M[13] ? 8 : 6;
                        break;
                    case 258:
                        g = {};
                        for (var F = 0; F < this.k; F++)
                            e = this.i.pop(),
                            a = this.i.pop(),
                            g[a] = e;
                        this.C[this.W] = g,
                        this.T += 94;
                        break;
                    case 261:
                        this.D = s || [],
                        this.M[11] = 68,
                        this.T += this.M[26] ? 3 : 5;
                        break;
                    case 264:
                        this.M[15] = 16,
                        this.T = "string" == typeof A ? 331 : 336;
                        break;
                    case 266:
                        this.C[this.I][i] = this.i.pop(),
                        this.T += 86;
                        break;
                    case 278:
                        this.C[this.c] = this.C[this.I][i],
                        this.T += this.M[22] ? 63 : 74;
                        break;
                    case 283:
                        this.C[this.c] = eval(String.fromCharCode(this.C[this.I]));
                        break;
                    case 300:
                        S = this.U(),
                        this.M[0] = 66,
                        this.T += this.M[11];
                        break;
                    case 331:
                        D = atob(A),
                        w = D.charCodeAt(0) << 16 | D.charCodeAt(1) << 8 | D.charCodeAt(2);
                        for (var k = 3; k < w + 3; k += 3)
                            this.G.push(D.charCodeAt(k) << 16 | D.charCodeAt(k + 1) << 8 | D.charCodeAt(k + 2));
                        for (V = w + 3; V < D.length; )
                            E = D.charCodeAt(V) << 8 | D.charCodeAt(V + 1),
                            T = D.slice(V + 2, V + 2 + E),
                            this.D.push(T),
                            V += E + 2;
                        this.M[21] = 8,
                        this.T += 1e3 < V ? 21 : 35;
                        break;
                    case 336:
                        this.G = A,
                        this.D = s,
                        this.M[18] = 134,
                        this.T += this.M[15];
                        break;
                    case 344:
                        this.T = 3 * this.T - 8;
                        break;
                    case 350:
                        U = 66,
                        M = [],
                        I = this.D[this.k];
                        for (var W = 0; W < I.length; W++)
                            M.push(String.fromCharCode(24 ^ I.charCodeAt(W) ^ U)),
                            U = 24 ^ I.charCodeAt(W) ^ U;
                        r = parseInt(M.join("").split("|")[1]),
                        this.C[this.W] = this.i.slice(this.i.length - r),
                        this.i = this.i.slice(0, this.i.length - r),
                        this.T += 2;
                        break;
                    case 352:
                        this.e = this.G[this.s++],
                        this.T -= this.M[26];
                        break;
                    case 360:
                        this.a = S,
                        this.T += this.M[0];
                        break;
                    case 368:
                        this.T -= 500 < S - this.a ? 24 : 8;
                        break;
                    case 380:
                        this.i.push(16383 & this.e),
                        this.T -= 28;
                        break;
                    case 400:
                        this.i.push(this.S[16383 & this.e]),
                        this.T -= 48;
                        break;
                    case 408:
                        this.T -= 64;
                        break;
                    case 413:
                        this.C[this.e >> 15 & 7] = (this.e >> 18 & 1) == 0 ? 32767 & this.e : this.S[32767 & this.e],
                        this.T -= 61;
                        break;
                    case 418:
                        this.S[65535 & this.e] = this.C[this.e >> 16 & 7],
                        this.T -= this.e >> 16 < 20 ? 66 : 80;
                        break;
                    case 423:
                        this.c = this.e >> 16 & 7,
                        this.I = this.e >> 13 & 7,
                        this.F = this.e >> 10 & 7,
                        this.J = 1023 & this.e,
                        this.T -= 255 + 6 * this.J + this.J % 5;
                        break;
                    case 426:
                        this.T += 5 * (this.e >> 19) - 18;
                        break;
                    case 428:
                        this.W = this.e >> 16 & 7,
                        this.k = 65535 & this.e,
                        this.t.push(this.s),
                        this.h.push(this.S),
                        this.s = this.C[this.W],
                        this.S = [];
                        for (var J = 0; J < this.k; J++)
                            this.S.unshift(this.i.pop());
                        this.B.push(this.i),
                        this.i = [],
                        this.T -= 76;
                        break;
                    case 433:
                        this.s = this.t.pop(),
                        this.S = this.h.pop(),
                        this.i = this.B.pop(),
                        this.T -= 81;
                        break;
                    case 438:
                        this.Q = this.C[this.e >> 16 & 7],
                        this.T -= 86;
                        break;
                    case 440:
                        U = 66,
                        M = [],
                        I = this.D[16383 & this.e];
                        for (var b = 0; b < I.length; b++)
                            M.push(String.fromCharCode(24 ^ I.charCodeAt(b) ^ U)),
                            U = 24 ^ I.charCodeAt(b) ^ U;
                        M = M.join("").split("|"),
                        O = parseInt(M.shift()),
                        this.i.push(0 === O ? M.join("|") : 1 === O ? -1 !== M.join().indexOf(".") ? parseInt(M.join()) : parseFloat(M.join()) : 2 === O ? eval(M.join()) : 3 === O ? null : void 0),
                        this.T -= 88;
                        break;
                    case 443:
                        this.b = this.e >> 2 & 65535,
                        this.J = 3 & this.e,
                        0 === this.J ? this.s = this.b : 1 === this.J ? this.Q && (this.s = this.b) : 2 === this.J && this.Q || (this.s = this.b),
                        this.g = null,
                        this.T -= 91;
                        break;
                    case 445:
                        this.i.push(this.C[this.e >> 14 & 7]),
                        this.T -= 93;
                        break;
                    case 448:
                        this.W = this.e >> 16 & 7,
                        this.k = this.e >> 2 & 4095,
                        this.J = 3 & this.e,
                        Q = 1 === this.J && this.i.pop(),
                        G = this.i.slice(this.i.length - this.k, this.i.length),
                        this.i = this.i.slice(0, this.i.length - this.k),
                        c = 2 < G.length ? 3 : G.length,
                        this.T += 6 * this.J + 1 + 10 * c;
                        break;
                    case 449:
                        this.C[3] = this.C[this.W](),
                        this.T -= 97 - G.length;
                        break;
                    case 455:
                        this.C[3] = this.C[this.W][Q](),
                        this.T -= 103 + G.length;
                        break;
                    case 453:
                        B = this.e >> 17 & 3,
                        this.T = 0 === B ? 445 : 1 === B ? 380 : 2 === B ? 400 : 440;
                        break;
                    case 458:
                        this.J = this.e >> 17 & 3,
                        this.c = this.e >> 14 & 7,
                        this.I = this.e >> 11 & 7,
                        i = this.i.pop(),
                        this.T -= 12 * this.J + 180;
                        break;
                    case 459:
                        this.C[3] = this.C[this.W](G[0]),
                        this.T -= 100 + 7 * G.length;
                        break;
                    case 461:
                        this.C[3] = new this.C[this.W],
                        this.T -= 109 - G.length;
                        break;
                    case 463:
                        U = 66,
                        M = [],
                        I = this.D[65535 & this.e];
                        for (var n = 0; n < I.length; n++)
                            M.push(String.fromCharCode(24 ^ I.charCodeAt(n) ^ U)),
                            U = 24 ^ I.charCodeAt(n) ^ U;
                        M = M.join("").split("|"),
                        O = parseInt(M.shift()),
                        this.T += 10 * O + 3;
                        break;
                    case 465:
                        this.C[3] = this.C[this.W][Q](G[0]),
                        this.T -= 13 * G.length + 100;
                        break;
                    case 466:
                        this.C[this.e >> 16 & 7] = M.join("|"),
                        this.T -= 114 * M.length;
                        break;
                    case 468:
                        this.g = 65535 & this.e,
                        this.T -= 116;
                        break;
                    case 469:
                        this.C[3] = this.C[this.W](G[0], G[1]),
                        this.T -= 119 - G.length;
                        break;
                    case 471:
                        this.C[3] = new this.C[this.W](G[0]),
                        this.T -= 118 + G.length;
                        break;
                    case 473:
                        throw this.C[this.e >> 16 & 7];
                    case 475:
                        this.C[3] = this.C[this.W][Q](G[0], G[1]),
                        this.T -= 123;
                        break;
                    case 476:
                        this.C[this.e >> 16 & 7] = -1 !== M.join().indexOf(".") ? parseInt(M.join()) : parseFloat(M.join()),
                        this.T -= this.M[21] < 10 ? 124 : 126;
                        break;
                    case 478:
                        t = [0].concat(x(this.S)),
                        this.V = 65535 & this.e,
                        h = this,
                        this.C[3] = function(tt) {
                            var te = new l;
                            return te.S = t,
                            te.S[0] = tt,
                            te.O(h.G, h.V, h.D),
                            te.C[3]
                        }
                        ,
                        this.T -= 50 < this.M[3] ? 120 : 126;
                        break;
                    case 479:
                        this.C[3] = this.C[this.W].apply(null, G),
                        this.M[3] = 168,
                        this.T -= this.M[9] ? 127 : 128;
                        break;
                    case 481:
                        this.C[3] = new this.C[this.W](G[0],G[1]),
                        this.T -= 10 * G.length + 109;
                        break;
                    case 483:
                        this.J = this.e >> 15 & 15,
                        this.W = this.e >> 12 & 7,
                        this.k = 4095 & this.e,
                        this.T = 0 === this.J ? 258 : 350;
                        break;
                    case 485:
                        this.C[3] = this.C[this.W][Q].apply(null, G),
                        this.T -= this.M[15] % 2 == 1 ? 143 : 133;
                        break;
                    case 486:
                        this.C[this.e >> 16 & 7] = eval(M.join()),
                        this.T -= this.M[18];
                        break;
                    case 491:
                        this.C[3] = new this.C[this.W].apply(null,G),
                        this.T -= this.M[8] / this.M[1] < 10 ? 139 : 130;
                        break;
                    case 496:
                        this.C[this.e >> 16 & 7] = null,
                        this.T -= 10 < this.M[5] - this.M[3] ? 160 : 144;
                        break;
                    case 506:
                        this.C[this.e >> 16 & 7] = void 0,
                        this.T -= this.M[18] % this.M[12] == 1 ? 154 : 145;
                        break;
                    default:
                        this.T = this.w
                    }
                } catch (A) {
                    this.g && (this.s = this.g),
                    this.T -= 114
                }
        }
})();

function md5(param) {
    var tu = function(tt, te) {
        var tr = (65535 & tt) + (65535 & te);
        return (tt >> 16) + (te >> 16) + (tr >> 16) << 16 | 65535 & tr
    }
      , tc = function(tt, te) {
        return tt << te | tt >>> 32 - te
    }
      , tf = function(tt, te, tr, ti, ta, tf) {
        return tu(tc(tu(tu(te, tt), tu(ti, tf)), ta), tr)
    }
      , td = function(tt, te, tr, ti, ta, tu, tc) {
        return tf(te & tr | ~te & ti, tt, te, ta, tu, tc)
    }
      , tp = function(tt, te, tr, ti, ta, tu, tc) {
        return tf(te & ti | tr & ~ti, tt, te, ta, tu, tc)
    }
      , th = function(tt, te, tr, ti, ta, tu, tc) {
        return tf(te ^ tr ^ ti, tt, te, ta, tu, tc)
    }
      , tv = function(tt, te, tr, ti, ta, tu, tc) {
        return tf(tr ^ (te | ~ti), tt, te, ta, tu, tc)
    }
      , tA = function(tt, te) {
        tt[te >> 5] |= 128 << te % 32,
        tt[(te + 64 >>> 9 << 4) + 14] = te;
        var tr, ti, ta, tc, tf, tA = 1732584193, tm = -271733879, tg = -1732584194, ty = 271733878;
        for (tr = 0; tr < tt.length; tr += 16)
            ti = tA,
            ta = tm,
            tc = tg,
            tf = ty,
            tA = td(tA, tm, tg, ty, tt[tr], 7, -680876936),
            ty = td(ty, tA, tm, tg, tt[tr + 1], 12, -389564586),
            tg = td(tg, ty, tA, tm, tt[tr + 2], 17, 606105819),
            tm = td(tm, tg, ty, tA, tt[tr + 3], 22, -1044525330),
            tA = td(tA, tm, tg, ty, tt[tr + 4], 7, -176418897),
            ty = td(ty, tA, tm, tg, tt[tr + 5], 12, 1200080426),
            tg = td(tg, ty, tA, tm, tt[tr + 6], 17, -1473231341),
            tm = td(tm, tg, ty, tA, tt[tr + 7], 22, -45705983),
            tA = td(tA, tm, tg, ty, tt[tr + 8], 7, 1770035416),
            ty = td(ty, tA, tm, tg, tt[tr + 9], 12, -1958414417),
            tg = td(tg, ty, tA, tm, tt[tr + 10], 17, -42063),
            tm = td(tm, tg, ty, tA, tt[tr + 11], 22, -1990404162),
            tA = td(tA, tm, tg, ty, tt[tr + 12], 7, 1804603682),
            ty = td(ty, tA, tm, tg, tt[tr + 13], 12, -40341101),
            tg = td(tg, ty, tA, tm, tt[tr + 14], 17, -1502002290),
            tm = td(tm, tg, ty, tA, tt[tr + 15], 22, 1236535329),
            tA = tp(tA, tm, tg, ty, tt[tr + 1], 5, -165796510),
            ty = tp(ty, tA, tm, tg, tt[tr + 6], 9, -1069501632),
            tg = tp(tg, ty, tA, tm, tt[tr + 11], 14, 643717713),
            tm = tp(tm, tg, ty, tA, tt[tr], 20, -373897302),
            tA = tp(tA, tm, tg, ty, tt[tr + 5], 5, -701558691),
            ty = tp(ty, tA, tm, tg, tt[tr + 10], 9, 38016083),
            tg = tp(tg, ty, tA, tm, tt[tr + 15], 14, -660478335),
            tm = tp(tm, tg, ty, tA, tt[tr + 4], 20, -405537848),
            tA = tp(tA, tm, tg, ty, tt[tr + 9], 5, 568446438),
            ty = tp(ty, tA, tm, tg, tt[tr + 14], 9, -1019803690),
            tg = tp(tg, ty, tA, tm, tt[tr + 3], 14, -187363961),
            tm = tp(tm, tg, ty, tA, tt[tr + 8], 20, 1163531501),
            tA = tp(tA, tm, tg, ty, tt[tr + 13], 5, -1444681467),
            ty = tp(ty, tA, tm, tg, tt[tr + 2], 9, -51403784),
            tg = tp(tg, ty, tA, tm, tt[tr + 7], 14, 1735328473),
            tm = tp(tm, tg, ty, tA, tt[tr + 12], 20, -1926607734),
            tA = th(tA, tm, tg, ty, tt[tr + 5], 4, -378558),
            ty = th(ty, tA, tm, tg, tt[tr + 8], 11, -2022574463),
            tg = th(tg, ty, tA, tm, tt[tr + 11], 16, 1839030562),
            tm = th(tm, tg, ty, tA, tt[tr + 14], 23, -35309556),
            tA = th(tA, tm, tg, ty, tt[tr + 1], 4, -1530992060),
            ty = th(ty, tA, tm, tg, tt[tr + 4], 11, 1272893353),
            tg = th(tg, ty, tA, tm, tt[tr + 7], 16, -155497632),
            tm = th(tm, tg, ty, tA, tt[tr + 10], 23, -1094730640),
            tA = th(tA, tm, tg, ty, tt[tr + 13], 4, 681279174),
            ty = th(ty, tA, tm, tg, tt[tr], 11, -358537222),
            tg = th(tg, ty, tA, tm, tt[tr + 3], 16, -722521979),
            tm = th(tm, tg, ty, tA, tt[tr + 6], 23, 76029189),
            tA = th(tA, tm, tg, ty, tt[tr + 9], 4, -640364487),
            ty = th(ty, tA, tm, tg, tt[tr + 12], 11, -421815835),
            tg = th(tg, ty, tA, tm, tt[tr + 15], 16, 530742520),
            tm = th(tm, tg, ty, tA, tt[tr + 2], 23, -995338651),
            tA = tv(tA, tm, tg, ty, tt[tr], 6, -198630844),
            ty = tv(ty, tA, tm, tg, tt[tr + 7], 10, 1126891415),
            tg = tv(tg, ty, tA, tm, tt[tr + 14], 15, -1416354905),
            tm = tv(tm, tg, ty, tA, tt[tr + 5], 21, -57434055),
            tA = tv(tA, tm, tg, ty, tt[tr + 12], 6, 1700485571),
            ty = tv(ty, tA, tm, tg, tt[tr + 3], 10, -1894986606),
            tg = tv(tg, ty, tA, tm, tt[tr + 10], 15, -1051523),
            tm = tv(tm, tg, ty, tA, tt[tr + 1], 21, -2054922799),
            tA = tv(tA, tm, tg, ty, tt[tr + 8], 6, 1873313359),
            ty = tv(ty, tA, tm, tg, tt[tr + 15], 10, -30611744),
            tg = tv(tg, ty, tA, tm, tt[tr + 6], 15, -1560198380),
            tm = tv(tm, tg, ty, tA, tt[tr + 13], 21, 1309151649),
            tA = tv(tA, tm, tg, ty, tt[tr + 4], 6, -145523070),
            ty = tv(ty, tA, tm, tg, tt[tr + 11], 10, -1120210379),
            tg = tv(tg, ty, tA, tm, tt[tr + 2], 15, 718787259),
            tm = tv(tm, tg, ty, tA, tt[tr + 9], 21, -343485551),
            tA = tu(tA, ti),
            tm = tu(tm, ta),
            tg = tu(tg, tc),
            ty = tu(ty, tf);
        return [tA, tm, tg, ty]
    }
      , tm = function(tt) {
        var te, tr = "", ti = 32 * tt.length;
        for (te = 0; te < ti; te += 8)
            tr += String.fromCharCode(tt[te >> 5] >>> te % 32 & 255);
        return tr
    }
      , tg = function(tt) {
        var te, tr = [];
        for (te = 0,
        tr[(tt.length >> 2) - 1] = void 0; te < tr.length; te += 1)
            tr[te] = 0;
        var ti = 8 * tt.length;
        for (te = 0; te < ti; te += 8)
            tr[te >> 5] |= (255 & tt.charCodeAt(te / 8)) << te % 32;
        return tr
    }
      , ty = function(tt) {
        return tm(tA(tg(tt), 8 * tt.length))
    }
      , tb = function(tt, te) {
        var tr, ti, ta = tg(tt), tu = [], tc = [];
        for (tu[15] = tc[15] = void 0,
        ta.length > 16 && (ta = tA(ta, 8 * tt.length)),
        tr = 0; tr < 16; tr += 1)
            tu[tr] = 909522486 ^ ta[tr],
            tc[tr] = 1549556828 ^ ta[tr];
        return ti = tA(tu.concat(tg(te)), 512 + 8 * te.length),
        tm(tA(tc.concat(ti), 640))
    }
      , tw = function(tt) {
        var te, tr, ti = "0123456789abcdef", ta = "";
        for (tr = 0; tr < tt.length; tr += 1)
            ta += ti.charAt((te = tt.charCodeAt(tr)) >>> 4 & 15) + ti.charAt(15 & te);
        return ta
    }
      , t_ = function(tt) {
        return unescape(encodeURIComponent(tt))
    }
      , tC = function(tt) {
        return ty(t_(tt))
    }
      , tE = function(tt) {
        return tw(tC(tt))
    }
      , tS = function(tt, te) {
        return tb(t_(tt), t_(te))
    }
      , tO = function(tt, te) {
        return tw(tS(tt, te))
    }
      , tT = function(tt, te, tr) {
        return te ? tr ? tS(te, tt) : tO(te, tt) : tr ? tC(tt) : tE(tt)
    };

    return tE(param);
}

function encryptXZse96(tt){
  var t = [
        "fd00106404e9d67b8d028a673f563906",
        [
            20,
            223,
            245,
            7,
            248,
            2,
            194,
            209,
            87,
            6,
            227,
            253,
            240,
            128,
            222,
            91,
            237,
            9,
            125,
            157,
            230,
            93,
            252,
            205,
            90,
            79,
            144,
            199,
            159,
            197,
            186,
            167,
            39,
            37,
            156,
            198,
            38,
            42,
            43,
            168,
            217,
            153,
            15,
            103,
            80,
            189,
            71,
            191,
            97,
            84,
            247,
            95,
            36,
            69,
            14,
            35,
            12,
            171,
            28,
            114,
            178,
            148,
            86,
            182,
            32,
            83,
            158,
            109,
            22,
            255,
            94,
            238,
            151,
            85,
            77,
            124,
            254,
            18,
            4,
            26,
            123,
            176,
            232,
            193,
            131,
            172,
            143,
            142,
            150,
            30,
            10,
            146,
            162,
            62,
            224,
            218,
            196,
            229,
            1,
            192,
            213,
            27,
            110,
            56,
            231,
            180,
            138,
            107,
            242,
            187,
            54,
            120,
            19,
            44,
            117,
            228,
            215,
            203,
            53,
            239,
            251,
            127,
            81,
            11,
            133,
            96,
            204,
            132,
            41,
            115,
            73,
            55,
            249,
            147,
            102,
            48,
            122,
            145,
            106,
            118,
            74,
            190,
            29,
            16,
            174,
            5,
            177,
            129,
            63,
            113,
            99,
            31,
            161,
            76,
            246,
            34,
            211,
            13,
            60,
            68,
            207,
            160,
            65,
            111,
            82,
            165,
            67,
            169,
            225,
            57,
            112,
            244,
            155,
            51,
            236,
            200,
            233,
            58,
            61,
            47,
            100,
            137,
            185,
            64,
            17,
            70,
            234,
            163,
            219,
            108,
            170,
            166,
            59,
            149,
            52,
            105,
            24,
            212,
            78,
            173,
            45,
            0,
            116,
            226,
            119,
            136,
            206,
            135,
            175,
            195,
            25,
            92,
            121,
            208,
            126,
            139,
            3,
            75,
            141,
            21,
            130,
            98,
            241,
            40,
            154,
            66,
            184,
            49,
            181,
            46,
            243,
            88,
            101,
            183,
            8,
            23,
            72,
            188,
            104,
            179,
            210,
            134,
            250,
            201,
            164,
            89,
            216,
            202,
            220,
            50,
            221,
            152,
            140,
            33,
            235,
            214
        ],
        [
            120,
            50,
            98,
            101,
            99,
            98,
            119,
            100,
            103,
            107,
            99,
            119,
            97,
            99,
            110,
            111
        ],
        [
            100,
            51,
            100,
            50,
            101,
            55,
            50,
            54,
            102,
            53,
            48,
            100,
            52,
            49,
            48,
            49
        ],
        [
            1170614578,
            1024848638,
            1413669199,
            -343334464,
            -766094290,
            -1373058082,
            -143119608,
            -297228157,
            1933479194,
            -971186181,
            -406453910,
            460404854,
            -547427574,
            -1891326262,
            -1679095901,
            2119585428,
            -2029270069,
            2035090028,
            -1521520070,
            -5587175,
            -77751101,
            -2094365853,
            -1243052806,
            1579901135,
            1321810770,
            456816404,
            -1391643889,
            -229302305,
            330002838,
            -788960546,
            363569021,
            -1947871109
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        -1,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        1733716367981,
        [
            48,
            53,
            57,
            48,
            53,
            51,
            102,
            55,
            100,
            49,
            53,
            101,
            48,
            49,
            100,
            55
        ],
        0,
        [
            127,
            0,
            102,
            100,
            48,
            48,
            49,
            48,
            54,
            52,
            48,
            52,
            101,
            57,
            100,
            54,
            55,
            98,
            56,
            100,
            48,
            50,
            56,
            97,
            54,
            55,
            51,
            102,
            53,
            54,
            51,
            57,
            48,
            54,
            14,
            14,
            14,
            14,
            14,
            14,
            14,
            14,
            14,
            14,
            14,
            14,
            14,
            14
        ],
        2,
        127,
        [
            147,
            244,
            209,
            125,
            17,
            90,
            81,
            137,
            223,
            229,
            42,
            252,
            122,
            1,
            170,
            226,
            235,
            212,
            201,
            228,
            162,
            231,
            153,
            110,
            157,
            80,
            255,
            149,
            253,
            148,
            103,
            103,
            158,
            254,
            77,
            217,
            156,
            210,
            189,
            22,
            245,
            182,
            187,
            1,
            64,
            112,
            231,
            79
        ],
        0,
        "6fpLRqJO8M/c3jnYxFkUVC4ZIG12SiH=5v0mXDazWBTsuw7QetbKdoPyAl+hN9rgE",
        48,
        "oinS6wK7P4Yc9/jzmyXgHPoGVPgsgLCzVDll0+ibVQnPTJ5HJskl=Y2V1qtFFUgX",
        24,
        9696465
    ];
  var h ={};
  h.G = [
    524308,
    4718592,
    524511,
    4718592,
    524533,
    4718592,
    524295,
    4718592,
    524536,
    4718592,
    524290,
    4718592,
    524482,
    4718592,
    524497,
    4718592,
    524375,
    4718592,
    524294,
    4718592,
    524515,
    4718592,
    524541,
    4718592,
    524528,
    4718592,
    524416,
    4718592,
    524510,
    4718592,
    524379,
    4718592,
    524525,
    4718592,
    524297,
    4718592,
    524413,
    4718592,
    524445,
    4718592,
    524518,
    4718592,
    524381,
    4718592,
    524540,
    4718592,
    524493,
    4718592,
    524378,
    4718592,
    524367,
    4718592,
    524432,
    4718592,
    524487,
    4718592,
    524447,
    4718592,
    524485,
    4718592,
    524474,
    4718592,
    524455,
    4718592,
    524327,
    4718592,
    524325,
    4718592,
    524444,
    4718592,
    524486,
    4718592,
    524326,
    4718592,
    524330,
    4718592,
    524331,
    4718592,
    524456,
    4718592,
    524505,
    4718592,
    524441,
    4718592,
    524303,
    4718592,
    524391,
    4718592,
    524368,
    4718592,
    524477,
    4718592,
    524359,
    4718592,
    524479,
    4718592,
    524385,
    4718592,
    524372,
    4718592,
    524535,
    4718592,
    524383,
    4718592,
    524324,
    4718592,
    524357,
    4718592,
    524302,
    4718592,
    524323,
    4718592,
    524300,
    4718592,
    524459,
    4718592,
    524316,
    4718592,
    524402,
    4718592,
    524466,
    4718592,
    524436,
    4718592,
    524374,
    4718592,
    524470,
    4718592,
    524320,
    4718592,
    524371,
    4718592,
    524446,
    4718592,
    524397,
    4718592,
    524310,
    4718592,
    524543,
    4718592,
    524382,
    4718592,
    524526,
    4718592,
    524439,
    4718592,
    524373,
    4718592,
    524365,
    4718592,
    524412,
    4718592,
    524542,
    4718592,
    524306,
    4718592,
    524292,
    4718592,
    524314,
    4718592,
    524411,
    4718592,
    524464,
    4718592,
    524520,
    4718592,
    524481,
    4718592,
    524419,
    4718592,
    524460,
    4718592,
    524431,
    4718592,
    524430,
    4718592,
    524438,
    4718592,
    524318,
    4718592,
    524298,
    4718592,
    524434,
    4718592,
    524450,
    4718592,
    524350,
    4718592,
    524512,
    4718592,
    524506,
    4718592,
    524484,
    4718592,
    524517,
    4718592,
    524289,
    4718592,
    524480,
    4718592,
    524501,
    4718592,
    524315,
    4718592,
    524398,
    4718592,
    524344,
    4718592,
    524519,
    4718592,
    524468,
    4718592,
    524426,
    4718592,
    524395,
    4718592,
    524530,
    4718592,
    524475,
    4718592,
    524342,
    4718592,
    524408,
    4718592,
    524307,
    4718592,
    524332,
    4718592,
    524405,
    4718592,
    524516,
    4718592,
    524503,
    4718592,
    524491,
    4718592,
    524341,
    4718592,
    524527,
    4718592,
    524539,
    4718592,
    524415,
    4718592,
    524369,
    4718592,
    524299,
    4718592,
    524421,
    4718592,
    524384,
    4718592,
    524492,
    4718592,
    524420,
    4718592,
    524329,
    4718592,
    524403,
    4718592,
    524361,
    4718592,
    524343,
    4718592,
    524537,
    4718592,
    524435,
    4718592,
    524390,
    4718592,
    524336,
    4718592,
    524410,
    4718592,
    524433,
    4718592,
    524394,
    4718592,
    524406,
    4718592,
    524362,
    4718592,
    524478,
    4718592,
    524317,
    4718592,
    524304,
    4718592,
    524462,
    4718592,
    524293,
    4718592,
    524465,
    4718592,
    524417,
    4718592,
    524351,
    4718592,
    524401,
    4718592,
    524387,
    4718592,
    524319,
    4718592,
    524449,
    4718592,
    524364,
    4718592,
    524534,
    4718592,
    524322,
    4718592,
    524499,
    4718592,
    524301,
    4718592,
    524348,
    4718592,
    524356,
    4718592,
    524495,
    4718592,
    524448,
    4718592,
    524353,
    4718592,
    524399,
    4718592,
    524370,
    4718592,
    524453,
    4718592,
    524355,
    4718592,
    524457,
    4718592,
    524513,
    4718592,
    524345,
    4718592,
    524400,
    4718592,
    524532,
    4718592,
    524443,
    4718592,
    524339,
    4718592,
    524524,
    4718592,
    524488,
    4718592,
    524521,
    4718592,
    524346,
    4718592,
    524349,
    4718592,
    524335,
    4718592,
    524388,
    4718592,
    524425,
    4718592,
    524473,
    4718592,
    524352,
    4718592,
    524305,
    4718592,
    524358,
    4718592,
    524522,
    4718592,
    524451,
    4718592,
    524507,
    4718592,
    524396,
    4718592,
    524458,
    4718592,
    524454,
    4718592,
    524347,
    4718592,
    524437,
    4718592,
    524340,
    4718592,
    524393,
    4718592,
    524312,
    4718592,
    524500,
    4718592,
    524366,
    4718592,
    524461,
    4718592,
    524333,
    4718592,
    524288,
    4718592,
    524404,
    4718592,
    524514,
    4718592,
    524407,
    4718592,
    524424,
    4718592,
    524494,
    4718592,
    524423,
    4718592,
    524463,
    4718592,
    524483,
    4718592,
    524313,
    4718592,
    524380,
    4718592,
    524409,
    4718592,
    524496,
    4718592,
    524414,
    4718592,
    524427,
    4718592,
    524291,
    4718592,
    524363,
    4718592,
    524429,
    4718592,
    524309,
    4718592,
    524418,
    4718592,
    524386,
    4718592,
    524529,
    4718592,
    524328,
    4718592,
    524442,
    4718592,
    524354,
    4718592,
    524472,
    4718592,
    524337,
    4718592,
    524469,
    4718592,
    524334,
    4718592,
    524531,
    4718592,
    524376,
    4718592,
    524389,
    4718592,
    524471,
    4718592,
    524296,
    4718592,
    524311,
    4718592,
    524360,
    4718592,
    524476,
    4718592,
    524392,
    4718592,
    524467,
    4718592,
    524498,
    4718592,
    524422,
    4718592,
    524538,
    4718592,
    524489,
    4718592,
    524452,
    4718592,
    524377,
    4718592,
    524504,
    4718592,
    524490,
    4718592,
    524508,
    4718592,
    524338,
    4718592,
    524509,
    4718592,
    524440,
    4718592,
    524428,
    4718592,
    524321,
    4718592,
    524523,
    4718592,
    524502,
    4718592,
    7897088,
    1048576,
    524408,
    4718592,
    524338,
    4718592,
    524386,
    4718592,
    524389,
    4718592,
    524387,
    4718592,
    524386,
    4718592,
    524407,
    4718592,
    524388,
    4718592,
    524391,
    4718592,
    524395,
    4718592,
    524387,
    4718592,
    524407,
    4718592,
    524385,
    4718592,
    524387,
    4718592,
    524398,
    4718592,
    524399,
    4718592,
    7897089,
    1048577,
    524388,
    4718592,
    524339,
    4718592,
    524388,
    4718592,
    524338,
    4718592,
    524389,
    4718592,
    524343,
    4718592,
    524338,
    4718592,
    524342,
    4718592,
    524390,
    4718592,
    524341,
    4718592,
    524336,
    4718592,
    524388,
    4718592,
    524340,
    4718592,
    524337,
    4718592,
    524336,
    4718592,
    524337,
    4718592,
    7897089,
    1048578,
    524320,
    4718592,
    5111810,
    5505024,
    4194310,
    1245187,
    786435,
    4718592,
    786434,
    4718592,
    786432,
    4718592,
    525148,
    2097155,
    786435,
    4718592,
    4718592,
    5111811,
    5505024,
    5111812,
    5242880,
    5111813,
    5242880,
    5111814,
    5373952,
    786432,
    4718592,
    4718592,
    5111811,
    5505024,
    5111812,
    5242880,
    5111813,
    5242880,
    5111815,
    5373952,
    786433,
    4718592,
    4718592,
    5111811,
    5505024,
    5111812,
    5242880,
    5111813,
    5242880,
    5111816,
    5373952,
    7342100,
    4767744,
    5111817,
    5505024,
    5111818,
    5373952,
    0,
    786433,
    4718592,
    786432,
    5242880,
    557311,
    1770511,
    524312,
    1794065,
    1245190,
    786433,
    557057,
    1770496,
    4767744,
    786432,
    5242880,
    557311,
    1770511,
    524304,
    1794065,
    1245191,
    786433,
    557058,
    1770496,
    4767744,
    786432,
    5242880,
    557311,
    1770511,
    524296,
    1794065,
    1245192,
    786433,
    557059,
    1770496,
    4767744,
    786432,
    5242880,
    557311,
    1770511,
    1245193,
    884742,
    786439,
    1794067,
    786440,
    1794067,
    786441,
    1794067,
    2621440,
    524543,
    819200,
    589848,
    1779730,
    1772559,
    4767744,
    4767744,
    786434,
    4718592,
    786433,
    5373952,
    524543,
    819200,
    589840,
    1779730,
    1772559,
    4767744,
    4767744,
    786434,
    557057,
    1770496,
    4767744,
    786433,
    5373952,
    524543,
    819200,
    589832,
    1779730,
    1772559,
    4767744,
    4767744,
    786434,
    557058,
    1770496,
    4767744,
    786433,
    5373952,
    524543,
    819200,
    1770511,
    4767744,
    4767744,
    786434,
    557059,
    1770496,
    4767744,
    786433,
    5373952,
    2621440,
    524320,
    819201,
    1770497,
    1245197,
    786432,
    5832715,
    1770511,
    786433,
    1794065,
    1245198,
    786446,
    819200,
    851981,
    1779730,
    1772563,
    1245199,
    884751,
    2621440,
    524292,
    4718592,
    5111810,
    5505024,
    4194310,
    1245200,
    524292,
    4718592,
    5111810,
    5505024,
    4194310,
    1245189,
    786432,
    4718592,
    786448,
    4718592,
    524288,
    4718592,
    524972,
    2097155,
    524288,
    4718592,
    786448,
    5242880,
    557311,
    1770511,
    4767744,
    786433,
    5242880,
    4718592,
    4718592,
    524288,
    4718592,
    786437,
    5373952,
    524289,
    4718592,
    786448,
    5242880,
    557311,
    1770511,
    4767744,
    786433,
    5242880,
    4718592,
    4718592,
    524289,
    4718592,
    786437,
    5373952,
    524290,
    4718592,
    786448,
    5242880,
    557311,
    1770511,
    4767744,
    786433,
    5242880,
    4718592,
    4718592,
    524290,
    4718592,
    786437,
    5373952,
    524291,
    4718592,
    786448,
    5242880,
    557311,
    1770511,
    4767744,
    786433,
    5242880,
    4718592,
    4718592,
    524291,
    4718592,
    786437,
    5373952,
    786437,
    4718592,
    524288,
    4718592,
    524924,
    2097154,
    1245201,
    786449,
    4718592,
    524301,
    4718592,
    525021,
    2097154,
    1245202,
    786449,
    4718592,
    524311,
    4718592,
    525021,
    2097154,
    1245203,
    786449,
    819218,
    1770512,
    786451,
    1794064,
    1245204,
    884756,
    2621440,
    5767180,
    4718592,
    5767181,
    4718592,
    5767182,
    4718592,
    5767183,
    4718592,
    5767184,
    4718592,
    5767185,
    4718592,
    5767186,
    4718592,
    5767187,
    4718592,
    5767188,
    4718592,
    5767189,
    4718592,
    5767190,
    4718592,
    5767191,
    4718592,
    5767192,
    4718592,
    5767193,
    4718592,
    5767194,
    4718592,
    5767195,
    4718592,
    5767196,
    4718592,
    5767197,
    4718592,
    5767198,
    4718592,
    5767199,
    4718592,
    5767200,
    4718592,
    5767201,
    4718592,
    5767202,
    4718592,
    5767203,
    4718592,
    5767204,
    4718592,
    5767205,
    4718592,
    5767206,
    4718592,
    5767207,
    4718592,
    5767208,
    4718592,
    5767209,
    4718592,
    5767210,
    4718592,
    5767211,
    4718592,
    7897132,
    1048599,
    5767213,
    4718592,
    5767214,
    4718592,
    5767215,
    4718592,
    5767216,
    4718592,
    7897137,
    1048600,
    524292,
    4718592,
    5111810,
    5505024,
    4194310,
    1245209,
    524324,
    4718592,
    5111810,
    5505024,
    4194310,
    1245210,
    786433,
    4718592,
    524288,
    4718592,
    524924,
    2097154,
    4767744,
    4767744,
    524288,
    4718592,
    786457,
    5373952,
    786433,
    4718592,
    524292,
    4718592,
    524924,
    2097154,
    4767744,
    4767744,
    524289,
    4718592,
    786457,
    5373952,
    786433,
    4718592,
    524296,
    4718592,
    524924,
    2097154,
    4767744,
    4767744,
    524290,
    4718592,
    786457,
    5373952,
    786433,
    4718592,
    524300,
    4718592,
    524924,
    2097154,
    4767744,
    4767744,
    524291,
    4718592,
    786457,
    5373952,
    524288,
    4718592,
    786457,
    5242880,
    557056,
    4734976,
    819224,
    5261312,
    1770512,
    4767744,
    4767744,
    524288,
    4718592,
    786458,
    5373952,
    524289,
    4718592,
    786457,
    5242880,
    557057,
    4734976,
    819224,
    5261312,
    1770512,
    4767744,
    4767744,
    524289,
    4718592,
    786458,
    5373952,
    524290,
    4718592,
    786457,
    5242880,
    557058,
    4734976,
    819224,
    5261312,
    1770512,
    4767744,
    4767744,
    524290,
    4718592,
    786458,
    5373952,
    524291,
    4718592,
    786457,
    5242880,
    557059,
    4734976,
    819224,
    5261312,
    1770512,
    4767744,
    4767744,
    524291,
    4718592,
    786458,
    5373952,
    524288,
    1048585,
    786441,
    557088,
    1770510,
    3342342,
    3674550,
    786441,
    557057,
    1770496,
    4767744,
    786458,
    5242880,
    1048603,
    786441,
    557058,
    1770496,
    4767744,
    786458,
    5242880,
    1048604,
    786441,
    557059,
    1770496,
    4767744,
    786458,
    5242880,
    1048605,
    786459,
    819228,
    1770512,
    786461,
    1794064,
    786441,
    4718592,
    786455,
    5242880,
    1794064,
    1245214,
    786462,
    4718592,
    786434,
    4718592,
    525039,
    2097154,
    1245215,
    786441,
    4718592,
    786458,
    5242880,
    819231,
    1770512,
    4767744,
    4767744,
    786441,
    557060,
    1770496,
    4767744,
    786458,
    5373952,
    786441,
    557060,
    1770496,
    4767744,
    786458,
    5242880,
    4718592,
    4718592,
    786441,
    4718592,
    786432,
    5373952,
    786441,
    557057,
    1639424,
    1114121,
    3674248,
    2621440,
    786433,
    5111858,
    5242880,
    557072,
    1770500,
    1245205,
    524304,
    819221,
    1770497,
    1245194,
    524288,
    1048609,
    786465,
    819210,
    1770510,
    3342342,
    3674662,
    786442,
    4718592,
    786433,
    5111859,
    4194309,
    786465,
    557057,
    1639424,
    1114145,
    3674600,
    524288,
    4718592,
    524304,
    4718592,
    786433,
    5111860,
    4194313,
    1245218,
    524304,
    4718592,
    5111810,
    5505024,
    4194310,
    1245219,
    524288,
    1048587,
    786443,
    557072,
    1770510,
    3342342,
    3674834,
    786443,
    4718592,
    786466,
    5242880,
    819211,
    4734976,
    819200,
    5261312,
    1770512,
    524330,
    1794064,
    4767744,
    4767744,
    786443,
    4718592,
    786467,
    5373952,
    786443,
    557057,
    1639424,
    1114123,
    3674724,
    786467,
    4718592,
    5111817,
    5505024,
    5111861,
    4194309,
    1245220,
    786468,
    5111860,
    4194305,
    1245221,
    524304,
    4718592,
    786433,
    5111858,
    5242880,
    4718592,
    786433,
    5111860,
    4194313,
    1245222,
    786470,
    4718592,
    786468,
    4718592,
    5111817,
    5505024,
    5111862,
    4194313,
    1245223,
    786471,
    4718592,
    786469,
    5111863,
    4194309,
    4767744,
    1245221,
    884773,
    2621440,
    7897144,
    1048617,
    786432,
    5111858,
    5242880,
    1048618,
    524288,
    1048588,
    786444,
    819242,
    1770510,
    3342342,
    3675114,
    786444,
    4718592,
    786432,
    5111865,
    4194309,
    1245227,
    786475,
    557311,
    1770511,
    4767744,
    786473,
    5111859,
    4194309,
    786444,
    557057,
    1639424,
    1114124,
    3675020,
    884777,
    2621440,
    1245228,
    5111811,
    5505024,
    1572874,
    5832762,
    1770501,
    3342342,
    3675166,
    524289,
    4718592,
    1048620,
    3678281,
    5111867,
    5505024,
    1572874,
    5832762,
    1770501,
    3342342,
    3675210,
    524290,
    4718592,
    1048620,
    3678281,
    5111868,
    5505024,
    1572874,
    5832762,
    1770501,
    3342342,
    3675254,
    524291,
    4718592,
    1048620,
    3678281,
    5111869,
    5505024,
    1572874,
    5832762,
    1770501,
    3342342,
    3675298,
    524292,
    4718592,
    1048620,
    3678281,
    5111870,
    5505024,
    1572874,
    5832762,
    1770501,
    3342342,
    3675342,
    524293,
    4718592,
    1048620,
    3678281,
    5111871,
    5505024,
    1572874,
    5832762,
    1770501,
    3342342,
    3675386,
    524294,
    4718592,
    1048620,
    3678281,
    5111868,
    5505024,
    5111872,
    5242880,
    1572874,
    5832762,
    1770501,
    3342342,
    3675438,
    524295,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111873,
    5242880,
    5832770,
    1770501,
    3342342,
    3675486,
    524296,
    4718592,
    1048620,
    3678281,
    5767235,
    4718592,
    5111867,
    5505024,
    5111876,
    4194305,
    5111877,
    4390917,
    524289,
    1572877,
    1794053,
    3342342,
    3675554,
    524298,
    4718592,
    1048620,
    3678281,
    5767238,
    4718592,
    5111868,
    5505024,
    5111876,
    4194305,
    5111877,
    4390917,
    524289,
    1572877,
    1794053,
    3342342,
    3675622,
    524299,
    4718592,
    1048620,
    3678281,
    5767239,
    4718592,
    5111869,
    5505024,
    5111876,
    4194305,
    5111877,
    4390917,
    524289,
    1572877,
    1794053,
    3342342,
    3675690,
    524300,
    4718592,
    1048620,
    3678281,
    5767240,
    4718592,
    5111870,
    5505024,
    5111876,
    4194305,
    5111877,
    4390917,
    524289,
    1572877,
    1794053,
    3342342,
    3675758,
    524301,
    4718592,
    1048620,
    3678281,
    5767241,
    4718592,
    5111871,
    5505024,
    5111876,
    4194305,
    5111877,
    4390917,
    524289,
    1572877,
    1794053,
    3342342,
    3675826,
    524302,
    4718592,
    1048620,
    3678281,
    5767242,
    4718592,
    5111868,
    5505024,
    5111872,
    5242880,
    5111883,
    4194305,
    5111877,
    4390917,
    524289,
    1572877,
    1794057,
    3342342,
    3675902,
    524303,
    4718592,
    1048620,
    3678281,
    5111884,
    5505024,
    5111885,
    5242880,
    1048621,
    5767246,
    4718592,
    786477,
    5111876,
    4194305,
    5111877,
    4390917,
    524289,
    1572877,
    1794053,
    3342342,
    3675986,
    524304,
    4718592,
    1048620,
    3678281,
    5111867,
    5505024,
    5111887,
    5242880,
    1572874,
    5832762,
    1770501,
    3342342,
    3676038,
    524305,
    4718592,
    1048620,
    3678281,
    5767248,
    4718592,
    5767249,
    4718592,
    5767250,
    4718592,
    5111867,
    5505024,
    5111887,
    4194309,
    5111891,
    4390917,
    5111876,
    4390913,
    5111877,
    4390917,
    524289,
    1572877,
    1794053,
    3342342,
    3676138,
    524310,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111892,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676190,
    524312,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111893,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676242,
    524313,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111894,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676294,
    524314,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111895,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676346,
    524315,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111896,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676398,
    524316,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111897,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676450,
    524317,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111898,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676502,
    524318,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111899,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676554,
    524319,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111900,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676606,
    524320,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111901,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676658,
    524321,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111902,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676710,
    524322,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111903,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676762,
    524323,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111904,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676814,
    524324,
    4718592,
    1048620,
    3678281,
    5111867,
    5505024,
    5111905,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676866,
    524325,
    4718592,
    1048620,
    3678281,
    5111868,
    5505024,
    5111906,
    5242880,
    5832803,
    1770501,
    3342342,
    3676914,
    524326,
    4718592,
    1048620,
    3678281,
    5111867,
    5505024,
    5111908,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3676966,
    524327,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111909,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3677018,
    524328,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111910,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3677070,
    524329,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111911,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3677122,
    524330,
    4718592,
    1048620,
    3678281,
    5111912,
    5505024,
    4718592,
    5111884,
    5505024,
    5111913,
    4194309,
    1794058,
    5767274,
    1794057,
    3342342,
    3677186,
    524331,
    4718592,
    1048620,
    3678281,
    5111867,
    5505024,
    5111915,
    5242880,
    1572874,
    5832762,
    1770501,
    3342342,
    3677238,
    524332,
    4718592,
    1048620,
    3678281,
    5111867,
    5505024,
    5111915,
    5242880,
    4718592,
    5111884,
    5505024,
    5111913,
    4194309,
    1794058,
    5767274,
    1794057,
    3342342,
    3677310,
    524333,
    4718592,
    1048620,
    3678281,
    5111867,
    5505024,
    5111916,
    5242880,
    1572874,
    5832762,
    1770501,
    3342342,
    3677362,
    524334,
    4718592,
    1048620,
    3678281,
    5767277,
    4718592,
    5111811,
    5505024,
    5111918,
    5242880,
    5111919,
    5242880,
    5111876,
    4194305,
    5111877,
    4390917,
    524289,
    1572877,
    1794053,
    3342342,
    3677446,
    524336,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111920,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3677498,
    524337,
    4718592,
    1048620,
    3678281,
    5767281,
    4718592,
    5111922,
    5505024,
    4194306,
    5111923,
    5298176,
    5111877,
    4390917,
    524289,
    1572877,
    1794057,
    3342342,
    3677570,
    524338,
    4718592,
    1048620,
    3678281,
    5767284,
    4718592,
    5111922,
    5505024,
    4194306,
    5111923,
    5298176,
    5111877,
    4390917,
    524289,
    1572877,
    1794057,
    3342342,
    3677642,
    524339,
    4718592,
    1048620,
    3678281,
    5767285,
    4718592,
    5111868,
    5505024,
    5111872,
    5242880,
    5111883,
    4194305,
    5111877,
    4390917,
    524289,
    1572877,
    1794057,
    3342342,
    3677718,
    524340,
    4718592,
    1048620,
    3678281,
    5767286,
    4718592,
    5111868,
    5505024,
    5111872,
    5242880,
    5111883,
    4194305,
    5111877,
    4390917,
    524289,
    1572877,
    1794057,
    3342342,
    3677794,
    524341,
    4718592,
    1048620,
    3678281,
    5767281,
    4718592,
    5111869,
    5505024,
    5111927,
    5242880,
    5111877,
    4194309,
    524289,
    1572877,
    1794057,
    3342342,
    3677862,
    524342,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111928,
    5242880,
    3145734,
    3677902,
    524344,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111929,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3677954,
    524345,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111930,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3678006,
    524346,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111931,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3678058,
    524347,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111932,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3678110,
    524348,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111933,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3678162,
    524349,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111934,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3678214,
    524350,
    4718592,
    1048620,
    3678281,
    5111811,
    5505024,
    5111935,
    5242880,
    1572874,
    5832762,
    1770505,
    3342342,
    3678266,
    524351,
    4718592,
    1048620,
    3678281,
    524288,
    4718592,
    1048620,
    884780,
    2621440,
    5111936,
    5505024,
    5111937,
    4194305,
    1245231,
    524336,
    4718592,
    524341,
    4718592,
    524345,
    4718592,
    524336,
    4718592,
    524341,
    4718592,
    524339,
    4718592,
    524390,
    4718592,
    524343,
    4718592,
    524388,
    4718592,
    524337,
    4718592,
    524341,
    4718592,
    524389,
    4718592,
    524336,
    4718592,
    524337,
    4718592,
    524388,
    4718592,
    524343,
    4718592,
    7897089,
    1048624,
    525564,
    2097152,
    1245233,
    786432,
    4718592,
    525531,
    2097153,
    1245234,
    5111936,
    5505024,
    5111937,
    4194305,
    786479,
    1794049,
    1245235,
    786483,
    5832834,
    1770508,
    3342342,
    3678538,
    524414,
    4718592,
    1048625,
    3678541,
    5111939,
    5505024,
    5111940,
    4194305,
    524415,
    1794050,
    4767744,
    5111939,
    5505024,
    5111941,
    4194309,
    1245236,
    786481,
    4718592,
    786482,
    5111942,
    4194309,
    786484,
    4718592,
    786482,
    5111942,
    4194309,
    786480,
    4718592,
    786482,
    4718592,
    525422,
    2097154,
    1245237,
    786485,
    5111858,
    5242880,
    557059,
    1770500,
    1245238,
    786486,
    557057,
    1770501,
    3342342,
    3678742,
    5767303,
    4718592,
    786485,
    5111859,
    4194309,
    5767303,
    4718592,
    786485,
    5111859,
    4194309,
    3678745,
    786486,
    557058,
    1770501,
    3342342,
    3678786,
    5767303,
    4718592,
    786485,
    5111859,
    4194309,
    3678789,
    5767304,
    5832841,
    1770496,
    5767306,
    1794048,
    5767307,
    1794048,
    5767308,
    1794048,
    1245239,
    524288,
    1048632,
    5767309,
    1048633,
    786485,
    5111858,
    5242880,
    557057,
    1770497,
    1245197,
    786445,
    557056,
    1770502,
    3342342,
    3679390,
    524296,
    819256,
    589825,
    1714176,
    1179704,
    589828,
    1779716,
    1772546,
    1245242,
    786445,
    4718592,
    786485,
    5242880,
    557114,
    852026,
    1779730,
    557311,
    1795087,
    1772560,
    1245243,
    524296,
    819256,
    589825,
    1714176,
    1179704,
    589828,
    1779716,
    1772546,
    4767744,
    1245242,
    786491,
    819213,
    589825,
    1779713,
    4767744,
    819253,
    5261312,
    589882,
    884794,
    1788946,
    590079,
    1796111,
    1780752,
    557064,
    1795089,
    1641491,
    1114171,
    524296,
    819256,
    589825,
    1714176,
    1179704,
    589828,
    1779716,
    1772546,
    4767744,
    1245242,
    786491,
    819213,
    589826,
    1779713,
    4767744,
    819253,
    5261312,
    589882,
    884794,
    1788946,
    590079,
    1796111,
    1780752,
    557072,
    1795089,
    1641491,
    1114171,
    786489,
    819259,
    589887,
    1779727,
    4767744,
    819255,
    5111950,
    4259845,
    1641472,
    1114169,
    786489,
    819259,
    589830,
    1779730,
    557119,
    1795087,
    4767744,
    819255,
    5111950,
    4259845,
    1641472,
    1114169,
    786489,
    819259,
    589836,
    1779730,
    557119,
    1795087,
    4767744,
    819255,
    5111950,
    4259845,
    1641472,
    1114169,
    786489,
    819259,
    589842,
    1779730,
    557119,
    1795087,
    4767744,
    819255,
    5111950,
    4259845,
    1641472,
    1114169,
    786445,
    557059,
    1639425,
    1114125,
    3678868,
    884793,
    2621440
];
  h.D = [
    "kUV\u001f\u001b",
    "kUU\u001f",
    "jT%+\u0018\u000b\u0000",
    "jT\u0013\u0006\u001f\u0012\u0013\u0000",
    "jT;\u0018\u001d\n\u000f\u0018",
    "jT\u001e\u0011\u000e",
    "jT\u001e\t",
    "jT\u001e\u0000",
    "jT\u001e\u000f",
    "jT;\u0018 ",
    "jT;\"\u0013\u0015\t\u0013\u0011\u001c",
    "kUP\u001e\u0013\u0015\u0015\u0017\u0019\u001d\u0013\u0014",
    "kUP\u001a\u001c\u0019\u001e\u001a",
    "kUP\u001b\u001d\u001a\u001e\u0018\u0018\u001e\u0011",
    "kU]\u0015\u001f\u001d\u0019\u001f\u0010\u0016\u001f",
    "kUU\u001d\u001d\u001c\u001f\u001d\u001a\u001c\u0018\u001a",
    "kUU\u0011\u0018\u0016\u0016\u0017\u0016\u0012\u001d\u001b",
    "kUV\u0019\u001e\u0015\u0014\u0014\u0013\u001d\u001f\u001e",
    "kUV\u0012\u0013\u001b\u0018\u0010\u0017\u0017\u0016\u0017",
    "kUW\u0018\u001b\u0019\u001f\u0017\u0013\u001b\u001b\u001b",
    "kUW\u001c\u0018\u001c\u0019\u0013\u0017\u001d\u001c\u001c",
    "kUP\u001e\u0018\u0012\u0010\u001d\u001a\u0019\u001f\u001e",
    "kUP\u001c\u001c\u001a\u0017\u0015\u0019\u001a\u001c",
    "kU\\\u0017\u0019\u001c\u0013\u0019\u0018\u0012\u001f",
    "kUU\u001a\u001f\u001b\u0016\u0011\u001b\u001b\u001f\u0018",
    "kUU\u0011\u0011\u0010\u0014\u001d\u001f\u001c\u0019\u0013",
    "kUV\u0018\u0013\u0010\u0018\u0018\u0018\u001c\u0015\u0011",
    "kUV\u001d\u0019\u001c\u001d\u001e\u001c\u0015\u0013\u0018",
    "kUW\u0019\u0019\u001f\u001f\u0019\u001a\u0018\u0010\u0015",
    "kUW\u001c\u001f\u001d\u0014\u0013\u001e\u001f\u0018\u001c",
    "kUP\u001d\u001e\u0018\u001b\u001a\u001c\u001d\u0016\u0016",
    "kUW\u0018\u001c\u001c\u0019\u0018\u001f\u001e\u001c",
    "kU\\\u0010\u0010\u0019\u0013\u001c\u0019\u0017\u0019",
    "kUU\u001b\u0012\u0010\u001d\u001e\u001a\u0019\u001c\u001d",
    "kUU\u001e\u001a\u001f\u001b\u001a\u001e\u001f\u0013\u0012",
    "kUV\u0018\u0018\u0019\u001c\u001c\u0012\u0014\u0019\u0019",
    "kUV\u001c\u0017\u0014\u001e\u001f\u001f\u001c\u0016\u0016",
    "kUW\u001a\u001f\u0018\u0017\u0015\u0014\u0010\u001c\u0015",
    "kUW\u001d\u001d\u0013\u0015\u0018\u001f\u0019\u001b\u0019",
    "kUP\u001d\u0018\u0019\u0018\u0011\u0011\u001f\u0019\u001f",
    "kUV\u001c\u0017\u0018\u0014\u001d\u001d\u001d\u0019",
    "kUS\u001b\u001d\u001c\u0018\u0019\u001b\u001a\u001e",
    "kUU\u001b\u001b\u001a\u001a\u001c\u0014\u0011\u0018\u001d",
    "kUU\u001f\u0016\u0014\u001b\u0019\u001d\u0019\u001f\u001a",
    "kUW\u0019",
    "kUV\u001d\u001b\u001a\u001d\u0018\u0018\u0013\u0019\u0015",
    "kUU\u001d\u0019\u001e\u0012\u0018\u0015\u0014\u0013\u0019",
    "kUU\u001e\u001c\u001d\u001c\u0012\u0012\u001f\u001c\u0010",
    "kUV\u0013\u0018\u0012\u001d\u0017\u0012\u001f\u001c\u001c",
    "kUP",
    "jT\b\u0011\u0013\u0011\u000b\u0004",
    "jT\u0014\u001d\u001e\u0003",
    "jT\u0017\u0007\u001d\u0012\u001e",
    "jT\u0016",
    "jT\u001c",
    "jT\u0007\u0014\u0019\u0015\u001a\r",
    "kUT",
    "jT\u0007\u0013\u0011\u000b)4\u0013\u0019<-",
    "jT\u0011\u0003\u0012\u0019\u001b\u0017\u001f\u0013\u0019",
    "jT\u0000\u0013\u0014\u000e\u0000\u0010\u0013\u0002",
    "jT\n\u0017\u000f\u0007\u0016\u001e\r\u0003\u0005",
    "jT\b\u001b\u0014\u001a\r\u0005\u001e\u0019",
    "jT\f\u0019\u0002\u001f\u0003\u0005\u0013",
    "jT\u0017\b\t\u000f\u0018\u0013",
    "jT\u0011\u001e\u000e\u000f+>\u001a\u0013\u0002",
    "jT\n\u0017\u0014\u0010",
    "jT\n\u0019\u0013\u0019\u0017\u0001",
    "jT,\u0004\u0001\u0019\u00103\u0014\u000e\u0000\u0010\u0013\u0002",
    "jT\u0010\u0003$?\u001e\u0003\u001f\u0011",
    "jT\r\u001f\u0012\u0019\u0005/1",
    "jT*7\u000f\u0007\u0016\u001e\r\u0003\u0005",
    "jT\f\u0004\u0018\u001c",
    "jT,9\u0002\u001f\u0003\u0005\u0013",
    "jT7(\t\u000f\u0018\u0013",
    "jT\f\u0015\u001c\u001d\u0010\u0011\u000e\u0018",
    "jT\u0010\u0003;;\u0000\n\u000f):\n\u000e",
    "jT+5\u0010\u0017\u001e\u000f",
    "jT\u0003\u001a\t# \u0001&:\u0005\u0007\r\u000f\u001e\u0015%9\u000e\b\t\u0003\u0001\u001c\u0003\u0005",
    "jT\n\u0017\r\u0005\u0007\u000b][\u0014\u0013\u0019",
    "jT\u0007\t\u000f\u001c\r\t81\u0011\u0010\u0010\u0013\u0002",
    "jT':\u0017\u0000\u000f\n",
    "jTVN",
    "jT\u0007\u001a\u0017\u0000\u000f\n",
    "jT\u0003\u001a\t/4\u0019\u0002\t\u0005\u0014",
    "jT\u0006\u000f\u000b\u0018\u001b\u000f",
    "jT\u0001\u0010\u001c\u0005",
    "jT\u0007\u001a\u0015\u0018$ \u0011\u0017\u0002\u0003\u001a",
    "jT;\u00187\u0000\u0011\u0017\u0002\u0003\u001a\u0014\n",
    "jT;7\u0000\u0011\u0017\u0002\u0003\u001a",
    "jT3*\u001f*)\u001e\u001a",
    "jT\u0002\u0006\u0004\u000e\u0003\u0007\u000b\u000f5.\u0015",
    "jT;\u0018!\u0006\u0004\u000e\u0003\u0007\u000b\u000f52\u0003\u0001\u001d\u000b\t\u0018\r\u0019",
    "jT\u0000\u0013\u001a4,\u0019\u0003\u001a\u0014\r\u0005\u001e\u0019",
    "jT\u0011\u000f\u0015\u0003",
    "jT':\n\u001b\r\u000f//\u0018\u0005\u0005",
    "jT\u0007\u001a\n\u001b\r\u000f",
    "jT\u0014\t\r\u000f\u0013\"/\f\u001c\u0004\u0003\u000f",
    "jT@_\u001f\u001f$&\n\u000f\u0016\u0014\u0012\u0015\n\u001e\u0019\u0003\u0007\u000e\u0016\u0006\r!\u000e9\u0016\u001d\u0012+",
    "jT\u0013\n\u001f\u001e\u000e\u0003\u0007\u000b\u000f",
    "hV\u0010\u001e\u001f\b",
    "jT;\u00180\n\u001f\u001e\u000e\u0003\u0007\u000b\u000f54\b\t\u0003\u0001\u001c3!\u0010",
    "jT;5\u000f\u000e\u0004\u0002\u001f\t\u001e1;\u0016\u001d\u0019\u000f",
    "jT;4\u000e\u000e\u0018\u0002\u001e\u0019>9\u0002\u001f\u0003\u0005\u0013",
    "jT\u0003\u0013\u001b\u0015\u001b\u0015",
    "jT\u0005\u0015\u0011\u000f\u001e",
    "jT\u0003\u001a\t<:\u0005\u0003\u0003\u0003\u0015\u0011\r21",
    "jT\u0002\u000b\u0003\u0015\u000f\u0005\u001e\u0019",
    "jT\u0003\u001a\t)1\u0011\u0010\u0010\u0013\u0002.#(5",
    "jT\u0003\u001a\t)1\u0011\u0010\u0010\u0013\u0002\u001f)#\"7\u0015\n\u0018%7\u0014\u0010",
    "jT?-\u0017\r\u0005\u0007\u000b][\u0014\u0013\u0019 ",
    "jT;\u00187\u001a\u0005\u0003\u0003(\u0018",
    "jT\u0007\u0014\u0019\u0005\u001f\u001e\u001f\u000e\u000f\u0003\u0005",
    "jT;\u0018)\u001f\u0016\u0017\u0004\u0001\u0014\u000b\u000f",
    "jT\b\u001b\u0014\u001a\u0015\u001c\u001f\u0004\u001f",
    "jT!/\u0018\u0005\u0005",
    "jT\u0017\u001f\r\u001a\u0010",
    "jT\u0014\u001d\u001d\u0018\r\t\t\u0018\u000f",
    "jT\u0014\u0000\u0011\u0017\u0002\u0003\u001a\u001f\u0001",
    "jT\u0001\u0011\u0011\u001e\u000f\u001e\u0005\u0019",
    "jT\f\u0002\u000f\u001b",
    "jT\u0017\u001b\t\u000e\u0001",
    "jT;\u0014.\u0011\u0011\u0013\u001f\u0004\u0000*\u000e\u0015\u0019\u0002\u0015/\u001e\u0014\u0005\u000e\u0019\u000f",
    "jT;4\u000e\u0011\u0011\u0013\u001f\u0004\u0000",
    "jT;\u00180\n\u001f\u001e\u000e\u0003\u0007\u000b\u000f5\"\u000b\u000f\u0015\u0001\f\r\t",
    "jT;\u00184\u000e\u0011\u0011\u0013\u001f\u0004\u0000*\"\u000b\u000f\u0015\u0001\f\r\t",
    "jT;\u00180\n\u001f\u001e\u000e\u0003\u0007\u000b\u000f54\b\t\u0003\u0001\u001c3!\u000b\u0003\u0015\u000f\u0005\u001e\u0019",
    "jT;\u0018!\u0006\u0004\u000e\u0003\u0007\u000b\u000f5\"\u000b\u000f\u0015\u0001\f\r\t",
    "jT;\u0018#\u000e\u0003\u0007\u000b\u000f52\u0003\u0001\u001d\u000b\t\u0018\r\u0019",
    "jT =\r\t",
    "jT\n\u0019\u0000",
    "kUU\u0019\u0018\u0018\u0018",
    "jT)4\r\u0004",
    "jT\u0016\u000b\u0017\u0012\u0013\u001a",
    "jT\u0002\u0012\u001b\u0018\u0005",
    "jT\u0011\u0003\u0005\u0003\u0019\u0017\n",
    "jTd",
    "jTRH\u000e$\u0006",
    "jT\u0015#\u001domzTHA",
    "jT\n/9&5&\u001b",
    "jT'ov\u000b\u0016n\u001by\"9m\u0010[^E-\u0004=\u00035\r",
    "jT0?\u001e\u001aX~,\t\u000e17\u0013'1 5_[>oS\r:",
    "jT",
    "jT\u0007\u0013\u0011\u000b+-"
];

  var te = new l;
  return te.S = t,
  te.S[0] = tt,
  te.O(h.G, 2068, h.D),
  "2.0_"+te.C[3]
}


var xZse93 = "101_3_3.0";
var d_c0 = "AiDSZlKnqhmPTkcBWpDZ93D74yCHxszDhHY=|1733729098";
var xZst81 = "3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZm0Y0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIeQuK7AFpS6O1vukyQ_R0rRnsyukMGvxBEqeCiRnxEL2ZZrxmDucmqhPXnXFMTAoTF6RhRuLPFMYBMiN_ZcNGwrO1IrH0xGC_6XxLhcxMS_xfwJXBAqxLSiO_c_V94qC0X9STvLXOkXtm7GYYbQUmJ9N_hGo0UuVC24NfwuFBTvxMPCxCagg9qwFpquwmiqo_XJSBfqCYFCOONGFG9COM6hXOkLeCPCe0thU8BuFMQ8VB5wF_sDU_V9F9Oqfzdh302iCqSieXUbxmiU3foC3qQ9w_wDe9KM29eDg_gwCG6LLYYHLYhhg_2wHKoUOCbwe8HvN8S8oMJX304h30pJHLxgV1FhN8wUL0Sco1rMXOQTLC18CC"



function getToken(uri){
    let token = {};

    var encryptStr = xZse93 + "+" + uri + "+" + d_c0 + "+" + xZst81;
    var md5Str = md5(encryptStr)

    token.xZst81 = xZst81;
    token.xZse96 = encryptXZse96(encodeURIComponent(md5Str))

    console.log("uri => "+uri)
    console.log("md5 => "+md5Str);
    console.log("xZse96 => "+token.xZse96)

    return token;
}