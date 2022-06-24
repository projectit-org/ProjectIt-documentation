import{S as O,i as R,s as g,e as p,t as a,k as H,c as m,a as f,h as r,d as t,m as M,b as G,g as u,H as n,J as z}from"../../../../chunks/vendor-492729b6.js";function K(F){let i,v,x,l,E,h,y,w,_,c,J=`<code class="language-ts"><span class="token comment">/* File: core/src/editor/PiProjection.ts  */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PiProjection</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">/**
	 * returns the box for &#96;element&#96;.
	 */</span>
	<span class="token function">getBox</span><span class="token punctuation">(</span>element<span class="token operator">:</span> PiElement<span class="token punctuation">)</span><span class="token operator">:</span> Box<span class="token punctuation">;</span>

	rootProjection<span class="token operator">:</span> PiProjection<span class="token punctuation">;</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,j,o,T,k,S,I,P,A,B;return{c(){i=p("h1"),v=a("PiProjection"),x=H(),l=p("p"),E=a("The projection from your model/AST is defined by implementing the "),h=p("em"),y=a("PiProjection"),w=a(" interface:"),_=H(),c=p("pre"),j=H(),o=p("p"),T=a("Implementing this interface should return a "),k=p("em"),S=a("Box"),I=a(" for each "),P=p("code"),A=a("element"),B=a(` in the AST.
ProjectIt includes boxes of various types (textual, tabular, horizontal or vertical collections, etc.)
to define this projection.
The box model is further described in the xref:../framework/editor-framework[editor framework].`),this.h()},l(e){i=m(e,"H1",{});var s=f(i);v=r(s,"PiProjection"),s.forEach(t),x=M(e),l=m(e,"P",{});var b=f(l);E=r(b,"The projection from your model/AST is defined by implementing the "),h=m(b,"EM",{});var C=f(h);y=r(C,"PiProjection"),C.forEach(t),w=r(b," interface:"),b.forEach(t),_=M(e),c=m(e,"PRE",{class:!0});var L=f(c);L.forEach(t),j=M(e),o=m(e,"P",{});var d=f(o);T=r(d,"Implementing this interface should return a "),k=m(d,"EM",{});var q=f(k);S=r(q,"Box"),q.forEach(t),I=r(d," for each "),P=m(d,"CODE",{});var D=f(P);A=r(D,"element"),D.forEach(t),B=r(d,` in the AST.
ProjectIt includes boxes of various types (textual, tabular, horizontal or vertical collections, etc.)
to define this projection.
The box model is further described in the xref:../framework/editor-framework[editor framework].`),d.forEach(t),this.h()},h(){G(c,"class","language-ts")},m(e,s){u(e,i,s),n(i,v),u(e,x,s),u(e,l,s),n(l,E),n(l,h),n(h,y),n(l,w),u(e,_,s),u(e,c,s),c.innerHTML=J,u(e,j,s),u(e,o,s),n(o,T),n(o,k),n(k,S),n(o,I),n(o,P),n(P,A),n(o,B)},p:z,i:z,o:z,d(e){e&&t(i),e&&t(x),e&&t(l),e&&t(_),e&&t(c),e&&t(j),e&&t(o)}}}class Q extends O{constructor(i){super();R(this,i,null,K,g,{})}}export{Q as default};
