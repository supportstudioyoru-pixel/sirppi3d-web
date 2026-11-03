(()=>{var _i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nh=0,zl=1,Fh=2;var Sr=1,Oh=2,Cs=3,Zn=0,We=1,Un=2,Nn=0,Li=1,Vl=2,Gl=3,Hl=4,Bh=5;var hi=100,kh=101,zh=102,Vh=103,Gh=104,Hh=200,Wh=201,Xh=202,qh=203,da=204,pa=205,Yh=206,Zh=207,Jh=208,Kh=209,$h=210,jh=211,Qh=212,tu=213,eu=214,ma=0,ga=1,_a=2,Ui=3,xa=4,va=5,ya=6,Ma=7,Wl=0,nu=1,iu=2,Sn=0,Xl=1,ql=2,Yl=3,Zl=4,Jl=5,Kl=6,$l=7,bl="attached",su="detached",jl=300,vi=301,Wi=302,ka=303,za=304,br=306,Ni=1e3,on=1001,ds=1002,Ie=1003,ru=1004;var wr=1005;var Ue=1006,Va=1007;var yi=1008;var Ze=1009,Ql=1010,tc=1011,Rs=1012,Ga=1013,bn=1014,un=1015,Fn=1016,Ha=1017,Wa=1018,Ps=1020,ec=35902,nc=35899,ic=1021,sc=1022,en=1023,Ln=1026,Mi=1027,rc=1028,Xa=1029,Si=1030,qa=1031;var Ya=1033,Ar=33776,Tr=33777,Er=33778,Cr=33779,Za=35840,Ja=35841,Ka=35842,$a=35843,ja=36196,Qa=37492,to=37496,eo=37488,no=37489,Rr=37490,io=37491,so=37808,ro=37809,ao=37810,oo=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,vo=36492,yo=36494,Mo=36495,So=36283,bo=36284,Pr=36285,wo=36286;var Ys=2300,Sa=2301,fa=2302,wl=2303,Al=2400,Tl=2401,El=2402,au=2500;var ou=3200;var Ao=0,lu=1,Fe="",ne="srgb",Zs="srgb-linear",Js="linear",te="srgb";var Ii=7680;var Cl=519,cu=512,hu=513,uu=514,To=515,fu=516,du=517,Eo=518,pu=519,Rl=35044;var ac="300 es",vn=2e3,ps=2001;function Vf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mu(){let i=Ks("canvas");return i.style.display="block",i}var sh={},ms=null;function oc(...i){let t="THREE."+i.shift();ms?ms("log",t,...i):console.log(t,...i)}function gu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pt(...i){i=gu(i);let t="THREE."+i.shift();if(ms)ms("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Nt(...i){i=gu(i);let t="THREE."+i.shift();if(ms)ms("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Di(...i){let t=i.join(" ");t in sh||(sh[t]=!0,Pt(...i))}function _u(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xu={[ma]:ga,[_a]:ya,[xa]:Ma,[Ui]:va,[ga]:ma,[ya]:_a,[Ma]:xa,[va]:Ui},yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rh=1234567,Xs=Math.PI/180,Fi=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function lc(i,t){return(i%t+t)%t}function Hf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Wf(i,t,e){return i!==t?(e-i)/(t-i):0}function qs(i,t,e){return(1-e)*i+e*t}function Xf(i,t,e,n){return qs(i,t,1-Math.exp(-e*n))}function qf(i,t=1){return t-Math.abs(lc(i,t*2)-t)}function Yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kf(i,t){return i+Math.random()*(t-i)}function $f(i){return i*(.5-Math.random())}function jf(i){i!==void 0&&(rh=i);let t=rh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qf(i){return i*Xs}function td(i){return i*Fi}function ed(i){return(i&i-1)===0&&i!==0}function nd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function id(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),u=a((t+n)/2),c=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*c,l*f,o*h);break;case"YZY":i.set(l*f,o*u,l*c,o*h);break;case"ZXZ":i.set(l*c,l*f,o*u,o*h);break;case"XZX":i.set(o*u,l*m,l*d,o*h);break;case"YXY":i.set(l*d,o*u,l*m,o*h);break;case"ZYZ":i.set(l*m,l*d,o*u,o*h);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ir={DEG2RAD:Xs,RAD2DEG:Fi,generateUUID:bi,clamp:qt,euclideanModulo:lc,mapLinear:Hf,inverseLerp:Wf,lerp:qs,damp:Xf,pingpong:qf,smoothstep:Yf,smootherstep:Zf,randInt:Jf,randFloat:Kf,randFloatSpread:$f,seededRandom:jf,degToRad:Qf,radToDeg:td,isPowerOfTwo:ed,ceilPowerOfTwo:nd,floorPowerOfTwo:id,setQuaternionFromProperEuler:sd,normalize:He,denormalize:us},dc=class dc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dc.prototype.isVector2=!0;var Dt=dc,Ne=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],u=n[s+2],c=n[s+3],f=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(c!==_||l!==f||h!==d||u!==m){let p=l*f+h*d+u*m+c*_;p<0&&(f=-f,d=-d,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){let b=Math.acos(p),M=Math.sin(b);g=Math.sin(g*b)/M,o=Math.sin(o*b)/M,l=l*g+f*o,h=h*g+d*o,u=u*g+m*o,c=c*g+_*o}else{l=l*g+f*o,h=h*g+d*o,u=u*g+m*o,c=c*g+_*o;let b=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=b,h*=b,u*=b,c*=b}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],h=n[s+2],u=n[s+3],c=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+u*c+l*d-h*f,t[e+1]=l*m+u*f+h*c-o*d,t[e+2]=h*m+u*d+o*f-l*c,t[e+3]=u*m-o*c-l*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(s/2),c=o(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*u*c+h*d*m,this._y=h*d*c-f*u*m,this._z=h*u*m+f*d*c,this._w=h*u*c-f*d*m;break;case"YXZ":this._x=f*u*c+h*d*m,this._y=h*d*c-f*u*m,this._z=h*u*m-f*d*c,this._w=h*u*c+f*d*m;break;case"ZXY":this._x=f*u*c-h*d*m,this._y=h*d*c+f*u*m,this._z=h*u*m+f*d*c,this._w=h*u*c-f*d*m;break;case"ZYX":this._x=f*u*c-h*d*m,this._y=h*d*c+f*u*m,this._z=h*u*m-f*d*c,this._w=h*u*c+f*d*m;break;case"YZX":this._x=f*u*c+h*d*m,this._y=h*d*c+f*u*m,this._z=h*u*m-f*d*c,this._w=h*u*c-f*d*m;break;case"XZY":this._x=f*u*c-h*d*m,this._y=h*d*c-f*u*m,this._z=h*u*m+f*d*c,this._w=h*u*c+f*d*m;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],u=e[6],c=e[10],f=n+o+c;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>o&&n>c){let d=2*Math.sqrt(1+n-o-c);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>c){let d=2*Math.sqrt(1+o-n-c);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+c-n-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*l,this._y=s*u+a*l+r*o-n*h,this._z=r*u+a*h+n*l-s*o,this._w=a*u-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let h=Math.acos(o),u=Math.sin(h);l=Math.sin(l*h)/u,e=Math.sin(e*h)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pc=class pc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ah.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),c=2*(r*n-a*e);return this.x=e+l*h+a*c-o*u,this.y=n+l*u+o*h-r*c,this.z=s+l*c+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qo.copy(this).projectOnVector(t),this.sub(Qo)}reflect(t){return this.sub(Qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pc.prototype.isVector3=!0;var L=pc,Qo=new L,ah=new Ne,mc=class mc{constructor(t,e,n,s,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],u=n[4],c=n[7],f=n[2],d=n[5],m=n[8],_=s[0],p=s[3],g=s[6],b=s[1],M=s[4],x=s[7],w=s[2],A=s[5],C=s[8];return r[0]=a*_+o*b+l*w,r[3]=a*p+o*M+l*A,r[6]=a*g+o*x+l*C,r[1]=h*_+u*b+c*w,r[4]=h*p+u*M+c*A,r[7]=h*g+u*x+c*C,r[2]=f*_+d*b+m*w,r[5]=f*p+d*M+m*A,r[8]=f*g+d*x+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*l+s*r*h-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=u*a-o*h,f=o*l-u*r,d=h*r-a*l,m=e*c+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=c*_,t[1]=(s*h-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*l-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tl.makeScale(t,e)),this}rotate(t){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tl.makeRotation(-t)),this}translate(t,e){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};mc.prototype.isMatrix3=!0;var Bt=mc,tl=new Bt,oh=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lh=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rd(){let i={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fe?Js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zs]:{primaries:t,whitePoint:n,transfer:Js,toXYZ:oh,fromXYZ:lh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ne},outputColorSpaceConfig:{drawingBufferColorSpace:ne}},[ne]:{primaries:t,whitePoint:n,transfer:te,toXYZ:oh,fromXYZ:lh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ne}}}),i}var Zt=rd();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qi,ba=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qi===void 0&&(Qi=Ks("canvas")),Qi.width=t.width,Qi.height=t.height;let s=Qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ad=0,gs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(el(s[a].image)):r.push(el(s[a]))}else r=el(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function el(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var od=0,nl=new L,ze=class i extends yn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=on,s=on,r=Ue,a=yi,o=en,l=Ze,h=i.DEFAULT_ANISOTROPY,u=Fe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=bi(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ni:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case ds:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ni:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case ds:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=jl;ze.DEFAULT_ANISOTROPY=1;var gc=class gc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],u=l[4],c=l[8],f=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(c-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+_)<.1&&Math.abs(m+p)<.1&&Math.abs(h+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(h+1)/2,x=(d+1)/2,w=(g+1)/2,A=(u+f)/4,C=(c+_)/4,y=(m+p)/4;return M>x&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=C/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=y/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=y/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-m)*(p-m)+(c-_)*(c-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(c-_)/b,this.z=(f-u)/b,this.w=Math.acos((h+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gc.prototype.isVector4=!0;var ie=gc,wa=class extends yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ze(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new gs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends wa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$s=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ba=class Ba{constructor(t,e,n,s,r,a,o,l,h,u,c,f,d,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,u,c,f,d,m,_,p)}set(t,e,n,s,r,a,o,l,h,u,c,f,d,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=h,g[6]=u,g[10]=c,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ba().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let f=a*u,d=a*c,m=o*u,_=o*c;e[0]=l*u,e[4]=-l*c,e[8]=h,e[1]=d+m*h,e[5]=f-_*h,e[9]=-o*l,e[2]=_-f*h,e[6]=m+d*h,e[10]=a*l}else if(t.order==="YXZ"){let f=l*u,d=l*c,m=h*u,_=h*c;e[0]=f+_*o,e[4]=m*o-d,e[8]=a*h,e[1]=a*c,e[5]=a*u,e[9]=-o,e[2]=d*o-m,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*u,d=l*c,m=h*u,_=h*c;e[0]=f-_*o,e[4]=-a*c,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*u,d=a*c,m=o*u,_=o*c;e[0]=l*u,e[4]=m*h-d,e[8]=f*h+_,e[1]=l*c,e[5]=_*h+f,e[9]=d*h-m,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*h,m=o*l,_=o*h;e[0]=l*u,e[4]=_-f*c,e[8]=m*c+d,e[1]=c,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=d*c+m,e[10]=f-_*c}else if(t.order==="XZY"){let f=a*l,d=a*h,m=o*l,_=o*h;e[0]=l*u,e[4]=-c,e[8]=h*u,e[1]=f*c+_,e[5]=a*u,e[9]=d*c-m,e[2]=m*c-d,e[6]=o*u,e[10]=_*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ld,t,cd)}lookAt(t,e,n){let s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ii.crossVectors(n,$e),ii.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ii.crossVectors(n,$e)),ii.normalize(),Hr.crossVectors($e,ii),s[0]=ii.x,s[4]=Hr.x,s[8]=$e.x,s[1]=ii.y,s[5]=Hr.y,s[9]=$e.y,s[2]=ii.z,s[6]=Hr.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],u=n[1],c=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],b=n[3],M=n[7],x=n[11],w=n[15],A=s[0],C=s[4],y=s[8],T=s[12],R=s[1],P=s[5],I=s[9],V=s[13],W=s[2],N=s[6],G=s[10],X=s[14],$=s[3],tt=s[7],rt=s[11],at=s[15];return r[0]=a*A+o*R+l*W+h*$,r[4]=a*C+o*P+l*N+h*tt,r[8]=a*y+o*I+l*G+h*rt,r[12]=a*T+o*V+l*X+h*at,r[1]=u*A+c*R+f*W+d*$,r[5]=u*C+c*P+f*N+d*tt,r[9]=u*y+c*I+f*G+d*rt,r[13]=u*T+c*V+f*X+d*at,r[2]=m*A+_*R+p*W+g*$,r[6]=m*C+_*P+p*N+g*tt,r[10]=m*y+_*I+p*G+g*rt,r[14]=m*T+_*V+p*X+g*at,r[3]=b*A+M*R+x*W+w*$,r[7]=b*C+M*P+x*N+w*tt,r[11]=b*y+M*I+x*G+w*rt,r[15]=b*T+M*V+x*X+w*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],u=t[2],c=t[6],f=t[10],d=t[14],m=t[3],_=t[7],p=t[11],g=t[15],b=l*d-h*f,M=o*d-h*c,x=o*f-l*c,w=a*d-h*u,A=a*f-l*u,C=a*c-o*u;return e*(_*b-p*M+g*x)-n*(m*b-p*w+g*A)+s*(m*M-_*w+g*C)-r*(m*x-_*A+p*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],h=t[6],u=t[10];return e*(a*u-o*h)-n*(r*u-o*l)+s*(r*h-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=t[9],f=t[10],d=t[11],m=t[12],_=t[13],p=t[14],g=t[15],b=e*o-n*a,M=e*l-s*a,x=e*h-r*a,w=n*l-s*o,A=n*h-r*o,C=s*h-r*l,y=u*_-c*m,T=u*p-f*m,R=u*g-d*m,P=c*p-f*_,I=c*g-d*_,V=f*g-d*p,W=b*V-M*I+x*P+w*R-A*T+C*y;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/W;return t[0]=(o*V-l*I+h*P)*N,t[1]=(s*I-n*V-r*P)*N,t[2]=(_*C-p*A+g*w)*N,t[3]=(f*A-c*C-d*w)*N,t[4]=(l*R-a*V-h*T)*N,t[5]=(e*V-s*R+r*T)*N,t[6]=(p*x-m*C-g*M)*N,t[7]=(u*C-f*x+d*M)*N,t[8]=(a*I-o*R+h*y)*N,t[9]=(n*R-e*I-r*y)*N,t[10]=(m*A-_*x+g*b)*N,t[11]=(c*x-u*A-d*b)*N,t[12]=(o*T-a*P-l*y)*N,t[13]=(e*P-n*T+s*y)*N,t[14]=(_*M-m*w-p*b)*N,t[15]=(u*w-c*M+f*b)*N,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,u*o+n,u*l-s*a,0,h*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,u=a+a,c=o+o,f=r*h,d=r*u,m=r*c,_=a*u,p=a*c,g=o*c,b=l*h,M=l*u,x=l*c,w=n.x,A=n.y,C=n.z;return s[0]=(1-(_+g))*w,s[1]=(d+x)*w,s[2]=(m-M)*w,s[3]=0,s[4]=(d-x)*A,s[5]=(1-(f+g))*A,s[6]=(p+b)*A,s[7]=0,s[8]=(m+M)*C,s[9]=(p-b)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ts.set(s[0],s[1],s[2]).length(),o=ts.set(s[4],s[5],s[6]).length(),l=ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gn.copy(this);let h=1/a,u=1/o,c=1/l;return gn.elements[0]*=h,gn.elements[1]*=h,gn.elements[2]*=h,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=c,gn.elements[9]*=c,gn.elements[10]*=c,e.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=vn,l=!1){let h=this.elements,u=2*r/(e-t),c=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===vn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ps)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=c,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn,l=!1){let h=this.elements,u=2/(e-t),c=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===vn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===ps)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=c,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=m,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ba.prototype.isMatrix4=!0;var Ht=Ba,ts=new L,gn=new Ht,ld=new L(0,0,0),cd=new L(1,1,1),ii=new L,Hr=new L,$e=new L,ch=new Ht,hh=new Ne,cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],u=s[9],c=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ch,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hh.setFromEuler(this),this.setFromQuaternion(hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hd=0,uh=new L,es=new Ne,Vn=new Ht,Wr=new L,ks=new L,ud=new L,fd=new Ne,fh=new L(1,0,0),dh=new L(0,1,0),ph=new L(0,0,1),mh={type:"added"},dd={type:"removed"},ns={type:"childadded",child:null},il={type:"childremoved",child:null},fe=class i extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new cn,n=new Ne,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Bt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(fh,t)}rotateY(t){return this.rotateOnAxis(dh,t)}rotateZ(t){return this.rotateOnAxis(ph,t)}translateOnAxis(t,e){return uh.copy(t).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fh,t)}translateY(t){return this.translateOnAxis(dh,t)}translateZ(t){return this.translateOnAxis(ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wr.copy(t):Wr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(ks,Wr,this.up):Vn.lookAt(Wr,ks,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Vn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mh),ns.child=t,this.dispatchEvent(ns),ns.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dd),il.child=t,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mh),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let c=l[h];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),c=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};fe.DEFAULT_UP=new L(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=class extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},pd={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(h,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],f=u.position.distanceTo(c.position),d=.02,m=.005;h.inputState.pinching&&f>d+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function sl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=lc(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=sl(a,r,t+1/3),this.g=sl(a,r,t),this.b=sl(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=ne){function n(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ne){let n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ne){return Zt.workingToColorSpace(ke.copy(this),t),Math.round(qt(ke.r*255,0,255))*65536+Math.round(qt(ke.g*255,0,255))*256+Math.round(qt(ke.b*255,0,255))}getHexString(t=ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,h,u=(o+a)/2;if(o===a)l=0,h=0;else{let c=a-o;switch(h=u<=.5?c/(a+o):c/(2-a-o),a){case n:l=(s-r)/c+(s<r?6:0);break;case s:l=(r-n)/c+2;break;case r:l=(n-s)/c+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=ne){Zt.workingToColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Xr);let n=qs(si.h,Xr.h,e),s=qs(si.s,Xr.s,e),r=qs(si.l,Xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new zt;zt.NAMES=vu;var Qs=class extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},_n=new L,Gn=new L,rl=new L,Hn=new L,is=new L,ss=new L,gh=new L,al=new L,ol=new L,ll=new L,cl=new ie,hl=new ie,ul=new ie,ci=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Gn.subVectors(n,e),rl.subVectors(t,e);let a=_n.dot(_n),o=_n.dot(Gn),l=_n.dot(rl),h=Gn.dot(Gn),u=Gn.dot(rl),c=a*h-o*o;if(c===0)return r.set(0,0,0),null;let f=1/c,d=(h*l-o*u)*f,m=(a*u-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,n),ul.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(cl,r.x),a.addScaledVector(hl,r.y),a.addScaledVector(ul,r.z),a}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Gn.subVectors(t,e),_n.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),_n.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;is.subVectors(s,n),ss.subVectors(r,n),al.subVectors(t,n);let l=is.dot(al),h=ss.dot(al);if(l<=0&&h<=0)return e.copy(n);ol.subVectors(t,s);let u=is.dot(ol),c=ss.dot(ol);if(u>=0&&c<=u)return e.copy(s);let f=l*c-u*h;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(is,a);ll.subVectors(t,r);let d=is.dot(ll),m=ss.dot(ll);if(m>=0&&d<=m)return e.copy(r);let _=d*h-l*m;if(_<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(n).addScaledVector(ss,o);let p=u*m-d*c;if(p<=0&&c-u>=0&&d-m>=0)return gh.subVectors(r,s),o=(c-u)/(c-u+(d-m)),e.copy(s).addScaledVector(gh,o);let g=1/(p+_+f);return a=_*g,o=f*g,e.copy(n).addScaledVector(is,a).addScaledVector(ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Yr.subVectors(this.max,zs),rs.subVectors(t.a,zs),as.subVectors(t.b,zs),os.subVectors(t.c,zs),ri.subVectors(as,rs),ai.subVectors(os,as),Ei.subVectors(rs,os);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ei.z,Ei.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ei.z,0,-Ei.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ei.y,Ei.x,0];return!fl(e,rs,as,os,Yr)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,rs,as,os,Yr))?!1:(Zr.crossVectors(ri,ai),e=[Zr.x,Zr.y,Zr.z],fl(e,rs,as,os,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wn=[new L,new L,new L,new L,new L,new L,new L,new L],xn=new L,qr=new Jn,rs=new L,as=new L,os=new L,ri=new L,ai=new L,Ei=new L,zs=new L,Yr=new L,Zr=new L,Ci=new L;function fl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),h=e.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var Me=new L,Jr=new Dt,md=0,jt=class extends yn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:md++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rl,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var tr=class extends jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var er=class extends jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends jt{constructor(t,e,n){super(new Float32Array(t),e,n)}},gd=new Jn,Vs=new L,dl=new L,ui=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(dl)),this.expandByPoint(Vs.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},_d=0,rn=new Ht,pl=new fe,ls=new L,je=new Jn,Gs=new Jn,Pe=new L,De=class i extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vf(t)?er:tr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(je.min,Gs.min),je.expandByPoint(Pe),Pe.addVectors(je.max,Gs.max),je.expandByPoint(Pe)):(je.expandByPoint(Gs.min),je.expandByPoint(Gs.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Pe.fromBufferAttribute(o,h),l&&(ls.fromBufferAttribute(t,h),Pe.add(ls)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new L,l[y]=new L;let h=new L,u=new L,c=new L,f=new Dt,d=new Dt,m=new Dt,_=new L,p=new L;function g(y,T,R){h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,T),c.fromBufferAttribute(n,R),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,R),u.sub(h),c.sub(h),d.sub(f),m.sub(f);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(c,-d.y).multiplyScalar(P),p.copy(c).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(P),o[y].add(_),o[T].add(_),o[R].add(_),l[y].add(p),l[T].add(p),l[R].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let y=0,T=b.length;y<T;++y){let R=b[y],P=R.start,I=R.count;for(let V=P,W=P+I;V<W;V+=3)g(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let M=new L,x=new L,w=new L,A=new L;function C(y){w.fromBufferAttribute(s,y),A.copy(w);let T=o[y];M.copy(T),M.sub(w.multiplyScalar(w.dot(T))).normalize(),x.crossVectors(A,T);let P=x.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,P)}for(let y=0,T=b.length;y<T;++y){let R=b[y],P=R.start,I=R.count;for(let V=P,W=P+I;V<W;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,h=new L,u=new L,c=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,p),o.add(u),l.add(u),h.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,c=o.normalized,f=new h.constructor(l.length*u),d=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let g=0;g<u;g++)f[m++]=h[d++]}return new jt(f,u,c)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let u=0,c=h.length;u<c;u++){let f=h[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let c=0,f=h.length;c<f;c++){let d=h[c];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],c=r[h];for(let f=0,d=c.length;f<d;f++)u.push(c[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var xd=0,fi=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Li,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=pa,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Xn=new L,ml=new L,Kr=new L,oi=new L,gl=new L,$r=new L,_l=new L,Oi=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ml.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(ml);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Kr),o=oi.dot(this.direction),l=-oi.dot(Kr),h=oi.lengthSq(),u=Math.abs(1-a*a),c,f,d,m;if(u>0)if(c=a*l-o,f=a*o-l,m=r*u,c>=0)if(f>=-m)if(f<=m){let _=1/u;c*=_,f*=_,d=c*(c+a*f+2*o)+f*(a*c+f+2*l)+h}else f=r,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*l)+h;else f=-r,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*l)+h;else f<=-m?(c=Math.max(0,-(-a*r+o)),f=c>0?-r:Math.min(Math.max(-r,-l),r),d=-c*c+f*(f+2*l)+h):f<=m?(c=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+h):(c=Math.max(0,-(a*r+o)),f=c>0?r:Math.min(Math.max(-r,-l),r),d=-c*c+f*(f+2*l)+h);else f=a>0?-r:r,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(ml).addScaledVector(Kr,f),d}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),c>=0?(o=(t.min.z-f.z)*c,l=(t.max.z-f.z)*c):(o=(t.max.z-f.z)*c,l=(t.min.z-f.z)*c),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){gl.subVectors(e,t),$r.subVectors(n,t),_l.crossVectors(gl,$r);let a=this.direction.dot(_l),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);let l=o*this.direction.dot($r.crossVectors(oi,$r));if(l<0)return null;let h=o*this.direction.dot(gl.cross(oi));if(h<0||l+h>a)return null;let u=-o*oi.dot(_l);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bi=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_h=new Ht,Ri=new Oi,jr=new ui,xh=new L,Qr=new L,ta=new L,ea=new L,xl=new L,na=new L,vh=new L,ia=new L,we=class extends fe{constructor(t=new De,e=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){na.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=o[l],c=r[l];u!==0&&(xl.fromBufferAttribute(c,t),a?na.addScaledVector(xl,u):na.addScaledVector(xl.sub(e),u))}e.add(na)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(jr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(jr,xh)===null||Ri.origin.distanceToSquared(xh)>(t.far-t.near)**2))&&(_h.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(_h),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=a[p.materialIndex],b=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=b,w=M;x<w;x+=3){let A=o.getX(x),C=o.getX(x+1),y=o.getX(x+2);s=sa(this,g,t,n,h,u,c,A,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let b=o.getX(p),M=o.getX(p+1),x=o.getX(p+2);s=sa(this,a,t,n,h,u,c,b,M,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=a[p.materialIndex],b=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=b,w=M;x<w;x+=3){let A=x,C=x+1,y=x+2;s=sa(this,g,t,n,h,u,c,A,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let b=p,M=p+1,x=p+2;s=sa(this,a,t,n,h,u,c,b,M,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function vd(i,t,e,n,s,r,a,o){let l;if(t.side===We?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Zn,o),l===null)return null;ia.copy(o),ia.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ia);return h<e.near||h>e.far?null:{distance:h,point:ia.clone(),object:i}}function sa(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,Qr),i.getVertexPosition(l,ta),i.getVertexPosition(h,ea);let u=vd(i,t,e,n,Qr,ta,ea,vh);if(u){let c=new L;ci.getBarycoord(vh,Qr,ta,ea,c),s&&(u.uv=ci.getInterpolatedAttribute(s,o,l,h,c,new Dt)),r&&(u.uv1=ci.getInterpolatedAttribute(r,o,l,h,c,new Dt)),a&&(u.normal=ci.getInterpolatedAttribute(a,o,l,h,c,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c:h,normal:new L,materialIndex:0};ci.getNormal(Qr,ta,ea,f.normal),u.face=f,u.barycoord=c}return u}var Hs=new ie,yh=new ie,Mh=new ie,yd=new ie,Sh=new Ht,ra=new L,vl=new ui,bh=new Ht,yl=new Oi,nr=class extends we{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bl,this.bindMatrix=new Ht,this.bindMatrixInverse=new Ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ra),this.boundingBox.expandByPoint(ra)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ra),this.boundingSphere.expandByPoint(ra)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(s),t.ray.intersectsSphere(vl)!==!1&&(bh.copy(s).invert(),yl.copy(t.ray).applyMatrix4(bh),!(this.boundingBox!==null&&yl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,yl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ie,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===bl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===su?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;yh.fromBufferAttribute(s.attributes.skinIndex,t),Mh.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(Hs.copy(e),e.set(0,0,0,0)):(Hs.set(...e,1),e.set(0,0,0)),Hs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Mh.getComponent(r);if(a!==0){let o=yh.getComponent(r);Sh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(yd.copy(Hs).applyMatrix4(Sh),a)}}return e.isVector4&&(e.w=Hs.w),e.applyMatrix4(this.bindMatrixInverse)}},xs=class extends fe{constructor(){super(),this.isBone=!0,this.type="Bone"}},ir=class extends ze{constructor(t=null,e=1,n=1,s,r,a,o,l,h=Ie,u=Ie,c,f){super(null,a,o,l,h,u,s,r,c,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wh=new Ht,Md=new Ht,sr=class i{constructor(t=[],e=[]){this.uuid=bi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Pt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ht)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ht;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:Md;wh.multiplyMatrices(o,e[r]),wh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new ir(e,t,t,en,un);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],a=e[r];a===void 0&&(Pt("Skeleton: No bone found with UUID:",r),a=new xs),this.bones.push(a),this.boneInverses.push(new Ht().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let a=e[s];t.bones.push(a.uuid);let o=n[s];t.boneInverses.push(o.toArray())}return t}};var Ml=new L,Sd=new L,bd=new Bt,an=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(Sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bd.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new ui,wd=new Dt(.5,.5),aa=new L,vs=class{constructor(t=new an,e=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],h=r[3],u=r[4],c=r[5],f=r[6],d=r[7],m=r[8],_=r[9],p=r[10],g=r[11],b=r[12],M=r[13],x=r[14],w=r[15];if(s[0].setComponents(h-a,d-u,g-m,w-b).normalize(),s[1].setComponents(h+a,d+u,g+m,w+b).normalize(),s[2].setComponents(h+o,d+c,g+_,w+M).normalize(),s[3].setComponents(h-o,d-c,g-_,w-M).normalize(),n)s[4].setComponents(l,f,p,x).normalize(),s[5].setComponents(h-l,d-f,g-p,w-x).normalize();else if(s[4].setComponents(h-l,d-f,g-p,w-x).normalize(),e===vn)s[5].setComponents(h+l,d+f,g+p,w+x).normalize();else if(e===ps)s[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);let e=wd.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(aa.x=s.normal.x>0?t.max.x:t.min.x,aa.y=s.normal.y>0?t.max.y:t.min.y,aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var rr=class extends ze{constructor(t=[],e=vi,n,s,r,a,o,l,h,u){super(t,e,n,s,r,a,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Kn=class extends ze{constructor(t,e,n=bn,s,r,a,o=Ie,l=Ie,h,u=Ln,c=1){if(u!==Ln&&u!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:c};super(f,s,r,a,o,l,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ta=class extends Kn{constructor(t,e=bn,n=vi,s,r,a=Ie,o=Ie,l,h=Ln){let u={width:t,height:t,depth:1},c=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,h),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ar=class extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},di=class i extends De{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],c=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(c,2));function m(_,p,g,b,M,x,w,A,C,y,T){let R=x/C,P=w/y,I=x/2,V=w/2,W=A/2,N=C+1,G=y+1,X=0,$=0,tt=new L;for(let rt=0;rt<G;rt++){let at=rt*P-V;for(let ct=0;ct<N;ct++){let kt=ct*R-I;tt[_]=kt*b,tt[p]=at*M,tt[g]=W,h.push(tt.x,tt.y,tt.z),tt[_]=0,tt[p]=0,tt[g]=A>0?1:-1,u.push(tt.x,tt.y,tt.z),c.push(ct/C),c.push(1-rt/y),X+=1}}for(let rt=0;rt<y;rt++)for(let at=0;at<C;at++){let ct=f+at+N*rt,kt=f+at+N*(rt+1),Jt=f+(at+1)+N*(rt+1),Ft=f+(at+1)+N*rt;l.push(ct,kt,Ft),l.push(kt,Jt,Ft),$+=6}o.addGroup(d,$,T),d+=$,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},or=class i extends De{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],h=[],u=e/2,c=Math.PI/2*t,f=e,d=2*c+f,m=n*2+r,_=s+1,p=new L,g=new L;for(let b=0;b<=m;b++){let M=0,x=0,w=0,A=0;if(b<=n){let T=b/n,R=T*Math.PI/2;x=-u-t*Math.cos(R),w=t*Math.sin(R),A=-t*Math.cos(R),M=T*c}else if(b<=n+r){let T=(b-n)/r;x=-u+T*e,w=t,A=0,M=c+T*f}else{let T=(b-n-r)/n,R=T*Math.PI/2;x=u+t*Math.sin(R),w=t*Math.cos(R),A=t*Math.sin(R),M=c+f+T*c}let C=Math.max(0,Math.min(1,M/d)),y=0;b===0?y=.5/s:b===m&&(y=-.5/s);for(let T=0;T<=s;T++){let R=T/s,P=R*Math.PI*2,I=Math.sin(P),V=Math.cos(P);g.x=-w*V,g.y=x,g.z=w*I,o.push(g.x,g.y,g.z),p.set(-w*V,A,w*I),p.normalize(),l.push(p.x,p.y,p.z),h.push(R+y,C)}if(b>0){let T=(b-1)*_;for(let R=0;R<s;R++){let P=T+R,I=T+R+1,V=b*_+R,W=b*_+R+1;a.push(P,I,V),a.push(I,W,V)}}}this.setIndex(a),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var ys=class i extends De{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],c=[],f=[],d=[],m=0,_=[],p=n/2,g=0;b(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(d,2));function b(){let x=new L,w=new L,A=0,C=(e-t)/n;for(let y=0;y<=r;y++){let T=[],R=y/r,P=R*(e-t)+t;for(let I=0;I<=s;I++){let V=I/s,W=V*l+o,N=Math.sin(W),G=Math.cos(W);w.x=P*N,w.y=-R*n+p,w.z=P*G,c.push(w.x,w.y,w.z),x.set(N,C,G).normalize(),f.push(x.x,x.y,x.z),d.push(V,1-R),T.push(m++)}_.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let R=_[T][y],P=_[T+1][y],I=_[T+1][y+1],V=_[T][y+1];(t>0||T!==0)&&(u.push(R,P,V),A+=3),(e>0||T!==r-1)&&(u.push(P,I,V),A+=3)}h.addGroup(g,A,0),g+=A}function M(x){let w=m,A=new Dt,C=new L,y=0,T=x===!0?t:e,R=x===!0?1:-1;for(let I=1;I<=s;I++)c.push(0,p*R,0),f.push(0,R,0),d.push(.5,.5),m++;let P=m;for(let I=0;I<=s;I++){let W=I/s*l+o,N=Math.cos(W),G=Math.sin(W);C.x=T*G,C.y=p*R,C.z=T*N,c.push(C.x,C.y,C.z),f.push(0,R,0),A.x=N*.5+.5,A.y=G*.5*R+.5,d.push(A.x,A.y),m++}for(let I=0;I<s;I++){let V=w+I,W=P+I;x===!0?u.push(W,W+1,V):u.push(W+1,W,V),y+=3}h.addGroup(g,y,x===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lr=class i extends ys{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};function Ad(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=yu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h;if(n&&(r=Pd(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,c=l;for(let f=e;f<s;f+=e){let d=i[f],m=i[f+1];d<o&&(o=d),m<l&&(l=m),d>u&&(u=d),m>c&&(c=m)}h=Math.max(u-o,c-l),h=h!==0?32767/h:0}return cr(r,a,e,o,l,h,0),a}function yu(i,t,e,n,s){let r;if(s===Vd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ah(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ah(a/n|0,i[a],i[a+1],r);return r&&Ms(r,r.next)&&(ur(r),r=r.next),r}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ms(e,e.next)||ue(e.prev,e,e.next)===0)){if(ur(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Nd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,h=i.next;if(r?Ed(i,n,s,r):Td(i)){t.push(l.i,i.i,h.i),ur(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=Cd(ki(i),t),cr(i,t,e,n,s,r,2)):a===2&&Rd(i,t,e,n,s,r):cr(ki(i),t,e,n,s,r,1);break}}}function Td(i){let t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,h=n.y,u=Math.min(s,r,a),c=Math.min(o,l,h),f=Math.max(s,r,a),d=Math.max(o,l,h),m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=c&&m.y<=d&&Ws(s,o,r,l,a,h,m.x,m.y)&&ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ed(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ue(s,r,a)>=0)return!1;let o=s.x,l=r.x,h=a.x,u=s.y,c=r.y,f=a.y,d=Math.min(o,l,h),m=Math.min(u,c,f),_=Math.max(o,l,h),p=Math.max(u,c,f),g=Pl(d,m,t,e,n),b=Pl(_,p,t,e,n),M=i.prevZ,x=i.nextZ;for(;M&&M.z>=g&&x&&x.z<=b;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Ws(o,u,l,c,h,f,M.x,M.y)&&ue(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==a&&Ws(o,u,l,c,h,f,x.x,x.y)&&ue(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=g;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Ws(o,u,l,c,h,f,M.x,M.y)&&ue(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=b;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==a&&Ws(o,u,l,c,h,f,x.x,x.y)&&ue(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Cd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ms(n,s)&&Su(n,e,e.next,s)&&hr(n,s)&&hr(s,n)&&(t.push(n.i,e.i,s.i),ur(e),ur(e.next),e=i=s),e=e.next}while(e!==i);return ki(e)}function Rd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bd(a,o)){let l=bu(a,o);a=ki(a,a.next),l=ki(l,l.next),cr(a,t,e,n,s,r,0),cr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Pd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,h=yu(i,o,l,n,!1);h===h.next&&(h.steiner=!0),s.push(Od(h))}s.sort(Id);for(let r=0;r<s.length;r++)e=Dd(s[r],e);return e}function Id(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Dd(i,t){let e=Ld(i,t);if(!e)return t;let n=bu(e,i);return ki(n,n.next),ki(e,e.next)}function Ld(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ms(i,e))return e;do{if(Ms(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let c=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(c<=n&&c>r&&(r=c,a=e.x<e.next.x?e:e.next,c===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,h=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Mu(s<h?n:r,s,l,h,s<h?r:n,s,e.x,e.y)){let c=Math.abs(s-e.y)/(n-e.x);hr(e,i)&&(c<u||c===u&&(e.x>a.x||e.x===a.x&&Ud(a,e)))&&(a=e,u=c)}e=e.next}while(e!==o);return a}function Ud(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function Nd(i,t,e,n){let s=i;do s.z===0&&(s.z=Pl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fd(s)}function Fd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let h=0;h<e&&(o++,a=a.nextZ,!!a);h++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Pl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Od(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Mu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ws(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Mu(i,t,e,n,s,r,a,o)}function Bd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!kd(i,t)&&(hr(i,t)&&hr(t,i)&&zd(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||Ms(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ms(i,t){return i.x===t.x&&i.y===t.y}function Su(i,t,e,n){let s=la(ue(i,t,e)),r=la(ue(i,t,n)),a=la(ue(e,n,i)),o=la(ue(e,n,t));return!!(s!==r&&a!==o||s===0&&oa(i,e,t)||r===0&&oa(i,n,t)||a===0&&oa(e,i,n)||o===0&&oa(e,t,n))}function oa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function la(i){return i>0?1:i<0?-1:0}function kd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Su(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function hr(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function zd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bu(i,t){let e=Il(i.i,i.x,i.y),n=Il(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ah(i,t,e,n){let s=Il(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ur(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Il(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Dl=class{static triangulate(t,e,n=2){return Ad(t,e,n)}},Ss=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Th(t),Eh(n,t);let a=t.length;e.forEach(Th);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Eh(n,e[l]);let o=Dl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Th(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Eh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var fr=class i extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,u=l+1,c=t/o,f=e/l,d=[],m=[],_=[],p=[];for(let g=0;g<u;g++){let b=g*f-a;for(let M=0;M<h;M++){let x=M*c-r;m.push(x,-b,0),_.push(0,0,1),p.push(M/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){let M=b+h*g,x=b+h*(g+1),w=b+1+h*(g+1),A=b+1+h*g;d.push(M,x,A),d.push(x,w,A)}this.setIndex(d),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var dr=class i extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),h=0,u=[],c=new L,f=new L,d=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){let b=[],M=g/n,x=a+M*o,w=t*Math.cos(x),A=Math.sqrt(t*t-w*w),C=0;g===0&&a===0?C=.5/e:g===n&&l===Math.PI&&(C=-.5/e);for(let y=0;y<=e;y++){let T=y/e,R=s+T*r;c.x=-A*Math.cos(R),c.y=w,c.z=A*Math.sin(R),m.push(c.x,c.y,c.z),f.copy(c).normalize(),_.push(f.x,f.y,f.z),p.push(T+C,1-M),b.push(h++)}u.push(b)}for(let g=0;g<n;g++)for(let b=0;b<e;b++){let M=u[g][b+1],x=u[g][b],w=u[g+1][b],A=u[g+1][b+1];(g!==0||a>0)&&d.push(M,x,A),(g!==n-1||l<Math.PI)&&d.push(x,w,A)}this.setIndex(d),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Xi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ch(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ch(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=Xi(i[e]);for(let s in n)t[s]=n[s]}return t}function Ch(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var wu={clone:Xi,merge:Ve},Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Gd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ie().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ea=class extends tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bs=class extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zi=class extends bs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ca=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ra=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ca(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xd(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Rh(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=i[o+l]}return s}function qd(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}var pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pa=class extends pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tl:r=t,o=2*e-n;break;case El:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tl:a=t,l=2*n-e;break;case El:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,u=this._offsetPrev,c=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,b=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,M=(-1-d)*p+(1.5+d)*_+.5*m,x=d*p-d*_;for(let w=0;w!==o;++w)r[w]=g*a[u+w]+b*a[h+w]+M*a[l+w]+x*a[c+w];return r}},Ia=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,u=(n-e)/(s-e),c=1-u;for(let f=0;f!==o;++f)r[f]=a[h+f]*c+a[l+f]*u;return r}},Da=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},La=class extends pi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,u=this.inTangents,c=this.outTangents;if(!u||!c){let m=(n-e)/(s-e),_=1-m;for(let p=0;p!==o;++p)r[p]=a[h+p]*_+a[l+p]*m;return r}let f=o*2,d=t-1;for(let m=0;m!==o;++m){let _=a[h+m],p=a[l+m],g=d*f+m*2,b=c[g],M=c[g+1],x=t*f+m*2,w=u[x],A=u[x+1],C=(n-e)/(s-e),y,T,R,P,I;for(let V=0;V<8;V++){y=C*C,T=y*C,R=1-C,P=R*R,I=P*R;let N=I*e+3*P*C*b+3*R*y*w+T*s-n;if(Math.abs(N)<1e-10)break;let G=3*P*(b-e)+6*R*C*(w-b)+3*y*(s-w);if(Math.abs(G)<1e-10)break;C=C-N/G,C=Math.max(0,Math.min(1,C))}r[m]=I*_+3*P*C*M+3*R*y*A+T*p}return r}},Ye=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ca(e,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ca(t.times,Array),values:ca(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new La(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ys:e=this.InterpolantFactoryMethodDiscrete;break;case Sa:e=this.InterpolantFactoryMethodLinear;break;case fa:e=this.InterpolantFactoryMethodSmooth;break;case wl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return fa;case this.InterpolantFactoryMethodBezier:return wl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Nt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Gf(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){Nt("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)l=!0;else{let c=o*n,f=c-n,d=c+n;for(let m=0;m!==n;++m){let _=e[c+m];if(_!==e[f+m]||_!==e[d+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let c=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[c+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ye.prototype.ValueTypeName="";Ye.prototype.TimeBufferType=Float32Array;Ye.prototype.ValueBufferType=Float32Array;Ye.prototype.DefaultInterpolation=Sa;var $n=class extends Ye{constructor(t,e,n){super(t,e,n)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Ys;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var pr=class extends Ye{constructor(t,e,n,s){super(t,e,n,s)}};pr.prototype.ValueTypeName="color";var ws=class extends Ye{constructor(t,e,n,s){super(t,e,n,s)}};ws.prototype.ValueTypeName="number";var Ua=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)Ne.slerpFlat(r,0,a,h-o,a,h,l);return r}},Mn=class extends Ye{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}};Mn.prototype.ValueTypeName="quaternion";Mn.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends Ye{constructor(t,e,n){super(t,e,n)}};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Ys;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var hn=class extends Ye{constructor(t,e,n,s){super(t,e,n,s)}};hn.prototype.ValueTypeName="vector";var As=class{constructor(t="",e=-1,n=[],s=au){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Zd(n[a]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(Ye.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,a=[];for(let o=0;o<r;o++){let l=[],h=[];l.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);let u=Xd(l);l=Rh(l,1,u),h=Rh(h,1,u),!s&&l[0]===0&&(l.push(r),h.push(h[0])),a.push(new ws(".morphTargetInfluences["+e[o].name+"]",l,h).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let h=t[o],u=h.name.match(r);if(u&&u.length>1){let c=u[1],f=s[c];f||(s[c]=f=[]),f.push(h)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function Yd(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ws;case"vector":case"vector2":case"vector3":case"vector4":return hn;case"color":return pr;case"quaternion":return Mn;case"bool":case"boolean":return $n;case"string":return jn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Zd(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Yd(i.type);if(i.times===void 0){let e=[],n=[];qd(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var Ll={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Ph(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Ph(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ph(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Na=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){let c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,f=h.length;c<f;c+=2){let d=h[c],m=h[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Au=new Na,Vi=class{constructor(t){this.manager=t!==void 0?t:Au,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Vi.DEFAULT_MATERIAL_NAME="__DEFAULT";var qn={},Ul=class extends Error{constructor(t,e){super(t),this.response=e}},mr=class extends Vi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Ll.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(qn[t]!==void 0){qn[t].push({onLoad:e,onProgress:n,onError:s});return}qn[t]=[],qn[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Pt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let u=qn[t],c=h.body.getReader(),f=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,_=0,p=new ReadableStream({start(g){b();function b(){c.read().then(({done:M,value:x})=>{if(M)g.close();else{_+=x.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let A=0,C=u.length;A<C;A++){let y=u[A];y.onProgress&&y.onProgress(w)}g.enqueue(x),b()}},M=>{g.error(M)})}}});return new Response(p)}else throw new Ul(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return h.json();default:if(o==="")return h.text();{let c=/charset="?([^;"\s]*)"?/i.exec(o),f=c&&c[1]?c[1].toLowerCase():void 0,d=new TextDecoder(f);return h.arrayBuffer().then(m=>d.decode(m))}}}).then(h=>{Ll.add(`file:${t}`,h);let u=qn[t];delete qn[t];for(let c=0,f=u.length;c<f;c++){let d=u[c];d.onLoad&&d.onLoad(h)}}).catch(h=>{let u=qn[t];if(u===void 0)throw this.manager.itemError(t),h;delete qn[t];for(let c=0,f=u.length;c<f;c++){let d=u[c];d.onError&&d.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var mi=class extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},gr=class extends mi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Sl=new Ht,Ih=new L,Dh=new L,_r=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Ze,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ih),Dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dh),e.updateMatrixWorld(),Sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===ps||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ha=new L,ua=new Ne,Dn=new L,xr=class extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ha,ua,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ua,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ha,ua,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ua,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},li=new L,Lh=new Dt,Uh=new Dt,Se=class extends xr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fi*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Lh,Uh),e.subVectors(Uh,Lh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Nl=class extends _r{constructor(){super(new Se(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Fi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},vr=class extends mi{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Nl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Fl=class extends _r{constructor(){super(new Se(90,1,.5,500)),this.isPointLightShadow=!0}},yr=class extends mi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},gi=class extends xr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ol=class extends _r{constructor(){super(new gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gi=class extends mi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Ol}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ts=class extends mi{constructor(t,e,n=10,s=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}};var Hi=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var cs=-90,hs=1,Fa=class extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Se(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new Se(cs,hs,t,e);r.layers=this.layers,this.add(r);let a=new Se(cs,hs,t,e);a.layers=this.layers,this.add(a);let o=new Se(cs,hs,t,e);o.layers=this.layers,this.add(o);let l=new Se(cs,hs,t,e);l.layers=this.layers,this.add(l);let h=new Se(cs,hs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,u]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(c,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Oa=class extends Se{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hc="\\[\\]\\.:\\/",Jd=new RegExp("["+hc+"]","g"),uc="[^"+hc+"]",Kd="[^"+hc.replace("\\.","")+"]",$d=/((?:WC+[\/:])*)/.source.replace("WC",uc),jd=/(WCOD+)?/.source.replace("WCOD",Kd),Qd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),ep=new RegExp("^"+$d+jd+Qd+tp+"$"),np=["material","materials","bones","map"],Bl=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jd,"")}static parseTrackName(t){let e=ep.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);np.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Bl;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gx=new Float32Array(1);var Es=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var _c=class _c{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};_c.prototype.isMatrix2=!0;var kl=_c;var Mr=class extends yn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Pt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function fc(i,t,e,n){let s=ip(n);switch(e){case ic:return i*t;case rc:return i*t/s.components*s.byteLength;case Xa:return i*t/s.components*s.byteLength;case Si:return i*t*2/s.components*s.byteLength;case qa:return i*t*2/s.components*s.byteLength;case sc:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case Ya:return i*t*4/s.components*s.byteLength;case Ar:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:case $a:return Math.max(i,16)*Math.max(t,8)/4;case Za:case Ka:return Math.max(i,8)*Math.max(t,8)/2;case ja:case Qa:case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case to:case Rr:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vo:case yo:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case So:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Pr:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ip(i){switch(i){case Ze:case Ql:return{byteLength:1,components:1};case Rs:case tc:case Fn:return{byteLength:2,components:1};case Ha:case Wa:return{byteLength:2,components:4};case bn:case Ga:case un:return{byteLength:4,components:1};case ec:case nc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Zu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rp(i){let t=new WeakMap;function e(o,l){let h=o.array,u=o.usage,c=h.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,h,u),o.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:c}}function n(o,l,h){let u=l.array,c=l.updateRanges;if(i.bindBuffer(h,o),c.length===0)i.bufferSubData(h,0,u);else{c.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<c.length;d++){let m=c[f],_=c[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,c[f]=_)}c.length=f+1;for(let d=0,m=c.length;d<m;d++){let _=c[d];i.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:ap,alphahash_pars_fragment:op,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:hp,alphatest_pars_fragment:up,aomap_fragment:fp,aomap_pars_fragment:dp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:_p,bsdfs:xp,iridescence_fragment:vp,bumpmap_pars_fragment:yp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:wp,color_fragment:Ap,color_pars_fragment:Tp,color_pars_vertex:Ep,color_vertex:Cp,common:Rp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Dp,displacementmap_vertex:Lp,emissivemap_fragment:Up,emissivemap_pars_fragment:Np,colorspace_fragment:Fp,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:kp,envmap_pars_fragment:zp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:jp,envmap_vertex:Gp,fog_vertex:Hp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:Kp,lights_pars_begin:$p,lights_toon_fragment:Qp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:am,lights_fragment_end:om,lightprobes_pars_fragment:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:fm,map_fragment:dm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:xm,morphinstance_vertex:vm,morphcolor_vertex:ym,morphnormal_vertex:Mm,morphtarget_pars_vertex:Sm,morphtarget_vertex:bm,normal_fragment_begin:wm,normal_fragment_maps:Am,normal_pars_fragment:Tm,normal_pars_vertex:Em,normal_vertex:Cm,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Lm,opaque_fragment:Um,packing:Nm,premultiplied_alpha_fragment:Fm,project_vertex:Om,dithering_fragment:Bm,dithering_pars_fragment:km,roughnessmap_fragment:zm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:Km,specularmap_pars_fragment:$m,tonemapping_fragment:jm,tonemapping_pars_fragment:Qm,transmission_fragment:tg,transmission_pars_fragment:eg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:sg,worldpos_vertex:rg,background_vert:ag,background_frag:og,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:hg,cube_frag:ug,depth_vert:fg,depth_frag:dg,distance_vert:pg,distance_frag:mg,equirect_vert:gg,equirect_frag:_g,linedashed_vert:xg,linedashed_frag:vg,meshbasic_vert:yg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:bg,meshmatcap_vert:wg,meshmatcap_frag:Ag,meshnormal_vert:Tg,meshnormal_frag:Eg,meshphong_vert:Cg,meshphong_frag:Rg,meshphysical_vert:Pg,meshphysical_frag:Ig,meshtoon_vert:Dg,meshtoon_frag:Lg,points_vert:Ug,points_frag:Ng,shadow_vert:Fg,shadow_frag:Og,sprite_vert:Bg,sprite_frag:kg},pt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Bn={basic:{uniforms:Ve([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ve([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ve([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ve([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ve([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ve([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ve([pt.points,pt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ve([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ve([pt.common,pt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ve([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ve([pt.sprite,pt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:Ve([pt.common,pt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:Ve([pt.lights,pt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Bn.physical={uniforms:Ve([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var Co={r:0,b:0,g:0},zg=new Ht,Ju=new Bt;Ju.set(-1,0,0,0,1,0,0,0,1);function Vg(i,t,e,n,s,r){let a=new zt(0),o=s===!0?0:1,l,h,u=null,c=0,f=null;function d(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let x=b.backgroundBlurriness>0;M=t.get(M,x)}return M}function m(b){let M=!1,x=d(b);x===null?p(a,o):x&&x.isColor&&(p(x,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,M){let x=d(M);x&&(x.isCubeTexture||x.mapping===br)?(h===void 0&&(h=new we(new di(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Xi(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Ju),h.material.toneMapped=Zt.getTransfer(x.colorSpace)!==te,(u!==x||c!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,c=x.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new we(new fr(2,2),new tn({name:"BackgroundMaterial",uniforms:Xi(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(x.colorSpace)!==te,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||c!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,c=x.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(Co,cc(i)),e.buffers.color.setClear(Co.r,Co.g,Co.b,M,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:m,addToRenderList:_,dispose:g}}function Gg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(P,I,V,W,N){let G=!1,X=c(P,W,V,I);r!==X&&(r=X,h(r.object)),G=d(P,W,V,N),G&&m(P,W,V,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(P,I,V,W),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function h(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function c(P,I,V,W){let N=W.wireframe===!0,G=n[I.id];G===void 0&&(G={},n[I.id]=G);let X=P.isInstancedMesh===!0?P.id:0,$=G[X];$===void 0&&($={},G[X]=$);let tt=$[V.id];tt===void 0&&(tt={},$[V.id]=tt);let rt=tt[N];return rt===void 0&&(rt=f(l()),tt[N]=rt),rt}function f(P){let I=[],V=[],W=[];for(let N=0;N<e;N++)I[N]=0,V[N]=0,W[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:W,object:P,attributes:{},index:null}}function d(P,I,V,W){let N=r.attributes,G=I.attributes,X=0,$=V.getAttributes();for(let tt in $)if($[tt].location>=0){let at=N[tt],ct=G[tt];if(ct===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(ct=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(ct=P.instanceColor)),at===void 0||at.attribute!==ct||ct&&at.data!==ct.data)return!0;X++}return r.attributesNum!==X||r.index!==W}function m(P,I,V,W){let N={},G=I.attributes,X=0,$=V.getAttributes();for(let tt in $)if($[tt].location>=0){let at=G[tt];at===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(at=P.instanceColor));let ct={};ct.attribute=at,at&&at.data&&(ct.data=at.data),N[tt]=ct,X++}r.attributes=N,r.attributesNum=X,r.index=W}function _(){let P=r.newAttributes;for(let I=0,V=P.length;I<V;I++)P[I]=0}function p(P){g(P,0)}function g(P,I){let V=r.newAttributes,W=r.enabledAttributes,N=r.attributeDivisors;V[P]=1,W[P]===0&&(i.enableVertexAttribArray(P),W[P]=1),N[P]!==I&&(i.vertexAttribDivisor(P,I),N[P]=I)}function b(){let P=r.newAttributes,I=r.enabledAttributes;for(let V=0,W=I.length;V<W;V++)I[V]!==P[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function M(P,I,V,W,N,G,X){X===!0?i.vertexAttribIPointer(P,I,V,N,G):i.vertexAttribPointer(P,I,V,W,N,G)}function x(P,I,V,W){_();let N=W.attributes,G=V.getAttributes(),X=I.defaultAttributeValues;for(let $ in G){let tt=G[$];if(tt.location>=0){let rt=N[$];if(rt===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor)),rt!==void 0){let at=rt.normalized,ct=rt.itemSize,kt=t.get(rt);if(kt===void 0)continue;let Jt=kt.buffer,Ft=kt.type,q=kt.bytesPerElement,it=Ft===i.INT||Ft===i.UNSIGNED_INT||rt.gpuType===Ga;if(rt.isInterleavedBufferAttribute){let et=rt.data,nt=et.stride,bt=rt.offset;if(et.isInstancedInterleavedBuffer){for(let yt=0;yt<tt.locationSize;yt++)g(tt.location+yt,et.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let yt=0;yt<tt.locationSize;yt++)p(tt.location+yt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let yt=0;yt<tt.locationSize;yt++)M(tt.location+yt,ct/tt.locationSize,Ft,at,nt*q,(bt+ct/tt.locationSize*yt)*q,it)}else{if(rt.isInstancedBufferAttribute){for(let et=0;et<tt.locationSize;et++)g(tt.location+et,rt.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let et=0;et<tt.locationSize;et++)p(tt.location+et);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let et=0;et<tt.locationSize;et++)M(tt.location+et,ct/tt.locationSize,Ft,at,ct*q,ct/tt.locationSize*et*q,it)}}else if(X!==void 0){let at=X[$];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(tt.location,at);break;case 3:i.vertexAttrib3fv(tt.location,at);break;case 4:i.vertexAttrib4fv(tt.location,at);break;default:i.vertexAttrib1fv(tt.location,at)}}}}b()}function w(){T();for(let P in n){let I=n[P];for(let V in I){let W=I[V];for(let N in W){let G=W[N];for(let X in G)u(G[X].object),delete G[X];delete W[N]}}delete n[P]}}function A(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let V in I){let W=I[V];for(let N in W){let G=W[N];for(let X in G)u(G[X].object),delete G[X];delete W[N]}}delete n[P.id]}function C(P){for(let I in n){let V=n[I];for(let W in V){let N=V[W];if(N[P.id]===void 0)continue;let G=N[P.id];for(let X in G)u(G[X].object),delete G[X];delete N[P.id]}}}function y(P){for(let I in n){let V=n[I],W=P.isInstancedMesh===!0?P.id:0,N=V[W];if(N!==void 0){for(let G in N){let X=N[G];for(let $ in X)u(X[$].object),delete X[$];delete N[G]}delete V[W],Object.keys(V).length===0&&delete n[I]}}}function T(){R(),a=!0,r!==s&&(r=s,h(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function Hg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let d=0;d<u;d++)f+=h[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Wg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==en&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let y=C===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ze&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==un&&!y)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(Pt("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let c=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:c,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:x,maxSamples:w,samples:A}}function Xg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new an,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){let d=c.length!==0||f||n!==0||s;return s=f,n=c.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,f){e=u(c,f,0)},this.setState=function(c,f,d){let m=c.clippingPlanes,_=c.clipIntersection,p=c.clipShadows,g=i.get(c);if(!s||m===null||m.length===0||r&&!p)r?u(null):h();else{let b=r?0:n,M=b*4,x=g.clippingState||null;l.value=x,x=u(m,f,M,d);for(let w=0;w!==M;++w)x[w]=e[w];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,f,d,m){let _=c!==null?c.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=d+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,x=d;M!==_;++M,x+=4)a.copy(c[M]).applyMatrix4(b,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var wi=4,Tu=[.125,.215,.35,.446,.526,.582],qi=20,qg=256,Dr=new gi,Eu=new zt,xc=null,vc=0,yc=0,Mc=!1,Yg=new L,Po=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Yg}=r;xc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xc,vc,yc),this._renderer.xr.enabled=Mc,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Fn,format:en,colorSpace:Zs,depthBuffer:!1},s=Cu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zg(r)),this._blurMaterial=Kg(r,t,e),this._ggxMaterial=Jg(r,t,e)}return s}_compileMaterial(t){let e=new we(new De,t);this._renderer.compile(e,Dr)}_sceneToCubeUV(t,e,n,s,r){let l=new Se(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Eu),c.toneMapping=Sn,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(s),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new di,new Bi({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,g=!1,b=t.background;b?b.isColor&&(p.color.copy(b),t.background=null,g=!0):(p.color.copy(Eu),g=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(l.up.set(0,h[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):x===1?(l.up.set(0,0,h[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,h[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));let w=this._cubeSize;Is(s,x*w,M>2?w:0,w,w),c.setRenderTarget(s),g&&c.render(_,l),c.render(t,l)}c.toneMapping=d,c.autoClear=f,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===vi||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Dr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,h=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),c=Math.sqrt(h*h-u*u),f=0+h*1.25,d=c*f,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-wi?n-m+wi:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Is(r,p,g,3*_,2*_),s.setRenderTarget(r),s.render(o,Dr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Is(t,p,g,3*_,2*_),s.setRenderTarget(t),s.render(o,Dr)}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");let u=3,c=this._lodMeshes[s];c.material=h;let f=h.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*qi-1),_=r/m,p=isFinite(r)?1+Math.floor(u*_):qi;p>qi&&Pt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qi}`);let g=[],b=0;for(let C=0;C<qi;++C){let y=C/_,T=Math.exp(-y*y/2);g.push(T),C===0?b+=T:C<p&&(b+=2*T)}for(let C=0;C<g.length;C++)g[C]=g[C]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;let x=this._sizeLods[s],w=3*x*(s>M-wi?s-M+wi:0),A=4*(this._cubeSize-x);Is(e,w,A,3*x,2*x),l.setRenderTarget(e),l.render(c,Dr)}};function Zg(i){let t=[],e=[],n=[],s=i,r=i-wi+1+Tu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-wi?l=Tu[a-i+wi-1]:a===0&&(l=0),e.push(l);let h=1/(o-2),u=-h,c=1+h,f=[u,u,c,u,c,c,u,u,c,c,u,c],d=6,m=6,_=3,p=2,g=1,b=new Float32Array(_*m*d),M=new Float32Array(p*m*d),x=new Float32Array(g*m*d);for(let A=0;A<d;A++){let C=A%3*2/3-1,y=A>2?0:-1,T=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];b.set(T,_*m*A),M.set(f,p*m*A);let R=[A,A,A,A,A,A];x.set(R,g*m*A)}let w=new De;w.setAttribute("position",new jt(b,_)),w.setAttribute("uv",new jt(M,p)),w.setAttribute("faceIndex",new jt(x,g)),n.push(new we(w,null)),s>wi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Cu(i,t,e){let n=new Qe(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jg(i,t,e){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Kg(i,t,e){let n=new Float32Array(qi),s=new L(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ru(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Pu(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Io=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new di(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Nn});r.uniforms.tEquirect.value=e;let a=new we(s,r),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=Ue),new Fa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function $g(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ka||d===za)if(t.has(f)){let m=t.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new Io(m.height);return _.fromEquirectangularTexture(i,f),t.set(f,_),f.addEventListener("dispose",h),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,m=d===ka||d===za,_=d===vi||d===Wi;if(m||_){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Po(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let b=f.image;return m&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new Po(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,d){return d===ka?f.mapping=vi:d===za&&(f.mapping=Wi),f}function l(f){let d=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&d++;return d===m}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:c}}function jg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Di("WebGLRenderer: "+n+" extension not supported."),s}}}function Qg(i,t,e,n){let s={},r=new WeakMap;function a(c){let f=c.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(c,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(c){let f=c.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function h(c){let f=[],d=c.index,m=c.attributes.position,_=0;if(m===void 0)return;if(d!==null){let b=d.array;_=d.version;for(let M=0,x=b.length;M<x;M+=3){let w=b[M+0],A=b[M+1],C=b[M+2];f.push(w,A,A,C,C,w)}}else{let b=m.array;_=m.version;for(let M=0,x=b.length/3-1;M<x;M+=3){let w=M+0,A=M+1,C=M+2;f.push(w,A,A,C,C,w)}}let p=new(m.count>=65535?er:tr)(f,1);p.version=_;let g=r.get(c);g&&t.remove(g),r.set(c,p)}function u(c){let f=r.get(c);if(f){let d=c.index;d!==null&&f.version<d.version&&h(c)}else h(c);return r.get(c)}return{get:o,update:l,getWireframeAttribute:u}}function t0(i,t,e){let n;function s(c){n=c}let r,a;function o(c){r=c.type,a=c.bytesPerElement}function l(c,f){i.drawElements(n,f,r,c*a),e.update(f,n,1)}function h(c,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,c*a,d),e.update(f,n,d))}function u(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,c,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function e0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function n0(i,t,e){let n=new WeakMap,s=new ie;function r(a,o,l){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,c=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==c){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let x=o.attributes.position.count*M,w=1;x>t.maxTextureSize&&(w=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*w*4*c),C=new $s(A,x,w,c);C.type=un,C.needsUpdate=!0;let y=M*4;for(let R=0;R<c;R++){let P=p[R],I=g[R],V=b[R],W=x*w*4*R;for(let N=0;N<P.count;N++){let G=N*y;d===!0&&(s.fromBufferAttribute(P,N),A[W+G+0]=s.x,A[W+G+1]=s.y,A[W+G+2]=s.z,A[W+G+3]=0),m===!0&&(s.fromBufferAttribute(I,N),A[W+G+4]=s.x,A[W+G+5]=s.y,A[W+G+6]=s.z,A[W+G+7]=0),_===!0&&(s.fromBufferAttribute(V,N),A[W+G+8]=s.x,A[W+G+9]=s.y,A[W+G+10]=s.z,A[W+G+11]=V.itemSize===4?s.w:1)}}f={count:c,texture:C,size:new Dt(x,w)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<h.length;_++)d+=h[_];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function i0(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,c=h.geometry,f=t.get(h,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let d=h.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function l(h){let u=h.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var s0={[Xl]:"LINEAR_TONE_MAPPING",[ql]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[Zl]:"ACES_FILMIC_TONE_MAPPING",[Kl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[Jl]:"CUSTOM_TONE_MAPPING"};function r0(i,t,e,n,s,r){let a=new Qe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Kn(t,e):void 0}),o=new Qe(t,e,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new De;l.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xe([0,2,0,0,2,0],2));let h=new Ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new we(l,h),c=new gi(-1,1,1,-1,0,1),f=null,d=null,m=!1,_,p=null,g=[],b=!1;this.setSize=function(M,x){a.setSize(M,x),o.setSize(M,x);for(let w=0;w<g.length;w++){let A=g[w];A.setSize&&A.setSize(M,x)}},this.setEffects=function(M){g=M,b=g.length>0&&g[0].isRenderPass===!0;let x=a.width,w=a.height;for(let A=0;A<g.length;A++){let C=g[A];C.setSize&&C.setSize(x,w)}},this.begin=function(M,x){if(m||M.toneMapping===Sn&&g.length===0)return!1;if(p=x,x!==null){let w=x.width,A=x.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return b===!1&&M.setRenderTarget(a),_=M.toneMapping,M.toneMapping=Sn,!0},this.hasRenderPass=function(){return b},this.end=function(M,x){M.toneMapping=_,m=!0;let w=a,A=o;for(let C=0;C<g.length;C++){let y=g[C];if(y.enabled!==!1&&(y.render(M,A,w,x),y.needsSwap!==!1)){let T=w;w=A,A=T}}if(f!==M.outputColorSpace||d!==M.toneMapping){f=M.outputColorSpace,d=M.toneMapping,h.defines={},Zt.getTransfer(f)===te&&(h.defines.SRGB_TRANSFER="");let C=s0[d];C&&(h.defines[C]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(p),M.render(u,c),p=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),h.dispose()}}var Ku=new ze,wc=new Kn(1,1),$u=new $s,ju=new Aa,Qu=new rr,Iu=[],Du=[],Lu=new Float32Array(16),Uu=new Float32Array(9),Nu=new Float32Array(4);function Ls(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Uo(i,t){let e=Du[t];e===void 0&&(e=new Int32Array(t),Du[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function a0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function h0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ae(e,n))return;Nu.set(n),i.uniformMatrix2fv(this.addr,!1,Nu),Te(e,n)}}function u0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ae(e,n))return;Uu.set(n),i.uniformMatrix3fv(this.addr,!1,Uu),Te(e,n)}}function f0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ae(e,n))return;Lu.set(n),i.uniformMatrix4fv(this.addr,!1,Lu),Te(e,n)}}function d0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function g0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function _0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function M0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wc.compareFunction=e.isReversedDepthBuffer()?Eo:To,r=wc):r=Ku,e.setTexture2D(t||r,s)}function S0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ju,s)}function b0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qu,s)}function w0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$u,s)}function A0(i){switch(i){case 5126:return a0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return x0;case 36295:return v0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return w0}}function T0(i,t){i.uniform1fv(this.addr,t)}function E0(i,t){let e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function C0(i,t){let e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function R0(i,t){let e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function P0(i,t){let e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function I0(i,t){let e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function D0(i,t){let e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function L0(i,t){i.uniform1iv(this.addr,t)}function U0(i,t){i.uniform2iv(this.addr,t)}function N0(i,t){i.uniform3iv(this.addr,t)}function F0(i,t){i.uniform4iv(this.addr,t)}function O0(i,t){i.uniform1uiv(this.addr,t)}function B0(i,t){i.uniform2uiv(this.addr,t)}function k0(i,t){i.uniform3uiv(this.addr,t)}function z0(i,t){i.uniform4uiv(this.addr,t)}function V0(i,t,e){let n=this.cache,s=t.length,r=Uo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wc:a=Ku;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function G0(i,t,e){let n=this.cache,s=t.length,r=Uo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ju,r[a])}function H0(i,t,e){let n=this.cache,s=t.length,r=Uo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qu,r[a])}function W0(i,t,e){let n=this.cache,s=t.length,r=Uo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$u,r[a])}function X0(i){switch(i){case 5126:return T0;case 35664:return E0;case 35665:return C0;case 35666:return R0;case 35674:return P0;case 35675:return I0;case 35676:return D0;case 5124:case 35670:return L0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return B0;case 36295:return k0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return W0}}var Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=A0(e.type)}},Tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=X0(e.type)}},Ec=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function Fu(i,t){i.seq.push(t),i.map[t.id]=t}function q0(i,t,e){let n=i.name,s=n.length;for(Sc.lastIndex=0;;){let r=Sc.exec(n),a=Sc.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Fu(e,h===void 0?new Ac(o,i,t):new Tc(o,i,t));break}else{let c=e.map[o];c===void 0&&(c=new Ec(o),Fu(e,c)),e=c}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);q0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ou(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Y0=37297,Z0=0;function J0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Bu=new Bt;function K0(i){Zt._getMatrix(Bu,Zt.workingColorSpace,i);let t=`mat3( ${Bu.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Js:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ku(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+J0(i.getShaderSource(t),o)}else return r}function $0(i,t){let e=K0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var j0={[Xl]:"Linear",[ql]:"Reinhard",[Yl]:"Cineon",[Zl]:"ACESFilmic",[Kl]:"AgX",[$l]:"Neutral",[Jl]:"Custom"};function Q0(i,t){let e=j0[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ro=new L;function t_(){Zt.getLuminanceCoefficients(Ro);let i=Ro.x.toFixed(4),t=Ro.y.toFixed(4),e=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function n_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ur(i){return i!==""}function zu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(i){return i.replace(s_,a_)}var r_=new Map;function a_(i,t){let e=Wt[t];if(e===void 0){let n=r_.get(t);if(n!==void 0)e=Wt[n],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Cc(e)}var o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(i){return i.replace(o_,l_)}function l_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var c_={[Sr]:"SHADOWMAP_TYPE_PCF",[Cs]:"SHADOWMAP_TYPE_VSM"};function h_(i){return c_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var u_={[vi]:"ENVMAP_TYPE_CUBE",[Wi]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function f_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":u_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var d_={[Wi]:"ENVMAP_MODE_REFRACTION"};function p_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":d_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var m_={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[nu]:"ENVMAP_BLENDING_MIX",[iu]:"ENVMAP_BLENDING_ADD"};function g_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":m_[i.combine]||"ENVMAP_BLENDING_NONE"}function __(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function x_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=h_(e),h=f_(e),u=p_(e),c=g_(e),f=__(e),d=e_(e),m=n_(r),_=s.createProgram(),p,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ur).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ur).join(`
`),g.length>0&&(g+=`
`)):(p=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),g=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,$0("linearToOutputTexel",e.outputColorSpace),t_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),a=Cc(a),a=zu(a,e),a=Vu(a,e),o=Cc(o),o=zu(o,e),o=Vu(o,e),a=Gu(a),o=Gu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=b+p+a,x=b+g+o,w=Ou(s,s.VERTEX_SHADER,M),A=Ou(s,s.FRAGMENT_SHADER,x);s.attachShader(_,w),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(w)||"",W=s.getShaderInfoLog(A)||"",N=I.trim(),G=V.trim(),X=W.trim(),$=!0,tt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,A);else{let rt=ku(s,w,"vertex"),at=ku(s,A,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+rt+`
`+at)}else N!==""?Pt("WebGLProgram: Program Info Log:",N):(G===""||X==="")&&(tt=!1);tt&&(P.diagnostics={runnable:$,programLog:N,vertexShader:{log:G,prefix:p},fragmentShader:{log:X,prefix:g}})}s.deleteShader(w),s.deleteShader(A),y=new Ds(s,_),T=i_(s,_)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,Y0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}var v_=0,Rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pc(t),e.set(t,n)),n}},Pc=class{constructor(t){this.id=v_++,this.code=t,this.usedTimes=0}};function y_(i){return i===Si||i===Rr||i===Pr}function M_(i,t,e,n,s,r){let a=new js,o=new Rc,l=new Set,h=[],u=new Map,c=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,T,R,P,I,V){let W=P.fog,N=I.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,$=t.get(y.envMap||G,X),tt=$&&$.mapping===br?$.image.height:null,rt=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Pt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let at=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ct=at!==void 0?at.length:0,kt=0;N.morphAttributes.position!==void 0&&(kt=1),N.morphAttributes.normal!==void 0&&(kt=2),N.morphAttributes.color!==void 0&&(kt=3);let Jt,Ft,q,it;if(rt){let wt=Bn[rt];Jt=wt.vertexShader,Ft=wt.fragmentShader}else{Jt=y.vertexShader,Ft=y.fragmentShader;let wt=o.getVertexShaderStage(y),pe=o.getFragmentShaderStage(y);o.update(y,wt,pe),q=wt.id,it=pe.id}let et=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),bt=I.isInstancedMesh===!0,yt=I.isBatchedMesh===!0,Yt=!!y.map,Mt=!!y.matcap,Ot=!!$,Lt=!!y.aoMap,Kt=!!y.lightMap,ve=!!y.bumpMap&&y.wireframe===!1,be=!!y.normalMap,Re=!!y.displacementMap,Le=!!y.emissiveMap,de=!!y.metalnessMap,ye=!!y.roughnessMap,U=y.anisotropy>0,qe=y.clearcoat>0,ee=y.dispersion>0,E=y.iridescence>0,v=y.sheen>0,O=y.transmission>0,z=U&&!!y.anisotropyMap,Y=qe&&!!y.clearcoatMap,st=qe&&!!y.clearcoatNormalMap,lt=qe&&!!y.clearcoatRoughnessMap,Z=E&&!!y.iridescenceMap,K=E&&!!y.iridescenceThicknessMap,ht=v&&!!y.sheenColorMap,Et=v&&!!y.sheenRoughnessMap,dt=!!y.specularMap,ut=!!y.specularColorMap,It=!!y.specularIntensityMap,Ut=O&&!!y.transmissionMap,Vt=O&&!!y.thicknessMap,D=!!y.gradientMap,ot=!!y.alphaMap,J=y.alphaTest>0,ft=!!y.alphaHash,xt=!!y.extensions,Q=Sn;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Q=i.toneMapping);let Tt={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:Jt,fragmentShader:Ft,defines:y.defines,customVertexShaderID:q,customFragmentShaderID:it,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:yt,batchingColor:yt&&I._colorsTexture!==null,instancing:bt,instancingColor:bt&&I.instanceColor!==null,instancingMorph:bt&&I.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Yt,matcap:Mt,envMap:Ot,envMapMode:Ot&&$.mapping,envMapCubeUVHeight:tt,aoMap:Lt,lightMap:Kt,bumpMap:ve,normalMap:be,displacementMap:Re,emissiveMap:Le,normalMapObjectSpace:be&&y.normalMapType===lu,normalMapTangentSpace:be&&y.normalMapType===Ao,packedNormalMap:be&&y.normalMapType===Ao&&y_(y.normalMap.format),metalnessMap:de,roughnessMap:ye,anisotropy:U,anisotropyMap:z,clearcoat:qe,clearcoatMap:Y,clearcoatNormalMap:st,clearcoatRoughnessMap:lt,dispersion:ee,iridescence:E,iridescenceMap:Z,iridescenceThicknessMap:K,sheen:v,sheenColorMap:ht,sheenRoughnessMap:Et,specularMap:dt,specularColorMap:ut,specularIntensityMap:It,transmission:O,transmissionMap:Ut,thicknessMap:Vt,gradientMap:D,opaque:y.transparent===!1&&y.blending===Li&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:J,alphaHash:ft,combine:y.combine,mapUv:Yt&&m(y.map.channel),aoMapUv:Lt&&m(y.aoMap.channel),lightMapUv:Kt&&m(y.lightMap.channel),bumpMapUv:ve&&m(y.bumpMap.channel),normalMapUv:be&&m(y.normalMap.channel),displacementMapUv:Re&&m(y.displacementMap.channel),emissiveMapUv:Le&&m(y.emissiveMap.channel),metalnessMapUv:de&&m(y.metalnessMap.channel),roughnessMapUv:ye&&m(y.roughnessMap.channel),anisotropyMapUv:z&&m(y.anisotropyMap.channel),clearcoatMapUv:Y&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:K&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&m(y.sheenRoughnessMap.channel),specularMapUv:dt&&m(y.specularMap.channel),specularColorMapUv:ut&&m(y.specularColorMap.channel),specularIntensityMapUv:It&&m(y.specularIntensityMap.channel),transmissionMapUv:Ut&&m(y.transmissionMap.channel),thicknessMapUv:Vt&&m(y.thicknessMap.channel),alphaMapUv:ot&&m(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(be||U),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Yt||ot),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&be===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:nt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:kt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:Yt&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===te,decodeVideoTextureEmissive:Le&&y.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(y.emissiveMap.colorSpace)===te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Un,flipSided:y.side===We,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&y.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function p(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(T,y),b(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){let T=d[y.type],R;if(T){let P=Bn[T];R=wu.clone(P.uniforms)}else R=y.uniforms;return R}function x(y,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new x_(i,T,y,s),h.push(R),u.set(T,R)),R}function w(y){if(--y.usedTimes===0){let T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:x,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function S_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function b_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,m,_,p,g){let b=i[t];return b===void 0?(b={id:f.id,object:f,geometry:d,material:m,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},i[t]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=m,b.materialVariant=a(f),b.groupOrder=_,b.renderOrder=f.renderOrder,b.z=p,b.group=g),t++,b}function l(f,d,m,_,p,g){let b=o(f,d,m,_,p,g);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):e.push(b)}function h(f,d,m,_,p,g){let b=o(f,d,m,_,p,g);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):e.unshift(b)}function u(f,d,m){e.length>1&&e.sort(f||b_),n.length>1&&n.sort(d||Wu),s.length>1&&s.sort(d||Wu),m&&(e.reverse(),n.reverse(),s.reverse())}function c(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:h,finish:c,sort:u}}function w_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Xu,i.set(n,[a])):s>=r.length?(a=new Xu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new zt};break;case"SpotLight":e={position:new L,direction:new L,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function T_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var E_=0;function C_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function R_(i){let t=new A_,e=T_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);let s=new L,r=new Ht,a=new Ht;function o(h){let u=0,c=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,b=0,M=0,x=0,w=0,A=0,C=0;h.sort(C_);for(let T=0,R=h.length;T<R;T++){let P=h[T],I=P.color,V=P.intensity,W=P.distance,N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Si?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=I.r*V,c+=I.g*V,f+=I.b*V;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],V);C++}else if(P.isDirectionalLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,$=e.get(P);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=P.shadow.matrix,b++}n.directional[d]=G,d++}else if(P.isSpotLight){let G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(I).multiplyScalar(V),G.distance=W,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;let X=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,X.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=X.matrix,P.castShadow){let $=e.get(P);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=N,x++}_++}else if(P.isRectAreaLight){let G=t.get(P);G.color.copy(I).multiplyScalar(V),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=G,p++}else if(P.isPointLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let X=P.shadow,$=e.get(P);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=P.shadow.matrix,M++}n.point[m]=G,m++}else if(P.isHemisphereLight){let G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(V),G.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[g]=G,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=f;let y=n.hash;(y.directionalLength!==d||y.pointLength!==m||y.spotLength!==_||y.rectAreaLength!==p||y.hemiLength!==g||y.numDirectionalShadows!==b||y.numPointShadows!==M||y.numSpotShadows!==x||y.numSpotMaps!==w||y.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,y.directionalLength=d,y.pointLength=m,y.spotLength=_,y.rectAreaLength=p,y.hemiLength=g,y.numDirectionalShadows=b,y.numPointShadows=M,y.numSpotShadows=x,y.numSpotMaps=w,y.numLightProbes=C,n.version=E_++)}function l(h,u){let c=0,f=0,d=0,m=0,_=0,p=u.matrixWorldInverse;for(let g=0,b=h.length;g<b;g++){let M=h[g];if(M.isDirectionalLight){let x=n.directional[c];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),c++}else if(M.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(M.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function qu(i){let t=new R_(i),e=[],n=[],s=[];function r(f){c.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function l(f){s.push(f)}function h(){t.setup(e)}function u(f){t.setupView(e,f)}let c={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:c,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function P_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new qu(i),t.set(s,[o])):r>=a.length?(o=new qu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var I_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,L_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],U_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Yu=new Ht,Lr=new L,bc=new L;function N_(i,t,e){let n=new vs,s=new Dt,r=new Dt,a=new ie,o=new Ca,l=new Ra,h={},u=e.maxTextureSize,c={[Zn]:We,[We]:Zn,[Un]:Un},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:I_,fragmentShader:D_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new De;m.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new we(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let g=this.type;this.render=function(A,C,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Oh&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sr);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Nn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let V=g!==this.type;V&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(N=>N.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,N=A.length;W<N;W++){let G=A[W],X=G.shadow;if(X===void 0){Pt("WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let $=X.getFrameExtents();s.multiply($),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,X.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=tt,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Cs){if(G.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Qe(s.x,s.y,{format:Si,type:Fn,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),X.map.texture.name=G.name+".shadowMap",X.map.depthTexture=new Kn(s.x,s.y,un),X.map.depthTexture.name=G.name+".shadowMapDepth",X.map.depthTexture.format=Ln,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ie,X.map.depthTexture.magFilter=Ie}else G.isPointLight?(X.map=new Io(s.x),X.map.depthTexture=new Ta(s.x,bn)):(X.map=new Qe(s.x,s.y),X.map.depthTexture=new Kn(s.x,s.y,bn)),X.map.depthTexture.name=G.name+".shadowMap",X.map.depthTexture.format=Ln,this.type===Sr?(X.map.depthTexture.compareFunction=tt?Eo:To,X.map.depthTexture.minFilter=Ue,X.map.depthTexture.magFilter=Ue):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ie,X.map.depthTexture.magFilter=Ie);X.camera.updateProjectionMatrix()}let rt=X.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<rt;at++){if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,at),i.clear();else{at===0&&(i.setRenderTarget(X.map),i.clear());let ct=X.getViewport(at);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),I.viewport(a)}if(G.isPointLight){let ct=X.camera,kt=X.matrix,Jt=G.distance||ct.far;Jt!==ct.far&&(ct.far=Jt,ct.updateProjectionMatrix()),Lr.setFromMatrixPosition(G.matrixWorld),ct.position.copy(Lr),bc.copy(ct.position),bc.add(L_[at]),ct.up.copy(U_[at]),ct.lookAt(bc),ct.updateMatrixWorld(),kt.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Yu.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Yu,ct.coordinateSystem,ct.reversedDepth)}else X.updateMatrices(G);n=X.getFrustum(),x(C,y,X.camera,G,this.type)}X.isPointLightShadow!==!0&&this.type===Cs&&b(X,y),X.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(T,R,P)};function b(A,C){let y=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qe(s.x,s.y,{format:Si,type:Fn})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,y,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,y,d,_,null)}function M(A,C,y,T){let R=null,P=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)R=P;else if(R=y.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let I=R.uuid,V=C.uuid,W=h[I];W===void 0&&(W={},h[I]=W);let N=W[V];N===void 0&&(N=R.clone(),W[V]=N,C.addEventListener("dispose",w)),R=N}if(R.visible=C.visible,R.wireframe=C.wireframe,T===Cs?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:c[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=i.properties.get(R);I.light=y}return R}function x(A,C,y,T,R){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===Cs)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);let V=t.update(A),W=A.material;if(Array.isArray(W)){let N=V.groups;for(let G=0,X=N.length;G<X;G++){let $=N[G],tt=W[$.materialIndex];if(tt&&tt.visible){let rt=M(A,tt,T,R);A.onBeforeShadow(i,A,C,y,V,rt,$),i.renderBufferDirect(y,null,V,rt,A,$),A.onAfterShadow(i,A,C,y,V,rt,$)}}}else if(W.visible){let N=M(A,W,T,R);A.onBeforeShadow(i,A,C,y,V,N,null),i.renderBufferDirect(y,null,V,N,A,null),A.onAfterShadow(i,A,C,y,V,N,null)}}let I=A.children;for(let V=0,W=I.length;V<W;V++)x(I[V],C,y,T,R)}function w(A){A.target.removeEventListener("dispose",w);for(let y in h){let T=h[y],R=A.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function F_(i,t){function e(){let D=!1,ot=new ie,J=null,ft=new ie(0,0,0,0);return{setMask:function(xt){J!==xt&&!D&&(i.colorMask(xt,xt,xt,xt),J=xt)},setLocked:function(xt){D=xt},setClear:function(xt,Q,Tt,wt,pe){pe===!0&&(xt*=wt,Q*=wt,Tt*=wt),ot.set(xt,Q,Tt,wt),ft.equals(ot)===!1&&(i.clearColor(xt,Q,Tt,wt),ft.copy(ot))},reset:function(){D=!1,J=null,ft.set(-1,0,0,0)}}}function n(){let D=!1,ot=!1,J=null,ft=null,xt=null;return{setReversed:function(Q){if(ot!==Q){let Tt=t.get("EXT_clip_control");Q?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),ot=Q;let wt=xt;xt=null,this.setClear(wt)}},getReversed:function(){return ot},setTest:function(Q){Q?et(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(Q){J!==Q&&!D&&(i.depthMask(Q),J=Q)},setFunc:function(Q){if(ot&&(Q=xu[Q]),ft!==Q){switch(Q){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case xa:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Q}},setLocked:function(Q){D=Q},setClear:function(Q){xt!==Q&&(xt=Q,ot&&(Q=1-Q),i.clearDepth(Q))},reset:function(){D=!1,J=null,ft=null,xt=null,ot=!1}}}function s(){let D=!1,ot=null,J=null,ft=null,xt=null,Q=null,Tt=null,wt=null,pe=null;return{setTest:function(le){D||(le?et(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(le){ot!==le&&!D&&(i.stencilMask(le),ot=le)},setFunc:function(le,Rn,Pn){(J!==le||ft!==Rn||xt!==Pn)&&(i.stencilFunc(le,Rn,Pn),J=le,ft=Rn,xt=Pn)},setOp:function(le,Rn,Pn){(Q!==le||Tt!==Rn||wt!==Pn)&&(i.stencilOp(le,Rn,Pn),Q=le,Tt=Rn,wt=Pn)},setLocked:function(le){D=le},setClear:function(le){pe!==le&&(i.clearStencil(le),pe=le)},reset:function(){D=!1,ot=null,J=null,ft=null,xt=null,Q=null,Tt=null,wt=null,pe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,h=new WeakMap,u={},c={},f={},d=new WeakMap,m=[],_=null,p=!1,g=null,b=null,M=null,x=null,w=null,A=null,C=null,y=new zt(0,0,0),T=0,R=!1,P=null,I=null,V=null,W=null,N=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,$=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(tt)[1]),X=$>=1):tt.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),X=$>=2);let rt=null,at={},ct=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),Jt=new ie().fromArray(ct),Ft=new ie().fromArray(kt);function q(D,ot,J,ft){let xt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(D,Q),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<J;Tt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ot+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return Q}let it={};it[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Ui),ve(!1),be(zl),et(i.CULL_FACE),Lt(Nn);function et(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function nt(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function bt(D,ot){return f[D]!==ot?(i.bindFramebuffer(D,ot),f[D]=ot,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ot),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function yt(D,ot){let J=m,ft=!1;if(D){J=d.get(ot),J===void 0&&(J=[],d.set(ot,J));let xt=D.textures;if(J.length!==xt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Tt=xt.length;Q<Tt;Q++)J[Q]=i.COLOR_ATTACHMENT0+Q;J.length=xt.length,ft=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ft=!0);ft&&i.drawBuffers(J)}function Yt(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let Mt={[hi]:i.FUNC_ADD,[kh]:i.FUNC_SUBTRACT,[zh]:i.FUNC_REVERSE_SUBTRACT};Mt[Vh]=i.MIN,Mt[Gh]=i.MAX;let Ot={[Hh]:i.ZERO,[Wh]:i.ONE,[Xh]:i.SRC_COLOR,[da]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[Jh]:i.DST_COLOR,[Yh]:i.DST_ALPHA,[qh]:i.ONE_MINUS_SRC_COLOR,[pa]:i.ONE_MINUS_SRC_ALPHA,[Kh]:i.ONE_MINUS_DST_COLOR,[Zh]:i.ONE_MINUS_DST_ALPHA,[jh]:i.CONSTANT_COLOR,[Qh]:i.ONE_MINUS_CONSTANT_COLOR,[tu]:i.CONSTANT_ALPHA,[eu]:i.ONE_MINUS_CONSTANT_ALPHA};function Lt(D,ot,J,ft,xt,Q,Tt,wt,pe,le){if(D===Nn){p===!0&&(nt(i.BLEND),p=!1);return}if(p===!1&&(et(i.BLEND),p=!0),D!==Bh){if(D!==g||le!==R){if((b!==hi||w!==hi)&&(i.blendEquation(i.FUNC_ADD),b=hi,w=hi),le)switch(D){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Nt("WebGLState: Invalid blending: ",D);break}else switch(D){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",D);break}M=null,x=null,A=null,C=null,y.set(0,0,0),T=0,g=D,R=le}return}xt=xt||ot,Q=Q||J,Tt=Tt||ft,(ot!==b||xt!==w)&&(i.blendEquationSeparate(Mt[ot],Mt[xt]),b=ot,w=xt),(J!==M||ft!==x||Q!==A||Tt!==C)&&(i.blendFuncSeparate(Ot[J],Ot[ft],Ot[Q],Ot[Tt]),M=J,x=ft,A=Q,C=Tt),(wt.equals(y)===!1||pe!==T)&&(i.blendColor(wt.r,wt.g,wt.b,pe),y.copy(wt),T=pe),g=D,R=!1}function Kt(D,ot){D.side===Un?nt(i.CULL_FACE):et(i.CULL_FACE);let J=D.side===We;ot&&(J=!J),ve(J),D.blending===Li&&D.transparent===!1?Lt(Nn):Lt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ft=D.stencilWrite;o.setTest(ft),ft&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function be(D){D!==Nh?(et(i.CULL_FACE),D!==I&&(D===zl?i.cullFace(i.BACK):D===Fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),I=D}function Re(D){D!==V&&(X&&i.lineWidth(D),V=D)}function Le(D,ot,J){D?(et(i.POLYGON_OFFSET_FILL),(W!==ot||N!==J)&&(W=ot,N=J,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,J))):nt(i.POLYGON_OFFSET_FILL)}function de(D){D?et(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function ye(D){D===void 0&&(D=i.TEXTURE0+G-1),rt!==D&&(i.activeTexture(D),rt=D)}function U(D,ot,J){J===void 0&&(rt===null?J=i.TEXTURE0+G-1:J=rt);let ft=at[J];ft===void 0&&(ft={type:void 0,texture:void 0},at[J]=ft),(ft.type!==D||ft.texture!==ot)&&(rt!==J&&(i.activeTexture(J),rt=J),i.bindTexture(D,ot||it[D]),ft.type=D,ft.texture=ot)}function qe(){let D=at[rt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function v(){try{i.texSubImage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function O(){try{i.texSubImage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function st(){try{i.texStorage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function lt(){try{i.texStorage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function Z(){try{i.texImage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function K(){try{i.texImage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function ht(D){return c[D]!==void 0?c[D]:i.getParameter(D)}function Et(D,ot){c[D]!==ot&&(i.pixelStorei(D,ot),c[D]=ot)}function dt(D){Jt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Jt.copy(D))}function ut(D){Ft.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ft.copy(D))}function It(D,ot){let J=h.get(ot);J===void 0&&(J=new WeakMap,h.set(ot,J));let ft=J.get(D);ft===void 0&&(ft=i.getUniformBlockIndex(ot,D.name),J.set(D,ft))}function Ut(D,ot){let ft=h.get(ot).get(D);l.get(ot)!==ft&&(i.uniformBlockBinding(ot,ft,D.__bindingPointIndex),l.set(ot,ft))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},c={},rt=null,at={},f={},d=new WeakMap,m=[],_=null,p=!1,g=null,b=null,M=null,x=null,w=null,A=null,C=null,y=new zt(0,0,0),T=0,R=!1,P=null,I=null,V=null,W=null,N=null,Jt.set(0,0,i.canvas.width,i.canvas.height),Ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:nt,bindFramebuffer:bt,drawBuffers:yt,useProgram:Yt,setBlending:Lt,setMaterial:Kt,setFlipSided:ve,setCullFace:be,setLineWidth:Re,setPolygonOffset:Le,setScissorTest:de,activeTexture:ye,bindTexture:U,unbindTexture:qe,compressedTexImage2D:ee,compressedTexImage3D:E,texImage2D:Z,texImage3D:K,pixelStorei:Et,getParameter:ht,updateUBOMapping:It,uniformBlockBinding:Ut,texStorage2D:st,texStorage3D:lt,texSubImage2D:v,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:Y,scissor:dt,viewport:ut,reset:Vt}}function O_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,u=new WeakMap,c=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return m?new OffscreenCanvas(E,v):Ks("canvas")}function p(E,v,O){let z=1,Y=ee(E);if((Y.width>O||Y.height>O)&&(z=O/Math.max(Y.width,Y.height)),z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let st=Math.floor(z*Y.width),lt=Math.floor(z*Y.height);f===void 0&&(f=_(st,lt));let Z=v?_(st,lt):f;return Z.width=st,Z.height=lt,Z.getContext("2d").drawImage(E,0,0,st,lt),Pt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+st+"x"+lt+")."),Z}else return"data"in E&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function g(E){return E.generateMipmaps}function b(E){i.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(E,v,O,z,Y,st=!1){if(E!==null){if(i[E]!==void 0)return i[E];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let lt;z&&(lt=t.get("EXT_texture_norm16"),lt||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8),O===i.UNSIGNED_SHORT&&lt&&(Z=lt.R16_EXT),O===i.SHORT&&lt&&(Z=lt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),v===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8),O===i.UNSIGNED_SHORT&&lt&&(Z=lt.RG16_EXT),O===i.SHORT&&lt&&(Z=lt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_SHORT&&lt&&(Z=lt.RGB16_EXT),O===i.SHORT&&lt&&(Z=lt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),v===i.RGBA){let K=st?Js:Zt.getTransfer(Y);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=K===te?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&lt&&(Z=lt.RGBA16_EXT),O===i.SHORT&&lt&&(Z=lt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function w(E,v){let O;return E?v===null||v===bn||v===Ps?O=i.DEPTH24_STENCIL8:v===un?O=i.DEPTH32F_STENCIL8:v===Rs&&(O=i.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===bn||v===Ps?O=i.DEPTH_COMPONENT24:v===un?O=i.DEPTH_COMPONENT32F:v===Rs&&(O=i.DEPTH_COMPONENT16),O}function A(E,v){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ie&&E.minFilter!==Ue?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){let v=E.target;v.removeEventListener("dispose",C),T(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&c.delete(v)}function y(E){let v=E.target;v.removeEventListener("dispose",y),P(v)}function T(E){let v=n.get(E);if(v.__webglInit===void 0)return;let O=E.source,z=d.get(O);if(z){let Y=z[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(E),Object.keys(z).length===0&&d.delete(O)}n.remove(E)}function R(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let O=E.source,z=d.get(O);delete z[v.__cacheKey],a.memory.textures--}function P(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let Y=0;Y<v.__webglFramebuffer[z].length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[z][Y]);else i.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)i.deleteFramebuffer(v.__webglFramebuffer[z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=E.textures;for(let z=0,Y=O.length;z<Y;z++){let st=n.get(O[z]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),a.memory.textures--),n.remove(O[z])}n.remove(E)}let I=0;function V(){I=0}function W(){return I}function N(E){I=E}function G(){let E=I;return E>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function X(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function $(E,v){let O=n.get(E);if(E.isVideoTexture&&U(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let z=E.image;if(z===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(O,E,v);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function tt(E,v){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){nt(O,E,v);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function rt(E,v){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){nt(O,E,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function at(E,v){let O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){bt(O,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let ct={[Ni]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[ds]:i.MIRRORED_REPEAT},kt={[Ie]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[Va]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},Jt={[cu]:i.NEVER,[pu]:i.ALWAYS,[hu]:i.LESS,[To]:i.LEQUAL,[uu]:i.EQUAL,[Eo]:i.GEQUAL,[fu]:i.GREATER,[du]:i.NOTEQUAL};function Ft(E,v){if(v.type===un&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ue||v.magFilter===Va||v.magFilter===wr||v.magFilter===yi||v.minFilter===Ue||v.minFilter===Va||v.minFilter===wr||v.minFilter===yi)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ct[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ct[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ct[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,kt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,kt[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Jt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ie||v.minFilter!==wr&&v.minFilter!==yi||v.type===un&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function q(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));let z=v.source,Y=d.get(z);Y===void 0&&(Y={},d.set(z,Y));let st=X(v);if(st!==E.__cacheKey){Y[st]===void 0&&(Y[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Y[st].usedTimes++;let lt=Y[E.__cacheKey];lt!==void 0&&(Y[E.__cacheKey].usedTimes--,lt.usedTimes===0&&R(v)),E.__cacheKey=st,E.__webglTexture=Y[st].texture}return O}function it(E,v,O){return Math.floor(Math.floor(E/O)/v)}function et(E,v,O,z){let st=E.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,z,v.data);else{st.sort((Et,dt)=>Et.start-dt.start);let lt=0;for(let Et=1;Et<st.length;Et++){let dt=st[lt],ut=st[Et],It=dt.start+dt.count,Ut=it(ut.start,v.width,4),Vt=it(dt.start,v.width,4);ut.start<=It+1&&Ut===Vt&&it(ut.start+ut.count-1,v.width,4)===Ut?dt.count=Math.max(dt.count,ut.start+ut.count-dt.start):(++lt,st[lt]=ut)}st.length=lt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Et=0,dt=st.length;Et<dt;Et++){let ut=st[Et],It=Math.floor(ut.start/4),Ut=Math.ceil(ut.count/4),Vt=It%v.width,D=Math.floor(It/v.width),ot=Ut,J=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),e.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Vt,D,ot,J,O,z,v.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function nt(E,v,O){let z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=i.TEXTURE_3D);let Y=q(E,v),st=v.source;e.bindTexture(z,E.__webglTexture,i.TEXTURE0+O);let lt=n.get(st);if(st.version!==lt.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let J=Zt.getPrimaries(Zt.workingColorSpace),ft=v.colorSpace===Fe?null:Zt.getPrimaries(v.colorSpace),xt=v.colorSpace===Fe||J===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let K=p(v.image,!1,s.maxTextureSize);K=qe(v,K);let ht=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),dt=x(v.internalFormat,ht,Et,v.normalized,v.colorSpace,v.isVideoTexture);Ft(z,v);let ut,It=v.mipmaps,Ut=v.isVideoTexture!==!0,Vt=lt.__version===void 0||Y===!0,D=st.dataReady,ot=A(v,K);if(v.isDepthTexture)dt=w(v.format===Mi,v.type),Vt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,dt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,dt,K.width,K.height,0,ht,Et,null));else if(v.isDataTexture)if(It.length>0){Ut&&Vt&&e.texStorage2D(i.TEXTURE_2D,ot,dt,It[0].width,It[0].height);for(let J=0,ft=It.length;J<ft;J++)ut=It[J],Ut?D&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ut.width,ut.height,ht,Et,ut.data):e.texImage2D(i.TEXTURE_2D,J,dt,ut.width,ut.height,0,ht,Et,ut.data);v.generateMipmaps=!1}else Ut?(Vt&&e.texStorage2D(i.TEXTURE_2D,ot,dt,K.width,K.height),D&&et(v,K,ht,Et)):e.texImage2D(i.TEXTURE_2D,0,dt,K.width,K.height,0,ht,Et,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&Vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,dt,It[0].width,It[0].height,K.depth);for(let J=0,ft=It.length;J<ft;J++)if(ut=It[J],v.format!==en)if(ht!==null)if(Ut){if(D)if(v.layerUpdates.size>0){let xt=fc(ut.width,ut.height,v.format,v.type);for(let Q of v.layerUpdates){let Tt=ut.data.subarray(Q*xt/ut.data.BYTES_PER_ELEMENT,(Q+1)*xt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Q,ut.width,ut.height,1,ht,Tt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ut.width,ut.height,K.depth,ht,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,dt,ut.width,ut.height,K.depth,0,ut.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ut.width,ut.height,K.depth,ht,Et,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,dt,ut.width,ut.height,K.depth,0,ht,Et,ut.data)}else{Ut&&Vt&&e.texStorage2D(i.TEXTURE_2D,ot,dt,It[0].width,It[0].height);for(let J=0,ft=It.length;J<ft;J++)ut=It[J],v.format!==en?ht!==null?Ut?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ut.width,ut.height,ht,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,J,dt,ut.width,ut.height,0,ut.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?D&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ut.width,ut.height,ht,Et,ut.data):e.texImage2D(i.TEXTURE_2D,J,dt,ut.width,ut.height,0,ht,Et,ut.data)}else if(v.isDataArrayTexture)if(Ut){if(Vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,dt,K.width,K.height,K.depth),D)if(v.layerUpdates.size>0){let J=fc(K.width,K.height,v.format,v.type);for(let ft of v.layerUpdates){let xt=K.data.subarray(ft*J/K.data.BYTES_PER_ELEMENT,(ft+1)*J/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,K.width,K.height,1,ht,Et,xt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ht,Et,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,K.width,K.height,K.depth,0,ht,Et,K.data);else if(v.isData3DTexture)Ut?(Vt&&e.texStorage3D(i.TEXTURE_3D,ot,dt,K.width,K.height,K.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ht,Et,K.data)):e.texImage3D(i.TEXTURE_3D,0,dt,K.width,K.height,K.depth,0,ht,Et,K.data);else if(v.isFramebufferTexture){if(Vt)if(Ut)e.texStorage2D(i.TEXTURE_2D,ot,dt,K.width,K.height);else{let J=K.width,ft=K.height;for(let xt=0;xt<ot;xt++)e.texImage2D(i.TEXTURE_2D,xt,dt,J,ft,0,ht,Et,null),J>>=1,ft>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),K.parentNode!==J){J.appendChild(K),c.add(v),J.onpaint=ft=>{let xt=ft.changedElements;for(let Q of c)xt.includes(Q.image)&&(Q.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let xt=i.RGBA,Q=i.RGBA,Tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,Q,Tt,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(Ut&&Vt){let J=ee(It[0]);e.texStorage2D(i.TEXTURE_2D,ot,dt,J.width,J.height)}for(let J=0,ft=It.length;J<ft;J++)ut=It[J],Ut?D&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ht,Et,ut):e.texImage2D(i.TEXTURE_2D,J,dt,ht,Et,ut);v.generateMipmaps=!1}else if(Ut){if(Vt){let J=ee(K);e.texStorage2D(i.TEXTURE_2D,ot,dt,J.width,J.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Et,K)}else e.texImage2D(i.TEXTURE_2D,0,dt,ht,Et,K);g(v)&&b(z),lt.__version=st.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function bt(E,v,O){if(v.image.length!==6)return;let z=q(E,v),Y=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let st=n.get(Y);if(Y.version!==st.__version||z===!0){e.activeTexture(i.TEXTURE0+O);let lt=Zt.getPrimaries(Zt.workingColorSpace),Z=v.colorSpace===Fe?null:Zt.getPrimaries(v.colorSpace),K=v.colorSpace===Fe||lt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ht=v.isCompressedTexture||v.image[0].isCompressedTexture,Et=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let Q=0;Q<6;Q++)!ht&&!Et?dt[Q]=p(v.image[Q],!0,s.maxCubemapSize):dt[Q]=Et?v.image[Q].image:v.image[Q],dt[Q]=qe(v,dt[Q]);let ut=dt[0],It=r.convert(v.format,v.colorSpace),Ut=r.convert(v.type),Vt=x(v.internalFormat,It,Ut,v.normalized,v.colorSpace),D=v.isVideoTexture!==!0,ot=st.__version===void 0||z===!0,J=Y.dataReady,ft=A(v,ut);Ft(i.TEXTURE_CUBE_MAP,v);let xt;if(ht){D&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Vt,ut.width,ut.height);for(let Q=0;Q<6;Q++){xt=dt[Q].mipmaps;for(let Tt=0;Tt<xt.length;Tt++){let wt=xt[Tt];v.format!==en?It!==null?D?J&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,0,0,wt.width,wt.height,It,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,Vt,wt.width,wt.height,0,wt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,0,0,wt.width,wt.height,It,Ut,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,Vt,wt.width,wt.height,0,It,Ut,wt.data)}}}else{if(xt=v.mipmaps,D&&ot){xt.length>0&&ft++;let Q=ee(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Vt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Et){D?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,dt[Q].width,dt[Q].height,It,Ut,dt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Vt,dt[Q].width,dt[Q].height,0,It,Ut,dt[Q].data);for(let Tt=0;Tt<xt.length;Tt++){let pe=xt[Tt].image[Q].image;D?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,0,0,pe.width,pe.height,It,Ut,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,Vt,pe.width,pe.height,0,It,Ut,pe.data)}}else{D?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,It,Ut,dt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Vt,It,Ut,dt[Q]);for(let Tt=0;Tt<xt.length;Tt++){let wt=xt[Tt];D?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,0,0,It,Ut,wt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,Vt,It,Ut,wt.image[Q])}}}g(v)&&b(i.TEXTURE_CUBE_MAP),st.__version=Y.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function yt(E,v,O,z,Y,st){let lt=r.convert(O.format,O.colorSpace),Z=r.convert(O.type),K=x(O.internalFormat,lt,Z,O.normalized,O.colorSpace),ht=n.get(v),Et=n.get(O);if(Et.__renderTarget=v,!ht.__hasExternalTextures){let dt=Math.max(1,v.width>>st),ut=Math.max(1,v.height>>st);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,st,K,dt,ut,v.depth,0,lt,Z,null):e.texImage2D(Y,st,K,dt,ut,0,lt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),ye(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,Y,Et.__webglTexture,0,de(v)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,Y,Et.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(E,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let z=v.depthTexture,Y=z&&z.isDepthTexture?z.type:null,st=w(v.stencilBuffer,Y),lt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ye(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(v),st,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(v),st,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,st,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,E)}else{let z=v.textures;for(let Y=0;Y<z.length;Y++){let st=z[Y],lt=r.convert(st.format,st.colorSpace),Z=r.convert(st.type),K=x(st.internalFormat,lt,Z,st.normalized,st.colorSpace);ye(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(v),K,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(v),K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(E,v,O){let z=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(v.depthTexture);if(Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,v.depthTexture);let ht=r.convert(v.depthTexture.format),Et=r.convert(v.depthTexture.type),dt;v.depthTexture.format===Ln?dt=i.DEPTH_COMPONENT24:v.depthTexture.format===Mi&&(dt=i.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,dt,v.width,v.height,0,ht,Et,null)}}else $(v.depthTexture,0);let st=Y.__webglTexture,lt=de(v),Z=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,K=v.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ln)ye(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,st,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,st,0);else if(v.depthTexture.format===Mi)ye(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,st,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(E){let v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let z=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){let Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",Y)};z.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=z}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)Mt(v.__webglFramebuffer[z],E,z);else{let z=E.texture.mipmaps;z&&z.length>0?Mt(v.__webglFramebuffer[0],E,0):Mt(v.__webglFramebuffer,E,0)}else if(O){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=i.createRenderbuffer(),Yt(v.__webglDepthbuffer[z],E,!1);else{let Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=v.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,st)}}else{let z=E.texture.mipmaps;if(z&&z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Yt(v.__webglDepthbuffer,E,!1);else{let Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(E,v,O){let z=n.get(E);v!==void 0&&yt(z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ot(E)}function Kt(E){let v=E.texture,O=n.get(E),z=n.get(v);E.addEventListener("dispose",y);let Y=E.textures,st=E.isWebGLCubeRenderTarget===!0,lt=Y.length>1;if(lt||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=v.version,a.memory.textures++),st){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let K=0;K<v.mipmaps.length;K++)O.__webglFramebuffer[Z][K]=i.createFramebuffer()}else O.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)O.__webglFramebuffer[Z]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(lt)for(let Z=0,K=Y.length;Z<K;Z++){let ht=n.get(Y[Z]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ye(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let K=Y[Z];O.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);let ht=r.convert(K.format,K.colorSpace),Et=r.convert(K.type),dt=x(K.internalFormat,ht,Et,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),ut=de(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Yt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)yt(O.__webglFramebuffer[Z][K],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else yt(O.__webglFramebuffer[Z],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);g(v)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Z=0,K=Y.length;Z<K;Z++){let ht=Y[Z],Et=n.get(ht),dt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Et.__webglTexture),Ft(dt,ht),yt(O.__webglFramebuffer,E,ht,i.COLOR_ATTACHMENT0+Z,dt,0),g(ht)&&b(dt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,z.__webglTexture),Ft(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)yt(O.__webglFramebuffer[K],E,v,i.COLOR_ATTACHMENT0,Z,K);else yt(O.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,Z,0);g(v)&&b(Z),e.unbindTexture()}E.depthBuffer&&Ot(E)}function ve(E){let v=E.textures;for(let O=0,z=v.length;O<z;O++){let Y=v[O];if(g(Y)){let st=M(E),lt=n.get(Y).__webglTexture;e.bindTexture(st,lt),b(st),e.unbindTexture()}}}let be=[],Re=[];function Le(E){if(E.samples>0){if(ye(E)===!1){let v=E.textures,O=E.width,z=E.height,Y=i.COLOR_BUFFER_BIT,st=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(E),Z=v.length>1;if(Z)for(let ht=0;ht<v.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);let K=E.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);let Et=n.get(v[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,O,z,0,0,O,z,Y,i.NEAREST),l===!0&&(be.length=0,Re.length=0,be.push(i.COLOR_ATTACHMENT0+ht),E.depthBuffer&&E.resolveDepthBuffer===!1&&(be.push(st),Re.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ht=0;ht<v.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);let Et=n.get(v[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function de(E){return Math.min(s.maxSamples,E.samples)}function ye(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(E){let v=a.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function qe(E,v){let O=E.colorSpace,z=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Zs&&O!==Fe&&(Zt.getTransfer(O)===te?(z!==en||Y!==Ze)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",O)),v}function ee(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.getTextureUnits=W,this.setTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=tt,this.setTexture3D=rt,this.setTextureCube=at,this.rebindTextures=Lt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function B_(i,t){function e(n,s=Fe){let r,a=Zt.getTransfer(s);if(n===Ze)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ec)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ql)return i.BYTE;if(n===tc)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===ic)return i.ALPHA;if(n===sc)return i.RGB;if(n===en)return i.RGBA;if(n===Ln)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===rc)return i.RED;if(n===Xa)return i.RED_INTEGER;if(n===Si)return i.RG;if(n===qa)return i.RG_INTEGER;if(n===Ya)return i.RGBA_INTEGER;if(n===Ar||n===Tr||n===Er||n===Cr)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Ja||n===Ka||n===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===Qa||n===to||n===eo||n===no||n===Rr||n===io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ja||n===Qa)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===to)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===eo)return r.COMPRESSED_R11_EAC;if(n===no)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Rr)return r.COMPRESSED_RG11_EAC;if(n===io)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===so)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ao)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===co)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===po)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===go)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_o)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===yo||n===Mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===So||n===bo||n===Pr||n===wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===So)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ar(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new tn({vertexShader:k_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends yn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,u=null,c=null,f=null,d=null,m=null,_=typeof XRWebGLBinding<"u",p=new Ic,g={},b=e.getContextAttributes(),M=null,x=null,w=[],A=[],C=new Dt,y=null,T=new Se;T.viewport=new ie;let R=new Se;R.viewport=new ie;let P=[T,R],I=new Oa,V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let it=w[q];return it===void 0&&(it=new _s,w[q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(q){let it=w[q];return it===void 0&&(it=new _s,w[q]=it),it.getGripSpace()},this.getHand=function(q){let it=w[q];return it===void 0&&(it=new _s,w[q]=it),it.getHandSpace()};function N(q){let it=A.indexOf(q.inputSource);if(it===-1)return;let et=w[it];et!==void 0&&(et.update(q.inputSource,q.frame,h||a),et.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",X);for(let q=0;q<w.length;q++){let it=A[q];it!==null&&(A[q]=null,w[q].disconnect(it))}V=null,W=null,p.reset();for(let q in g)delete g[q];t.setRenderTarget(M),d=null,f=null,c=null,s=null,x=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c===null&&_&&(c=new XRWebGLBinding(s,e)),c},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,nt=null,bt=null;b.depth&&(bt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=b.stencil?Mi:Ln,nt=b.stencil?Ps:bn);let yt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};c=this.getBinding(),f=c.createProjectionLayer(yt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Qe(f.textureWidth,f.textureHeight,{format:en,type:Ze,depthTexture:new Kn(f.textureWidth,f.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let et={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Qe(d.framebufferWidth,d.framebufferHeight,{format:en,type:Ze,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(q){for(let it=0;it<q.removed.length;it++){let et=q.removed[it],nt=A.indexOf(et);nt>=0&&(A[nt]=null,w[nt].disconnect(et))}for(let it=0;it<q.added.length;it++){let et=q.added[it],nt=A.indexOf(et);if(nt===-1){for(let yt=0;yt<w.length;yt++)if(yt>=A.length){A.push(et),nt=yt;break}else if(A[yt]===null){A[yt]=et,nt=yt;break}if(nt===-1)break}let bt=w[nt];bt&&bt.connect(et)}}let $=new L,tt=new L;function rt(q,it,et){$.setFromMatrixPosition(it.matrixWorld),tt.setFromMatrixPosition(et.matrixWorld);let nt=$.distanceTo(tt),bt=it.projectionMatrix.elements,yt=et.projectionMatrix.elements,Yt=bt[14]/(bt[10]-1),Mt=bt[14]/(bt[10]+1),Ot=(bt[9]+1)/bt[5],Lt=(bt[9]-1)/bt[5],Kt=(bt[8]-1)/bt[0],ve=(yt[8]+1)/yt[0],be=Yt*Kt,Re=Yt*ve,Le=nt/(-Kt+ve),de=Le*-Kt;if(it.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(de),q.translateZ(Le),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let ye=Yt+Le,U=Mt+Le,qe=be-de,ee=Re+(nt-de),E=Ot*Mt/U*ye,v=Lt*Mt/U*ye;q.projectionMatrix.makePerspective(qe,ee,E,v,ye,U),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function at(q,it){it===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(it.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let it=q.near,et=q.far;p.texture!==null&&(p.depthNear>0&&(it=p.depthNear),p.depthFar>0&&(et=p.depthFar)),I.near=R.near=T.near=it,I.far=R.far=T.far=et,(V!==I.near||W!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),V=I.near,W=I.far),I.layers.mask=q.layers.mask|6,T.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;let nt=q.parent,bt=I.cameras;at(I,nt);for(let yt=0;yt<bt.length;yt++)at(bt[yt],nt);bt.length===2?rt(I,T,R):I.projectionMatrix.copy(T.projectionMatrix),ct(q,I,nt)};function ct(q,it,et){et===null?q.matrix.copy(it.matrixWorld):(q.matrix.copy(et.matrixWorld),q.matrix.invert(),q.matrix.multiply(it.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Fi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(q){return g[q]};let kt=null;function Jt(q,it){if(u=it.getViewerPose(h||a),m=it,u!==null){let et=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let nt=!1;et.length!==I.cameras.length&&(I.cameras.length=0,nt=!0);for(let Mt=0;Mt<et.length;Mt++){let Ot=et[Mt],Lt=null;if(d!==null)Lt=d.getViewport(Ot);else{let ve=c.getViewSubImage(f,Ot);Lt=ve.viewport,Mt===0&&(t.setRenderTargetTextures(x,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(x))}let Kt=P[Mt];Kt===void 0&&(Kt=new Se,Kt.layers.enable(Mt),Kt.viewport=new ie,P[Mt]=Kt),Kt.matrix.fromArray(Ot.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Ot.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Mt===0&&(I.matrix.copy(Kt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),nt===!0&&I.cameras.push(Kt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){c=n.getBinding();let Mt=c.getDepthInformation(et[0]);Mt&&Mt.isValid&&Mt.texture&&p.init(Mt,s.renderState)}if(bt&&bt.includes("camera-access")&&_){t.state.unbindTexture(),c=n.getBinding();for(let Mt=0;Mt<et.length;Mt++){let Ot=et[Mt].camera;if(Ot){let Lt=g[Ot];Lt||(Lt=new ar,g[Ot]=Lt);let Kt=c.getCameraImage(Ot);Lt.sourceTexture=Kt}}}}for(let et=0;et<w.length;et++){let nt=A[et],bt=w[et];nt!==null&&bt!==void 0&&bt.update(nt,it,h||a)}kt&&kt(q,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let Ft=new Zu;Ft.setAnimationLoop(Jt),this.setAnimationLoop=function(q){kt=q},this.dispose=function(){}}},V_=new Ht,tf=new Bt;tf.set(-1,0,0,0,1,0,0,0,1);function G_(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,cc(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,b,M,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),c(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,b,M):g.isSpriteMaterial?h(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===We&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===We&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let b=t.get(g),M=b.envMap,x=b.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(tf),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function c(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===We&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let b=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){let A=w.program;n.uniformBlockBinding(x,A)}function h(x,w){let A=s[x.id];A===void 0&&(p(x),A=u(x),s[x.id]=A,x.addEventListener("dispose",b));let C=w.program;n.updateUBOMapping(x,C);let y=t.render.frame;r[x.id]!==y&&(f(x),r[x.id]=y)}function u(x){let w=c();x.__bindingPointIndex=w;let A=i.createBuffer(),C=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,C,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,A),A}function c(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let w=s[x.id],A=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let y=0,T=A.length;y<T;y++){let R=A[y];if(Array.isArray(R))for(let P=0,I=R.length;P<I;P++)d(R[P],y,P,C);else d(R,y,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,w,A,C){if(_(x,w,A,C)===!0){let y=x.__offset,T=x.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){let I=T[P],V=g(I);m(I,x.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function m(x,w,A){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,A)}function _(x,w,A,C){let y=x.value,T=w+"_"+A;if(C[T]===void 0)return typeof y=="number"||typeof y=="boolean"?C[T]=y:ArrayBuffer.isView(y)?C[T]=y.slice():C[T]=y.clone(),!0;{let R=C[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return C[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function p(x){let w=x.uniforms,A=0,C=16;for(let T=0,R=w.length;T<R;T++){let P=Array.isArray(w[T])?w[T]:[w[T]];for(let I=0,V=P.length;I<V;I++){let W=P[I],N=Array.isArray(W.value)?W.value:[W.value];for(let G=0,X=N.length;G<X;G++){let $=N[G],tt=g($),rt=A%C,at=rt%tt.boundary,ct=rt+at;A+=at,ct!==0&&C-ct<tt.storage&&(A+=C-ct),W.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=tt.storage}}}let y=A%C;return y>0&&(A+=C-y),x.__size=A,x.__cache={},this}function g(x){let w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",x),w}function b(x){let w=x.target;w.removeEventListener("dispose",b);let A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function M(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:h,dispose:M}}var W_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function X_(){return On===null&&(On=new ir(W_,16,16,Si,Fn),On.name="DFG_LUT",On.minFilter=Ue,On.magFilter=Ue,On.wrapS=on,On.wrapT=on,On.generateMipmaps=!1,On.needsUpdate=!0),On}var Do=class{constructor(t={}){let{canvas:e=mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Ze}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=d,p=new Set([Ya,qa,Xa]),g=new Set([Ze,bn,Rs,Ps,Ha,Wa]),b=new Uint32Array(4),M=new Int32Array(4),x=new L,w=null,A=null,C=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,I=null,V=null,W=null,N=null;this._outputColorSpace=ne;let G=0,X=0,$=null,tt=-1,rt=null,at=new ie,ct=new ie,kt=null,Jt=new zt(0),Ft=0,q=e.width,it=e.height,et=1,nt=null,bt=null,yt=new ie(0,0,q,it),Yt=new ie(0,0,q,it),Mt=!1,Ot=new vs,Lt=!1,Kt=!1,ve=new Ht,be=new L,Re=new ie,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function ye(){return $===null?et:1}let U=n;function qe(S,F){return e.getContext(S,F)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Rn,!1),U===null){let F="webgl2";if(U=qe(F,S),U===null)throw qe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Nt("WebGLRenderer: "+S.message),S}let ee,E,v,O,z,Y,st,lt,Z,K,ht,Et,dt,ut,It,Ut,Vt,D,ot,J,ft,xt,Q;function Tt(){ee=new jg(U),ee.init(),ft=new B_(U,ee),E=new Wg(U,ee,t,ft),v=new F_(U,ee),E.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),V=U.createFramebuffer(),W=U.createFramebuffer(),N=U.createFramebuffer(),O=new e0(U),z=new S_,Y=new O_(U,ee,v,z,E,ft,O),st=new $g(R),lt=new rp(U),xt=new Gg(U,lt),Z=new Qg(U,lt,O,xt),K=new i0(U,Z,lt,xt,O),D=new n0(U,E,Y),It=new Xg(z),ht=new M_(R,st,ee,E,xt,It),Et=new G_(R,z),dt=new w_,ut=new P_(ee),Vt=new Vg(R,st,v,K,m,l),Ut=new N_(R,K,E),Q=new H_(U,O,E,v),ot=new Hg(U,ee,O),J=new t0(U,ee,O),O.programs=ht.programs,R.capabilities=E,R.extensions=ee,R.properties=z,R.renderLists=dt,R.shadowMap=Ut,R.state=v,R.info=O}Tt(),_!==Ze&&(T=new r0(_,e.width,e.height,o,s,r));let wt=new Dc(R,U);this.xr=wt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(S){S!==void 0&&(et=S,this.setSize(q,it,!1))},this.getSize=function(S){return S.set(q,it)},this.setSize=function(S,F,H=!0){if(wt.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,it=F,e.width=Math.floor(S*et),e.height=Math.floor(F*et),H===!0&&(e.style.width=S+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(q*et,it*et).floor()},this.setDrawingBufferSize=function(S,F,H){q=S,it=F,et=H,e.width=Math.floor(S*H),e.height=Math.floor(F*H),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(_===Ze){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(at)},this.getViewport=function(S){return S.copy(yt)},this.setViewport=function(S,F,H,B){S.isVector4?yt.set(S.x,S.y,S.z,S.w):yt.set(S,F,H,B),v.viewport(at.copy(yt).multiplyScalar(et).round())},this.getScissor=function(S){return S.copy(Yt)},this.setScissor=function(S,F,H,B){S.isVector4?Yt.set(S.x,S.y,S.z,S.w):Yt.set(S,F,H,B),v.scissor(ct.copy(Yt).multiplyScalar(et).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(S){v.setScissorTest(Mt=S)},this.setOpaqueSort=function(S){nt=S},this.setTransparentSort=function(S){bt=S},this.getClearColor=function(S){return S.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,H=!0){let B=0;if(S){let k=!1;if($!==null){let _t=$.texture.format;k=p.has(_t)}if(k){let _t=$.texture.type,St=g.has(_t),gt=Vt.getClearColor(),At=Vt.getClearAlpha(),Ct=gt.r,Gt=gt.g,Xt=gt.b;St?(b[0]=Ct,b[1]=Gt,b[2]=Xt,b[3]=At,U.clearBufferuiv(U.COLOR,0,b)):(M[0]=Ct,M[1]=Gt,M[2]=Xt,M[3]=At,U.clearBufferiv(U.COLOR,0,M))}else B|=U.COLOR_BUFFER_BIT}F&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),I=S},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Rn,!1),Vt.dispose(),dt.dispose(),ut.dispose(),z.dispose(),st.dispose(),K.dispose(),xt.dispose(),Q.dispose(),ht.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Kc),wt.removeEventListener("sessionend",$c),Ti.stop()};function pe(S){S.preventDefault(),oc("WebGLRenderer: Context Lost."),P=!0}function le(){oc("WebGLRenderer: Context Restored."),P=!1;let S=O.autoReset,F=Ut.enabled,H=Ut.autoUpdate,B=Ut.needsUpdate,k=Ut.type;Tt(),O.autoReset=S,Ut.enabled=F,Ut.autoUpdate=H,Ut.needsUpdate=B,Ut.type=k}function Rn(S){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Pn(S){let F=S.target;F.removeEventListener("dispose",Pn),Uf(F)}function Uf(S){Nf(S),z.remove(S)}function Nf(S){let F=z.get(S).programs;F!==void 0&&(F.forEach(function(H){ht.releaseProgram(H)}),S.isShaderMaterial&&ht.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,H,B,k,_t){F===null&&(F=Le);let St=k.isMesh&&k.matrixWorld.determinantAffine()<0,gt=Bf(S,F,H,B,k);v.setMaterial(B,St);let At=H.index,Ct=1;if(B.wireframe===!0){if(At=Z.getWireframeAttribute(H),At===void 0)return;Ct=2}let Gt=H.drawRange,Xt=H.attributes.position,Rt=Gt.start*Ct,se=(Gt.start+Gt.count)*Ct;_t!==null&&(Rt=Math.max(Rt,_t.start*Ct),se=Math.min(se,(_t.start+_t.count)*Ct)),At!==null?(Rt=Math.max(Rt,0),se=Math.min(se,At.count)):Xt!=null&&(Rt=Math.max(Rt,0),se=Math.min(se,Xt.count));let ge=se-Rt;if(ge<0||ge===1/0)return;xt.setup(k,B,gt,H,At);let me,ae=ot;if(At!==null&&(me=lt.get(At),ae=J,ae.setIndex(me)),k.isMesh)B.wireframe===!0?(v.setLineWidth(B.wireframeLinewidth*ye()),ae.setMode(U.LINES)):ae.setMode(U.TRIANGLES);else if(k.isLine){let Oe=B.linewidth;Oe===void 0&&(Oe=1),v.setLineWidth(Oe*ye()),k.isLineSegments?ae.setMode(U.LINES):k.isLineLoop?ae.setMode(U.LINE_LOOP):ae.setMode(U.LINE_STRIP)}else k.isPoints?ae.setMode(U.POINTS):k.isSprite&&ae.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Oe=k._multiDrawStarts,vt=k._multiDrawCounts,Ke=k._multiDrawCount,$t=At?lt.get(At).bytesPerElement:1,sn=z.get(B).currentProgram.getUniforms();for(let In=0;In<Ke;In++)sn.setValue(U,"_gl_DrawID",In),ae.render(Oe[In]/$t,vt[In])}else if(k.isInstancedMesh)ae.renderInstances(Rt,ge,k.count);else if(H.isInstancedBufferGeometry){let Oe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,vt=Math.min(H.instanceCount,Oe);ae.renderInstances(Rt,ge,vt)}else ae.render(Rt,ge)};function Jc(S,F,H){S.transparent===!0&&S.side===Un&&S.forceSinglePass===!1?(S.side=We,S.needsUpdate=!0,Gr(S,F,H),S.side=Zn,S.needsUpdate=!0,Gr(S,F,H),S.side=Un):Gr(S,F,H)}this.compile=function(S,F,H=null){H===null&&(H=S),A=ut.get(H),A.init(F),y.push(A),H.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),S!==H&&S.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights();let B=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let _t=k.material;if(_t)if(Array.isArray(_t))for(let St=0;St<_t.length;St++){let gt=_t[St];Jc(gt,H,k),B.add(gt)}else Jc(_t,H,k),B.add(_t)}),A=y.pop(),B},this.compileAsync=function(S,F,H=null){let B=this.compile(S,F,H);return new Promise(k=>{function _t(){if(B.forEach(function(St){z.get(St).currentProgram.isReady()&&B.delete(St)}),B.size===0){k(S);return}setTimeout(_t,10)}ee.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let $o=null;function Ff(S){$o&&$o(S)}function Kc(){Ti.stop()}function $c(){Ti.start()}let Ti=new Zu;Ti.setAnimationLoop(Ff),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(S){$o=S,wt.setAnimationLoop(S),S===null?Ti.stop():Ti.start()},wt.addEventListener("sessionstart",Kc),wt.addEventListener("sessionend",$c),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(S,F);let H=wt.enabled===!0&&wt.isPresenting===!0,B=T!==null&&($===null||H)&&T.begin(R,$);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(F),F=wt.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,F,$),A=ut.get(S,y.length),A.init(F),A.state.textureUnits=Y.getTextureUnits(),y.push(A),ve.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ot.setFromProjectionMatrix(ve,vn,F.reversedDepth),Kt=this.localClippingEnabled,Lt=It.init(this.clippingPlanes,Kt),w=dt.get(S,C.length),w.init(),C.push(w),wt.enabled===!0&&wt.isPresenting===!0){let St=R.xr.getDepthSensingMesh();St!==null&&jo(St,F,-1/0,R.sortObjects)}jo(S,F,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(nt,bt,F.reversedDepth),de=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,de&&Vt.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Lt===!0&&It.beginShadows();let k=A.state.shadowsArray;if(Ut.render(k,S,F),Lt===!0&&It.endShadows(),(B&&T.hasRenderPass())===!1){let St=w.opaque,gt=w.transmissive;if(A.setupLights(),F.isArrayCamera){let At=F.cameras;if(gt.length>0)for(let Ct=0,Gt=At.length;Ct<Gt;Ct++){let Xt=At[Ct];Qc(St,gt,S,Xt)}de&&Vt.render(S);for(let Ct=0,Gt=At.length;Ct<Gt;Ct++){let Xt=At[Ct];jc(w,S,Xt,Xt.viewport)}}else gt.length>0&&Qc(St,gt,S,F),de&&Vt.render(S),jc(w,S,F)}$!==null&&X===0&&(Y.updateMultisampleRenderTarget($),Y.updateRenderTargetMipmap($)),B&&T.end(R),S.isScene===!0&&S.onAfterRender(R,S,F),xt.resetDefaultState(),tt=-1,rt=null,y.pop(),y.length>0?(A=y[y.length-1],Y.setTextureUnits(A.state.textureUnits),Lt===!0&&It.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,I!==null&&I.renderEnd()};function jo(S,F,H,B){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)A.pushLightProbeGrid(S);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ot.intersectsSprite(S)){B&&Re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);let St=K.update(S),gt=S.material;gt.visible&&w.push(S,St,gt,H,Re.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ot.intersectsObject(S))){let St=K.update(S),gt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Re.copy(S.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Re.copy(St.boundingSphere.center)),Re.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(gt)){let At=St.groups;for(let Ct=0,Gt=At.length;Ct<Gt;Ct++){let Xt=At[Ct],Rt=gt[Xt.materialIndex];Rt&&Rt.visible&&w.push(S,St,Rt,H,Re.z,Xt)}}else gt.visible&&w.push(S,St,gt,H,Re.z,null)}}let _t=S.children;for(let St=0,gt=_t.length;St<gt;St++)jo(_t[St],F,H,B)}function jc(S,F,H,B){let{opaque:k,transmissive:_t,transparent:St}=S;A.setupLightsView(H),Lt===!0&&It.setGlobalState(R.clippingPlanes,H),B&&v.viewport(at.copy(B)),k.length>0&&Vr(k,F,H),_t.length>0&&Vr(_t,F,H),St.length>0&&Vr(St,F,H),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Qc(S,F,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){let Rt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new Qe(1,1,{generateMipmaps:!0,type:Rt?Fn:Ze,minFilter:yi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let _t=A.state.transmissionRenderTarget[B.id],St=B.viewport||at;_t.setSize(St.z*R.transmissionResolutionScale,St.w*R.transmissionResolutionScale);let gt=R.getRenderTarget(),At=R.getActiveCubeFace(),Ct=R.getActiveMipmapLevel();R.setRenderTarget(_t),R.getClearColor(Jt),Ft=R.getClearAlpha(),Ft<1&&R.setClearColor(16777215,.5),R.clear(),de&&Vt.render(H);let Gt=R.toneMapping;R.toneMapping=Sn;let Xt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),Lt===!0&&It.setGlobalState(R.clippingPlanes,B),Vr(S,H,B),Y.updateMultisampleRenderTarget(_t),Y.updateRenderTargetMipmap(_t),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let se=0,ge=F.length;se<ge;se++){let me=F[se],{object:ae,geometry:Oe,material:vt,group:Ke}=me;if(vt.side===Un&&ae.layers.test(B.layers)){let $t=vt.side;vt.side=We,vt.needsUpdate=!0,th(ae,H,B,Oe,vt,Ke),vt.side=$t,vt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Y.updateMultisampleRenderTarget(_t),Y.updateRenderTargetMipmap(_t))}R.setRenderTarget(gt,At,Ct),R.setClearColor(Jt,Ft),Xt!==void 0&&(B.viewport=Xt),R.toneMapping=Gt}function Vr(S,F,H){let B=F.isScene===!0?F.overrideMaterial:null;for(let k=0,_t=S.length;k<_t;k++){let St=S[k],{object:gt,geometry:At,group:Ct}=St,Gt=St.material;Gt.allowOverride===!0&&B!==null&&(Gt=B),gt.layers.test(H.layers)&&th(gt,F,H,At,Gt,Ct)}}function th(S,F,H,B,k,_t){S.onBeforeRender(R,F,H,B,k,_t),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(R,F,H,B,S,_t),k.transparent===!0&&k.side===Un&&k.forceSinglePass===!1?(k.side=We,k.needsUpdate=!0,R.renderBufferDirect(H,F,B,k,S,_t),k.side=Zn,k.needsUpdate=!0,R.renderBufferDirect(H,F,B,k,S,_t),k.side=Un):R.renderBufferDirect(H,F,B,k,S,_t),S.onAfterRender(R,F,H,B,k,_t)}function Gr(S,F,H){F.isScene!==!0&&(F=Le);let B=z.get(S),k=A.state.lights,_t=A.state.shadowsArray,St=k.state.version,gt=ht.getParameters(S,k.state,_t,F,H,A.state.lightProbeGridArray),At=ht.getProgramCacheKey(gt),Ct=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,B.fog=F.fog;let Gt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=st.get(S.envMap||B.environment,Gt),B.envMapRotation=B.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",Pn),Ct=new Map,B.programs=Ct);let Xt=Ct.get(At);if(Xt!==void 0){if(B.currentProgram===Xt&&B.lightsStateVersion===St)return nh(S,gt),Xt}else gt.uniforms=ht.getUniforms(S),I!==null&&S.isNodeMaterial&&I.build(S,H,gt),S.onBeforeCompile(gt,R),Xt=ht.acquireProgram(gt,At),Ct.set(At,Xt),B.uniforms=gt.uniforms;let Rt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=It.uniform),nh(S,gt),B.needsLights=zf(S),B.lightsStateVersion=St,B.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=A.state.lightProbeGridArray.length>0,B.currentProgram=Xt,B.uniformsList=null,Xt}function eh(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=Ds.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function nh(S,F){let H=z.get(S);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Of(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let H=0,B=S.length;H<B;H++){let k=S[H];if(k.texture!==null&&k.boundingBox.containsPoint(x))return k}return null}function Bf(S,F,H,B,k){F.isScene!==!0&&(F=Le),Y.resetTextureUnits();let _t=F.fog,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?F.environment:null,gt=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Zt.workingColorSpace,At=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ct=st.get(B.envMap||St,At),Gt=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Rt=!!H.morphAttributes.position,se=!!H.morphAttributes.normal,ge=!!H.morphAttributes.color,me=Sn;B.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(me=R.toneMapping);let ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Oe=ae!==void 0?ae.length:0,vt=z.get(B),Ke=A.state.lights;if(Lt===!0&&(Kt===!0||S!==rt)){let ce=S===rt&&B.id===tt;It.setState(B,S,ce)}let $t=!1;B.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Ke.state.version||vt.outputColorSpace!==gt||k.isBatchedMesh&&vt.batching===!1||!k.isBatchedMesh&&vt.batching===!0||k.isBatchedMesh&&vt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&vt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&vt.instancing===!1||!k.isInstancedMesh&&vt.instancing===!0||k.isSkinnedMesh&&vt.skinning===!1||!k.isSkinnedMesh&&vt.skinning===!0||k.isInstancedMesh&&vt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&vt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&vt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&vt.instancingMorph===!1&&k.morphTexture!==null||vt.envMap!==Ct||B.fog===!0&&vt.fog!==_t||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==It.numPlanes||vt.numIntersection!==It.numIntersection)||vt.vertexAlphas!==Gt||vt.vertexTangents!==Xt||vt.morphTargets!==Rt||vt.morphNormals!==se||vt.morphColors!==ge||vt.toneMapping!==me||vt.morphTargetsCount!==Oe||!!vt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,vt.__version=B.version);let sn=vt.currentProgram;$t===!0&&(sn=Gr(B,F,k),I&&B.isNodeMaterial&&I.onUpdateProgram(B,sn,vt));let In=!1,ti=!1,$i=!1,oe=sn.getUniforms(),_e=vt.uniforms;if(v.useProgram(sn.program)&&(In=!0,ti=!0,$i=!0),B.id!==tt&&(tt=B.id,ti=!0),vt.needsLights){let ce=Of(A.state.lightProbeGridArray,k);vt.lightProbeGrid!==ce&&(vt.lightProbeGrid=ce,ti=!0)}if(In||rt!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),oe.setValue(U,"projectionMatrix",S.projectionMatrix),oe.setValue(U,"viewMatrix",S.matrixWorldInverse);let ni=oe.map.cameraPosition;ni!==void 0&&ni.setValue(U,be.setFromMatrixPosition(S.matrixWorld)),E.logarithmicDepthBuffer&&oe.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),rt!==S&&(rt=S,ti=!0,$i=!0)}if(vt.needsLights&&(Ke.state.directionalShadowMap.length>0&&oe.setValue(U,"directionalShadowMap",Ke.state.directionalShadowMap,Y),Ke.state.spotShadowMap.length>0&&oe.setValue(U,"spotShadowMap",Ke.state.spotShadowMap,Y),Ke.state.pointShadowMap.length>0&&oe.setValue(U,"pointShadowMap",Ke.state.pointShadowMap,Y)),k.isSkinnedMesh){oe.setOptional(U,k,"bindMatrix"),oe.setOptional(U,k,"bindMatrixInverse");let ce=k.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),oe.setValue(U,"boneTexture",ce.boneTexture,Y))}k.isBatchedMesh&&(oe.setOptional(U,k,"batchingTexture"),oe.setValue(U,"batchingTexture",k._matricesTexture,Y),oe.setOptional(U,k,"batchingIdTexture"),oe.setValue(U,"batchingIdTexture",k._indirectTexture,Y),oe.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&oe.setValue(U,"batchingColorTexture",k._colorsTexture,Y));let ei=H.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&D.update(k,H,sn),(ti||vt.receiveShadow!==k.receiveShadow)&&(vt.receiveShadow=k.receiveShadow,oe.setValue(U,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&F.environment!==null&&(_e.envMapIntensity.value=F.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=X_()),ti){if(oe.setValue(U,"toneMappingExposure",R.toneMappingExposure),vt.needsLights&&kf(_e,$i),_t&&B.fog===!0&&Et.refreshFogUniforms(_e,_t),Et.refreshMaterialUniforms(_e,B,et,it,A.state.transmissionRenderTarget[S.id]),vt.needsLights&&vt.lightProbeGrid){let ce=vt.lightProbeGrid;_e.probesSH.value=ce.texture,_e.probesMin.value.copy(ce.boundingBox.min),_e.probesMax.value.copy(ce.boundingBox.max),_e.probesResolution.value.copy(ce.resolution)}Ds.upload(U,eh(vt),_e,Y)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ds.upload(U,eh(vt),_e,Y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(U,"center",k.center),oe.setValue(U,"modelViewMatrix",k.modelViewMatrix),oe.setValue(U,"normalMatrix",k.normalMatrix),oe.setValue(U,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let ce=B.uniformsGroups;for(let ni=0,ji=ce.length;ni<ji;ni++){let ih=ce[ni];Q.update(ih,sn),Q.bind(ih,sn)}}return sn}function kf(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function zf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(S,F,H){let B=z.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(S.texture).__webglTexture=F,z.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let H=z.get(S);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,H=0){$=S,G=F,X=H;let B=null,k=!1,_t=!1;if(S){let gt=z.get(S);if(gt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,gt.__webglFramebuffer),at.copy(S.viewport),ct.copy(S.scissor),kt=S.scissorTest,v.viewport(at),v.scissor(ct),v.setScissorTest(kt),tt=-1;return}else if(gt.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(gt.__hasExternalTextures)Y.rebindTextures(S,z.get(S.texture).__webglTexture,z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Gt=S.depthTexture;if(gt.__boundDepthTexture!==Gt){if(Gt!==null&&z.has(Gt)&&(S.width!==Gt.image.width||S.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}let At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(_t=!0);let Ct=z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ct[F])?B=Ct[F][H]:B=Ct[F],k=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?B=z.get(S).__webglMultisampledFramebuffer:Array.isArray(Ct)?B=Ct[H]:B=Ct,at.copy(S.viewport),ct.copy(S.scissor),kt=S.scissorTest}else at.copy(yt).multiplyScalar(et).floor(),ct.copy(Yt).multiplyScalar(et).floor(),kt=Mt;if(H!==0&&(B=V),v.bindFramebuffer(U.FRAMEBUFFER,B)&&v.drawBuffers(S,B),v.viewport(at),v.scissor(ct),v.setScissorTest(kt),k){let gt=z.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,gt.__webglTexture,H)}else if(_t){let gt=F;for(let At=0;At<S.textures.length;At++){let Ct=z.get(S.textures[At]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+At,Ct.__webglTexture,H,gt)}}else if(S!==null&&H!==0){let gt=z.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gt.__webglTexture,H)}tt=-1},this.readRenderTargetPixels=function(S,F,H,B,k,_t,St,gt=0){if(!(S&&S.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At){v.bindFramebuffer(U.FRAMEBUFFER,At);try{let Ct=S.textures[gt],Gt=Ct.format,Xt=Ct.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt),!E.textureFormatReadable(Gt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(Xt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-B&&H>=0&&H<=S.height-k&&U.readPixels(F,H,B,k,ft.convert(Gt),ft.convert(Xt),_t)}finally{let Ct=$!==null?z.get($).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(S,F,H,B,k,_t,St,gt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At)if(F>=0&&F<=S.width-B&&H>=0&&H<=S.height-k){v.bindFramebuffer(U.FRAMEBUFFER,At);let Ct=S.textures[gt],Gt=Ct.format,Xt=Ct.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt),!E.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Rt),U.bufferData(U.PIXEL_PACK_BUFFER,_t.byteLength,U.STREAM_READ),U.readPixels(F,H,B,k,ft.convert(Gt),ft.convert(Xt),0);let se=$!==null?z.get($).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,se);let ge=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await _u(U,ge,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Rt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_t),U.deleteBuffer(Rt),U.deleteSync(ge),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,H=0){let B=Math.pow(2,-H),k=Math.floor(S.image.width*B),_t=Math.floor(S.image.height*B),St=F!==null?F.x:0,gt=F!==null?F.y:0;Y.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,St,gt,k,_t),v.unbindTexture()},this.copyTextureToTexture=function(S,F,H=null,B=null,k=0,_t=0){let St,gt,At,Ct,Gt,Xt,Rt,se,ge,me=S.isCompressedTexture?S.mipmaps[_t]:S.image;if(H!==null)St=H.max.x-H.min.x,gt=H.max.y-H.min.y,At=H.isBox3?H.max.z-H.min.z:1,Ct=H.min.x,Gt=H.min.y,Xt=H.isBox3?H.min.z:0;else{let _e=Math.pow(2,-k);St=Math.floor(me.width*_e),gt=Math.floor(me.height*_e),S.isDataArrayTexture?At=me.depth:S.isData3DTexture?At=Math.floor(me.depth*_e):At=1,Ct=0,Gt=0,Xt=0}B!==null?(Rt=B.x,se=B.y,ge=B.z):(Rt=0,se=0,ge=0);let ae=ft.convert(F.format),Oe=ft.convert(F.type),vt;F.isData3DTexture?(Y.setTexture3D(F,0),vt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Y.setTexture2DArray(F,0),vt=U.TEXTURE_2D_ARRAY):(Y.setTexture2D(F,0),vt=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let Ke=v.getParameter(U.UNPACK_ROW_LENGTH),$t=v.getParameter(U.UNPACK_IMAGE_HEIGHT),sn=v.getParameter(U.UNPACK_SKIP_PIXELS),In=v.getParameter(U.UNPACK_SKIP_ROWS),ti=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,me.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Ct),v.pixelStorei(U.UNPACK_SKIP_ROWS,Gt),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Xt);let $i=S.isDataArrayTexture||S.isData3DTexture,oe=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let _e=z.get(S),ei=z.get(F),ce=z.get(_e.__renderTarget),ni=z.get(ei.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,ce.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ji=0;ji<At;ji++)$i&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,z.get(S).__webglTexture,k,Xt+ji),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,z.get(F).__webglTexture,_t,ge+ji)),U.blitFramebuffer(Ct,Gt,St,gt,Rt,se,St,gt,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||z.has(S)){let _e=z.get(S),ei=z.get(F);v.bindFramebuffer(U.READ_FRAMEBUFFER,W),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,N);for(let ce=0;ce<At;ce++)$i?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,k,Xt+ce):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,k),oe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ei.__webglTexture,_t,ge+ce):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ei.__webglTexture,_t),k!==0?U.blitFramebuffer(Ct,Gt,St,gt,Rt,se,St,gt,U.COLOR_BUFFER_BIT,U.NEAREST):oe?U.copyTexSubImage3D(vt,_t,Rt,se,ge+ce,Ct,Gt,St,gt):U.copyTexSubImage2D(vt,_t,Rt,se,Ct,Gt,St,gt);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else oe?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(vt,_t,Rt,se,ge,St,gt,At,ae,Oe,me.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(vt,_t,Rt,se,ge,St,gt,At,ae,me.data):U.texSubImage3D(vt,_t,Rt,se,ge,St,gt,At,ae,Oe,me):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,_t,Rt,se,St,gt,ae,Oe,me.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,_t,Rt,se,me.width,me.height,ae,me.data):U.texSubImage2D(U.TEXTURE_2D,_t,Rt,se,St,gt,ae,Oe,me);v.pixelStorei(U.UNPACK_ROW_LENGTH,Ke),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$t),v.pixelStorei(U.UNPACK_SKIP_PIXELS,sn),v.pixelStorei(U.UNPACK_SKIP_ROWS,In),v.pixelStorei(U.UNPACK_SKIP_IMAGES,ti),_t===0&&F.generateMipmaps&&U.generateMipmap(vt),v.unbindTexture()},this.initRenderTarget=function(S){z.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){G=0,X=0,$=null,v.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var ef={type:"change"},Uc={type:"start"},sf={type:"end"},No=new Oi,nf=new an,Y_=Math.cos(70*Ir.DEG2RAD),Ee=new L,Je=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lc=1e-6,Fo=class extends Mr{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Ne,this._lastTargetPosition=new L,this._quat=new Ne().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Es,this._sphericalDelta=new Es,this._scale=1,this._panOffset=new L,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new L,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=J_.bind(this),this._onPointerDown=Z_.bind(this),this._onPointerUp=K_.bind(this),this._onContextMenu=ix.bind(this),this._onMouseWheel=Q_.bind(this),this._onKeyDown=tx.bind(this),this._onTouchStart=ex.bind(this),this._onTouchMove=nx.bind(this),this._onMouseDown=$_.bind(this),this._onMouseMove=j_.bind(this),this._interceptControlDown=sx.bind(this),this._interceptControlUp=rx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ef),this.update(),this.state=re.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Je:n>Math.PI&&(n-=Je),s<-Math.PI?s+=Je:s>Math.PI&&(s-=Je),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ee.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let h=new L(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(No.origin.copy(this.object.position),No.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(No.direction))<Y_?this.object.lookAt(this.target):(nf.setFromNormalAndCoplanarPoint(this.object.up,this.target),No.intersectPlane(nf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lc||this._lastTargetPosition.distanceToSquared(this.target)>Lc?(this.dispatchEvent(ef),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Je/60*this.autoRotateSpeed*t:Je/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ee.copy(s).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Z_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function J_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function K_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sf),this.state=re.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case _i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case _i.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case _i.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Uc)}function j_(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Q_(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(Uc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(sf))}function tx(i){this.enabled!==!1&&this._handleKeyDown(i)}function ex(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Uc)}function nx(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function ix(i){this.enabled!==!1&&i.preventDefault()}function sx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var nn=Uint8Array,Us=Uint16Array,ax=Int32Array,rf=new nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),af=new nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ox=new nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),of=function(i,t){for(var e=new Us(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var s=new ax(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)s[r]=r-e[n]<<5|n;return{b:e,r:s}},lf=of(rf,2),cf=lf.b,lx=lf.r;cf[28]=258,lx[258]=28;var hf=of(af,0),cx=hf.b,sS=hf.r,Bc=new Us(32768);for(Qt=0;Qt<32768;++Qt)Qn=(Qt&43690)>>1|(Qt&21845)<<1,Qn=(Qn&52428)>>2|(Qn&13107)<<2,Qn=(Qn&61680)>>4|(Qn&3855)<<4,Bc[Qt]=((Qn&65280)>>8|(Qn&255)<<8)>>1;var Qn,Qt,Nr=(function(i,t,e){for(var n=i.length,s=0,r=new Us(t);s<n;++s)i[s]&&++r[i[s]-1];var a=new Us(t);for(s=1;s<t;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(e){o=new Us(1<<t);var l=15-t;for(s=0;s<n;++s)if(i[s])for(var h=s<<4|i[s],u=t-i[s],c=a[i[s]-1]++<<u,f=c|(1<<u)-1;c<=f;++c)o[Bc[c]>>l]=h}else for(o=new Us(n),s=0;s<n;++s)i[s]&&(o[s]=Bc[a[i[s]-1]++]>>15-i[s]);return o}),Fr=new nn(288);for(Qt=0;Qt<144;++Qt)Fr[Qt]=8;var Qt;for(Qt=144;Qt<256;++Qt)Fr[Qt]=9;var Qt;for(Qt=256;Qt<280;++Qt)Fr[Qt]=7;var Qt;for(Qt=280;Qt<288;++Qt)Fr[Qt]=8;var Qt,uf=new nn(32);for(Qt=0;Qt<32;++Qt)uf[Qt]=5;var Qt;var hx=Nr(Fr,9,1);var ux=Nr(uf,5,1),Nc=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},wn=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},Fc=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},fx=function(i){return(i+7)/8|0},zc=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new nn(i.subarray(t,e))};var dx=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],fn=function(i,t,e){var n=new Error(t||dx[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,fn),!e)throw n;return n},px=function(i,t,e,n){var s=i.length,r=n?n.length:0;if(!s||t.f&&!t.l)return e||new nn(0);var a=!e,o=a||t.i!=2,l=t.i;a&&(e=new nn(s*3));var h=function(yt){var Yt=e.length;if(yt>Yt){var Mt=new nn(Math.max(Yt*2,yt));Mt.set(e),e=Mt}},u=t.f||0,c=t.p||0,f=t.b||0,d=t.l,m=t.d,_=t.m,p=t.n,g=s*8;do{if(!d){u=wn(i,c,1);var b=wn(i,c+1,3);if(c+=3,b)if(b==1)d=hx,m=ux,_=9,p=5;else if(b==2){var A=wn(i,c,31)+257,C=wn(i,c+10,15)+4,y=A+wn(i,c+5,31)+1;c+=14;for(var T=new nn(y),R=new nn(19),P=0;P<C;++P)R[ox[P]]=wn(i,c+P*3,7);c+=C*3;for(var I=Nc(R),V=(1<<I)-1,W=Nr(R,I,1),P=0;P<y;){var N=W[wn(i,c,V)];c+=N&15;var M=N>>4;if(M<16)T[P++]=M;else{var G=0,X=0;for(M==16?(X=3+wn(i,c,3),c+=2,G=T[P-1]):M==17?(X=3+wn(i,c,7),c+=3):M==18&&(X=11+wn(i,c,127),c+=7);X--;)T[P++]=G}}var $=T.subarray(0,A),tt=T.subarray(A);_=Nc($),p=Nc(tt),d=Nr($,_,1),m=Nr(tt,p,1)}else fn(1);else{var M=fx(c)+4,x=i[M-4]|i[M-3]<<8,w=M+x;if(w>s){l&&fn(0);break}o&&h(f+x),e.set(i.subarray(M,w),f),t.b=f+=x,t.p=c=w*8,t.f=u;continue}if(c>g){l&&fn(0);break}}o&&h(f+131072);for(var rt=(1<<_)-1,at=(1<<p)-1,ct=c;;ct=c){var G=d[Fc(i,c)&rt],kt=G>>4;if(c+=G&15,c>g){l&&fn(0);break}if(G||fn(2),kt<256)e[f++]=kt;else if(kt==256){ct=c,d=null;break}else{var Jt=kt-254;if(kt>264){var P=kt-257,Ft=rf[P];Jt=wn(i,c,(1<<Ft)-1)+cf[P],c+=Ft}var q=m[Fc(i,c)&at],it=q>>4;q||fn(3),c+=q&15;var tt=cx[it];if(it>3){var Ft=af[it];tt+=Fc(i,c)&(1<<Ft)-1,c+=Ft}if(c>g){l&&fn(0);break}o&&h(f+131072);var et=f+Jt;if(f<tt){var nt=r-tt,bt=Math.min(tt,et);for(nt+f<0&&fn(3);f<bt;++f)e[f]=n[nt+f]}for(;f<et;++f)e[f]=e[f-tt]}}t.l=d,t.p=ct,t.b=f,t.f=u,d&&(u=1,t.m=_,t.d=m,t.n=p)}while(!u);return f!=e.length&&a?zc(e,0,f):e.subarray(0,f)};var mx=new nn(0);var kn=function(i,t){return i[t]|i[t+1]<<8},An=function(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24)>>>0},Oc=function(i,t){return An(i,t)+An(i,t+4)*4294967296};function gx(i,t){return px(i,{i:2},t&&t.out,t&&t.dictionary)}var kc=typeof TextDecoder<"u"&&new TextDecoder,_x=0;try{kc.decode(mx,{stream:!0}),_x=1}catch{}var xx=function(i){for(var t="",e=0;;){var n=i[e++],s=(n>127)+(n>223)+(n>239);if(e+s>i.length)return{s:t,r:zc(i,e-1)};s?s==3?(n=((n&15)<<18|(i[e++]&63)<<12|(i[e++]&63)<<6|i[e++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):s&1?t+=String.fromCharCode((n&31)<<6|i[e++]&63):t+=String.fromCharCode((n&15)<<12|(i[e++]&63)<<6|i[e++]&63):t+=String.fromCharCode(n)}};function vx(i,t){if(t){for(var e="",n=0;n<i.length;n+=16384)e+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return e}else{if(kc)return kc.decode(i);var s=xx(i),r=s.s,e=s.r;return e.length&&fn(8),r}}var yx=function(i,t){return t+30+kn(i,t+26)+kn(i,t+28)},Mx=function(i,t,e){var n=kn(i,t+28),s=vx(i.subarray(t+46,t+46+n),!(kn(i,t+8)&2048)),r=t+46+n,a=An(i,t+20),o=e&&a==4294967295?Sx(i,r):[a,An(i,t+24),An(i,t+42)],l=o[0],h=o[1],u=o[2];return[kn(i,t+10),l,h,s,r+kn(i,t+30)+kn(i,t+32),u]},Sx=function(i,t){for(;kn(i,t)!=1;t+=4+kn(i,t+2));return[Oc(i,t+12),Oc(i,t+4),Oc(i,t+20)]};function ff(i,t){for(var e={},n=i.length-22;An(i,n)!=101010256;--n)(!n||i.length-n>65558)&&fn(13);var s=kn(i,n+8);if(!s)return{};var r=An(i,n+16),a=r==4294967295||s==65535;if(a){var o=An(i,n-12);a=An(i,o)==101075792,a&&(s=An(i,o+32),r=An(i,o+48))}for(var l=t&&t.filter,h=0;h<s;++h){var u=Mx(i,r,a),c=u[0],f=u[1],d=u[2],m=u[3],_=u[4],p=u[5],g=yx(i,p);r=_,(!l||l({name:m,size:f,originalSize:d,compression:c}))&&(c?c==8?e[m]=gx(i.subarray(g,g+f),{out:new nn(d)}):fn(14,"unknown compression type "+c):e[m]=zc(i,g,g+f))}return e}var bx=/^def\s+(?:(\w+)\s+)?"?([^"]+)"?$/,wx=/^string\s+(\w+)$/,Ax=/^(?:uniform\s+)?(\w+(?:\[\])?)\s+(.+)$/,Oo={Attribute:1,Prim:6,Relationship:8},Bo=class{parseText(t){t=this._preprocess(t);let e={},n=t.split(`
`),s=null,r=e,a=[e];for(let o of n)if(o.includes("=")){let l=this._findAssignmentOperator(o);if(l===-1){s=o.trim();continue}let h=o.slice(0,l).trim(),u=o.slice(l+1).trim();if(u.endsWith("{")){let c={};a.push(c),r[h]=c,r=c}else if(u.endsWith("(")){let c=u.slice(0,-1);r[h]=c;let f={};a.push(f),r=f}else r[h]=u}else if(o.includes(":")&&!o.includes("=")){let l=o.indexOf(":"),h=o.slice(0,l).trim(),u=o.slice(l+1).trim();/^[\d.]+$/.test(h)&&(r[h]=u)}else if(o.endsWith("{")){s=o.slice(0,-1).trim()||s;let l=r[s]||{};a.push(l),r[s]=l,r=l}else if(o.endsWith("}")){if(a.pop(),a.length===0)continue;r=a[a.length-1]}else if(o.endsWith("(")){let l={};a.push(l),s=o.split("(")[0].trim()||s,r[s]=l,r=l}else o.endsWith(")")?(a.pop(),r=a[a.length-1]):o.trim()&&(s=o.trim());return e}_preprocess(t){t=this._stripBlockComments(t),t=this._collapseTripleQuotedStrings(t);let e=t.split(`
`),n=[],s=!1,r=0,a=0,o="";for(let l=0;l<e.length;l++){let h=e[l];h=this._stripInlineComment(h);let u=h.trim();if(s){o+=" "+u;for(let c of u)c==="["?r++:c==="]"?r--:c==="("&&r>0?a++:c===")"&&r>0&&a--;r===0&&a===0&&(n.push(o),o="",s=!1)}else{if(u.includes("=")){let c=this._findAssignmentOperator(u);if(c!==-1){let f=u.slice(c+1).trim(),d=0,m=0;for(let _ of f)_==="["?d++:_==="]"&&m++;if(d>m){s=!0,r=d-m,a=0,o=u;continue}}}n.push(u)}}return n.join(`
`)}_stripBlockComments(t){let e="",n=0;for(;n<t.length;)if(t[n]==="/"&&n+1<t.length&&t[n+1]==="*"){let s=n+2;for(;s<t.length;){if(t[s]==="*"&&s+1<t.length&&t[s+1]==="/"){s+=2;break}s++}n=s}else e+=t[n],n++;return e}_collapseTripleQuotedStrings(t){let e="",n=0;for(;n<t.length;){if(n+2<t.length){let s=t.slice(n,n+3);if(s==="'''"||s==='"""'){let r=s;for(e+=r,n+=3;n<t.length;)if(n+2<t.length&&t.slice(n,n+3)===r){e+=r,n+=3;break}else t[n]===`
`?e+="\\n":t[n]!=="\r"&&(e+=t[n]),n++;continue}}e+=t[n],n++}return e}_stripInlineComment(t){if(t.trim().startsWith("#usda"))return t;let e=!1,n=null,s=!1;for(let r=0;r<t.length;r++){let a=t[r];if(s){s=!1;continue}if(a==="\\"){s=!0;continue}if(!e&&(a==='"'||a==="'"))e=!0,n=a;else if(e&&a===n)e=!1,n=null;else if(!e&&a==="#")return t.slice(0,r).trimEnd()}return t}_findAssignmentOperator(t){let e=!1,n=null,s=!1;for(let r=0;r<t.length;r++){let a=t[r];if(s){s=!1;continue}if(a==="\\"){s=!0;continue}if(!e&&(a==='"'||a==="'"))e=!0,n=a;else if(e&&a===n)e=!1,n=null;else if(!e&&a==="=")return r}return-1}parseData(t){let e=this.parseText(t),n={},s={};if("#usda 1.0"in e){let a=e["#usda 1.0"];a.upAxis&&(s.upAxis=a.upAxis.replace(/"/g,"")),a.defaultPrim&&(s.defaultPrim=a.defaultPrim.replace(/"/g,"")),a.metersPerUnit!==void 0&&(s.metersPerUnit=parseFloat(a.metersPerUnit)),a.framesPerSecond!==void 0&&(s.framesPerSecond=parseFloat(a.framesPerSecond)),a.timeCodesPerSecond!==void 0&&(s.timeCodesPerSecond=parseFloat(a.timeCodesPerSecond))}n["/"]={specType:Oo.Prim,fields:s};let r=(a,o)=>{let l=[];for(let h in a){if(h==="#usda 1.0"||h==="variants")continue;let u=h.match(bx);if(u){let c=u[1]||"",f=u[2],d=o==="/"?"/"+f:o+"/"+f;l.push(f);let m={typeName:c},_=a[h];this._extractPrimData(_,d,m,n,Oo),n[d]={specType:Oo.Prim,fields:m},r(_,d)}}l.length>0&&n[o]&&(n[o].fields.primChildren=l)};return r(e,"/"),this._inferSkelElementSize(n),{specsByPath:n}}_inferSkelElementSize(t){for(let e in t){let n=t[e];if(n.specType!==Oo.Prim||n.fields.typeName!=="Mesh")continue;let s=t[e+".points"];if(!s||!s.fields.default)continue;let r=s.fields.default.length/3;r!==0&&(this._inferElementSize(t[e+".primvars:skel:jointIndices"],r),this._inferElementSize(t[e+".primvars:skel:jointWeights"],r))}}_inferElementSize(t,e){if(!t||t.fields.elementSize!==void 0||!t.fields.default)return;let n=t.fields.default.length;n>0&&n%e===0&&(t.fields.elementSize=n/e)}_extractPrimData(t,e,n,s,r){if(!(!t||typeof t!="object"))for(let a in t){if(a.startsWith("def "))continue;if(a==="prepend references"){n.references=[t[a]];continue}if(a==="payload"){n.payload=t[a];continue}if(a==="variants"){let l={},h=t[a];for(let u in h){let c=u.match(wx);if(c){let f=c[1],d=h[u].replace(/"/g,"");l[f]=d}}Object.keys(l).length>0&&(n.variantSelection=l);continue}if(a.startsWith("rel ")){let l=a.slice(4),h=e+"."+l,u=t[a].replace(/[<>]/g,"");s[h]={specType:r.Relationship,fields:{targetPaths:[u]}};continue}if(a.includes("xformOpOrder")){let l=t[a].replace(/[\[\]]/g,"").split(",").map(h=>h.trim().replace(/"/g,""));n.xformOpOrder=l;continue}let o=a.match(Ax);if(o){let l=o[1],h=o[2],u=t[a];if(h.endsWith(".connect")){let c=h.slice(0,-8),f=e+"."+c,d=String(u).trim();d.startsWith("<")&&(d=d.slice(1)),d.endsWith(">")&&(d=d.slice(0,-1)),s[f]||(s[f]={specType:r.Attribute,fields:{typeName:l}}),s[f].fields.connectionPaths=[d];continue}if(h.endsWith(".timeSamples")&&typeof u=="object"){let c=h.slice(0,-12),f=e+"."+c,d=[],m=[];for(let p in u){let g=parseFloat(p);isNaN(g)||(d.push(g),m.push(this._parseAttributeValue(l,u[p])))}let _=d.map((p,g)=>({t:p,v:m[g]})).sort((p,g)=>p.t-g.t);s[f]={specType:r.Attribute,fields:{timeSamples:{times:_.map(p=>p.t),values:_.map(p=>p.v)},typeName:l}}}else{let c=this._parseAttributeValue(l,u),f=e+"."+h;s[f]?(s[f].fields.default=c,s[f].fields.typeName=l):s[f]={specType:r.Attribute,fields:{default:c,typeName:l}}}}}}_parseAttributeValue(t,e){if(e==null)return;let n=String(e).trim();if(t.endsWith("[]")){let s;try{let r=n.replace(/\(/g,"[").replace(/\)/g,"]");r.endsWith(",")&&(r=r.slice(0,-1));let a=JSON.parse(r);s=Array.isArray(a)&&Array.isArray(a[0])?a.flat():a}catch{s=n.replace(/[\[\]]/g,"").split(",").map(o=>{let l=o.trim(),h=parseFloat(l);return isNaN(h)?l.replace(/"/g,""):h})}if(t.startsWith("quat"))for(let r=0;r<s.length;r+=4){let a=s[r];s[r]=s[r+1],s[r+1]=s[r+2],s[r+2]=s[r+3],s[r+3]=a}return s}if(t.includes("3")||t.includes("2")||t.includes("4"))return n.replace(/[()]/g,"").split(",").map(a=>parseFloat(a.trim()));if(t.startsWith("quat")){let r=n.replace(/[()]/g,"").split(",").map(a=>parseFloat(a.trim()));return[r[1],r[2],r[3],r[0]]}return t.includes("matrix")?n.replace(/[()]/g,"").split(",").map(a=>parseFloat(a.trim())):t==="float"||t==="double"||t==="int"?parseFloat(n):t==="string"||t==="token"?this._parseString(n):t==="asset"?n.replace(/@/g,"").replace(/"/g,""):this._parseString(n)}_parseString(t){(t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'"))&&(t=t.slice(1,-1));let e="",n=0;for(;n<t.length;)if(t[n]==="\\"&&n+1<t.length){let s=t[n+1];switch(s){case"n":e+=`
`;break;case"t":e+="	";break;case"r":e+="\r";break;case"\\":e+="\\";break;case'"':e+='"';break;case"'":e+="'";break;default:e+=s;break}n+=2}else e+=t[n],n++;return e}};var Vc=new TextDecoder,pf=new Float32Array(32);for(let i=0;i<32;i++)pf[i]=Math.pow(2,i-15);var Tx=Math.pow(2,-14),mt={Invalid:0,Bool:1,UChar:2,Int:3,UInt:4,Int64:5,UInt64:6,Half:7,Float:8,Double:9,String:10,Token:11,AssetPath:12,Matrix2d:13,Matrix3d:14,Matrix4d:15,Quatd:16,Quatf:17,Quath:18,Vec2d:19,Vec2f:20,Vec2h:21,Vec2i:22,Vec3d:23,Vec3f:24,Vec3h:25,Vec3i:26,Vec4d:27,Vec4f:28,Vec4h:29,Vec4i:30,Dictionary:31,TokenListOp:32,StringListOp:33,PathListOp:34,ReferenceListOp:35,IntListOp:36,Int64ListOp:37,UIntListOp:38,UInt64ListOp:39,PathVector:40,TokenVector:41,Specifier:42,Permission:43,Variability:44,VariantSelectionMap:45,TimeSamples:46,Payload:47,DoubleVector:48,LayerOffsetVector:49,StringVector:50,ValueBlock:51,Value:52,UnregisteredValue:53,UnregisteredValueListOp:54,PayloadListOp:55,TimeCode:56,PathExpression:57,Relocates:58,Spline:59,AnimationBlock:60},Ex=4294967295,Cx=105,Rx=116;function df(i,t,e,n,s,r){for(;t<e;){let a=i[t++];if(t>e)break;let o=a>>4;if(o===15){let c;do{if(t>=e)break;c=i[t++],o+=c}while(c===255&&t<e)}if(o>0){t+o>e&&(o=e-t);for(let c=0;c<o&&!(s>=r);c++)n[s++]=i[t++]}if(t>=e||t+2>e)break;let l=i[t++]|i[t++]<<8;if(l===0)break;let h=(a&15)+4;if(h===19){let c;do{if(t>=e)break;c=i[t++],h+=c}while(c===255&&t<e)}let u=s-l;if(u<0)break;for(let c=0;c<h&&!(s>=r);c++)n[s++]=n[u+c]}return s}function Gc(i,t){let e=new Uint8Array(t),n=i[0];if(n===0)return df(i,1,i.length,e,0,t),e;{let r=1,a=[];for(let h=0;h<n;h++){let u=(i[r]|i[r+1]<<8|i[r+2]<<16|i[r+3]<<24)>>>0;a.push(u),r+=4}let o=r,l=0;for(let h=0;h<n;h++){let u=a[h],c=Math.min(65536,t-l);df(i,o,o+u,e,l,l+c),o+=u,l+=c}return e}}function Tn(i,t){let e=t*4+(t*2+7>>3)+4,n=Gc(new Uint8Array(i),e);return Px(n,t)}function Px(i,t){let e=new DataView(i.buffer,i.byteOffset,i.byteLength),n=0,s=e.getInt32(n,!0);n+=4;let r=t*2+7>>3,a=n,o=n+r,l=new Int32Array(t),h=0,u=a,c=o;for(let f=0;f<t;){let d=i[u++];for(let m=0;m<4&&f<t;m++,f++){let _=d>>m*2&3,p=0;switch(_){case 0:p=s;break;case 1:p=e.getInt8(c),c+=1;break;case 2:p=e.getInt16(c,!0),c+=2;break;case 3:p=e.getInt32(c,!0),c+=4;break}h+=p,l[f]=h}}return l}var Hc=class{constructor(t){this.buffer=t,this.view=new DataView(t),this.offset=0}seek(t){this.offset=t}tell(){return this.offset}readUint8(){let t=this.view.getUint8(this.offset);return this.offset+=1,t}readInt8(){let t=this.view.getInt8(this.offset);return this.offset+=1,t}readUint16(){let t=this.view.getUint16(this.offset,!0);return this.offset+=2,t}readInt16(){let t=this.view.getInt16(this.offset,!0);return this.offset+=2,t}readUint32(){let t=this.view.getUint32(this.offset,!0);return this.offset+=4,t}readInt32(){let t=this.view.getInt32(this.offset,!0);return this.offset+=4,t}readUint64(){let t=this.view.getUint32(this.offset,!0),e=this.view.getUint32(this.offset+4,!0);return this.offset+=8,e*4294967296+t}readInt64(){let t=this.view.getUint32(this.offset,!0),e=this.view.getInt32(this.offset+4,!0);return this.offset+=8,e*4294967296+t}readFloat32(){let t=this.view.getFloat32(this.offset,!0);return this.offset+=4,t}readFloat64(){let t=this.view.getFloat64(this.offset,!0);return this.offset+=8,t}readBytes(t){let e=new Uint8Array(this.buffer,this.offset,t);return this.offset+=t,e}readString(t){let e=this.readBytes(t),n=0;for(;n<t&&e[n]!==0;)n++;return Vc.decode(e.subarray(0,n))}},Yi=class{constructor(t,e){this.lo=t,this.hi=e}get isArray(){return(this.hi&2147483648)!==0}get isInlined(){return(this.hi&1073741824)!==0}get isCompressed(){return(this.hi&536870912)!==0}get typeEnum(){return this.hi>>16&255}get payload(){return this.lo+(this.hi&65535)*4294967296}getInlinedValue(){return this.lo}},ko=class{parseData(t){this.buffer=t instanceof ArrayBuffer?t:t.buffer,this.reader=new Hc(this.buffer),this.version={major:0,minor:0,patch:0},this._conversionBuffer=new ArrayBuffer(4),this._conversionView=new DataView(this._conversionBuffer),this._readBootstrap(),this._readTOC(),this._readTokens(),this._readStrings(),this._readFields(),this._readFieldSets(),this._readPaths(),this._readSpecs(),this.specsByPath={};for(let e of this.specs){let n=this.paths[e.pathIndex];if(!n)continue;let s=this._getFieldsForSpec(e);this.specsByPath[n]={specType:e.specType,fields:s}}return{specsByPath:this.specsByPath}}_readBootstrap(){let t=this.reader;if(t.seek(0),t.readString(8)!=="PXR-USDC")throw new Error("THREE.USDCParser: Not a valid USDC file.");this.version.major=t.readUint8(),this.version.minor=t.readUint8(),this.version.patch=t.readUint8(),t.readBytes(5),this.tocOffset=t.readUint64()}_readTOC(){let t=this.reader;t.seek(this.tocOffset);let e=t.readUint64();this.sections={};for(let n=0;n<e;n++){let s=t.readString(16),r=t.readUint64(),a=t.readUint64();this.sections[s]={start:r,size:a}}}_readTokens(){let t=this.sections.TOKENS;if(!t)return;let e=this.reader;e.seek(t.start);let n=e.readUint64();if(this.tokens=[],this.version.major===0&&this.version.minor<4){let s=e.readUint64(),r=e.readBytes(s),a=0;for(let o=0;o<n;o++){let l=a;for(;l<r.length&&r[l]!==0;)l++;this.tokens.push(Vc.decode(r.subarray(a,l))),a=l+1}}else{let s=e.readUint64(),r=e.readUint64(),a=e.readBytes(r),o=Gc(a,s),l=0;for(let h=0;h<n;h++){let u=l;for(;u<o.length&&o[u]!==0;)u++;this.tokens.push(Vc.decode(o.subarray(l,u))),l=u+1}}}_readStrings(){let t=this.sections.STRINGS;if(!t){this.strings=[];return}let e=this.reader;e.seek(t.start);let n=Math.floor(t.size/4);this.strings=[];for(let s=0;s<n;s++)this.strings.push(e.readUint32())}_readFields(){let t=this.sections.FIELDS;if(!t)return;let e=this.reader;if(e.seek(t.start),this.fields=[],this.version.major===0&&this.version.minor<4){let n=Math.floor(t.size/12);for(let s=0;s<n;s++){let r=e.readUint32(),a=e.readUint32(),o=e.readUint32();this.fields.push({tokenIndex:r,valueRep:new Yi(a,o)})}}else{let n=e.readUint64(),s=e.readUint64(),r=e.readBytes(s),a=Tn(r.buffer.slice(r.byteOffset,r.byteOffset+s),n),o=e.readUint64(),l=e.readBytes(o),h=Gc(l,n*8),u=new DataView(h.buffer,h.byteOffset,h.byteLength);for(let c=0;c<n;c++){let f=u.getUint32(c*8,!0),d=u.getUint32(c*8+4,!0);this.fields.push({tokenIndex:a[c],valueRep:new Yi(f,d)})}}}_readFieldSets(){let t=this.sections.FIELDSETS;if(!t)return;let e=this.reader;if(e.seek(t.start),this.fieldSets=[],this.version.major===0&&this.version.minor<4){let n=Math.floor(t.size/4);for(let s=0;s<n;s++)this.fieldSets.push(e.readUint32())}else{let n=e.readUint64(),s=e.readUint64(),r=e.readBytes(s),a=Tn(r.buffer.slice(r.byteOffset,r.byteOffset+s),n);for(let o=0;o<n;o++)this.fieldSets.push(a[o])}}_readPaths(){let t=this.sections.PATHS;if(!t)return;let e=this.reader;e.seek(t.start);let n=e.readUint64();if(this.paths=new Array(n).fill(""),this.version.major===0&&this.version.minor<4)this._readPathsRecursive("");else{e.readUint64();let s=e.readUint64(),r=e.readBytes(s),a=Tn(r.buffer.slice(r.byteOffset,r.byteOffset+s),n),o=e.readUint64(),l=e.readBytes(o),h=Tn(l.buffer.slice(l.byteOffset,l.byteOffset+o),n),u=e.readUint64(),c=e.readBytes(u),f=Tn(c.buffer.slice(c.byteOffset,c.byteOffset+u),n);this._buildPathsFromCompressed(a,h,f)}}_readPathsRecursive(t,e=0){let n=this.reader;if(e>1e3)return;let s=n.readUint32(),r=n.readUint32(),a=n.readUint8(),o=(a&1)!==0,l=(a&2)!==0,h=(a&4)!==0,u;if(t==="")u="/";else{let c=this.tokens[r]||"";h?u=t+"."+c:u=t==="/"?"/"+c:t+"/"+c}if(this.paths[s]=u,o&&l){let c=n.readUint64();this._readPathsRecursive(u,e+1),n.seek(c),this._readPathsRecursive(t,e+1)}else o?this._readPathsRecursive(u,e+1):l&&this._readPathsRecursive(t,e+1)}_buildPathsFromCompressed(t,e,n){let s=(r,a)=>{let o=r;for(;o<t.length;){let l=o++,h=t[l],u=e[l],c=n[l],f;if(a==="")f="/",a=f;else{let _=this.tokens[Math.abs(u)]||"";u<0?f=a+"."+_:f=a==="/"?"/"+_:a+"/"+_}this.paths[h]=f;let d=c>0||c===-1,m=c>=0;if(d){if(m){let _=l+c;s(_,a)}a=f}else if(!m)break}};s(0,"")}_readSpecs(){let t=this.sections.SPECS;if(!t)return;let e=this.reader;if(e.seek(t.start),this.specs=[],this.version.major===0&&this.version.minor<4){let n=this.version.minor===0&&this.version.patch===1?16:12,s=Math.floor(t.size/n);for(let r=0;r<s;r++){let a=e.readUint32(),o=e.readUint32(),l=e.readUint32();n===16&&e.readUint32(),this.specs.push({pathIndex:a,fieldSetIndex:o,specType:l})}}else{let n=e.readUint64(),s=e.readUint64(),r=e.readBytes(s),a=Tn(r.buffer.slice(r.byteOffset,r.byteOffset+s),n),o=e.readUint64(),l=e.readBytes(o),h=Tn(l.buffer.slice(l.byteOffset,l.byteOffset+o),n),u=e.readUint64(),c=e.readBytes(u),f=Tn(c.buffer.slice(c.byteOffset,c.byteOffset+u),n);for(let d=0;d<n;d++)this.specs.push({pathIndex:a[d],fieldSetIndex:h[d],specType:f[d]})}}_readValue(t){let e=t.typeEnum,n=t.isArray,s=t.isInlined;if(e===mt.TimeSamples)return this._readTimeSamples(t);if(s)return this._readInlinedValue(t);let r=t.payload;if(r===0&&n)return[];if(r<0||r>=this.buffer.byteLength)throw new RangeError("USDCParser: Invalid payload offset "+r+" for type "+e+".");let a=this.reader.tell();this.reader.seek(r);let o;return n?o=this._readArrayValue(t):o=this._readScalarValue(e),this.reader.seek(a),o}_readInlinedValue(t){let e=t.typeEnum,n=t.getInlinedValue(),s=this._conversionView;switch(e){case mt.Bool:return n!==0;case mt.UChar:return n&255;case mt.Int:case mt.UInt:return n;case mt.Float:return s.setUint32(0,n,!0),s.getFloat32(0,!0);case mt.Double:return s.setUint32(0,n,!0),s.getFloat32(0,!0);case mt.Token:return this.tokens[n]||"";case mt.String:return this.tokens[this.strings[n]]||"";case mt.AssetPath:return this.tokens[n]||"";case mt.Specifier:return n;case mt.Permission:case mt.Variability:return n;case mt.Vec2h:return s.setUint32(0,n,!0),[this._halfToFloat(s.getUint16(0,!0)),this._halfToFloat(s.getUint16(2,!0))];case mt.Vec2f:case mt.Vec2i:return s.setUint32(0,n,!0),[s.getInt8(0),s.getInt8(1)];case mt.Vec3f:case mt.Vec3i:return s.setUint32(0,n,!0),[s.getInt8(0),s.getInt8(1),s.getInt8(2)];case mt.Vec4f:case mt.Vec4i:return s.setUint32(0,n,!0),[s.getInt8(0),s.getInt8(1),s.getInt8(2),s.getInt8(3)];case mt.Matrix2d:{s.setUint32(0,n,!0);let r=s.getInt8(0),a=s.getInt8(1);return[r,0,0,a]}case mt.Matrix3d:{s.setUint32(0,n,!0);let r=s.getInt8(0),a=s.getInt8(1),o=s.getInt8(2);return[r,0,0,0,a,0,0,0,o]}case mt.Matrix4d:{s.setUint32(0,n,!0);let r=s.getInt8(0),a=s.getInt8(1),o=s.getInt8(2),l=s.getInt8(3);return[r,0,0,0,0,a,0,0,0,0,o,0,0,0,0,l]}default:return n}}_readTimeSamples(t){let e=this.reader,n=t.payload,s=e.tell();e.seek(n);let r=e.tell(),a=e.readInt64();e.seek(r+a);let o=e.readUint32(),l=e.readUint32(),h=new Yi(o,l),u=this._readValue(h),c=r+a+8;e.seek(c);let f=e.tell(),d=e.readInt64();e.seek(f+d);let m=e.readUint64(),_=[];for(let b=0;b<m;b++){let M=e.readUint32(),x=e.readUint32();_.push(new Yi(M,x))}let p=[];for(let b=0;b<m;b++)p.push(this._readValue(_[b]));return e.seek(s),{times:u instanceof Float64Array?Array.from(u):Array.isArray(u)?u:[u],values:p}}_readScalarValue(t){let e=this.reader;switch(t){case mt.Invalid:return null;case mt.Bool:return e.readUint8()!==0;case mt.UChar:return e.readUint8();case mt.Int:return e.readInt32();case mt.UInt:return e.readUint32();case mt.Int64:return e.readInt64();case mt.UInt64:return e.readUint64();case mt.Half:return this._readHalf();case mt.Float:return e.readFloat32();case mt.Double:return e.readFloat64();case mt.String:case mt.Token:{let n=e.readUint32();return this.tokens[n]||""}case mt.AssetPath:{let n=e.readUint32();return this.tokens[n]||""}case mt.Vec2f:return[e.readFloat32(),e.readFloat32()];case mt.Vec2d:return[e.readFloat64(),e.readFloat64()];case mt.Vec2i:return[e.readInt32(),e.readInt32()];case mt.Vec3f:return[e.readFloat32(),e.readFloat32(),e.readFloat32()];case mt.Vec3d:return[e.readFloat64(),e.readFloat64(),e.readFloat64()];case mt.Vec3i:return[e.readInt32(),e.readInt32(),e.readInt32()];case mt.Vec4f:return[e.readFloat32(),e.readFloat32(),e.readFloat32(),e.readFloat32()];case mt.Vec4d:return[e.readFloat64(),e.readFloat64(),e.readFloat64(),e.readFloat64()];case mt.Quatf:return[e.readFloat32(),e.readFloat32(),e.readFloat32(),e.readFloat32()];case mt.Quatd:return[e.readFloat64(),e.readFloat64(),e.readFloat64(),e.readFloat64()];case mt.Matrix4d:{let n=[];for(let s=0;s<16;s++)n.push(e.readFloat64());return n}case mt.TokenVector:{let n=e.readUint64(),s=[];for(let r=0;r<n;r++){let a=e.readUint32();s.push(this.tokens[a]||"")}return s}case mt.PathVector:{let n=e.readUint64(),s=[];for(let r=0;r<n;r++){let a=e.readUint32();s.push(this.paths[a]||"")}return s}case mt.DoubleVector:{let n=e.readUint64(),s=new Float64Array(n);for(let r=0;r<n;r++)s[r]=e.readFloat64();return s}case mt.Dictionary:{let n=e.readUint64(),s={};for(let r=0;r<n;r++){let a=e.readUint32(),o=this.tokens[a],l=e.position,h=e.readInt64(),u=l+h,c=e.position;e.position=u;let f=e.readUint64(),d=new Yi(f),m=null;d.isInlined?m=this._readInlinedValue(d):d.isArray?(e.position=d.payload,m=this._readArrayValue(d)):(e.position=d.payload,m=this._readScalarValue(d.typeEnum)),e.position=c,o!==void 0&&m!==null&&(s[o]=m)}return s}case mt.TokenListOp:case mt.StringListOp:case mt.IntListOp:case mt.Int64ListOp:case mt.UIntListOp:case mt.UInt64ListOp:return null;case mt.PathListOp:{let n=e.readUint8(),s=(n&2)!==0,r=(n&4)!==0,a=(n&8)!==0,o=(n&16)!==0,l=(n&32)!==0,h=(n&64)!==0,u=()=>{let _=e.readUint64(),p=[];for(let g=0;g<_;g++){let b=e.readUint32();p.push(this.paths[b])}return p},c=null,f=null,d=null,m=null;return s&&(c=u()),r&&(f=u()),l&&(d=u()),h&&(m=u()),a&&u(),o&&u(),d&&d.length>0?d:c&&c.length>0?c:m&&m.length>0?m:f&&f.length>0?f:null}case mt.VariantSelectionMap:{let n=e.readUint64(),s={};for(let r=0;r<n;r++){let a=e.readUint32(),o=e.readUint32(),l=this.tokens[this.strings[a]],h=this.tokens[this.strings[o]];l&&h&&(s[l]=h)}return s}default:return console.warn("USDCParser: Unsupported scalar type",t),null}}_readArrayValue(t){let e=this.reader,n=t.typeEnum,s=t.isCompressed,r;if(this.version.major===0&&this.version.minor<7?r=e.readUint32():r=e.readUint64(),!Number.isSafeInteger(r)||r<0)throw new RangeError("USDCParser: Invalid array size "+r+" for type "+n+".");if(r>2147483647)throw new RangeError("USDCParser: Array size "+r+" exceeds implementation limits.");if(r===0)return[];if(s)return this._readCompressedArray(n,r);switch(n){case mt.Int:{let a=new Int32Array(r);for(let o=0;o<r;o++)a[o]=e.readInt32();return a}case mt.UInt:{let a=new Uint32Array(r);for(let o=0;o<r;o++)a[o]=e.readUint32();return a}case mt.Float:{let a=new Float32Array(r);for(let o=0;o<r;o++)a[o]=e.readFloat32();return a}case mt.Double:{let a=new Float64Array(r);for(let o=0;o<r;o++)a[o]=e.readFloat64();return a}case mt.Vec2f:{let a=new Float32Array(r*2);for(let o=0;o<r*2;o++)a[o]=e.readFloat32();return a}case mt.Vec3f:{let a=new Float32Array(r*3);for(let o=0;o<r*3;o++)a[o]=e.readFloat32();return a}case mt.Vec4f:{let a=new Float32Array(r*4);for(let o=0;o<r*4;o++)a[o]=e.readFloat32();return a}case mt.Vec3h:{let a=new Float32Array(r*3);for(let o=0;o<r*3;o++)a[o]=this._readHalf();return a}case mt.Quatf:{let a=new Float32Array(r*4);for(let o=0;o<r*4;o++)a[o]=e.readFloat32();return a}case mt.Quath:{let a=new Float32Array(r*4);for(let o=0;o<r*4;o++)a[o]=this._readHalf();return a}case mt.Matrix4d:{let a=new Float64Array(r*16);for(let o=0;o<r*16;o++)a[o]=e.readFloat64();return a}case mt.Token:{let a=[];for(let o=0;o<r;o++){let l=e.readUint32();a.push(this.tokens[l]||"")}return a}case mt.Half:{let a=new Float32Array(r);for(let o=0;o<r;o++)a[o]=this._readHalf();return a}default:return console.warn("USDCParser: Unsupported array type",n),[]}}_readCompressedArray(t,e){let n=this.reader;switch(t){case mt.Int:case mt.UInt:{let s=n.readUint64(),r=n.readBytes(s);return Tn(r.buffer.slice(r.byteOffset,r.byteOffset+s),e)}case mt.Float:{let s=n.readInt8();if(s===Cx){let r=n.readUint64(),a=n.readBytes(r),o=Tn(a.buffer.slice(a.byteOffset,a.byteOffset+r),e),l=new Float32Array(e);for(let h=0;h<e;h++)l[h]=o[h];return l}else if(s===Rx){let r=n.readUint32(),a=new Float32Array(r);for(let c=0;c<r;c++)a[c]=n.readFloat32();let o=n.readUint64(),l=n.readBytes(o),h=Tn(l.buffer.slice(l.byteOffset,l.byteOffset+o),e),u=new Float32Array(e);for(let c=0;c<e;c++)u[c]=a[h[c]];return u}return console.warn("USDCParser: Unknown float compression code",s),new Float32Array(e)}default:return console.warn("USDCParser: Unsupported compressed array type",t),[]}}_readHalf(){return this._halfToFloat(this.reader.readUint16())}_halfToFloat(t){let e=(t&32768)>>15,n=(t&31744)>>10,s=t&1023;return n===0?s===0?e?-0:0:(e?-1:1)*Tx*(s/1024):n===31?s?NaN:e?-1/0:1/0:(e?-1:1)*pf[n]*(1+s/1024)}_getFieldsForSpec(t){let e={},n=t.fieldSetIndex,s=1e4,r=0;for(;n<this.fieldSets.length&&r<s;){let a=this.fieldSets[n];if(a===Ex||a===-1)break;let o=this.fields[a];if(o){let l=this.tokens[o.tokenIndex],h=this._readValue(o.valueRep);e[l]=h}n++,r++}return e}};var Ix=/^(.+?)\/\{(\w+)=(\w+)\}\/(.+)$/,Zi={Unknown:0,Attribute:1,Connection:2,Expression:3,Mapper:4,MapperArg:5,Prim:6,PseudoRoot:7,Relationship:8,RelationshipTarget:9,Variant:10,VariantSet:11},En={projection:"perspective",clippingRange:[1,1e6],horizontalAperture:20.955,verticalAperture:15.2908,horizontalApertureOffset:0,verticalApertureOffset:0,focalLength:50,focusDistance:0,fStop:0},Ji=class i{constructor(t=null){this.textureCache={},this.skinnedMeshes=[],this.manager=t,this.texturePromises=[]}compose(t,e={},n={},s=""){this.specsByPath=t.specsByPath,this.assets=e,this.externalVariantSelections=n,this.basePath=s,this.skinnedMeshes=[],this.skeletons={},this.texturePromises=[],this._buildIndexes();let r=this.specsByPath["/"],a=r?r.fields:{};this.fps=a.timeCodesPerSecond||a.framesPerSecond||24;let o=new ln;this._buildHierarchy(o,"/"),this._bindSkeletons();let l=Object.keys(this.skeletons);l.length===1&&(o.skeleton=this.skeletons[l[0]].skeleton),o.animations=this._buildAnimations();let h=a.metersPerUnit;return h!==void 0&&h!==1&&o.scale.setScalar(h),r&&r.fields&&r.fields.upAxis==="Z"&&(o.rotation.x=-Math.PI/2),o}applyTransform(t,e,n={}){let s={...e,...n},r=s.xformOpOrder;if(r&&r.length>0){let a=new Ht,o=new Ht,l=null;for(let h=0;h<r.length;h++){let u=r[h],c=u.startsWith("!invert!"),f=c?u.slice(8):u;if(f==="xformOp:transform"){let d=s["xformOp:transform"];d&&d.length===16&&(o.set(d[0],d[4],d[8],d[12],d[1],d[5],d[9],d[13],d[2],d[6],d[10],d[14],d[3],d[7],d[11],d[15]),c&&o.invert(),a.multiply(o))}else if(f==="xformOp:translate"){let d=s["xformOp:translate"];d&&(o.makeTranslation(d[0],d[1],d[2]),c&&o.invert(),a.multiply(o))}else if(f==="xformOp:translate:pivot"){let d=s["xformOp:translate:pivot"];d&&(o.makeTranslation(d[0],d[1],d[2]),c&&o.invert(),a.multiply(o))}else if(f==="xformOp:scale"){let d=s["xformOp:scale"];d&&(Array.isArray(d)?(o.makeScale(d[0],d[1],d[2]),l=[d[0],d[1],d[2]]):(o.makeScale(d,d,d),l=[d,d,d]),c&&o.invert(),a.multiply(o))}else if(f==="xformOp:rotateXYZ"){let d=s["xformOp:rotateXYZ"];if(d){let m=new cn(d[0]*Math.PI/180,d[1]*Math.PI/180,d[2]*Math.PI/180,"ZYX");o.makeRotationFromEuler(m),c&&o.invert(),a.multiply(o)}}else if(f==="xformOp:rotateX"){let d=s["xformOp:rotateX"];d!==void 0&&(o.makeRotationX(d*Math.PI/180),c&&o.invert(),a.multiply(o))}else if(f==="xformOp:rotateY"){let d=s["xformOp:rotateY"];d!==void 0&&(o.makeRotationY(d*Math.PI/180),c&&o.invert(),a.multiply(o))}else if(f==="xformOp:rotateZ"){let d=s["xformOp:rotateZ"];d!==void 0&&(o.makeRotationZ(d*Math.PI/180),c&&o.invert(),a.multiply(o))}else if(f==="xformOp:orient"){let d=s["xformOp:orient"];if(d&&d.length===4){let m=new Ne(d[0],d[1],d[2],d[3]);o.makeRotationFromQuaternion(m),c&&o.invert(),a.multiply(o)}}}if(t.matrix.copy(a),t.matrix.decompose(t.position,t.quaternion,t.scale),l){let h=l[0]<0,u=l[1]<0,c=l[2]<0;(h?1:0)+(u?1:0)+(c?1:0)===3&&(t.scale.set(l[0],l[1],l[2]),t.quaternion.set(t.quaternion.x,-t.quaternion.y,t.quaternion.z,-t.quaternion.w))}return}if(s["xformOp:translate"]){let a=s["xformOp:translate"];t.position.set(a[0],a[1],a[2])}if(s["xformOp:translate:pivot"]){let a=s["xformOp:translate:pivot"];t.pivot=new L(a[0],a[1],a[2])}if(s["xformOp:scale"]){let a=s["xformOp:scale"];Array.isArray(a)?t.scale.set(a[0],a[1],a[2]):t.scale.set(a,a,a)}if(s["xformOp:rotateXYZ"]){let a=s["xformOp:rotateXYZ"];t.rotation.set(a[0]*Math.PI/180,a[1]*Math.PI/180,a[2]*Math.PI/180)}if(s["xformOp:orient"]){let a=s["xformOp:orient"];a.length===4&&t.quaternion.set(a[0],a[1],a[2],a[3])}}_buildIndexes(){this.childrenByPath=new Map,this.attributesByPrimPath=new Map,this.materialsByRoot=new Map,this.shadersByMaterialPath=new Map,this.geomSubsetsByMeshPath=new Map;for(let t in this.specsByPath){let e=this.specsByPath[t];if(e.specType===Zi.Prim){let n=t.lastIndexOf("/");if(n>0){let r=t.slice(0,n),a=t.slice(n+1);this.childrenByPath.has(r)||this.childrenByPath.set(r,[]),this.childrenByPath.get(r).push({name:a,path:t})}else if(n===0&&t.length>1){let r=t.slice(1);this.childrenByPath.has("/")||this.childrenByPath.set("/",[]),this.childrenByPath.get("/").push({name:r,path:t})}let s=e.fields.typeName;if(s==="Material"){let r=t.split("/"),a=r.length>1?"/"+r[1]:"/";this.materialsByRoot.has(a)||this.materialsByRoot.set(a,[]),this.materialsByRoot.get(a).push(t)}if(s==="Shader"&&n>0){let r=t.slice(0,n);for(;r.length>0;){let a=this.specsByPath[r];if(a&&a.specType===Zi.Prim&&a.fields.typeName==="Material"){this.shadersByMaterialPath.has(r)||this.shadersByMaterialPath.set(r,[]),this.shadersByMaterialPath.get(r).push(t);break}let o=r.lastIndexOf("/");if(o<=0)break;r=r.slice(0,o)}}if(s==="GeomSubset"&&n>0){let r=t.slice(0,n);this.geomSubsetsByMeshPath.has(r)||this.geomSubsetsByMeshPath.set(r,[]),this.geomSubsetsByMeshPath.get(r).push(t)}}else if(e.specType===Zi.Attribute||e.specType===Zi.Relationship){let n=t.lastIndexOf(".");if(n>0){let s=t.slice(0,n),r=t.slice(n+1);this.attributesByPrimPath.has(s)||this.attributesByPrimPath.set(s,new Map),this.attributesByPrimPath.get(s).set(r,e)}}}}_isDirectChild(t,e,n){if(!e.startsWith(n))return!1;let s=e.slice(n.length);return s.length===0||s.startsWith("{")?!1:!s.includes("/")}_buildHierarchy(t,e){let n=[],s=new Set,r=this.childrenByPath.get(e);if(r)for(let o of r)s.has(o.path)||(s.add(o.path),n.push(o));let a=this._getVariantPaths(e);for(let o of a){let l=this.childrenByPath.get(o);if(l)for(let h of l)s.has(h.path)||(s.add(h.path),n.push(h))}for(let{name:o,path:l}of n){let h=this.specsByPath[l];if(!h||h.specType!==Zi.Prim)continue;let u=h.fields.typeName,c=this._getReferences(h);if(c.length>0){let f=this._getLocalVariantSelections(h.fields),d=[];for(let m of c){let _=this._resolveReference(m,f);_&&d.push(_)}if(d.length>0){let m=this._getAttributes(l);if(d.length===1){let p=this._findSingleMesh(d[0]);if(p&&(u==="Xform"||!u)){p.name=o,this.applyTransform(p,h.fields,m),this._applyMaterialBinding(p,l),t.add(p),this._buildHierarchy(p,l);continue}}let _=new fe;_.name=o,this.applyTransform(_,h.fields,m);for(let p of d)for(;p.children.length>0;)_.add(p.children[0]);t.add(_),this._buildHierarchy(_,l);continue}}if(u==="SkelRoot"){let f=new fe;f.name=o,f.userData.isSkelRoot=!0;let d=this._getAttributes(l);this.applyTransform(f,h.fields,d),t.add(f),this._buildHierarchy(f,l)}else if(u==="Skeleton"){let f=this._buildSkeleton(l);f&&(this.skeletons[l]=f),this._buildHierarchy(t,l)}else if(u!=="SkelAnimation"){if(u==="Mesh"){let f=this._buildMesh(l,h);f&&(t.add(f),this._buildHierarchy(f,l))}else if(u==="Camera"){let f=this._buildCamera(l);f.name=o;let d=this._getAttributes(l);this.applyTransform(f,h.fields,d),t.add(f),this._buildHierarchy(f,l)}else if(u==="DistantLight"||u==="SphereLight"||u==="RectLight"||u==="DiskLight"){let f=this._buildLight(l,u);f.name=o;let d=this._getAttributes(l);this.applyTransform(f,h.fields,d),t.add(f),this._buildHierarchy(f,l)}else if(u==="Cube"||u==="Sphere"||u==="Cylinder"||u==="Cone"||u==="Capsule"){let f=this._buildGeomPrimitive(l,h,u);f&&(t.add(f),this._buildHierarchy(f,l))}else if(!(u==="Material"||u==="Shader"||u==="GeomSubset")){let f=new fe;f.name=o;let d=this._getAttributes(l);this.applyTransform(f,h.fields,d),t.add(f),this._buildHierarchy(f,l)}}}}_getVariantPaths(t){let e=this.specsByPath[t],n=e?.fields?.variantSetChildren,s=[];if(!n||n.length===0)return s;for(let r of n){let a=this.externalVariantSelections[r]||null;if(!a){let o=e.fields.variantSelection;a=o?o[r]:null}if(!a){let o=t+"/{"+r+"=}",l=this.specsByPath[o];l?.fields?.variantChildren&&(a=l.fields.variantChildren[0])}if(a){let o=t+"/{"+r+"="+a+"}";s.push(o)}}return s}_resolveFilePath(t){let e=t;if(e.startsWith("./")&&(e=e.slice(2)),!this.basePath)return e;let n=this.basePath.endsWith("/")?this.basePath:this.basePath+"/";return Hi.resolveURL(e,n)}_resolveReference(t,e={}){if(!t)return null;let n=t.match(/@([^@]+)@(?:<([^>]+)>)?/);if(!n)return null;let s=n[1],r=n[2],a=this._resolveFilePath(s),o={...e,...this.externalVariantSelections},l=this.assets[a];if(!l)return null;if(l.specsByPath){let h=new i(this.manager),u=this._getBasePath(a),c=h.compose(l,this.assets,o,u);if(r){let f=r.split("/").pop(),d=null;for(let m of c.children)if(m.name===f){d=m;break}if(d){c.remove(d);let m=new ln;return m.add(d),m}}return c}return l.isGroup||l.isObject3D?l.clone():null}_findSingleMesh(t){for(let e of t.children)if(e.isMesh)return t.remove(e),e;if(t.children.length===1){let e=t.children[0];if(e.children&&e.children.length===1){let n=e.children[0];if(n.isMesh&&!this._hasNonIdentityTransform(e))return e.remove(n),n}}return null}_hasNonIdentityTransform(t){let e=t.position,n=t.rotation,s=t.scale,r=e.x!==0||e.y!==0||e.z!==0,a=n.x!==0||n.y!==0||n.z!==0,o=s.x!==1||s.y!==1||s.z!==1;return r||a||o}_getBasePath(t){let e=t.lastIndexOf("/");return e>=0?t.slice(0,e):""}_getLocalVariantSelections(t){let e={};if(t.variantSelection)for(let n in t.variantSelection)e[n]=t.variantSelection[n];return e}_getReferences(t){let e=[];if(t.fields.references&&t.fields.references.length>0){let n=t.fields.references[0];if(typeof n=="string"){let s=n.matchAll(/@([^@]+)@(?:<([^>]+)>)?/g);for(let r of s)e.push(r[0])}else n.assetPath&&e.push("@"+n.assetPath+"@")}if(e.length===0&&t.fields.payload){let n=t.fields.payload;typeof n=="string"?e.push(n):n.assetPath&&e.push("@"+n.assetPath+"@")}return e}_getAttributes(t){let e={};this._collectAttributesFromPath(t,e);let n=t.match(Ix);if(n){let s=n[1],r=n[4],a=this._getVariantPaths(s);for(let o of a){if(t.startsWith(o))continue;let l=o+"/"+r;this._collectAttributesFromPath(l,e)}}else{let s=t.split("/");for(let r=1;r<s.length-1;r++){let a=s.slice(0,r+1).join("/"),o=s.slice(r+1).join("/"),l=this._getVariantPaths(a);for(let h of l){let u=h+"/"+o;this._collectAttributesFromPath(u,e)}}}return e}_collectAttributesFromPath(t,e){let n=this.attributesByPrimPath.get(t);if(n)for(let[s,r]of n){if(r.fields?.default!==void 0)e[s]=r.fields.default;else if(r.fields?.timeSamples){let{times:a,values:o}=r.fields.timeSamples;if(a&&o&&a.length>0){let l=a.indexOf(0);e[s]=l>=0?o[l]:o[0]}}r.fields?.elementSize!==void 0&&(e[s+":elementSize"]=r.fields.elementSize),s.startsWith("primvars:")&&r.fields?.typeName!==void 0&&(e[s+":typeName"]=r.fields.typeName)}}_buildGeomPrimitive(t,e,n){let s=this._getAttributes(t),r=t.split("/").pop(),a;switch(n){case"Cube":{let u=s.size||2;a=new di(u,u,u);break}case"Sphere":{let u=s.radius||1;a=new dr(u,32,16);break}case"Cylinder":{let u=s.height||2,c=s.radius||1;a=new ys(c,c,u,32);break}case"Cone":{let u=s.height||2,c=s.radius||1;a=new lr(c,u,32);break}case"Capsule":{let u=s.height||1,c=s.radius||.5;a=new or(c,u,16,32);break}}let o=s.axis||"Z";o==="X"?a.rotateZ(-Math.PI/2):o==="Z"&&a.rotateX(Math.PI/2);let l=this._buildMaterial(t,e.fields),h=new we(a,l);return h.name=r,this.applyTransform(h,e.fields,s),h}_buildMesh(t,e){let n=this._getAttributes(t),s=n["primvars:skel:jointIndices"],r=n["primvars:skel:jointWeights"],a=s&&r&&s.length>0&&r.length>0,o=this._getGeomSubsets(t),l,h;if(o.length>0){l=this._buildGeometryWithSubsets(n,o,a);let d=this._getMaterialPath(t,e.fields);h=o.map(m=>{let _=m.materialPath||d;return this._buildMaterialForPath(_)})}else l=this._buildGeometry(t,n,a),h=this._buildMaterial(t,e.fields);let u=n["primvars:displayColor"];if(u&&u.length>=3){let d=m=>{m.color&&m.color.r===1&&m.color.g===1&&m.color.b===1&&!m.map&&m.color.setRGB(u[0],u[1],u[2],ne)};Array.isArray(h)?h.forEach(d):d(h)}let c=n["primvars:displayOpacity"];if(c&&c.length===1&&o.length===0){let d=c[0],m=_=>{d<1&&_.opacity===1&&_.transparent===!1&&(_.opacity=d,_.transparent=!0)};Array.isArray(h)?h.forEach(m):m(h)}let f;if(a){f=new nr(l,h);let d=this.specsByPath[t+".skel:skeleton"];d||(d=this.specsByPath[t+".rel skel:skeleton"]);let m=null;d&&(d.fields.targetPaths&&d.fields.targetPaths.length>0?m=d.fields.targetPaths[0]:d.fields.default&&(m=d.fields.default.replace(/<|>/g,"")));let _=n["skel:joints"],p=n["primvars:skel:geomBindTransform"];this.skinnedMeshes.push({mesh:f,skeletonPath:m,path:t,localJoints:_,geomBindTransform:p})}else f=new we(l,h);return f.name=t.split("/").pop(),this.applyTransform(f,e.fields,n),f}_buildCamera(t){let e=this._getAttributes(t),n=e.projection,s=typeof n=="string"?n.toLowerCase():En.projection,r=e.clippingRange||En.clippingRange,a=Math.max(Number.EPSILON,this._parseNumber(r[0],En.clippingRange[0])),o=Math.max(a+Number.EPSILON,this._parseNumber(r[1],En.clippingRange[1])),l=this._parseNumber(e.horizontalAperture,En.horizontalAperture),h=this._parseNumber(e.verticalAperture,En.verticalAperture),u=this._parseNumber(e.horizontalApertureOffset,En.horizontalApertureOffset),c=this._parseNumber(e.verticalApertureOffset,En.verticalApertureOffset),f=this._parseNumber(e.focalLength,En.focalLength),d=this._parseNumber(e.focusDistance,En.focusDistance),m=this._parseNumber(e.fStop,En.fStop),_;if(s==="orthographic"){let p=l/10,g=h/10,b=u/10,M=c/10;_=new gi(b-p*.5,b+p*.5,M+g*.5,M-g*.5,a,o)}else{let p=Math.max(Number.EPSILON,h),g=Math.max(Number.EPSILON,f),b=l/p,M=2*Math.atan(p/(2*g))*180/Math.PI;_=new Se(M,b,a,o),_.filmGauge=Math.max(l,h),_.filmOffset=u,_.focus=d,_.setFocalLength(g),c!==0&&(_.userData.verticalApertureOffset=c)}return _.userData.fStop=m,_.userData.usdProjection=s,_}_buildLight(t,e){let n=this._getAttributes(t),s=this._parseNumber(n["inputs:intensity"],1),r=n["inputs:color"]||[1,1,1],a=n["inputs:enableColorTemperature"]===!0,o=this._parseNumber(n["inputs:colorTemperature"],6500),l=new zt(r[0],r[1],r[2]);if(a){let u=this._colorTemperature(o);l.multiply(u)}let h;switch(e){case"DistantLight":h=new Gi(l,s);break;case"SphereLight":{let u=this._parseNumber(n["shaping:cone:angle"],0);if(u>0){let c=u*Math.PI/180,f=this._parseNumber(n["shaping:cone:softness"],0);h=new vr(l,s,0,c,f)}else h=new yr(l,s);break}case"RectLight":{let u=this._parseNumber(n["inputs:width"],1),c=this._parseNumber(n["inputs:height"],1);h=new Ts(l,s,u,c);break}case"DiskLight":{let c=this._parseNumber(n["inputs:radius"],.5)*2;h=new Ts(l,s,c,c);break}}return h}_colorTemperature(t){let e=t/100,n,s,r;return e<=66?(n=1,s=.3900815787690196*Math.log(e)-.6318414437886275):(n=1.292936186062745*Math.pow(e-60,-.1332047592),s=1.1298908608952942*Math.pow(e-60,-.0755148492)),e>=66?r=1:e<=19?r=0:r=.543206789110196*Math.log(e-10)-1.19625408914,new zt(Math.min(Math.max(n,0),1),Math.min(Math.max(s,0),1),Math.min(Math.max(r,0),1))}_parseNumber(t,e){let n=Number(t);return Number.isFinite(n)?n:e}_getGeomSubsets(t){let e=[],n=this.geomSubsetsByMeshPath.get(t);if(!n)return e;for(let s of n){let a=this._getAttributes(s).indices;if(!a||a.length===0)continue;let o=this._getMaterialBindingTarget(s);e.push({name:s.split("/").pop(),indices:a,materialPath:o})}return e}_getMaterialBindingTarget(t){let e="material:binding",n=t+"."+e,s=this.specsByPath[n];if(s?.fields?.targetPaths?.length>0)return s.fields.targetPaths[0];let r=t.split("/");for(let a=1;a<r.length;a++){let o=r.slice(0,a+1).join("/"),l=r.slice(a+1).join("/"),h=this._getVariantPaths(o);for(let u of h){let c=l?u+"/"+l+"."+e:u+"."+e,f=this.specsByPath[c];if(f?.fields?.targetPaths?.length>0)return f.fields.targetPaths[0]}}return null}_buildGeometry(t,e,n=!1){let s=new De,r=e.points;if(!r||r.length===0)return s;let a=e.faceVertexIndices,o=e.faceVertexCounts,l=e["primvars:arnold:polygon_holes"],h=this._buildHoleMap(l),u=a,c=null;if(o&&o.length>0){let x=this._triangulateIndicesWithPattern(a,o,r,h);u=x.indices,c=x.pattern}let f=r;u&&u.length>0&&(f=this._expandAttribute(r,u,3)),s.setAttribute("position",new jt(new Float32Array(f),3));let d=e.normals||e["primvars:normals"],m=e["normals:indices"]||e["primvars:normals:indices"];if(d&&d.length>0){let x=d;if(m&&m.length>0&&c){let w=this._applyTriangulationPattern(m,c);x=this._expandAttribute(d,w,3)}else if(d.length===r.length)u&&u.length>0&&(x=this._expandAttribute(d,u,3));else if(c){let w=this._applyTriangulationPattern(Array.from({length:d.length/3},(A,C)=>C),c);x=this._expandAttribute(d,w,3)}s.setAttribute("normal",new jt(new Float32Array(x),3))}else{let x=this._computeVertexNormals(r,u);s.setAttribute("normal",new jt(new Float32Array(this._expandAttribute(x,u,3)),3))}let{uvs:_,uvIndices:p}=this._findUVPrimvar(e),g=a?a.length:0;if(_&&_.length>0){let x=_;if(p&&p.length>0&&c){let w=this._applyTriangulationPattern(p,c);x=this._expandAttribute(_,w,2)}else if(u&&_.length/2===r.length/3)x=this._expandAttribute(_,u,2);else if(c&&_.length/2===g){let w=this._applyTriangulationPattern(Array.from({length:g},(A,C)=>C),c);x=this._expandAttribute(_,w,2)}s.setAttribute("uv",new jt(new Float32Array(x),2))}let{uvs2:b,uv2Indices:M}=this._findUV2Primvar(e);if(b&&b.length>0){let x=b;if(M&&M.length>0&&c){let w=this._applyTriangulationPattern(M,c);x=this._expandAttribute(b,w,2)}else if(u&&b.length/2===r.length/3)x=this._expandAttribute(b,u,2);else if(c&&b.length/2===g){let w=this._applyTriangulationPattern(Array.from({length:g},(A,C)=>C),c);x=this._expandAttribute(b,w,2)}s.setAttribute("uv1",new jt(new Float32Array(x),2))}if(n){let x=e["primvars:skel:jointIndices"],w=e["primvars:skel:jointWeights"],A=e["primvars:skel:jointIndices:elementSize"]||4;if(x&&w){let C=f.length/3,y,T;u&&u.length>0?(y=this._expandAttribute(x,u,A),T=this._expandAttribute(w,u,A)):(y=x,T=w);let R=new Uint16Array(C*4),P=new Float32Array(C*4);this._selectTopWeights(y,T,A,C,R,P),s.setAttribute("skinIndex",new jt(R,4)),s.setAttribute("skinWeight",new jt(P,4))}}return s}_buildGeometryWithSubsets(t,e,n=!1){let s=new De,r=t.points;if(!r||r.length===0)return s;let a=t.faceVertexIndices,o=t.faceVertexCounts;if(!o||o.length===0)return s;let l=t["primvars:arnold:polygon_holes"],h=this._buildHoleMap(l),u=h.holeFaces,c=h.parentToHoles,{uvs:f,uvIndices:d}=this._findUVPrimvar(t),{uvs2:m,uv2Indices:_}=this._findUV2Primvar(t),p=t.normals||t["primvars:normals"],g=t["normals:indices"]||t["primvars:normals:indices"],b=n?t["primvars:skel:jointIndices"]:null,M=n?t["primvars:skel:jointWeights"]:null,x=t["primvars:skel:jointIndices:elementSize"]||4,w=[],A=0;for(let nt=0;nt<o.length;nt++){if(w.push(A),u.has(nt))continue;let bt=o[nt],yt=c.get(nt);if(yt&&yt.length>0){let Yt=bt;for(let Mt of yt)Yt+=o[Mt];A+=Yt-2}else bt>=3&&(A+=bt-2)}let C=new Int32Array(A).fill(-1);for(let nt=0;nt<e.length;nt++){let bt=e[nt];for(let yt=0;yt<bt.indices.length;yt++){let Yt=bt.indices[yt];if(Yt>=o.length)continue;let Mt=w[Yt],Ot=o[Yt]-2;for(let Lt=0;Lt<Ot;Lt++)C[Mt+Lt]=nt}}let y=[];for(let nt=0;nt<A;nt++)y.push({original:nt,subset:C[nt]});y.sort((nt,bt)=>nt.subset-bt.subset);let T=[],R=y.length>0?y[0].subset:-1,P=0;for(let nt=0;nt<y.length;nt++)y[nt].subset!==R&&(R>=0&&T.push({start:P*3,count:(nt-P)*3,materialIndex:R}),R=y[nt].subset,P=nt);R>=0&&y.length>P&&T.push({start:P*3,count:(y.length-P)*3,materialIndex:R});for(let nt of T)s.addGroup(nt.start,nt.count,nt.materialIndex);let{indices:I,pattern:V}=this._triangulateIndicesWithPattern(a,o,r,h),W=o.reduce((nt,bt)=>nt+bt,0),N=f&&!d&&f.length/2===W||m&&!_&&m.length/2===W?this._applyTriangulationPattern(Array.from({length:W},(nt,bt)=>bt),V):null,G=d?this._applyTriangulationPattern(d,V):f&&f.length/2===W?N:null,X=_?this._applyTriangulationPattern(_,V):m&&m.length/2===W?N:null,$=p&&g&&g.length>0,tt=p&&p.length/3===W,rt=$?this._applyTriangulationPattern(g,V):tt?this._applyTriangulationPattern(Array.from({length:W},(nt,bt)=>bt),V):null,at=!p&&I.length>0?this._computeVertexNormals(r,I):null,ct=A*3,kt=new Float32Array(ct*3),Jt=f?new Float32Array(ct*2):null,Ft=m?new Float32Array(ct*2):null,q=p||at?new Float32Array(ct*3):null,it=b?new Uint16Array(ct*x):null,et=M?new Float32Array(ct*x):null;for(let nt=0;nt<y.length;nt++){let bt=y[nt].original;for(let yt=0;yt<3;yt++){let Yt=bt*3+yt,Mt=nt*3+yt,Ot=I[Yt];if(kt[Mt*3]=r[Ot*3],kt[Mt*3+1]=r[Ot*3+1],kt[Mt*3+2]=r[Ot*3+2],Jt&&f)if(G){let Lt=G[Yt];Jt[Mt*2]=f[Lt*2],Jt[Mt*2+1]=f[Lt*2+1]}else f.length/2===r.length/3&&(Jt[Mt*2]=f[Ot*2],Jt[Mt*2+1]=f[Ot*2+1]);if(Ft&&m)if(X){let Lt=X[Yt];Ft[Mt*2]=m[Lt*2],Ft[Mt*2+1]=m[Lt*2+1]}else m.length/2===r.length/3&&(Ft[Mt*2]=m[Ot*2],Ft[Mt*2+1]=m[Ot*2+1]);if(q)if(p&&rt){let Lt=rt[Yt];q[Mt*3]=p[Lt*3],q[Mt*3+1]=p[Lt*3+1],q[Mt*3+2]=p[Lt*3+2]}else p&&p.length===r.length?(q[Mt*3]=p[Ot*3],q[Mt*3+1]=p[Ot*3+1],q[Mt*3+2]=p[Ot*3+2]):at&&(q[Mt*3]=at[Ot*3],q[Mt*3+1]=at[Ot*3+1],q[Mt*3+2]=at[Ot*3+2]);if(it&&et&&b&&M)for(let Lt=0;Lt<x;Lt++)it[Mt*x+Lt]=b[Ot*x+Lt]||0,et[Mt*x+Lt]=M[Ot*x+Lt]||0}}if(s.setAttribute("position",new jt(kt,3)),Jt&&s.setAttribute("uv",new jt(Jt,2)),Ft&&s.setAttribute("uv1",new jt(Ft,2)),s.setAttribute("normal",new jt(q,3)),it&&et){let nt=new Uint16Array(ct*4),bt=new Float32Array(ct*4);this._selectTopWeights(it,et,x,ct,nt,bt),s.setAttribute("skinIndex",new jt(nt,4)),s.setAttribute("skinWeight",new jt(bt,4))}return s}_selectTopWeights(t,e,n,s,r,a){if(n<=4){for(let l=0;l<s;l++)for(let h=0;h<4;h++)h<n?(r[l*4+h]=t[l*n+h]||0,a[l*4+h]=e[l*n+h]||0):(r[l*4+h]=0,a[l*4+h]=0);return}let o=new Uint32Array(n);for(let l=0;l<s;l++){let h=l*n;for(let c=0;c<n;c++)o[c]=c;for(let c=0;c<4;c++){let f=c,d=e[h+o[c]]||0;for(let m=c+1;m<n;m++){let _=e[h+o[m]]||0;_>d&&(d=_,f=m)}if(f!==c){let m=o[c];o[c]=o[f],o[f]=m}}let u=0;for(let c=0;c<4;c++)u+=e[h+o[c]]||0;for(let c=0;c<4;c++){let f=o[c];u>0?(r[l*4+c]=t[h+f]||0,a[l*4+c]=(e[h+f]||0)/u):(r[l*4+c]=0,a[l*4+c]=0)}}}_findUVPrimvar(t){for(let s in t){if(!s.startsWith("primvars:")||s.endsWith(":typeName")||s.endsWith(":elementSize")||s.endsWith(":indices")||s.includes("skel:"))continue;let r=t[s+":typeName"];if(r&&r.includes("texCoord"))return{uvs:t[s],uvIndices:t[s+":indices"]}}let e=t["primvars:st"]||t["primvars:UVMap"],n=t["primvars:st:indices"];return{uvs:e,uvIndices:n}}_findUV2Primvar(t){let e=t["primvars:st1"],n=t["primvars:st1:indices"];return{uvs2:e,uv2Indices:n}}_buildHoleMap(t){if(!t||t.length===0)return{parentToHoles:new Map,holeFaces:new Set};let e=new Map,n=new Set;for(let s=0;s<t.length;s+=2){let r=t[s],a=t[s+1];n.add(r),e.has(a)||e.set(a,[]),e.get(a).push(r)}return{parentToHoles:e,holeFaces:n}}_triangulateIndicesWithPattern(t,e,n=null,s=null){let r=[],a=[],o=[],l=0;for(let f=0;f<e.length;f++)o.push(l),l+=e[f];let h=s?.parentToHoles||new Map,u=s?.holeFaces||new Set,c=0;for(let f=0;f<e.length;f++){let d=e[f];if(u.has(f)){c+=d;continue}let m=h.get(f);if(m&&m.length>0&&n&&n.length>0){let _=new Map,p=[];for(let M=0;M<d;M++){let x=t[c+M];p.push(x),_.set(x,c+M)}let g=[];for(let M of m){let x=o[M],w=e[M],A=[];for(let C=0;C<w;C++){let y=t[x+C];A.push(y),_.set(y,x+C)}g.push(A)}let b=this._triangulateNGonWithHoles(p,g,n);for(let M of b)r.push(M[0],M[1],M[2]),a.push(_.get(M[0]),_.get(M[1]),_.get(M[2]))}else if(d===3)r.push(t[c],t[c+1],t[c+2]),a.push(c,c+1,c+2);else if(d===4)r.push(t[c],t[c+1],t[c+2],t[c],t[c+2],t[c+3]),a.push(c,c+1,c+2,c,c+2,c+3);else if(d>4)if(n&&n.length>0){let _=[];for(let g=0;g<d;g++)_.push(t[c+g]);let p=this._triangulateNGon(_,n);for(let g of p)r.push(g[0],g[1],g[2]),a.push(c+_.indexOf(g[0]),c+_.indexOf(g[1]),c+_.indexOf(g[2]))}else for(let _=1;_<d-1;_++)r.push(t[c],t[c+_],t[c+_+1]),a.push(c,c+_,c+_+1);c+=d}return{indices:r,pattern:a}}_applyTriangulationPattern(t,e){let n=[];for(let s=0;s<e.length;s++)n.push(t[e[s]]);return n}_triangulateNGon(t,e){let n=[],s=[];for(let u of t)s.push(new L(e[u*3],e[u*3+1],e[u*3+2]));let r=new L;for(let u=0;u<s.length;u++){let c=s[u],f=s[(u+1)%s.length];r.x+=(c.y-f.y)*(c.z+f.z),r.y+=(c.z-f.z)*(c.x+f.x),r.z+=(c.x-f.x)*(c.y+f.y)}r.normalize();let a=new L,o=new L;Math.abs(r.y)>.9?a.set(1,0,0):a.set(0,1,0),o.crossVectors(r,a).normalize(),a.crossVectors(o,r).normalize();for(let u of s)n.push(new Dt(u.dot(a),u.dot(o)));let l=Ss.triangulateShape(n,[]),h=[];for(let u of l)h.push([t[u[0]],t[u[1]],t[u[2]]]);return h}_triangulateNGonWithHoles(t,e,n){let s=[];for(let d of t)s.push(new L(n[d*3],n[d*3+1],n[d*3+2]));let r=new L;for(let d=0;d<s.length;d++){let m=s[d],_=s[(d+1)%s.length];r.x+=(m.y-_.y)*(m.z+_.z),r.y+=(m.z-_.z)*(m.x+_.x),r.z+=(m.x-_.x)*(m.y+_.y)}r.normalize();let a=new L,o=new L;Math.abs(r.y)>.9?a.set(1,0,0):a.set(0,1,0),o.crossVectors(r,a).normalize(),a.crossVectors(o,r).normalize();let l=[];for(let d of s)l.push(new Dt(d.dot(a),d.dot(o)));let h=[];for(let d of e){let m=[];for(let _ of d){let p=new L(n[_*3],n[_*3+1],n[_*3+2]);m.push(new Dt(p.dot(a),p.dot(o)))}h.push(m)}let u=[...t];for(let d of e)u.push(...d);let c=Ss.triangulateShape(l,h),f=[];for(let d of c)f.push([u[d[0]],u[d[1]],u[d[2]]]);return f}_triangulateIndices(t,e){let n=[],s=0;for(let r=0;r<e.length;r++){let a=e[r];if(a===3)n.push(t[s],t[s+1],t[s+2]);else if(a===4)n.push(t[s],t[s+1],t[s+2],t[s],t[s+2],t[s+3]);else if(a>4)for(let o=1;o<a-1;o++)n.push(t[s],t[s+o],t[s+o+1]);s+=a}return n}_expandAttribute(t,e,n){let s=new Array(e.length*n);for(let r=0;r<e.length;r++){let a=e[r];for(let o=0;o<n;o++)s[r*n+o]=t[a*n+o]}return s}_computeVertexNormals(t,e){let n=t.length/3,s=new Float32Array(n*3);for(let r=0;r<e.length;r+=3){let a=e[r],o=e[r+1],l=e[r+2],h=t[a*3],u=t[a*3+1],c=t[a*3+2],f=t[o*3],d=t[o*3+1],m=t[o*3+2],_=t[l*3],p=t[l*3+1],g=t[l*3+2],b=f-h,M=d-u,x=m-c,w=_-h,A=p-u,C=g-c,y=M*C-x*A,T=x*w-b*C,R=b*A-M*w;s[a*3]+=y,s[a*3+1]+=T,s[a*3+2]+=R,s[o*3]+=y,s[o*3+1]+=T,s[o*3+2]+=R,s[l*3]+=y,s[l*3+1]+=T,s[l*3+2]+=R}for(let r=0;r<n;r++){let a=s[r*3],o=s[r*3+1],l=s[r*3+2],h=Math.sqrt(a*a+o*o+l*l);h>0&&(s[r*3]/=h,s[r*3+1]/=h,s[r*3+2]/=h)}return s}_getMaterialPath(t,e){let n=null,s=e["material:binding"];return s&&(n=Array.isArray(s)?s[0]:s),n||(n=this._getMaterialBindingTarget(t)),n}_buildMaterial(t,e){let n=new zi,s=null,r=e["material:binding"];if(r&&(s=Array.isArray(r)?r[0]:r),s||(s=this._getMaterialBindingTarget(t)),!s){let a=[],o=t+"/";for(let l in this.specsByPath){if(!l.startsWith(o)||!l.endsWith(".material:binding"))continue;let h=this.specsByPath[l];if(!h)continue;let u=h.fields.targetPaths;u&&u.length>0&&a.push(u[0])}a.length>0&&(s=this._pickBestMaterial(a))}if(!s){let o="/"+t.split("/")[1],l=this.materialsByRoot.get(o);if(l){for(let h of l)if(h.startsWith(o+"/Looks/")||h.startsWith(o+"/Materials/")){s=h;break}}}return s&&this._applyMaterial(n,s),n}_buildMaterialForPath(t){let e=new zi;return t&&this._applyMaterial(e,t),e}_applyMaterialBinding(t,e){let n=e+".material:binding",s=this.specsByPath[n];if(!s)return;let r=null,a=s.fields?.targetPaths||s.fields?.default;if(a&&(r=Array.isArray(a)?a[0]:a),!r)return;r=String(r).replace(/^<|>$/g,"");let o=new zi;this._applyMaterial(o,r),t.material=o}_pickBestMaterial(t){for(let e of t){let n=this.shadersByMaterialPath.get(e);if(n)for(let s of n){let r=this._getAttributes(s);if(r["info:id"]==="UsdUVTexture"&&r["inputs:file"])return e}}return t[0]}_applyMaterial(t,e){if(!this.specsByPath[e])return;let s=this.shadersByMaterialPath.get(e);if(s)for(let r of s){let a=this.specsByPath[r];if(!a)continue;let l=this._getAttributes(r)["info:id"]||a.fields["info:id"];l==="UsdPreviewSurface"||l==="ND_UsdPreviewSurface_surfaceshader"?this._applyPreviewSurface(t,r):l==="arnold:openpbr_surface"&&this._applyOpenPBRSurface(t,r)}}_applyTextureOrValue(t,e,n,s,r,a,o,l){let h=e+"."+s,u=this.specsByPath[h];if(u&&u.fields.connectionPaths&&u.fields.connectionPaths.length>0){let c=l===this._getTextureFromOpenPBRConnection?u.fields.connectionPaths:[u.fields.connectionPaths[0]];for(let f of c){let d=l.call(this,f);if(d)return d.colorSpace=a,t[r]=d,!0}}return n[s]!==void 0&&o&&o(n[s]),!1}_applyPreviewSurface(t,e){let n=this._getAttributes(e),s=(c,f,d,m)=>this._applyTextureOrValue(t,e,n,c,f,d,m,this._getTextureFromConnection),r=c=>{let f=e+"."+c;return this.specsByPath[f]};if(s("inputs:diffuseColor","map",ne,c=>{Array.isArray(c)&&c.length>=3&&t.color.setRGB(c[0],c[1],c[2],ne)}),t.map&&t.map.userData.scale){let c=t.map.userData.scale;Array.isArray(c)&&c.length>=3&&t.color.setRGB(c[0],c[1],c[2],ne)}if(s("inputs:emissiveColor","emissiveMap",ne,c=>{Array.isArray(c)&&c.length>=3&&t.emissive.setRGB(c[0],c[1],c[2],ne)}),t.emissiveMap)if(t.emissiveMap.userData.scale){let c=t.emissiveMap.userData.scale;Array.isArray(c)&&c.length>=3&&t.emissive.setRGB(c[0],c[1],c[2],ne)}else t.emissive.set(16777215);if(s("inputs:normal","normalMap",Fe,null),t.normalMap&&t.normalMap.userData.scale){let c=t.normalMap.userData.scale;t.normalScale=new Dt(c[0],c[1])}if(s("inputs:roughness","roughnessMap",Fe,c=>{t.roughness=c})&&(t.roughness=1),s("inputs:metallic","metalnessMap",Fe,c=>{t.metalness=c})&&(t.metalness=1),s("inputs:occlusion","aoMap",Fe,null),n["inputs:ior"]!==void 0&&(t.ior=n["inputs:ior"]),s("inputs:specularColor","specularColorMap",ne,c=>{Array.isArray(c)&&c.length>=3&&t.specularColor.setRGB(c[0],c[1],c[2],ne)}),t.specularColorMap&&t.specularColorMap.userData.scale){let c=t.specularColorMap.userData.scale;Array.isArray(c)&&c.length>=3&&t.specularColor.setRGB(c[0],c[1],c[2],ne)}n["inputs:clearcoat"]!==void 0&&(t.clearcoat=n["inputs:clearcoat"]),n["inputs:clearcoatRoughness"]!==void 0&&(t.clearcoatRoughness=n["inputs:clearcoatRoughness"]);let l=n["inputs:opacityThreshold"]!==void 0?n["inputs:opacityThreshold"]:0;if(r("inputs:opacity")?.fields?.connectionPaths?.length>0)l>0?(t.alphaTest=l,t.transparent=!1):t.transparent=!0;else{let c=n["inputs:opacity"]!==void 0?n["inputs:opacity"]:1;c<1&&(t.transparent=!0,t.opacity=c)}}_applyOpenPBRSurface(t,e){let n=this._getAttributes(e),s=(_,p,g,b)=>this._applyTextureOrValue(t,e,n,_,p,g,b,this._getTextureFromOpenPBRConnection);if(s("inputs:base_color","map",ne,_=>{Array.isArray(_)&&_.length>=3&&t.color.setRGB(_[0],_[1],_[2],ne)}),t.map&&t.map.userData.scale){let _=t.map.userData.scale;Array.isArray(_)&&_.length>=3&&t.color.setRGB(_[0],_[1],_[2],ne)}s("inputs:base_metalness","metalnessMap",Fe,_=>{typeof _=="number"&&(t.metalness=_)}),s("inputs:specular_roughness","roughnessMap",Fe,_=>{typeof _=="number"&&(t.roughness=_)});let r=s("inputs:emission_color","emissiveMap",ne,_=>{Array.isArray(_)&&_.length>=3&&t.emissive.setRGB(_[0],_[1],_[2],ne)}),a=n["inputs:emission_luminance"];a!==void 0&&a>0&&(r?t.emissiveIntensity=a:t.emissive.multiplyScalar(a));let o=n["inputs:transmission_weight"];if(o!==void 0&&o>0){t.transmission=o;let _=n["inputs:transmission_depth"];_!==void 0&&(t.thickness=_);let p=n["inputs:transmission_color"];p!==void 0&&Array.isArray(p)&&(t.attenuationColor.setRGB(p[0],p[1],p[2]),t.attenuationDistance=_||1)}let l=n["inputs:geometry_opacity"];l!==void 0&&l<1&&(t.opacity=l,t.transparent=!0);let h=n["inputs:specular_ior"];h!==void 0&&(t.ior=h);let u=n["inputs:coat_weight"];if(u!==void 0&&u>0){t.clearcoat=u;let _=n["inputs:coat_roughness"];_!==void 0&&(t.clearcoatRoughness=_)}let c=n["inputs:thin_film_weight"];if(c!==void 0&&c>0){t.iridescence=c;let _=n["inputs:thin_film_ior"];_!==void 0&&(t.iridescenceIOR=_);let p=n["inputs:thin_film_thickness"];if(p!==void 0){let g=p*1e3;t.iridescenceThicknessRange=[g,g]}}let f=n["inputs:specular_weight"];f!==void 0&&(t.specularIntensity=f);let d=n["inputs:specular_color"];d!==void 0&&Array.isArray(d)&&t.specularColor.setRGB(d[0],d[1],d[2]);let m=n["inputs:specular_roughness_anisotropy"];m!==void 0&&m>0&&(t.anisotropy=m),s("inputs:geometry_normal","normalMap",Fe,null)}_getTextureFromOpenPBRConnection(t){let e=t.replace(/<|>/g,""),n=e.split(".")[0],s=this.specsByPath[n];if(!s)return null;let r=this._getAttributes(n),a=r["info:id"]||s.fields["info:id"];if(s.fields.typeName==="NodeGraph"){let h=e.split(".")[1],u=n+"."+h,c=this.specsByPath[u];return c?.fields?.connectionPaths?.length>0?this._getTextureFromOpenPBRConnection(c.fields.connectionPaths[0]):null}if(a==="arnold:image"){let h=r["inputs:filename"];return h?this._loadTextureFromPath(h):null}if(a&&a.startsWith("ND_image_")){let h=r["inputs:file"];return h?this._loadTextureFromPath(h):null}if(a==="MayaND_fileTexture_color4"){let h=n+".inputs:inColor",u=this.specsByPath[h];return u?.fields?.connectionPaths?.length>0?this._getTextureFromOpenPBRConnection(u.fields.connectionPaths[0]):null}if(a&&a.startsWith("ND_convert_")){let h=n+".inputs:in",u=this.specsByPath[h];return u?.fields?.connectionPaths?.length>0?this._getTextureFromOpenPBRConnection(u.fields.connectionPaths[0]):null}if(a==="arnold:bump2d"){let h=n+".inputs:bump_map",u=this.specsByPath[h];return u?.fields?.connectionPaths?.length>0?this._getTextureFromOpenPBRConnection(u.fields.connectionPaths[0]):null}if(a==="arnold:color_correct"){let h=n+".inputs:input",u=this.specsByPath[h];return u?.fields?.connectionPaths?.length>0?this._getTextureFromOpenPBRConnection(u.fields.connectionPaths[0]):null}let l=n.substring(0,n.lastIndexOf("/"));if(l){let h=this.specsByPath[l];if(h){let u=this._getAttributes(l);if((u["info:id"]||h.fields["info:id"])==="arnold:image"){let f=u["inputs:filename"];if(f)return this._loadTextureFromPath(f)}}}return null}_loadTextureFromPath(t){if(!t)return null;if(this.textureCache[t])return this.textureCache[t];let e=this._loadTexture(t,null,null);return e&&(this.textureCache[t]=e),e}_getTextureFromConnection(t){let e=t.split(".")[0],n=this.specsByPath[e];if(!n)return null;let s=this._getAttributes(e);if((s["info:id"]||n.fields["info:id"])!=="UsdUVTexture")return null;let a=s["inputs:file"];if(!a)return null;let o=null,l=0,h=e+".inputs:st",u=this.specsByPath[h];if(u?.fields?.connectionPaths?.length>0){let p=u.fields.connectionPaths[0].replace(/<|>/g,"").split(".")[0],g=this.specsByPath[p];if(g){let b=this._getAttributes(p),M=b["info:id"]||g.fields["info:id"];if(M==="UsdTransform2d"){o=b;let x=p+".inputs:in",w=this.specsByPath[x];if(w?.fields?.connectionPaths?.length>0){let C=w.fields.connectionPaths[0].replace(/<|>/g,"").split(".")[0],T=this._getAttributes(C)["inputs:varname"];T==="st1"?l=1:T==="st2"&&(l=2)}}else if(M==="UsdPrimvarReader_float2"){let x=b["inputs:varname"];x==="st1"?l=1:x==="st2"&&(l=2)}}}let c=s["inputs:scale"],f=s["inputs:bias"],d=a;if(c&&(d+=":s"+c.join(",")),f&&(d+=":b"+f.join(",")),this.textureCache[d])return this.textureCache[d];let m=this._loadTexture(a,s,o);return m&&(c&&(m.userData.scale=c),f&&(m.userData.bias=f),l!==0&&(m.channel=l),this.textureCache[d]=m),m}_applyTextureTransforms(t,e){if(!e)return;let n=e["inputs:scale"];n&&Array.isArray(n)&&n.length>=2&&t.repeat.set(n[0],n[1]);let s=e["inputs:translation"];s&&Array.isArray(s)&&s.length>=2&&t.offset.set(s[0],s[1]);let r=e["inputs:rotation"];typeof r=="number"&&(t.rotation=r*Math.PI/180)}_loadTexture(t,e,n){let s=t;s.startsWith("@")&&(s=s.slice(1)),s.endsWith("@")&&(s=s.slice(0,-1));let r=this._resolveFilePath(s),a=this.assets[r];if(a||(a=this.assets[s]),!a){let o=s.split("/").pop();for(let l in this.assets)if(l.endsWith(o)||l.endsWith("/"+o))return this._createTextureFromData(this.assets[l],e,n);if(this.basePath)return this._createTextureFromData(r,e,n);if(this.manager){let l=this.manager.resolveURL(o);if(l!==o)return this._createTextureFromData(l,e,n)}return console.warn("USDLoader: Texture not found:",s),null}return this._createTextureFromData(a,e,n)}_createTextureFromData(t,e,n){if(!t)return null;let s=this,r=new ze,a;if(typeof t=="string")a=t;else if(t instanceof Uint8Array||t instanceof ArrayBuffer){let l=new Blob([t]);a=URL.createObjectURL(l)}else return null;let o=new Image;return this.texturePromises.push(new Promise(l=>{o.onload=function(){r.image=o,e&&(r.wrapS=s._getWrapMode(e["inputs:wrapS"]),r.wrapT=s._getWrapMode(e["inputs:wrapT"])),s._applyTextureTransforms(r,n),r.needsUpdate=!0,typeof t!="string"&&URL.revokeObjectURL(a),l()},o.onerror=function(){console.warn("USDLoader: Failed to load texture:",a),typeof t!="string"&&URL.revokeObjectURL(a),l()}})),o.src=a,r}_getWrapMode(t){return t==="repeat"?Ni:t==="mirror"?ds:t==="clamp"?on:Ni}_buildSkeleton(t){let e=this._getAttributes(t),n=e.joints;if(!n||n.length===0)return null;let s=e.bindTransforms,r=e.restTransforms,a=this._flattenMatrixArray(s,n.length),o=this._flattenMatrixArray(r,n.length),l=[],h={},u=[];for(let m=0;m<n.length;m++){let _=n[m],p=_.split("/").pop(),g=new xs;if(g.name=p,l.push(g),h[_]={bone:g,index:m},a&&a.length>=(m+1)*16){let b=new Ht,M=a.slice(m*16,(m+1)*16);b.set(M[0],M[4],M[8],M[12],M[1],M[5],M[9],M[13],M[2],M[6],M[10],M[14],M[3],M[7],M[11],M[15]);let x=b.clone().invert();u.push(x)}else u.push(new Ht)}for(let m=0;m<n.length;m++){let p=n[m].split("/");if(p.length>1){let g=p.slice(0,-1).join("/"),b=h[g];b&&b.bone.add(l[m])}}if(o&&o.length>=n.length*16)for(let m=0;m<n.length;m++){let _=new Ht,p=o.slice(m*16,(m+1)*16);_.set(p[0],p[4],p[8],p[12],p[1],p[5],p[9],p[13],p[2],p[6],p[10],p[14],p[3],p[7],p[11],p[15]),_.decompose(l[m].position,l[m].quaternion,l[m].scale)}let c=l.filter(m=>!m.parent||!m.parent.isBone),f=this.specsByPath[t+".skel:animationSource"],d=null;return f&&f.fields.targetPaths&&f.fields.targetPaths.length>0&&(d=f.fields.targetPaths[0]),{skeleton:new sr(l,u),joints:n,rootBones:c,animationPath:d,path:t}}_bindSkeletons(){for(let t of this.skinnedMeshes){let{mesh:e,skeletonPath:n,localJoints:s,geomBindTransform:r}=t,a=null;if(n&&this.skeletons[n]&&(a=this.skeletons[n]),!a){for(let c in this.skeletons)if(n&&(n.includes(c)||c.includes(n))){a=this.skeletons[c];break}}if(!a){let c=Object.keys(this.skeletons);c.length>0&&(a=this.skeletons[c[0]])}if(!a){console.warn("USDComposer: No skeleton found for skinned mesh",e.name);continue}let{skeleton:o,rootBones:l,joints:h}=a;if(s&&s.length>0){let c=e.geometry.attributes.skinIndex;if(c){let f=[];for(let m=0;m<s.length;m++){let _=s[m],p=h.indexOf(_);f[m]=p>=0?p:0}let d=c.array;for(let m=0;m<d.length;m++){let _=d[m];_<f.length&&(d[m]=f[_])}}}for(let c of l)e.add(c);let u=new Ht;if(r&&r.length===16){let c=r;u.set(c[0],c[4],c[8],c[12],c[1],c[5],c[9],c[13],c[2],c[6],c[10],c[14],c[3],c[7],c[11],c[15])}e.bind(o,u)}}_buildAnimations(){let t=[];for(let n in this.specsByPath){let s=this.specsByPath[n];if(s.specType!==Zi.Prim||s.fields.typeName!=="SkelAnimation")continue;let r=this._buildAnimationClip(n);r&&t.push(r)}let e=this._buildTransformAnimations();return e.length>0&&t.push(new As("TransformAnimation",-1,e)),t}_buildTransformAnimations(){let t=[];for(let e in this.specsByPath){let n=this.specsByPath[e];if(n.specType!==Zi.Prim)continue;let s=n.fields?.typeName;if(s!=="Xform"&&s!=="Scope"&&s!=="Mesh")continue;let r=e.split("/").pop(),a=e+".xformOp:orient",o=this.specsByPath[a];if(o?.fields?.timeSamples){let{times:_,values:p}=o.fields.timeSamples,g=[],b=[];for(let M=0;M<_.length;M++){g.push(_[M]/this.fps);let x=p[M];b.push(x[0],x[1],x[2],x[3])}g.length>0&&t.push(new Mn(r+".quaternion",new Float32Array(g),new Float32Array(b)))}let l=e+".xformOp:rotateXYZ",h=this.specsByPath[l];if(h?.fields?.timeSamples){let{times:_,values:p}=h.fields.timeSamples,g=[],b=[],M=new cn,x=new Ne;for(let w=0;w<_.length;w++){g.push(_[w]/this.fps);let A=p[w];M.set(A[0]*Math.PI/180,A[1]*Math.PI/180,A[2]*Math.PI/180,"ZYX"),x.setFromEuler(M),b.push(x.x,x.y,x.z,x.w)}g.length>0&&t.push(new Mn(r+".quaternion",new Float32Array(g),new Float32Array(b)))}let u=e+".xformOp:translate",c=this.specsByPath[u];if(c?.fields?.timeSamples){let{times:_,values:p}=c.fields.timeSamples,g=[],b=[];for(let M=0;M<_.length;M++){g.push(_[M]/this.fps);let x=p[M];b.push(x[0],x[1],x[2])}g.length>0&&t.push(new hn(r+".position",new Float32Array(g),new Float32Array(b)))}let f=e+".xformOp:scale",d=this.specsByPath[f];if(d?.fields?.timeSamples){let{times:_,values:p}=d.fields.timeSamples,g=[],b=[];for(let M=0;M<_.length;M++){g.push(_[M]/this.fps);let x=p[M];b.push(x[0],x[1],x[2])}g.length>0&&t.push(new hn(r+".scale",new Float32Array(g),new Float32Array(b)))}let m=n.fields?.properties||[];for(let _ of m){if(!_.startsWith("xformOp:transform"))continue;let p=e+"."+_,g=this.specsByPath[p];if(!g?.fields?.timeSamples)continue;let{times:b,values:M}=g.fields.timeSamples,x=[],w=[],A=[],C=[],y=[],T=[],R=new Ht,P=new L,I=new Ne,V=new L;for(let W=0;W<b.length;W++){let N=M[W];if(!N||N.length<16)continue;let G=b[W]/this.fps;R.set(N[0],N[4],N[8],N[12],N[1],N[5],N[9],N[13],N[2],N[6],N[10],N[14],N[3],N[7],N[11],N[15]),R.decompose(P,I,V),x.push(G),w.push(P.x,P.y,P.z),A.push(G),C.push(I.x,I.y,I.z,I.w),y.push(G),T.push(V.x,V.y,V.z)}x.length>0&&(t.push(new hn(r+".position",new Float32Array(x),new Float32Array(w))),t.push(new Mn(r+".quaternion",new Float32Array(A),new Float32Array(C))),t.push(new hn(r+".scale",new Float32Array(y),new Float32Array(T))));break}}return t}_buildAnimationClip(t){let n=this._getAttributes(t).joints;if(!n||n.length===0)return null;let s=[],r=this._getTimeSampledAttribute(t,"rotations");if(r&&r.times&&r.values){let{times:h,values:u}=r;for(let c=0;c<n.length;c++){let f=n[c].split("/").pop(),d=[],m=[];for(let _=0;_<h.length;_++){let p=u[_];if(!p||p.length<(c+1)*4)continue;d.push(h[_]/this.fps);let g=p[c*4+0],b=p[c*4+1],M=p[c*4+2],x=p[c*4+3];m.push(g,b,M,x)}d.length>0&&s.push(new Mn(f+".quaternion",new Float32Array(d),new Float32Array(m)))}}let a=this._getTimeSampledAttribute(t,"translations");if(a&&a.times&&a.values){let{times:h,values:u}=a;for(let c=0;c<n.length;c++){let f=n[c].split("/").pop(),d=[],m=[];for(let _=0;_<h.length;_++){let p=u[_];!p||p.length<(c+1)*3||(d.push(h[_]/this.fps),m.push(p[c*3+0],p[c*3+1],p[c*3+2]))}d.length>0&&s.push(new hn(f+".position",new Float32Array(d),new Float32Array(m)))}}let o=this._getTimeSampledAttribute(t,"scales");if(o&&o.times&&o.values){let{times:h,values:u}=o;for(let c=0;c<n.length;c++){let f=n[c].split("/").pop(),d=[],m=[];for(let _=0;_<h.length;_++){let p=u[_];!p||p.length<(c+1)*3||(d.push(h[_]/this.fps),m.push(p[c*3+0],p[c*3+1],p[c*3+2]))}d.length>0&&s.push(new hn(f+".scale",new Float32Array(d),new Float32Array(m)))}}if(s.length===0)return null;let l=t.split("/").pop();return new As(l,-1,s)}_getTimeSampledAttribute(t,e){let n=t+"."+e,s=this.specsByPath[n];if(s&&s.fields.timeSamples){let r=s.fields.timeSamples;if(r.times&&r.values)return r}return null}_flattenMatrixArray(t,e){if(!t||t.length===0)return null;if(typeof t[0]=="number")return t;let n=[];for(let s=0;s<e;s++)for(let r=0;r<4;r++){let a=t[s*4+r];a&&a.length===4?n.push(a[0],a[1],a[2],a[3]):n.push(r===0?1:0,r===1?1:0,r===2?1:0,r===3?1:0)}return n}};var zo=class extends Vi{constructor(t){super(t)}load(t,e,n,s){let r=this,a=r.path===""?Hi.extractUrlBase(t):r.path,o=new mr(r.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(l){try{r.parse(l,a,e,s)}catch(h){s?s(h):console.error(h),r.manager.itemError(t)}},n,s)}parse(t,e="",n,s){let r=new Bo,a=new ko,o=new TextDecoder;function l(M){return M instanceof ArrayBuffer?M:M.byteOffset===0&&M.byteLength===M.buffer.byteLength?M.buffer:M.buffer.slice(M.byteOffset,M.byteOffset+M.byteLength)}function h(M){let x=M.lastIndexOf(".");return x<0||M.lastIndexOf("/")>x?"":M.slice(x+1).toLowerCase()}function u(M){let x={};for(let w in M){let A=M[w],C=h(w);if(C==="png"||C==="jpg"||C==="jpeg"||C==="avif"){x[w]=A;continue}C!=="usd"&&C!=="usda"&&C!=="usdc"||(c(A)?x[w]=a.parseData(l(A)):x[w]=r.parseData(o.decode(A)))}return x}function c(M){let x=new Uint8Array([80,88,82,45,85,83,68,67]),w=M instanceof Uint8Array?M:new Uint8Array(M);if(w.byteLength<x.length)return!1;for(let A=0;A<x.length;A++)if(w[A]!==x[A])return!1;return!0}function f(M){let x=Object.keys(M);if(x.length<1)return{file:void 0,filename:"",basePath:""};let w=x[0],A=h(w),C=!1,y=w.lastIndexOf("/"),T=y>=0?w.slice(0,y):"";if(A==="usda")return{file:M[w],filename:w,basePath:T};if(A==="usdc")C=!0;else if(A==="usd")if(c(M[w]))C=!0;else return{file:M[w],filename:w,basePath:T};return C?{file:M[w],filename:w,basePath:T}:{file:void 0,filename:"",basePath:""}}let d=this,m=(M,x)=>(n&&Promise.all(M.texturePromises).then(()=>n(x)).catch(w=>s?s(w):console.error(w)),x);if(typeof t=="string"){let M=new Ji(d.manager),x=r.parseData(t);return m(M,M.compose(x,{},{},e))}if(c(t)){let M=new Ji(d.manager),x=a.parseData(l(t));return m(M,M.compose(x,{},{},e))}let _=new Uint8Array(t);if(_[0]===80&&_[1]===75){let M=ff(_),x=u(M),{file:w,filename:A,basePath:C}=f(M);if(!w)throw new Error("THREE.USDLoader: Invalid USDZ package. The first ZIP entry must be a USD layer (.usd/.usda/.usdc).");let y=new Ji(d.manager),T=x[A];if(!T)throw new Error('THREE.USDLoader: Failed to parse root layer "'+A+'".');return m(y,y.compose(T,x,{},C))}let p=new Ji(d.manager),g=o.decode(_),b=r.parseData(g);return m(p,p.compose(b,{},{},e))}};var yf=1599998,Dx=5e5,mf="https://apps.apple.com/jp/app/kururi-clock/id6825353180",Lx=[1e30,.02,.005,.001],Xc={drop:["3D\u30D5\u30A1\u30A4\u30EB\u3092\u3053\u3053\u306B\u30C9\u30ED\u30C3\u30D7","Drop a 3D file here"],or:["\u307E\u305F\u306F\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u9078\u629E","or click to choose"],h_src:["\u5143\u30C7\u30FC\u30BF","Source"],h_tgt:["\u76EE\u6A19","Target"],h_out:["\u51FA\u529B","Output"],h_disp:["\u8868\u793A","Display"],tri:["\u5143\u306E\u4E09\u89D2\u5F62\u6570","Source triangles"],size:["\u30D5\u30A1\u30A4\u30EB\u30B5\u30A4\u30BA","File size"],target:["\u76EE\u6A19\u4E09\u89D2\u5F62\u6570","Target triangles"],red:["\u524A\u6E1B\u7387","Reduction"],match:["Kuu3D\u30B5\u30A4\u30BA\u306B\u5408\u308F\u305B\u308B","Match Kuu3D size"],pred:["\u4E88\u6E2C\u30B5\u30A4\u30BA","Estimated size"],helpmatch:["\u76EE\u6A19\u306E\u4E09\u89D2\u5F62\u6570\u3092\u3001Kuu3D(iPhone / iPad\u75283D\u30D3\u30E5\u30FC\u30EF\u30FC)\u304C\u5FEB\u9069\u306B\u958B\u3051\u308B\u6700\u5927\u30B5\u30A4\u30BA\u306B\u5408\u308F\u305B\u307E\u3059\u3002\u3059\u3067\u306B\u305D\u308C\u4EE5\u4E0B\u306E\u30C7\u30FC\u30BF\u306F\u3001\u305D\u306E\u307E\u307E\u3067\u3059\u3002","Sets the target to the largest size Kuu3D (iPhone/iPad 3D viewer) can open smoothly. Smaller models are left as they are."],link:["Kuu3D\u306B\u3064\u3044\u3066","About Kuu3D"],matchk:["Kururi\u30B5\u30A4\u30BA\u306B\u5408\u308F\u305B\u308B","Match Kururi size"],helpmatchk:["\u76EE\u6A19\u306E\u4E09\u89D2\u5F62\u6570\u3092\u3001Kururi Clock(iPhone\u7528\u306E3D\u6642\u8A08\u30A2\u30D7\u30EA)\u304C\u5FEB\u9069\u306B\u8868\u793A\u3067\u304D\u308B\u76EE\u5B89\u306E50\u4E07\u306B\u5408\u308F\u305B\u307E\u3059\u3002Kururi Clock\u3067\u8AAD\u307F\u8FBC\u3081\u308B\u30D5\u30A1\u30A4\u30EB\u306F50MB\u307E\u3067\u3067\u3059(STL\u306A\u3089\u7D04100\u4E07\u4E09\u89D2\u5F62)\u3002\u3059\u3067\u306B\u305D\u308C\u4EE5\u4E0B\u306E\u30C7\u30FC\u30BF\u306F\u3001\u305D\u306E\u307E\u307E\u3067\u3059\u3002","Sets the target to 500,000 triangles, the size Kururi Clock (an iPhone 3D clock app) shows smoothly. Kururi Clock loads files up to 50 MB (about 1,000,000 triangles as STL). Smaller models are left as they are."],linkk:["Kururi Clock\u306B\u3064\u3044\u3066","About Kururi Clock"],fmt:["\u5F62\u5F0F","Format"],unit:["\u5143\u306E\u5358\u4F4D","Source unit"],lock:["\u5883\u754C\u3092\u56FA\u5B9A","Lock open borders"],fast:["\u9AD8\u901F\u30E2\u30FC\u30C9(\u7C97\u3081)","Fast mode (rougher)"],suf:["\u30D5\u30A1\u30A4\u30EB\u540D\u306E\u672B\u5C3E","Filename suffix"],sufc:["\u672B\u5C3E\u306E\u6587\u5B57","Suffix text"],suf0:["\u4E09\u89D2\u5F62\u6570 (_1500k)","Triangle count (_1500k)"],suf1:["_decimated","_decimated"],suf2:["\u81EA\u5206\u3067\u6C7A\u3081\u308B","Custom"],suf3:["\u4ED8\u3051\u306A\u3044","None"],prot:["\u5F62\u72B6\u3092\u5B88\u308B","Shape protection"],prot0:["\u30AA\u30D5(\u76EE\u6A19\u6570\u3074\u3063\u305F\u308A)","Off (exact target)"],prot1:["\u5F31","Low"],prot2:["\u4E2D","Medium"],prot3:["\u5F37","High"],protnote:["\u300C\u5F31\u301C\u5F37\u300D\u306F\u5F62\u304C\u5D29\u308C\u308B\u5834\u5408\u306B\u524A\u6E1B\u3092\u6B62\u3081\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u76EE\u6A19\u6570\u3088\u308A\u591A\u304F\u6B8B\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002","Low\u2013High stops reducing when the shape would deform, so more triangles than the target may remain."],wire:["\u30EF\u30A4\u30E4\u30FC","Wireframe"],orig:["\u5143\u30C7\u30FC\u30BF\u3092\u8868\u793A","Show original"],cmp:["\u6BD4\u8F03\u30B9\u30E9\u30A4\u30C0\u30FC","Compare slider"],res:["\u7D50\u679C\u306E\u4E09\u89D2\u5F62\u6570","Result triangles"],err:["\u5F62\u72B6\u306E\u305A\u308C","Shape deviation"],errv:["\u6700\u5927 \u7D04 %p %(\u30E2\u30C7\u30EB\u30B5\u30A4\u30BA\u6BD4 / \u7D04 %m mm)","up to ~%p % of model size (~%m mm)"],lab_o:["\u5143\u30C7\u30FC\u30BF","Original"],lab_w:["\u7C21\u7565\u5316\u5F8C","Decimated"],run:["\u7C21\u7565\u5316\u3059\u308B","Decimate"],clear:["\u30AF\u30EA\u30A2","Clear"],save:["\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9","Download"],cancel:["\u30AD\u30E3\u30F3\u30BB\u30EB","Cancel"],priv:["\u51E6\u7406\u306F\u3059\u3079\u3066\u304A\u4F7F\u3044\u306E\u30D6\u30E9\u30A6\u30B6\u5185\u3067\u884C\u308F\u308C\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306F\u9001\u4FE1\u3055\u308C\u307E\u305B\u3093\u3002","Everything runs inside your browser. Your files are never uploaded."],busyLoad:["\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026","Loading\u2026"],busyRun:["\u7C21\u7565\u5316\u4E2D\u2026","Decimating\u2026"],busyWrite:["\u66F8\u304D\u51FA\u3057\u4E2D\u2026","Exporting\u2026"],fail:["\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F: ","Could not load: "],big:["\u3053\u306E\u30C7\u30FC\u30BF\u306F\u30D6\u30E9\u30A6\u30B6\u306E\u30E1\u30E2\u30EA\u3067\u306F\u5927\u304D\u3059\u304E\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002","This file may be too large for browser memory."],usdnote:["USD/USDZ\u306F\u5F62\u72B6\u306E\u307F\u8AAD\u307F\u8FBC\u307F\u307E\u3059(\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u30FB\u30C6\u30AF\u30B9\u30C1\u30E3\u306F\u5BFE\u8C61\u5916)\u3002","USD/USDZ: geometry only (animation and textures are not kept)."],langbtn:["English","\u65E5\u672C\u8A9E"]},Xe=0;try{let i=localStorage.getItem("sirppi_lang");i==="ja"?Xe=0:i==="en"?Xe=1:Xe=(navigator.language||"en").startsWith("ja")?0:1}catch{Xe=(navigator.language||"en").startsWith("ja")?0:1}var j=i=>document.getElementById(i),kr=i=>Xc[i][Xe],Ux=(i,t)=>{j(i).textContent=kr(t)},Zo=i=>i.toLocaleString(Xe===0?"ja-JP":"en-US");function gf(i,t){let e=j(i),n=e.value;e.innerHTML="",t.forEach((s,r)=>{let a=document.createElement("option");a.value=r,a.textContent=kr(s),e.appendChild(a)}),e.value=n||0}function Mf(){document.documentElement.lang=Xe===0?"ja":"en";for(let[i,t]of[["t_drop","drop"],["t_or","or"],["h_src","h_src"],["h_tgt","h_tgt"],["h_out","h_out"],["h_disp","h_disp"],["t_tri","tri"],["t_size","size"],["t_target","target"],["t_red","red"],["match","match"],["t_pred","pred"],["t_helpmatch","helpmatch"],["link","link"],["matchk","matchk"],["t_helpmatchk","helpmatchk"],["linkk","linkk"],["t_fmt","fmt"],["t_unit","unit"],["t_lock","lock"],["t_fast","fast"],["t_suf","suf"],["t_sufc","sufc"],["t_prot","prot"],["t_protnote","protnote"],["t_wire","wire"],["t_orig","orig"],["t_cmp","cmp"],["t_res","res"],["t_err","err"],["lab_o","lab_o"],["lab_w","lab_w"],["run","run"],["clear","clear"],["save","save"],["cancel","cancel"],["t_priv","priv"],["lang","langbtn"]])Ux(i,t);gf("suf",["suf0","suf1","suf2","suf3"]),gf("prot",["prot0","prot1","prot2","prot3"]),j("link").href=Xe===0?"https://apps.apple.com/jp/app/kuu3d/id6823961774":"https://apps.apple.com/app/id6823961774",j("linkk").href=mf,j("ap_kuu").href=j("link").href,j("ap_kur").href=Xe===0?mf:"https://apps.apple.com/app/id6825353180",j("ap_kuu").title="Kuu3D",j("ap_kur").title="Kururi Clock",j("ap_2d").title=Xe===0?"2D Render(Web\u7248)":"2D Render (web)",Ge&&(j("v_tri").textContent=Zo(Ge),Ki(+j("target").value)),pn&&Df()}for(let[i,t]of[["qbtn","help"],["qbtnk","helpk"]])j(i).onclick=e=>{e.stopPropagation();let n=j(t).classList.contains("open");document.querySelectorAll(".help").forEach(s=>s.classList.remove("open")),n||j(t).classList.add("open")};document.addEventListener("click",i=>{document.querySelectorAll(".help").forEach(t=>{t.contains(i.target)||t.classList.remove("open")})});j("lang").onclick=()=>{Xe=1-Xe;try{localStorage.setItem("sirppi_lang",Xe?"en":"ja")}catch{}Mf()};j("suf").onchange=()=>{j("sufrow").style.display=j("suf").value==="2"?"flex":"none"};function Nx(){let i=null,t=0,e=0,n=SirppiCore().then(u=>{i=u}),s=u=>{let c=u.length*3+1,f=i._malloc(c);return i.stringToUTF8(u,f,c),f},r=()=>i._malloc(512),a=u=>{let c="";for(let f=0;f<512&&i.HEAPU8[u+f];f++)c+=String.fromCharCode(i.HEAPU8[u+f]);return c},o=u=>{let c=i._sp_vertex_count(u),f=i._sp_triangle_count(u),d=i._sp_positions(u),m=i._sp_indices(u),_={pos:i.HEAPF32.slice(d/4,d/4+c*3),idx:i.HEAPU32.slice(m/4,m/4+f*3),col:null};if(i._sp_has_colors(u)){let p=i._sp_colors(u);_.col=i.HEAPU8.slice(p,p+c*3)}return _},l=u=>[u.pos.buffer,u.idx.buffer].concat(u.col?[u.col.buffer]:[]),h=()=>{t&&i._sp_free(t),e&&i._sp_free(e),t=e=0};self.onmessage=async u=>{let c=u.data;try{if(await n,c.t==="load"){h();let f="/in"+c.ext;try{i.FS.unlink(f)}catch{}i.FS.writeFile(f,new Uint8Array(c.buf));let d=s(f),m=r(),_=i._sp_load(d,m,512);try{i.FS.unlink(f)}catch{}if(!_)throw new Error(a(m));i._sp_cleanup(_),t=_;let p=o(_);self.postMessage({t:"loaded",geo:p,tri:i._sp_triangle_count(_),final:!0},l(p))}else if(c.t==="create"){h();let f=c.pos.length/3,d=i._malloc(c.pos.byteLength),m=i._malloc(c.idx.byteLength);i.HEAPF32.set(c.pos,d/4),i.HEAPU32.set(c.idx,m/4);let _=i._sp_create(d,f,m,c.idx.length,0);if(i._free(d),i._free(m),!_)throw new Error("empty mesh");if(c.col){let p=i._malloc(c.col.length);i.HEAPU8.set(c.col,p),i._sp_set_colors(_,p),i._free(p)}if(i._sp_cleanup(_),t=_,c.quiet)self.postMessage({t:"loaded",tri:i._sp_triangle_count(_),final:!0});else{let p=o(_);self.postMessage({t:"loaded",geo:p,tri:i._sp_triangle_count(_),final:!0},l(p))}}else if(c.t==="run"){if(!t)throw new Error("no mesh");e&&i._sp_free(e),self.postMessage({t:"stage",s:"run"}),e=i._sp_clone(t);let f=Date.now();i._sp_decimate_ex(e,BigInt(c.target),c.lock,c.errLimit,c.fast);let d=o(e),m=i._sp_triangle_count(e),_=i._sp_last_error(e);self.postMessage({t:"result",geo:d,n:m,err:_,dt:(Date.now()-f)/1e3},l(d)),self.postMessage({t:"stage",s:"write"});let p=["stl","obj","glb","ply"][c.fmt],g="/out."+p;try{i.FS.unlink(g)}catch{}let b=s(g),M=r();if(i._sp_write(e,b,c.fmt,c.scale,0,0,M,512)!==0)throw new Error(a(M));let w=i.FS.readFile(g);try{i.FS.unlink(g)}catch{}self.postMessage({t:"done",data:w,ext:p,final:!0},[w.buffer])}}catch(f){self.postMessage({t:"error",msg:f&&f.message||String(f),final:!0})}}}var Ns=null,dn=null,Wc=null;function qc(){Wc||(Wc=URL.createObjectURL(new Blob([self.__CORE_SRC,`
(`,Nx.toString(),")();"],{type:"text/javascript"}))),Ns=new Worker(Wc),Ns.onmessage=i=>{let t=i.data;if(!dn)return;let e=dn;if(t.t==="error"){dn=null,e.reject(new Error(t.msg));return}e.on&&e.on(t),t.final&&(dn=null,e.resolve(t))},Ns.onerror=i=>{if(dn){let t=dn;dn=null,t.reject(new Error(i.message||"worker error"))}}}function Go(i,t,e){return new Promise((n,s)=>{dn={resolve:n,reject:s,on:e},Ns.postMessage(i,t||[])})}qc();var zn=j("view"),Cn=new Do({antialias:!0,alpha:!0});Cn.setPixelRatio(Math.min(devicePixelRatio,2));zn.insertBefore(Cn.domElement,zn.firstChild);var zr=new Qs,mn=new Se(40,1,.01,1e3),Ho=new Fo(mn,Cn.domElement);Ho.enableDamping=!0;zr.add(new gr(16777215,5592422,1.1));var Sf=new Gi(16777215,1.4);Sf.position.set(2,3,4);mn.add(Sf);zr.add(mn);var Wo=new ln;zr.add(Wo);var Vo=new bs({color:14315734,roughness:.6,metalness:.05,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),Fx=new Bi({color:49151,wireframe:!0,transparent:!0,opacity:.55}),Ce={o:null,w:null},Fs=new L,Yc=!1,Xo=.5;function bf(){let i=zn.clientWidth,t=zn.clientHeight;Cn.setSize(i,t,!1),mn.aspect=i/t,mn.updateProjectionMatrix()}addEventListener("resize",bf);bf();var wf=()=>j("cmp").checked&&!!Ce.w;function _f(i,t,e,n,s){for(let r of["o","w"]){let a=Ce[r];a&&(a.s.visible=r===i,a.w.visible=r===i&&j("wire").checked)}Cn.setScissorTest(!0),Cn.setViewport(0,0,n,s),Cn.setScissor(t,0,e,s),Cn.render(zr,mn)}(function i(){requestAnimationFrame(i),Ho.update();let t=zn.clientWidth,e=zn.clientHeight;if(wf()){let n=Math.round(t*Xo);_f("o",0,n,t,e),_f("w",n,t-n,t,e),Cn.setScissorTest(!1)}else{Cn.setScissorTest(!1);let n=!Ce.w||j("showorig").checked||Yc;for(let s of["o","w"]){let r=Ce[s];if(!r)continue;let a=s==="o"===n;r.s.visible=a,r.w.visible=a&&j("wire").checked}Cn.render(zr,mn)}})();function Ox(i){let t=new De;return t.setAttribute("position",new jt(i.pos,3)),t.setIndex(new jt(i.idx,1)),i.col&&t.setAttribute("color",new jt(i.col,3,!0)),t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere(),t}function Br(i,t){if(Ce[i]&&(Ce[i].g.dispose(),Wo.remove(Ce[i].s,Ce[i].w),Ce[i]=null),!t)return;let e=Ox(t);Vo.vertexColors=!!t.col,Vo.color.set(t.col?16777215:14315734),Vo.needsUpdate=!0;let n=new we(e,Vo),s=new we(e,Fx);n.position.copy(Fs).negate(),s.position.copy(Fs).negate(),Wo.add(n,s),Ce[i]={g:e,s:n,w:s},Af()}function Bx(i){i.boundingBox.getCenter(Fs);for(let n of["o","w"])Ce[n]&&(Ce[n].s.position.copy(Fs).negate(),Ce[n].w.position.copy(Fs).negate());let e=(i.boundingSphere.radius||1)/Math.tan(Ir.degToRad(mn.fov/2))*1.25;mn.position.set(0,0,e),mn.near=e/500,mn.far=e*50,mn.updateProjectionMatrix(),Ho.target.set(0,0,0),Ho.update()}function Af(){Wo.rotation.x=j("zup").checked?-Math.PI/2:0}j("zup").onchange=Af;function Jo(){let i=wf();j("split").style.display=i?"block":"none",j("lab_o").style.display=j("lab_w").style.display=i?"block":"none",j("split").style.left=Xo*100+"%",i&&(j("showorig").checked=!1),j("showorig").disabled=!Ce.w||i}j("cmp").onchange=Jo;j("split").addEventListener("pointerdown",i=>{i.preventDefault(),j("split").setPointerCapture(i.pointerId);let t=n=>{let s=zn.getBoundingClientRect();Xo=Math.min(.97,Math.max(.03,(n.clientX-s.left)/s.width)),j("split").style.left=Xo*100+"%"},e=()=>{j("split").removeEventListener("pointermove",t),j("split").removeEventListener("pointerup",e)};j("split").addEventListener("pointermove",t),j("split").addEventListener("pointerup",e)});var Ge=0,Ko="",qo=null,Or="",pn=null,Ai=null,Tf=1,Zc=i=>(i/1e6).toFixed(1)+" MB",Ef=(i,t)=>t===0?84+50*i:t===1?i*3*20:t===3?i*.5*27+i*13:i*.5*24+i*12,xf=null,vf=0,Yo="";function Os(i){clearInterval(xf),Yo=i||"";let t=j("busy");if(t.style.display=i?"flex":"none",!i)return;vf=Date.now();let e=()=>{j("busytxt").textContent=kr(Yo)+" "+Math.floor((Date.now()-vf)/1e3)+"s"};e(),xf=setInterval(e,500)}var Cf=()=>new Promise(i=>setTimeout(i,30)),Bs=i=>{j("err").textContent=i||""};function kx(i){let t=Math.log(4),e=Math.log(Math.max(Ge,8));return Math.round(Math.exp(t+(e-t)*i/1e3))}function zx(i){let t=Math.log(4),e=Math.log(Math.max(Ge,8));return Math.round((Math.log(Math.max(4,i))-t)/(e-t)*1e3)}function Ki(i){i=Math.max(4,Math.min(Ge,Math.round(i))),j("target").value=i,j("slider").value=zx(i),j("v_red").textContent=Ge?(100-i/Ge*100).toFixed(1)+" %":"\u2014",j("v_pred").textContent=Zc(Ef(i,+j("fmt").value))}j("slider").oninput=()=>Ki(kx(+j("slider").value));j("target").onchange=()=>Ki(+j("target").value);j("fmt").onchange=()=>{Ge&&Ki(+j("target").value)};j("match").onclick=()=>Ki(Math.min(Ge,yf));j("matchk").onclick=()=>Ki(Math.min(Ge,Dx));function Vx(i){i.updateMatrixWorld(!0);let t=[],e=0,n=0,s=!1;if(i.traverse(u=>{if(!u.isMesh||!u.geometry)return;let c=u.geometry,f=c.getAttribute("position");if(!f)return;let d=f.count,m=new Float32Array(d*3),_=new L;for(let M=0;M<d;M++)_.fromBufferAttribute(f,M).applyMatrix4(u.matrixWorld),m[M*3]=_.x,m[M*3+1]=_.y,m[M*3+2]=_.z;let p;if(c.index)p=Uint32Array.from(c.index.array);else{p=new Uint32Array(d-d%3);for(let M=0;M<p.length;M++)p[M]=M}let g=null,b=c.getAttribute("color");if(b){g=new Uint8Array(d*3);for(let M=0;M<d;M++)g[M*3]=Math.round(b.getX(M)*255),g[M*3+1]=Math.round(b.getY(M)*255),g[M*3+2]=Math.round(b.getZ(M)*255);s=!0}t.push({pos:m,idx:p,col:g,n:d}),e+=d,n+=p.length}),!n)throw new Error("no mesh found in USD");let r=new Float32Array(e*3),a=new Uint32Array(n),o=s?new Uint8Array(e*3).fill(255):null,l=0,h=0;for(let u of t){r.set(u.pos,l*3);for(let c=0;c<u.idx.length;c++)a[h+c]=u.idx[c]+l;o&&u.col&&o.set(u.col,l*3),l+=u.n,h+=u.idx.length}return{pos:r,idx:a,col:o}}var Rf=()=>{pn=null,qo=null,j("v_res").textContent="\u2014",j("v_err").textContent="\u2014",j("save").disabled=!0,j("cmp").checked=!1,j("cmp").disabled=!0,j("showorig").checked=!1};async function Pf(i){Bs(""),Os("busyLoad"),await Cf();try{let t=(i.name.match(/\.[^.]+$/)||[""])[0].toLowerCase(),e=await i.arrayBuffer(),n;if([".usd",".usda",".usdc",".usdz"].includes(t)){let a=Vx(new zo().parse(e));n=await Go({t:"create",pos:a.pos,idx:a.idx,col:a.col},[a.pos.buffer,a.idx.buffer].concat(a.col?[a.col.buffer]:[]))}else n=await Go({t:"load",buf:e,ext:t},[e]);Ce.w&&Br("w",null),Rf(),Ge=n.tri,Ko=i.name,Ai={pos:n.geo.pos.slice(),idx:n.geo.idx.slice(),col:n.geo.col?n.geo.col.slice():null},Br("o",n.geo),Ce.o.g.boundingBox.getCenter(Fs);let s=Ce.o.g.boundingBox,r=new L;s.getSize(r),Tf=Math.max(r.x,r.y,r.z)||1,Bx(Ce.o.g),j("t_name").textContent=i.name,j("v_tri").textContent=Zo(Ge),j("v_size").textContent=Zc(i.size),["slider","target","match","matchk","run"].forEach(a=>j(a).disabled=!1),j("clear").disabled=!1,j("drop").classList.add("hide"),Ki(Math.min(Ge,yf)),Jo(),t.startsWith(".usd")&&Bs(kr("usdnote"))}catch(t){if(t&&t.cancelled)return;Bs(Xc.fail[Xe]+(t&&t.message||t)+" "+Xc.big[Xe])}Os("")}j("drop").onclick=()=>j("file").click();j("file").onchange=i=>{i.target.files[0]&&Pf(i.target.files[0])};["dragover","dragenter"].forEach(i=>zn.addEventListener(i,t=>{t.preventDefault(),j("drop").classList.add("over")}));["dragleave","drop"].forEach(i=>zn.addEventListener(i,t=>{t.preventDefault(),j("drop").classList.remove("over")}));zn.addEventListener("drop",i=>{let t=i.dataTransfer.files[0];t&&Pf(t)});j("showorig").onchange=()=>{};j("cancel").onclick=async()=>{let i=Yo!=="busyLoad";if(dn){let t=dn;dn=null,t.reject(Object.assign(new Error("cancelled"),{cancelled:!0}))}if(Ns.terminate(),qc(),Os(""),i&&Ai){let t={pos:Ai.pos.slice(),idx:Ai.idx.slice(),col:Ai.col?Ai.col.slice():null};try{await Go({t:"create",pos:t.pos,idx:t.idx,col:t.col,quiet:!0},[t.pos.buffer,t.idx.buffer].concat(t.col?[t.col.buffer]:[]))}catch{}j("run").disabled=!1}else Ai||Lf()};function If(i){let t=+j("suf").value;return t===0?"_"+(i>=1e3?Math.round(i/1e3)+"k":i):t===1?"_decimated":t===2?j("sufc").value.replace(/[\\/:*?"<>|]/g,"_"):""}function Df(){if(!pn)return;j("v_res").textContent=Zo(pn.n)+" / "+pn.dt.toFixed(1)+"s";let i=pn.err*100,t=pn.err*Tf*+j("unit").value;j("v_err").textContent=pn.err<1e-9?"0":kr("errv").replace("%p",i<.01?"<0.01":i.toFixed(2)).replace("%m",t<.01?"<0.01":t.toFixed(2))}j("run").onclick=async()=>{if(Ge){Bs(""),Os("busyRun"),j("run").disabled=!0,j("save").disabled=!0,await Cf();try{let i=Math.max(4,Math.min(Ge,+j("target").value)),t=+j("fmt").value,e=await Go({t:"run",target:i,lock:j("lock").checked?1:0,errLimit:Lx[+j("prot").value],fast:j("fast").checked?1:0,fmt:t,scale:+j("unit").value},[],n=>{n.t==="result"?(Br("w",n.geo),pn={n:n.n,err:n.err,dt:n.dt},Df(),j("v_pred").textContent=Zc(Ef(n.n,t))+` (${Zo(n.n)})`,j("cmp").disabled=!1,Jo()):n.t==="stage"&&n.s==="write"&&Os("busyWrite")});qo=new Blob([e.data],{type:"application/octet-stream"}),Or=Ko.replace(/\.[^.]+$/,"")+If(pn.n)+"."+e.ext,j("save").disabled=!1}catch(i){i&&i.cancelled||Bs(i&&i.message||String(i))}Yo&&Os(""),j("run").disabled=!1}};j("save").onclick=()=>{if(!qo)return;pn&&(Or=Ko.replace(/\.[^.]+$/,"")+If(pn.n)+Or.slice(Or.lastIndexOf(".")));let i=document.createElement("a");i.href=URL.createObjectURL(qo),i.download=Or,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(i.href),4e3)};addEventListener("keydown",i=>{i.code==="Space"&&Ce.w&&i.target===document.body&&(i.preventDefault(),Yc=!0)});addEventListener("keyup",i=>{i.code==="Space"&&(Yc=!1)});function Lf(){Ns.terminate(),qc(),dn=null,Br("o",null),Br("w",null),Ai=null,Ge=0,Ko="",Bs(""),Rf(),j("t_name").textContent="\u2014",j("v_tri").textContent="\u2014",j("v_size").textContent="\u2014",j("v_red").textContent="\u2014",j("v_pred").textContent="\u2014",j("target").value="",j("slider").value=1e3,j("file").value="",["slider","target","match","matchk","run","save","clear","showorig","cmp"].forEach(i=>j(i).disabled=!0),j("drop").classList.remove("hide"),Jo()}j("clear").onclick=Lf;Mf();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/
