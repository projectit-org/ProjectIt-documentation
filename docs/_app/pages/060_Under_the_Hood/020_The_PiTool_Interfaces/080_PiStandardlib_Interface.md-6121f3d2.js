import{S as N,i as R,s as q,e as c,t as m,k as v,c as d,a as u,h as f,d as n,m as x,b as D,g as p,H as i,J as A}from"../../../chunks/vendor-492729b6.js";function F(I){let t,_,h,s,w,r,S,P,k,l,E,b,o,j=`<code class="language-ts"><span class="token comment">/* File: core/src/stdlib/PiStdlib.ts  */</span>

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
<span class="token punctuation">&#125;</span></code>`;return{c(){t=c("h1"),_=m("PiStdlib"),h=v(),s=c("p"),w=m("An object that implements "),r=c("code"),S=m("PiStdlib"),P=m(` holds a number of predefined AST nodes, which
can be referred to in the model AST.`),k=v(),l=c("p"),E=m("If you want to write your own standard library you will need to implement this interface."),b=v(),o=c("pre"),this.h()},l(e){t=d(e,"H1",{});var a=u(t);_=f(a,"PiStdlib"),a.forEach(n),h=x(e),s=d(e,"P",{});var y=u(s);w=f(y,"An object that implements "),r=d(y,"CODE",{});var T=u(r);S=f(T,"PiStdlib"),T.forEach(n),P=f(y,` holds a number of predefined AST nodes, which
can be referred to in the model AST.`),y.forEach(n),k=x(e),l=d(e,"P",{});var H=u(l);E=f(H,"If you want to write your own standard library you will need to implement this interface."),H.forEach(n),b=x(e),o=d(e,"PRE",{class:!0});var C=u(o);C.forEach(n),this.h()},h(){D(o,"class","language-ts")},m(e,a){p(e,t,a),i(t,_),p(e,h,a),p(e,s,a),i(s,w),i(s,r),i(r,S),i(s,P),p(e,k,a),p(e,l,a),i(l,E),p(e,b,a),p(e,o,a),o.innerHTML=j},p:A,i:A,o:A,d(e){e&&n(t),e&&n(h),e&&n(s),e&&n(k),e&&n(l),e&&n(b),e&&n(o)}}}class L extends N{constructor(t){super();R(this,t,null,F,q,{})}}export{L as default};
