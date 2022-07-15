import{S as de,i as ke,s as me,e as p,t as s,k as m,c as l,a as i,h as a,d as n,m as b,b as be,g as c,H as t,J as te}from"../../../../chunks/vendor-492729b6.js";function Ee(ue){let u,q,A,h,B,I,H,M,S,k,he=`<code class="language-ts"><span class="token comment">/* File: core/src/language/PiElement.ts */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PiElement</span> <span class="token punctuation">&#123;</span>
	<span class="token function">piId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

	<span class="token function">piLanguageConcept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

	<span class="token function">piContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> PiContainerDescriptor<span class="token punctuation">;</span>

	<span class="token function">piIsModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

	<span class="token function">piIsUnit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

	<span class="token function">piIsExpression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

	<span class="token function">piIsBinaryExpression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,g,E,U,C,f,w,P,W,F,J,y,T,R,z,D,r,G,v,K,Q,x,V,X,j,Y,Z,L,_,$;return{c(){u=p("h1"),q=s("PiElement"),A=m(),h=p("p"),B=s(`As ProjectIt uses the AST for projections and behavior, it needs to know about the type of elements in the AST.
To allow ProjectIt to work, each element type that occurrs in the AST needs to implement the `),I=p("code"),H=s("PiElement"),M=s(` interface.
This interface is kept as small as possible, to allow ProjectIt to be used for any AST.`),S=m(),k=p("pre"),g=m(),E=p("p"),U=s("The main two elements in this interface are:"),C=m(),f=p("ul"),w=p("li"),P=p("code"),W=s("piId()"),F=s(", which should return en unique id for each element in the AST."),J=m(),y=p("li"),T=p("code"),R=s("piContainer()"),z=s(" which should return a descriptor for the container (parent) of an element in the AST."),D=m(),r=p("p"),G=s("The two functions "),v=p("code"),K=s("piIsExpression()"),Q=s(" and "),x=p("code"),V=s("piIsBinaryExpression()"),X=s(` are only needed when your language
contains expressions, as ProjectIt includes special handling of expressions.
To start with, these functions can be defined to simply return `),j=p("code"),Y=s("false"),Z=s("."),L=m(),_=p("p"),$=s(`Note that ProjectIt does not need to know anything about the structure of your language.
No need to know the availale element type, nor the properties of en element type, nor anything else.
This is by design, as ProjectIt is not meant to be a full Language Workbench,
but instead meant to be used with multiple language workbenches , or none.`),this.h()},l(e){u=l(e,"H1",{});var o=i(u);q=a(o,"PiElement"),o.forEach(n),A=b(e),h=l(e,"P",{});var O=i(h);B=a(O,`As ProjectIt uses the AST for projections and behavior, it needs to know about the type of elements in the AST.
To allow ProjectIt to work, each element type that occurrs in the AST needs to implement the `),I=l(O,"CODE",{});var se=i(I);H=a(se,"PiElement"),se.forEach(n),M=a(O,` interface.
This interface is kept as small as possible, to allow ProjectIt to be used for any AST.`),O.forEach(n),S=b(e),k=l(e,"PRE",{class:!0});var fe=i(k);fe.forEach(n),g=b(e),E=l(e,"P",{});var ae=i(E);U=a(ae,"The main two elements in this interface are:"),ae.forEach(n),C=b(e),f=l(e,"UL",{});var N=i(f);w=l(N,"LI",{});var ee=i(w);P=l(ee,"CODE",{});var oe=i(P);W=a(oe,"piId()"),oe.forEach(n),F=a(ee,", which should return en unique id for each element in the AST."),ee.forEach(n),J=b(N),y=l(N,"LI",{});var ne=i(y);T=l(ne,"CODE",{});var pe=i(T);R=a(pe,"piContainer()"),pe.forEach(n),z=a(ne," which should return a descriptor for the container (parent) of an element in the AST."),ne.forEach(n),N.forEach(n),D=b(e),r=l(e,"P",{});var d=i(r);G=a(d,"The two functions "),v=l(d,"CODE",{});var le=i(v);K=a(le,"piIsExpression()"),le.forEach(n),Q=a(d," and "),x=l(d,"CODE",{});var ie=i(x);V=a(ie,"piIsBinaryExpression()"),ie.forEach(n),X=a(d,` are only needed when your language
contains expressions, as ProjectIt includes special handling of expressions.
To start with, these functions can be defined to simply return `),j=l(d,"CODE",{});var ce=i(j);Y=a(ce,"false"),ce.forEach(n),Z=a(d,"."),d.forEach(n),L=b(e),_=l(e,"P",{});var re=i(_);$=a(re,`Note that ProjectIt does not need to know anything about the structure of your language.
No need to know the availale element type, nor the properties of en element type, nor anything else.
This is by design, as ProjectIt is not meant to be a full Language Workbench,
but instead meant to be used with multiple language workbenches , or none.`),re.forEach(n),this.h()},h(){be(k,"class","language-ts")},m(e,o){c(e,u,o),t(u,q),c(e,A,o),c(e,h,o),t(h,B),t(h,I),t(I,H),t(h,M),c(e,S,o),c(e,k,o),k.innerHTML=he,c(e,g,o),c(e,E,o),t(E,U),c(e,C,o),c(e,f,o),t(f,w),t(w,P),t(P,W),t(w,F),t(f,J),t(f,y),t(y,T),t(T,R),t(y,z),c(e,D,o),c(e,r,o),t(r,G),t(r,v),t(v,K),t(r,Q),t(r,x),t(x,V),t(r,X),t(r,j),t(j,Y),t(r,Z),c(e,L,o),c(e,_,o),t(_,$)},p:te,i:te,o:te,d(e){e&&n(u),e&&n(A),e&&n(h),e&&n(S),e&&n(k),e&&n(g),e&&n(E),e&&n(C),e&&n(f),e&&n(D),e&&n(r),e&&n(L),e&&n(_)}}}class ye extends de{constructor(u){super();ke(this,u,null,Ee,me,{})}}export{ye as default};