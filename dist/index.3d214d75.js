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
})({"8BXtR":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var _chessground = require("chessground");
var _chessgroundBaseCss = require("chessground/assets/chessground.base.css");
var _chessgroundBrownCss = require("chessground/assets/chessground.brown.css");
var _chessgroundCburnettCss = require("chessground/assets/chessground.cburnett.css");
const config = {};
const ground = (0, _chessground.Chessground)(document.getElementById("chessground"), config);

},{"chessground":"euGnD","chessground/assets/chessground.base.css":"3S2F9","chessground/assets/chessground.brown.css":"9gfGW","chessground/assets/chessground.cburnett.css":"dw6pW"}],"euGnD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Chessground", ()=>Chessground);
var _apiJs = require("./api.js");
var _configJs = require("./config.js");
var _stateJs = require("./state.js");
var _wrapJs = require("./wrap.js");
var _eventsJs = require("./events.js");
var _renderJs = require("./render.js");
var _autoPiecesJs = require("./autoPieces.js");
var _svgJs = require("./svg.js");
var _utilJs = require("./util.js");
function Chessground(element, config) {
    const maybeState = (0, _stateJs.defaults)();
    (0, _configJs.configure)(maybeState, config || {});
    function redrawAll() {
        const prevUnbind = "dom" in maybeState ? maybeState.dom.unbind : undefined;
        // compute bounds from existing board element if possible
        // this allows non-square boards from CSS to be handled (for 3D)
        const elements = (0, _wrapJs.renderWrap)(element, maybeState), bounds = _utilJs.memo(()=>elements.board.getBoundingClientRect()), redrawNow = (skipSvg)=>{
            (0, _renderJs.render)(state);
            if (elements.autoPieces) _autoPiecesJs.render(state, elements.autoPieces);
            if (!skipSvg && elements.svg) _svgJs.renderSvg(state, elements.svg, elements.customSvg);
        }, onResize = ()=>{
            (0, _renderJs.updateBounds)(state);
            (0, _renderJs.renderResized)(state);
            if (elements.autoPieces) _autoPiecesJs.renderResized(state);
        };
        const state = maybeState;
        state.dom = {
            elements,
            bounds,
            redraw: debounceRedraw(redrawNow),
            redrawNow,
            unbind: prevUnbind
        };
        state.drawable.prevSvgHash = "";
        (0, _renderJs.updateBounds)(state);
        redrawNow(false);
        _eventsJs.bindBoard(state, onResize);
        if (!prevUnbind) state.dom.unbind = _eventsJs.bindDocument(state, onResize);
        state.events.insert && state.events.insert(elements);
        return state;
    }
    return (0, _apiJs.start)(redrawAll(), redrawAll);
}
function debounceRedraw(redrawNow) {
    let redrawing = false;
    return ()=>{
        if (redrawing) return;
        redrawing = true;
        requestAnimationFrame(()=>{
            redrawNow();
            redrawing = false;
        });
    };
}

},{"./api.js":"hwMai","./config.js":"j0dnW","./state.js":"4j4A3","./wrap.js":"df69G","./events.js":"8TjL6","./render.js":"97C3T","./autoPieces.js":"kMgOL","./svg.js":"53ViK","./util.js":"SmZpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwMai":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// see API types and documentations in dts/api.d.ts
parcelHelpers.export(exports, "start", ()=>start);
var _boardJs = require("./board.js");
var _fenJs = require("./fen.js");
var _configJs = require("./config.js");
var _animJs = require("./anim.js");
var _dragJs = require("./drag.js");
var _explosionJs = require("./explosion.js");
function start(state, redrawAll) {
    function toggleOrientation() {
        _boardJs.toggleOrientation(state);
        redrawAll();
    }
    return {
        set (config) {
            if (config.orientation && config.orientation !== state.orientation) toggleOrientation();
            (0, _configJs.applyAnimation)(state, config);
            (config.fen ? (0, _animJs.anim) : (0, _animJs.render))((state)=>(0, _configJs.configure)(state, config), state);
        },
        state,
        getFen: ()=>(0, _fenJs.write)(state.pieces),
        toggleOrientation,
        setPieces (pieces) {
            (0, _animJs.anim)((state)=>_boardJs.setPieces(state, pieces), state);
        },
        selectSquare (key, force) {
            if (key) (0, _animJs.anim)((state)=>_boardJs.selectSquare(state, key, force), state);
            else if (state.selected) {
                _boardJs.unselect(state);
                state.dom.redraw();
            }
        },
        move (orig, dest) {
            (0, _animJs.anim)((state)=>_boardJs.baseMove(state, orig, dest), state);
        },
        newPiece (piece, key) {
            (0, _animJs.anim)((state)=>_boardJs.baseNewPiece(state, piece, key), state);
        },
        playPremove () {
            if (state.premovable.current) {
                if ((0, _animJs.anim)(_boardJs.playPremove, state)) return true;
                // if the premove couldn't be played, redraw to clear it up
                state.dom.redraw();
            }
            return false;
        },
        playPredrop (validate) {
            if (state.predroppable.current) {
                const result = _boardJs.playPredrop(state, validate);
                state.dom.redraw();
                return result;
            }
            return false;
        },
        cancelPremove () {
            (0, _animJs.render)(_boardJs.unsetPremove, state);
        },
        cancelPredrop () {
            (0, _animJs.render)(_boardJs.unsetPredrop, state);
        },
        cancelMove () {
            (0, _animJs.render)((state)=>{
                _boardJs.cancelMove(state);
                (0, _dragJs.cancel)(state);
            }, state);
        },
        stop () {
            (0, _animJs.render)((state)=>{
                _boardJs.stop(state);
                (0, _dragJs.cancel)(state);
            }, state);
        },
        explode (keys) {
            (0, _explosionJs.explosion)(state, keys);
        },
        setAutoShapes (shapes) {
            (0, _animJs.render)((state)=>state.drawable.autoShapes = shapes, state);
        },
        setShapes (shapes) {
            (0, _animJs.render)((state)=>state.drawable.shapes = shapes, state);
        },
        getKeyAtDomPos (pos) {
            return _boardJs.getKeyAtDomPos(pos, _boardJs.whitePov(state), state.dom.bounds());
        },
        redrawAll,
        dragNewPiece (piece, event, force) {
            (0, _dragJs.dragNewPiece)(state, piece, event, force);
        },
        destroy () {
            _boardJs.stop(state);
            state.dom.unbind && state.dom.unbind();
            state.dom.destroyed = true;
        }
    };
}

},{"./board.js":"h5ozz","./fen.js":"5HarJ","./config.js":"j0dnW","./anim.js":"7CFPY","./drag.js":"l9b66","./explosion.js":"bXTD2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h5ozz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "callUserFunction", ()=>callUserFunction);
parcelHelpers.export(exports, "toggleOrientation", ()=>toggleOrientation);
parcelHelpers.export(exports, "reset", ()=>reset);
parcelHelpers.export(exports, "setPieces", ()=>setPieces);
parcelHelpers.export(exports, "setCheck", ()=>setCheck);
parcelHelpers.export(exports, "unsetPremove", ()=>unsetPremove);
parcelHelpers.export(exports, "unsetPredrop", ()=>unsetPredrop);
parcelHelpers.export(exports, "baseMove", ()=>baseMove);
parcelHelpers.export(exports, "baseNewPiece", ()=>baseNewPiece);
parcelHelpers.export(exports, "userMove", ()=>userMove);
parcelHelpers.export(exports, "dropNewPiece", ()=>dropNewPiece);
parcelHelpers.export(exports, "selectSquare", ()=>selectSquare);
parcelHelpers.export(exports, "setSelected", ()=>setSelected);
parcelHelpers.export(exports, "unselect", ()=>unselect);
parcelHelpers.export(exports, "canMove", ()=>canMove);
parcelHelpers.export(exports, "isDraggable", ()=>isDraggable);
parcelHelpers.export(exports, "playPremove", ()=>playPremove);
parcelHelpers.export(exports, "playPredrop", ()=>playPredrop);
parcelHelpers.export(exports, "cancelMove", ()=>cancelMove);
parcelHelpers.export(exports, "stop", ()=>stop);
parcelHelpers.export(exports, "getKeyAtDomPos", ()=>getKeyAtDomPos);
parcelHelpers.export(exports, "getSnappedKeyAtDomPos", ()=>getSnappedKeyAtDomPos);
parcelHelpers.export(exports, "whitePov", ()=>whitePov);
var _utilJs = require("./util.js");
var _premoveJs = require("./premove.js");
function callUserFunction(f, ...args) {
    if (f) setTimeout(()=>f(...args), 1);
}
function toggleOrientation(state) {
    state.orientation = (0, _utilJs.opposite)(state.orientation);
    state.animation.current = state.draggable.current = state.selected = undefined;
}
function reset(state) {
    state.lastMove = undefined;
    unselect(state);
    unsetPremove(state);
    unsetPredrop(state);
}
function setPieces(state, pieces) {
    for (const [key, piece] of pieces)if (piece) state.pieces.set(key, piece);
    else state.pieces.delete(key);
}
function setCheck(state, color) {
    state.check = undefined;
    if (color === true) color = state.turnColor;
    if (color) {
        for (const [k, p] of state.pieces)if (p.role === "king" && p.color === color) state.check = k;
    }
}
function setPremove(state, orig, dest, meta) {
    unsetPredrop(state);
    state.premovable.current = [
        orig,
        dest
    ];
    callUserFunction(state.premovable.events.set, orig, dest, meta);
}
function unsetPremove(state) {
    if (state.premovable.current) {
        state.premovable.current = undefined;
        callUserFunction(state.premovable.events.unset);
    }
}
function setPredrop(state, role, key) {
    unsetPremove(state);
    state.predroppable.current = {
        role,
        key
    };
    callUserFunction(state.predroppable.events.set, role, key);
}
function unsetPredrop(state) {
    const pd = state.predroppable;
    if (pd.current) {
        pd.current = undefined;
        callUserFunction(pd.events.unset);
    }
}
function tryAutoCastle(state, orig, dest) {
    if (!state.autoCastle) return false;
    const king = state.pieces.get(orig);
    if (!king || king.role !== "king") return false;
    const origPos = (0, _utilJs.key2pos)(orig);
    const destPos = (0, _utilJs.key2pos)(dest);
    if (origPos[1] !== 0 && origPos[1] !== 7 || origPos[1] !== destPos[1]) return false;
    if (origPos[0] === 4 && !state.pieces.has(dest)) {
        if (destPos[0] === 6) dest = (0, _utilJs.pos2key)([
            7,
            destPos[1]
        ]);
        else if (destPos[0] === 2) dest = (0, _utilJs.pos2key)([
            0,
            destPos[1]
        ]);
    }
    const rook = state.pieces.get(dest);
    if (!rook || rook.color !== king.color || rook.role !== "rook") return false;
    state.pieces.delete(orig);
    state.pieces.delete(dest);
    if (origPos[0] < destPos[0]) {
        state.pieces.set((0, _utilJs.pos2key)([
            6,
            destPos[1]
        ]), king);
        state.pieces.set((0, _utilJs.pos2key)([
            5,
            destPos[1]
        ]), rook);
    } else {
        state.pieces.set((0, _utilJs.pos2key)([
            2,
            destPos[1]
        ]), king);
        state.pieces.set((0, _utilJs.pos2key)([
            3,
            destPos[1]
        ]), rook);
    }
    return true;
}
function baseMove(state, orig, dest) {
    const origPiece = state.pieces.get(orig), destPiece = state.pieces.get(dest);
    if (orig === dest || !origPiece) return false;
    const captured = destPiece && destPiece.color !== origPiece.color ? destPiece : undefined;
    if (dest === state.selected) unselect(state);
    callUserFunction(state.events.move, orig, dest, captured);
    if (!tryAutoCastle(state, orig, dest)) {
        state.pieces.set(dest, origPiece);
        state.pieces.delete(orig);
    }
    state.lastMove = [
        orig,
        dest
    ];
    state.check = undefined;
    callUserFunction(state.events.change);
    return captured || true;
}
function baseNewPiece(state, piece, key, force) {
    if (state.pieces.has(key)) {
        if (force) state.pieces.delete(key);
        else return false;
    }
    callUserFunction(state.events.dropNewPiece, piece, key);
    state.pieces.set(key, piece);
    state.lastMove = [
        key
    ];
    state.check = undefined;
    callUserFunction(state.events.change);
    state.movable.dests = undefined;
    state.turnColor = (0, _utilJs.opposite)(state.turnColor);
    return true;
}
function baseUserMove(state, orig, dest) {
    const result = baseMove(state, orig, dest);
    if (result) {
        state.movable.dests = undefined;
        state.turnColor = (0, _utilJs.opposite)(state.turnColor);
        state.animation.current = undefined;
    }
    return result;
}
function userMove(state, orig, dest) {
    if (canMove(state, orig, dest)) {
        const result = baseUserMove(state, orig, dest);
        if (result) {
            const holdTime = state.hold.stop();
            unselect(state);
            const metadata = {
                premove: false,
                ctrlKey: state.stats.ctrlKey,
                holdTime
            };
            if (result !== true) metadata.captured = result;
            callUserFunction(state.movable.events.after, orig, dest, metadata);
            return true;
        }
    } else if (canPremove(state, orig, dest)) {
        setPremove(state, orig, dest, {
            ctrlKey: state.stats.ctrlKey
        });
        unselect(state);
        return true;
    }
    unselect(state);
    return false;
}
function dropNewPiece(state, orig, dest, force) {
    const piece = state.pieces.get(orig);
    if (piece && (canDrop(state, orig, dest) || force)) {
        state.pieces.delete(orig);
        baseNewPiece(state, piece, dest, force);
        callUserFunction(state.movable.events.afterNewPiece, piece.role, dest, {
            premove: false,
            predrop: false
        });
    } else if (piece && canPredrop(state, orig, dest)) setPredrop(state, piece.role, dest);
    else {
        unsetPremove(state);
        unsetPredrop(state);
    }
    state.pieces.delete(orig);
    unselect(state);
}
function selectSquare(state, key, force) {
    callUserFunction(state.events.select, key);
    if (state.selected) {
        if (state.selected === key && !state.draggable.enabled) {
            unselect(state);
            state.hold.cancel();
            return;
        } else if ((state.selectable.enabled || force) && state.selected !== key) {
            if (userMove(state, state.selected, key)) {
                state.stats.dragged = false;
                return;
            }
        }
    }
    if ((state.selectable.enabled || state.draggable.enabled) && (isMovable(state, key) || isPremovable(state, key))) {
        setSelected(state, key);
        state.hold.start();
    }
}
function setSelected(state, key) {
    state.selected = key;
    if (isPremovable(state, key)) state.premovable.dests = (0, _premoveJs.premove)(state.pieces, key, state.premovable.castle);
    else state.premovable.dests = undefined;
}
function unselect(state) {
    state.selected = undefined;
    state.premovable.dests = undefined;
    state.hold.cancel();
}
function isMovable(state, orig) {
    const piece = state.pieces.get(orig);
    return !!piece && (state.movable.color === "both" || state.movable.color === piece.color && state.turnColor === piece.color);
}
const canMove = (state, orig, dest)=>{
    var _a, _b;
    return orig !== dest && isMovable(state, orig) && (state.movable.free || !!((_b = (_a = state.movable.dests) === null || _a === void 0 ? void 0 : _a.get(orig)) === null || _b === void 0 ? void 0 : _b.includes(dest)));
};
function canDrop(state, orig, dest) {
    const piece = state.pieces.get(orig);
    return !!piece && (orig === dest || !state.pieces.has(dest)) && (state.movable.color === "both" || state.movable.color === piece.color && state.turnColor === piece.color);
}
function isPremovable(state, orig) {
    const piece = state.pieces.get(orig);
    return !!piece && state.premovable.enabled && state.movable.color === piece.color && state.turnColor !== piece.color;
}
const canPremove = (state, orig, dest)=>orig !== dest && isPremovable(state, orig) && (0, _premoveJs.premove)(state.pieces, orig, state.premovable.castle).includes(dest);
function canPredrop(state, orig, dest) {
    const piece = state.pieces.get(orig);
    const destPiece = state.pieces.get(dest);
    return !!piece && (!destPiece || destPiece.color !== state.movable.color) && state.predroppable.enabled && (piece.role !== "pawn" || dest[1] !== "1" && dest[1] !== "8") && state.movable.color === piece.color && state.turnColor !== piece.color;
}
function isDraggable(state, orig) {
    const piece = state.pieces.get(orig);
    return !!piece && state.draggable.enabled && (state.movable.color === "both" || state.movable.color === piece.color && (state.turnColor === piece.color || state.premovable.enabled));
}
function playPremove(state) {
    const move = state.premovable.current;
    if (!move) return false;
    const orig = move[0], dest = move[1];
    let success = false;
    if (canMove(state, orig, dest)) {
        const result = baseUserMove(state, orig, dest);
        if (result) {
            const metadata = {
                premove: true
            };
            if (result !== true) metadata.captured = result;
            callUserFunction(state.movable.events.after, orig, dest, metadata);
            success = true;
        }
    }
    unsetPremove(state);
    return success;
}
function playPredrop(state, validate) {
    const drop = state.predroppable.current;
    let success = false;
    if (!drop) return false;
    if (validate(drop)) {
        const piece = {
            role: drop.role,
            color: state.movable.color
        };
        if (baseNewPiece(state, piece, drop.key)) {
            callUserFunction(state.movable.events.afterNewPiece, drop.role, drop.key, {
                premove: false,
                predrop: true
            });
            success = true;
        }
    }
    unsetPredrop(state);
    return success;
}
function cancelMove(state) {
    unsetPremove(state);
    unsetPredrop(state);
    unselect(state);
}
function stop(state) {
    state.movable.color = state.movable.dests = state.animation.current = undefined;
    cancelMove(state);
}
function getKeyAtDomPos(pos, asWhite, bounds) {
    let file = Math.floor(8 * (pos[0] - bounds.left) / bounds.width);
    if (!asWhite) file = 7 - file;
    let rank = 7 - Math.floor(8 * (pos[1] - bounds.top) / bounds.height);
    if (!asWhite) rank = 7 - rank;
    return file >= 0 && file < 8 && rank >= 0 && rank < 8 ? (0, _utilJs.pos2key)([
        file,
        rank
    ]) : undefined;
}
function getSnappedKeyAtDomPos(orig, pos, asWhite, bounds) {
    const origPos = (0, _utilJs.key2pos)(orig);
    const validSnapPos = (0, _utilJs.allPos).filter((pos2)=>(0, _premoveJs.queen)(origPos[0], origPos[1], pos2[0], pos2[1]) || (0, _premoveJs.knight)(origPos[0], origPos[1], pos2[0], pos2[1]));
    const validSnapCenters = validSnapPos.map((pos2)=>(0, _utilJs.computeSquareCenter)((0, _utilJs.pos2key)(pos2), asWhite, bounds));
    const validSnapDistances = validSnapCenters.map((pos2)=>(0, _utilJs.distanceSq)(pos, pos2));
    const [, closestSnapIndex] = validSnapDistances.reduce((a, b, index)=>a[0] < b ? a : [
            b,
            index
        ], [
        validSnapDistances[0],
        0
    ]);
    return (0, _utilJs.pos2key)(validSnapPos[closestSnapIndex]);
}
const whitePov = (s)=>s.orientation === "white";

},{"./util.js":"SmZpT","./premove.js":"7jh7E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"SmZpT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invRanks", ()=>invRanks);
parcelHelpers.export(exports, "allKeys", ()=>allKeys);
parcelHelpers.export(exports, "pos2key", ()=>pos2key);
parcelHelpers.export(exports, "key2pos", ()=>key2pos);
parcelHelpers.export(exports, "uciToMove", ()=>uciToMove);
parcelHelpers.export(exports, "allPos", ()=>allPos);
parcelHelpers.export(exports, "memo", ()=>memo);
parcelHelpers.export(exports, "timer", ()=>timer);
parcelHelpers.export(exports, "opposite", ()=>opposite);
parcelHelpers.export(exports, "distanceSq", ()=>distanceSq);
parcelHelpers.export(exports, "samePiece", ()=>samePiece);
parcelHelpers.export(exports, "posToTranslate", ()=>posToTranslate);
parcelHelpers.export(exports, "translate", ()=>translate);
parcelHelpers.export(exports, "translateAndScale", ()=>translateAndScale);
parcelHelpers.export(exports, "setVisible", ()=>setVisible);
parcelHelpers.export(exports, "eventPosition", ()=>eventPosition);
parcelHelpers.export(exports, "isRightButton", ()=>isRightButton);
parcelHelpers.export(exports, "createEl", ()=>createEl);
parcelHelpers.export(exports, "computeSquareCenter", ()=>computeSquareCenter);
var _typesJs = require("./types.js");
const invRanks = [
    ..._typesJs.ranks
].reverse();
const allKeys = Array.prototype.concat(..._typesJs.files.map((c)=>_typesJs.ranks.map((r)=>c + r)));
const pos2key = (pos)=>allKeys[8 * pos[0] + pos[1]];
const key2pos = (k)=>[
        k.charCodeAt(0) - 97,
        k.charCodeAt(1) - 49
    ];
const uciToMove = (uci)=>{
    if (!uci) return undefined;
    if (uci[1] === "@") return [
        uci.slice(2, 4)
    ];
    return [
        uci.slice(0, 2),
        uci.slice(2, 4)
    ];
};
const allPos = allKeys.map(key2pos);
function memo(f) {
    let v;
    const ret = ()=>{
        if (v === undefined) v = f();
        return v;
    };
    ret.clear = ()=>{
        v = undefined;
    };
    return ret;
}
const timer = ()=>{
    let startAt;
    return {
        start () {
            startAt = performance.now();
        },
        cancel () {
            startAt = undefined;
        },
        stop () {
            if (!startAt) return 0;
            const time = performance.now() - startAt;
            startAt = undefined;
            return time;
        }
    };
};
const opposite = (c)=>c === "white" ? "black" : "white";
const distanceSq = (pos1, pos2)=>{
    const dx = pos1[0] - pos2[0], dy = pos1[1] - pos2[1];
    return dx * dx + dy * dy;
};
const samePiece = (p1, p2)=>p1.role === p2.role && p1.color === p2.color;
const posToTranslate = (bounds)=>(pos, asWhite)=>[
            (asWhite ? pos[0] : 7 - pos[0]) * bounds.width / 8,
            (asWhite ? 7 - pos[1] : pos[1]) * bounds.height / 8
        ];
const translate = (el, pos)=>{
    el.style.transform = `translate(${pos[0]}px,${pos[1]}px)`;
};
const translateAndScale = (el, pos, scale = 1)=>{
    el.style.transform = `translate(${pos[0]}px,${pos[1]}px) scale(${scale})`;
};
const setVisible = (el, v)=>{
    el.style.visibility = v ? "visible" : "hidden";
};
const eventPosition = (e)=>{
    var _a;
    if (e.clientX || e.clientX === 0) return [
        e.clientX,
        e.clientY
    ];
    if ((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a[0]) return [
        e.targetTouches[0].clientX,
        e.targetTouches[0].clientY
    ];
    return; // touchend has no position!
};
const isRightButton = (e)=>e.buttons === 2 || e.button === 2;
const createEl = (tagName, className)=>{
    const el = document.createElement(tagName);
    if (className) el.className = className;
    return el;
};
function computeSquareCenter(key, asWhite, bounds) {
    const pos = key2pos(key);
    if (!asWhite) {
        pos[0] = 7 - pos[0];
        pos[1] = 7 - pos[1];
    }
    return [
        bounds.left + bounds.width * pos[0] / 8 + bounds.width / 16,
        bounds.top + bounds.height * (7 - pos[1]) / 8 + bounds.height / 16
    ];
}

},{"./types.js":"cnWU2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnWU2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "colors", ()=>colors);
parcelHelpers.export(exports, "files", ()=>files);
parcelHelpers.export(exports, "ranks", ()=>ranks);
const colors = [
    "white",
    "black"
];
const files = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h"
];
const ranks = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"7jh7E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "knight", ()=>knight);
parcelHelpers.export(exports, "queen", ()=>queen);
parcelHelpers.export(exports, "premove", ()=>premove);
var _utilJs = require("./util.js");
const diff = (a, b)=>Math.abs(a - b);
const pawn = (color)=>(x1, y1, x2, y2)=>diff(x1, x2) < 2 && (color === "white" ? y2 === y1 + 1 || y1 <= 1 && y2 === y1 + 2 && x1 === x2 : y2 === y1 - 1 || y1 >= 6 && y2 === y1 - 2 && x1 === x2);
const knight = (x1, y1, x2, y2)=>{
    const xd = diff(x1, x2);
    const yd = diff(y1, y2);
    return xd === 1 && yd === 2 || xd === 2 && yd === 1;
};
const bishop = (x1, y1, x2, y2)=>{
    return diff(x1, x2) === diff(y1, y2);
};
const rook = (x1, y1, x2, y2)=>{
    return x1 === x2 || y1 === y2;
};
const queen = (x1, y1, x2, y2)=>{
    return bishop(x1, y1, x2, y2) || rook(x1, y1, x2, y2);
};
const king = (color, rookFiles, canCastle)=>(x1, y1, x2, y2)=>diff(x1, x2) < 2 && diff(y1, y2) < 2 || canCastle && y1 === y2 && y1 === (color === "white" ? 0 : 7) && (x1 === 4 && (x2 === 2 && rookFiles.includes(0) || x2 === 6 && rookFiles.includes(7)) || rookFiles.includes(x2));
function rookFilesOf(pieces, color) {
    const backrank = color === "white" ? "1" : "8";
    const files = [];
    for (const [key, piece] of pieces)if (key[1] === backrank && piece.color === color && piece.role === "rook") files.push(_utilJs.key2pos(key)[0]);
    return files;
}
function premove(pieces, key, canCastle) {
    const piece = pieces.get(key);
    if (!piece) return [];
    const pos = _utilJs.key2pos(key), r = piece.role, mobility = r === "pawn" ? pawn(piece.color) : r === "knight" ? knight : r === "bishop" ? bishop : r === "rook" ? rook : r === "queen" ? queen : king(piece.color, rookFilesOf(pieces, piece.color), canCastle);
    return _utilJs.allPos.filter((pos2)=>(pos[0] !== pos2[0] || pos[1] !== pos2[1]) && mobility(pos[0], pos[1], pos2[0], pos2[1])).map(_utilJs.pos2key);
}

},{"./util.js":"SmZpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5HarJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initial", ()=>initial);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "write", ()=>write);
var _utilJs = require("./util.js");
var _typesJs = require("./types.js");
const initial = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
const roles = {
    p: "pawn",
    r: "rook",
    n: "knight",
    b: "bishop",
    q: "queen",
    k: "king"
};
const letters = {
    pawn: "p",
    rook: "r",
    knight: "n",
    bishop: "b",
    queen: "q",
    king: "k"
};
function read(fen) {
    if (fen === "start") fen = initial;
    const pieces = new Map();
    let row = 7, col = 0;
    for (const c of fen)switch(c){
        case " ":
        case "[":
            return pieces;
        case "/":
            --row;
            if (row < 0) return pieces;
            col = 0;
            break;
        case "~":
            {
                const piece = pieces.get((0, _utilJs.pos2key)([
                    col - 1,
                    row
                ]));
                if (piece) piece.promoted = true;
                break;
            }
        default:
            {
                const nb = c.charCodeAt(0);
                if (nb < 57) col += nb - 48;
                else {
                    const role = c.toLowerCase();
                    pieces.set((0, _utilJs.pos2key)([
                        col,
                        row
                    ]), {
                        role: roles[role],
                        color: c === role ? "black" : "white"
                    });
                    ++col;
                }
            }
    }
    return pieces;
}
function write(pieces) {
    return (0, _utilJs.invRanks).map((y)=>_typesJs.files.map((x)=>{
            const piece = pieces.get(x + y);
            if (piece) {
                let p = letters[piece.role];
                if (piece.color === "white") p = p.toUpperCase();
                if (piece.promoted) p += "~";
                return p;
            } else return "1";
        }).join("")).join("/").replace(/1{2,}/g, (s)=>s.length.toString());
}

},{"./util.js":"SmZpT","./types.js":"cnWU2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j0dnW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyAnimation", ()=>applyAnimation);
parcelHelpers.export(exports, "configure", ()=>configure);
var _boardJs = require("./board.js");
var _fenJs = require("./fen.js");
function applyAnimation(state, config) {
    if (config.animation) {
        deepMerge(state.animation, config.animation);
        // no need for such short animations
        if ((state.animation.duration || 0) < 70) state.animation.enabled = false;
    }
}
function configure(state, config) {
    var _a, _b, _c;
    // don't merge destinations and autoShapes. Just override.
    if ((_a = config.movable) === null || _a === void 0 ? void 0 : _a.dests) state.movable.dests = undefined;
    if ((_b = config.drawable) === null || _b === void 0 ? void 0 : _b.autoShapes) state.drawable.autoShapes = [];
    deepMerge(state, config);
    // if a fen was provided, replace the pieces
    if (config.fen) {
        state.pieces = (0, _fenJs.read)(config.fen);
        state.drawable.shapes = ((_c = config.drawable) === null || _c === void 0 ? void 0 : _c.shapes) || [];
    }
    // apply config values that could be undefined yet meaningful
    if ("check" in config) (0, _boardJs.setCheck)(state, config.check || false);
    if ("lastMove" in config && !config.lastMove) state.lastMove = undefined;
    else if (config.lastMove) state.lastMove = config.lastMove;
    // fix move/premove dests
    if (state.selected) (0, _boardJs.setSelected)(state, state.selected);
    applyAnimation(state, config);
    if (!state.movable.rookCastle && state.movable.dests) {
        const rank = state.movable.color === "white" ? "1" : "8", kingStartPos = "e" + rank, dests = state.movable.dests.get(kingStartPos), king = state.pieces.get(kingStartPos);
        if (!dests || !king || king.role !== "king") return;
        state.movable.dests.set(kingStartPos, dests.filter((d)=>!(d === "a" + rank && dests.includes("c" + rank)) && !(d === "h" + rank && dests.includes("g" + rank))));
    }
}
function deepMerge(base, extend) {
    for(const key in extend)if (Object.prototype.hasOwnProperty.call(extend, key)) {
        if (Object.prototype.hasOwnProperty.call(base, key) && isPlainObject(base[key]) && isPlainObject(extend[key])) deepMerge(base[key], extend[key]);
        else base[key] = extend[key];
    }
}
function isPlainObject(o) {
    if (typeof o !== "object" || o === null) return false;
    const proto = Object.getPrototypeOf(o);
    return proto === Object.prototype || proto === null;
}

},{"./board.js":"h5ozz","./fen.js":"5HarJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CFPY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "anim", ()=>anim);
parcelHelpers.export(exports, "render", ()=>render);
var _utilJs = require("./util.js");
const anim = (mutation, state)=>state.animation.enabled ? animate(mutation, state) : render(mutation, state);
function render(mutation, state) {
    const result = mutation(state);
    state.dom.redraw();
    return result;
}
const makePiece = (key, piece)=>({
        key: key,
        pos: _utilJs.key2pos(key),
        piece: piece
    });
const closer = (piece, pieces)=>pieces.sort((p1, p2)=>_utilJs.distanceSq(piece.pos, p1.pos) - _utilJs.distanceSq(piece.pos, p2.pos))[0];
function computePlan(prevPieces, current) {
    const anims = new Map(), animedOrigs = [], fadings = new Map(), missings = [], news = [], prePieces = new Map();
    let curP, preP, vector;
    for (const [k, p] of prevPieces)prePieces.set(k, makePiece(k, p));
    for (const key of _utilJs.allKeys){
        curP = current.pieces.get(key);
        preP = prePieces.get(key);
        if (curP) {
            if (preP) {
                if (!_utilJs.samePiece(curP, preP.piece)) {
                    missings.push(preP);
                    news.push(makePiece(key, curP));
                }
            } else news.push(makePiece(key, curP));
        } else if (preP) missings.push(preP);
    }
    for (const newP of news){
        preP = closer(newP, missings.filter((p)=>_utilJs.samePiece(newP.piece, p.piece)));
        if (preP) {
            vector = [
                preP.pos[0] - newP.pos[0],
                preP.pos[1] - newP.pos[1]
            ];
            anims.set(newP.key, vector.concat(vector));
            animedOrigs.push(preP.key);
        }
    }
    for (const p of missings)if (!animedOrigs.includes(p.key)) fadings.set(p.key, p.piece);
    return {
        anims: anims,
        fadings: fadings
    };
}
function step(state, now) {
    const cur = state.animation.current;
    if (cur === undefined) {
        // animation was canceled :(
        if (!state.dom.destroyed) state.dom.redrawNow();
        return;
    }
    const rest = 1 - (now - cur.start) * cur.frequency;
    if (rest <= 0) {
        state.animation.current = undefined;
        state.dom.redrawNow();
    } else {
        const ease = easing(rest);
        for (const cfg of cur.plan.anims.values()){
            cfg[2] = cfg[0] * ease;
            cfg[3] = cfg[1] * ease;
        }
        state.dom.redrawNow(true); // optimisation: don't render SVG changes during animations
        requestAnimationFrame((now = performance.now())=>step(state, now));
    }
}
function animate(mutation, state) {
    // clone state before mutating it
    const prevPieces = new Map(state.pieces);
    const result = mutation(state);
    const plan = computePlan(prevPieces, state);
    if (plan.anims.size || plan.fadings.size) {
        const alreadyRunning = state.animation.current && state.animation.current.start;
        state.animation.current = {
            start: performance.now(),
            frequency: 1 / state.animation.duration,
            plan: plan
        };
        if (!alreadyRunning) step(state, performance.now());
    } else // don't animate, just render right away
    state.dom.redraw();
    return result;
}
// https://gist.github.com/gre/1650294
const easing = (t)=>t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

},{"./util.js":"SmZpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l9b66":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "dragNewPiece", ()=>dragNewPiece);
parcelHelpers.export(exports, "move", ()=>move);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "cancel", ()=>cancel);
var _boardJs = require("./board.js");
var _utilJs = require("./util.js");
var _drawJs = require("./draw.js");
var _animJs = require("./anim.js");
function start(s, e) {
    if (!e.isTrusted || e.button !== undefined && e.button !== 0) return; // only touch or left click
    if (e.touches && e.touches.length > 1) return; // support one finger touch only
    const bounds = s.dom.bounds(), position = _utilJs.eventPosition(e), orig = _boardJs.getKeyAtDomPos(position, _boardJs.whitePov(s), bounds);
    if (!orig) return;
    const piece = s.pieces.get(orig);
    const previouslySelected = s.selected;
    if (!previouslySelected && s.drawable.enabled && (s.drawable.eraseOnClick || !piece || piece.color !== s.turnColor)) (0, _drawJs.clear)(s);
    // Prevent touch scroll and create no corresponding mouse event, if there
    // is an intent to interact with the board.
    if (e.cancelable !== false && (!e.touches || s.blockTouchScroll || piece || previouslySelected || pieceCloseTo(s, position))) e.preventDefault();
    const hadPremove = !!s.premovable.current;
    const hadPredrop = !!s.predroppable.current;
    s.stats.ctrlKey = e.ctrlKey;
    if (s.selected && _boardJs.canMove(s, s.selected, orig)) (0, _animJs.anim)((state)=>_boardJs.selectSquare(state, orig), s);
    else _boardJs.selectSquare(s, orig);
    const stillSelected = s.selected === orig;
    const element = pieceElementByKey(s, orig);
    if (piece && element && stillSelected && _boardJs.isDraggable(s, orig)) {
        s.draggable.current = {
            orig,
            piece,
            origPos: position,
            pos: position,
            started: s.draggable.autoDistance && s.stats.dragged,
            element,
            previouslySelected,
            originTarget: e.target,
            keyHasChanged: false
        };
        element.cgDragging = true;
        element.classList.add("dragging");
        // place ghost
        const ghost = s.dom.elements.ghost;
        if (ghost) {
            ghost.className = `ghost ${piece.color} ${piece.role}`;
            _utilJs.translate(ghost, _utilJs.posToTranslate(bounds)(_utilJs.key2pos(orig), _boardJs.whitePov(s)));
            _utilJs.setVisible(ghost, true);
        }
        processDrag(s);
    } else {
        if (hadPremove) _boardJs.unsetPremove(s);
        if (hadPredrop) _boardJs.unsetPredrop(s);
    }
    s.dom.redraw();
}
function pieceCloseTo(s, pos) {
    const asWhite = _boardJs.whitePov(s), bounds = s.dom.bounds(), radiusSq = Math.pow(bounds.width / 8, 2);
    for (const key of s.pieces.keys()){
        const center = _utilJs.computeSquareCenter(key, asWhite, bounds);
        if (_utilJs.distanceSq(center, pos) <= radiusSq) return true;
    }
    return false;
}
function dragNewPiece(s, piece, e, force) {
    const key = "a0";
    s.pieces.set(key, piece);
    s.dom.redraw();
    const position = _utilJs.eventPosition(e);
    s.draggable.current = {
        orig: key,
        piece,
        origPos: position,
        pos: position,
        started: true,
        element: ()=>pieceElementByKey(s, key),
        originTarget: e.target,
        newPiece: true,
        force: !!force,
        keyHasChanged: false
    };
    processDrag(s);
}
function processDrag(s) {
    requestAnimationFrame(()=>{
        var _a;
        const cur = s.draggable.current;
        if (!cur) return;
        // cancel animations while dragging
        if ((_a = s.animation.current) === null || _a === void 0 ? void 0 : _a.plan.anims.has(cur.orig)) s.animation.current = undefined;
        // if moving piece is gone, cancel
        const origPiece = s.pieces.get(cur.orig);
        if (!origPiece || !_utilJs.samePiece(origPiece, cur.piece)) cancel(s);
        else {
            if (!cur.started && _utilJs.distanceSq(cur.pos, cur.origPos) >= Math.pow(s.draggable.distance, 2)) cur.started = true;
            if (cur.started) {
                // support lazy elements
                if (typeof cur.element === "function") {
                    const found = cur.element();
                    if (!found) return;
                    found.cgDragging = true;
                    found.classList.add("dragging");
                    cur.element = found;
                }
                const bounds = s.dom.bounds();
                _utilJs.translate(cur.element, [
                    cur.pos[0] - bounds.left - bounds.width / 16,
                    cur.pos[1] - bounds.top - bounds.height / 16
                ]);
                cur.keyHasChanged || (cur.keyHasChanged = cur.orig !== _boardJs.getKeyAtDomPos(cur.pos, _boardJs.whitePov(s), bounds));
            }
        }
        processDrag(s);
    });
}
function move(s, e) {
    // support one finger touch only
    if (s.draggable.current && (!e.touches || e.touches.length < 2)) s.draggable.current.pos = _utilJs.eventPosition(e);
}
function end(s, e) {
    const cur = s.draggable.current;
    if (!cur) return;
    // create no corresponding mouse event
    if (e.type === "touchend" && e.cancelable !== false) e.preventDefault();
    // comparing with the origin target is an easy way to test that the end event
    // has the same touch origin
    if (e.type === "touchend" && cur.originTarget !== e.target && !cur.newPiece) {
        s.draggable.current = undefined;
        return;
    }
    _boardJs.unsetPremove(s);
    _boardJs.unsetPredrop(s);
    // touchend has no position; so use the last touchmove position instead
    const eventPos = _utilJs.eventPosition(e) || cur.pos;
    const dest = _boardJs.getKeyAtDomPos(eventPos, _boardJs.whitePov(s), s.dom.bounds());
    if (dest && cur.started && cur.orig !== dest) {
        if (cur.newPiece) _boardJs.dropNewPiece(s, cur.orig, dest, cur.force);
        else {
            s.stats.ctrlKey = e.ctrlKey;
            if (_boardJs.userMove(s, cur.orig, dest)) s.stats.dragged = true;
        }
    } else if (cur.newPiece) s.pieces.delete(cur.orig);
    else if (s.draggable.deleteOnDropOff && !dest) {
        s.pieces.delete(cur.orig);
        _boardJs.callUserFunction(s.events.change);
    }
    if ((cur.orig === cur.previouslySelected || cur.keyHasChanged) && (cur.orig === dest || !dest)) _boardJs.unselect(s);
    else if (!s.selectable.enabled) _boardJs.unselect(s);
    removeDragElements(s);
    s.draggable.current = undefined;
    s.dom.redraw();
}
function cancel(s) {
    const cur = s.draggable.current;
    if (cur) {
        if (cur.newPiece) s.pieces.delete(cur.orig);
        s.draggable.current = undefined;
        _boardJs.unselect(s);
        removeDragElements(s);
        s.dom.redraw();
    }
}
function removeDragElements(s) {
    const e = s.dom.elements;
    if (e.ghost) _utilJs.setVisible(e.ghost, false);
}
function pieceElementByKey(s, key) {
    let el = s.dom.elements.board.firstChild;
    while(el){
        if (el.cgKey === key && el.tagName === "PIECE") return el;
        el = el.nextSibling;
    }
    return;
}

},{"./board.js":"h5ozz","./util.js":"SmZpT","./draw.js":"2zs58","./anim.js":"7CFPY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zs58":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "processDraw", ()=>processDraw);
parcelHelpers.export(exports, "move", ()=>move);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "cancel", ()=>cancel);
parcelHelpers.export(exports, "clear", ()=>clear);
var _boardJs = require("./board.js");
var _utilJs = require("./util.js");
const brushes = [
    "green",
    "red",
    "blue",
    "yellow"
];
function start(state, e) {
    // support one finger touch only
    if (e.touches && e.touches.length > 1) return;
    e.stopPropagation();
    e.preventDefault();
    e.ctrlKey ? (0, _boardJs.unselect)(state) : (0, _boardJs.cancelMove)(state);
    const pos = (0, _utilJs.eventPosition)(e), orig = (0, _boardJs.getKeyAtDomPos)(pos, (0, _boardJs.whitePov)(state), state.dom.bounds());
    if (!orig) return;
    state.drawable.current = {
        orig,
        pos,
        brush: eventBrush(e),
        snapToValidMove: state.drawable.defaultSnapToValidMove
    };
    processDraw(state);
}
function processDraw(state) {
    requestAnimationFrame(()=>{
        const cur = state.drawable.current;
        if (cur) {
            const keyAtDomPos = (0, _boardJs.getKeyAtDomPos)(cur.pos, (0, _boardJs.whitePov)(state), state.dom.bounds());
            if (!keyAtDomPos) cur.snapToValidMove = false;
            const mouseSq = cur.snapToValidMove ? (0, _boardJs.getSnappedKeyAtDomPos)(cur.orig, cur.pos, (0, _boardJs.whitePov)(state), state.dom.bounds()) : keyAtDomPos;
            if (mouseSq !== cur.mouseSq) {
                cur.mouseSq = mouseSq;
                cur.dest = mouseSq !== cur.orig ? mouseSq : undefined;
                state.dom.redrawNow();
            }
            processDraw(state);
        }
    });
}
function move(state, e) {
    if (state.drawable.current) state.drawable.current.pos = (0, _utilJs.eventPosition)(e);
}
function end(state) {
    const cur = state.drawable.current;
    if (cur) {
        if (cur.mouseSq) addShape(state.drawable, cur);
        cancel(state);
    }
}
function cancel(state) {
    if (state.drawable.current) {
        state.drawable.current = undefined;
        state.dom.redraw();
    }
}
function clear(state) {
    if (state.drawable.shapes.length) {
        state.drawable.shapes = [];
        state.dom.redraw();
        onChange(state.drawable);
    }
}
function eventBrush(e) {
    var _a;
    const modA = (e.shiftKey || e.ctrlKey) && (0, _utilJs.isRightButton)(e);
    const modB = e.altKey || e.metaKey || ((_a = e.getModifierState) === null || _a === void 0 ? void 0 : _a.call(e, "AltGraph"));
    return brushes[(modA ? 1 : 0) + (modB ? 2 : 0)];
}
function addShape(drawable, cur) {
    const sameShape = (s)=>s.orig === cur.orig && s.dest === cur.dest;
    const similar = drawable.shapes.find(sameShape);
    if (similar) drawable.shapes = drawable.shapes.filter((s)=>!sameShape(s));
    if (!similar || similar.brush !== cur.brush) drawable.shapes.push({
        orig: cur.orig,
        dest: cur.dest,
        brush: cur.brush
    });
    onChange(drawable);
}
function onChange(drawable) {
    if (drawable.onChange) drawable.onChange(drawable.shapes);
}

},{"./board.js":"h5ozz","./util.js":"SmZpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bXTD2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "explosion", ()=>explosion);
function explosion(state, keys) {
    state.exploding = {
        stage: 1,
        keys
    };
    state.dom.redraw();
    setTimeout(()=>{
        setStage(state, 2);
        setTimeout(()=>setStage(state, undefined), 120);
    }, 120);
}
function setStage(state, stage) {
    if (state.exploding) {
        if (stage) state.exploding.stage = stage;
        else state.exploding = undefined;
        state.dom.redraw();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4j4A3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaults", ()=>defaults);
var _fenJs = require("./fen.js");
var _utilJs = require("./util.js");
function defaults() {
    return {
        pieces: _fenJs.read(_fenJs.initial),
        orientation: "white",
        turnColor: "white",
        coordinates: true,
        ranksPosition: "right",
        autoCastle: true,
        viewOnly: false,
        disableContextMenu: false,
        addPieceZIndex: false,
        blockTouchScroll: false,
        pieceKey: false,
        highlight: {
            lastMove: true,
            check: true
        },
        animation: {
            enabled: true,
            duration: 200
        },
        movable: {
            free: true,
            color: "both",
            showDests: true,
            events: {},
            rookCastle: true
        },
        premovable: {
            enabled: true,
            showDests: true,
            castle: true,
            events: {}
        },
        predroppable: {
            enabled: false,
            events: {}
        },
        draggable: {
            enabled: true,
            distance: 3,
            autoDistance: true,
            showGhost: true,
            deleteOnDropOff: false
        },
        dropmode: {
            active: false
        },
        selectable: {
            enabled: true
        },
        stats: {
            // on touchscreen, default to "tap-tap" moves
            // instead of drag
            dragged: !("ontouchstart" in window)
        },
        events: {},
        drawable: {
            enabled: true,
            visible: true,
            defaultSnapToValidMove: true,
            eraseOnClick: true,
            shapes: [],
            autoShapes: [],
            brushes: {
                green: {
                    key: "g",
                    color: "#15781B",
                    opacity: 1,
                    lineWidth: 10
                },
                red: {
                    key: "r",
                    color: "#882020",
                    opacity: 1,
                    lineWidth: 10
                },
                blue: {
                    key: "b",
                    color: "#003088",
                    opacity: 1,
                    lineWidth: 10
                },
                yellow: {
                    key: "y",
                    color: "#e68f00",
                    opacity: 1,
                    lineWidth: 10
                },
                paleBlue: {
                    key: "pb",
                    color: "#003088",
                    opacity: 0.4,
                    lineWidth: 15
                },
                paleGreen: {
                    key: "pg",
                    color: "#15781B",
                    opacity: 0.4,
                    lineWidth: 15
                },
                paleRed: {
                    key: "pr",
                    color: "#882020",
                    opacity: 0.4,
                    lineWidth: 15
                },
                paleGrey: {
                    key: "pgr",
                    color: "#4a4a4a",
                    opacity: 0.35,
                    lineWidth: 15
                }
            },
            prevSvgHash: ""
        },
        hold: (0, _utilJs.timer)()
    };
}

},{"./fen.js":"5HarJ","./util.js":"SmZpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"df69G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderWrap", ()=>renderWrap);
var _utilJs = require("./util.js");
var _typesJs = require("./types.js");
var _svgJs = require("./svg.js");
function renderWrap(element, s) {
    // .cg-wrap (element passed to Chessground)
    //   cg-container
    //     cg-board
    //     svg.cg-shapes
    //       defs
    //       g
    //     svg.cg-custom-svgs
    //       g
    //     cg-auto-pieces
    //     coords.ranks
    //     coords.files
    //     piece.ghost
    element.innerHTML = "";
    // ensure the cg-wrap class is set
    // so bounds calculation can use the CSS width/height values
    // add that class yourself to the element before calling chessground
    // for a slight performance improvement! (avoids recomputing style)
    element.classList.add("cg-wrap");
    for (const c of (0, _typesJs.colors))element.classList.toggle("orientation-" + c, s.orientation === c);
    element.classList.toggle("manipulable", !s.viewOnly);
    const container = (0, _utilJs.createEl)("cg-container");
    element.appendChild(container);
    const board = (0, _utilJs.createEl)("cg-board");
    container.appendChild(board);
    let svg;
    let customSvg;
    let autoPieces;
    if (s.drawable.visible) {
        svg = (0, _svgJs.setAttributes)((0, _svgJs.createElement)("svg"), {
            class: "cg-shapes",
            viewBox: "-4 -4 8 8",
            preserveAspectRatio: "xMidYMid slice"
        });
        svg.appendChild((0, _svgJs.createElement)("defs"));
        svg.appendChild((0, _svgJs.createElement)("g"));
        customSvg = (0, _svgJs.setAttributes)((0, _svgJs.createElement)("svg"), {
            class: "cg-custom-svgs",
            viewBox: "-3.5 -3.5 8 8",
            preserveAspectRatio: "xMidYMid slice"
        });
        customSvg.appendChild((0, _svgJs.createElement)("g"));
        autoPieces = (0, _utilJs.createEl)("cg-auto-pieces");
        container.appendChild(svg);
        container.appendChild(customSvg);
        container.appendChild(autoPieces);
    }
    if (s.coordinates) {
        const orientClass = s.orientation === "black" ? " black" : "";
        const ranksPositionClass = s.ranksPosition === "left" ? " left" : "";
        container.appendChild(renderCoords((0, _typesJs.ranks), "ranks" + orientClass + ranksPositionClass));
        container.appendChild(renderCoords((0, _typesJs.files), "files" + orientClass));
    }
    let ghost;
    if (s.draggable.enabled && s.draggable.showGhost) {
        ghost = (0, _utilJs.createEl)("piece", "ghost");
        (0, _utilJs.setVisible)(ghost, false);
        container.appendChild(ghost);
    }
    return {
        board,
        container,
        wrap: element,
        ghost,
        svg,
        customSvg,
        autoPieces
    };
}
function renderCoords(elems, className) {
    const el = (0, _utilJs.createEl)("coords", className);
    let f;
    for (const elem of elems){
        f = (0, _utilJs.createEl)("coord");
        f.textContent = elem;
        el.appendChild(f);
    }
    return el;
}

},{"./util.js":"SmZpT","./types.js":"cnWU2","./svg.js":"53ViK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"53ViK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "renderSvg", ()=>renderSvg);
parcelHelpers.export(exports, "setAttributes", ()=>setAttributes);
var _utilJs = require("./util.js");
var _syncJs = require("./sync.js");
function createElement(tagName) {
    return document.createElementNS("http://www.w3.org/2000/svg", tagName);
}
function renderSvg(state, svg, customSvg) {
    const d = state.drawable, curD = d.current, cur = curD && curD.mouseSq ? curD : undefined, arrowDests = new Map(), bounds = state.dom.bounds(), nonPieceAutoShapes = d.autoShapes.filter((autoShape)=>!autoShape.piece);
    for (const s of d.shapes.concat(nonPieceAutoShapes).concat(cur ? [
        cur
    ] : []))if (s.dest) arrowDests.set(s.dest, (arrowDests.get(s.dest) || 0) + 1);
    const shapes = d.shapes.concat(nonPieceAutoShapes).map((s)=>{
        return {
            shape: s,
            current: false,
            hash: shapeHash(s, arrowDests, false, bounds)
        };
    });
    if (cur) shapes.push({
        shape: cur,
        current: true,
        hash: shapeHash(cur, arrowDests, true, bounds)
    });
    const fullHash = shapes.map((sc)=>sc.hash).join(";");
    if (fullHash === state.drawable.prevSvgHash) return;
    state.drawable.prevSvgHash = fullHash;
    /*
      -- DOM hierarchy --
      <svg class="cg-shapes">      (<= svg)
        <defs>
          ...(for brushes)...
        </defs>
        <g>
          ...(for arrows and circles)...
        </g>
      </svg>
      <svg class="cg-custom-svgs"> (<= customSvg)
        <g>
          ...(for custom svgs)...
        </g>
      </svg>
    */ const defsEl = svg.querySelector("defs");
    const shapesEl = svg.querySelector("g");
    const customSvgsEl = customSvg.querySelector("g");
    syncDefs(d, shapes, defsEl);
    (0, _syncJs.syncShapes)(shapes.filter((s)=>!s.shape.customSvg), shapesEl, (shape)=>renderShape(state, shape, d.brushes, arrowDests, bounds));
    (0, _syncJs.syncShapes)(shapes.filter((s)=>s.shape.customSvg), customSvgsEl, (shape)=>renderShape(state, shape, d.brushes, arrowDests, bounds));
}
// append only. Don't try to update/remove.
function syncDefs(d, shapes, defsEl) {
    const brushes = new Map();
    let brush;
    for (const s of shapes)if (s.shape.dest) {
        brush = d.brushes[s.shape.brush];
        if (s.shape.modifiers) brush = makeCustomBrush(brush, s.shape.modifiers);
        brushes.set(brush.key, brush);
    }
    const keysInDom = new Set();
    let el = defsEl.firstChild;
    while(el){
        keysInDom.add(el.getAttribute("cgKey"));
        el = el.nextSibling;
    }
    for (const [key, brush] of brushes.entries())if (!keysInDom.has(key)) defsEl.appendChild(renderMarker(brush));
}
function shapeHash({ orig , dest , brush , piece , modifiers , customSvg  }, arrowDests, current, bounds) {
    return [
        bounds.width,
        bounds.height,
        current,
        orig,
        dest,
        brush,
        dest && (arrowDests.get(dest) || 0) > 1,
        piece && pieceHash(piece),
        modifiers && modifiersHash(modifiers),
        customSvg && customSvgHash(customSvg)
    ].filter((x)=>x).join(",");
}
function pieceHash(piece) {
    return [
        piece.color,
        piece.role,
        piece.scale
    ].filter((x)=>x).join(",");
}
function modifiersHash(m) {
    return "" + (m.lineWidth || "");
}
function customSvgHash(s) {
    // Rolling hash with base 31 (cf. https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript)
    let h = 0;
    for(let i = 0; i < s.length; i++)h = (h << 5) - h + s.charCodeAt(i) >>> 0;
    return "custom-" + h.toString();
}
function renderShape(state, { shape , current , hash  }, brushes, arrowDests, bounds) {
    let el;
    const orig = orient((0, _utilJs.key2pos)(shape.orig), state.orientation);
    if (shape.customSvg) el = renderCustomSvg(shape.customSvg, orig, bounds);
    else if (shape.dest) {
        let brush = brushes[shape.brush];
        if (shape.modifiers) brush = makeCustomBrush(brush, shape.modifiers);
        el = renderArrow(brush, orig, orient((0, _utilJs.key2pos)(shape.dest), state.orientation), current, (arrowDests.get(shape.dest) || 0) > 1, bounds);
    } else el = renderCircle(brushes[shape.brush], orig, current, bounds);
    el.setAttribute("cgHash", hash);
    return el;
}
function renderCustomSvg(customSvg, pos, bounds) {
    const [x, y] = pos2user(pos, bounds);
    // Translate to top-left of `orig` square
    const g = setAttributes(createElement("g"), {
        transform: `translate(${x},${y})`
    });
    // Give 100x100 coordinate system to the user for `orig` square
    const svg = setAttributes(createElement("svg"), {
        width: 1,
        height: 1,
        viewBox: "0 0 100 100"
    });
    g.appendChild(svg);
    svg.innerHTML = customSvg;
    return g;
}
function renderCircle(brush, pos, current, bounds) {
    const o = pos2user(pos, bounds), widths = circleWidth(), radius = (bounds.width + bounds.height) / (4 * Math.max(bounds.width, bounds.height));
    return setAttributes(createElement("circle"), {
        stroke: brush.color,
        "stroke-width": widths[current ? 0 : 1],
        fill: "none",
        opacity: opacity(brush, current),
        cx: o[0],
        cy: o[1],
        r: radius - widths[1] / 2
    });
}
function renderArrow(brush, orig, dest, current, shorten, bounds) {
    const m = arrowMargin(shorten && !current), a = pos2user(orig, bounds), b = pos2user(dest, bounds), dx = b[0] - a[0], dy = b[1] - a[1], angle = Math.atan2(dy, dx), xo = Math.cos(angle) * m, yo = Math.sin(angle) * m;
    return setAttributes(createElement("line"), {
        stroke: brush.color,
        "stroke-width": lineWidth(brush, current),
        "stroke-linecap": "round",
        "marker-end": "url(#arrowhead-" + brush.key + ")",
        opacity: opacity(brush, current),
        x1: a[0],
        y1: a[1],
        x2: b[0] - xo,
        y2: b[1] - yo
    });
}
function renderMarker(brush) {
    const marker = setAttributes(createElement("marker"), {
        id: "arrowhead-" + brush.key,
        orient: "auto",
        markerWidth: 4,
        markerHeight: 8,
        refX: 2.05,
        refY: 2.01
    });
    marker.appendChild(setAttributes(createElement("path"), {
        d: "M0,0 V4 L3,2 Z",
        fill: brush.color
    }));
    marker.setAttribute("cgKey", brush.key);
    return marker;
}
function setAttributes(el, attrs) {
    for(const key in attrs)if (Object.prototype.hasOwnProperty.call(attrs, key)) el.setAttribute(key, attrs[key]);
    return el;
}
function orient(pos, color) {
    return color === "white" ? pos : [
        7 - pos[0],
        7 - pos[1]
    ];
}
function makeCustomBrush(base, modifiers) {
    return {
        color: base.color,
        opacity: Math.round(base.opacity * 10) / 10,
        lineWidth: Math.round(modifiers.lineWidth || base.lineWidth),
        key: [
            base.key,
            modifiers.lineWidth
        ].filter((x)=>x).join("")
    };
}
function circleWidth() {
    return [
        3 / 64,
        4 / 64
    ];
}
function lineWidth(brush, current) {
    return (brush.lineWidth || 10) * (current ? 0.85 : 1) / 64;
}
function opacity(brush, current) {
    return (brush.opacity || 1) * (current ? 0.9 : 1);
}
function arrowMargin(shorten) {
    return (shorten ? 20 : 10) / 64;
}
function pos2user(pos, bounds) {
    const xScale = Math.min(1, bounds.width / bounds.height);
    const yScale = Math.min(1, bounds.height / bounds.width);
    return [
        (pos[0] - 3.5) * xScale,
        (3.5 - pos[1]) * yScale
    ];
}

},{"./util.js":"SmZpT","./sync.js":"6A7Sz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6A7Sz":[function(require,module,exports) {
// append and remove only. No updates.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "syncShapes", ()=>syncShapes);
function syncShapes(shapes, root, renderShape) {
    const hashesInDom = new Map(), toRemove = [];
    for (const sc of shapes)hashesInDom.set(sc.hash, false);
    let el = root.firstChild, elHash;
    while(el){
        elHash = el.getAttribute("cgHash");
        // found a shape element that's here to stay
        if (hashesInDom.has(elHash)) hashesInDom.set(elHash, true);
        else toRemove.push(el);
        el = el.nextSibling;
    }
    // remove old shapes
    for (const el of toRemove)root.removeChild(el);
    // insert shapes that are not yet in dom
    for (const sc of shapes)if (!hashesInDom.get(sc.hash)) root.appendChild(renderShape(sc));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8TjL6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindBoard", ()=>bindBoard);
// returns the unbind function
parcelHelpers.export(exports, "bindDocument", ()=>bindDocument);
var _dragJs = require("./drag.js");
var _drawJs = require("./draw.js");
var _dropJs = require("./drop.js");
var _utilJs = require("./util.js");
function bindBoard(s, onResize) {
    const boardEl = s.dom.elements.board;
    if ("ResizeObserver" in window) new ResizeObserver(onResize).observe(s.dom.elements.wrap);
    if (s.disableContextMenu || s.drawable.enabled) boardEl.addEventListener("contextmenu", (e)=>e.preventDefault());
    if (s.viewOnly) return;
    // Cannot be passive, because we prevent touch scrolling and dragging of
    // selected elements.
    const onStart = startDragOrDraw(s);
    boardEl.addEventListener("touchstart", onStart, {
        passive: false
    });
    boardEl.addEventListener("mousedown", onStart, {
        passive: false
    });
}
function bindDocument(s, onResize) {
    const unbinds = [];
    // Old versions of Edge and Safari do not support ResizeObserver. Send
    // chessground.resize if a user action has changed the bounds of the board.
    if (!("ResizeObserver" in window)) unbinds.push(unbindable(document.body, "chessground.resize", onResize));
    if (!s.viewOnly) {
        const onmove = dragOrDraw(s, _dragJs.move, _drawJs.move);
        const onend = dragOrDraw(s, _dragJs.end, _drawJs.end);
        for (const ev of [
            "touchmove",
            "mousemove"
        ])unbinds.push(unbindable(document, ev, onmove));
        for (const ev of [
            "touchend",
            "mouseup"
        ])unbinds.push(unbindable(document, ev, onend));
        const onScroll = ()=>s.dom.bounds.clear();
        unbinds.push(unbindable(document, "scroll", onScroll, {
            capture: true,
            passive: true
        }));
        unbinds.push(unbindable(window, "resize", onScroll, {
            passive: true
        }));
    }
    return ()=>unbinds.forEach((f)=>f());
}
function unbindable(el, eventName, callback, options) {
    el.addEventListener(eventName, callback, options);
    return ()=>el.removeEventListener(eventName, callback, options);
}
const startDragOrDraw = (s)=>(e)=>{
        if (s.draggable.current) _dragJs.cancel(s);
        else if (s.drawable.current) _drawJs.cancel(s);
        else if (e.shiftKey || (0, _utilJs.isRightButton)(e)) {
            if (s.drawable.enabled) _drawJs.start(s, e);
        } else if (!s.viewOnly) {
            if (s.dropmode.active) (0, _dropJs.drop)(s, e);
            else _dragJs.start(s, e);
        }
    };
const dragOrDraw = (s, withDrag, withDraw)=>(e)=>{
        if (s.drawable.current) {
            if (s.drawable.enabled) withDraw(s, e);
        } else if (!s.viewOnly) withDrag(s, e);
    };

},{"./drag.js":"l9b66","./draw.js":"2zs58","./drop.js":"6HtBi","./util.js":"SmZpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6HtBi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setDropMode", ()=>setDropMode);
parcelHelpers.export(exports, "cancelDropMode", ()=>cancelDropMode);
parcelHelpers.export(exports, "drop", ()=>drop);
var _boardJs = require("./board.js");
var _utilJs = require("./util.js");
var _dragJs = require("./drag.js");
function setDropMode(s, piece) {
    s.dropmode = {
        active: true,
        piece
    };
    (0, _dragJs.cancel)(s);
}
function cancelDropMode(s) {
    s.dropmode = {
        active: false
    };
}
function drop(s, e) {
    if (!s.dropmode.active) return;
    _boardJs.unsetPremove(s);
    _boardJs.unsetPredrop(s);
    const piece = s.dropmode.piece;
    if (piece) {
        s.pieces.set("a0", piece);
        const position = _utilJs.eventPosition(e);
        const dest = position && _boardJs.getKeyAtDomPos(position, _boardJs.whitePov(s), s.dom.bounds());
        if (dest) _boardJs.dropNewPiece(s, "a0", dest);
    }
    s.dom.redraw();
}

},{"./board.js":"h5ozz","./util.js":"SmZpT","./drag.js":"l9b66","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97C3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// ported from https://github.com/lichess-org/lichobile/blob/master/src/chessground/render.ts
// in case of bugs, blame @veloce
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "renderResized", ()=>renderResized);
parcelHelpers.export(exports, "updateBounds", ()=>updateBounds);
var _utilJs = require("./util.js");
var _boardJs = require("./board.js");
function render(s) {
    const asWhite = (0, _boardJs.whitePov)(s), posToTranslate = (0, _utilJs.posToTranslate)(s.dom.bounds()), boardEl = s.dom.elements.board, pieces = s.pieces, curAnim = s.animation.current, anims = curAnim ? curAnim.plan.anims : new Map(), fadings = curAnim ? curAnim.plan.fadings : new Map(), curDrag = s.draggable.current, squares = computeSquareClasses(s), samePieces = new Set(), sameSquares = new Set(), movedPieces = new Map(), movedSquares = new Map(); // by class name
    let k, el, pieceAtKey, elPieceName, anim, fading, pMvdset, pMvd, sMvdset, sMvd;
    // walk over all board dom elements, apply animations and flag moved pieces
    el = boardEl.firstChild;
    while(el){
        k = el.cgKey;
        if (isPieceNode(el)) {
            pieceAtKey = pieces.get(k);
            anim = anims.get(k);
            fading = fadings.get(k);
            elPieceName = el.cgPiece;
            // if piece not being dragged anymore, remove dragging style
            if (el.cgDragging && (!curDrag || curDrag.orig !== k)) {
                el.classList.remove("dragging");
                (0, _utilJs.translate)(el, posToTranslate((0, _utilJs.key2pos)(k), asWhite));
                el.cgDragging = false;
            }
            // remove fading class if it still remains
            if (!fading && el.cgFading) {
                el.cgFading = false;
                el.classList.remove("fading");
            }
            // there is now a piece at this dom key
            if (pieceAtKey) {
                // continue animation if already animating and same piece
                // (otherwise it could animate a captured piece)
                if (anim && el.cgAnimating && elPieceName === pieceNameOf(pieceAtKey)) {
                    const pos = (0, _utilJs.key2pos)(k);
                    pos[0] += anim[2];
                    pos[1] += anim[3];
                    el.classList.add("anim");
                    (0, _utilJs.translate)(el, posToTranslate(pos, asWhite));
                } else if (el.cgAnimating) {
                    el.cgAnimating = false;
                    el.classList.remove("anim");
                    (0, _utilJs.translate)(el, posToTranslate((0, _utilJs.key2pos)(k), asWhite));
                    if (s.addPieceZIndex) el.style.zIndex = posZIndex((0, _utilJs.key2pos)(k), asWhite);
                }
                // same piece: flag as same
                if (elPieceName === pieceNameOf(pieceAtKey) && (!fading || !el.cgFading)) samePieces.add(k);
                else if (fading && elPieceName === pieceNameOf(fading)) {
                    el.classList.add("fading");
                    el.cgFading = true;
                } else appendValue(movedPieces, elPieceName, el);
            } else appendValue(movedPieces, elPieceName, el);
        } else if (isSquareNode(el)) {
            const cn = el.className;
            if (squares.get(k) === cn) sameSquares.add(k);
            else appendValue(movedSquares, cn, el);
        }
        el = el.nextSibling;
    }
    // walk over all squares in current set, apply dom changes to moved squares
    // or append new squares
    for (const [sk, className] of squares)if (!sameSquares.has(sk)) {
        sMvdset = movedSquares.get(className);
        sMvd = sMvdset && sMvdset.pop();
        const translation = posToTranslate((0, _utilJs.key2pos)(sk), asWhite);
        if (sMvd) {
            sMvd.cgKey = sk;
            (0, _utilJs.translate)(sMvd, translation);
        } else {
            const squareNode = (0, _utilJs.createEl)("square", className);
            squareNode.cgKey = sk;
            (0, _utilJs.translate)(squareNode, translation);
            boardEl.insertBefore(squareNode, boardEl.firstChild);
        }
    }
    // walk over all pieces in current set, apply dom changes to moved pieces
    // or append new pieces
    for (const [k, p] of pieces){
        anim = anims.get(k);
        if (!samePieces.has(k)) {
            pMvdset = movedPieces.get(pieceNameOf(p));
            pMvd = pMvdset && pMvdset.pop();
            // a same piece was moved
            if (pMvd) {
                // apply dom changes
                pMvd.cgKey = k;
                if (pMvd.cgFading) {
                    pMvd.classList.remove("fading");
                    pMvd.cgFading = false;
                }
                const pos = (0, _utilJs.key2pos)(k);
                if (s.addPieceZIndex) pMvd.style.zIndex = posZIndex(pos, asWhite);
                if (anim) {
                    pMvd.cgAnimating = true;
                    pMvd.classList.add("anim");
                    pos[0] += anim[2];
                    pos[1] += anim[3];
                }
                (0, _utilJs.translate)(pMvd, posToTranslate(pos, asWhite));
            } else {
                const pieceName = pieceNameOf(p), pieceNode = (0, _utilJs.createEl)("piece", pieceName), pos = (0, _utilJs.key2pos)(k);
                pieceNode.cgPiece = pieceName;
                pieceNode.cgKey = k;
                if (anim) {
                    pieceNode.cgAnimating = true;
                    pos[0] += anim[2];
                    pos[1] += anim[3];
                }
                (0, _utilJs.translate)(pieceNode, posToTranslate(pos, asWhite));
                if (s.addPieceZIndex) pieceNode.style.zIndex = posZIndex(pos, asWhite);
                boardEl.appendChild(pieceNode);
            }
        }
    }
    // remove any element that remains in the moved sets
    for (const nodes of movedPieces.values())removeNodes(s, nodes);
    for (const nodes of movedSquares.values())removeNodes(s, nodes);
}
function renderResized(s) {
    const asWhite = (0, _boardJs.whitePov)(s), posToTranslate = (0, _utilJs.posToTranslate)(s.dom.bounds());
    let el = s.dom.elements.board.firstChild;
    while(el){
        if (isPieceNode(el) && !el.cgAnimating || isSquareNode(el)) (0, _utilJs.translate)(el, posToTranslate((0, _utilJs.key2pos)(el.cgKey), asWhite));
        el = el.nextSibling;
    }
}
function updateBounds(s) {
    var _a, _b;
    const bounds = s.dom.elements.wrap.getBoundingClientRect();
    const container = s.dom.elements.container;
    const ratio = bounds.height / bounds.width;
    const width = Math.floor(bounds.width * window.devicePixelRatio / 8) * 8 / window.devicePixelRatio;
    const height = width * ratio;
    container.style.width = width + "px";
    container.style.height = height + "px";
    s.dom.bounds.clear();
    (_a = s.addDimensionsCssVarsTo) === null || _a === void 0 || _a.style.setProperty("--cg-width", width + "px");
    (_b = s.addDimensionsCssVarsTo) === null || _b === void 0 || _b.style.setProperty("--cg-height", height + "px");
}
const isPieceNode = (el)=>el.tagName === "PIECE";
const isSquareNode = (el)=>el.tagName === "SQUARE";
function removeNodes(s, nodes) {
    for (const node of nodes)s.dom.elements.board.removeChild(node);
}
function posZIndex(pos, asWhite) {
    const minZ = 3;
    const rank = pos[1];
    const z = asWhite ? minZ + 7 - rank : minZ + rank;
    return `${z}`;
}
const pieceNameOf = (piece)=>`${piece.color} ${piece.role}`;
function computeSquareClasses(s) {
    var _a;
    const squares = new Map();
    if (s.lastMove && s.highlight.lastMove) for (const k of s.lastMove)addSquare(squares, k, "last-move");
    if (s.check && s.highlight.check) addSquare(squares, s.check, "check");
    if (s.selected) {
        addSquare(squares, s.selected, "selected");
        if (s.movable.showDests) {
            const dests = (_a = s.movable.dests) === null || _a === void 0 ? void 0 : _a.get(s.selected);
            if (dests) for (const k of dests)addSquare(squares, k, "move-dest" + (s.pieces.has(k) ? " oc" : ""));
            const pDests = s.premovable.dests;
            if (pDests) for (const k of pDests)addSquare(squares, k, "premove-dest" + (s.pieces.has(k) ? " oc" : ""));
        }
    }
    const premove = s.premovable.current;
    if (premove) for (const k of premove)addSquare(squares, k, "current-premove");
    else if (s.predroppable.current) addSquare(squares, s.predroppable.current.key, "current-premove");
    const o = s.exploding;
    if (o) for (const k of o.keys)addSquare(squares, k, "exploding" + o.stage);
    return squares;
}
function addSquare(squares, key, klass) {
    const classes = squares.get(key);
    if (classes) squares.set(key, `${classes} ${klass}`);
    else squares.set(key, klass);
}
function appendValue(map, key, value) {
    const arr = map.get(key);
    if (arr) arr.push(value);
    else map.set(key, [
        value
    ]);
}

},{"./util.js":"SmZpT","./board.js":"h5ozz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kMgOL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "renderResized", ()=>renderResized);
var _utilJs = require("./util.js");
var _boardJs = require("./board.js");
var _syncJs = require("./sync.js");
function render(state, autoPieceEl) {
    const autoPieces = state.drawable.autoShapes.filter((autoShape)=>autoShape.piece);
    const autoPieceShapes = autoPieces.map((s)=>{
        return {
            shape: s,
            hash: hash(s),
            current: false
        };
    });
    (0, _syncJs.syncShapes)(autoPieceShapes, autoPieceEl, (shape)=>renderShape(state, shape, state.dom.bounds()));
}
function renderResized(state) {
    var _a;
    const asWhite = (0, _boardJs.whitePov)(state), posToTranslate = (0, _utilJs.posToTranslate)(state.dom.bounds());
    let el = (_a = state.dom.elements.autoPieces) === null || _a === void 0 ? void 0 : _a.firstChild;
    while(el){
        (0, _utilJs.translateAndScale)(el, posToTranslate((0, _utilJs.key2pos)(el.cgKey), asWhite), el.cgScale);
        el = el.nextSibling;
    }
}
function renderShape(state, { shape , hash  }, bounds) {
    var _a, _b, _c;
    const orig = shape.orig;
    const role = (_a = shape.piece) === null || _a === void 0 ? void 0 : _a.role;
    const color = (_b = shape.piece) === null || _b === void 0 ? void 0 : _b.color;
    const scale = (_c = shape.piece) === null || _c === void 0 ? void 0 : _c.scale;
    const pieceEl = (0, _utilJs.createEl)("piece", `${role} ${color}`);
    pieceEl.setAttribute("cgHash", hash);
    pieceEl.cgKey = orig;
    pieceEl.cgScale = scale;
    (0, _utilJs.translateAndScale)(pieceEl, (0, _utilJs.posToTranslate)(bounds)((0, _utilJs.key2pos)(orig), (0, _boardJs.whitePov)(state)), scale);
    return pieceEl;
}
const hash = (autoPiece)=>{
    var _a, _b, _c;
    return [
        autoPiece.orig,
        (_a = autoPiece.piece) === null || _a === void 0 ? void 0 : _a.role,
        (_b = autoPiece.piece) === null || _b === void 0 ? void 0 : _b.color,
        (_c = autoPiece.piece) === null || _c === void 0 ? void 0 : _c.scale
    ].join(",");
};

},{"./util.js":"SmZpT","./board.js":"h5ozz","./sync.js":"6A7Sz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3S2F9":[function() {},{}],"9gfGW":[function() {},{}],"dw6pW":[function() {},{}]},["8BXtR","bB7Pu"], "bB7Pu", "parcelRequire601b")

//# sourceMappingURL=index.3d214d75.js.map
