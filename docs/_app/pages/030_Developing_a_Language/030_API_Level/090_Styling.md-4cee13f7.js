import{S as K,i as F,s as W,e as c,t as r,k as _,c as i,a as k,g as u,d as n,n as b,b as q,f as e,F as p,H as D}from"../../../chunks/vendor-0216fdcb.js";function M(C){let t,P,w,h,x,y,o,H,f,L,I,T,l,R=`<code class="language-ts"><span class="token comment">/* File: webapp/Theme-presets.ts */</span>

<span class="token keyword">const</span> <span class="token constant">PI_DARKBLUE</span> <span class="token operator">=</span> <span class="token string">"#00008b"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">PI_LIGHTBLUE</span> <span class="token operator">=</span> <span class="token string">"#d3e3fd"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> themePresets <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
        name<span class="token operator">:</span> <span class="token string">"light"</span><span class="token punctuation">,</span>
        colors<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		  color<span class="token operator">:</span> <span class="token constant">PI_DARKBLUE</span><span class="token punctuation">,</span>                    <span class="token comment">/* Primary text color */</span>
		  inverse_color<span class="token operator">:</span> <span class="token constant">PI_LIGHTBLUE</span><span class="token punctuation">,</span>           <span class="token comment">/* Text color on non_normal background */</span>
          <span class="token operator">...</span> 
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#123;</span>
		name<span class="token operator">:</span> <span class="token string">"dark"</span><span class="token punctuation">,</span>
    	colors<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
	      color<span class="token operator">:</span> <span class="token constant">PI_LIGHTBLUE</span><span class="token punctuation">,</span>                    <span class="token comment">/* Primary text color */</span>
		  inverse_color<span class="token operator">:</span> <span class="token constant">PI_DARKBLUE</span><span class="token punctuation">,</span>             <span class="token comment">/* Text color on non_normal background */</span>
          <span class="token operator">...</span>
        <span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span></code>`,v,m,g,E,d,B;return{c(){t=c("h1"),P=r("How to Style the Generated Work Environment"),w=_(),h=c("h2"),x=r("Styling the web application"),y=_(),o=c("p"),H=r("The web application can be styled using the theme presets in the file "),f=c("code"),L=r("~webapp/Theme-presets.ts"),I=r(`. There are two sets of
CSS variables that determine the look of the web application, one for the light theme, and one for the dark theme.
The comments should indicate where the variable is being used.`),T=_(),l=c("pre"),v=_(),m=c("h2"),g=r("Styling the editor projections"),E=_(),d=c("p"),B=r("The projections in the editor can be styled using the theme presets and TODO\u2026"),this.h()},l(s){t=i(s,"H1",{});var a=k(t);P=u(a,"How to Style the Generated Work Environment"),a.forEach(n),w=b(s),h=i(s,"H2",{});var U=k(h);x=u(U,"Styling the web application"),U.forEach(n),y=b(s),o=i(s,"P",{});var S=k(o);H=u(S,"The web application can be styled using the theme presets in the file "),f=i(S,"CODE",{});var j=k(f);L=u(j,"~webapp/Theme-presets.ts"),j.forEach(n),I=u(S,`. There are two sets of
CSS variables that determine the look of the web application, one for the light theme, and one for the dark theme.
The comments should indicate where the variable is being used.`),S.forEach(n),T=b(s),l=i(s,"PRE",{class:!0});var A=k(l);A.forEach(n),v=b(s),m=i(s,"H2",{});var G=k(m);g=u(G,"Styling the editor projections"),G.forEach(n),E=b(s),d=i(s,"P",{});var O=k(d);B=u(O,"The projections in the editor can be styled using the theme presets and TODO\u2026"),O.forEach(n),this.h()},h(){q(l,"class","language-ts")},m(s,a){e(s,t,a),p(t,P),e(s,w,a),e(s,h,a),p(h,x),e(s,y,a),e(s,o,a),p(o,H),p(o,f),p(f,L),p(o,I),e(s,T,a),e(s,l,a),l.innerHTML=R,e(s,v,a),e(s,m,a),p(m,g),e(s,E,a),e(s,d,a),p(d,B)},p:D,i:D,o:D,d(s){s&&n(t),s&&n(w),s&&n(h),s&&n(y),s&&n(o),s&&n(T),s&&n(l),s&&n(v),s&&n(m),s&&n(E),s&&n(d)}}}class J extends K{constructor(t){super();F(this,t,null,M,W,{})}}export{J as default};
