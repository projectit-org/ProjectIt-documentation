import{S as Et,i as Mt,s as $t,e as r,t as a,k as d,w as dt,c as l,a as p,h as o,d as n,m as h,x as ht,b as $,g as m,H as t,y as gt,q as _t,o as vt,B as wt}from"../../chunks/vendor-492729b6.js";import{N as bt}from"../../chunks/Note-1bdf01a3.js";/* empty css                                                      */function Pt(P){let i;return{c(){i=a("What is referable is determined by the language engineer.")},l(c){i=o(c,"What is referable is determined by the language engineer.")},m(c,g){m(c,i,g)},d(c){c&&n(i)}}}function xt(P){let i;return{c(){i=a(`The language designer defines which elements in a model are referable.
From the point of view of the user this is a given part of the language (s)he is using.
This is similar to restrictions in a programming language that state that only certain 
types of elements may be exported/imported.`)},l(c){i=o(c,`The language designer defines which elements in a model are referable.
From the point of view of the user this is a given part of the language (s)he is using.
This is similar to restrictions in a programming language that state that only certain 
types of elements may be exported/imported.`)},m(c,g){m(c,i,g)},d(c){c&&n(i)}}}function St(P){let i;return{c(){i=a("By-name References.")},l(c){i=o(c,"By-name References.")},m(c,g){m(c,i,g)},d(c){c&&n(i)}}}function Tt(P){let i;return{c(){i=a(`References are by name, like they are in programming languages.
This is unlike many other modeling environments, where references are done by id.`)},l(c){i=o(c,`References are by name, like they are in programming languages.
This is unlike many other modeling environments, where references are done by id.`)},m(c,g){m(c,i,g)},d(c){c&&n(i)}}}function It(P){let i,c,g,L,ue,Y,k,de,Z,D,he,ee,f,ge,H,_e,ve,C,we,be,N,ke,ye,O,Ee,Me,te,x,kt=`<code class="language-ts"><span class="token comment">// docu-project/defs/language-main.ast#L7-L20</span>

model InsuranceModel <span class="token punctuation">&#123;</span>
    parts<span class="token operator">:</span> Part<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>              <span class="token comment">// units that hold partial definitions of insurance products</span>
    products<span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>        <span class="token comment">// units that hold sellable insurance products</span>
<span class="token punctuation">&#125;</span>

modelunit Part <span class="token punctuation">&#123;</span>
    part<span class="token operator">:</span> BaseProduct<span class="token punctuation">;</span>          <span class="token comment">// one collection of partial insurance products</span>
    file<span class="token operator">-</span>extension <span class="token operator">=</span> <span class="token string">"base"</span><span class="token punctuation">;</span>    <span class="token comment">// the file extension used by the parser</span>
<span class="token punctuation">&#125;</span>

modelunit Product <span class="token punctuation">&#123;</span>
    product<span class="token operator">:</span> InsuranceProduct<span class="token punctuation">;</span>  <span class="token comment">// one collection of sellable insurance products</span>
    file<span class="token operator">-</span>extension <span class="token operator">=</span> <span class="token string">"prod"</span><span class="token punctuation">;</span>    <span class="token comment">// the file extension used by the parser</span>
<span class="token punctuation">&#125;</span></code>`,ne,B,$e,ae,_,b,Pe,W,xe,Se,G,Te,Ie,Ae,S,Le,z,De,Be,Fe,T,Re,I,Ue,je,oe,A,q,He,se,y,Ce,J,Ne,Oe,ie,u,We,F,Ge,ze,K,qe,Je,Q,Ke,Qe,R,Ve,Xe,re,E,le,M,pe;return E=new bt({props:{$$slots:{content:[xt],header:[Pt]},$$scope:{ctx:P}}}),M=new bt({props:{$$slots:{content:[Tt],header:[St]},$$scope:{ctx:P}}}),{c(){i=r("h1"),c=a("Models Often Become Too Large"),g=d(),L=r("p"),ue=a("Contrary to what is common in the world of"),Y=d(),k=r("a"),de=a("Domain Specific Languages (DSLs)"),Z=a(`
we believe that a model
is often too large to handle. When dealing with source code, the times have long gone that a complete
application was written in a single file. Since the 1980s every self-respecting programming language has supported some kind of modularization.
It is our strong conviction that this approach should also be taken when dealing with models.
`),D=r("h2"),he=a("Introducing Model Units"),ee=d(),f=r("p"),ge=a(`Similar to how the source code for a single application is split into classes and/or modules, every model in ProjectIt is split
into `),H=r("strong"),_e=a("model units"),ve=a(`. Each model may contain units of multiple types, either an array of units, or a single unit. The next example
shows how to define model units. Here,
an `),C=r("em"),we=a("InsuranceModel"),be=a(" consists of a list of "),N=r("em"),ke=a("Parts"),ye=a(" and a list of "),O=r("em"),Ee=a("Products"),Me=a("."),te=d(),x=r("pre"),ne=d(),B=r("p"),$e=a(`The notion of model units has been around for some time. Actually, we have
published a number of papers on the topic.`),ae=d(),_=r("ul"),b=r("li"),Pe=a("At "),W=r("em"),xe=a("Eclipse Summit 2008 Modeling Symposium"),Se=a(" model units were introduced in "),G=r("em"),Te=a(`Big Models
an Alternative Approach`),Ie=a("."),Ae=d(),S=r("li"),Le=a(`Earlier, model units were described under the term \u2018Partial Models\u2019 at the ECMDA-FA 2007 conference
in a paper called `),z=r("em"),De=a("Building a Flexible Software Factory Using Partial Domain Specific Models"),Be=a("."),Fe=d(),T=r("li"),Re=a("More recently model units have been used within the "),I=r("a"),Ue=a("Mendix"),je=a(` meta-model to allow for working with large models
in their web based modeling tools. This work was presented at Splash 2016 in _Making Mendix Meta Model Driven_.`),oe=d(),A=r("h2"),q=r("a"),He=a(" Model Unit Interfaces"),se=d(),y=r("p"),Ce=a("Another essential idea that we borrow from programming is "),J=r("strong"),Ne=a("information hiding"),Oe=a(`.
Every model unit in ProjectIt defines an interface.
The interface determines which elements from the model unit are visible (i.e. can be referred to)
in other units in the same model.`),ie=d(),u=r("p"),We=a("In a ProjectIt definition of the language structure (the "),F=r("a"),Ge=a(".ast file"),ze=a(`)
concepts and properties can be defined to be `),K=r("strong"),qe=a("private"),Je=a(`.
Whereas other parts of a model unit can be referenced from another model unit,i.e. the `),Q=r("strong"),Ke=a("public"),Qe=a(` parts, private parts can only be referenced from
the same model unit.
The default scoper (the one from the `),R=r("a"),Ve=a("default level"),Xe=a(`)
already takes
the difference between public and private concepts and properties into account when resolving references.`),re=d(),dt(E.$$.fragment),le=d(),dt(M.$$.fragment),this.h()},l(e){i=l(e,"H1",{});var s=p(i);c=o(s,"Models Often Become Too Large"),s.forEach(n),g=h(e),L=l(e,"P",{});var V=p(L);ue=o(V,"Contrary to what is common in the world of"),V.forEach(n),Y=h(e),k=l(e,"A",{href:!0,target:!0});var X=p(k);de=o(X,"Domain Specific Languages (DSLs)"),X.forEach(n),Z=o(e,`
we believe that a model
is often too large to handle. When dealing with source code, the times have long gone that a complete
application was written in a single file. Since the 1980s every self-respecting programming language has supported some kind of modularization.
It is our strong conviction that this approach should also be taken when dealing with models.
`),D=l(e,"H2",{});var Ze=p(D);he=o(Ze,"Introducing Model Units"),Ze.forEach(n),ee=h(e),f=l(e,"P",{});var v=p(f);ge=o(v,`Similar to how the source code for a single application is split into classes and/or modules, every model in ProjectIt is split
into `),H=l(v,"STRONG",{});var et=p(H);_e=o(et,"model units"),et.forEach(n),ve=o(v,`. Each model may contain units of multiple types, either an array of units, or a single unit. The next example
shows how to define model units. Here,
an `),C=l(v,"EM",{});var tt=p(C);we=o(tt,"InsuranceModel"),tt.forEach(n),be=o(v," consists of a list of "),N=l(v,"EM",{});var nt=p(N);ke=o(nt,"Parts"),nt.forEach(n),ye=o(v," and a list of "),O=l(v,"EM",{});var at=p(O);Ee=o(at,"Products"),at.forEach(n),Me=o(v,"."),v.forEach(n),te=h(e),x=l(e,"PRE",{class:!0});var yt=p(x);yt.forEach(n),ne=h(e),B=l(e,"P",{});var ot=p(B);$e=o(ot,`The notion of model units has been around for some time. Actually, we have
published a number of papers on the topic.`),ot.forEach(n),ae=h(e),_=l(e,"UL",{});var U=p(_);b=l(U,"LI",{});var j=p(b);Pe=o(j,"At "),W=l(j,"EM",{});var st=p(W);xe=o(st,"Eclipse Summit 2008 Modeling Symposium"),st.forEach(n),Se=o(j," model units were introduced in "),G=l(j,"EM",{});var it=p(G);Te=o(it,`Big Models
an Alternative Approach`),it.forEach(n),Ie=o(j,"."),j.forEach(n),Ae=h(U),S=l(U,"LI",{});var ce=p(S);Le=o(ce,`Earlier, model units were described under the term \u2018Partial Models\u2019 at the ECMDA-FA 2007 conference
in a paper called `),z=l(ce,"EM",{});var rt=p(z);De=o(rt,"Building a Flexible Software Factory Using Partial Domain Specific Models"),rt.forEach(n),Be=o(ce,"."),ce.forEach(n),Fe=h(U),T=l(U,"LI",{});var me=p(T);Re=o(me,"More recently model units have been used within the "),I=l(me,"A",{href:!0,target:!0});var lt=p(I);Ue=o(lt,"Mendix"),lt.forEach(n),je=o(me,` meta-model to allow for working with large models
in their web based modeling tools. This work was presented at Splash 2016 in _Making Mendix Meta Model Driven_.`),me.forEach(n),U.forEach(n),oe=h(e),A=l(e,"H2",{});var Ye=p(A);q=l(Ye,"A",{name:!0}),p(q).forEach(n),He=o(Ye," Model Unit Interfaces"),Ye.forEach(n),se=h(e),y=l(e,"P",{});var fe=p(y);Ce=o(fe,"Another essential idea that we borrow from programming is "),J=l(fe,"STRONG",{});var pt=p(J);Ne=o(pt,"information hiding"),pt.forEach(n),Oe=o(fe,`.
Every model unit in ProjectIt defines an interface.
The interface determines which elements from the model unit are visible (i.e. can be referred to)
in other units in the same model.`),fe.forEach(n),ie=h(e),u=l(e,"P",{});var w=p(u);We=o(w,"In a ProjectIt definition of the language structure (the "),F=l(w,"A",{href:!0});var ct=p(F);Ge=o(ct,".ast file"),ct.forEach(n),ze=o(w,`)
concepts and properties can be defined to be `),K=l(w,"STRONG",{});var mt=p(K);qe=o(mt,"private"),mt.forEach(n),Je=o(w,`.
Whereas other parts of a model unit can be referenced from another model unit,i.e. the `),Q=l(w,"STRONG",{});var ft=p(Q);Ke=o(ft,"public"),ft.forEach(n),Qe=o(w,` parts, private parts can only be referenced from
the same model unit.
The default scoper (the one from the `),R=l(w,"A",{href:!0});var ut=p(R);Ve=o(ut,"default level"),ut.forEach(n),Xe=o(w,`)
already takes
the difference between public and private concepts and properties into account when resolving references.`),w.forEach(n),re=h(e),ht(E.$$.fragment,e),le=h(e),ht(M.$$.fragment,e),this.h()},h(){$(k,"href","https://en.wikipedia.org/wiki/Domain-specific*language"),$(k,"target","_blank"),$(x,"class","language-ts"),$(I,"href","https://www.mendix.com/"),$(I,"target","_blank"),$(q,"name","public"),$(F,"href","/010_Intro/040_A_Language_in_Five_Parts"),$(R,"href","/010_Intro/050_Three_Levels_of_Customization#level1")},m(e,s){m(e,i,s),t(i,c),m(e,g,s),m(e,L,s),t(L,ue),m(e,Y,s),m(e,k,s),t(k,de),m(e,Z,s),m(e,D,s),t(D,he),m(e,ee,s),m(e,f,s),t(f,ge),t(f,H),t(H,_e),t(f,ve),t(f,C),t(C,we),t(f,be),t(f,N),t(N,ke),t(f,ye),t(f,O),t(O,Ee),t(f,Me),m(e,te,s),m(e,x,s),x.innerHTML=kt,m(e,ne,s),m(e,B,s),t(B,$e),m(e,ae,s),m(e,_,s),t(_,b),t(b,Pe),t(b,W),t(W,xe),t(b,Se),t(b,G),t(G,Te),t(b,Ie),t(_,Ae),t(_,S),t(S,Le),t(S,z),t(z,De),t(S,Be),t(_,Fe),t(_,T),t(T,Re),t(T,I),t(I,Ue),t(T,je),m(e,oe,s),m(e,A,s),t(A,q),t(A,He),m(e,se,s),m(e,y,s),t(y,Ce),t(y,J),t(J,Ne),t(y,Oe),m(e,ie,s),m(e,u,s),t(u,We),t(u,F),t(F,Ge),t(u,ze),t(u,K),t(K,qe),t(u,Je),t(u,Q),t(Q,Ke),t(u,Qe),t(u,R),t(R,Ve),t(u,Xe),m(e,re,s),gt(E,e,s),m(e,le,s),gt(M,e,s),pe=!0},p(e,[s]){const V={};s&1&&(V.$$scope={dirty:s,ctx:e}),E.$set(V);const X={};s&1&&(X.$$scope={dirty:s,ctx:e}),M.$set(X)},i(e){pe||(_t(E.$$.fragment,e),_t(M.$$.fragment,e),pe=!0)},o(e){vt(E.$$.fragment,e),vt(M.$$.fragment,e),pe=!1},d(e){e&&n(i),e&&n(g),e&&n(L),e&&n(Y),e&&n(k),e&&n(Z),e&&n(D),e&&n(ee),e&&n(f),e&&n(te),e&&n(x),e&&n(ne),e&&n(B),e&&n(ae),e&&n(_),e&&n(oe),e&&n(A),e&&n(se),e&&n(y),e&&n(ie),e&&n(u),e&&n(re),wt(E,e),e&&n(le),wt(M,e)}}}class Bt extends Et{constructor(i){super();Mt(this,i,null,It,$t,{})}}export{Bt as default};
