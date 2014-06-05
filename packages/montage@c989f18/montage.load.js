montageDefine("c989f18","montage",{dependencies:["./node.js"],factory:function(e,t,n){"undefined"!=typeof window&&("ontouchstart"in window||(window.Touch=null),document._montageTiming={},document._montageTiming.loadStartTime=Date.now(),window.addEventListener("DOMContentLoaded",function(){var e=1e3;document._montageStartBootstrappingTimeout=setTimeout(function(){document._montageStartBootstrappingTimeout=null;var e=document.documentElement;e.classList?e.classList.add("montage-app-bootstrapping"):e.className=e.className+" montage-app-bootstrapping",document._montageTiming.bootstrappingStartTime=Date.now()},e)})),function(r){e!==void 0?r.call("undefined"!=typeof global?global:this,e,t,n):r({},{},{})}(function(e,t){global=this,t.initMontage=function(){var e=t.getPlatform();e.bootstrap(function(n,r,i){var a=e.getParams(),s={location:n.getLocation()},l=i.resolve(s.location,a.montageLocation);s.moduleTypes=["html","meta"],s.makeLoader=function(e){return t.ReelLoader(e,n.makeLoader(e))},s.makeCompiler=function(e){return t.MetaCompiler(e,t.SerializationCompiler(e,t.TemplateCompiler(e,n.makeCompiler(e))))};var u=i.resolve(s.location,a["package"]||"."),c=a.applicationHash;if("object"==typeof BUNDLE){var h={},d=function(e){return h[e]=h[e]||r.defer()};global.bundleLoaded=function(e){d(e).resolve()};var p=r.defer();s.preloaded=p.promise;var f=r.resolve();BUNDLE.forEach(function(e){f=f.then(function(){return r.all(e.map(function(e){return o.load(e),d(e).promise}))})}),p.resolve(f.then(function(){delete BUNDLE,delete bundleLoaded}))}var v;if("remoteTrigger"in a){var m=r.defer();window.postMessage({type:"montageReady"},"*");var g=function(e){if(a.remoteTrigger===e.origin&&(e.source===window||e.source===window.parent))switch(e.data.type){case"montageInit":window.removeEventListener("message",g),m.resolve([e.data.location,e.data.injections]);break;case"isMontageReady":window.postMessage({type:"montageReady"},"*")}};window.addEventListener("message",g),v=m.promise.spread(function(e,t){var r=n.loadPackage({location:e,hash:c},s);return t&&(r=r.then(function(n){e=i.resolve(e,".");var r,a,o=t.packageDescriptions,s=t.packageDescriptionLocations,l=t.mappings,u=t.dependencies;if(o)for(a=o.length,r=0;a>r;r++)n.injectPackageDescription(o[r].location,o[r].description);if(s)for(a=s.length,r=0;a>r;r++)n.injectPackageDescriptionLocation(s[r].location,s[r].descriptionLocation);if(l)for(a=l.length,r=0;a>r;r++)n.injectMapping(l[r].dependency,l[r].name);if(u)for(a=u.length,r=0;a>r;r++)n.injectDependency(u[r].name,u[r].version);return n})),r})}else{if("autoPackage"in a)n.injectPackageDescription(u,{dependencies:{montage:"*"}},s);else if(".json"===u.slice(u.length-5)){var b=u;u=i.resolve(u,"."),n.injectPackageDescriptionLocation(u,b,s)}v=n.loadPackage({location:u,hash:c},s)}v.then(function(t){t.loadPackage({location:l,hash:a.montageHash}).then(function(e){var t;return t=a.promiseLocation?i.resolve(n.getLocation(),a.promiseLocation):i.resolve(l,"packages/mr/packages/q"),[e,e.loadPackage({location:t,hash:a.promiseHash})]}).spread(function(n,o){n.inject("core/mini-url",i),n.inject("core/promise",{Promise:r}),o.inject("q",r),s.lint=function(e){n.async("core/jshint").then(function(t){t.JSHINT(e.text)||(console.warn("JSHint Error: "+e.location),t.JSHINT.errors.forEach(function(e){e&&(console.warn("Problem at line "+e.line+" character "+e.character+": "+e.reason),e.evidence&&console.warn("    "+e.evidence))}))}).done()},global.require=t,global.montageRequire=n,e.initMontage(n,t,a)})}).done()})};var n=/((.*)\.reel)\/\2$/,r=function(e,t){return t};t.SerializationCompiler=function(e,t){return function(e){if(t(e),e.factory){var i=e.factory;return e.factory=function(e,t,a){i.call(this,e,t,a);for(var o in t){var s=t[o];if(s instanceof Object){if(s.hasOwnProperty("_montage_metadata")&&!s._montage_metadata.isInstance)s._montage_metadata.aliases.push(o),s._montage_metadata.objectName=o;else if(!Object.isSealed(s)){var l=a.id.replace(n,r);Object.defineProperty(s,"_montage_metadata",{value:{require:e,module:l,moduleId:l,property:o,objectName:o,aliases:[o],isInstance:!1}})}}else;}},e}}};var i=/([^\/]+)\.reel$/;t.ReelLoader=function(e,t){return function(e,n){var r=i.exec(e);return r?(n.redirect=e+"/"+r[1],n):t(e,n)}};var a=/\.meta/;t.MetaCompiler=function(e,t){return function(e){var n=(e.location||"").match(a);return n?(e.exports=JSON.parse(e.text),e):t(e)}},t.TemplateCompiler=function(e,t){return function(e){if(e.location){var n=e.location.match(/(.*\/)?(?=[^\/]+\.html(?:\.load\.js)?$)/);return n?(e.dependencies=e.dependencies||[],e.exports={directory:n[1],content:e.text},Object.defineProperty(e.exports,"root",{get:function(){return"object"==typeof console&&console.warn("'root' property is deprecated on template modules.  Use 'directory' instead of root[1]"),n}}),e):(t(e),void 0)}}},t.getPlatform=function(){if("undefined"!=typeof window&&window&&window.document)return o;if("undefined"!=typeof process)return e("./node.js");throw Error("Platform not supported.")};var o={makeResolve:function(){var e=document.querySelector("head"),t=document.createElement("base"),n=document.createElement("a");return t.href="",function(r,i){var a=e.querySelector("base");if(a||(e.appendChild(t),a=t),r+="",!/^[\w\-]+:/.test(r))throw Error("Can't resolve from a relative location: "+JSON.stringify(r)+" "+JSON.stringify(i));var o=a.href;a.href=r,n.href=i;var s=n.href;return a.href=o,a===t&&e.removeChild(a),s}},load:function(e){var t=document.createElement("script");t.src=e,t.onload=function(){t.parentNode.removeChild(t)},document.getElementsByTagName("head")[0].appendChild(t)},getParams:function(){var e,t,n,r,i,a,o;if(!this._params){this._params={};var s=document.getElementsByTagName("script");for(e=0;s.length>e;e++)if(r=s[e],i=!1,r.src&&(n=r.src.match(/^(.*)montage.js(?:[\?\.]|$)/i))&&(this._params.montageLocation=n[1],i=!0),r.hasAttribute("data-montage-location")&&(this._params.montageLocation=r.getAttribute("data-montage-location"),i=!0),i){if(r.dataset)for(o in r.dataset)this._params[o]=r.dataset[o];else if(r.attributes){var l=/-([a-z])/g,u=function(e,t){return t.toUpperCase()};for(t=0;r.attributes.length>t;t++)a=r.attributes[t],n=a.name.match(/^data-(.*)$/),n&&(this._params[n[1].replace(l,u)]=a.value)}r.parentNode.removeChild(r);break}}return this._params},bootstrap:function(e){function t(){document.removeEventListener("DOMContentLoaded",t,!0),s=!0,i()}function n(e){if(!m[e]&&v[e]){var t=m[e]={};m[e]=v[e](n,t)||t}return m[e]}function r(){u=n("mini-url"),l=n("promise"),a=n("require"),delete global.bootstrap,i()}function i(){s&&a&&e(a,l,u)}var a,s,l,u,c=this.getParams(),h=this.makeResolve();/interactive|complete/.test(document.readyState)?t():document.addEventListener("DOMContentLoaded",t,!0);var d={require:"packages/mr/require.js","require/browser":"packages/mr/browser.js",promise:"packages/mr/packages/q/q.js"};if("undefined"==typeof BUNDLE){var p=h(window.location,c.montageLocation);for(var f in d)o.load(h(p,d[f]))}var v={};global.bootstrap=function(e,t){v[e]=t,delete d[e];for(var e in d)return;delete global.bootstrap,r()},global.bootstrap("mini-url",function(e,t){t.resolve=h});var m={}},initMontage:function(e,t,n){var r=["core/core","core/event/event-manager","core/serialization/deserializer/montage-reviver","core/logger","core/deprecate"],i=e("core/promise").Promise;return i.all(r.map(e.deepLoad)).then(function(){r.forEach(e),e("core/core").Montage;var a,o,s=e("core/event/event-manager").EventManager,l=e("core/serialization/deserializer/montage-reviver").MontageReviver,u=e("core/logger").logger,c=e("core/deprecate");u("Promise stacktrace support",function(e){i.longStackSupport=!!e}),a=(new s).initWithWindow(window),"function"==typeof global.montageWillLoad&&global.montageWillLoad();var h,d,p=t.packageDescription.applicationPrototype;return p?(h=l.parseObjectLocationId(p),d=t.async(h.moduleId)):d=e.async("core/application"),d.then(function(e){var r=e[h?h.objectName:"Application"];o=new r,Object.defineProperty(window.document,"application",{get:c.deprecateMethod(null,function(){return e.application},'document.application is deprecated, use require("montage/core/application").application instead.')}),a.application=o,o.eventManager=a,o._load(t,function(){n.module&&t.async(n.module).done(),"function"==typeof global.montageDidLoad&&global.montageDidLoad()})})}).done()}};"undefined"!=typeof window?global.__MONTAGE_LOADED__?console.warn("Montage already loaded!"):(global.__MONTAGE_LOADED__=!0,t.initMontage()):t.getPlatform()})}});