import{S as F,i as N,s as R,e as c,t as d,k as E,c as m,a as u,g as f,d as n,n as x,b as q,f as p,F as i,H as A}from"../../../chunks/vendor-0216fdcb.js";function D(H){let t,_,k,s,w,r,S,P,h,l,v,b,o,I=`<code class="language-ts"><span class="token comment">/* File: core/src/stdlib/PiStdlib.ts  */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PiStdlib</span> <span class="token punctuation">&#123;</span>
	elements<span class="token operator">:</span> PiNamedElement<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Returns the element named 'name', if it can be found in this library.
	 * When 'metatype' is provided, the element is only returned when it is
	 * an instance of this metatype.
	 * @param name
	 * @param metatype
	 */</span>
	<span class="token function">find</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> metatype<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> PiNamedElement<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){t=c("h1"),_=d("PiStdlib"),k=E(),s=c("p"),w=d("An object that implements "),r=c("code"),S=d("PiStdlib"),P=d(` holds a number of predefined AST nodes, which
can be referred to in the model AST.`),h=E(),l=c("p"),v=d("If you want to write your own standard library you will need to implement this interface."),b=E(),o=c("pre"),this.h()},l(e){t=m(e,"H1",{});var a=u(t);_=f(a,"PiStdlib"),a.forEach(n),k=x(e),s=m(e,"P",{});var y=u(s);w=f(y,"An object that implements "),r=m(y,"CODE",{});var T=u(r);S=f(T,"PiStdlib"),T.forEach(n),P=f(y,` holds a number of predefined AST nodes, which
can be referred to in the model AST.`),y.forEach(n),h=x(e),l=m(e,"P",{});var j=u(l);v=f(j,"If you want to write your own standard library you will need to implement this interface."),j.forEach(n),b=x(e),o=m(e,"PRE",{class:!0});var C=u(o);C.forEach(n),this.h()},h(){q(o,"class","language-ts")},m(e,a){p(e,t,a),i(t,_),p(e,k,a),p(e,s,a),i(s,w),i(s,r),i(r,S),i(s,P),p(e,h,a),p(e,l,a),i(l,v),p(e,b,a),p(e,o,a),o.innerHTML=I},p:A,i:A,o:A,d(e){e&&n(t),e&&n(k),e&&n(s),e&&n(h),e&&n(l),e&&n(b),e&&n(o)}}}class M extends F{constructor(t){super();N(this,t,null,D,R,{})}}export{M as default};
