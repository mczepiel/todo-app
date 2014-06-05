montageDefine("c989f18","ui/base/abstract-image",{dependencies:["../../core/core","../component","../../core/mini-url"],factory:function(e,t){var n=(e("../../core/core").Montage,e("../component").Component),r=e("../../core/mini-url"),i=t.AbstractImage=n.specialize({constructor:{value:function i(){if(this.constructor===i)throw Error("AbstractImage cannot be instantiated.");n.constructor.call(this),this._image=new Image,this._image.onload=this.handleImageLoad.bind(this),this.addPathChangeListener("_ownerDocumentPart",this,"_rebaseSrc")}},emptyImageSrc:{value:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},_isLoadingImage:{value:!1},_image:{value:null},_src:{value:null},src:{set:function(e){this._src!==e&&(this._src=e,e=this._getRebasedSrc(),e?(this._isInvalidSrc=!1,this._loadImage(e)):this._isInvalidSrc=!0,this.needsDraw=!0)},get:function(){return this._src}},_loadImage:{value:function(e){this._image.src=e,this._isLoadingImage=!this._image.complete}},_isInvalidSrc:{value:!0},width:{value:null},height:{value:null},_textAlternative:{value:null},textAlternative:{set:function(e){this._textAlternative=e,this.needsDraw=!0},get:function(){return this._textAlternative}},_crossOrigin:{value:null},crossOrigin:{set:function(e){e!==this._crossOrigin&&(this._crossOrigin=e,this.needsDraw=!0)},get:function(){return this._crossOrigin}},_rebaseSrc:{value:function(){var e;e=this._getRebasedSrc(),e&&(this._isInvalidSrc=!1,this._loadImage(e),this.needsDraw=!0)}},_getRebasedSrc:{value:function(){var e,t=this._src,n=/^[\w\-]+:|^\//;if(t){if(n.test(t))return t;if(this._ownerDocumentPart&&(e=this._ownerDocumentPart.template.getBaseUrl()))return r.resolve(e,t)}return null}},enterDocument:{value:function(e){e&&this.element.setAttribute("role","img")}},draw:{value:function(){var e;e=this._isLoadingImage||this._isInvalidSrc?this.emptyImageSrc:this._getRebasedSrc(),null==this._crossOrigin||"data:"===e.slice(0,5)?this.element.removeAttribute("crossorigin"):this.element.setAttribute("crossorigin",this._crossOrigin),this.element.src=e,this.element.setAttribute("aria-label",this._textAlternative)}},handleImageLoad:{value:function(){this._isLoadingImage=!1,this.needsDraw=!0}}})}});