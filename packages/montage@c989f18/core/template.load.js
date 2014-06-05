montageDefine("c989f18","core/template",{dependencies:["./core","./serialization","./document-part","./document-resources","./serialization/serialization","./serialization/serializer/montage-labeler","./promise","./mini-url","./logger","./event/event-manager","./application"],factory:function(e,t){function n(e,t,n){var r,i,a=new d,s=e.documentElement.outerHTML,l=new o,u=e.documentElement;return r=a.createHtmlDocumentWithHtml(s,e.location.href),a.initWithDocument(r,t).then(function(){return a.setBaseUrl(e.location.href),i=a._createTemplateObjects(n),l.initWithTemplateAndFragment(a),a._instantiateObjects(i,u).then(function(e){return l.objects=e,a._invokeDelegates(l),l})})}var r,i=e("./core").Montage,a=e("./serialization").Deserializer,o=e("./document-part").DocumentPart,s=e("./document-resources").DocumentResources,l=e("./serialization/serialization").Serialization,u=e("./serialization/serializer/montage-labeler").MontageLabeler,c=e("./promise").Promise,h=e("./mini-url");e("./logger").logger("template"),e("./event/event-manager").defaultEventManager;var d=i.specialize({_SERIALIZATON_SCRIPT_TYPE:{value:"text/montage-serialization"},_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},PARAM_ATTRIBUTE:{value:"data-param"},_require:{value:null},_resources:{value:null},_baseUrl:{value:null},_instances:{value:null},_metadata:{value:null},_objectsString:{value:null},objectsString:{get:function(){return this._objectsString},set:function(e){this._objectsString=e,this._serialization&&this._serialization.initWithString(e),this.__deserializer=null}},__deserializer:{value:null},_deserializer:{get:function(){var e,t,n=this.__deserializer;if(!n){if(e=this._metadata){t=Object.create(null);for(var r in e)t[r]=e[r].require}n=(new a).init(this.objectsString,this._require,t),this.__deserializer=n}return n}},getDeserializer:{value:function(){return this._deserializer}},_serialization:{value:null},getSerialization:{value:function(){var e=this._serialization;return e||(e=this._serialization=new l,e.initWithString(this.objectsString)),e}},_isDirty:{value:!1},isDirty:{get:function(){return this._isDirty},set:function(e){this._isDirty!==e&&(this._isDirty=e,this.clearTemplateFromElementContentsCache())}},refresher:{value:null},_document:{value:null},document:{get:function(){return this._isDirty&&this.refresh(),this._document},set:function(e){this._document=e}},constructor:{value:function d(){this.super()}},initWithRequire:{value:function(e){return this._require=e,this.document=this.createHtmlDocumentWithHtml(""),this.objectsString="",this}},initWithDocument:{value:function(e,t){var n=this;return this._require=t,this.setDocument(e),this.getObjectsString(e).then(function(e){return n.objectsString=e,n})}},initWithHtml:{value:function(e,t){var n=this;return this._require=t,this.document=this.createHtmlDocumentWithHtml(e),this.getObjectsString(this.document).then(function(e){return n.objectsString=e,n})}},initWithObjectsAndDocumentFragment:{value:function(e,t,n){return this._require=n,this.document=this.createHtmlDocumentWithHtml(""),this.document.body.appendChild(this.document.importNode(t,!0)),this.setObjects(e),this}},initWithModuleId:{value:function(e,t){var n=this;return this._require=t,this.createHtmlDocumentWithModuleId(e,t).then(function(r){var i=t(e).directory;return n.document=r,n.setBaseUrl(i),n.getObjectsString(r).then(function(e){return n.objectsString=e,n})})}},clone:{value:function(){var e=new d;return e._require=this._require,e._baseUrl=this._baseUrl,e.setDocument(this.document),e.objectsString=this.objectsString,e._instances=Object.clone(this._instances,1),e}},instantiate:{value:function(e){return this.instantiateWithInstances(null,e)}},instantiateWithInstances:{value:function(e,t){var n,r,i,a=this,s=new o;return e=e||this._instances,n=this._createMarkupDocumentFragment(t),i=this._getParameters(n),s.initWithTemplateAndFragment(this,n),s.startActingAsTopComponent(),s.parameters=i,r=this._createTemplateObjects(e),this._instantiateObjects(r,n).then(function(n){var r;return s.objects=n,a._invokeDelegates(s,e),s.stopActingAsTopComponent(),r=a.getResources(),!r.resourcesLoaded()&&r.hasResources()&&r.loadResources(t).done(),s})}},_objectsInstantiationOptimized:{value:!1},_optimizeObjectsInstantiationPromise:{value:null},_optimizeObjectsInstantiation:{value:function(){var e,t=this;return this._objectsInstantiationOptimized?void 0:(this._optimizeObjectsInstantiationPromise||(e=this._deserializer.preloadModules(),e?this._optimizeObjectsInstantiationPromise=e.then(function(){t._objectsInstantiationOptimized=!0}):this._objectsInstantiationOptimized=!0),this._optimizeObjectsInstantiationPromise)}},setBaseUrl:{value:function(e){this._baseUrl=e}},getBaseUrl:{value:function(){return this._baseUrl}},getResources:{value:function(){var e=this._resources;return e||(e=this._resources=new p,e.initWithTemplate(this)),e}},_createTemplateObjects:{value:function(t){var n=Object.create(t||null);return r===void 0&&(r=e("./application").application),n.application=r,n.template=this,n}},_instantiateObjects:{value:function(e,t){var n,r=this._deserializer;return n=this._optimizeObjectsInstantiation(),n?n.then(function(){return r.deserialize(e,t)}):r.deserialize(e,t)}},_createMarkupDocumentFragment:{value:function(e){for(var t=e.createDocumentFragment(),n=this.document.body.childNodes,r=0,i=n.length;i>r;r++)t.appendChild(e.importNode(n[r],!0));return t}},getParameterName:{value:function(e){return e.getAttribute(this.PARAM_ATTRIBUTE)}},getParameters:{value:function(){return this._getParameters(this.document.body)}},_getParameters:{value:function(e){for(var t,n=e.querySelectorAll("*["+this.PARAM_ATTRIBUTE+"]"),r=n.length,i={},a=0;r>a;a++){t=n[a];var o=this.getParameterName(t);if(o in i)throw Error('The parameter "'+o+'" is'+" declared more than once in "+this.getBaseUrl()+".");i[o]=t}if("*"in i&&r>1)throw Error('The star "*" template parameter was declared when other parameters were also present in '+this.getBaseUrl()+": "+Object.keys(i)+".");return i}},hasParameters:{value:function(){return!!this.document.querySelector("*["+this.PARAM_ATTRIBUTE+"]")}},_invokeDelegates:{value:function(e,t){var n,r,i,a=e.objects,o=a.owner||t&&t.owner;for(var s in a)t&&s in t||(n=a[s],r=this._getObjectOwner(s,o),i=this._getObjectLabel(s),n&&("function"==typeof n._deserializedFromTemplate&&n._deserializedFromTemplate(r,i,e),"function"==typeof n.deserializedFromTemplate&&n.deserializedFromTemplate(r,i,e)));if(o){var l=this.getSerialization();l.isExternalObject("owner")||("function"==typeof o._templateDidLoad&&o._templateDidLoad(e),"function"==typeof o.templateDidLoad&&o.templateDidLoad(e))}}},setInstances:{value:function(e){this._instances=e}},getInstances:{value:function(){return this._instances}},setObjects:{value:function(e){this.objectsString=JSON.stringify(e,null,4)}},setObjectMetadata:{value:function(e,t,n,r){var i=this._metadata;i||(this._metadata=i=Object.create(null)),i[e]={require:t,label:n,owner:r},this.__deserializer=null}},getObjectMetadata:{value:function(e){var t=this._metadata;return t&&e in t?t[e]:{require:this._require,label:e}}},_getObjectOwner:{value:function(e,t){var n,r=this._metadata;return n=r&&e in r?r[e].owner:t}},_getObjectLabel:{value:function(e){var t,n=this._metadata;return t=n&&e in n?n[e].label:e}},setDocument:{value:function(e){var t=e.documentElement.innerHTML;this.document=this.createHtmlDocumentWithHtml(t,e.baseURI),this.clearTemplateFromElementContentsCache()}},getObjectsString:{value:function(e){var t;return t=this.getInlineObjectsString(e),null===t?this.getExternalObjectsString(e):c.resolve(t)}},getInlineObjectsString:{value:function(e){var t="script[type='"+this._SERIALIZATON_SCRIPT_TYPE+"']",n=e.querySelector(t);return n?n.textContent:null}},getExternalObjectsString:{value:function(e){var t,n,r,i=e.querySelector('link[rel="serialization"]');return i?(t=new XMLHttpRequest,n=i.getAttribute("href"),r=c.defer(),t.open("GET",n),t.addEventListener("load",function(){200==t.status?r.resolve(t.responseText):r.reject(Error("Unable to retrive '"+n+"', code status: "+t.status))},!1),t.addEventListener("error",function(e){r.reject(Error("Unable to retrive '"+n+"' with error: "+e.error+"."))},!1),t.send(),r.promise):c.resolve(null)}},createHtmlDocumentWithHtml:{value:function(e,t){var n=document.implementation.createHTMLDocument("");return n.documentElement.innerHTML=e,this.normalizeRelativeUrls(n,t),n}},createHtmlDocumentWithModuleId:{value:function(e,t){var n=this;return"function"!=typeof t?c.reject(Error("Missing 'require' function to load module '"+e+"'.")):t.async(e).then(function(e){return n.createHtmlDocumentWithHtml(e.content,e.directory)})}},_removeObjects:{value:function(e){var t="script[type='"+this._SERIALIZATON_SCRIPT_TYPE+"'], link[rel='serialization']";Array.prototype.forEach.call(e.querySelectorAll(t),function(e){e.parentNode.removeChild(e)})}},_addObjects:{value:function(e,t){if(t){var n=e.createElement("script");n.setAttribute("type",this._SERIALIZATON_SCRIPT_TYPE),n.textContent=JSON.stringify(JSON.parse(t),null,4),e.head.appendChild(n)}}},_templateFromElementContentsCache:{value:null},clearTemplateFromElementContentsCache:{value:function(){this._templateFromElementContentsCache=null}},createTemplateFromElementContents:{value:function(e){var t,n,r,i=this._templateFromElementContentsCache;return i||(i=Object.create(null),this._templateFromElementContentsCache=i),e in i?Object.create(i[e]):(t=this.getElementById(e),r=this.document.createRange(),r.selectNodeContents(t),n=this.createTemplateFromRange(r),i[e]=n,Object.create(n))}},createTemplateFromElement:{value:function(e){var t,n;return t=this.getElementById(e),n=this.document.createRange(),n.selectNode(t),this.createTemplateFromRange(n)}},createTemplateFromRange:{value:function(e){var t,n,r,i,a,o=new l;return t=e.cloneContents(),n=this._getChildrenElementIds(t),o.initWithString(this.objectsString),r=o.getSerializationLabelsWithElements(n),a=o.extractSerialization(r,["owner"]),i=new d,i.initWithObjectsAndDocumentFragment(null,t,this._require),i.objectsString=a.getSerializationString(),i._resources=this.getResources(),i}},_createSerializationWithElementIds:{value:function(e){var t,n,r=new l;return r.initWithString(this.objectsString),t=r.getSerializationLabelsWithElements(e),n=r.extractSerialization(t,["owner"])}},expandParameters:{value:function(e){var t,n,r,i,a,o,s,l=[],u={},c=this.getSerialization(),h={};t=this.getParameters();for(var d in t)if(i=t[d],a=e.getTemplateArgumentElement(d),l.push.apply(l,this._getElementIds(a)),n=this.replaceNode(a,i))for(var p in n)u[p]=n[p];return h.elementIds=l,h.elementIdsCollisions=u,o=e.getTemplateArgumentSerialization(l),o.renameElementReferences(u),s=function(t){return t.indexOf(":")>0?e.resolveTemplateArgumentTemplateProperty(t):void 0},r=c.mergeSerialization(o,{willMergeObjectWithLabel:s}),this.objectsString=c.getSerializationString(),h.labels=o.getSerializationLabels(),h.labelsCollisions=r,h}},_resolveElementIdCollisions:{value:function(e,t){var n,r,i,a,o;t=t||new u,i=this.getElementIds();for(var s,l=0;s=i[l];l++)t.addLabel(s);r=this._getElements(e);for(var s in r)this.getElementById(s)&&(a=r[s],o=t.generateLabel(t.getLabelBaseName(s)),this.setElementId(a,o),n||(n=Object.create(null)),n[s]=o);return n}},replaceNode:{value:function(e,t,n){var r;return r=this._resolveElementIdCollisions(e,n),this.normalizeRelativeUrls(e,this.getBaseUrl()),t.parentNode.replaceChild(e,t),r}},insertNodeBefore:{value:function(e,t,n){var r;return r=this._resolveElementIdCollisions(e,n),this.normalizeRelativeUrls(e,this.getBaseUrl()),t.parentNode.insertBefore(e,t),r}},appendNode:{value:function(e,t,n){var r;return r=this._resolveElementIdCollisions(e,n),this.normalizeRelativeUrls(e,this.getBaseUrl()),t.appendChild(e),r}},getElementId:{value:function(e){return e.getAttribute?e.getAttribute(this._ELEMENT_ID_ATTRIBUTE):void 0}},setElementId:{value:function(e,t){e.setAttribute(this._ELEMENT_ID_ATTRIBUTE,t)}},getElementIds:{value:function(){return this._getElementIds(this.document.body)}},_getElements:{value:function(e){var t,n,r="*["+this._ELEMENT_ID_ATTRIBUTE+"]",i={};t=e.querySelectorAll(r);for(var a,o=0;a=t[o];o++)n=this.getElementId(a),i[n]=a;return n=this.getElementId(e),n&&(i[n]=e),i}},_getChildrenElementIds:{value:function(e){var t,n="*["+this._ELEMENT_ID_ATTRIBUTE+"]",r=[];t=e.querySelectorAll(n);for(var i,a=0;i=t[a];a++)r.push(this.getElementId(i));return r}},_getElementIds:{value:function(e){var t,n=this._getChildrenElementIds(e);return t=this.getElementId(e),t&&n.push(t),n}},getElementById:{value:function(e){var t="*["+this._ELEMENT_ID_ATTRIBUTE+"='"+e+"']";return this.document.querySelector(t)}},html:{get:function(){var e=this.document;return this._removeObjects(e),this._addObjects(e,this.objectsString),this._getDoctypeString(e.doctype)+"\n"+e.documentElement.outerHTML}},_getDoctypeString:{value:function(e){return"<!DOCTYPE "+e.name+(e.publicId?' PUBLIC "'+e.publicId+'"':"")+(!e.publicId&&e.systemId?" SYSTEM":"")+(e.systemId?' "'+e.systemId+'"':"")+">"}},normalizeRelativeUrls:{value:function(e,t){if("string"==typeof t&&""!==t&&"about:blank"!==t)for(var n="http://www.w3.org/1999/xlink",r=/^[\w\-]+:|^\//,i=-1!==d._NORMALIZED_TAG_NAMES.indexOf(e.tagName)?[e]:e.querySelectorAll(d._NORMALIZED_TAG_NAMES_SELECTOR),a=0,o=i.length;o>a;a++){var s,l=i[a];"image"===l.tagName?(s=l.getAttributeNS(n,"href"),r.test(s)||l.setAttributeNS(n,"href",h.resolve(t,s))):l.hasAttribute("src")?(s=l.getAttribute("src"),""===s||r.test(s)||l.setAttribute("src",h.resolve(t,s))):l.hasAttribute("href")&&(s=l.getAttribute("href"),""===s||r.test(s)||l.setAttribute("href",h.resolve(t,s)))}}},replaceContentsWithTemplate:{value:function(e){this._require=e._require,this._baseUrl=e._baseUrl,this._document=e._document,this.objectsString=e.objectsString,this._instances=e._instances,this._templateFromElementContentsCache=e._templateFromElementContentsCache,this._metadata=e._metadata}},refresh:{value:function(){this.isDirty&&(this.refresher&&"function"==typeof this.refresher.refreshTemplate?(this.refresher.refreshTemplate(this),this.isDirty=!1):console.warn("Not able to refresh without a refresher.refreshTemplate."))}}},{_templateCache:{value:{moduleId:Object.create(null)}},_getTemplateCacheKey:{value:function(e,t){return e=t.resolve(e),t.location+"#"+e}},getTemplateWithModuleId:{value:function(e,t){var n,r;return n=this._getTemplateCacheKey(e,t),r=this._templateCache.moduleId[n],r||(r=(new d).initWithModuleId(e,t),this._templateCache.moduleId[n]=r),r}},_NORMALIZED_TAG_NAMES:{value:["IMG","image","IFRAME","link"]},__NORMALIZED_TAG_NAMES_SELECTOR:{value:null},_NORMALIZED_TAG_NAMES_SELECTOR:{get:function(){return this.__NORMALIZED_TAG_NAMES_SELECTOR||(this.__NORMALIZED_TAG_NAMES_SELECTOR=this._NORMALIZED_TAG_NAMES.join(",")),this.__NORMALIZED_TAG_NAMES_SELECTOR}}}),p=i.specialize({_resources:{value:null},_resourcesLoaded:{value:!1},template:{value:null},rootUrl:{value:""},constructor:{value:function p(){this._resources=Object.create(null)}},initWithTemplate:{value:function(e){this.template=e}},hasResources:{value:function(){return this.getStyles().length>0||this.getScripts().length>0}},resourcesLoaded:{value:function(){return this._resourcesLoaded}},loadResources:{value:function(e){return this._resourcesLoaded=!0,c.all([this.loadScripts(e),this.loadStyles(e)])}},getScripts:{value:function(){var e,t,n,r=this._resources.scripts;if(!r){t=this.template,r=this._resources.scripts=[],n=t.document.querySelectorAll("script");for(var i=0,a=n.length;a>i;i++)e=n[i],e.type!==this.template._SERIALIZATON_SCRIPT_TYPE&&r.push(e)}return r}},loadScripts:{value:function(e){var t,n=[];t=this.getScripts();for(var r=0,i=t.length;i>r;r++)n.push(this.loadScript(t[r],e));return c.all(n)}},loadScript:{value:function(e,t){var n,r;return n=s.getInstanceForDocument(t),r=this._cloneScriptElement(e,t),n.addScript(r)}},_cloneScriptElement:{value:function(e,t){for(var n,r=t.createElement("script"),i=e.attributes,a=0,o=i.length;o>a;a++)n=i[a],r.setAttribute(n.name,n.value);return r}},getStyles:{value:function(){var e,t,n,r=this._resources.styles;return r||(n='link[rel="stylesheet"], style',e=this.template,t=e.document.querySelectorAll(n),r=Array.prototype.slice.call(t,0),this._resources.styles=r),r}},loadStyles:{value:function(e){var t,n=[];t=this.getStyles();for(var r=0,i=t.length;i>r;r++)n.push(this.loadStyle(t[r],e));return c.all(n)}},loadStyle:{value:function(e,t){var n,r;return n=e.getAttribute("href"),n?(r=s.getInstanceForDocument(t),r.preloadResource(n)):c.resolve()}},createStylesForDocument:{value:function(e){for(var t,n,r=this.getStyles(),i=[],a=0;n=r[a];a++)t=e.importNode(n,!0),i.push(t);return i}}}),f=i.specialize({getTemplateArgumentElement:{value:function(){}},getTemplateArgumentSerialization:{value:function(){}},resolveTemplateArgumentTemplateProperty:{value:function(){}}});t.Template=d,t.TemplateArgumentProvider=f,t.TemplateResources=p,t.instantiateDocument=n}});