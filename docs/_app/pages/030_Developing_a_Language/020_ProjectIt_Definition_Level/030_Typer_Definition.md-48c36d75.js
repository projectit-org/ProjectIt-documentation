import{S as Pn,i as In,s as Dn,e as i,t as o,k as c,w as pn,c as p,a as r,h as l,d as t,m as u,x as rn,b as C,g as a,H as n,y as cn,q as un,o as fn,B as yn}from"../../../chunks/vendor-492729b6.js";import{N as hn}from"../../../chunks/Note-1bdf01a3.js";/* empty css                                                         */function An(Y){let f;return{c(){f=o("There must be a type hierarchy")},l(y){f=l(y,"There must be a type hierarchy")},m(y,d){a(y,f,d)},d(y){y&&t(f)}}}function Cn(Y){let f;return{c(){f=o(`We assume that either
there is a concept which is the common super type of all types in your language, or all types in your
language implement the same interface. The **first** concept or interface in
the types list is considered to be this **root** of your type hierarchy.`)},l(y){f=l(y,`We assume that either
there is a concept which is the common super type of all types in your language, or all types in your
language implement the same interface. The **first** concept or interface in
the types list is considered to be this **root** of your type hierarchy.`)},m(y,d){a(y,f,d)},d(y){y&&t(f)}}}function Hn(Y){let f,y,d,E,k,w,T;return{c(){f=o("In the AST "),y=i("code"),d=o("declaredType"),E=o(" has type "),k=i("code"),w=o("Type"),T=o(`, which 
has in the above example
been stated to be a type in your user's language.`)},l(h){f=l(h,"In the AST "),y=p(h,"CODE",{});var m=r(y);d=l(m,"declaredType"),m.forEach(t),E=l(h," has type "),k=p(h,"CODE",{});var v=r(k);w=l(v,"Type"),v.forEach(t),T=l(h,`, which 
has in the above example
been stated to be a type in your user's language.`)},m(h,m){a(h,f,m),a(h,y,m),n(y,d),a(h,E,m),a(h,k,m),n(k,w),a(h,T,m)},d(h){h&&t(f),h&&t(y),h&&t(E),h&&t(k),h&&t(T)}}}function On(Y){let f,y,d,E,k,w,T,h,m,v,je,z,Je,Ke,ee,Qe,Xe,me,L,H,Ze,te,et,tt,nt,O,st,ne,at,ot,ve,U,lt,de,W,it,_e,b,pt,se,rt,ct,ae,ut,ft,Ee,V,yt,Te,g,ht,oe,mt,vt,ke,M,mn=`<code class="language-ts"><span class="token comment">// tutorial-language/defs/LanguageDefinition.type#L3-L4</span>

<span class="token comment">// 'BaseType' is the root of the type hierarchy</span>
istype <span class="token punctuation">&#123;</span> BaseType<span class="token punctuation">,</span> Type<span class="token punctuation">,</span> Entity<span class="token punctuation">,</span> AttributeType <span class="token punctuation">&#125;</span></code>`,be,$,we,j,dt,Le,R,_t,le,Et,Tt,ge,S,vn=`<code class="language-ts"><span class="token comment">// tutorial-language/defs/LanguageDefinition.ast#L63-L69</span>

concept EntityFunction <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> identifier<span class="token punctuation">;</span>
    aliases<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    expression<span class="token operator">:</span> EntityExpression<span class="token punctuation">;</span>
    parameters<span class="token operator">:</span> Variable<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    reference declaredType <span class="token operator">:</span> Type<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,$e,F,dn=`<code class="language-ts"><span class="token comment">// tutorial-language/defs/LanguageDefinition.type#L20-L22</span>

EntityFunction <span class="token punctuation">&#123;</span>
    infertype self<span class="token punctuation">.</span>declaredType<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Re,x,xe,P,kt,ie,bt,wt,Pe,N,_n=`<code class="language-ts"><span class="token comment">// tutorial-language/defs/LanguageDefinition.type#L23-L25</span>

EntityExpression <span class="token punctuation">&#123;</span>
    <span class="token keyword">abstract</span> infertype <span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Ie,I,Lt,pe,gt,$t,De,B,En=`<code class="language-ts"><span class="token comment">// tutorial-language/defs/LanguageDefinition.type#L44-L46</span>

ComparisonExpression <span class="token punctuation">&#123;</span>
    infertype AttributeType<span class="token operator">:</span>Boolean<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Ae,J,Rt,Ce,_,xt,re,Pt,It,ce,Dt,At,ue,Ct,Ht,He,K,Ot,Oe,G,Tn=`<code class="language-ts"><span class="token comment">// tutorial-language/defs/LanguageDefinition.type#L11-L13</span>

Entity <span class="token punctuation">&#123;</span>
    conformsto self<span class="token punctuation">.</span>baseEntity<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Me,Q,Mt,Se,D,St,fe,Ft,Nt,Fe,q,kn=`<code class="language-ts"><span class="token comment">// tutorial-language/defs/LanguageDefinition.type#L6-L9</span>

anytype <span class="token punctuation">&#123;</span>
    conformsto AttributeType<span class="token operator">:</span><span class="token constant">ANY</span><span class="token punctuation">;</span>
    equalsto AttributeType<span class="token operator">:</span><span class="token constant">ANY</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Ne;return $=new hn({props:{$$slots:{content:[Cn],header:[An]},$$scope:{ctx:Y}}}),x=new hn({props:{$$slots:{content:[Hn]},$$scope:{ctx:Y}}}),{c(){f=i("h1"),y=o("The Typer Definition"),d=c(),E=i("p"),k=o(`This tutorial describes the possibilities of defining a type provider (or typer, for short).
In the typer definition you provide
the information necessary to do type checking.`),w=c(),T=i("h3"),h=o("Three-level definition"),m=c(),v=i("p"),je=o("As explained in "),z=i("a"),Je=o("Three Levels of Customization"),Ke=o(`
the generated typer can be defined in three levels.
For each `),ee=i("em"),Qe=o("concept"),Xe=o(" in the AST the typer will"),me=c(),L=i("ol"),H=i("li"),Ze=o("use the "),te=i("em"),et=o("hand-made typing rule(s)"),tt=o(", when present. Otherwise, the validator will"),nt=c(),O=i("li"),st=o("use to the "),ne=i("em"),at=o("typing rule(s) generated from the typer definition"),ot=o(", when this definition is present."),ve=c(),U=i("p"),lt=o("There are no default typing rules, so the typer does not have a fallback to a third level."),de=c(),W=i("h2"),it=o("The Typer Definition File"),_e=c(),b=i("p"),pt=o("In the typer definition file (with extension "),se=i("code"),rt=o(".type"),ct=o(`) you can indicate typing rules for every
`),ae=i("em"),ut=o("concept"),ft=o(" in your language."),Ee=c(),V=i("h3"),yt=o("Types"),Te=c(),g=i("p"),ht=o(`First, you have to indicate which concepts are considered to be types in your language.
You indicate this by the keyword `),oe=i("code"),mt=o("isType"),vt=o(` followed by all types in your language between curly
brackets.`),ke=c(),M=i("pre"),be=c(),pn($.$$.fragment),we=c(),j=i("h3"),dt=o("Inference Rules"),Le=c(),R=i("p"),_t=o("Using "),le=i("strong"),Et=o("inference rules"),Tt=o(`, you can indicate how to determine the type of certain concepts. Every concept
for which an inference rule is defined has a type. That type is determined according to the given
rule. In the following example the type of entity function is the value of its attribute
\u2018declaredType\u2019.`),ge=c(),S=i("pre"),$e=c(),F=i("pre"),Re=c(),pn(x.$$.fragment),xe=c(),P=i("p"),kt=o("By stating that an inference rule is "),ie=i("strong"),bt=o("abstract"),wt=o(`, you define that the concept does have a type, but the
way its type is determined, is given by the inference rules of its subconcepts.`),Pe=c(),N=i("pre"),Ie=c(),I=i("p"),Lt=o("It is possible to use the predefined instances of a "),pe=i("strong"),gt=o("limited concept"),$t=o("."),De=c(),B=i("pre"),Ae=c(),J=i("h3"),Rt=o("Type Conformance Rules"),Ce=c(),_=i("p"),xt=o("Finally, you have to state your "),re=i("strong"),Pt=o("type conformance rules"),It=o(`. There are two flavours of conformance rules:
the `),ce=i("strong"),Dt=o("conformsto"),At=o(" and the "),ue=i("strong"),Ct=o("equalsto"),Ht=o(" rules. To a language engineer the differences between these will be clear."),He=c(),K=i("p"),Ot=o(`In conformance rules
it is also possible to use the predefined instances of a limited concept.`),Oe=c(),G=i("pre"),Me=c(),Q=i("h2"),Mt=o("Rules that Apply to any Concept"),Se=c(),D=i("p"),St=o("Conformance and other rules can also be defined to apply to *"),fe=i("em"),Ft=o("any"),Nt=o(` concept. Obviously, this means that
any instance of any concept conforms to the given value.`),Fe=c(),q=i("pre"),this.h()},l(e){f=p(e,"H1",{});var s=r(f);y=l(s,"The Typer Definition"),s.forEach(t),d=u(e),E=p(e,"P",{});var ye=r(E);k=l(ye,`This tutorial describes the possibilities of defining a type provider (or typer, for short).
In the typer definition you provide
the information necessary to do type checking.`),ye.forEach(t),w=u(e),T=p(e,"H3",{});var he=r(T);h=l(he,"Three-level definition"),he.forEach(t),m=u(e),v=p(e,"P",{});var X=r(v);je=l(X,"As explained in "),z=p(X,"A",{href:!0});var Bt=r(z);Je=l(Bt,"Three Levels of Customization"),Bt.forEach(t),Ke=l(X,`
the generated typer can be defined in three levels.
For each `),ee=p(X,"EM",{});var Gt=r(ee);Qe=l(Gt,"concept"),Gt.forEach(t),Xe=l(X," in the AST the typer will"),X.forEach(t),me=u(e),L=p(e,"OL",{});var Be=r(L);H=p(Be,"LI",{});var Ge=r(H);Ze=l(Ge,"use the "),te=p(Ge,"EM",{});var qt=r(te);et=l(qt,"hand-made typing rule(s)"),qt.forEach(t),tt=l(Ge,", when present. Otherwise, the validator will"),Ge.forEach(t),nt=u(Be),O=p(Be,"LI",{});var qe=r(O);st=l(qe,"use to the "),ne=p(qe,"EM",{});var Yt=r(ne);at=l(Yt,"typing rule(s) generated from the typer definition"),Yt.forEach(t),ot=l(qe,", when this definition is present."),qe.forEach(t),Be.forEach(t),ve=u(e),U=p(e,"P",{});var zt=r(U);lt=l(zt,"There are no default typing rules, so the typer does not have a fallback to a third level."),zt.forEach(t),de=u(e),W=p(e,"H2",{});var Ut=r(W);it=l(Ut,"The Typer Definition File"),Ut.forEach(t),_e=u(e),b=p(e,"P",{});var Z=r(b);pt=l(Z,"In the typer definition file (with extension "),se=p(Z,"CODE",{});var Wt=r(se);rt=l(Wt,".type"),Wt.forEach(t),ct=l(Z,`) you can indicate typing rules for every
`),ae=p(Z,"EM",{});var Vt=r(ae);ut=l(Vt,"concept"),Vt.forEach(t),ft=l(Z," in your language."),Z.forEach(t),Ee=u(e),V=p(e,"H3",{});var jt=r(V);yt=l(jt,"Types"),jt.forEach(t),Te=u(e),g=p(e,"P",{});var Ye=r(g);ht=l(Ye,`First, you have to indicate which concepts are considered to be types in your language.
You indicate this by the keyword `),oe=p(Ye,"CODE",{});var Jt=r(oe);mt=l(Jt,"isType"),Jt.forEach(t),vt=l(Ye,` followed by all types in your language between curly
brackets.`),Ye.forEach(t),ke=u(e),M=p(e,"PRE",{class:!0});var bn=r(M);bn.forEach(t),be=u(e),rn($.$$.fragment,e),we=u(e),j=p(e,"H3",{});var Kt=r(j);dt=l(Kt,"Inference Rules"),Kt.forEach(t),Le=u(e),R=p(e,"P",{});var ze=r(R);_t=l(ze,"Using "),le=p(ze,"STRONG",{});var Qt=r(le);Et=l(Qt,"inference rules"),Qt.forEach(t),Tt=l(ze,`, you can indicate how to determine the type of certain concepts. Every concept
for which an inference rule is defined has a type. That type is determined according to the given
rule. In the following example the type of entity function is the value of its attribute
\u2018declaredType\u2019.`),ze.forEach(t),ge=u(e),S=p(e,"PRE",{class:!0});var wn=r(S);wn.forEach(t),$e=u(e),F=p(e,"PRE",{class:!0});var Ln=r(F);Ln.forEach(t),Re=u(e),rn(x.$$.fragment,e),xe=u(e),P=p(e,"P",{});var Ue=r(P);kt=l(Ue,"By stating that an inference rule is "),ie=p(Ue,"STRONG",{});var Xt=r(ie);bt=l(Xt,"abstract"),Xt.forEach(t),wt=l(Ue,`, you define that the concept does have a type, but the
way its type is determined, is given by the inference rules of its subconcepts.`),Ue.forEach(t),Pe=u(e),N=p(e,"PRE",{class:!0});var gn=r(N);gn.forEach(t),Ie=u(e),I=p(e,"P",{});var We=r(I);Lt=l(We,"It is possible to use the predefined instances of a "),pe=p(We,"STRONG",{});var Zt=r(pe);gt=l(Zt,"limited concept"),Zt.forEach(t),$t=l(We,"."),We.forEach(t),De=u(e),B=p(e,"PRE",{class:!0});var $n=r(B);$n.forEach(t),Ae=u(e),J=p(e,"H3",{});var en=r(J);Rt=l(en,"Type Conformance Rules"),en.forEach(t),Ce=u(e),_=p(e,"P",{});var A=r(_);xt=l(A,"Finally, you have to state your "),re=p(A,"STRONG",{});var tn=r(re);Pt=l(tn,"type conformance rules"),tn.forEach(t),It=l(A,`. There are two flavours of conformance rules:
the `),ce=p(A,"STRONG",{});var nn=r(ce);Dt=l(nn,"conformsto"),nn.forEach(t),At=l(A," and the "),ue=p(A,"STRONG",{});var sn=r(ue);Ct=l(sn,"equalsto"),sn.forEach(t),Ht=l(A," rules. To a language engineer the differences between these will be clear."),A.forEach(t),He=u(e),K=p(e,"P",{});var an=r(K);Ot=l(an,`In conformance rules
it is also possible to use the predefined instances of a limited concept.`),an.forEach(t),Oe=u(e),G=p(e,"PRE",{class:!0});var Rn=r(G);Rn.forEach(t),Me=u(e),Q=p(e,"H2",{});var on=r(Q);Mt=l(on,"Rules that Apply to any Concept"),on.forEach(t),Se=u(e),D=p(e,"P",{});var Ve=r(D);St=l(Ve,"Conformance and other rules can also be defined to apply to *"),fe=p(Ve,"EM",{});var ln=r(fe);Ft=l(ln,"any"),ln.forEach(t),Nt=l(Ve,` concept. Obviously, this means that
any instance of any concept conforms to the given value.`),Ve.forEach(t),Fe=u(e),q=p(e,"PRE",{class:!0});var xn=r(q);xn.forEach(t),this.h()},h(){C(z,"href","/010_Intro/050_Three_Levels_of_Customization#levels"),C(M,"class","language-ts"),C(S,"class","language-ts"),C(F,"class","language-ts"),C(N,"class","language-ts"),C(B,"class","language-ts"),C(G,"class","language-ts"),C(q,"class","language-ts")},m(e,s){a(e,f,s),n(f,y),a(e,d,s),a(e,E,s),n(E,k),a(e,w,s),a(e,T,s),n(T,h),a(e,m,s),a(e,v,s),n(v,je),n(v,z),n(z,Je),n(v,Ke),n(v,ee),n(ee,Qe),n(v,Xe),a(e,me,s),a(e,L,s),n(L,H),n(H,Ze),n(H,te),n(te,et),n(H,tt),n(L,nt),n(L,O),n(O,st),n(O,ne),n(ne,at),n(O,ot),a(e,ve,s),a(e,U,s),n(U,lt),a(e,de,s),a(e,W,s),n(W,it),a(e,_e,s),a(e,b,s),n(b,pt),n(b,se),n(se,rt),n(b,ct),n(b,ae),n(ae,ut),n(b,ft),a(e,Ee,s),a(e,V,s),n(V,yt),a(e,Te,s),a(e,g,s),n(g,ht),n(g,oe),n(oe,mt),n(g,vt),a(e,ke,s),a(e,M,s),M.innerHTML=mn,a(e,be,s),cn($,e,s),a(e,we,s),a(e,j,s),n(j,dt),a(e,Le,s),a(e,R,s),n(R,_t),n(R,le),n(le,Et),n(R,Tt),a(e,ge,s),a(e,S,s),S.innerHTML=vn,a(e,$e,s),a(e,F,s),F.innerHTML=dn,a(e,Re,s),cn(x,e,s),a(e,xe,s),a(e,P,s),n(P,kt),n(P,ie),n(ie,bt),n(P,wt),a(e,Pe,s),a(e,N,s),N.innerHTML=_n,a(e,Ie,s),a(e,I,s),n(I,Lt),n(I,pe),n(pe,gt),n(I,$t),a(e,De,s),a(e,B,s),B.innerHTML=En,a(e,Ae,s),a(e,J,s),n(J,Rt),a(e,Ce,s),a(e,_,s),n(_,xt),n(_,re),n(re,Pt),n(_,It),n(_,ce),n(ce,Dt),n(_,At),n(_,ue),n(ue,Ct),n(_,Ht),a(e,He,s),a(e,K,s),n(K,Ot),a(e,Oe,s),a(e,G,s),G.innerHTML=Tn,a(e,Me,s),a(e,Q,s),n(Q,Mt),a(e,Se,s),a(e,D,s),n(D,St),n(D,fe),n(fe,Ft),n(D,Nt),a(e,Fe,s),a(e,q,s),q.innerHTML=kn,Ne=!0},p(e,[s]){const ye={};s&1&&(ye.$$scope={dirty:s,ctx:e}),$.$set(ye);const he={};s&1&&(he.$$scope={dirty:s,ctx:e}),x.$set(he)},i(e){Ne||(un($.$$.fragment,e),un(x.$$.fragment,e),Ne=!0)},o(e){fn($.$$.fragment,e),fn(x.$$.fragment,e),Ne=!1},d(e){e&&t(f),e&&t(d),e&&t(E),e&&t(w),e&&t(T),e&&t(m),e&&t(v),e&&t(me),e&&t(L),e&&t(ve),e&&t(U),e&&t(de),e&&t(W),e&&t(_e),e&&t(b),e&&t(Ee),e&&t(V),e&&t(Te),e&&t(g),e&&t(ke),e&&t(M),e&&t(be),yn($,e),e&&t(we),e&&t(j),e&&t(Le),e&&t(R),e&&t(ge),e&&t(S),e&&t($e),e&&t(F),e&&t(Re),yn(x,e),e&&t(xe),e&&t(P),e&&t(Pe),e&&t(N),e&&t(Ie),e&&t(I),e&&t(De),e&&t(B),e&&t(Ae),e&&t(J),e&&t(Ce),e&&t(_),e&&t(He),e&&t(K),e&&t(Oe),e&&t(G),e&&t(Me),e&&t(Q),e&&t(Se),e&&t(D),e&&t(Fe),e&&t(q)}}}class Nn extends Pn{constructor(f){super();In(this,f,null,On,Dn,{})}}export{Nn as default};
