import{S as Oo,i as Ho,s as Ro,e as n,t as r,k as f,c as l,a as i,g as a,d as o,n as u,a1 as Do,b as d,f as h,F as t,H as ro}from"../chunks/vendor-0216fdcb.js";function No(Go){let I,Ce,ue,k,Ue,E,ao,Me,ce,y,ze,pe,R,Je,de,D,Ye,me,N,Be,ge,q,Ke,we,c,P,Qe,$,Ve,Xe,Ze,T,$e,ee,et,tt,ot,L,rt,te,at,nt,lt,S,it,oe,st,ht,ft,x,ut,re,ct,pt,ve,F,dt,_e,b,mt,C,gt,wt,Ie,U,vt,ke,j,_t,M,It,kt,Ee,m,Et,ae,yt,bt,ne,jt,Pt,ye,g,Tt,le,Lt,St,ie,xt,At,be,z,Wt,je,J,Gt,Pe,p,A,Ot,Y,Ht,Rt,Dt,W,Nt,B,qt,Ft,Ct,G,Ut,K,Mt,zt,Jt,O,Yt,Q,Bt,Kt,Qt,H,Vt,V,Xt,Zt,Te,_,se,$t,eo,he,to,oo;return{c(){I=n("h1"),Ce=r("ProjectIt \u2014 A Projectional Editor for the Web"),ue=f(),k=n("p"),Ue=r("ProjectIt is a Language Workbench (\u2026in the making "),E=n("img"),Me=r(`,
so please let us know if you find anything not yet correct). It is a tool for creating mini-languages,
which are also known as`),ce=f(),y=n("a"),ze=r("Domain Specific Languages (DSLs)"),pe=r(`.
ProjectIt is able to generate an integrated
set of editor, scoper, typer, and validator for your mini-language from a small set of definitions. Together we call this the work environment for your language.
`),R=n("h3"),Je=r("The Core Framework"),de=f(),D=n("p"),Ye=r(`The core of ProjectIt is a TypeScript/JavaScript framework for building web-based, projectional
editors. Editing expressions in a projectional editor is a well-known challenge. What makes the
ProjectIt framework unique is the fact that it has built-in support for expressions, so you can
easily make a projectional editor that allows for a natural manner of editing.`),me=f(),N=n("h3"),Be=r("The Generators"),ge=f(),q=n("p"),Ke=r(`On top of the core framework there are five generators, each of which generates part
of the work environment for your mini-language:`),we=f(),c=n("ul"),P=n("li"),Qe=r("The "),$=n("strong"),Ve=r("language structure"),Xe=r(" defines all the concepts, properties, and relationships in the language."),Ze=f(),T=n("li"),$e=r("The "),ee=n("strong"),et=r("editor"),tt=r(` defines how a model in the language looks like on the screen.
It also defines what editing commands can be used to change the model.`),ot=f(),L=n("li"),rt=r("The "),te=n("strong"),at=r("scoper"),nt=r(" defines how names that refer to other elements are being resolved."),lt=f(),S=n("li"),it=r("The "),oe=n("strong"),st=r("typer"),ht=r(" defines what the type of an element is."),ft=f(),x=n("li"),ut=r("The "),re=n("strong"),ct=r("validator"),pt=r(" defines what a correct model looks like and wil provide errors whenever a model breaks these rules."),ve=f(),F=n("h3"),dt=r("Why Is ProjectIt As It Is?"),_e=f(),b=n("p"),mt=r(`Currently, ProjectIt does not support the creation of debuggers, interpreters, generators, and
such. Indeed, we have a (large) `),C=n("a"),gt=r("wish list"),wt=r(` of extra features
that we would like to implement in the future.`),Ie=f(),U=n("p"),vt=r(`In some cases, like e.g code generators, we think that integration with existing tools is the best solution.
In other cases we plan to provide ProjectIt components for specific functionality.
Given time, we hope to realize many of these extra items.`),ke=f(),j=n("p"),_t=r(`If you want to know why
we have chosen this development route, read our statement on the `),M=n("a"),It=r("philosophy"),kt=r(`
behind the tool.`),Ee=f(),m=n("h2"),Et=r("What Are You: a "),ae=n("em"),yt=r("Language Engineer"),bt=r(" or a "),ne=n("em"),jt=r("User"),Pt=r("?"),ye=f(),g=n("p"),Tt=r(`We assume that people who want to use ProjectIt know at least the basics of making mini-languages. For instance,
the terms metamodel, abstract syntax tree, scope, concrete syntax, parsing, etc., should be familiar. When we address the ProjectIt
user we call him, or her a `),le=n("strong"),Lt=r("language engineer"),St=r(". The people that will be using the generated work environment are simply called "),ie=n("strong"),xt=r("users"),At=r("."),be=f(),z=n("h2"),Wt=r("Welcome, Language Engineer"),je=f(),J=n("p"),Gt=r(`So welcome, language engineer, to the world of ProjectIt. This website is meant for you. It explains how ProjectIt can help
you in creating a language and building a work environment for it. Please, browse through all the subjects.
As a start, you could ..`),Pe=f(),p=n("ul"),A=n("li"),Ot=r(".. find out what "),Y=n("a"),Ht=r("projectional editing"),Rt=r(" is."),Dt=f(),W=n("li"),Nt=r(".. see how you can "),B=n("a"),qt=r("install and use"),Ft=r(" ProjectIt."),Ct=f(),G=n("li"),Ut=r(".. find out how to define a language and its editor, etc. in the "),K=n("a"),Mt=r("tutorials"),zt=r("."),Jt=f(),O=n("li"),Yt=r(".. dive deeper into the "),Q=n("a"),Bt=r("structure of the generated code"),Kt=r("."),Qt=f(),H=n("li"),Vt=r(".. get to know more about the "),V=n("a"),Xt=r("meta-code"),Zt=r(" of ProjectIt."),Te=f(),_=n("p"),se=n("strong"),$t=r("Have fun!"),eo=r(" If you have questions that are not answered in this documentation, please email us at "),he=n("em"),to=r("info AT projectit.org"),oo=r("."),this.h()},l(e){I=l(e,"H1",{});var s=i(I);Ce=a(s,"ProjectIt \u2014 A Projectional Editor for the Web"),s.forEach(o),ue=u(e),k=l(e,"P",{});var Le=i(k);Ue=a(Le,"ProjectIt is a Language Workbench (\u2026in the making "),E=l(Le,"IMG",{src:!0,alt:!0,width:!0,height:!0}),Me=a(Le,`,
so please let us know if you find anything not yet correct). It is a tool for creating mini-languages,
which are also known as`),Le.forEach(o),ce=u(e),y=l(e,"A",{href:!0,target:!0});var no=i(y);ze=a(no,"Domain Specific Languages (DSLs)"),no.forEach(o),pe=a(e,`.
ProjectIt is able to generate an integrated
set of editor, scoper, typer, and validator for your mini-language from a small set of definitions. Together we call this the work environment for your language.
`),R=l(e,"H3",{});var lo=i(R);Je=a(lo,"The Core Framework"),lo.forEach(o),de=u(e),D=l(e,"P",{});var io=i(D);Ye=a(io,`The core of ProjectIt is a TypeScript/JavaScript framework for building web-based, projectional
editors. Editing expressions in a projectional editor is a well-known challenge. What makes the
ProjectIt framework unique is the fact that it has built-in support for expressions, so you can
easily make a projectional editor that allows for a natural manner of editing.`),io.forEach(o),me=u(e),N=l(e,"H3",{});var so=i(N);Be=a(so,"The Generators"),so.forEach(o),ge=u(e),q=l(e,"P",{});var ho=i(q);Ke=a(ho,`On top of the core framework there are five generators, each of which generates part
of the work environment for your mini-language:`),ho.forEach(o),we=u(e),c=l(e,"UL",{});var w=i(c);P=l(w,"LI",{});var Se=i(P);Qe=a(Se,"The "),$=l(Se,"STRONG",{});var fo=i($);Ve=a(fo,"language structure"),fo.forEach(o),Xe=a(Se," defines all the concepts, properties, and relationships in the language."),Se.forEach(o),Ze=u(w),T=l(w,"LI",{});var xe=i(T);$e=a(xe,"The "),ee=l(xe,"STRONG",{});var uo=i(ee);et=a(uo,"editor"),uo.forEach(o),tt=a(xe,` defines how a model in the language looks like on the screen.
It also defines what editing commands can be used to change the model.`),xe.forEach(o),ot=u(w),L=l(w,"LI",{});var Ae=i(L);rt=a(Ae,"The "),te=l(Ae,"STRONG",{});var co=i(te);at=a(co,"scoper"),co.forEach(o),nt=a(Ae," defines how names that refer to other elements are being resolved."),Ae.forEach(o),lt=u(w),S=l(w,"LI",{});var We=i(S);it=a(We,"The "),oe=l(We,"STRONG",{});var po=i(oe);st=a(po,"typer"),po.forEach(o),ht=a(We," defines what the type of an element is."),We.forEach(o),ft=u(w),x=l(w,"LI",{});var Ge=i(x);ut=a(Ge,"The "),re=l(Ge,"STRONG",{});var mo=i(re);ct=a(mo,"validator"),mo.forEach(o),pt=a(Ge," defines what a correct model looks like and wil provide errors whenever a model breaks these rules."),Ge.forEach(o),w.forEach(o),ve=u(e),F=l(e,"H3",{});var go=i(F);dt=a(go,"Why Is ProjectIt As It Is?"),go.forEach(o),_e=u(e),b=l(e,"P",{});var Oe=i(b);mt=a(Oe,`Currently, ProjectIt does not support the creation of debuggers, interpreters, generators, and
such. Indeed, we have a (large) `),C=l(Oe,"A",{href:!0});var wo=i(C);gt=a(wo,"wish list"),wo.forEach(o),wt=a(Oe,` of extra features
that we would like to implement in the future.`),Oe.forEach(o),Ie=u(e),U=l(e,"P",{});var vo=i(U);vt=a(vo,`In some cases, like e.g code generators, we think that integration with existing tools is the best solution.
In other cases we plan to provide ProjectIt components for specific functionality.
Given time, we hope to realize many of these extra items.`),vo.forEach(o),ke=u(e),j=l(e,"P",{});var He=i(j);_t=a(He,`If you want to know why
we have chosen this development route, read our statement on the `),M=l(He,"A",{href:!0});var _o=i(M);It=a(_o,"philosophy"),_o.forEach(o),kt=a(He,`
behind the tool.`),He.forEach(o),Ee=u(e),m=l(e,"H2",{});var X=i(m);Et=a(X,"What Are You: a "),ae=l(X,"EM",{});var Io=i(ae);yt=a(Io,"Language Engineer"),Io.forEach(o),bt=a(X," or a "),ne=l(X,"EM",{});var ko=i(ne);jt=a(ko,"User"),ko.forEach(o),Pt=a(X,"?"),X.forEach(o),ye=u(e),g=l(e,"P",{});var Z=i(g);Tt=a(Z,`We assume that people who want to use ProjectIt know at least the basics of making mini-languages. For instance,
the terms metamodel, abstract syntax tree, scope, concrete syntax, parsing, etc., should be familiar. When we address the ProjectIt
user we call him, or her a `),le=l(Z,"STRONG",{});var Eo=i(le);Lt=a(Eo,"language engineer"),Eo.forEach(o),St=a(Z,". The people that will be using the generated work environment are simply called "),ie=l(Z,"STRONG",{});var yo=i(ie);xt=a(yo,"users"),yo.forEach(o),At=a(Z,"."),Z.forEach(o),be=u(e),z=l(e,"H2",{});var bo=i(z);Wt=a(bo,"Welcome, Language Engineer"),bo.forEach(o),je=u(e),J=l(e,"P",{});var jo=i(J);Gt=a(jo,`So welcome, language engineer, to the world of ProjectIt. This website is meant for you. It explains how ProjectIt can help
you in creating a language and building a work environment for it. Please, browse through all the subjects.
As a start, you could ..`),jo.forEach(o),Pe=u(e),p=l(e,"UL",{});var v=i(p);A=l(v,"LI",{});var Re=i(A);Ot=a(Re,".. find out what "),Y=l(Re,"A",{href:!0});var Po=i(Y);Ht=a(Po,"projectional editing"),Po.forEach(o),Rt=a(Re," is."),Re.forEach(o),Dt=u(v),W=l(v,"LI",{});var De=i(W);Nt=a(De,".. see how you can "),B=l(De,"A",{href:!0});var To=i(B);qt=a(To,"install and use"),To.forEach(o),Ft=a(De," ProjectIt."),De.forEach(o),Ct=u(v),G=l(v,"LI",{});var Ne=i(G);Ut=a(Ne,".. find out how to define a language and its editor, etc. in the "),K=l(Ne,"A",{href:!0});var Lo=i(K);Mt=a(Lo,"tutorials"),Lo.forEach(o),zt=a(Ne,"."),Ne.forEach(o),Jt=u(v),O=l(v,"LI",{});var qe=i(O);Yt=a(qe,".. dive deeper into the "),Q=l(qe,"A",{href:!0});var So=i(Q);Bt=a(So,"structure of the generated code"),So.forEach(o),Kt=a(qe,"."),qe.forEach(o),Qt=u(v),H=l(v,"LI",{});var Fe=i(H);Vt=a(Fe,".. get to know more about the "),V=l(Fe,"A",{href:!0});var xo=i(V);Xt=a(xo,"meta-code"),xo.forEach(o),Zt=a(Fe," of ProjectIt."),Fe.forEach(o),v.forEach(o),Te=u(e),_=l(e,"P",{});var fe=i(_);se=l(fe,"STRONG",{});var Ao=i(se);$t=a(Ao,"Have fun!"),Ao.forEach(o),eo=a(fe," If you have questions that are not answered in this documentation, please email us at "),he=l(fe,"EM",{});var Wo=i(he);to=a(Wo,"info AT projectit.org"),Wo.forEach(o),oo=a(fe,"."),fe.forEach(o),this.h()},h(){Do(E.src,ao="/images/smile.png")||d(E,"src",ao),d(E,"alt","OOPS"),d(E,"width","20"),d(E,"height","20"),d(y,"href","https://en.wikipedia.org/wiki/Domain-specific*language"),d(y,"target","_blank"),d(C,"href","/010_Intro/090_Future_Developments"),d(M,"href","/010_Intro/020_Our_Philosophy"),d(Y,"href","/010_Intro/010_Projectional_Editing"),d(B,"href","/020_Getting_Started/010_Installation"),d(K,"href","/030_Developing_a_Language/010_Default_Level"),d(Q,"href","/020_Getting_Started/020_Project_Structure"),d(V,"href","/060_Under_the_Hood")},m(e,s){h(e,I,s),t(I,Ce),h(e,ue,s),h(e,k,s),t(k,Ue),t(k,E),t(k,Me),h(e,ce,s),h(e,y,s),t(y,ze),h(e,pe,s),h(e,R,s),t(R,Je),h(e,de,s),h(e,D,s),t(D,Ye),h(e,me,s),h(e,N,s),t(N,Be),h(e,ge,s),h(e,q,s),t(q,Ke),h(e,we,s),h(e,c,s),t(c,P),t(P,Qe),t(P,$),t($,Ve),t(P,Xe),t(c,Ze),t(c,T),t(T,$e),t(T,ee),t(ee,et),t(T,tt),t(c,ot),t(c,L),t(L,rt),t(L,te),t(te,at),t(L,nt),t(c,lt),t(c,S),t(S,it),t(S,oe),t(oe,st),t(S,ht),t(c,ft),t(c,x),t(x,ut),t(x,re),t(re,ct),t(x,pt),h(e,ve,s),h(e,F,s),t(F,dt),h(e,_e,s),h(e,b,s),t(b,mt),t(b,C),t(C,gt),t(b,wt),h(e,Ie,s),h(e,U,s),t(U,vt),h(e,ke,s),h(e,j,s),t(j,_t),t(j,M),t(M,It),t(j,kt),h(e,Ee,s),h(e,m,s),t(m,Et),t(m,ae),t(ae,yt),t(m,bt),t(m,ne),t(ne,jt),t(m,Pt),h(e,ye,s),h(e,g,s),t(g,Tt),t(g,le),t(le,Lt),t(g,St),t(g,ie),t(ie,xt),t(g,At),h(e,be,s),h(e,z,s),t(z,Wt),h(e,je,s),h(e,J,s),t(J,Gt),h(e,Pe,s),h(e,p,s),t(p,A),t(A,Ot),t(A,Y),t(Y,Ht),t(A,Rt),t(p,Dt),t(p,W),t(W,Nt),t(W,B),t(B,qt),t(W,Ft),t(p,Ct),t(p,G),t(G,Ut),t(G,K),t(K,Mt),t(G,zt),t(p,Jt),t(p,O),t(O,Yt),t(O,Q),t(Q,Bt),t(O,Kt),t(p,Qt),t(p,H),t(H,Vt),t(H,V),t(V,Xt),t(H,Zt),h(e,Te,s),h(e,_,s),t(_,se),t(se,$t),t(_,eo),t(_,he),t(he,to),t(_,oo)},p:ro,i:ro,o:ro,d(e){e&&o(I),e&&o(ue),e&&o(k),e&&o(ce),e&&o(y),e&&o(pe),e&&o(R),e&&o(de),e&&o(D),e&&o(me),e&&o(N),e&&o(ge),e&&o(q),e&&o(we),e&&o(c),e&&o(ve),e&&o(F),e&&o(_e),e&&o(b),e&&o(Ie),e&&o(U),e&&o(ke),e&&o(j),e&&o(Ee),e&&o(m),e&&o(ye),e&&o(g),e&&o(be),e&&o(z),e&&o(je),e&&o(J),e&&o(Pe),e&&o(p),e&&o(Te),e&&o(_)}}}class Fo extends Oo{constructor(I){super();Ho(this,I,null,No,Ro,{})}}export{Fo as default};