import{S as g,i as ee,s as ae,e as i,t as o,k as E,c as p,a as c,g as l,d as a,n as P,b as U,f as t,F as n,H as B}from"../../../chunks/vendor-0216fdcb.js";function se(W){let d,j,w,u,H,y,O,D,T,r,I,_,F,R,b,L,M,V,k,q,x,m,X=`<code class="language-ts"><span class="token comment">/* File: core/src/validator/PiValidator.ts */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PiValidator</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">/**
	 * Returns a list of errors on 'modelelement' according to the validation rules
	 * stated in the validation definition. If 'includeChildren' is true, the child
	 * nodes of 'modelelement' in the AST are also checked.
	 *
	 * @param modelelement
	 * @param includeChildren
	 */</span>
	<span class="token function">validate</span><span class="token punctuation">(</span>modelelement<span class="token operator">:</span> PiElement<span class="token punctuation">,</span> includeChildren<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> PiError<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`,A,h,z,C,f,Y=`<code class="language-ts"><span class="token comment">/* File: core/src/validator/PiValidator.ts */</span>

<span class="token comment">/**
 * An error consists of a message coupled to the faulty AST node, either a model
 * element or a list of model elements.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PiError</span> <span class="token punctuation">&#123;</span>
	message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>                        <span class="token comment">// human-readable error message</span>
	reportedOn<span class="token operator">:</span> PiElement <span class="token operator">|</span> PiElement<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">// the model element that does not comply</span>
	locationdescription<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>            <span class="token comment">// human-readable indication of 'reportedOn'</span>
	severity<span class="token operator">:</span> PiErrorSeverity<span class="token punctuation">;</span>              <span class="token comment">// indication of how serious the error is, default is 'ToDo'</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){d=i("h1"),j=o("PiValidator"),w=E(),u=i("p"),H=o("An object that implements "),y=i("code"),O=o("PiValidator"),D=o(` is able to validate a node in the AST. The
validation can be only on the node itself, or it can include all child-nodes resursively.`),T=E(),r=i("p"),I=o("The errors that are found are returned in the form of a list of "),_=i("code"),F=o("PiError"),R=o(" objects. Every "),b=i("code"),L=o("PiError"),M=o(`
holds a message, and a reference to the node that is faulty.`),V=E(),k=i("p"),q=o("If you want to write your own validator you will need to implement this interface."),x=E(),m=i("pre"),A=E(),h=i("h2"),z=o("PiError"),C=E(),f=i("pre"),this.h()},l(e){d=p(e,"H1",{});var s=c(d);j=l(s,"PiValidator"),s.forEach(a),w=P(e),u=p(e,"P",{});var S=c(u);H=l(S,"An object that implements "),y=p(S,"CODE",{});var G=c(y);O=l(G,"PiValidator"),G.forEach(a),D=l(S,` is able to validate a node in the AST. The
validation can be only on the node itself, or it can include all child-nodes resursively.`),S.forEach(a),T=P(e),r=p(e,"P",{});var v=c(r);I=l(v,"The errors that are found are returned in the form of a list of "),_=p(v,"CODE",{});var J=c(_);F=l(J,"PiError"),J.forEach(a),R=l(v," objects. Every "),b=p(v,"CODE",{});var K=c(b);L=l(K,"PiError"),K.forEach(a),M=l(v,`
holds a message, and a reference to the node that is faulty.`),v.forEach(a),V=P(e),k=p(e,"P",{});var N=c(k);q=l(N,"If you want to write your own validator you will need to implement this interface."),N.forEach(a),x=P(e),m=p(e,"PRE",{class:!0});var Z=c(m);Z.forEach(a),A=P(e),h=p(e,"H2",{});var Q=c(h);z=l(Q,"PiError"),Q.forEach(a),C=P(e),f=p(e,"PRE",{class:!0});var $=c(f);$.forEach(a),this.h()},h(){U(m,"class","language-ts"),U(f,"class","language-ts")},m(e,s){t(e,d,s),n(d,j),t(e,w,s),t(e,u,s),n(u,H),n(u,y),n(y,O),n(u,D),t(e,T,s),t(e,r,s),n(r,I),n(r,_),n(_,F),n(r,R),n(r,b),n(b,L),n(r,M),t(e,V,s),t(e,k,s),n(k,q),t(e,x,s),t(e,m,s),m.innerHTML=X,t(e,A,s),t(e,h,s),n(h,z),t(e,C,s),t(e,f,s),f.innerHTML=Y},p:B,i:B,o:B,d(e){e&&a(d),e&&a(w),e&&a(u),e&&a(T),e&&a(r),e&&a(V),e&&a(k),e&&a(x),e&&a(m),e&&a(A),e&&a(h),e&&a(C),e&&a(f)}}}class te extends g{constructor(d){super();ee(this,d,null,se,ae,{})}}export{te as default};
