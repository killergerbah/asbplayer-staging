/*! For license information please see 958.9e8e0c75.chunk.js.LICENSE.txt */
(()=>{var e={6552:(e,t,r)=>{"use strict";var n=r(8532).default,o=r(8983).default,i=r(2081).default;Object.defineProperty(t,"__esModule",{value:!0}),t.BufferReader=t.CompositeBufferReader=t.CompositeBuffer=t.Uint8ArrayBuffer=void 0;var a=function(){function e(t){o(this,e),this.buffer=t}return i(e,[{key:"length",get:function(){return this.buffer.length}},{key:"at",value:function(e){return this.buffer[e]}},{key:"subarray",value:function(t,r){return new e(this.buffer.subarray(t,r))}}]),e}();t.Uint8ArrayBuffer=a;var s=function(){function e(t){o(this,e),this.buffers=[],this.buffers=t}return i(e,[{key:"length",get:function(){var e,t=0,r=n(this.buffers);try{for(r.s();!(e=r.n()).done;){t+=e.value.length}}catch(o){r.e(o)}finally{r.f()}return t}},{key:"at",value:function(e){var t,r=0,o=n(this.buffers);try{for(o.s();!(t=o.n()).done;){var i=t.value,a=e-r;if(a<i.length)return i.at(a);r+=i.length}}catch(s){o.e(s)}finally{o.f()}throw new Error("Out of bounds")}},{key:"subarray",value:function(t,r){var o,i=[],a=0,s=n(this.buffers);try{for(s.s();!(o=s.n()).done;){var u=o.value,f=Math.max(0,t-a),c=Math.min(u.length,r-a);c>0&&f<c&&i.push(u.subarray(f,c)),a+=u.length}}catch(l){s.e(l)}finally{s.f()}return new e(i)}}]),e}();t.CompositeBuffer=s;var u=function(){function e(){o(this,e),this.buffers=[]}return i(e,[{key:"add",value:function(e){this.buffers.push(e)}},{key:"length",get:function(){var e,t=0,r=n(this.buffers);try{for(r.s();!(e=r.n()).done;){t+=e.value.length}}catch(o){r.e(o)}finally{r.f()}return t}},{key:"read",value:function(e){if(0===e)return new s([]);for(var t=[],r=0;;){if(0===this.buffers.length)throw new Error("Trying to read more bytes than available");var n=this.buffers.shift(),o=e-r;if(n.length===o){t.push(n);break}if(n.length>o){t.push(n.subarray(0,o)),this.buffers.unshift(n.subarray(o,n.length));break}r+=n.length,t.push(n)}return new s(t.map((function(e){return new a(e)})))}}]),e}();t.CompositeBufferReader=u;var f=function(){function e(t){o(this,e),this._index=0,this.buffer=t}return i(e,[{key:"index",get:function(){return this._index}},{key:"hasNext",get:function(){return this._index<this.buffer.length}},{key:"readHex",value:function(e,t){if(void 0!==t&&this._index+e>t)return 0;for(var r=0,n=0,o=this._index,i=this._index+e-1;i>=o;--i)r+=this.buffer.at(i)<<8*n,++n;return this._index+=e,r}},{key:"readBuffer",value:function(e){var t=this.buffer.subarray(this.index,this.index+e);return this._index+=e,t}}]),e}();t.BufferReader=f},5234:(e,t,r)=>{"use strict";t.In=void 0;var n=r(2417);Object.defineProperty(t,"In",{enumerable:!0,get:function(){return n.parseDisplaySets}});var o=r(8105)},2417:(e,t,r)=>{"use strict";var n=r(8983).default,o=r(2081).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DisplaySet=t.parseDisplaySets=void 0;var i=r(6552),a=r(8105);t.parseDisplaySets=function(){var e=new u,t=new i.CompositeBufferReader,r=13;return new TransformStream({transform:function(n,o){for(t.add(n);t.length>=r;)r=e.consume(t.read(r)),e.ready&&o.enqueue(e.next())},flush:function(t){e.ready&&t.enqueue(e.next())}})};var s=function(){function e(t,r,o,i,a,s){n(this,e),this.presentationCompositionSegment=t,this.windowDefinitionSegments=r,this.paletteDefinitionSegments=o,this.objectDefinitionSegments=i,this.endDefinitionSegment=a,this.previousDisplaySet=s}return o(e,[{key:"firstOds",get:function(){return this.objectDefinitionSegments.find((function(e){return e.lastInSequenceFlag===a.LastInSequenceFlag.firstInSequence||e.lastInSequenceFlag===a.LastInSequenceFlag.firstAndLastInSequence}))}},{key:"paletteDefinitionSegment",value:function(e){var t=this.paletteDefinitionSegments.find((function(t){return t.paletteId===e}));if(void 0===t){if(this.presentationCompositionSegment.compositionState!==a.CompositionState.normal)throw new Error("PCS references invalid PDS and composition state is not 'normal'");if(void 0===this.previousDisplaySet)throw new Error("PCS references invalid PDS and no previous display set to fallback to");return this.previousDisplaySet.paletteDefinitionSegment(e)}return t}},{key:"imageData",value:function(e){var t=this,r=this.paletteDefinitionSegment(this.presentationCompositionSegment.paletteId);if(void 0===r)throw new Error("PCS references invalid PDS");var n=this.firstOds;if(void 0===n||void 0===n.width||void 0===n.height)throw new Error("Missing first ODS with defined width and height");var o=null!==e&&void 0!==e?e:new Uint8ClampedArray(n.width*n.height*4),a=r.paletteEntries.map((function(e){return t.ycrcbToRgba(e)})),s=n.width;return function(e,t){for(var r=0,n=0,o=0,i=e.length;r<i;){var a=e.at(r),s=void 0,u=void 0,f=void 0;if(a>0)u=a,s=1,f=1;else{var c=e.at(r+1);if(0===c)u=0,s=0,f=2,n=0,++o;else if(c<64)u=0,s=c,f=2;else if(c<128)u=0,s=(c-64<<8)+e.at(r+2),f=3;else if(c<192)u=e.at(r+2),s=c-128,f=3;else{var l=e.at(r+2);u=e.at(r+3),s=(c-192<<8)+l,f=4}}if(s>0){for(var h=n;h<n+s;++h)t(h,o,u);n+=s}r+=f}}(new i.CompositeBuffer(this.objectDefinitionSegments.map((function(e){return e.objectData}))),(function(e,t,r){var n=4*(t*s+e);if(r>=a.length)o[n]=0,o[n+1]=0,o[n+2]=0,o[n+3]=0;else{var i=a[r];o[n]=i.r,o[n+1]=i.g,o[n+2]=i.b,o[n+3]=i.a}})),new ImageData(o.subarray(0,4*n.width*n.height),n.width,n.height)}},{key:"ycrcbToRgba",value:function(e){var t=e.luminance,r=e.colorDifferenceBlue,n=e.colorDifferenceRed;return{r:this.clamp(Math.floor(t+1.4075*(n-128)),0,255),g:this.clamp(Math.floor(t-.3455*(r-128)-.7169*(n-128)),0,255),b:this.clamp(Math.floor(t+1.779*(r-128)),0,255),a:e.transparency}}},{key:"clamp",value:function(e,t,r){return Math.max(t,Math.min(r,e))}}]),e}();t.DisplaySet=s;var u=function(){function e(){n(this,e),this.windowDefinitionSegments=[],this.paletteDefinitionSegments=[],this.objectDefinitionSegments=[],this.ready=!1}return o(e,[{key:"next",value:function(){return this.ready=!1,this.lastDisplaySet}},{key:"consume",value:function(e){var t=new i.BufferReader(e);if(this.header){switch(this.header.segmentType){case a.SegmentType.pcs:if(void 0!==this.presentationCompositionSegment)throw new Error("Unexpected PDS");this.presentationCompositionSegment=function(e,t){var r=e.index+t.segmentSize,n=e.readHex(2,r),o=e.readHex(2,r);e.readHex(1);var i=e.readHex(2,r),s=(0,a.compositionStateFromByte)(e.readHex(1,r)),u=(0,a.paletteUpdateFlagFromByte)(e.readHex(1,r)),f=e.readHex(1,r),c=e.readHex(1,r),l=e.readHex(2,r),h=e.readHex(1,r),d=(0,a.objectCroppedFlagFromByte)(e.readHex(1,r)),p=e.readHex(2,r),v=e.readHex(2,r),m=e.readHex(2,r),y=e.readHex(2,r),g=e.readHex(2,r),w=e.readHex(2,r);return{header:t,width:n,height:o,compositionNumber:i,compositionState:s,paletteUpdateFlag:u,paletteId:f,compositionObjectCount:c,objectId:l,windowId:h,objectCroppedFlag:d,objectHorizontalPosition:p,objectVerticalPosition:v,objectCroppingHorizontalPosition:m,objectCroppingVerticalPosition:y,objectCroppingWidth:g,objectCroppingHeightPosition:w}}(t,this.header);break;case a.SegmentType.wds:if(void 0===this.presentationCompositionSegment)throw new Error("Unexpected WDS");this.windowDefinitionSegments.push(function(e,t){for(var r=e.index+t.segmentSize,n=e.readHex(1,r),o=[],i=0;i<n;++i){var a=e.readHex(1,r),s=e.readHex(2,r),u=e.readHex(2,r),f=e.readHex(2,r),c=e.readHex(2,r);o.push({windowId:a,windowHorizontalPosition:s,windowVerticalPosition:u,windowWidth:f,windowHeight:c})}return{header:t,windowCount:n,windowDefinitions:o}}(t,this.header));break;case a.SegmentType.pds:if(void 0===this.presentationCompositionSegment)throw new Error("Unexpected PDS");this.paletteDefinitionSegments.push(function(e,t){var r=e.index+t.segmentSize,n=e.readHex(1,r),o=e.readHex(1,r),i=[];for(;e.index<r;){var a=e.readHex(1,r),s=e.readHex(1,r),u=e.readHex(1,r),f=e.readHex(1,r),c=e.readHex(1,r);i.push({paletteEntryId:a,luminance:s,colorDifferenceRed:u,colorDifferenceBlue:f,transparency:c})}return{header:t,paletteId:n,paletteVersionNumber:o,paletteEntries:i}}(t,this.header));break;case a.SegmentType.ods:if(void 0===this.presentationCompositionSegment)throw new Error("Unexpected ODS");var r=function(e,t){var r,n,o,i=e.readHex(2),s=e.readHex(1),u=(0,a.lastInSequenceFlagFromByte)(e.readHex(1)),f=e.readHex(3);u===a.LastInSequenceFlag.firstInSequence||u===a.LastInSequenceFlag.firstAndLastInSequence?(r=e.readHex(2),n=e.readHex(2),o=e.readBuffer(f-4)):o=e.readBuffer(f);return{header:t,objectId:i,objectVersionNumber:s,lastInSequenceFlag:u,objectDataLength:f,width:r,height:n,objectData:o}}(t,this.header);this.objectDefinitionSegments.push(r);break;case a.SegmentType.end:if(void 0===this.presentationCompositionSegment)throw new Error("Unexpected end segment");var n={header:this.header};this.lastDisplaySet=new s(this.presentationCompositionSegment,this.windowDefinitionSegments,this.paletteDefinitionSegments,this.objectDefinitionSegments,n,this.lastDisplaySet),this.ready=!0,this.presentationCompositionSegment=void 0,this.windowDefinitionSegments=[],this.paletteDefinitionSegments=[],this.objectDefinitionSegments=[];break;default:throw new Error("Unknown segment type: ".concat(this.header.segmentType))}return this.header=void 0,13}var o=t.readHex(2);if(20551!==o)throw new Error("Invalid magic number: ".concat(o));var u=t.readHex(4),f=t.readHex(4),c=(0,a.segmentTypeFromByte)(t.readHex(1)),l=t.readHex(2);return this.header={presentationTimestamp:u,decodingTimestamp:f,segmentType:c,segmentSize:l},l}}]),e}()},8105:(e,t,r)=>{"use strict";var n,o=r(8532).default;Object.defineProperty(t,"__esModule",{value:!0}),t.lastInSequenceFlagFromByte=t.LastInSequenceFlag=t.objectCroppedFlagFromByte=t.paletteUpdateFlagFromByte=t.compositionStateFromByte=t.CompositionState=t.segmentTypeFromByte=t.SegmentType=void 0,function(e){e[e.pds=20]="pds",e[e.ods=21]="ods",e[e.pcs=22]="pcs",e[e.wds=23]="wds",e[e.end=128]="end"}(n=t.SegmentType||(t.SegmentType={}));var i,a=Object.values(n);t.segmentTypeFromByte=function(e){var t,r=o(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(e===n)return n}}catch(i){r.e(i)}finally{r.f()}throw new Error("Invalid segment type byte: ".concat(e))},function(e){e[e.normal=0]="normal",e[e.acquisitionState=64]="acquisitionState",e[e.epochStart=128]="epochStart"}(i=t.CompositionState||(t.CompositionState={}));var s,u=Object.values(i);t.compositionStateFromByte=function(e){var t,r=o(u);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(e===n)return n}}catch(i){r.e(i)}finally{r.f()}throw new Error("Invalid composition state byte: ".concat(e))},t.paletteUpdateFlagFromByte=function(e){switch(e){case 0:return!1;case 128:return!0;default:throw new Error("Invalid palette update flag byte: ".concat(e))}},t.objectCroppedFlagFromByte=function(e){switch(e){case 0:return!1;case 64:return!0;default:throw new Error("Invalid object cropped flag byte: ".concat(e))}},function(e){e[e.lastInSequence=64]="lastInSequence",e[e.firstInSequence=128]="firstInSequence",e[e.firstAndLastInSequence=192]="firstAndLastInSequence"}(s=t.LastInSequenceFlag||(t.LastInSequenceFlag={}));var f=Object.values(s);t.lastInSequenceFlagFromByte=function(e){var t,r=o(f);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(e===n)return n}}catch(i){r.e(i)}finally{r.f()}throw new Error("Invalid last in sequence flag byte: ".concat(e))}},8106:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},8983:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},2081:(e,t,r)=>{var n=r(4040);function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},8532:(e,t,r)=>{var n=r(5068);e.exports=function(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw a}}}},e.exports.__esModule=!0,e.exports.default=e.exports},1337:(e,t,r)=>{var n=r(7501).default;function o(){"use strict";e.exports=o=function(){return r},e.exports.__esModule=!0,e.exports.default=e.exports;var t,r={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(e,t,r){e[t]=r.value},u="function"==typeof Symbol?Symbol:{},f=u.iterator||"@@iterator",c=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function h(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(t){h=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var o=t&&t.prototype instanceof b?t:b,i=Object.create(o.prototype),a=new T(n||[]);return s(i,"_invoke",{value:k(e,r,a)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=d;var v="suspendedStart",m="suspendedYield",y="executing",g="completed",w={};function b(){}function x(){}function S(){}var j={};h(j,f,(function(){return this}));var D=Object.getPrototypeOf,_=D&&D(D(O([])));_&&_!==i&&a.call(_,f)&&(j=_);var I=S.prototype=b.prototype=Object.create(j);function E(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function H(e,t){function r(o,i,s,u){var f=p(e[o],e,i);if("throw"!==f.type){var c=f.arg,l=c.value;return l&&"object"==n(l)&&a.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,s,u)}),(function(e){r("throw",e,s,u)})):t.resolve(l).then((function(e){c.value=e,s(c)}),(function(e){return r("throw",e,s,u)}))}u(f.arg)}var o;s(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}})}function k(e,r,n){var o=v;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var u=C(s,n);if(u){if(u===w)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var f=p(e,r,n);if("normal"===f.type){if(o=n.done?g:m,f.arg===w)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=g,n.method="throw",n.arg=f.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,w;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,w):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w)}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function O(e){if(e||""===e){var r=e[f];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(n(e)+" is not iterable")}return x.prototype=S,s(I,"constructor",{value:S,configurable:!0}),s(S,"constructor",{value:x,configurable:!0}),x.displayName=h(S,l,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,S):(e.__proto__=S,h(e,l,"GeneratorFunction")),e.prototype=Object.create(I),e},r.awrap=function(e){return{__await:e}},E(H.prototype),h(H.prototype,c,(function(){return this})),r.AsyncIterator=H,r.async=function(e,t,n,o,i){void 0===i&&(i=Promise);var a=new H(d(e,t,n,o),i);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(I),h(I,l,"Generator"),h(I,f,(function(){return this})),h(I,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=O,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),f=a.call(i,"finallyLoc");if(u&&f){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),w},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),w}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),w}},r}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},6027:(e,t,r)=>{var n=r(7501).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4040:(e,t,r)=>{var n=r(7501).default,o=r(6027);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},7501:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},5068:(e,t,r)=>{var n=r(8106);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},824:(e,t,r)=>{var n=r(1337)();e.exports=n;try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(f){return void r(f)}s.done?t(u):Promise.resolve(u).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function s(t){e(a,o,i,s,u,"next",t)}function u(t){e(a,o,i,s,u,"throw",t)}s(void 0)}))}}var n=r(824),o=r.n(n),i=r(5234);function a(e,r){var n,a;e.pipeThrough((0,i.In)()).pipeTo(new WritableStream({close:function(){postMessage({command:"finished"})},abort:function(e){postMessage({command:"error",error:e})},write:function(e,i){return t(o().mark((function t(){var i,s,u,f;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.objectDefinitionSegments.length>0)){t.next=4;break}void 0===n&&(n=e),t.next=21;break;case 4:if(void 0===n){t.next=21;break}return s=n.presentationCompositionSegment.width,u=n.presentationCompositionSegment.height,a=void 0===a||a.length<u*s*4?new Uint8ClampedArray(s*u*4):a,f=n.imageData(a),r.width=f.width,r.height=f.height,r.getContext("2d").putImageData(f,0,0),t.t0=postMessage,t.next=16,r.convertToBlob({type:"image/png"});case 16:t.t1=t.sent,t.t2={start:null!==(i=n.objectDefinitionSegments[0].header.presentationTimestamp/90)&&void 0!==i?i:0,end:e.endDefinitionSegment.header.presentationTimestamp/90,text:"",textImage:{image:{width:f.width,height:f.height},screen:{width:n.presentationCompositionSegment.width,height:n.presentationCompositionSegment.height}}},t.t3={command:"subtitle",imageBlob:t.t1,subtitle:t.t2},(0,t.t0)(t.t3),n=void 0;case 21:case"end":return t.stop()}}),t)})))()}}))}onmessage=function(){var e=t(o().mark((function e(t){var r,n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.data,n=r.fileStream,i=r.canvas,a(n,i);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})()})();
//# sourceMappingURL=958.9e8e0c75.chunk.js.map