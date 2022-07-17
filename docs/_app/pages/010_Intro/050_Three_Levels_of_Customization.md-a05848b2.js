import{S as io,i as oo,s as so,Z as It,a4 as Nt,e as l,t as n,k as s,w as Zi,c as i,a as o,h as a,d as r,m as d,x as Ji,b as f,g as u,H as e,y as Qi,a5 as jt,q as Ui,o as Vi,B as Xi}from"../../chunks/vendor-0dc77bd0.js";import{F as xi}from"../../chunks/Figure-4dd15a94.js";/* empty css                                                        */function fo(g){let M,H,q,E,se,G,de,fe,_e,y,Rt,he,St,Ft,v,Tr,Dr,Qt,C,wr,Ot,kr,Lr,ue,Pr,Ar,Ut,T,Ir,Nr,jr,Vt,me,Rr,Xt,b,Sr,Ht,Fr,Or,Hr,Cr,Ee,$r,zr,xt,ye,Mr,er,_,Gr,Ct,Wr,Kr,$t,qr,Br,zt,Yr,Zr,Mt,Jr,Qr,Gt,Ur,Vr,be,Xr,xr,tr,Te,en,rr,$,tn,Wt,rn,nn,De,an,ln,nr,we,on,ar,B,sn,ke,Kt,dn,fn,lr,z,ce,hn,qt,un,cn,pn,pe,gn,Bt,vn,_n,mn,W,En,Yt,yn,bn,Zt,Tn,Dn,ir,Le,wn,or,D,kn,Ln,Pn,sr,Pe,An,dr,Ae,In,fr,Y,Nn,Ie,jn,Rn,hr,Z,Jt,w,Ne,Sn,Fn,je,On,Hn,Re,Cn,$n,Se,zn,Mn,c,k,Fe,Gn,Wn,Oe,Kn,qn,He,Bn,Yn,Ce,Zn,Jn,L,$e,Qn,Un,ze,Vn,Xn,Me,xn,ea,Ge,ta,ra,P,We,na,aa,Ke,la,ia,qe,oa,sa,Be,da,fa,A,Ye,ha,ua,Ze,ca,pa,Je,ga,va,Qe,_a,ma,I,Ue,Ea,ya,Ve,ba,Ta,Xe,Da,wa,xe,ka,La,N,et,Pa,Aa,tt,Ia,Na,rt,ja,Ra,nt,Sa,Fa,j,at,Oa,Ha,lt,Ca,$a,it,za,Ma,J,Ga,ge,Wa,Ka,qa,R,ot,Ba,Ya,st,Za,Ja,dt,Qa,Ua,ft,Va,Xa,S,ht,xa,el,ut,tl,rl,ct,nl,al,pt,ll,il,F,gt,ol,sl,vt,dl,fl,_t,hl,ul,mt,cl,pl,O,Et,gl,vl,yt,_l,ml,bt,El,yl,Tt,bl,ur,Dt,Tl,cr;function eo(t){g[6](t)}function to(t){g[7](t)}function ro(t){g[8](t)}let pr={};g[0]!==void 0&&(pr.imageName=g[0]),g[1]!==void 0&&(pr.caption=g[1]),g[2]!==void 0&&(pr.figureNumber=g[2]),T=new xi({props:pr}),It.push(()=>Nt(T,"imageName",eo)),It.push(()=>Nt(T,"caption",to)),It.push(()=>Nt(T,"figureNumber",ro));function no(t){g[9](t)}function ao(t){g[10](t)}function lo(t){g[11](t)}let gr={};return g[3]!==void 0&&(gr.imageName=g[3]),g[4]!==void 0&&(gr.caption=g[4]),g[5]!==void 0&&(gr.figureNumber=g[5]),D=new xi({props:gr}),It.push(()=>Nt(D,"imageName",no)),It.push(()=>Nt(D,"caption",ao)),It.push(()=>Nt(D,"figureNumber",lo)),{c(){M=l("h1"),H=n("Three Levels to Customize ProjectIt"),q=s(),E=l("p"),se=n(`From the five parts of the language definition, ProjectIt generates a work environment
containing an editor, a scope provider or scoper, a type provider or typer, a validator,
a standard library, and some utilities like a parser/deparser.
All of these are separate components that are called `),G=l("strong"),de=n("pi-tools"),fe=n("."),_e=s(),y=l("p"),Rt=n(`You, the language engineer, can fine-tune the generated pi-tools at several levels.
We call this manner of fine-tuning: a `),he=l("strong"),St=n("stacked architecture"),Ft=n(`.
This three-level approach makes it possible to create your language,
and customize it step-by-step in an agile fashion.
(Read our `),v=l("a"),Tr=n("philosophy"),Dr=n(" to understand why we have chosen these levels.)"),Qt=s(),C=l("p"),wr=n("Keeping in mind that "),Ot=l("em"),kr=n("Simple things should be simple, complex things should be possible"),Lr=n(`
(`),ue=l("a"),Pr=n("Alan Kay"),Ar=n(`),
we use the following levels of customization.`),Ut=s(),Zi(T.$$.fragment),Vt=s(),me=l("h3"),Rr=n("Default Level"),Xt=s(),b=l("p"),Sr=n("The "),Ht=l("em"),Fr=n("first or default level"),Or=n(` (colored light-grey in the above figure), is based solely on the
metamodel definition in the .ast file. Defaults are
generated for every part of the workbench. For instance, the default scoper simply finds
that every name in a model is visible everywhere. At this level you already have a
fully working environment for your language.`),Hr=l("br"),Cr=n(`
See how you can define the metamodel, or language structure in `),Ee=l("a"),$r=n("Default Level"),zr=n("."),xt=s(),ye=l("h3"),Mr=n("Definition Level"),er=s(),_=l("p"),Gr=n("In the "),Ct=l("em"),Wr=n("second or definition level"),Kr=n("  (colored medium grey in the above figure), the other definitions (in the "),$t=l("code"),qr=n(".edit"),Br=n(", "),zt=l("code"),Yr=n(".scope"),Zr=n(", "),Mt=l("code"),Jr=n(".valid"),Qr=n(", and "),Gt=l("code"),Ur=n(".type"),Vr=n(` files), when present,
are taken into account. When, for instance, a definition for the editor is provided,
it is used to generate a more suitable concrete syntax in the editor, the parser, and the unparser.
The concrete syntax could be more concise, using certain keywords etc. More on how to
utilize the second level can be found in `),be=l("a"),Xr=n("Definition Level"),xr=n("."),tr=s(),Te=l("h3"),en=n("API Level"),rr=s(),$=l("p"),tn=n("The "),Wt=l("em"),rn=n("third or API level"),nn=n(` (colored black in the above figure), takes hand-coding in TypeScript,
but produces a result that is extremely adjusted to your needs. More on how to make use of this
level, e.g. how to use the core editor framework of ProjectIt,
can be found in `),De=l("a"),an=n("API Level"),ln=n("."),nr=s(),we=l("h2"),on=n("Combining the Three Levels into One Application"),ar=s(),B=l("p"),sn=n(`ProjectIt combines definitions at each level into one application, where the third level precedes the second, and
the second level precedes the first.
For instance, the generated editor will per `),ke=l("a"),Kt=l("strong"),dn=n("concept"),fn=n(" in the language:"),lr=s(),z=l("ol"),ce=l("li"),hn=n("use the "),qt=l("em"),un=n("hand-made projection"),cn=n(" from the API level, when this is present. If not, the editor will"),pn=s(),pe=l("li"),gn=n("use the "),Bt=l("em"),vn=n("projection generated from the editor definition"),_n=n(` from the ProjectIt definition Level, when this definition is present.
Finally, when no definition is present, the editor will`),mn=s(),W=l("li"),En=n("use the "),Yt=l("em"),yn=n("default projection"),bn=n(" from the default level, the one generated when no "),Zt=l("code"),Tn=n(".edit"),Dn=n(" definition file is present."),ir=s(),Le=l("p"),wn=n(`This allows the language engineer to start quickly with a working (but somewhat rough) language environment
and piece by piece refine this on either the second or the third level.`),or=s(),Zi(D.$$.fragment),sr=s(),Pe=l("p"),An=n(`At the time of writing this approach is implemented for the editor, validator, and typer, in future this
will also apply to the scoper, the parser, and the unparser.`),dr=s(),Ae=l("h1"),In=n("Overview of the Generated Pi-tools and Their Customizability"),fr=s(),Y=l("p"),Nn=n(`ProjectIt generates an integrated set of tools that support the language that you are creating.
This table gives an overview of these tools, and shows how you can adjust them to your needs.
See `),Ie=l("a"),jn=n("The Five Definition Files"),Rn=n(` for an explanation of the parts
of the language definition.`),hr=s(),Z=l("table"),Jt=l("thead"),w=l("tr"),Ne=l("th"),Sn=n("Workbench Part"),Fn=s(),je=l("th"),On=n("Has Default"),Hn=s(),Re=l("th"),Cn=n("Level 2 Definition"),$n=s(),Se=l("th"),zn=n("Level 3 Definition"),Mn=s(),c=l("tbody"),k=l("tr"),Fe=l("td"),Gn=n("language structure"),Wn=s(),Oe=l("td"),Kn=n("no"),qn=s(),He=l("td"),Bn=n(".ast"),Yn=s(),Ce=l("td"),Zn=n("no"),Jn=s(),L=l("tr"),$e=l("td"),Qn=n("projectional editor"),Un=s(),ze=l("td"),Vn=n("yes"),Xn=s(),Me=l("td"),xn=n(".edit"),ea=s(),Ge=l("td"),ta=n("yes"),ra=s(),P=l("tr"),We=l("td"),na=n("scope provider"),aa=s(),Ke=l("td"),la=n("yes"),ia=s(),qe=l("td"),oa=n(".scope"),sa=s(),Be=l("td"),da=n("not yet"),fa=s(),A=l("tr"),Ye=l("td"),ha=n("validator"),ua=s(),Ze=l("td"),ca=n("yes"),pa=s(),Je=l("td"),ga=n(".valid"),va=s(),Qe=l("td"),_a=n("yes"),ma=s(),I=l("tr"),Ue=l("td"),Ea=n("type provider"),ya=s(),Ve=l("td"),ba=n("yes"),Ta=s(),Xe=l("td"),Da=n(".type"),wa=s(),xe=l("td"),ka=n("not yet"),La=s(),N=l("tr"),et=l("td"),Pa=n("standard library"),Aa=s(),tt=l("td"),Ia=n("yes"),Na=s(),rt=l("td"),ja=n(".ast"),Ra=s(),nt=l("td"),Sa=n("not yet"),Fa=s(),j=l("tr"),at=l("td"),Oa=n("parser"),Ha=s(),lt=l("td"),Ca=n("yes"),$a=s(),it=l("td"),za=n(".edit"),Ma=s(),J=l("td"),Ga=n("yes (using ("),ge=l("a"),Wa=n("AGL"),Ka=n("))"),qa=s(),R=l("tr"),ot=l("td"),Ba=n("unparser"),Ya=s(),st=l("td"),Za=n("yes"),Ja=s(),dt=l("td"),Qa=n(".edit"),Ua=s(),ft=l("td"),Va=n("not yet"),Xa=s(),S=l("tr"),ht=l("td"),xa=n("json exporter/importer"),el=s(),ut=l("td"),tl=n("yes"),rl=s(),ct=l("td"),nl=n(".ast"),al=s(),pt=l("td"),ll=n("no"),il=s(),F=l("tr"),gt=l("td"),ol=n("visitor pattern implementation"),sl=s(),vt=l("td"),dl=n("yes"),fl=s(),_t=l("td"),hl=n(".ast"),ul=s(),mt=l("td"),cl=n("can be extended"),pl=s(),O=l("tr"),Et=l("td"),gl=n("web application"),vl=s(),yt=l("td"),_l=n("yes"),ml=s(),bt=l("td"),El=n("none available"),yl=s(),Tt=l("td"),bl=n("can be changed or replaced"),ur=s(),Dt=l("p"),Tl=n("If you are using ProjectIt, and are missing a specific tool or feature, please let us know through info AT projectit.org."),this.h()},l(t){M=i(t,"H1",{});var h=o(M);H=a(h,"Three Levels to Customize ProjectIt"),h.forEach(r),q=d(t),E=i(t,"P",{});var K=o(E);se=a(K,`From the five parts of the language definition, ProjectIt generates a work environment
containing an editor, a scope provider or scoper, a type provider or typer, a validator,
a standard library, and some utilities like a parser/deparser.
All of these are separate components that are called `),G=i(K,"STRONG",{});var ve=o(G);de=a(ve,"pi-tools"),ve.forEach(r),fe=a(K,"."),K.forEach(r),_e=d(t),y=i(t,"P",{});var wt=o(y);Rt=a(wt,`You, the language engineer, can fine-tune the generated pi-tools at several levels.
We call this manner of fine-tuning: a `),he=i(wt,"STRONG",{});var Dl=o(he);St=a(Dl,"stacked architecture"),Dl.forEach(r),Ft=a(wt,`.
This three-level approach makes it possible to create your language,
and customize it step-by-step in an agile fashion.
(Read our `),v=i(wt,"A",{href:!0});var wl=o(v);Tr=a(wl,"philosophy"),wl.forEach(r),Dr=a(wt," to understand why we have chosen these levels.)"),wt.forEach(r),Qt=d(t),C=i(t,"P",{});var kt=o(C);wr=a(kt,"Keeping in mind that "),Ot=i(kt,"EM",{});var kl=o(Ot);kr=a(kl,"Simple things should be simple, complex things should be possible"),kl.forEach(r),Lr=a(kt,`
(`),ue=i(kt,"A",{href:!0,target:!0});var Ll=o(ue);Pr=a(Ll,"Alan Kay"),Ll.forEach(r),Ar=a(kt,`),
we use the following levels of customization.`),kt.forEach(r),Ut=d(t),Ji(T.$$.fragment,t),Vt=d(t),me=i(t,"H3",{});var Pl=o(me);Rr=a(Pl,"Default Level"),Pl.forEach(r),Xt=d(t),b=i(t,"P",{});var Q=o(b);Sr=a(Q,"The "),Ht=i(Q,"EM",{});var Al=o(Ht);Fr=a(Al,"first or default level"),Al.forEach(r),Or=a(Q,` (colored light-grey in the above figure), is based solely on the
metamodel definition in the .ast file. Defaults are
generated for every part of the workbench. For instance, the default scoper simply finds
that every name in a model is visible everywhere. At this level you already have a
fully working environment for your language.`),Hr=i(Q,"BR",{}),Cr=a(Q,`
See how you can define the metamodel, or language structure in `),Ee=i(Q,"A",{href:!0});var Il=o(Ee);$r=a(Il,"Default Level"),Il.forEach(r),zr=a(Q,"."),Q.forEach(r),xt=d(t),ye=i(t,"H3",{});var Nl=o(ye);Mr=a(Nl,"Definition Level"),Nl.forEach(r),er=d(t),_=i(t,"P",{});var m=o(_);Gr=a(m,"In the "),Ct=i(m,"EM",{});var jl=o(Ct);Wr=a(jl,"second or definition level"),jl.forEach(r),Kr=a(m,"  (colored medium grey in the above figure), the other definitions (in the "),$t=i(m,"CODE",{});var Rl=o($t);qr=a(Rl,".edit"),Rl.forEach(r),Br=a(m,", "),zt=i(m,"CODE",{});var Sl=o(zt);Yr=a(Sl,".scope"),Sl.forEach(r),Zr=a(m,", "),Mt=i(m,"CODE",{});var Fl=o(Mt);Jr=a(Fl,".valid"),Fl.forEach(r),Qr=a(m,", and "),Gt=i(m,"CODE",{});var Ol=o(Gt);Ur=a(Ol,".type"),Ol.forEach(r),Vr=a(m,` files), when present,
are taken into account. When, for instance, a definition for the editor is provided,
it is used to generate a more suitable concrete syntax in the editor, the parser, and the unparser.
The concrete syntax could be more concise, using certain keywords etc. More on how to
utilize the second level can be found in `),be=i(m,"A",{href:!0});var Hl=o(be);Xr=a(Hl,"Definition Level"),Hl.forEach(r),xr=a(m,"."),m.forEach(r),tr=d(t),Te=i(t,"H3",{});var Cl=o(Te);en=a(Cl,"API Level"),Cl.forEach(r),rr=d(t),$=i(t,"P",{});var Lt=o($);tn=a(Lt,"The "),Wt=i(Lt,"EM",{});var $l=o(Wt);rn=a($l,"third or API level"),$l.forEach(r),nn=a(Lt,` (colored black in the above figure), takes hand-coding in TypeScript,
but produces a result that is extremely adjusted to your needs. More on how to make use of this
level, e.g. how to use the core editor framework of ProjectIt,
can be found in `),De=i(Lt,"A",{href:!0});var zl=o(De);an=a(zl,"API Level"),zl.forEach(r),ln=a(Lt,"."),Lt.forEach(r),nr=d(t),we=i(t,"H2",{});var Ml=o(we);on=a(Ml,"Combining the Three Levels into One Application"),Ml.forEach(r),ar=d(t),B=i(t,"P",{});var vr=o(B);sn=a(vr,`ProjectIt combines definitions at each level into one application, where the third level precedes the second, and
the second level precedes the first.
For instance, the generated editor will per `),ke=i(vr,"A",{href:!0});var Gl=o(ke);Kt=i(Gl,"STRONG",{});var Wl=o(Kt);dn=a(Wl,"concept"),Wl.forEach(r),Gl.forEach(r),fn=a(vr," in the language:"),vr.forEach(r),lr=d(t),z=i(t,"OL",{});var Pt=o(z);ce=i(Pt,"LI",{});var _r=o(ce);hn=a(_r,"use the "),qt=i(_r,"EM",{});var Kl=o(qt);un=a(Kl,"hand-made projection"),Kl.forEach(r),cn=a(_r," from the API level, when this is present. If not, the editor will"),_r.forEach(r),pn=d(Pt),pe=i(Pt,"LI",{});var mr=o(pe);gn=a(mr,"use the "),Bt=i(mr,"EM",{});var ql=o(Bt);vn=a(ql,"projection generated from the editor definition"),ql.forEach(r),_n=a(mr,` from the ProjectIt definition Level, when this definition is present.
Finally, when no definition is present, the editor will`),mr.forEach(r),mn=d(Pt),W=i(Pt,"LI",{});var At=o(W);En=a(At,"use the "),Yt=i(At,"EM",{});var Bl=o(Yt);yn=a(Bl,"default projection"),Bl.forEach(r),bn=a(At," from the default level, the one generated when no "),Zt=i(At,"CODE",{});var Yl=o(Zt);Tn=a(Yl,".edit"),Yl.forEach(r),Dn=a(At," definition file is present."),At.forEach(r),Pt.forEach(r),ir=d(t),Le=i(t,"P",{});var Zl=o(Le);wn=a(Zl,`This allows the language engineer to start quickly with a working (but somewhat rough) language environment
and piece by piece refine this on either the second or the third level.`),Zl.forEach(r),or=d(t),Ji(D.$$.fragment,t),sr=d(t),Pe=i(t,"P",{});var Jl=o(Pe);An=a(Jl,`At the time of writing this approach is implemented for the editor, validator, and typer, in future this
will also apply to the scoper, the parser, and the unparser.`),Jl.forEach(r),dr=d(t),Ae=i(t,"H1",{});var Ql=o(Ae);In=a(Ql,"Overview of the Generated Pi-tools and Their Customizability"),Ql.forEach(r),fr=d(t),Y=i(t,"P",{});var Er=o(Y);Nn=a(Er,`ProjectIt generates an integrated set of tools that support the language that you are creating.
This table gives an overview of these tools, and shows how you can adjust them to your needs.
See `),Ie=i(Er,"A",{href:!0});var Ul=o(Ie);jn=a(Ul,"The Five Definition Files"),Ul.forEach(r),Rn=a(Er,` for an explanation of the parts
of the language definition.`),Er.forEach(r),hr=d(t),Z=i(t,"TABLE",{});var yr=o(Z);Jt=i(yr,"THEAD",{});var Vl=o(Jt);w=i(Vl,"TR",{});var U=o(w);Ne=i(U,"TH",{align:!0});var Xl=o(Ne);Sn=a(Xl,"Workbench Part"),Xl.forEach(r),Fn=d(U),je=i(U,"TH",{align:!0});var xl=o(je);On=a(xl,"Has Default"),xl.forEach(r),Hn=d(U),Re=i(U,"TH",{align:!0});var ei=o(Re);Cn=a(ei,"Level 2 Definition"),ei.forEach(r),$n=d(U),Se=i(U,"TH",{align:!0});var ti=o(Se);zn=a(ti,"Level 3 Definition"),ti.forEach(r),U.forEach(r),Vl.forEach(r),Mn=d(yr),c=i(yr,"TBODY",{});var p=o(c);k=i(p,"TR",{});var V=o(k);Fe=i(V,"TD",{align:!0});var ri=o(Fe);Gn=a(ri,"language structure"),ri.forEach(r),Wn=d(V),Oe=i(V,"TD",{align:!0});var ni=o(Oe);Kn=a(ni,"no"),ni.forEach(r),qn=d(V),He=i(V,"TD",{align:!0});var ai=o(He);Bn=a(ai,".ast"),ai.forEach(r),Yn=d(V),Ce=i(V,"TD",{align:!0});var li=o(Ce);Zn=a(li,"no"),li.forEach(r),V.forEach(r),Jn=d(p),L=i(p,"TR",{});var X=o(L);$e=i(X,"TD",{align:!0});var ii=o($e);Qn=a(ii,"projectional editor"),ii.forEach(r),Un=d(X),ze=i(X,"TD",{align:!0});var oi=o(ze);Vn=a(oi,"yes"),oi.forEach(r),Xn=d(X),Me=i(X,"TD",{align:!0});var si=o(Me);xn=a(si,".edit"),si.forEach(r),ea=d(X),Ge=i(X,"TD",{align:!0});var di=o(Ge);ta=a(di,"yes"),di.forEach(r),X.forEach(r),ra=d(p),P=i(p,"TR",{});var x=o(P);We=i(x,"TD",{align:!0});var fi=o(We);na=a(fi,"scope provider"),fi.forEach(r),aa=d(x),Ke=i(x,"TD",{align:!0});var hi=o(Ke);la=a(hi,"yes"),hi.forEach(r),ia=d(x),qe=i(x,"TD",{align:!0});var ui=o(qe);oa=a(ui,".scope"),ui.forEach(r),sa=d(x),Be=i(x,"TD",{align:!0});var ci=o(Be);da=a(ci,"not yet"),ci.forEach(r),x.forEach(r),fa=d(p),A=i(p,"TR",{});var ee=o(A);Ye=i(ee,"TD",{align:!0});var pi=o(Ye);ha=a(pi,"validator"),pi.forEach(r),ua=d(ee),Ze=i(ee,"TD",{align:!0});var gi=o(Ze);ca=a(gi,"yes"),gi.forEach(r),pa=d(ee),Je=i(ee,"TD",{align:!0});var vi=o(Je);ga=a(vi,".valid"),vi.forEach(r),va=d(ee),Qe=i(ee,"TD",{align:!0});var _i=o(Qe);_a=a(_i,"yes"),_i.forEach(r),ee.forEach(r),ma=d(p),I=i(p,"TR",{});var te=o(I);Ue=i(te,"TD",{align:!0});var mi=o(Ue);Ea=a(mi,"type provider"),mi.forEach(r),ya=d(te),Ve=i(te,"TD",{align:!0});var Ei=o(Ve);ba=a(Ei,"yes"),Ei.forEach(r),Ta=d(te),Xe=i(te,"TD",{align:!0});var yi=o(Xe);Da=a(yi,".type"),yi.forEach(r),wa=d(te),xe=i(te,"TD",{align:!0});var bi=o(xe);ka=a(bi,"not yet"),bi.forEach(r),te.forEach(r),La=d(p),N=i(p,"TR",{});var re=o(N);et=i(re,"TD",{align:!0});var Ti=o(et);Pa=a(Ti,"standard library"),Ti.forEach(r),Aa=d(re),tt=i(re,"TD",{align:!0});var Di=o(tt);Ia=a(Di,"yes"),Di.forEach(r),Na=d(re),rt=i(re,"TD",{align:!0});var wi=o(rt);ja=a(wi,".ast"),wi.forEach(r),Ra=d(re),nt=i(re,"TD",{align:!0});var ki=o(nt);Sa=a(ki,"not yet"),ki.forEach(r),re.forEach(r),Fa=d(p),j=i(p,"TR",{});var ne=o(j);at=i(ne,"TD",{align:!0});var Li=o(at);Oa=a(Li,"parser"),Li.forEach(r),Ha=d(ne),lt=i(ne,"TD",{align:!0});var Pi=o(lt);Ca=a(Pi,"yes"),Pi.forEach(r),$a=d(ne),it=i(ne,"TD",{align:!0});var Ai=o(it);za=a(Ai,".edit"),Ai.forEach(r),Ma=d(ne),J=i(ne,"TD",{align:!0});var br=o(J);Ga=a(br,"yes (using ("),ge=i(br,"A",{href:!0,target:!0});var Ii=o(ge);Wa=a(Ii,"AGL"),Ii.forEach(r),Ka=a(br,"))"),br.forEach(r),ne.forEach(r),qa=d(p),R=i(p,"TR",{});var ae=o(R);ot=i(ae,"TD",{align:!0});var Ni=o(ot);Ba=a(Ni,"unparser"),Ni.forEach(r),Ya=d(ae),st=i(ae,"TD",{align:!0});var ji=o(st);Za=a(ji,"yes"),ji.forEach(r),Ja=d(ae),dt=i(ae,"TD",{align:!0});var Ri=o(dt);Qa=a(Ri,".edit"),Ri.forEach(r),Ua=d(ae),ft=i(ae,"TD",{align:!0});var Si=o(ft);Va=a(Si,"not yet"),Si.forEach(r),ae.forEach(r),Xa=d(p),S=i(p,"TR",{});var le=o(S);ht=i(le,"TD",{align:!0});var Fi=o(ht);xa=a(Fi,"json exporter/importer"),Fi.forEach(r),el=d(le),ut=i(le,"TD",{align:!0});var Oi=o(ut);tl=a(Oi,"yes"),Oi.forEach(r),rl=d(le),ct=i(le,"TD",{align:!0});var Hi=o(ct);nl=a(Hi,".ast"),Hi.forEach(r),al=d(le),pt=i(le,"TD",{align:!0});var Ci=o(pt);ll=a(Ci,"no"),Ci.forEach(r),le.forEach(r),il=d(p),F=i(p,"TR",{});var ie=o(F);gt=i(ie,"TD",{align:!0});var $i=o(gt);ol=a($i,"visitor pattern implementation"),$i.forEach(r),sl=d(ie),vt=i(ie,"TD",{align:!0});var zi=o(vt);dl=a(zi,"yes"),zi.forEach(r),fl=d(ie),_t=i(ie,"TD",{align:!0});var Mi=o(_t);hl=a(Mi,".ast"),Mi.forEach(r),ul=d(ie),mt=i(ie,"TD",{align:!0});var Gi=o(mt);cl=a(Gi,"can be extended"),Gi.forEach(r),ie.forEach(r),pl=d(p),O=i(p,"TR",{});var oe=o(O);Et=i(oe,"TD",{align:!0});var Wi=o(Et);gl=a(Wi,"web application"),Wi.forEach(r),vl=d(oe),yt=i(oe,"TD",{align:!0});var Ki=o(yt);_l=a(Ki,"yes"),Ki.forEach(r),ml=d(oe),bt=i(oe,"TD",{align:!0});var qi=o(bt);El=a(qi,"none available"),qi.forEach(r),yl=d(oe),Tt=i(oe,"TD",{align:!0});var Bi=o(Tt);bl=a(Bi,"can be changed or replaced"),Bi.forEach(r),oe.forEach(r),p.forEach(r),yr.forEach(r),ur=d(t),Dt=i(t,"P",{});var Yi=o(Dt);Tl=a(Yi,"If you are using ProjectIt, and are missing a specific tool or feature, please let us know through info AT projectit.org."),Yi.forEach(r),this.h()},h(){f(v,"href","/010_Intro/020_Our_Philosophy"),f(ue,"href","https://en.wikipedia.org/wiki/Alan_Kay"),f(ue,"target","_blank"),f(Ee,"href","/030_Developing_a_Language/010_Default_Level"),f(be,"href","/030_Developing_a_Language/020_Definition_Level"),f(De,"href","/030_Developing_a_Language/030_API_Level"),f(ke,"href","/030_Developing_a_Language/010_Default_Level/010_Defining_the_Language_Structure#concept"),f(Ie,"href","/010_Intro/040_A_Language_in_Five_Parts"),f(Ne,"align","left"),f(je,"align","center"),f(Re,"align","center"),f(Se,"align","center"),f(Fe,"align","left"),f(Oe,"align","center"),f(He,"align","center"),f(Ce,"align","center"),f($e,"align","left"),f(ze,"align","center"),f(Me,"align","center"),f(Ge,"align","center"),f(We,"align","left"),f(Ke,"align","center"),f(qe,"align","center"),f(Be,"align","center"),f(Ye,"align","left"),f(Ze,"align","center"),f(Je,"align","center"),f(Qe,"align","center"),f(Ue,"align","left"),f(Ve,"align","center"),f(Xe,"align","center"),f(xe,"align","center"),f(et,"align","left"),f(tt,"align","center"),f(rt,"align","center"),f(nt,"align","center"),f(at,"align","left"),f(lt,"align","center"),f(it,"align","center"),f(ge,"href","https://github.com/dhakehurst/net.akehurst.language"),f(ge,"target","_blank"),f(J,"align","center"),f(ot,"align","left"),f(st,"align","center"),f(dt,"align","center"),f(ft,"align","center"),f(ht,"align","left"),f(ut,"align","center"),f(ct,"align","center"),f(pt,"align","center"),f(gt,"align","left"),f(vt,"align","center"),f(_t,"align","center"),f(mt,"align","center"),f(Et,"align","left"),f(yt,"align","center"),f(bt,"align","center"),f(Tt,"align","center")},m(t,h){u(t,M,h),e(M,H),u(t,q,h),u(t,E,h),e(E,se),e(E,G),e(G,de),e(E,fe),u(t,_e,h),u(t,y,h),e(y,Rt),e(y,he),e(he,St),e(y,Ft),e(y,v),e(v,Tr),e(y,Dr),u(t,Qt,h),u(t,C,h),e(C,wr),e(C,Ot),e(Ot,kr),e(C,Lr),e(C,ue),e(ue,Pr),e(C,Ar),u(t,Ut,h),Qi(T,t,h),u(t,Vt,h),u(t,me,h),e(me,Rr),u(t,Xt,h),u(t,b,h),e(b,Sr),e(b,Ht),e(Ht,Fr),e(b,Or),e(b,Hr),e(b,Cr),e(b,Ee),e(Ee,$r),e(b,zr),u(t,xt,h),u(t,ye,h),e(ye,Mr),u(t,er,h),u(t,_,h),e(_,Gr),e(_,Ct),e(Ct,Wr),e(_,Kr),e(_,$t),e($t,qr),e(_,Br),e(_,zt),e(zt,Yr),e(_,Zr),e(_,Mt),e(Mt,Jr),e(_,Qr),e(_,Gt),e(Gt,Ur),e(_,Vr),e(_,be),e(be,Xr),e(_,xr),u(t,tr,h),u(t,Te,h),e(Te,en),u(t,rr,h),u(t,$,h),e($,tn),e($,Wt),e(Wt,rn),e($,nn),e($,De),e(De,an),e($,ln),u(t,nr,h),u(t,we,h),e(we,on),u(t,ar,h),u(t,B,h),e(B,sn),e(B,ke),e(ke,Kt),e(Kt,dn),e(B,fn),u(t,lr,h),u(t,z,h),e(z,ce),e(ce,hn),e(ce,qt),e(qt,un),e(ce,cn),e(z,pn),e(z,pe),e(pe,gn),e(pe,Bt),e(Bt,vn),e(pe,_n),e(z,mn),e(z,W),e(W,En),e(W,Yt),e(Yt,yn),e(W,bn),e(W,Zt),e(Zt,Tn),e(W,Dn),u(t,ir,h),u(t,Le,h),e(Le,wn),u(t,or,h),Qi(D,t,h),u(t,sr,h),u(t,Pe,h),e(Pe,An),u(t,dr,h),u(t,Ae,h),e(Ae,In),u(t,fr,h),u(t,Y,h),e(Y,Nn),e(Y,Ie),e(Ie,jn),e(Y,Rn),u(t,hr,h),u(t,Z,h),e(Z,Jt),e(Jt,w),e(w,Ne),e(Ne,Sn),e(w,Fn),e(w,je),e(je,On),e(w,Hn),e(w,Re),e(Re,Cn),e(w,$n),e(w,Se),e(Se,zn),e(Z,Mn),e(Z,c),e(c,k),e(k,Fe),e(Fe,Gn),e(k,Wn),e(k,Oe),e(Oe,Kn),e(k,qn),e(k,He),e(He,Bn),e(k,Yn),e(k,Ce),e(Ce,Zn),e(c,Jn),e(c,L),e(L,$e),e($e,Qn),e(L,Un),e(L,ze),e(ze,Vn),e(L,Xn),e(L,Me),e(Me,xn),e(L,ea),e(L,Ge),e(Ge,ta),e(c,ra),e(c,P),e(P,We),e(We,na),e(P,aa),e(P,Ke),e(Ke,la),e(P,ia),e(P,qe),e(qe,oa),e(P,sa),e(P,Be),e(Be,da),e(c,fa),e(c,A),e(A,Ye),e(Ye,ha),e(A,ua),e(A,Ze),e(Ze,ca),e(A,pa),e(A,Je),e(Je,ga),e(A,va),e(A,Qe),e(Qe,_a),e(c,ma),e(c,I),e(I,Ue),e(Ue,Ea),e(I,ya),e(I,Ve),e(Ve,ba),e(I,Ta),e(I,Xe),e(Xe,Da),e(I,wa),e(I,xe),e(xe,ka),e(c,La),e(c,N),e(N,et),e(et,Pa),e(N,Aa),e(N,tt),e(tt,Ia),e(N,Na),e(N,rt),e(rt,ja),e(N,Ra),e(N,nt),e(nt,Sa),e(c,Fa),e(c,j),e(j,at),e(at,Oa),e(j,Ha),e(j,lt),e(lt,Ca),e(j,$a),e(j,it),e(it,za),e(j,Ma),e(j,J),e(J,Ga),e(J,ge),e(ge,Wa),e(J,Ka),e(c,qa),e(c,R),e(R,ot),e(ot,Ba),e(R,Ya),e(R,st),e(st,Za),e(R,Ja),e(R,dt),e(dt,Qa),e(R,Ua),e(R,ft),e(ft,Va),e(c,Xa),e(c,S),e(S,ht),e(ht,xa),e(S,el),e(S,ut),e(ut,tl),e(S,rl),e(S,ct),e(ct,nl),e(S,al),e(S,pt),e(pt,ll),e(c,il),e(c,F),e(F,gt),e(gt,ol),e(F,sl),e(F,vt),e(vt,dl),e(F,fl),e(F,_t),e(_t,hl),e(F,ul),e(F,mt),e(mt,cl),e(c,pl),e(c,O),e(O,Et),e(Et,gl),e(O,vl),e(O,yt),e(yt,_l),e(O,ml),e(O,bt),e(bt,El),e(O,yl),e(O,Tt),e(Tt,bl),u(t,ur,h),u(t,Dt,h),e(Dt,Tl),cr=!0},p(t,[h]){const K={};!Ir&&h&1&&(Ir=!0,K.imageName=t[0],jt(()=>Ir=!1)),!Nr&&h&2&&(Nr=!0,K.caption=t[1],jt(()=>Nr=!1)),!jr&&h&4&&(jr=!0,K.figureNumber=t[2],jt(()=>jr=!1)),T.$set(K);const ve={};!kn&&h&8&&(kn=!0,ve.imageName=t[3],jt(()=>kn=!1)),!Ln&&h&16&&(Ln=!0,ve.caption=t[4],jt(()=>Ln=!1)),!Pn&&h&32&&(Pn=!0,ve.figureNumber=t[5],jt(()=>Pn=!1)),D.$set(ve)},i(t){cr||(Ui(T.$$.fragment,t),Ui(D.$$.fragment,t),cr=!0)},o(t){Vi(T.$$.fragment,t),Vi(D.$$.fragment,t),cr=!1},d(t){t&&r(M),t&&r(q),t&&r(E),t&&r(_e),t&&r(y),t&&r(Qt),t&&r(C),t&&r(Ut),Xi(T,t),t&&r(Vt),t&&r(me),t&&r(Xt),t&&r(b),t&&r(xt),t&&r(ye),t&&r(er),t&&r(_),t&&r(tr),t&&r(Te),t&&r(rr),t&&r($),t&&r(nr),t&&r(we),t&&r(ar),t&&r(B),t&&r(lr),t&&r(z),t&&r(ir),t&&r(Le),t&&r(or),Xi(D,t),t&&r(sr),t&&r(Pe),t&&r(dr),t&&r(Ae),t&&r(fr),t&&r(Y),t&&r(hr),t&&r(Z),t&&r(ur),t&&r(Dt)}}}function ho(g,M,H){let q="layered-architecture2.png",E="The Stacked Architecture",se=1,G="fall-through.png",de="Projection Lookup for an AST Node",fe=2;function _e(v){q=v,H(0,q)}function y(v){E=v,H(1,E)}function Rt(v){se=v,H(2,se)}function he(v){G=v,H(3,G)}function St(v){de=v,H(4,de)}function Ft(v){fe=v,H(5,fe)}return[q,E,se,G,de,fe,_e,y,Rt,he,St,Ft]}class go extends io{constructor(M){super();oo(this,M,ho,fo,so,{})}}export{go as default};
