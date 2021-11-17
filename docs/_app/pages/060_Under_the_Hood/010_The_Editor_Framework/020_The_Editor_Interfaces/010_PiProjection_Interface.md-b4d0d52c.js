import{S as R,i as g,s as G,e as p,t as a,k as H,c as f,a as m,g as r,d as t,n as M,b as J,f as u,F as n,H as z}from"../../../../chunks/vendor-0216fdcb.js";function K(D){let i,v,x,l,E,h,y,w,_,c,L=`<code class="language-ts"><span class="token comment">/* File: core/src/editor/PiProjection.ts  */</span>

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
The box model is further described in the xref:../framework/editor-framework[editor framework].`),this.h()},l(e){i=f(e,"H1",{});var s=m(i);v=r(s,"PiProjection"),s.forEach(t),x=M(e),l=f(e,"P",{});var b=m(l);E=r(b,"The projection from your model/AST is defined by implementing the "),h=f(b,"EM",{});var C=m(h);y=r(C,"PiProjection"),C.forEach(t),w=r(b," interface:"),b.forEach(t),_=M(e),c=f(e,"PRE",{class:!0});var O=m(c);O.forEach(t),j=M(e),o=f(e,"P",{});var d=m(o);T=r(d,"Implementing this interface should return a "),k=f(d,"EM",{});var F=m(k);S=r(F,"Box"),F.forEach(t),I=r(d," for each "),P=f(d,"CODE",{});var q=m(P);A=r(q,"element"),q.forEach(t),B=r(d,` in the AST.
ProjectIt includes boxes of various types (textual, tabular, horizontal or vertical collections, etc.)
to define this projection.
The box model is further described in the xref:../framework/editor-framework[editor framework].`),d.forEach(t),this.h()},h(){J(c,"class","language-ts")},m(e,s){u(e,i,s),n(i,v),u(e,x,s),u(e,l,s),n(l,E),n(l,h),n(h,y),n(l,w),u(e,_,s),u(e,c,s),c.innerHTML=L,u(e,j,s),u(e,o,s),n(o,T),n(o,k),n(k,S),n(o,I),n(o,P),n(P,A),n(o,B)},p:z,i:z,o:z,d(e){e&&t(i),e&&t(x),e&&t(l),e&&t(_),e&&t(c),e&&t(j),e&&t(o)}}}class Q extends R{constructor(i){super();g(this,i,null,K,G,{})}}export{Q as default};
