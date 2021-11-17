import{S as D,i as O,s as g,e as u,t as c,k as A,c as k,a as f,g as r,d as n,n as F,b as q,f as l,F as e,H as j}from"../../../../chunks/vendor-0216fdcb.js";function M(I){let t,P,d,p,w,h,v,b,m,o,B,x,S,T,E,i,L=`<code class="language-ts"><span class="token comment">/* File: core/src/language/PiBinaryExpression.ts */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PiBinaryExpression</span> <span class="token keyword">extends</span> <span class="token class-name">PiExpression</span> <span class="token punctuation">&#123;</span>
    <span class="token function">piLeft</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> PiExpression<span class="token punctuation">;</span>

    <span class="token function">piSetLeft</span><span class="token punctuation">(</span>left<span class="token operator">:</span> PiExpression<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

    <span class="token function">piRight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> PiExpression<span class="token punctuation">;</span>

    <span class="token function">piSetRight</span><span class="token punctuation">(</span>right<span class="token operator">:</span> PiExpression<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

    <span class="token function">piPriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 <span class="token operator">*</span><span class="token operator">/</span></code>`;return{c(){t=u("h1"),P=c("PiBinaryExpression"),d=A(),p=u("p"),w=c("An object that implements "),h=u("code"),v=c("PiBinaryExpression"),b=c(` can be a node in the model AST. It represents
an expression that has exactly two operands, which are usually written to the left and right of
the operator symbol. For example, \u20184+5\u2019.`),m=A(),o=u("p"),B=c("This interface extends the xref:expression-interface["),x=u("code"),S=c("PiExpression"),T=c("] interface."),E=A(),i=u("pre"),this.h()},l(s){t=k(s,"H1",{});var a=f(t);P=r(a,"PiBinaryExpression"),a.forEach(n),d=F(s),p=k(s,"P",{});var y=f(p);w=r(y,"An object that implements "),h=k(y,"CODE",{});var C=f(h);v=r(C,"PiBinaryExpression"),C.forEach(n),b=r(y,` can be a node in the model AST. It represents
an expression that has exactly two operands, which are usually written to the left and right of
the operator symbol. For example, \u20184+5\u2019.`),y.forEach(n),m=F(s),o=k(s,"P",{});var _=f(o);B=r(_,"This interface extends the xref:expression-interface["),x=k(_,"CODE",{});var H=f(x);S=r(H,"PiExpression"),H.forEach(n),T=r(_,"] interface."),_.forEach(n),E=F(s),i=k(s,"PRE",{class:!0});var R=f(i);R.forEach(n),this.h()},h(){q(i,"class","language-ts")},m(s,a){l(s,t,a),e(t,P),l(s,d,a),l(s,p,a),e(p,w),e(p,h),e(h,v),e(p,b),l(s,m,a),l(s,o,a),e(o,B),e(o,x),e(x,S),e(o,T),l(s,E,a),l(s,i,a),i.innerHTML=L},p:j,i:j,o:j,d(s){s&&n(t),s&&n(d),s&&n(p),s&&n(m),s&&n(o),s&&n(E),s&&n(i)}}}class G extends D{constructor(t){super();O(this,t,null,M,g,{})}}export{G as default};
