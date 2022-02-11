import{S as U,i as G,s as C,e as i,t as k,k as P,c as u,a as h,h as m,d as n,m as S,b as D,g as p,H as l,J as g}from"../../../chunks/vendor-492729b6.js";function R(H){let e,w,d,c,v,f,t,y,r,E,T,_,o,I=`<code class="language-ts"><span class="token comment">/* File: webapp/Theme-presets.ts */</span>

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
<span class="token punctuation">]</span><span class="token punctuation">;</span></code>`;return{c(){e=i("h1"),w=k("How to Style the Generated Work Environment"),d=P(),c=i("h2"),v=k("Styling the web application"),f=P(),t=i("p"),y=k("The web application can be styled using the theme presets in the file "),r=i("code"),E=k("~webapp/Theme-presets.ts"),T=k(`. There are two sets of
CSS variables that determine the look of the web application, one for the light theme, and one for the dark theme.
The comments should indicate where the variable is being used.`),_=P(),o=i("pre"),this.h()},l(s){e=u(s,"H1",{});var a=h(e);w=m(a,"How to Style the Generated Work Environment"),a.forEach(n),d=S(s),c=u(s,"H2",{});var x=h(c);v=m(x,"Styling the web application"),x.forEach(n),f=S(s),t=u(s,"P",{});var b=h(t);y=m(b,"The web application can be styled using the theme presets in the file "),r=u(b,"CODE",{});var L=h(r);E=m(L,"~webapp/Theme-presets.ts"),L.forEach(n),T=m(b,`. There are two sets of
CSS variables that determine the look of the web application, one for the light theme, and one for the dark theme.
The comments should indicate where the variable is being used.`),b.forEach(n),_=S(s),o=u(s,"PRE",{class:!0});var B=h(o);B.forEach(n),this.h()},h(){D(o,"class","language-ts")},m(s,a){p(s,e,a),l(e,w),p(s,d,a),p(s,c,a),l(c,v),p(s,f,a),p(s,t,a),l(t,y),l(t,r),l(r,E),l(t,T),p(s,_,a),p(s,o,a),o.innerHTML=I},p:g,i:g,o:g,d(s){s&&n(e),s&&n(d),s&&n(c),s&&n(f),s&&n(t),s&&n(_),s&&n(o)}}}class K extends U{constructor(e){super();G(this,e,null,R,C,{})}}export{K as default};
