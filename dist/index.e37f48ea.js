// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6ADjg":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _modelJs = require("./model.js");
var _apiJs = require("./API.js");
var _viewJs = require("./view.js");
var _runtime = require("regenerator-runtime/runtime");
"use strict";
if (module.hot) module.hot.accept();
const hand = document.querySelector(".hand");
////////////////////////
const setTimer = ()=>_modelJs.state.timer = 25;
const subtractTurn = (data)=>data.forEach((card)=>card.turns -= 1);
const killUnits = ()=>{
    if (_modelJs.state.board.length > 0) _modelJs.state.cementary.push(..._modelJs.state.board.filter((card)=>+card.turns === 0));
    _modelJs.state.board = _modelJs.state.board.filter((card)=>+card.turns !== 0);
};
const startTimer = function() {
    setTimer();
    const countdown = setInterval(function() {
        --_modelJs.state.timer;
        _viewJs.renderTimer(_modelJs.state.timer);
        if (_modelJs.state.timer < 1) {
            clearInterval(countdown);
            startTimer();
            _viewJs.stopCursor();
            nextTurn();
            setTimeout(()=>draw(), 2000);
        }
    }, 1000);
};
const draw = function() {
    const number = Math.trunc(Math.random() * _modelJs.state.deck.length);
    if (_modelJs.state.deck.length === 0) return;
    if (_modelJs.state.hand.length === 5) {
        _modelJs.state.cementary.push(_modelJs.state.deck[number]);
        const cementaryNum = document.querySelector(".skull-number");
        _viewJs.giveShakeAnimation(cementaryNum);
    } else _modelJs.state.hand.push(_modelJs.state.deck[number]);
    const x = _modelJs.state.deck.splice(number, 1);
    renderUI();
};
const turnNumberUp = ()=>_modelJs.state.turn += 1;
const manaNumberUp = ()=>{
    _modelJs.state.maxMana += 1;
    _modelJs.state.currentMana = _modelJs.state.maxMana;
};
const nextTurn = function() {
    const player = document.querySelector(".hero");
    const playerImg = document.querySelector(".hero--img");
    const playerHpElement = document.querySelector(".hero--health");
    setTimer();
    turnNumberUp();
    manaNumberUp();
    setTimeout(function() {
        _modelJs.state.playerHp -= _modelJs.state.enemy.attack;
        _viewJs.giveShakeAnimation(playerHpElement);
        _viewJs.giveDamageAnimation(playerHpElement);
        _viewJs.nextTurnAnimation();
        subtractTurn(_modelJs.state.board);
        killUnits();
        renderUI();
        setTimer();
    }, 2000);
};
const drawBtnClick = function() {
    nextTurn();
    _viewJs.stopCursor();
    setTimeout(()=>{
        draw();
    // setTimer();
    }, 2500);
};
const renderUI = function() {
    _viewJs.renderCementaryNum(_modelJs.state.cementary);
    _viewJs.renderDeckNum(_modelJs.state.deck);
    _viewJs.renderHand(_modelJs.state.hand);
    _viewJs.renderBoard(_modelJs.state.board);
    _viewJs.renderMana(_modelJs.state.currentMana, _modelJs.state.maxMana);
    _viewJs.renderTurn(_modelJs.state.turn);
    _viewJs.renderPlayer(_modelJs.state.playerHp);
};
const gameInit = function() {
    draw();
    draw();
    draw();
    _modelJs.state.playerHp = 30;
    renderUI();
    startTimer();
};
hand.addEventListener("click", function(e) {
    const clicked = e.target.closest(".hand--card");
    if (!clicked) return;
    const foundCard = _modelJs.state.hand.find((el)=>el.id === +clicked.id);
    if (foundCard.cost <= _modelJs.state.currentMana) {
        if (foundCard.ability === "Rage" && _modelJs.state.board.length > 0) _modelJs.state.board.forEach((card)=>{
            if (card.attack > 0) card.attack += 1;
        });
        if (foundCard.ability === "Blessing" && _modelJs.state.board.length > 0) _modelJs.state.board.forEach((card)=>{
            if (card.healing > 0) card.healing += 1;
        });
        if (foundCard.ability === "Hourglass" && _modelJs.state.board.length > 0) _modelJs.state.board.forEach((card)=>{
            card.turns += 1;
        });
        const boardArr = _modelJs.state.hand.filter((el)=>el.id === foundCard.id);
        _modelJs.state.board.push(...boardArr);
        const newArr = _modelJs.state.hand.filter((el)=>el.id !== foundCard.id);
        _modelJs.state.hand = newArr;
        _modelJs.state.currentMana -= foundCard.cost;
        renderUI();
    }
});
_viewJs.addHandlerGameInit(gameInit);
_viewJs.addHandlerDraw(drawBtnClick);

},{"core-js/modules/web.immediate.js":"euzye","./model.js":"Y4A21","./API.js":"iKbJC","./view.js":"ky8MP","regenerator-runtime/runtime":"9hb6J"}],"euzye":[function(require,module,exports) {
"use strict";
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("34df65da7b7b4bd6");
require("6909e82a7d930793");

},{"34df65da7b7b4bd6":"5RxYR","6909e82a7d930793":"clVBk"}],"5RxYR":[function(require,module,exports) {
"use strict";
var $ = require("d6c899b6453b6398");
var global = require("252f6cb25a750874");
var clearImmediate = require("eac656905b53ffe8").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"d6c899b6453b6398":"6q3Ex","252f6cb25a750874":"5jNhP","eac656905b53ffe8":"52tiH"}],"6q3Ex":[function(require,module,exports) {
"use strict";
var global = require("9cfb110b51856e7a");
var getOwnPropertyDescriptor = require("9199eb0fb253c57").f;
var createNonEnumerableProperty = require("4bf849026f62578b");
var defineBuiltIn = require("fc1efc95443575e7");
var defineGlobalProperty = require("dac0a5c9b3d3958b");
var copyConstructorProperties = require("1c97706cb5181711");
var isForced = require("5e0364ff5031f119");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"9cfb110b51856e7a":"5jNhP","9199eb0fb253c57":"dVxdk","4bf849026f62578b":"8ATdb","fc1efc95443575e7":"igoPS","dac0a5c9b3d3958b":"5Q1Cy","1c97706cb5181711":"4ixBq","5e0364ff5031f119":"aTjqF"}],"5jNhP":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || this || Function("return this")();

},{}],"dVxdk":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("f79c1d2923eea25c");
var call = require("99723a313cbfc90b");
var propertyIsEnumerableModule = require("9f8824d0236b540d");
var createPropertyDescriptor = require("f93272c7d37b1ea3");
var toIndexedObject = require("d5a18433b16ac7ea");
var toPropertyKey = require("b8c9e980a466febe");
var hasOwn = require("e51b28cd3ac32234");
var IE8_DOM_DEFINE = require("109a405ffdcb1048");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"f79c1d2923eea25c":"jkpsB","99723a313cbfc90b":"6QJZe","9f8824d0236b540d":"bSJBA","f93272c7d37b1ea3":"66VBN","d5a18433b16ac7ea":"dO2Ig","b8c9e980a466febe":"iOFPw","e51b28cd3ac32234":"dlrf7","109a405ffdcb1048":"dsB3L"}],"jkpsB":[function(require,module,exports) {
"use strict";
var fails = require("cb276022a50d4a75");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"cb276022a50d4a75":"kR83N"}],"kR83N":[function(require,module,exports) {
"use strict";
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"6QJZe":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("bacef969156d3b51");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"bacef969156d3b51":"lSedz"}],"lSedz":[function(require,module,exports) {
"use strict";
var fails = require("309aa6cc7f3cde57");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"309aa6cc7f3cde57":"kR83N"}],"bSJBA":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"66VBN":[function(require,module,exports) {
"use strict";
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"dO2Ig":[function(require,module,exports) {
"use strict";
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("fce0dfacc75976c2");
var requireObjectCoercible = require("28e19d800cf50e01");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"fce0dfacc75976c2":"11onf","28e19d800cf50e01":"irCLB"}],"11onf":[function(require,module,exports) {
"use strict";
var uncurryThis = require("fa1c21d3c496076c");
var fails = require("77147906a3f8c35e");
var classof = require("fe9dfe2e8a9fa8aa");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
} : $Object;

},{"fa1c21d3c496076c":"8MB34","77147906a3f8c35e":"kR83N","fe9dfe2e8a9fa8aa":"944Lv"}],"8MB34":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("b3af28a1557b0631");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"b3af28a1557b0631":"lSedz"}],"944Lv":[function(require,module,exports) {
"use strict";
var uncurryThis = require("1c94a77e49f06a36");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"1c94a77e49f06a36":"8MB34"}],"irCLB":[function(require,module,exports) {
"use strict";
var isNullOrUndefined = require("b136e9c0f8a245d9");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"b136e9c0f8a245d9":"efKdu"}],"efKdu":[function(require,module,exports) {
"use strict";
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"iOFPw":[function(require,module,exports) {
"use strict";
var toPrimitive = require("37da5d33b855a777");
var isSymbol = require("77b287447318a20a");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"37da5d33b855a777":"aOKzx","77b287447318a20a":"dKMS7"}],"aOKzx":[function(require,module,exports) {
"use strict";
var call = require("94ebe12d249bdd9f");
var isObject = require("fc108e644b5b54bb");
var isSymbol = require("defb65da238d98c2");
var getMethod = require("bcfb6cc473cf47d");
var ordinaryToPrimitive = require("b799082a5e24f036");
var wellKnownSymbol = require("d5e8258d9075b879");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"94ebe12d249bdd9f":"6QJZe","fc108e644b5b54bb":"c4oO1","defb65da238d98c2":"dKMS7","bcfb6cc473cf47d":"1sxqB","b799082a5e24f036":"dMqNe","d5e8258d9075b879":"LoIsx"}],"c4oO1":[function(require,module,exports) {
"use strict";
var isCallable = require("1d680e46745d1a92");
var $documentAll = require("f47118bb59625918");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"1d680e46745d1a92":"5aWSo","f47118bb59625918":"4jYuZ"}],"5aWSo":[function(require,module,exports) {
"use strict";
var $documentAll = require("f4242eb386b946a0");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"f4242eb386b946a0":"4jYuZ"}],"4jYuZ":[function(require,module,exports) {
"use strict";
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"dKMS7":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("782b4808990c72b0");
var isCallable = require("e0357f9daa942ae8");
var isPrototypeOf = require("d6f65c5a00efa316");
var USE_SYMBOL_AS_UID = require("31019cd2eac231cc");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"782b4808990c72b0":"1vxld","e0357f9daa942ae8":"5aWSo","d6f65c5a00efa316":"2OzSI","31019cd2eac231cc":"LUGxD"}],"1vxld":[function(require,module,exports) {
"use strict";
var global = require("6faa4598cbc60b54");
var isCallable = require("6ab93b28152fd1c0");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"6faa4598cbc60b54":"5jNhP","6ab93b28152fd1c0":"5aWSo"}],"2OzSI":[function(require,module,exports) {
"use strict";
var uncurryThis = require("2835294f3e586ca0");
module.exports = uncurryThis({}.isPrototypeOf);

},{"2835294f3e586ca0":"8MB34"}],"LUGxD":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("b0a6e399ae500d51");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"b0a6e399ae500d51":"e7kt7"}],"e7kt7":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("5ec0bbe738ffc741");
var fails = require("dd94d90bc3b71699");
var global = require("4e65cbe663e6ae8");
var $String = global.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol("symbol detection");
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"5ec0bbe738ffc741":"lrCsT","dd94d90bc3b71699":"kR83N","4e65cbe663e6ae8":"5jNhP"}],"lrCsT":[function(require,module,exports) {
"use strict";
var global = require("20402a65c3f80569");
var userAgent = require("7894b443a41468f6");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"20402a65c3f80569":"5jNhP","7894b443a41468f6":"l9X5V"}],"l9X5V":[function(require,module,exports) {
"use strict";
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"1sxqB":[function(require,module,exports) {
"use strict";
var aCallable = require("497e2b3ddc55cefe");
var isNullOrUndefined = require("49e7c5dcc1e26c55");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"497e2b3ddc55cefe":"7gl1h","49e7c5dcc1e26c55":"efKdu"}],"7gl1h":[function(require,module,exports) {
"use strict";
var isCallable = require("f03964a466ce79a2");
var tryToString = require("8d58c8b857e60ac2");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"f03964a466ce79a2":"5aWSo","8d58c8b857e60ac2":"jCQwh"}],"jCQwh":[function(require,module,exports) {
"use strict";
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"dMqNe":[function(require,module,exports) {
"use strict";
var call = require("b1c990933740f25f");
var isCallable = require("c2ee4fb92510dd7b");
var isObject = require("bb628742b703417b");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"b1c990933740f25f":"6QJZe","c2ee4fb92510dd7b":"5aWSo","bb628742b703417b":"c4oO1"}],"LoIsx":[function(require,module,exports) {
"use strict";
var global = require("57b60285f386d872");
var shared = require("39e13b1c35fbef4");
var hasOwn = require("1e0705bb2ae39add");
var uid = require("5c1510369ac0a8fe");
var NATIVE_SYMBOL = require("169dbfe0ae1fc95e");
var USE_SYMBOL_AS_UID = require("ba521e498d33694b");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"57b60285f386d872":"5jNhP","39e13b1c35fbef4":"04SQk","1e0705bb2ae39add":"dlrf7","5c1510369ac0a8fe":"2Iz6X","169dbfe0ae1fc95e":"e7kt7","ba521e498d33694b":"LUGxD"}],"04SQk":[function(require,module,exports) {
"use strict";
var IS_PURE = require("889689ad106f320");
var store = require("f010f484a47e98ad");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.32.1",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"889689ad106f320":"9ezWj","f010f484a47e98ad":"65zte"}],"9ezWj":[function(require,module,exports) {
"use strict";
module.exports = false;

},{}],"65zte":[function(require,module,exports) {
"use strict";
var global = require("69ad043addf8a319");
var defineGlobalProperty = require("741c7f4795a521a5");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"69ad043addf8a319":"5jNhP","741c7f4795a521a5":"5Q1Cy"}],"5Q1Cy":[function(require,module,exports) {
"use strict";
var global = require("896feab2ac1c7ad8");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"896feab2ac1c7ad8":"5jNhP"}],"dlrf7":[function(require,module,exports) {
"use strict";
var uncurryThis = require("f8d5b6c4149481a0");
var toObject = require("5cd65e8bd5eae53e");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"f8d5b6c4149481a0":"8MB34","5cd65e8bd5eae53e":"2yKQ7"}],"2yKQ7":[function(require,module,exports) {
"use strict";
var requireObjectCoercible = require("4fdb888554101c78");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"4fdb888554101c78":"irCLB"}],"2Iz6X":[function(require,module,exports) {
"use strict";
var uncurryThis = require("450cc20ad23ed85");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"450cc20ad23ed85":"8MB34"}],"dsB3L":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("8cfb2a62ca360190");
var fails = require("4e7a2bb7bab30400");
var createElement = require("33f2cb4bffb61fbf");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"8cfb2a62ca360190":"jkpsB","4e7a2bb7bab30400":"kR83N","33f2cb4bffb61fbf":"arz3p"}],"arz3p":[function(require,module,exports) {
"use strict";
var global = require("4bb264a7d4b35b56");
var isObject = require("74d91e7ffc4a7e00");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"4bb264a7d4b35b56":"5jNhP","74d91e7ffc4a7e00":"c4oO1"}],"8ATdb":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("5475b21b660699ff");
var definePropertyModule = require("f72e98ff79b22f73");
var createPropertyDescriptor = require("c0c813b5c9cb342f");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"5475b21b660699ff":"jkpsB","f72e98ff79b22f73":"lwXVM","c0c813b5c9cb342f":"66VBN"}],"lwXVM":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("222a173248039e33");
var IE8_DOM_DEFINE = require("acd147df7dfd08b5");
var V8_PROTOTYPE_DEFINE_BUG = require("823dec5b299b2dd1");
var anObject = require("c41c996d42f3dbc2");
var toPropertyKey = require("adc72cb586c5ba82");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"222a173248039e33":"jkpsB","acd147df7dfd08b5":"dsB3L","823dec5b299b2dd1":"cxnu7","c41c996d42f3dbc2":"4GfE3","adc72cb586c5ba82":"iOFPw"}],"cxnu7":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("5d24a379d57a929");
var fails = require("f26d6311eec70db0");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"5d24a379d57a929":"jkpsB","f26d6311eec70db0":"kR83N"}],"4GfE3":[function(require,module,exports) {
"use strict";
var isObject = require("7be4164f05270310");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"7be4164f05270310":"c4oO1"}],"igoPS":[function(require,module,exports) {
"use strict";
var isCallable = require("3b7898754f575037");
var definePropertyModule = require("cc4c5e5870775054");
var makeBuiltIn = require("f37c6c9c1d44d2b7");
var defineGlobalProperty = require("46b8de5eb0c448dd");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"3b7898754f575037":"5aWSo","cc4c5e5870775054":"lwXVM","f37c6c9c1d44d2b7":"iGlGM","46b8de5eb0c448dd":"5Q1Cy"}],"iGlGM":[function(require,module,exports) {
"use strict";
var uncurryThis = require("29bc5000deabad7d");
var fails = require("d85ca0e2ef246f08");
var isCallable = require("6e09d59526cab983");
var hasOwn = require("5ca63ed841b3b650");
var DESCRIPTORS = require("c8bfc26ff38bd4d3");
var CONFIGURABLE_FUNCTION_NAME = require("8e5e1d30b90e8271").CONFIGURABLE;
var inspectSource = require("e307dc3af7953340");
var InternalStateModule = require("dbb5e0c2287cfaf0");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"29bc5000deabad7d":"8MB34","d85ca0e2ef246f08":"kR83N","6e09d59526cab983":"5aWSo","5ca63ed841b3b650":"dlrf7","c8bfc26ff38bd4d3":"jkpsB","8e5e1d30b90e8271":"9nEIR","e307dc3af7953340":"5mhxj","dbb5e0c2287cfaf0":"jh5QJ"}],"9nEIR":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("1e75f972ba11d940");
var hasOwn = require("f39820a29c0fb181");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"1e75f972ba11d940":"jkpsB","f39820a29c0fb181":"dlrf7"}],"5mhxj":[function(require,module,exports) {
"use strict";
var uncurryThis = require("cdfb6b6a798b540d");
var isCallable = require("29c34cf64c68ac49");
var store = require("e295137abc9069f0");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"cdfb6b6a798b540d":"8MB34","29c34cf64c68ac49":"5aWSo","e295137abc9069f0":"65zte"}],"jh5QJ":[function(require,module,exports) {
"use strict";
var NATIVE_WEAK_MAP = require("61fb731b20940151");
var global = require("9c1dcbb92f8e9dc5");
var isObject = require("b7b44848fa3311ce");
var createNonEnumerableProperty = require("e35e8ef0592c0b8c");
var hasOwn = require("5adb7387a1655244");
var shared = require("4fbf46fd3665f6e0");
var sharedKey = require("4ecfebf3e1a0e98f");
var hiddenKeys = require("6a922362af208288");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"61fb731b20940151":"fjJgR","9c1dcbb92f8e9dc5":"5jNhP","b7b44848fa3311ce":"c4oO1","e35e8ef0592c0b8c":"8ATdb","5adb7387a1655244":"dlrf7","4fbf46fd3665f6e0":"65zte","4ecfebf3e1a0e98f":"fIiZL","6a922362af208288":"8v9hG"}],"fjJgR":[function(require,module,exports) {
"use strict";
var global = require("40fa980036f3a642");
var isCallable = require("773347e905abc10");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"40fa980036f3a642":"5jNhP","773347e905abc10":"5aWSo"}],"fIiZL":[function(require,module,exports) {
"use strict";
var shared = require("fecdf30303e4df60");
var uid = require("1ef11e22bcd0ce53");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"fecdf30303e4df60":"04SQk","1ef11e22bcd0ce53":"2Iz6X"}],"8v9hG":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"4ixBq":[function(require,module,exports) {
"use strict";
var hasOwn = require("56595f07e5e2dcb5");
var ownKeys = require("7e2df96fb6085fd3");
var getOwnPropertyDescriptorModule = require("fe2e34e77e203ed0");
var definePropertyModule = require("67de30af183d2dd2");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"56595f07e5e2dcb5":"dlrf7","7e2df96fb6085fd3":"eJJDC","fe2e34e77e203ed0":"dVxdk","67de30af183d2dd2":"lwXVM"}],"eJJDC":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("b3d2cd1d207f886d");
var uncurryThis = require("78483e220667b246");
var getOwnPropertyNamesModule = require("1b22821451f5bfbc");
var getOwnPropertySymbolsModule = require("52499202549f86b0");
var anObject = require("6f858bbb0fb17841");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"b3d2cd1d207f886d":"1vxld","78483e220667b246":"8MB34","1b22821451f5bfbc":"jPz43","52499202549f86b0":"7vd9i","6f858bbb0fb17841":"4GfE3"}],"jPz43":[function(require,module,exports) {
"use strict";
var internalObjectKeys = require("5c4e32587943088d");
var enumBugKeys = require("983bcfbff51bf618");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"5c4e32587943088d":"hzGCt","983bcfbff51bf618":"kkju4"}],"hzGCt":[function(require,module,exports) {
"use strict";
var uncurryThis = require("789ec9bb04c21cab");
var hasOwn = require("5224eef5b657b501");
var toIndexedObject = require("2f758446b27017fb");
var indexOf = require("7ee5588bc403260c").indexOf;
var hiddenKeys = require("45f9ac8752973ff0");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"789ec9bb04c21cab":"8MB34","5224eef5b657b501":"dlrf7","2f758446b27017fb":"dO2Ig","7ee5588bc403260c":"bCF5n","45f9ac8752973ff0":"8v9hG"}],"bCF5n":[function(require,module,exports) {
"use strict";
var toIndexedObject = require("551b5f8d027c9bb0");
var toAbsoluteIndex = require("73442d871cd23b4d");
var lengthOfArrayLike = require("be3d0f3c0406b497");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"551b5f8d027c9bb0":"dO2Ig","73442d871cd23b4d":"eqb6Z","be3d0f3c0406b497":"ag0Uz"}],"eqb6Z":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("40b67b525fcbabb");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"40b67b525fcbabb":"kPTJv"}],"kPTJv":[function(require,module,exports) {
"use strict";
var trunc = require("4b015dd90908379b");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"4b015dd90908379b":"83m2c"}],"83m2c":[function(require,module,exports) {
"use strict";
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"ag0Uz":[function(require,module,exports) {
"use strict";
var toLength = require("b46756e7e8c1d644");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"b46756e7e8c1d644":"BCA6P"}],"BCA6P":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("5ace4e10fcb75f94");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"5ace4e10fcb75f94":"kPTJv"}],"kkju4":[function(require,module,exports) {
"use strict";
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"7vd9i":[function(require,module,exports) {
"use strict";
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"aTjqF":[function(require,module,exports) {
"use strict";
var fails = require("4ddb538997e2371c");
var isCallable = require("e45b11580130cdd7");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"4ddb538997e2371c":"kR83N","e45b11580130cdd7":"5aWSo"}],"52tiH":[function(require,module,exports) {
"use strict";
var global = require("37b93eda26e45edb");
var apply = require("2b1825420282b6cc");
var bind = require("49751eb6bcaee695");
var isCallable = require("ea8b69ce9c411001");
var hasOwn = require("2f649a3598fc854f");
var fails = require("45674694bd910992");
var html = require("684089e3fbf21db9");
var arraySlice = require("632412bf2512b22");
var createElement = require("d8603fddc7017610");
var validateArgumentsLength = require("4645b0d5a0a10d87");
var IS_IOS = require("6afb50bb4c58f4fe");
var IS_NODE = require("e8e34f60ddaa3ec8");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"37b93eda26e45edb":"5jNhP","2b1825420282b6cc":"0452B","49751eb6bcaee695":"cZwtV","ea8b69ce9c411001":"5aWSo","2f649a3598fc854f":"dlrf7","45674694bd910992":"kR83N","684089e3fbf21db9":"itarn","632412bf2512b22":"45M0u","d8603fddc7017610":"arz3p","4645b0d5a0a10d87":"4r31R","6afb50bb4c58f4fe":"2nDFf","e8e34f60ddaa3ec8":"aYEwx"}],"0452B":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("b703f6b642c617c4");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"b703f6b642c617c4":"lSedz"}],"cZwtV":[function(require,module,exports) {
"use strict";
var uncurryThis = require("1279fa3e056ef675");
var aCallable = require("ba33881b91ec58f0");
var NATIVE_BIND = require("7558bc2f0c97bd18");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"1279fa3e056ef675":"9y61R","ba33881b91ec58f0":"7gl1h","7558bc2f0c97bd18":"lSedz"}],"9y61R":[function(require,module,exports) {
"use strict";
var classofRaw = require("a77e2ca59d068d22");
var uncurryThis = require("30f7cb9c108a2afd");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"a77e2ca59d068d22":"944Lv","30f7cb9c108a2afd":"8MB34"}],"itarn":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("b2449bb253a667a1");
module.exports = getBuiltIn("document", "documentElement");

},{"b2449bb253a667a1":"1vxld"}],"45M0u":[function(require,module,exports) {
"use strict";
var uncurryThis = require("1ccd70cc3b1bd238");
module.exports = uncurryThis([].slice);

},{"1ccd70cc3b1bd238":"8MB34"}],"4r31R":[function(require,module,exports) {
"use strict";
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"2nDFf":[function(require,module,exports) {
"use strict";
var userAgent = require("705ab4e0340a5419");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"705ab4e0340a5419":"l9X5V"}],"aYEwx":[function(require,module,exports) {
"use strict";
var global = require("3c76974640cf091b");
var classof = require("e06d53df2d0458fc");
module.exports = classof(global.process) === "process";

},{"3c76974640cf091b":"5jNhP","e06d53df2d0458fc":"944Lv"}],"clVBk":[function(require,module,exports) {
"use strict";
var $ = require("e3b3d7f4edf89ae6");
var global = require("8d8504c693a49331");
var setTask = require("11c5b5018c4130e1").set;
var schedulersFix = require("1e49efa26736ff81");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"e3b3d7f4edf89ae6":"6q3Ex","8d8504c693a49331":"5jNhP","11c5b5018c4130e1":"52tiH","1e49efa26736ff81":"jopxy"}],"jopxy":[function(require,module,exports) {
"use strict";
var global = require("f45dd2d2355f22b1");
var apply = require("f268cde06e875996");
var isCallable = require("df38dbb437ab2e3d");
var ENGINE_IS_BUN = require("e9f7c54d3d62d2fa");
var USER_AGENT = require("661633eb652f48a8");
var arraySlice = require("bcc0a2e8f57071");
var validateArgumentsLength = require("88a30985abfb8b7f");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] === "0" && (version[1] < 3 || version[1] === "3" && version[2] === "0");
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"f45dd2d2355f22b1":"5jNhP","f268cde06e875996":"0452B","df38dbb437ab2e3d":"5aWSo","e9f7c54d3d62d2fa":"6PSEY","661633eb652f48a8":"l9X5V","bcc0a2e8f57071":"45M0u","88a30985abfb8b7f":"4r31R"}],"6PSEY":[function(require,module,exports) {
"use strict";
/* global Bun -- Deno case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
var _apiJs = require("./API.js");
const state = {
    deck: [],
    board: [],
    hand: [],
    cementary: [],
    currentTurn: 1,
    timer: 25,
    enemy: {
        attack: 5,
        hp: 30
    },
    playerHp: 30,
    currentMana: 1,
    maxMana: 1,
    turn: 1
};
state.deck = [
    ..._apiJs.defaultDeckArray
];

},{"./API.js":"iKbJC","@parcel/transformer-js/src/esmodule-helpers.js":"ixE4s"}],"iKbJC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "card1", ()=>card1);
parcelHelpers.export(exports, "card2", ()=>card2);
parcelHelpers.export(exports, "card3", ()=>card3);
parcelHelpers.export(exports, "card4", ()=>card4);
parcelHelpers.export(exports, "card5", ()=>card5);
parcelHelpers.export(exports, "card6", ()=>card6);
parcelHelpers.export(exports, "card7", ()=>card7);
parcelHelpers.export(exports, "card8", ()=>card8);
parcelHelpers.export(exports, "card9", ()=>card9);
parcelHelpers.export(exports, "card10", ()=>card10);
parcelHelpers.export(exports, "card11", ()=>card11);
parcelHelpers.export(exports, "card12", ()=>card12);
parcelHelpers.export(exports, "card13", ()=>card13);
parcelHelpers.export(exports, "card14", ()=>card14);
parcelHelpers.export(exports, "card15", ()=>card15);
parcelHelpers.export(exports, "card16", ()=>card16);
parcelHelpers.export(exports, "card17", ()=>card17);
parcelHelpers.export(exports, "card18", ()=>card18);
parcelHelpers.export(exports, "card19", ()=>card19);
parcelHelpers.export(exports, "card20", ()=>card20);
parcelHelpers.export(exports, "card21", ()=>card21);
parcelHelpers.export(exports, "card22", ()=>card22);
parcelHelpers.export(exports, "card23", ()=>card23);
parcelHelpers.export(exports, "card24", ()=>card24);
parcelHelpers.export(exports, "card25", ()=>card25);
parcelHelpers.export(exports, "card26", ()=>card26);
parcelHelpers.export(exports, "card27", ()=>card27);
parcelHelpers.export(exports, "card28", ()=>card28);
parcelHelpers.export(exports, "card29", ()=>card29);
parcelHelpers.export(exports, "card30", ()=>card30);
parcelHelpers.export(exports, "defaultDeckArray", ()=>defaultDeckArray);
class Card {
    constructor(name, defaultAttack, attack, defaultHealing, healing, cost, defaultTurns, turns, ability, img, id){
        this.name = name;
        this.defaultAttack = defaultAttack;
        this.attack = attack;
        this.defaultHealing = defaultHealing;
        this.healing = healing;
        this.cost = cost;
        this.defaultTurns = defaultTurns;
        this.turns = turns;
        this.ability = ability;
        this.img = img;
        this.id = id;
    }
}
const card1 = new Card("Weak Farmer", 2, 2, 0, 0, 1, 3, 3, "", "/weakFarmer2.d47a8e3b.jpeg", 1);
const card2 = new Card("Weak Farmer", 2, 2, 0, 0, 1, 3, 3, "", "/weakFarmer2.d47a8e3b.jpeg", 2);
const card3 = new Card("Tree of Vitality", 0, 0, 5, 5, 2, 4, 4, "", "/weakFarmer2.d47a8e3b.jpeg", 3);
const card4 = new Card("Tree of Vitality", 0, 0, 5, 5, 2, 4, 4, "", "/weakFarmer2.d47a8e3b.jpeg", 4);
const card5 = new Card("Hound", 3, 3, 0, 0, 1, 2, 2, "", "/weakFarmer2.d47a8e3b.jpeg", 5);
const card6 = new Card("Hound", 3, 3, 0, 0, 1, 2, 2, "", "/weakFarmer2.d47a8e3b.jpeg", 6);
const card7 = new Card("Castle Guardian", 4, 4, 0, 0, 2, 2, 2, "", "/weakFarmer2.d47a8e3b.jpeg", 7);
const card8 = new Card("Castle Guardian", 4, 4, 0, 0, 2, 2, 2, "", "/weakFarmer2.d47a8e3b.jpeg", 8);
const card9 = new Card("Caplan of Miridith", 0, 0, 5, 5, 3, 4, 4, "", "/weakFarmer2.d47a8e3b.jpeg", 9);
const card10 = new Card("Caplan of Miridith", 0, 0, 5, 5, 3, 4, 4, "", "/weakFarmer2.d47a8e3b.jpeg", 10);
const card11 = new Card("Strong farmer", 4, 4, 0, 0, 3, 2, 2, "", "/weakFarmer2.d47a8e3b.jpeg", 11);
const card12 = new Card("Strong farmer", 4, 4, 0, 0, 3, 2, 2, "", "/weakFarmer2.d47a8e3b.jpeg", 12);
const card13 = new Card("Berserker", 6, 6, 0, 0, 4, 1, 1, "", "/weakFarmer2.d47a8e3b.jpeg", 13);
const card14 = new Card("Berserker", 6, 6, 0, 0, 4, 1, 1, "", "/weakFarmer2.d47a8e3b.jpeg", 14);
const card15 = new Card("King's Defender", 4, 4, 0, 0, 4, 3, 3, "", "/weakFarmer2.d47a8e3b.jpeg", 15);
const card16 = new Card("King's Defender", 4, 4, 0, 0, 4, 3, 3, "", "/weakFarmer2.d47a8e3b.jpeg", 16);
const card17 = new Card("Military Hornist", 2, 2, 0, 0, 4, 3, 3, "Rage", "/weakFarmer2.d47a8e3b.jpeg", 17);
const card18 = new Card("Military Hornist", 2, 2, 0, 0, 4, 3, 3, "Rage", "/weakFarmer2.d47a8e3b.jpeg", 18);
const card19 = new Card("Light of Azhura", 0, 0, 6, 6, 5, 3, 3, "Blessing", "/weakFarmer2.d47a8e3b.jpeg", 19);
const card20 = new Card("Light of Azhura", 0, 0, 6, 6, 5, 3, 3, "Blessing", "/weakFarmer2.d47a8e3b.jpeg", 20);
const card21 = new Card("Firandil the Bloody", 6, 6, 0, 0, 5, 3, 3, "Rage", "/weakFarmer2.d47a8e3b.jpeg", 21);
const card22 = new Card("Burning Wagon", 7, 7, 0, 0, 5, 1, 1, "", "/weakFarmer2.d47a8e3b.jpeg", 22);
const card23 = new Card("Burning Wagon", 7, 7, 0, 0, 5, 1, 1, "", "/weakFarmer2.d47a8e3b.jpeg", 23);
const card24 = new Card("Time traveler", 5, 5, 0, 0, 6, 2, 2, "Hourglass", "/weakFarmer2.d47a8e3b.jpeg", 24);
const card25 = new Card("Time traveler", 2, 2, 0, 0, 6, 2, 2, "Hourglass", "/weakFarmer2.d47a8e3b.jpeg", 25);
const card26 = new Card("Ciril the Mighty", 7, 7, 0, 0, 7, 4, 4, "", "/weakFarmer2.d47a8e3b.jpeg", 26);
const card27 = new Card("Archmage Valorian", 6, 6, 0, 0, 7, 5, 5, "", "/weakFarmer2.d47a8e3b.jpeg", 27);
const card28 = new Card("Princess Laurith", 0, 0, 9, 9, 7, 3, 3, "Blessing", "/weakFarmer2.d47a8e3b.jpeg", 28);
const card29 = new Card("Karcoth The King", 9, 9, 0, 0, 8, 3, 3, "", "/weakFarmer2.d47a8e3b.jpeg", 29);
const card30 = new Card("Azhura", 8, 8, 0, 0, 9, 3, 3, "Hourglass", "/weakFarmer2.d47a8e3b.jpeg", 30);
const defaultDeckArray = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card21,
    card22,
    card23,
    card24,
    card25,
    card26,
    card27,
    card28,
    card29,
    card30
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ixE4s"}],"ixE4s":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ky8MP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "giveShakeAnimation", ()=>giveShakeAnimation);
parcelHelpers.export(exports, "giveDamageAnimation", ()=>giveDamageAnimation);
parcelHelpers.export(exports, "nextTurnAnimation", ()=>nextTurnAnimation);
parcelHelpers.export(exports, "renderCementaryNum", ()=>renderCementaryNum);
parcelHelpers.export(exports, "renderDeckNum", ()=>renderDeckNum);
parcelHelpers.export(exports, "renderTimer", ()=>renderTimer);
parcelHelpers.export(exports, "stopCursor", ()=>stopCursor);
parcelHelpers.export(exports, "renderHand", ()=>renderHand);
parcelHelpers.export(exports, "renderBoard", ()=>renderBoard);
parcelHelpers.export(exports, "renderMana", ()=>renderMana);
parcelHelpers.export(exports, "renderTurn", ()=>renderTurn);
parcelHelpers.export(exports, "renderPlayer", ()=>renderPlayer);
parcelHelpers.export(exports, "addHandlerGameInit", ()=>addHandlerGameInit);
parcelHelpers.export(exports, "addHandlerDraw", ()=>addHandlerDraw);
const board = document.querySelector(".board");
const hoverView = document.querySelector(".hover-view");
const enemySide = document.querySelector(".enemy-section");
const enemyDiscription = document.querySelector(".enemy-section--discription");
const enemyHealth = document.querySelector(".enemy-section--hero--health");
const gameMenu = document.querySelector(".game-menu");
const gameMenuCntnr = document.querySelector(".game-menu--container");
const game = document.querySelector(".game");
const footer = document.querySelector(".footer");
const deckNum = document.querySelector(".deck-number");
const cementaryNum = document.querySelector(".skull-number");
const drawBtn = document.querySelector(".button--draw");
const hand = document.querySelector(".hand");
const turnCounter = document.querySelector(".turn-counter");
const playerHp = document.querySelector(".hero--health");
const nextTurnText = document.querySelector(".next-turn--container");
const btns = document.querySelector("#btn");
const giveShakeAnimation = function(parentEl) {
    parentEl.classList.add("shake-animation");
    setTimeout(function() {
        parentEl.classList.remove("shake-animation");
    }, 1000);
};
const giveDamageAnimation = function(parentEl) {
    parentEl.style.backgroundColor = "red";
    setTimeout(function() {
        parentEl.style.backgroundColor = "white";
    }, 1000);
};
const nextTurnAnimation = ()=>{
    nextTurnText.style.display = "flex";
    setTimeout(function() {
        nextTurnText.style.opacity = 1;
    }, 500);
    setTimeout(function() {
        nextTurnText.style.opacity = 0;
    }, 1500);
    setTimeout(function() {
        nextTurnText.style.display = "none";
    }, 2300);
};
const renderCementaryNum = (data)=>cementaryNum.textContent = data.length;
const renderDeckNum = (data)=>deckNum.textContent = data.length;
const renderTimer = function(data) {
    const timer = document.querySelector(".timer");
    timer.textContent = `${data}s`;
};
const stopCursor = ()=>{
    btns.style.cursor = "not-allowed";
    console.log(btns);
    setTimeout(()=>btns.style.cursor = "pointer", 2500);
};
const renderHand = async function(data) {
    const parentElement = document.querySelector(".hand");
    parentElement.innerHTML = "";
    data.forEach(function(card) {
        const markup = `
    <div class="hand--card" id="${card.id}">
        <div class="hand--card--cost">${card.cost}</div>
        <img src="${card.img}" class="hand--card--img" />
        <p class="hand--card--name">${card.name}</p>
        <p class="hand--card--ability"><br />${card.ability}</p>
        <div class="hand--card--left-stat ${card.healing > 0 ? "healer" : ""}">${card.attack === 0 ? card.healing : card.attack}</div>
        <div class="hand--card--turn-stat">${card.turns}</div>
    </div>
    `;
        parentElement.insertAdjacentHTML("beforeend", markup);
    });
};
const renderBoard = function(data) {
    const parentElement = board;
    parentElement.innerHTML = "";
    data.forEach(function(card) {
        const markup = `
    <div class="board--card" data-id="${card.id}00">
      <img class="board--card--img" src="${card.img}" />
      <div class="board--card--left-stat  ${card.healing > 0 ? "healer" : ""}">${card.attack === 0 ? card.healing : card.attack}</div>
      <div class="board--card--turn-stat">${card.turns}</div>
      <div class="hover-view" id="${card.id}00">
        <div class="hover-view--cost">${card.cost}</div>
        <img src="${card.img}" class="hover-view--img" />
        <p class="hover-view--name">${card.name}</p>
        <p class="hover-view--ability"><br />${card.ability}</p>
        <div class="hover-view--left-stat ${card.healing > 0 ? "healer" : ""}">${card.attack === 0 ? card.healing : card.defaultAttack}</div>
        <div class="hover-view--turn-stat">${card.defaultTurns}</div>
      </div>
    </div>
    `;
        parentElement.insertAdjacentHTML("beforeend", markup);
    });
};
const renderMana = function(currentData, maxData) {
    const manaCounter = document.querySelector(".mana--counter");
    const manaContainer = document.querySelector(".mana--container");
    manaCounter.textContent = `${currentData}/${maxData}`;
    const markup = `
    <p class="mana"></p>
  `;
    manaContainer.innerHTML = "";
    for(let i = 1; i <= currentData; i++)manaContainer.insertAdjacentHTML("beforeend", markup);
};
const renderTurn = function(data) {
    let rest;
    if (data === 1) rest = "st";
    if (data === 2) rest = "nd";
    if (data === 3) rest = "rd";
    if (data > 3) rest = "th";
    turnCounter.textContent = `${data}${rest} turn`;
};
const renderPlayer = (data)=>playerHp.textContent = data;
const addHandlerGameInit = function(handler) {
    gameMenuCntnr.addEventListener("click", (e)=>handler());
};
const addHandlerDraw = function(handler) {
    drawBtn.addEventListener("click", function(e) {
        handler();
    });
};
// game animation events //
enemySide.addEventListener("mouseover", ()=>enemyDiscription.style.opacity = "1");
enemySide.addEventListener("mouseout", ()=>enemyDiscription.style.opacity = "0");
board.addEventListener("mouseover", function(e) {
    const clicked = e.target.closest(".board--card");
    if (!clicked) return;
    const elementFound = document.getElementById(`${clicked.dataset.id}`);
    elementFound.style.opacity = "1";
});
board.addEventListener("mouseout", function(e) {
    const clicked = e.target.closest(".board--card");
    if (!clicked) return;
    const elementFound = document.getElementById(`${clicked.dataset.id}`);
    elementFound.style.opacity = "0";
});
gameMenuCntnr.addEventListener("click", function(e) {
    gameMenu.style.display = "none";
    footer.style.display = "none";
    game.style.opacity = "1";
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ixE4s"}],"9hb6J":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable || iterable === "") {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}]},["6ADjg","aenu9"], "aenu9", "parcelRequire27eb")

//# sourceMappingURL=index.e37f48ea.js.map
