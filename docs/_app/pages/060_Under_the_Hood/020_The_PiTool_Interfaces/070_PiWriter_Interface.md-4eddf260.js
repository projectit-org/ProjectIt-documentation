import{S as R,i as H,s as j,e as c,t as u,k as E,c as m,a as k,h as d,d as s,m as I,b as C,g as p,H as r,J as W}from"../../../chunks/vendor-492729b6.js";function L(T){let a,_,f,t,y,i,g,P,h,l,v,w,o,A=`<code class="language-ts"><span class="token comment">/* File: core/src/writer/PiWriter.ts */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PiWriter</span> <span class="token punctuation">&#123;</span>

	<span class="token comment">/**
	 * Returns a string representation of 'modelelement'.
	 * If 'short' is present and true, then a single-line result will be given.
	 * Otherwise, the result is always a multi-line string.
	 * Note that the single-line-string cannot be parsed into a correct model.
	 *
	 * @param modelelement
	 * @param startIndent
	 * @param short
	 */</span>
	<span class="token function">writeToString</span><span class="token punctuation">(</span>modelelement<span class="token operator">:</span> PiElement<span class="token punctuation">,</span> startIndent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> short<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Returns a string representation of 'modelelement', divided into an array of strings,
	 * each of which contain a single line (without newline).
	 * If 'short' is present and true, then a single-line result will be given.
	 * Otherwise, the result is always a multi-line string.
	 *
	 * @param modelelement
	 * @param startIndent
	 * @param short
	 */</span>
	<span class="token function">writeToLines</span><span class="token punctuation">(</span>modelelement<span class="token operator">:</span> PiElement<span class="token punctuation">,</span> startIndent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> short<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Returns the name of 'modelelement' if it has one, else returns
	 * a short unparsing of 'modelelement'.
	 * Used by the validator to produce readable error messages.
	 *
	 * @param modelelement
	 */</span>
	<span class="token function">writeNameOnly</span><span class="token punctuation">(</span>modelelement<span class="token operator">:</span> PiElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`;return{c(){a=c("h1"),_=u("PiWriter"),f=E(),t=c("p"),y=u("An object that implements "),i=c("code"),g=u("PiWriter"),P=u(" is able to build a string representation of a node in the AST."),h=E(),l=c("p"),v=u("If you want to write your own unparser/writer you will need to implement this interface."),w=E(),o=c("pre"),this.h()},l(n){a=m(n,"H1",{});var e=k(a);_=d(e,"PiWriter"),e.forEach(s),f=I(n),t=m(n,"P",{});var b=k(t);y=d(b,"An object that implements "),i=m(b,"CODE",{});var x=k(i);g=d(x,"PiWriter"),x.forEach(s),P=d(b," is able to build a string representation of a node in the AST."),b.forEach(s),h=I(n),l=m(n,"P",{});var S=k(l);v=d(S,"If you want to write your own unparser/writer you will need to implement this interface."),S.forEach(s),w=I(n),o=m(n,"PRE",{class:!0});var O=k(o);O.forEach(s),this.h()},h(){C(o,"class","language-ts")},m(n,e){p(n,a,e),r(a,_),p(n,f,e),p(n,t,e),r(t,y),r(t,i),r(i,g),r(t,P),p(n,h,e),p(n,l,e),r(l,v),p(n,w,e),p(n,o,e),o.innerHTML=A},p:W,i:W,o:W,d(n){n&&s(a),n&&s(f),n&&s(t),n&&s(h),n&&s(l),n&&s(w),n&&s(o)}}}class q extends R{constructor(a){super();H(this,a,null,L,j,{})}}export{q as default};
