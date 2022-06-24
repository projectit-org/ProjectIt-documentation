import{S as Te,i as _e,s as Ee,e as c,t as o,k,w as je,c as r,a as d,h as i,d as t,m as w,x as be,b as F,g as a,H as s,y as $e,q as Ie,o as Le,B as He}from"../../../../chunks/vendor-492729b6.js";import{N as Pe}from"../../../../chunks/Note-1bdf01a3.js";/* empty css                                                            */function ge($){let l;return{c(){l=o("Indentation is incremental")},l(p){l=i(p,"Indentation is incremental")},m(p,y){a(p,l,y)},d(p){p&&t(l)}}}function Ce($){let l;return{c(){l=o("Any indentation of a property is added to the indentation of the projection of this property.\nThus, when a `Text` element is used within another projection,\nthe indentation that is defined by the projection in the definition for `Text` will be preceded\nby any indentation defined in the projection for the enclosing concept.")},l(p){l=i(p,"Any indentation of a property is added to the indentation of the projection of this property.\nThus, when a `Text` element is used within another projection,\nthe indentation that is defined by the projection in the definition for `Text` will be preceded\nby any indentation defined in the projection for the enclosing concept.")},m(p,y){a(p,l,y)},d(p){p&&t(l)}}}function De($){let l,p,y,u,G,I,J,K,L,Q,U,D,T,ue=`<code class="language-ts"><span class="token comment">// docu-project/defs/editor-indentation.edit#L6-L14</span>

Text <span class="token punctuation">&#123;</span>
<span class="token punctuation">[</span>
This <span class="token keyword">is</span>
        literal text
      that <span class="token keyword">is</span> projected <span class="token keyword">in</span> the
                editor
  <span class="token keyword">for</span> every concept <span class="token keyword">of</span> <span class="token keyword">type</span> <span class="token class-name">Text</span><span class="token punctuation">.</span>
<span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`,O,b,V,A,_,he=`<code class="language-ts"><span class="token comment">// docu-project/defs/editor-indentation.edit#L16-L25</span>

Text2 <span class="token punctuation">&#123;</span>
            <span class="token punctuation">[</span>
            This <span class="token keyword">is</span>
                    literal text
                  that <span class="token keyword">is</span> projected <span class="token keyword">in</span> the

                            editor
              <span class="token keyword">for</span> every concept <span class="token keyword">of</span> <span class="token keyword">type</span> <span class="token class-name">Text</span><span class="token punctuation">.</span>
            <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`,M,f,W,H,X,Y,P,Z,ee,g,te,ne,R,E,ke=`<code class="language-ts"><span class="token comment">// docu-project/defs/editor-indentation.edit#L27-L35</span>

Text3 <span class="token punctuation">&#123;</span>
    <span class="token punctuation">[</span>
                 This <span class="token keyword">is</span>
               literal text
          that <span class="token keyword">is</span> projected <span class="token keyword">in</span> the
                  editor
       <span class="token keyword">for</span> every concept <span class="token keyword">of</span> <span class="token keyword">type</span> <span class="token class-name">Text</span><span class="token punctuation">.</span>
            <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`,q,m,se,C,ae,oe,N,j,we=`<code class="language-ts"><span class="token comment">// docu-project/defs/editor-indentation.edit#L37-L45</span>

Text4 <span class="token punctuation">&#123;</span>
    <span class="token punctuation">[</span>
                 This <span class="token keyword">is</span>
               literal text
          that <span class="token keyword">is</span> projected <span class="token keyword">in</span> the
                  editor
       <span class="token keyword">for</span> every concept <span class="token keyword">of</span> <span class="token keyword">type</span> <span class="token class-name">Text</span><span class="token punctuation">.</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`,S,x,B;return x=new Pe({props:{$$slots:{content:[Ce],header:[ge]},$$scope:{ctx:$}}}),{c(){l=c("h1"),p=o("Projections and Indentation"),y=k(),u=c("p"),G=o("The indentation you use in a projection is taken into account. Thus, in the following example "),I=c("code"),J=o("literal text"),K=o(` will
appear indented 8 spaces from `),L=c("code"),Q=o("This is"),U=o("."),D=k(),T=c("pre"),O=k(),b=c("p"),V=o(`However, this is not the complete story. Any whitespace before the line with the least indentation is ignored.
Thus, you can indent the projection as a whole, without it having any influence on the projected indentation.
The next example produces the exact same result as the previous.`),A=k(),_=c("pre"),M=k(),f=c("p"),W=o(`In the following example, however, the line with the least indentation is
`),H=c("code"),X=o("for every concept of type Text."),Y=o(` Its indentation will define the margin. It will
not be indented. However,
the text `),P=c("code"),Z=o("This is"),ee=o(" will be indented 10 spaces, "),g=c("code"),te=o("literal text"),ne=o(" will be indented 8 spaces, etc."),R=k(),E=c("pre"),q=k(),m=c("p"),se=o(`In this calculation the indentation of the closing bracket is also considered. Therefore,
the following example will take the closing bracket as margin, and even the line `),C=c("code"),ae=o("for every concept of type Text."),oe=o(`
will be indented with 3 spaces.`),N=k(),j=c("pre"),S=k(),je(x.$$.fragment),this.h()},l(e){l=r(e,"H1",{});var n=d(l);p=i(n,"Projections and Indentation"),n.forEach(t),y=w(e),u=r(e,"P",{});var h=d(u);G=i(h,"The indentation you use in a projection is taken into account. Thus, in the following example "),I=r(h,"CODE",{});var ie=d(I);J=i(ie,"literal text"),ie.forEach(t),K=i(h,` will
appear indented 8 spaces from `),L=r(h,"CODE",{});var le=d(L);Q=i(le,"This is"),le.forEach(t),U=i(h,"."),h.forEach(t),D=w(e),T=r(e,"PRE",{class:!0});var ye=d(T);ye.forEach(t),O=w(e),b=r(e,"P",{});var pe=d(b);V=i(pe,`However, this is not the complete story. Any whitespace before the line with the least indentation is ignored.
Thus, you can indent the projection as a whole, without it having any influence on the projected indentation.
The next example produces the exact same result as the previous.`),pe.forEach(t),A=w(e),_=r(e,"PRE",{class:!0});var me=d(_);me.forEach(t),M=w(e),f=r(e,"P",{});var v=d(f);W=i(v,`In the following example, however, the line with the least indentation is
`),H=r(v,"CODE",{});var ce=d(H);X=i(ce,"for every concept of type Text."),ce.forEach(t),Y=i(v,` Its indentation will define the margin. It will
not be indented. However,
the text `),P=r(v,"CODE",{});var re=d(P);Z=i(re,"This is"),re.forEach(t),ee=i(v," will be indented 10 spaces, "),g=r(v,"CODE",{});var de=d(g);te=i(de,"literal text"),de.forEach(t),ne=i(v," will be indented 8 spaces, etc."),v.forEach(t),R=w(e),E=r(e,"PRE",{class:!0});var xe=d(E);xe.forEach(t),q=w(e),m=r(e,"P",{});var z=d(m);se=i(z,`In this calculation the indentation of the closing bracket is also considered. Therefore,
the following example will take the closing bracket as margin, and even the line `),C=r(z,"CODE",{});var fe=d(C);ae=i(fe,"for every concept of type Text."),fe.forEach(t),oe=i(z,`
will be indented with 3 spaces.`),z.forEach(t),N=w(e),j=r(e,"PRE",{class:!0});var ve=d(j);ve.forEach(t),S=w(e),be(x.$$.fragment,e),this.h()},h(){F(T,"class","language-ts"),F(_,"class","language-ts"),F(E,"class","language-ts"),F(j,"class","language-ts")},m(e,n){a(e,l,n),s(l,p),a(e,y,n),a(e,u,n),s(u,G),s(u,I),s(I,J),s(u,K),s(u,L),s(L,Q),s(u,U),a(e,D,n),a(e,T,n),T.innerHTML=ue,a(e,O,n),a(e,b,n),s(b,V),a(e,A,n),a(e,_,n),_.innerHTML=he,a(e,M,n),a(e,f,n),s(f,W),s(f,H),s(H,X),s(f,Y),s(f,P),s(P,Z),s(f,ee),s(f,g),s(g,te),s(f,ne),a(e,R,n),a(e,E,n),E.innerHTML=ke,a(e,q,n),a(e,m,n),s(m,se),s(m,C),s(C,ae),s(m,oe),a(e,N,n),a(e,j,n),j.innerHTML=we,a(e,S,n),$e(x,e,n),B=!0},p(e,[n]){const h={};n&2&&(h.$$scope={dirty:n,ctx:e}),x.$set(h)},i(e){B||(Ie(x.$$.fragment,e),B=!0)},o(e){Le(x.$$.fragment,e),B=!1},d(e){e&&t(l),e&&t(y),e&&t(u),e&&t(D),e&&t(T),e&&t(O),e&&t(b),e&&t(A),e&&t(_),e&&t(M),e&&t(f),e&&t(R),e&&t(E),e&&t(q),e&&t(m),e&&t(N),e&&t(j),e&&t(S),He(x,e)}}}function Oe($){return[]}class qe extends Te{constructor(l){super();_e(this,l,Oe,De,Ee,{})}}export{qe as default};
