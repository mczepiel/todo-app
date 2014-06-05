montageDefine("c989f18","core/core",{dependencies:["collections/shim","./shim/object","./shim/array","./shim/string","./extras/object","./extras/date","./extras/element","./extras/function","./extras/regexp","./extras/string","./deprecate","./uuid","collections/listen/property-changes","frb","collections/weak-map","collections/map","frb/parse","frb/evaluate","frb/assign","frb/observe","frb/bind","frb/compile-observer","frb/scope","frb/observers","./serialization/bindings","./promise"],factory:function(e,t){function n(e,t){var r=a+t+i;return e.hasOwnProperty(r)?e[r]:Object.defineProperty(e,r,{enumerable:!1,configurable:!1,writable:!0,value:Object.create(n(Object.getPrototypeOf(e),t))})[r]}e("collections/shim"),e("./shim/object"),e("./shim/array"),e("./shim/string"),e("./extras/object"),e("./extras/date"),e("./extras/element"),e("./extras/function"),e("./extras/regexp"),e("./extras/string");var r=e("./deprecate"),i="AttributeProperties",a="_",s="__proto__",o="value",u="enumerable",l="distinct",h="serializable",c=Array.prototype,d=Object.prototype,p=!0,m=t.Montage=function m(){};m.deprecate=r.deprecateMethod(m,r.deprecateMethod,"Montage.deprecate","deprecate module's deprecateMethod"),m.callDeprecatedFunction=r.deprecateMethod(m,r.callDeprecatedFunction,"Montage.callDeprecatedFunction","deprecate module's callDeprecatedFunction");var f={}.__proto__===Object.prototype,v={_montage_metadata:1,__state__:1},g=Object.getOwnPropertyNames(Function);if(Object.defineProperty(m,"specialize",{value:function(e,t){var n,i,a,s,o,u,l,h=this,c=this.specialize===void 0;if(e=e||Object.empty,t=t||Object.empty,n=e.constructor&&e.constructor.value?e.constructor.value:e.didCreate&&e.didCreate.value?m.deprecate(null,e.didCreate.value,"didCreate","constructor"):function(){return this.superForValue("constructor")()||this},f)n.__proto__=h;else{a=Object.getOwnPropertyNames(h);for(var u=0;a.length>u;u++)s=a[u],v.hasOwnProperty(s)||(o=Object.getOwnPropertyDescriptor(n,s),(!o||o.configurable)&&m.defineProperty(n,s,Object.getOwnPropertyDescriptor(h,s)));n.__constructorProto__=h,m.defineProperty(n,"isPrototypeOf",{value:function(e){for(;null!==e;){if(Object.getPrototypeOf(e)===this)return!0;e=Object.getPrototypeOf(e)}return!1},enumerable:!1})}if(i=Object.create(this.prototype),c){for(a=Object.getOwnPropertyNames(m),u=0;a.length>u;u++)s=a[u],o=Object.getOwnPropertyDescriptor(n,s),(!o||o.configurable)&&m.defineProperty(n,s,Object.getOwnPropertyDescriptor(m,s));for(a=Object.getOwnPropertyNames(m.prototype),u=0;a.length>u;u++)s=a[u],o=Object.getOwnPropertyDescriptor(n,s),(!o||o.configurable)&&m.defineProperty(i,s,Object.getOwnPropertyDescriptor(m.prototype,s))}if(m.defineProperties(i,e),p){l=function(e,t,n){function i(){return this===t&&r.deprecationWarning(m.getInfoForObject(t).objectName+"."+n+" should be moved to constructorProperties",null,3),e.apply(this,arguments)}return i.deprecatedFunction=e,i};for(s in e)g.has(s)?delete e[s]:(o=e[s],o.value&&"function"==typeof o.value&&!o.value.__isConstructor__?o.value=l(o.value,n,s):(o.get&&(o.get=l(o.get,n,s)),o.set&&(o.set=l(o.set,n,s))));m.defineProperties(n,e),m.defineProperty(n,"create",{value:function(){return new n},enumerable:!1})}return m.defineProperties(n,t),m.defineProperty(n,"__isConstructor__",{value:!0,enumerable:!1}),m.defineProperty(n,"_superCache",{value:{},enumerable:!1}),n.prototype=i,m.defineProperty(i,"constructor",{value:n,enumerable:!1}),n},writable:!0,configurable:!0,enumerable:!1}),!f){var y=Object.getPrototypeOf;Object.getPrototypeOf=function(e){return"function"==typeof e&&e.__constructorProto__?e.__constructorProto__:y.apply(Object,arguments)}}Object.defineProperty(m,"create",{configurable:!0,value:function(e,t){if(void 0!==e&&"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object prototype may only be an Object or null, not '"+e+"'");if(e=e===void 0?this:e,"function"==typeof e)return t?e.specialize(t):new e;var n=Object.create(e);return t&&m.defineProperties(n,t),n}});var _=[h];_.forEach(function(e){Object.defineProperty(Object.prototype,a+e+i,{enumerable:!1,configurable:!1,writable:!0,value:{}})}),Object.defineProperty(m,"defineProperty",{value:function(e,t,r){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object must be an object, not '"+e+"'");var i=o in r;if(l in r&&!i)throw new TypeError("Cannot use distinct attribute on non-value property '"+t+"'");if(s in r)r.__proto__=i?"function"==typeof r.value?w:M:b;else{var p;p=i?"function"==typeof r.value?w:M:b;for(var m in p)m in r||(r[m]=p[m])}if(r.hasOwnProperty(u)||t.charAt(0)!==a||(r.enumerable=!1),r.hasOwnProperty(h)||(r.enumerable?r.get&&!r.set?r.serializable=!1:r.writable===!1&&(r.serializable=!1):r.serializable=!1),h in r&&(n(e,h)[t]=r.serializable),r.distinct!==!0||"object"!=typeof r.value){var f,v,g;if(e._superDependencies){if("function"==typeof r.value&&(f=e._superDependencies[t+".value"]))for(v=0,g=f.length;g>v;v++)delete f[v]._superCache[t+".value"];if("function"==typeof r.get&&(f=e._superDependencies[t+".get"]))for(v=0,g=f.length;g>v;v++)delete f[v]._superCache[t+".get"];if("function"==typeof r.set&&(f=e._superDependencies[t+".set"]))for(v=0,g=f.length;g>v;v++)delete f[v]._superCache[t+".set"]}return Object.defineProperty(e,t,r)}(function(e,t,n,r){var i=function(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})};n.constructor===Object&&Object.getPrototypeOf(n)===d?0!==Object.keys(n).length?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r;e={};for(r in n)e[r]=n[r];this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e={},this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):(n.__proto__||Object.getPrototypeOf(n))===c?0!==n.length?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r,a;for(e=[],r=0;(a=n[r])!==void 0;r++)e[r]=a;this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e=[],this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):n.constructor.prototype===Object.getPrototypeOf(n)?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r;e=new n.constructor;for(r in n)e[r]=n[r];this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e=Object.create(n.__proto__||Object.getPrototypeOf(n)),this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}})})(t,a+t,r.value,e)}}),Object.defineProperty(m,"defineProperties",{value:function(e,t){if("object"!=typeof t||null===t)throw new TypeError("Properties must be an object, not '"+t+"'");for(var n in t)"_bindingDescriptors"!==n&&this.defineProperty(e,n,t[n]);return e}});var b={enumerable:!0,configurable:!0,serializable:!0},M={writable:!0,enumerable:!0,configurable:!0,serializable:"reference"},w={writable:!0,enumerable:!1,configurable:!0,serializable:!1};m.defineProperty(m,"didCreate",{value:Function.noop});var P=function(e,t){var n,r,i,a,s,o,u,l,h;if(!t._superPropertyName||!t._superPropertyType)for(m.defineProperty(t,"_superPropertyType",{value:null}),m.defineProperty(t,"_superPropertyName",{value:null}),u=e;!l&&null!==u;){for(n=Object.getOwnPropertyNames(u),r=Object.getPrototypeOf(u),i=0,a=n.length,i;a>i;i++){if(s=n[i],h=Object.getOwnPropertyDescriptor(u,s),null!=(o=h.value)&&(o===t||o.deprecatedFunction===t)){t._superPropertyType="value",t._superPropertyName=s,l=!0;break}if(null!=(o=h.get)&&(o===t||o.deprecatedFunction===t)){t._superPropertyType="get",t._superPropertyName=s,l=!0;break}if(null!=(o=h.set)&&(o===t||o.deprecatedFunction===t)){t._superPropertyType="set",t._superPropertyName=s,l=!0;break}}u=r}return D(e,t._superPropertyType,t._superPropertyName)},T=function(){if("function"!=typeof T.caller)throw new TypeError("Can't get super without caller. Use this.superForValue(methodName) if using strict mode.");var e=P(this,T.caller);return"function"==typeof e?e.bind(this):Function.noop},D=function(e,t,n){var r,i,a,s,o,u=e,l=n+"."+t;if(e._superContext||m.defineProperty(e,"_superContext",{value:{}}),e._superContext[l])u=e._superContext[l];else for(u=e;null!==u&&(!u.hasOwnProperty(n)||(a=Object.getOwnPropertyDescriptor(u,n),"function"!=typeof a[t]));)u=Object.getPrototypeOf(u);if(s=u.constructor,s._superCache&&s._superCache[l])return o=function(e,t,n,r){return function(){t._superContext[e]=n;var i=r.apply(t,arguments);return delete t._superContext[e],i}}(l,e,s._superCache[l].owner,s._superCache[l].func);for(i=u;r===void 0&&(i=Object.getPrototypeOf(i));)if(i._superDependencies||m.defineProperty(i,"_superDependencies",{value:{}}),i._superDependencies[l]||(i._superDependencies[l]=[]),i._superDependencies[l].push(s),a=Object.getOwnPropertyDescriptor(i,n)){if("function"==typeof a[t]){r=a[t];break}break}return"function"==typeof r?(o=function(e,t,n,r){return function(){t._superContext[e]=n;var i=r.apply(t,arguments);return delete t._superContext[e],i}}(l,e,i,r),s._superCache||m.defineProperty(s,"_superCache",{value:{}}),s._superCache[l]={func:r,owner:i},o):Function.noop},E=function(e){return D(this,"value",e)},C=function(e){return D(this,"get",e)},S=function(e){return D(this,"set",e)};m.defineProperty(m,"super",{get:T,enumerable:!1}),m.defineProperty(m.prototype,"super",{get:T,enumerable:!1}),m.defineProperty(m,"superForValue",{value:E,enumerable:!1}),m.defineProperty(m.prototype,"superForValue",{value:E,enumerable:!1}),m.defineProperty(m,"superForGet",{value:C,enumerable:!1}),m.defineProperty(m.prototype,"superForGet",{value:C,enumerable:!1}),m.defineProperty(m,"superForSet",{value:S,enumerable:!1}),m.defineProperty(m.prototype,"superForSet",{value:S,enumerable:!1}),m.defineProperty(m,"getSerializablePropertyNames",{value:function(e){var t=[],n=e._serializableAttributeProperties;if(n)for(var r in n)n[r]&&t.push(r);return t}}),m.defineProperty(m,"getPropertyAttribute",{value:function(e,t,n){var r=a+n+i,s=e[r];return s?s[t]:void 0}}),m.defineProperty(m,"getPropertyAttributes",{value:function(e,t){var n={},r=a+t+i,s=e[r];if(s){for(var o in s)n[o]=s[o];return n}}});var O={isInstance:{value:!0}},Y={objectName:{value:"Function"},isInstance:{value:!0}};m.defineProperty(m,"getInfoForObject",{value:function(e){var t,n;if(A.call(e,"_montage_metadata"))return e._montage_metadata;if(t=e._montage_metadata||e.constructor&&e.constructor._montage_metadata||null,n=e.constructor===Function?Y:O,e===Object.prototype)return Object.create(t,n);try{return Object.defineProperty(e,"_montage_metadata",{enumerable:!1,writable:!0,value:Object.create(t,n)})._montage_metadata}catch(r){return e._montage_metadata=Object.create(t,n)}}});var x=e("./uuid");"undefined"!=typeof window&&(window.uuid=x.generate());var A=Object.prototype.hasOwnProperty,N=function(){var e=x.generate(),t=m.getInfoForObject(this);try{null!==t&&t.isInstance===!1?(this._uuid=e,Object.defineProperty(this,"uuid",{get:function(){return this.hasOwnProperty("uuid")?this._uuid:N.call(this)}})):(t.isInstance&&Object.defineProperty(this,"uuid",{configurable:!0,enumerable:!1,writable:!1,value:e}),!(this instanceof Element)&&t.isInstance&&o in(Object.getOwnPropertyDescriptor(this,"uuid")||{})&&s in this||(this._uuid=e))}catch(n){}return this._uuid=e,e},k=function k(){return A.call(this,"_uuid")?this._uuid:N.call(this)};Object.defineProperty(Object.prototype,"_uuid",{enumerable:!1,value:null,writable:!0}),Object.defineProperty(Object.prototype,"uuid",{configurable:!0,get:k,set:function(){}}),m.defineProperty(m,"identifier",{value:null,serializable:!0}),m.defineProperty(m.prototype,"identifier",{value:null,serializable:!0}),m.defineProperty(m.prototype,"equals",{value:function(e){return e?this===e||this.uuid===e.uuid:!1}}),m.defineProperty(m,"equals",{value:m.prototype.equals}),m.defineProperty(m.prototype,"callDelegateMethod",{value:function(e){var t,n,r=this.delegate;return"string"==typeof this.identifier&&(t=this.identifier+e.toCapitalized(),r&&"function"==typeof(n=r[t]))?(c.shift.call(arguments),n.apply(r,arguments)):r&&"function"==typeof(n=r[e])?(c.shift.call(arguments),n.apply(r,arguments)):void 0}});var I=e("collections/listen/property-changes");Object.addEach(m,I.prototype),Object.addEach(m.prototype,I.prototype);var L=t.Bindings=e("frb"),z={defineBinding:{value:function(e,t,n){return L.defineBinding(this,e,t,n)}},defineBindings:{value:function(e,t){return L.defineBindings(this,e,t)}},cancelBinding:{value:function(e){return L.cancelBinding(this,e)}},cancelBindings:{value:function(){return L.cancelBindings(this)}},getBinding:{value:function(e){return L.getBinding(this,e)}},getBindings:{value:function(){return L.getBindings(this)}}};m.defineProperties(m,z),m.defineProperties(m.prototype,z);var X=e("collections/weak-map"),F=e("collections/map"),j=e("frb/parse"),R=e("frb/evaluate"),B=e("frb/assign");e("frb/observe"),e("frb/bind");var U=e("frb/compile-observer"),H=e("frb/scope"),W=e("frb/observers"),K=W.autoCancelPrevious,q=new X,V={getPath:{value:function(e,t,n,r){return R(e,this,t||this,n,r)}},setPath:{value:function(e,t,n,r,i){return B(this,e,t,n||this,r,i)}},observePath:{value:function(e,t){var n=j(e),r=U(n);return r(K(t),new H(this))}},addRangeAtPathChangeListener:{value:function(e,t,n,r,i,a){function s(e,r,i){if(t[n])t[n](e,r,i);else{if(!t.call)throw Error("Can't dispatch range change to "+t);t.call(null,e,r,i)}}n=n||"handleRangeChange";var o=[];return this.addPathChangeListener(e,function(e){return e&&e.toArray&&e.addRangeChangeListener?(s(e.toArray(),o.toArray(),0),o=e,e.addRangeChangeListener(s)):(e=[],s(e,o,0),o=e,void 0)},void 0,void 0,r,i,a)}},getPathChangeDescriptors:{value:function(){return q.has(this)||q.set(this,{}),q.get(this)}},getPathChangeDescriptor:{value:function(e,t,n){var r=m.getPathChangeDescriptors.call(this);return Object.owns(r,e)||(r[e]={willChangeListeners:new F,changeListeners:new F}),r=r[e],r=n?r.willChangeListeners:r.changeListeners,r.has(t)||r.set(t,{path:e,handler:t,beforeChange:n,cancel:Function.noop}),r.get(t)}},addPathChangeListener:{value:function(e,t,n,r,i,a,s){var o=this;t=t||Function.noop;var u=m.getPathChangeDescriptor.call(this,e,t,r);u.cancel();var l,h,c,d=j(e);if(t===Function.noop)c=function(t){if(h)throw Error("Path change handler needs a handler because it emits new values when the source changes: "+JSON.stringify(e));h=!0,l=t};else if(n)c=function(r){return t[n].call(t,r,e,o)};else if(t.handlePathChange)c=function(n){return t.handlePathChange.call(t,n,e,o)};else{if("function"!=typeof t)throw Error("Can't recognize handler type: "+t+". Must be function or delegate implementing handlePathChange.");c=function(n){return t.call(o,n,e,o)}}var p=U(d),f=new H(this);f.beforeChange=r,f.parameters=i,f.document=a,f.components=s;var v=p(K(c),f);return u.cancel=v,h?l:v}},removePathChangeListener:{value:function(e,t,n){t=t||Function.noop;var r=m.getPathChangeDescriptors.call(this),i=n?"willChangeListeners":"changeListeners";if(!Object.owns(r,e))throw Error("Can't find "+i+" for "+JSON.stringify(e));var a=r[e],s=a[i];if(!s.has(t))throw Error("Can't find "+i+" for "+JSON.stringify(e));var o=s.get(t);o.cancel(),s["delete"](t),0===a.willChangeListeners.length&&0===a.changeListeners.length&&delete r[e];for(var u in r)return;q["delete"](this)}},addBeforePathChangeListener:{value:function(e,t,n,r,i,a){return m.addPathChangeListener.call(this,e,t,n,!0,r,i,a)}},removeBeforePathChangeListener:{value:function(e,t){return m.removePathChangeListener.call(this,e,t,!0)}}};m.defineProperties(m,V),m.defineProperties(m.prototype,V),e("./serialization/bindings"),t._blueprintModuleIdDescriptor={serializable:!1,enumerable:!1,get:function(){var e=m.getInfoForObject(this),t=e&&!e.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(t,"_blueprintModuleId")||!t._blueprintModuleId){e=m.getInfoForObject(t);var n=e.moduleId,r=n.lastIndexOf("/"),i=n.lastIndexOf(".");r=-1===r?0:r+1,i=-1===i?n.length:i,i=r>i?n.length:i,m.defineProperty(t,"_blueprintModuleId",{enumerable:!1,value:n.slice(0,i)+".meta"})}return t._blueprintModuleId}},t._blueprintDescriptor={serializable:!1,enumerable:!1,get:function(){var n=m.getInfoForObject(this),r=n&&!n.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(r,"_blueprint")||!r._blueprint){var i=r.blueprintModuleId;if(""===i)throw new TypeError("Blueprint moduleId undefined for the module '"+JSON.stringify(r)+"'");t._blueprintDescriptor.BlueprintModulePromise||(t._blueprintDescriptor.BlueprintModulePromise=e.async("core/meta/module-blueprint").get("ModuleBlueprint")),m.defineProperty(r,"_blueprint",{enumerable:!1,value:t._blueprintDescriptor.BlueprintModulePromise.then(function(e){var t=m.getInfoForObject(r);return e.getBlueprintWithModuleId(i,t.require).fail(function(t){if(-1!==t.message.indexOf("Can't XHR"))return e.createDefaultBlueprintForObject(r).then(function(e){return e});throw t})})})}return r._blueprint},set:function(t){var n,r=m.getInfoForObject(this),i=r&&!r.isInstance?this:this.constructor;if(null===t)n=null;else{if("function"==typeof t.then)throw new TypeError("Object blueprint should not be a promise");t.blueprintInstanceModule=i.blueprintModule,n=e("./promise").Promise.resolve(t)}m.defineProperty(i,"_blueprint",{enumerable:!1,value:n})}}}});