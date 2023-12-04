(()=>{"use strict";var e={8291:(e,t,n)=>{var r=n(7791),s=n(1976),a=n(2951),i=n(824),o=n.n(i),u=n(9138),h=1152,f=192,p=(0,s.Z)((function e(t){(0,a.Z)(this,e),this.header=void 0,this.samples=void 0;var n=t.length*t.numberOfChannels*2+44,r=new c(new DataView(new ArrayBuffer(n)));r.setUint32(1179011410),r.setUint32(n-8),r.setUint32(1163280727),r.setUint32(544501094),r.setUint32(16),r.setUint16(1),r.setUint16(t.numberOfChannels),r.setUint32(t.sampleRate),r.setUint32(2*t.sampleRate*t.numberOfChannels),r.setUint16(2*t.numberOfChannels),r.setUint16(16),r.setUint32(1635017060),r.setUint32(n-r.position-4);for(var s=t.channels,i=0;r.position<n;){for(var o=0;o<t.numberOfChannels;++o){var h=Math.max(-1,Math.min(1,s[o][i]));h=0|(.5+h<0?32768*h:32767*h),r.setInt16(h)}++i}this.header=u.Q.readHeader(r.dataView),this.samples=new Int16Array(r.dataView.buffer,this.header.dataOffset,this.header.dataLen/2)})),c=function(){function e(t){(0,a.Z)(this,e),this.dataView=void 0,this.position=void 0,this.dataView=t,this.position=0}return(0,s.Z)(e,[{key:"setUint16",value:function(e){this.dataView.setUint16(this.position,e,!0),this.position+=2}},{key:"setUint32",value:function(e){this.dataView.setUint32(this.position,e,!0),this.position+=4}},{key:"setInt16",value:function(e){this.dataView.setInt16(this.position,e,!0),this.position+=2}}]),e}();function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function e(t){var n,r,s,a,i,c,l,d,v,w,b,m,y,U,k,x;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new p(t),r=n.header.channels,s=n.header.sampleRate,a=n.samples,c=null,1!==r){e.next=9;break}i=new Int16Array(a),e.next=18;break;case 9:if(2!==r){e.next=17;break}for(l=[],d=[],v=0;v<a.length;v+=2)l.push(a[v]),d.push(a[v+1]);i=new Int16Array(l),c=new Int16Array(d),e.next=18;break;case 17:throw new Error("Unsupport number of channels "+r);case 18:for(w=[],b=new u.d(r,s,f),m=a.length,y=0;m>=h;y+=h)U=null===c?null:c.subarray(y,y+h),(k=b.encodeBuffer(i.subarray(y,y+h),U)).length>0&&w.push(new Int8Array(k)),m-=h;return(x=b.flush()).length>0&&w.push(new Int8Array(x)),e.abrupt("return",w);case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}onmessage=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=postMessage,e.next=3,l(t.data.audioBuffer);case 3:e.t1=e.sent,e.t2={command:"finished",buffer:e.t1},(0,e.t0)(e.t2);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.x=()=>{var e=n.O(void 0,[583],(()=>n(8291)));return e=n.O(e)},(()=>{var e=[];n.O=(t,r,s,a)=>{if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],s=e[f][1],a=e[f][2];for(var o=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(o=!1,a<i&&(i=a));if(o){e.splice(f--,1);var h=s();void 0!==h&&(t=h)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,s,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".4f81158d.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/asbplayer-staging/",(()=>{var e={291:1};n.f.i=(t,r)=>{e[t]||importScripts(n.p+n.u(t))};var t=self.webpackChunk_project_client=self.webpackChunk_project_client||[],r=t.push.bind(t);t.push=t=>{var s=t[0],a=t[1],i=t[2];for(var o in a)n.o(a,o)&&(n.m[o]=a[o]);for(i&&i(n);s.length;)e[s.pop()]=1;r(t)}})(),(()=>{var e=n.x;n.x=()=>n.e(583).then(e)})();n.x()})();
//# sourceMappingURL=291.6295c36d.chunk.js.map