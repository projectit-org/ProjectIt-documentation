import{S as zo,i as Xo,s as Yo,e as i,t as r,k as f,c as a,a as l,h as n,d as o,m as p,b as d,a2 as Zo,g as h,H as t,J as mo}from"../../chunks/vendor-0dc77bd0.js";function $o(Jo){let _,Be,ye,N,Qe,we,L,P,Y,Ve,Je,A,ze,Xe,Ee,D,Ye,_e,k,Ze,S,$e,et,Pe,x,tt,Z,ot,rt,ke,v,nt,$,it,at,ee,lt,st,xe,F,ht,Ie,c,ft,te,pt,ct,oe,dt,mt,I,uo,ut,re,vt,gt,ne,bt,yt,Oe,g,R,wt,ie,Et,_t,Pt,M,kt,ae,xt,It,Ot,G,Tt,le,jt,At,Te,b,St,se,Rt,Mt,he,Gt,qt,je,y,Nt,fe,Lt,Dt,H,Ft,Ht,Ae,K,Kt,Se,m,Ut,U,Ct,Wt,pe,Bt,Qt,q,Vt,Jt,Re,Me,Ge,w,C,ce,zt,Xt,Yt,de,Zt,$t,eo,qe,O,to,me,oo,ro,Ne,E,ue,no,io,ve,ao,lo,ge,so,Le,T,ho,W,fo,po;return{c(){_=i("h1"),Be=r("Our Philosophy"),ye=f(),N=i("p"),Qe=r(`The design philosophy that we follow in ProjectIt can best be described by the following quote from
the well-known graphical user interface designer Alan Kay.`),we=f(),L=i("blockquote"),P=i("p"),Y=i("em"),Ve=r("Simple things should be simple, complex things should be possible."),Je=r(`
(`),A=i("a"),ze=r("Alan Kay, Turing Award Winner"),Xe=r(")"),Ee=f(),D=i("h2"),Ye=r("The Pareto Principle"),_e=f(),k=i("p"),Ze=r(`ProjectIt is a minimal viable product which supports the
language engineer in creating a work environment for a mini-language. A key principle
is the `),S=i("a"),$e=r("Pareto principle"),et=r(`
(or 80%-20% rule),
which states that for many events, roughly 80% of the effects come from 20% of the causes.
For example, it is an axiom of business  management that \u201C80% of sales come from 20% of clients\u201D.`),Pe=f(),x=i("p"),tt=r("In software development the Pareto principle translates to \u201C"),Z=i("em"),ot=r(`80% of the development
effort is spend on 20% of the application`),rt=r(`\u201D, this 20% being the more complex parts.
Still, the other 80% of the application needs to be created as well.`),ke=f(),v=i("p"),nt=r(`ProjectIt aims to
make the latter `),$=i("strong"),it=r("as simple as possible"),at=r(", while keeping the generated code "),ee=i("strong"),lt=r("open"),st=r(` for the
language engineer to code the more complex parts by hand. One of our use cases is the
creation of a prototype language in a day or in a couple of days at most.`),xe=f(),F=i("h2"),ht=r("Other Guidelines"),Ie=f(),c=i("p"),ft=r("Other guidelines have been "),te=i("strong"),pt=r("ease of use"),ct=r(", and "),oe=i("strong"),dt=r("flexibility"),mt=r(". ProjectIt may not (yet "),I=i("img"),ut=r(`) do
everything you need, but what it does, should be very easy to get into. Furthermore,
ProjectIt is designed to be `),re=i("strong"),vt=r("extendable"),gt=r(", and "),ne=i("strong"),bt=r("easy to integrate with other tooling"),yt=r(`.
In practise this means that:`),Oe=f(),g=i("ul"),R=i("li"),wt=r("Every part of the work environment that is generated, can be "),ie=i("em"),Et=r("exchanged"),_t=r(` for one
that suits the language engineer better, provided the right interface is implemented.`),Pt=f(),M=i("li"),kt=r(`Every part of the work environment is made by its own generator, so you can adjust which
parts you want to generate and which parts you `),ae=i("em"),xt=r("omit"),It=r("."),Ot=f(),G=i("li"),Tt=r(`The different parts of the work environment can be run on either the server or the client.
Thus creating `),le=i("em"),jt=r("multiple deployment options"),At=r("."),Te=f(),b=i("p"),St=r(`With these principles in mind, we have started of small and simple. Every definition language,
from the language structure to the validation rules, is kept `),se=i("strong"),Rt=r("minimal"),Mt=r(". Over time, in an "),he=i("strong"),Gt=r("agile"),qt=r(`
fashion, these will be extended whenever the need arises.`),je=f(),y=i("p"),Nt=r("Furthermore, we intend to use "),fe=i("strong"),Lt=r("bootstrapping"),Dt=r(` in one of the next versions of ProjectIt
to create editors for every one of the definition languages. If you are interested, you can
check out our `),H=i("a"),Ft=r("wish list"),Ht=r(" of features to be developed in the future."),Ae=f(),K=i("h2"),Kt=r("Name-Based References"),Se=f(),m=i("p"),Ut=r("In "),U=i("a"),Ct=r("Support for Expressions"),Wt=r(` we explain
that editing expressions is a known challenge for projectional editors. A second challenge
is posed by `),pe=i("em"),Bt=r("references"),Qt=r(", which is stated in "),q=i("a"),Vt=r("Efficiency of Projectional Editing: A Controlled Experiment"),Jt=r(" as follows."),Re=f(),Me=i("hr"),Ge=f(),w=i("blockquote"),C=i("p"),ce=i("strong"),zt=r("References."),Xt=r(`
References are based on pointers to the targetnode\u2019s ID. Despite some advantages (e.g., robust
refactorings) of this approach, we observe problems with the tradeoff that the reference target
has to exist at the time the reference is created.  A more robust and intuitive handling of
references is desirable.  While some problems can be solved by language developers (e.g.,
quick fixes to create reference targets), there should be a better way to support references
by the IDE itself.`),Yt=f(),de=i("p"),Zt=r("[Markus Voelter a.o., Efficiency of Projectional Editing]"),$t=f(),eo=i("hr"),qe=f(),O=i("p"),to=r(`This is the reason that in ProjectIt we allow only name-based references, which are resolved
on a need-to basis. Every reference is
an instance of the class `),me=i("code"),oo=r("PiElementReference"),ro=r(", which holds:"),Ne=f(),E=i("ul"),ue=i("li"),no=r("the name or path (i.e. a list of names) of the referred element"),io=f(),ve=i("li"),ao=r("the meta-type of the referred element"),lo=f(),ge=i("li"),so=r("a cache of the element itself"),Le=f(),T=i("p"),ho=r(`This means that the AST is truly a tree, not a graph. One advantage is that we are not obliged
to have the complete model in memory. Our use of
multi-file models is explained in `),W=i("a"),fo=r("Models and Model Units"),po=r("."),this.h()},l(e){_=a(e,"H1",{});var s=l(_);Be=n(s,"Our Philosophy"),s.forEach(o),ye=p(e),N=a(e,"P",{});var vo=l(N);Qe=n(vo,`The design philosophy that we follow in ProjectIt can best be described by the following quote from
the well-known graphical user interface designer Alan Kay.`),vo.forEach(o),we=p(e),L=a(e,"BLOCKQUOTE",{});var go=l(L);P=a(go,"P",{});var be=l(P);Y=a(be,"EM",{});var bo=l(Y);Ve=n(bo,"Simple things should be simple, complex things should be possible."),bo.forEach(o),Je=n(be,`
(`),A=a(be,"A",{href:!0,target:!0});var yo=l(A);ze=n(yo,"Alan Kay, Turing Award Winner"),yo.forEach(o),Xe=n(be,")"),be.forEach(o),go.forEach(o),Ee=p(e),D=a(e,"H2",{});var wo=l(D);Ye=n(wo,"The Pareto Principle"),wo.forEach(o),_e=p(e),k=a(e,"P",{});var De=l(k);Ze=n(De,`ProjectIt is a minimal viable product which supports the
language engineer in creating a work environment for a mini-language. A key principle
is the `),S=a(De,"A",{href:!0,target:!0});var Eo=l(S);$e=n(Eo,"Pareto principle"),Eo.forEach(o),et=n(De,`
(or 80%-20% rule),
which states that for many events, roughly 80% of the effects come from 20% of the causes.
For example, it is an axiom of business  management that \u201C80% of sales come from 20% of clients\u201D.`),De.forEach(o),Pe=p(e),x=a(e,"P",{});var Fe=l(x);tt=n(Fe,"In software development the Pareto principle translates to \u201C"),Z=a(Fe,"EM",{});var _o=l(Z);ot=n(_o,`80% of the development
effort is spend on 20% of the application`),_o.forEach(o),rt=n(Fe,`\u201D, this 20% being the more complex parts.
Still, the other 80% of the application needs to be created as well.`),Fe.forEach(o),ke=p(e),v=a(e,"P",{});var B=l(v);nt=n(B,`ProjectIt aims to
make the latter `),$=a(B,"STRONG",{});var Po=l($);it=n(Po,"as simple as possible"),Po.forEach(o),at=n(B,", while keeping the generated code "),ee=a(B,"STRONG",{});var ko=l(ee);lt=n(ko,"open"),ko.forEach(o),st=n(B,` for the
language engineer to code the more complex parts by hand. One of our use cases is the
creation of a prototype language in a day or in a couple of days at most.`),B.forEach(o),xe=p(e),F=a(e,"H2",{});var xo=l(F);ht=n(xo,"Other Guidelines"),xo.forEach(o),Ie=p(e),c=a(e,"P",{});var u=l(c);ft=n(u,"Other guidelines have been "),te=a(u,"STRONG",{});var Io=l(te);pt=n(Io,"ease of use"),Io.forEach(o),ct=n(u,", and "),oe=a(u,"STRONG",{});var Oo=l(oe);dt=n(Oo,"flexibility"),Oo.forEach(o),mt=n(u,". ProjectIt may not (yet "),I=a(u,"IMG",{src:!0,alt:!0,width:!0,height:!0}),ut=n(u,`) do
everything you need, but what it does, should be very easy to get into. Furthermore,
ProjectIt is designed to be `),re=a(u,"STRONG",{});var To=l(re);vt=n(To,"extendable"),To.forEach(o),gt=n(u,", and "),ne=a(u,"STRONG",{});var jo=l(ne);bt=n(jo,"easy to integrate with other tooling"),jo.forEach(o),yt=n(u,`.
In practise this means that:`),u.forEach(o),Oe=p(e),g=a(e,"UL",{});var Q=l(g);R=a(Q,"LI",{});var He=l(R);wt=n(He,"Every part of the work environment that is generated, can be "),ie=a(He,"EM",{});var Ao=l(ie);Et=n(Ao,"exchanged"),Ao.forEach(o),_t=n(He,` for one
that suits the language engineer better, provided the right interface is implemented.`),He.forEach(o),Pt=p(Q),M=a(Q,"LI",{});var Ke=l(M);kt=n(Ke,`Every part of the work environment is made by its own generator, so you can adjust which
parts you want to generate and which parts you `),ae=a(Ke,"EM",{});var So=l(ae);xt=n(So,"omit"),So.forEach(o),It=n(Ke,"."),Ke.forEach(o),Ot=p(Q),G=a(Q,"LI",{});var Ue=l(G);Tt=n(Ue,`The different parts of the work environment can be run on either the server or the client.
Thus creating `),le=a(Ue,"EM",{});var Ro=l(le);jt=n(Ro,"multiple deployment options"),Ro.forEach(o),At=n(Ue,"."),Ue.forEach(o),Q.forEach(o),Te=p(e),b=a(e,"P",{});var V=l(b);St=n(V,`With these principles in mind, we have started of small and simple. Every definition language,
from the language structure to the validation rules, is kept `),se=a(V,"STRONG",{});var Mo=l(se);Rt=n(Mo,"minimal"),Mo.forEach(o),Mt=n(V,". Over time, in an "),he=a(V,"STRONG",{});var Go=l(he);Gt=n(Go,"agile"),Go.forEach(o),qt=n(V,`
fashion, these will be extended whenever the need arises.`),V.forEach(o),je=p(e),y=a(e,"P",{});var J=l(y);Nt=n(J,"Furthermore, we intend to use "),fe=a(J,"STRONG",{});var qo=l(fe);Lt=n(qo,"bootstrapping"),qo.forEach(o),Dt=n(J,` in one of the next versions of ProjectIt
to create editors for every one of the definition languages. If you are interested, you can
check out our `),H=a(J,"A",{href:!0});var No=l(H);Ft=n(No,"wish list"),No.forEach(o),Ht=n(J," of features to be developed in the future."),J.forEach(o),Ae=p(e),K=a(e,"H2",{});var Lo=l(K);Kt=n(Lo,"Name-Based References"),Lo.forEach(o),Se=p(e),m=a(e,"P",{});var j=l(m);Ut=n(j,"In "),U=a(j,"A",{href:!0});var Do=l(U);Ct=n(Do,"Support for Expressions"),Do.forEach(o),Wt=n(j,` we explain
that editing expressions is a known challenge for projectional editors. A second challenge
is posed by `),pe=a(j,"EM",{});var Fo=l(pe);Bt=n(Fo,"references"),Fo.forEach(o),Qt=n(j,", which is stated in "),q=a(j,"A",{href:!0,target:!0});var Ho=l(q);Vt=n(Ho,"Efficiency of Projectional Editing: A Controlled Experiment"),Ho.forEach(o),Jt=n(j," as follows."),j.forEach(o),Re=p(e),Me=a(e,"HR",{}),Ge=p(e),w=a(e,"BLOCKQUOTE",{});var z=l(w);C=a(z,"P",{});var co=l(C);ce=a(co,"STRONG",{});var Ko=l(ce);zt=n(Ko,"References."),Ko.forEach(o),Xt=n(co,`
References are based on pointers to the targetnode\u2019s ID. Despite some advantages (e.g., robust
refactorings) of this approach, we observe problems with the tradeoff that the reference target
has to exist at the time the reference is created.  A more robust and intuitive handling of
references is desirable.  While some problems can be solved by language developers (e.g.,
quick fixes to create reference targets), there should be a better way to support references
by the IDE itself.`),co.forEach(o),Yt=p(z),de=a(z,"P",{});var Uo=l(de);Zt=n(Uo,"[Markus Voelter a.o., Efficiency of Projectional Editing]"),Uo.forEach(o),$t=p(z),eo=a(z,"HR",{}),z.forEach(o),qe=p(e),O=a(e,"P",{});var Ce=l(O);to=n(Ce,`This is the reason that in ProjectIt we allow only name-based references, which are resolved
on a need-to basis. Every reference is
an instance of the class `),me=a(Ce,"CODE",{});var Co=l(me);oo=n(Co,"PiElementReference"),Co.forEach(o),ro=n(Ce,", which holds:"),Ce.forEach(o),Ne=p(e),E=a(e,"UL",{});var X=l(E);ue=a(X,"LI",{});var Wo=l(ue);no=n(Wo,"the name or path (i.e. a list of names) of the referred element"),Wo.forEach(o),io=p(X),ve=a(X,"LI",{});var Bo=l(ve);ao=n(Bo,"the meta-type of the referred element"),Bo.forEach(o),lo=p(X),ge=a(X,"LI",{});var Qo=l(ge);so=n(Qo,"a cache of the element itself"),Qo.forEach(o),X.forEach(o),Le=p(e),T=a(e,"P",{});var We=l(T);ho=n(We,`This means that the AST is truly a tree, not a graph. One advantage is that we are not obliged
to have the complete model in memory. Our use of
multi-file models is explained in `),W=a(We,"A",{href:!0});var Vo=l(W);fo=n(Vo,"Models and Model Units"),Vo.forEach(o),po=n(We,"."),We.forEach(o),this.h()},h(){d(A,"href","https://en.wikipedia.org/wiki/Alan_Kay"),d(A,"target","_blank"),d(S,"href","https://en.wikipedia.org/wiki/Pareto*principle"),d(S,"target","_blank"),Zo(I.src,uo="/images/smile.png")||d(I,"src",uo),d(I,"alt","OOPS"),d(I,"width","20"),d(I,"height","20"),d(H,"href","/010_Intro/090_Future_Developments"),d(U,"href","/010_Intro/010_Projectional_Editing#expressions"),d(q,"href","https://www.voelter.de/data/pub/fse2016-projEditing.pdf"),d(q,"target","_blank"),d(W,"href","/010_Intro/030_Models_and_Model_Units")},m(e,s){h(e,_,s),t(_,Be),h(e,ye,s),h(e,N,s),t(N,Qe),h(e,we,s),h(e,L,s),t(L,P),t(P,Y),t(Y,Ve),t(P,Je),t(P,A),t(A,ze),t(P,Xe),h(e,Ee,s),h(e,D,s),t(D,Ye),h(e,_e,s),h(e,k,s),t(k,Ze),t(k,S),t(S,$e),t(k,et),h(e,Pe,s),h(e,x,s),t(x,tt),t(x,Z),t(Z,ot),t(x,rt),h(e,ke,s),h(e,v,s),t(v,nt),t(v,$),t($,it),t(v,at),t(v,ee),t(ee,lt),t(v,st),h(e,xe,s),h(e,F,s),t(F,ht),h(e,Ie,s),h(e,c,s),t(c,ft),t(c,te),t(te,pt),t(c,ct),t(c,oe),t(oe,dt),t(c,mt),t(c,I),t(c,ut),t(c,re),t(re,vt),t(c,gt),t(c,ne),t(ne,bt),t(c,yt),h(e,Oe,s),h(e,g,s),t(g,R),t(R,wt),t(R,ie),t(ie,Et),t(R,_t),t(g,Pt),t(g,M),t(M,kt),t(M,ae),t(ae,xt),t(M,It),t(g,Ot),t(g,G),t(G,Tt),t(G,le),t(le,jt),t(G,At),h(e,Te,s),h(e,b,s),t(b,St),t(b,se),t(se,Rt),t(b,Mt),t(b,he),t(he,Gt),t(b,qt),h(e,je,s),h(e,y,s),t(y,Nt),t(y,fe),t(fe,Lt),t(y,Dt),t(y,H),t(H,Ft),t(y,Ht),h(e,Ae,s),h(e,K,s),t(K,Kt),h(e,Se,s),h(e,m,s),t(m,Ut),t(m,U),t(U,Ct),t(m,Wt),t(m,pe),t(pe,Bt),t(m,Qt),t(m,q),t(q,Vt),t(m,Jt),h(e,Re,s),h(e,Me,s),h(e,Ge,s),h(e,w,s),t(w,C),t(C,ce),t(ce,zt),t(C,Xt),t(w,Yt),t(w,de),t(de,Zt),t(w,$t),t(w,eo),h(e,qe,s),h(e,O,s),t(O,to),t(O,me),t(me,oo),t(O,ro),h(e,Ne,s),h(e,E,s),t(E,ue),t(ue,no),t(E,io),t(E,ve),t(ve,ao),t(E,lo),t(E,ge),t(ge,so),h(e,Le,s),h(e,T,s),t(T,ho),t(T,W),t(W,fo),t(T,po)},p:mo,i:mo,o:mo,d(e){e&&o(_),e&&o(ye),e&&o(N),e&&o(we),e&&o(L),e&&o(Ee),e&&o(D),e&&o(_e),e&&o(k),e&&o(Pe),e&&o(x),e&&o(ke),e&&o(v),e&&o(xe),e&&o(F),e&&o(Ie),e&&o(c),e&&o(Oe),e&&o(g),e&&o(Te),e&&o(b),e&&o(je),e&&o(y),e&&o(Ae),e&&o(K),e&&o(Se),e&&o(m),e&&o(Re),e&&o(Me),e&&o(Ge),e&&o(w),e&&o(qe),e&&o(O),e&&o(Ne),e&&o(E),e&&o(Le),e&&o(T)}}}class tr extends zo{constructor(_){super();Xo(this,_,null,$o,Yo,{})}}export{tr as default};
