import{S as Wn,i as jn,s as qn,e as p,t as o,k as u,c,a as l,h as i,d as s,m as r,b as P,g as e,H as t,J as dn}from"../../../../chunks/vendor-492729b6.js";function Cn(Nn){let f,z,O,b,Q,A,g,V,D,m,Z,N,$,nn,B,sn,an,H,d,Bn=`<code class="language-text">UnitA correctExps

12 : NUMBER;
"string" : STRING;
2345: NUMBER;
"this is a large string": STRING;
true : BOOLEAN;
false: BOOLEAN;

Set&#123; true, true, false &#125; : Set&lt;BOOLEAN>;
Bag &#123; Set &#123; 12, 13, 14 &#125;, Set &#123; 12, 13, 14, 15, 16 &#125; &#125; : Bag&lt;Set&lt;NUMBER>>;

124 Meters : Meters&lt;NUMBER>;
45 kWh : kWh&lt;NUMBER>;</code>`,K,w,en,W,v,tn,j,k,pn,M,on,cn,R,ln,un,G,rn,kn,q,h,Mn=`<code class="language-ts"><span class="token comment">// typer-example/defs/projectY.ast#L18-L26</span>

<span class="token keyword">abstract</span> concept TypeUsage <span class="token punctuation">&#123;</span> <span class="token comment">// to be used wherever a type can be used, either a referred type of or declared type is correct</span>
<span class="token punctuation">&#125;</span>

concept TypeRef base TypeUsage  <span class="token punctuation">&#123;</span>
    reference type<span class="token operator">:</span> NamedType<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">abstract</span> concept TypeDecl base TypeUsage <span class="token punctuation">&#123;</span>
<span class="token punctuation">&#125;</span></code>`,C,_,mn,X,x,Rn=`<code class="language-ts"><span class="token comment">// typer-example/defs/projectY.ast#L37-L47</span>

concept GenericType base TypeDecl <span class="token punctuation">&#123;</span>
    baseType<span class="token operator">:</span> TypeUsage<span class="token punctuation">;</span>
    kind<span class="token operator">:</span> GenericKind<span class="token punctuation">;</span> <span class="token comment">// is it a set, sequence, bag, or anything else</span>
<span class="token punctuation">&#125;</span>
limited GenericKind <span class="token punctuation">&#123;</span> Set<span class="token punctuation">;</span> Sequence<span class="token punctuation">;</span> Bag<span class="token punctuation">;</span> Collection<span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>

concept UnitOfMeasurement base TypeDecl <span class="token punctuation">&#123;</span>
    reference baseType<span class="token operator">:</span> PredefinedType<span class="token punctuation">;</span> <span class="token comment">// is always NUMBER!!</span>
    unit<span class="token operator">:</span> UnitKind<span class="token punctuation">;</span> <span class="token comment">// is it measured in km, kWh, grams, or anything else</span>
<span class="token punctuation">&#125;</span>
limited UnitKind <span class="token punctuation">&#123;</span> Meters<span class="token punctuation">;</span> Grams<span class="token punctuation">;</span> kWh<span class="token punctuation">;</span> Hours<span class="token punctuation">;</span> <span class="token punctuation">&#125;</span></code>`,Y,L,fn,I,T,Gn=`<code class="language-ts"><span class="token comment">// typer-example/defs/projectY.ast#L61-L75</span>

expression BooleanLiteral base Exp <span class="token punctuation">&#123;</span>
    xx<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

expression UnitLiteral base Exp <span class="token punctuation">&#123;</span>
    <span class="token comment">// 62 kilogram, or 112 miles</span>
    inner<span class="token operator">:</span> NumberLiteral<span class="token punctuation">;</span>
    unit<span class="token operator">:</span> UnitKind<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

expression GenericLiteral base Exp <span class="token punctuation">&#123;</span>
    <span class="token comment">// Set&#123; 12, 14, 16, 18 &#125;</span>
    content<span class="token operator">:</span> Exp<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    kind<span class="token operator">:</span> GenericKind<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,F,S,yn,J,E,Pn=`<code class="language-ts"><span class="token comment">// typer-example/defs/projectY.ast</span>

language projectY

model <span class="token constant">XX</span> <span class="token punctuation">&#123;</span>
    units<span class="token operator">:</span> XXunit<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

modelunit XXunit <span class="token punctuation">&#123;</span>
    lines<span class="token operator">:</span> ExpWithType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    file<span class="token operator">-</span>extension <span class="token operator">=</span> <span class="token string">"expr"</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

concept ExpWithType <span class="token punctuation">&#123;</span>
    expr<span class="token operator">:</span> Exp<span class="token punctuation">;</span>
    type<span class="token operator">:</span> TypeUsage<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// definitions of types</span>
<span class="token keyword">abstract</span> concept TypeUsage <span class="token punctuation">&#123;</span> <span class="token comment">// to be used wherever a type can be used, either a referred type of or declared type is correct</span>
<span class="token punctuation">&#125;</span>

concept TypeRef base TypeUsage  <span class="token punctuation">&#123;</span>
    reference type<span class="token operator">:</span> NamedType<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">abstract</span> concept TypeDecl base TypeUsage <span class="token punctuation">&#123;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">interface</span> <span class="token class-name">TopType</span> <span class="token punctuation">&#123;</span>
<span class="token punctuation">&#125;</span>

concept NamedType <span class="token keyword">implements</span> <span class="token class-name">TopType</span> <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> identifier<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

limited PredefinedType base NamedType <span class="token punctuation">&#123;</span> <span class="token constant">NUMBER</span><span class="token punctuation">;</span> <span class="token constant">BOOLEAN</span><span class="token punctuation">;</span> <span class="token constant">STRING</span><span class="token punctuation">;</span> <span class="token constant">ANY</span><span class="token punctuation">;</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>

concept GenericType base TypeDecl <span class="token punctuation">&#123;</span>
    baseType<span class="token operator">:</span> TypeUsage<span class="token punctuation">;</span>
    kind<span class="token operator">:</span> GenericKind<span class="token punctuation">;</span> <span class="token comment">// is it a set, sequence, bag, or anything else</span>
<span class="token punctuation">&#125;</span>
limited GenericKind <span class="token punctuation">&#123;</span> Set<span class="token punctuation">;</span> Sequence<span class="token punctuation">;</span> Bag<span class="token punctuation">;</span> Collection<span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>

concept UnitOfMeasurement base TypeDecl <span class="token punctuation">&#123;</span>
    reference baseType<span class="token operator">:</span> PredefinedType<span class="token punctuation">;</span> <span class="token comment">// is always NUMBER!!</span>
    unit<span class="token operator">:</span> UnitKind<span class="token punctuation">;</span> <span class="token comment">// is it measured in km, kWh, grams, or anything else</span>
<span class="token punctuation">&#125;</span>
limited UnitKind <span class="token punctuation">&#123;</span> Meters<span class="token punctuation">;</span> Grams<span class="token punctuation">;</span> kWh<span class="token punctuation">;</span> Hours<span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>

<span class="token comment">// definitions of expressions</span>
<span class="token keyword">abstract</span> expression Exp <span class="token punctuation">&#123;</span>
<span class="token punctuation">&#125;</span>

expression NumberLiteral base Exp <span class="token punctuation">&#123;</span>
    xx<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

expression StringLiteral base Exp <span class="token punctuation">&#123;</span>
    xx<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

expression BooleanLiteral base Exp <span class="token punctuation">&#123;</span>
    xx<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

expression UnitLiteral base Exp <span class="token punctuation">&#123;</span>
    <span class="token comment">// 62 kilogram, or 112 miles</span>
    inner<span class="token operator">:</span> NumberLiteral<span class="token punctuation">;</span>
    unit<span class="token operator">:</span> UnitKind<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

expression GenericLiteral base Exp <span class="token punctuation">&#123;</span>
    <span class="token comment">// Set&#123; 12, 14, 16, 18 &#125;</span>
    content<span class="token operator">:</span> Exp<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    kind<span class="token operator">:</span> GenericKind<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>


expression NamedExp base Exp <span class="token punctuation">&#123;</span>
    inner<span class="token operator">:</span> Exp<span class="token punctuation">;</span>
    myType<span class="token operator">:</span> NamedType<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

expression PlusExp base Exp <span class="token punctuation">&#123;</span>
    left<span class="token operator">:</span> Exp<span class="token punctuation">;</span>
    right<span class="token operator">:</span> Exp<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`;return{c(){f=p("h1"),z=o("Generic Types: an Example Typer Definition"),O=u(),b=p("p"),Q=o("This example shows how generic types and unit of measurements can be defined."),A=u(),g=p("h2"),V=o("The Example Language"),D=u(),m=p("p"),Z=o("The language is very simple, its units consists of lists of "),N=p("em"),$=o("expression"),nn=o(" - "),B=p("em"),sn=o("declared type"),an=o(` pairs. Ultimately, we want to compare the declared
type with the type of the expression. Below is an example of a model unit of this language.`),H=u(),d=p("pre"),K=u(),w=p("h2"),en=o("The Structure Definition of the Example Language"),W=u(),v=p("p"),tn=o(`To explain the type definition, we first need a structure definition of the example language.
Below is the complete .ast file. But first, let\u2019s explain some highlights.`),j=u(),k=p("p"),pn=o("Every type in the list of "),M=p("em"),on=o("expression"),cn=o(" - "),R=p("em"),ln=o("declared type"),un=o(` pairs is an instance of the AST
concept `),G=p("strong"),rn=o("TypeUsage"),kn=o(`, which comes in two flavours: a type declaration,
and a type reference, that holds a reference to another AST node.`),q=u(),h=p("pre"),C=u(),_=p("p"),mn=o(`There are also two options for a type declaration, a generic type, and a unit of measurement. For this example,
we have used the names of the generic types from the Object Constraint Language: Set, Bag, Sequence, and Collection.
Note that these declarations are part of the AST. They are not type concepts themselves.`),X=u(),x=p("pre"),Y=u(),L=p("p"),fn=o(`The definitions of the expressions in the example language are straightforward. There are literal expressions for
strings, booleans, and number, as well as generic literals and unit literals.`),I=u(),T=p("pre"),F=u(),S=p("h2"),yn=o("The complete Structure Definition"),J=u(),E=p("pre"),this.h()},l(n){f=c(n,"H1",{});var a=l(f);z=i(a,"Generic Types: an Example Typer Definition"),a.forEach(s),O=r(n),b=c(n,"P",{});var hn=l(b);Q=i(hn,"This example shows how generic types and unit of measurements can be defined."),hn.forEach(s),A=r(n),g=c(n,"H2",{});var xn=l(g);V=i(xn,"The Example Language"),xn.forEach(s),D=r(n),m=c(n,"P",{});var U=l(m);Z=i(U,"The language is very simple, its units consists of lists of "),N=c(U,"EM",{});var Tn=l(N);$=i(Tn,"expression"),Tn.forEach(s),nn=i(U," - "),B=c(U,"EM",{});var En=l(B);sn=i(En,"declared type"),En.forEach(s),an=i(U,` pairs. Ultimately, we want to compare the declared
type with the type of the expression. Below is an example of a model unit of this language.`),U.forEach(s),H=r(n),d=c(n,"PRE",{class:!0});var On=l(d);On.forEach(s),K=r(n),w=c(n,"H2",{});var bn=l(w);en=i(bn,"The Structure Definition of the Example Language"),bn.forEach(s),W=r(n),v=c(n,"P",{});var gn=l(v);tn=i(gn,`To explain the type definition, we first need a structure definition of the example language.
Below is the complete .ast file. But first, let\u2019s explain some highlights.`),gn.forEach(s),j=r(n),k=c(n,"P",{});var y=l(k);pn=i(y,"Every type in the list of "),M=c(y,"EM",{});var wn=l(M);on=i(wn,"expression"),wn.forEach(s),cn=i(y," - "),R=c(y,"EM",{});var vn=l(R);ln=i(vn,"declared type"),vn.forEach(s),un=i(y,` pairs is an instance of the AST
concept `),G=c(y,"STRONG",{});var _n=l(G);rn=i(_n,"TypeUsage"),_n.forEach(s),kn=i(y,`, which comes in two flavours: a type declaration,
and a type reference, that holds a reference to another AST node.`),y.forEach(s),q=r(n),h=c(n,"PRE",{class:!0});var An=l(h);An.forEach(s),C=r(n),_=c(n,"P",{});var Ln=l(_);mn=i(Ln,`There are also two options for a type declaration, a generic type, and a unit of measurement. For this example,
we have used the names of the generic types from the Object Constraint Language: Set, Bag, Sequence, and Collection.
Note that these declarations are part of the AST. They are not type concepts themselves.`),Ln.forEach(s),X=r(n),x=c(n,"PRE",{class:!0});var Dn=l(x);Dn.forEach(s),Y=r(n),L=c(n,"P",{});var Sn=l(L);fn=i(Sn,`The definitions of the expressions in the example language are straightforward. There are literal expressions for
strings, booleans, and number, as well as generic literals and unit literals.`),Sn.forEach(s),I=r(n),T=c(n,"PRE",{class:!0});var Hn=l(T);Hn.forEach(s),F=r(n),S=c(n,"H2",{});var Un=l(S);yn=i(Un,"The complete Structure Definition"),Un.forEach(s),J=r(n),E=c(n,"PRE",{class:!0});var Kn=l(E);Kn.forEach(s),this.h()},h(){P(d,"class","language-text"),P(h,"class","language-ts"),P(x,"class","language-ts"),P(T,"class","language-ts"),P(E,"class","language-ts")},m(n,a){e(n,f,a),t(f,z),e(n,O,a),e(n,b,a),t(b,Q),e(n,A,a),e(n,g,a),t(g,V),e(n,D,a),e(n,m,a),t(m,Z),t(m,N),t(N,$),t(m,nn),t(m,B),t(B,sn),t(m,an),e(n,H,a),e(n,d,a),d.innerHTML=Bn,e(n,K,a),e(n,w,a),t(w,en),e(n,W,a),e(n,v,a),t(v,tn),e(n,j,a),e(n,k,a),t(k,pn),t(k,M),t(M,on),t(k,cn),t(k,R),t(R,ln),t(k,un),t(k,G),t(G,rn),t(k,kn),e(n,q,a),e(n,h,a),h.innerHTML=Mn,e(n,C,a),e(n,_,a),t(_,mn),e(n,X,a),e(n,x,a),x.innerHTML=Rn,e(n,Y,a),e(n,L,a),t(L,fn),e(n,I,a),e(n,T,a),T.innerHTML=Gn,e(n,F,a),e(n,S,a),t(S,yn),e(n,J,a),e(n,E,a),E.innerHTML=Pn},p:dn,i:dn,o:dn,d(n){n&&s(f),n&&s(O),n&&s(b),n&&s(A),n&&s(g),n&&s(D),n&&s(m),n&&s(H),n&&s(d),n&&s(K),n&&s(w),n&&s(W),n&&s(v),n&&s(j),n&&s(k),n&&s(q),n&&s(h),n&&s(C),n&&s(_),n&&s(X),n&&s(x),n&&s(Y),n&&s(L),n&&s(I),n&&s(T),n&&s(F),n&&s(S),n&&s(J),n&&s(E)}}}class Yn extends Wn{constructor(f){super();jn(this,f,null,Cn,qn,{})}}export{Yn as default};
