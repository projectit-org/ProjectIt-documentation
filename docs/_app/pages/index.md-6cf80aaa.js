import{S as ia,i as sa,s as ha,e as l,t as a,k as f,c as n,a as i,h as r,d as o,m as u,a2 as fa,b as d,g as h,H as t,J as To}from"../chunks/vendor-0dc77bd0.js";function ua(na){let y,$e,Ie,m,et,k,Lo,tt,L,ot,at,Ee,I,rt,re,lt,nt,le,it,ye,j,st,ne,ht,ft,ke,P,ut,R,ct,pt,je,C,dt,Pe,U,mt,be,q,wt,Te,M,gt,Le,c,S,vt,ie,_t,It,Et,x,yt,se,kt,jt,Pt,A,bt,he,Tt,Lt,St,W,xt,fe,At,Wt,Gt,G,Ot,ue,Ht,Nt,Se,J,Dt,xe,b,Ft,z,Rt,Ct,Ae,B,Ut,We,T,qt,Y,Mt,Jt,Ge,w,zt,ce,Bt,Yt,pe,Kt,Qt,Oe,g,Vt,de,Xt,Zt,me,$t,eo,He,K,to,Ne,Q,oo,De,p,O,ao,V,ro,lo,no,H,io,X,so,ho,fo,N,uo,Z,co,po,mo,D,wo,$,go,vo,_o,F,Io,ee,Eo,yo,Fe,E,we,ko,jo,ge,Po,bo;return{c(){y=l("h1"),$e=a("ProjectIt \u2014 A Projectional Editor for the Web"),Ie=f(),m=l("p"),et=a("ProjectIt is a Language Workbench (\u2026in the making "),k=l("img"),tt=a(`,
so please let us know if you find anything not yet correct). It is a tool for creating mini-languages,
which are also known as `),L=l("a"),ot=a("Domain Specific Languages (DSLs)"),at=a(`.
ProjectIt is able to generate an integrated
set of editor, scoper, typer, and validator for your mini-language from a small set of definitions. Together we call this the work environment for your language.`),Ee=f(),I=l("h2"),rt=a("Upcoming: "),re=l("i"),lt=a("ProjectIt"),nt=a(" will change its name to "),le=l("i"),it=a("Freon"),ye=f(),j=l("p"),st=a(`Because the nature of this project has changed from a tool to create a projectional editor to a tool to create a DSL,
it was decided to change the name of the project. In the future, this tool will be called `),ne=l("i"),ht=a("\u2018Freon\u2019"),ft=a("."),ke=f(),P=l("p"),ut=a("If you want to know why this name was chosen, please read "),R=l("a"),ct=a("Name Change"),pt=a("."),je=f(),C=l("h3"),dt=a("The Core Framework"),Pe=f(),U=l("p"),mt=a(`The core of ProjectIt is a TypeScript/JavaScript framework for building web-based, projectional
editors. Editing expressions in a projectional editor is a well-known challenge. What makes the
ProjectIt framework unique is the fact that it has built-in support for expressions, so you can
easily make a projectional editor that allows for a natural manner of editing.`),be=f(),q=l("h3"),wt=a("The Generators"),Te=f(),M=l("p"),gt=a(`On top of the core framework there are five generators, each of which generates part
of the work environment for your mini-language:`),Le=f(),c=l("ul"),S=l("li"),vt=a("The "),ie=l("strong"),_t=a("language structure"),It=a(" defines all the concepts, properties, and relationships in the language."),Et=f(),x=l("li"),yt=a("The "),se=l("strong"),kt=a("editor"),jt=a(` defines how a model in the language looks like on the screen.
It also defines what editing commands can be used to change the model.`),Pt=f(),A=l("li"),bt=a("The "),he=l("strong"),Tt=a("scoper"),Lt=a(" defines how names that refer to other elements are being resolved."),St=f(),W=l("li"),xt=a("The "),fe=l("strong"),At=a("typer"),Wt=a(" defines what the type of an element is."),Gt=f(),G=l("li"),Ot=a("The "),ue=l("strong"),Ht=a("validator"),Nt=a(" defines what a correct model looks like and wil provide errors whenever a model breaks these rules."),Se=f(),J=l("h3"),Dt=a("Why Is ProjectIt As It Is?"),xe=f(),b=l("p"),Ft=a(`Currently, ProjectIt does not support the creation of debuggers, interpreters, generators, and
such. Indeed, we have a (large) `),z=l("a"),Rt=a("wish list"),Ct=a(` of extra features
that we would like to implement in the future.`),Ae=f(),B=l("p"),Ut=a(`In some cases, like e.g. code generators, we think that integration with existing tools is the best solution.
In other cases we plan to provide ProjectIt components for specific functionality.
Given time, we hope to realize many of these extra items.`),We=f(),T=l("p"),qt=a(`If you want to know why
we have chosen this development route, read our statement on the `),Y=l("a"),Mt=a("philosophy"),Jt=a(`
behind the tool.`),Ge=f(),w=l("h2"),zt=a("What Are You: a "),ce=l("em"),Bt=a("Language Engineer"),Yt=a(" or a "),pe=l("em"),Kt=a("User"),Qt=a("?"),Oe=f(),g=l("p"),Vt=a(`We assume that people who want to use ProjectIt know at least the basics of making mini-languages. For instance,
the terms metamodel, abstract syntax tree, scope, concrete syntax, parsing, etc., should be familiar. When we address the ProjectIt
user we call him, or her a `),de=l("strong"),Xt=a("language engineer"),Zt=a(". The people that will be using the generated work environment are simply called "),me=l("strong"),$t=a("users"),eo=a("."),He=f(),K=l("h2"),to=a("Welcome, Language Engineer"),Ne=f(),Q=l("p"),oo=a(`So welcome, language engineer, to the world of ProjectIt. This website is meant for you. It explains how ProjectIt can help
you in creating a language and building a work environment for it. Please, browse through all the subjects.
As a start, you could ..`),De=f(),p=l("ul"),O=l("li"),ao=a(".. find out what "),V=l("a"),ro=a("projectional editing"),lo=a(" is."),no=f(),H=l("li"),io=a(".. see how you can "),X=l("a"),so=a("install and use"),ho=a(" ProjectIt."),fo=f(),N=l("li"),uo=a(".. find out how to define a language and its editor, etc. in the "),Z=l("a"),co=a("tutorials"),po=a("."),mo=f(),D=l("li"),wo=a(".. dive deeper into the "),$=l("a"),go=a("structure of the generated code"),vo=a("."),_o=f(),F=l("li"),Io=a(".. get to know more about the "),ee=l("a"),Eo=a("meta-code"),yo=a(" of ProjectIt."),Fe=f(),E=l("p"),we=l("strong"),ko=a("Have fun!"),jo=a(" If you have questions that are not answered in this documentation, please email us at "),ge=l("em"),Po=a("info AT projectit.org"),bo=a("."),this.h()},l(e){y=n(e,"H1",{});var s=i(y);$e=r(s,"ProjectIt \u2014 A Projectional Editor for the Web"),s.forEach(o),Ie=u(e),m=n(e,"P",{});var te=i(m);et=r(te,"ProjectIt is a Language Workbench (\u2026in the making "),k=n(te,"IMG",{src:!0,alt:!0,width:!0,height:!0}),tt=r(te,`,
so please let us know if you find anything not yet correct). It is a tool for creating mini-languages,
which are also known as `),L=n(te,"A",{href:!0,target:!0});var So=i(L);ot=r(So,"Domain Specific Languages (DSLs)"),So.forEach(o),at=r(te,`.
ProjectIt is able to generate an integrated
set of editor, scoper, typer, and validator for your mini-language from a small set of definitions. Together we call this the work environment for your language.`),te.forEach(o),Ee=u(e),I=n(e,"H2",{});var ve=i(I);rt=r(ve,"Upcoming: "),re=n(ve,"I",{});var xo=i(re);lt=r(xo,"ProjectIt"),xo.forEach(o),nt=r(ve," will change its name to "),le=n(ve,"I",{});var Ao=i(le);it=r(Ao,"Freon"),Ao.forEach(o),ve.forEach(o),ye=u(e),j=n(e,"P",{});var Re=i(j);st=r(Re,`Because the nature of this project has changed from a tool to create a projectional editor to a tool to create a DSL,
it was decided to change the name of the project. In the future, this tool will be called `),ne=n(Re,"I",{});var Wo=i(ne);ht=r(Wo,"\u2018Freon\u2019"),Wo.forEach(o),ft=r(Re,"."),Re.forEach(o),ke=u(e),P=n(e,"P",{});var Ce=i(P);ut=r(Ce,"If you want to know why this name was chosen, please read "),R=n(Ce,"A",{href:!0});var Go=i(R);ct=r(Go,"Name Change"),Go.forEach(o),pt=r(Ce,"."),Ce.forEach(o),je=u(e),C=n(e,"H3",{});var Oo=i(C);dt=r(Oo,"The Core Framework"),Oo.forEach(o),Pe=u(e),U=n(e,"P",{});var Ho=i(U);mt=r(Ho,`The core of ProjectIt is a TypeScript/JavaScript framework for building web-based, projectional
editors. Editing expressions in a projectional editor is a well-known challenge. What makes the
ProjectIt framework unique is the fact that it has built-in support for expressions, so you can
easily make a projectional editor that allows for a natural manner of editing.`),Ho.forEach(o),be=u(e),q=n(e,"H3",{});var No=i(q);wt=r(No,"The Generators"),No.forEach(o),Te=u(e),M=n(e,"P",{});var Do=i(M);gt=r(Do,`On top of the core framework there are five generators, each of which generates part
of the work environment for your mini-language:`),Do.forEach(o),Le=u(e),c=n(e,"UL",{});var v=i(c);S=n(v,"LI",{});var Ue=i(S);vt=r(Ue,"The "),ie=n(Ue,"STRONG",{});var Fo=i(ie);_t=r(Fo,"language structure"),Fo.forEach(o),It=r(Ue," defines all the concepts, properties, and relationships in the language."),Ue.forEach(o),Et=u(v),x=n(v,"LI",{});var qe=i(x);yt=r(qe,"The "),se=n(qe,"STRONG",{});var Ro=i(se);kt=r(Ro,"editor"),Ro.forEach(o),jt=r(qe,` defines how a model in the language looks like on the screen.
It also defines what editing commands can be used to change the model.`),qe.forEach(o),Pt=u(v),A=n(v,"LI",{});var Me=i(A);bt=r(Me,"The "),he=n(Me,"STRONG",{});var Co=i(he);Tt=r(Co,"scoper"),Co.forEach(o),Lt=r(Me," defines how names that refer to other elements are being resolved."),Me.forEach(o),St=u(v),W=n(v,"LI",{});var Je=i(W);xt=r(Je,"The "),fe=n(Je,"STRONG",{});var Uo=i(fe);At=r(Uo,"typer"),Uo.forEach(o),Wt=r(Je," defines what the type of an element is."),Je.forEach(o),Gt=u(v),G=n(v,"LI",{});var ze=i(G);Ot=r(ze,"The "),ue=n(ze,"STRONG",{});var qo=i(ue);Ht=r(qo,"validator"),qo.forEach(o),Nt=r(ze," defines what a correct model looks like and wil provide errors whenever a model breaks these rules."),ze.forEach(o),v.forEach(o),Se=u(e),J=n(e,"H3",{});var Mo=i(J);Dt=r(Mo,"Why Is ProjectIt As It Is?"),Mo.forEach(o),xe=u(e),b=n(e,"P",{});var Be=i(b);Ft=r(Be,`Currently, ProjectIt does not support the creation of debuggers, interpreters, generators, and
such. Indeed, we have a (large) `),z=n(Be,"A",{href:!0});var Jo=i(z);Rt=r(Jo,"wish list"),Jo.forEach(o),Ct=r(Be,` of extra features
that we would like to implement in the future.`),Be.forEach(o),Ae=u(e),B=n(e,"P",{});var zo=i(B);Ut=r(zo,`In some cases, like e.g. code generators, we think that integration with existing tools is the best solution.
In other cases we plan to provide ProjectIt components for specific functionality.
Given time, we hope to realize many of these extra items.`),zo.forEach(o),We=u(e),T=n(e,"P",{});var Ye=i(T);qt=r(Ye,`If you want to know why
we have chosen this development route, read our statement on the `),Y=n(Ye,"A",{href:!0});var Bo=i(Y);Mt=r(Bo,"philosophy"),Bo.forEach(o),Jt=r(Ye,`
behind the tool.`),Ye.forEach(o),Ge=u(e),w=n(e,"H2",{});var oe=i(w);zt=r(oe,"What Are You: a "),ce=n(oe,"EM",{});var Yo=i(ce);Bt=r(Yo,"Language Engineer"),Yo.forEach(o),Yt=r(oe," or a "),pe=n(oe,"EM",{});var Ko=i(pe);Kt=r(Ko,"User"),Ko.forEach(o),Qt=r(oe,"?"),oe.forEach(o),Oe=u(e),g=n(e,"P",{});var ae=i(g);Vt=r(ae,`We assume that people who want to use ProjectIt know at least the basics of making mini-languages. For instance,
the terms metamodel, abstract syntax tree, scope, concrete syntax, parsing, etc., should be familiar. When we address the ProjectIt
user we call him, or her a `),de=n(ae,"STRONG",{});var Qo=i(de);Xt=r(Qo,"language engineer"),Qo.forEach(o),Zt=r(ae,". The people that will be using the generated work environment are simply called "),me=n(ae,"STRONG",{});var Vo=i(me);$t=r(Vo,"users"),Vo.forEach(o),eo=r(ae,"."),ae.forEach(o),He=u(e),K=n(e,"H2",{});var Xo=i(K);to=r(Xo,"Welcome, Language Engineer"),Xo.forEach(o),Ne=u(e),Q=n(e,"P",{});var Zo=i(Q);oo=r(Zo,`So welcome, language engineer, to the world of ProjectIt. This website is meant for you. It explains how ProjectIt can help
you in creating a language and building a work environment for it. Please, browse through all the subjects.
As a start, you could ..`),Zo.forEach(o),De=u(e),p=n(e,"UL",{});var _=i(p);O=n(_,"LI",{});var Ke=i(O);ao=r(Ke,".. find out what "),V=n(Ke,"A",{href:!0});var $o=i(V);ro=r($o,"projectional editing"),$o.forEach(o),lo=r(Ke," is."),Ke.forEach(o),no=u(_),H=n(_,"LI",{});var Qe=i(H);io=r(Qe,".. see how you can "),X=n(Qe,"A",{href:!0});var ea=i(X);so=r(ea,"install and use"),ea.forEach(o),ho=r(Qe," ProjectIt."),Qe.forEach(o),fo=u(_),N=n(_,"LI",{});var Ve=i(N);uo=r(Ve,".. find out how to define a language and its editor, etc. in the "),Z=n(Ve,"A",{href:!0});var ta=i(Z);co=r(ta,"tutorials"),ta.forEach(o),po=r(Ve,"."),Ve.forEach(o),mo=u(_),D=n(_,"LI",{});var Xe=i(D);wo=r(Xe,".. dive deeper into the "),$=n(Xe,"A",{href:!0});var oa=i($);go=r(oa,"structure of the generated code"),oa.forEach(o),vo=r(Xe,"."),Xe.forEach(o),_o=u(_),F=n(_,"LI",{});var Ze=i(F);Io=r(Ze,".. get to know more about the "),ee=n(Ze,"A",{href:!0});var aa=i(ee);Eo=r(aa,"meta-code"),aa.forEach(o),yo=r(Ze," of ProjectIt."),Ze.forEach(o),_.forEach(o),Fe=u(e),E=n(e,"P",{});var _e=i(E);we=n(_e,"STRONG",{});var ra=i(we);ko=r(ra,"Have fun!"),ra.forEach(o),jo=r(_e," If you have questions that are not answered in this documentation, please email us at "),ge=n(_e,"EM",{});var la=i(ge);Po=r(la,"info AT projectit.org"),la.forEach(o),bo=r(_e,"."),_e.forEach(o),this.h()},h(){fa(k.src,Lo="/images/smile.png")||d(k,"src",Lo),d(k,"alt","OOPS"),d(k,"width","20"),d(k,"height","20"),d(L,"href","https://en.wikipedia.org/wiki/Domain-specific*language"),d(L,"target","_blank"),d(R,"href","/010_Intro/060_Name_Change"),d(z,"href","/010_Intro/090_Future_Developments"),d(Y,"href","/010_Intro/020_Our_Philosophy"),d(V,"href","/010_Intro/010_Projectional_Editing"),d(X,"href","/020_Getting_Started/010_Installation"),d(Z,"href","/030_Developing_a_Language/010_Default_Level"),d($,"href","/020_Getting_Started/020_Project_Structure"),d(ee,"href","/060_Under_the_Hood")},m(e,s){h(e,y,s),t(y,$e),h(e,Ie,s),h(e,m,s),t(m,et),t(m,k),t(m,tt),t(m,L),t(L,ot),t(m,at),h(e,Ee,s),h(e,I,s),t(I,rt),t(I,re),t(re,lt),t(I,nt),t(I,le),t(le,it),h(e,ye,s),h(e,j,s),t(j,st),t(j,ne),t(ne,ht),t(j,ft),h(e,ke,s),h(e,P,s),t(P,ut),t(P,R),t(R,ct),t(P,pt),h(e,je,s),h(e,C,s),t(C,dt),h(e,Pe,s),h(e,U,s),t(U,mt),h(e,be,s),h(e,q,s),t(q,wt),h(e,Te,s),h(e,M,s),t(M,gt),h(e,Le,s),h(e,c,s),t(c,S),t(S,vt),t(S,ie),t(ie,_t),t(S,It),t(c,Et),t(c,x),t(x,yt),t(x,se),t(se,kt),t(x,jt),t(c,Pt),t(c,A),t(A,bt),t(A,he),t(he,Tt),t(A,Lt),t(c,St),t(c,W),t(W,xt),t(W,fe),t(fe,At),t(W,Wt),t(c,Gt),t(c,G),t(G,Ot),t(G,ue),t(ue,Ht),t(G,Nt),h(e,Se,s),h(e,J,s),t(J,Dt),h(e,xe,s),h(e,b,s),t(b,Ft),t(b,z),t(z,Rt),t(b,Ct),h(e,Ae,s),h(e,B,s),t(B,Ut),h(e,We,s),h(e,T,s),t(T,qt),t(T,Y),t(Y,Mt),t(T,Jt),h(e,Ge,s),h(e,w,s),t(w,zt),t(w,ce),t(ce,Bt),t(w,Yt),t(w,pe),t(pe,Kt),t(w,Qt),h(e,Oe,s),h(e,g,s),t(g,Vt),t(g,de),t(de,Xt),t(g,Zt),t(g,me),t(me,$t),t(g,eo),h(e,He,s),h(e,K,s),t(K,to),h(e,Ne,s),h(e,Q,s),t(Q,oo),h(e,De,s),h(e,p,s),t(p,O),t(O,ao),t(O,V),t(V,ro),t(O,lo),t(p,no),t(p,H),t(H,io),t(H,X),t(X,so),t(H,ho),t(p,fo),t(p,N),t(N,uo),t(N,Z),t(Z,co),t(N,po),t(p,mo),t(p,D),t(D,wo),t(D,$),t($,go),t(D,vo),t(p,_o),t(p,F),t(F,Io),t(F,ee),t(ee,Eo),t(F,yo),h(e,Fe,s),h(e,E,s),t(E,we),t(we,ko),t(E,jo),t(E,ge),t(ge,Po),t(E,bo)},p:To,i:To,o:To,d(e){e&&o(y),e&&o(Ie),e&&o(m),e&&o(Ee),e&&o(I),e&&o(ye),e&&o(j),e&&o(ke),e&&o(P),e&&o(je),e&&o(C),e&&o(Pe),e&&o(U),e&&o(be),e&&o(q),e&&o(Te),e&&o(M),e&&o(Le),e&&o(c),e&&o(Se),e&&o(J),e&&o(xe),e&&o(b),e&&o(Ae),e&&o(B),e&&o(We),e&&o(T),e&&o(Ge),e&&o(w),e&&o(Oe),e&&o(g),e&&o(He),e&&o(K),e&&o(Ne),e&&o(Q),e&&o(De),e&&o(p),e&&o(Fe),e&&o(E)}}}class pa extends ia{constructor(y){super();sa(this,y,null,ua,ha,{})}}export{pa as default};
