import{S as D,i as O,s as g,e as u,t as r,k as A,c as k,a as f,h as c,d as n,m as C,b as q,g as l,H as e,J as F}from"../../../../chunks/vendor-0dc77bd0.js";function J(L){let t,P,d,p,w,h,v,b,m,o,B,x,S,T,E,i,R=`<code class="language-ts"><span class="token comment">/* File: core/src/language/PiBinaryExpression.ts */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PiBinaryExpression</span> <span class="token keyword">extends</span> <span class="token class-name">PiExpression</span> <span class="token punctuation">&#123;</span>
    <span class="token function">piLeft</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> PiExpression<span class="token punctuation">;</span>

    <span class="token function">piSetLeft</span><span class="token punctuation">(</span>left<span class="token operator">:</span> PiExpression<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

    <span class="token function">piRight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> PiExpression<span class="token punctuation">;</span>

    <span class="token function">piSetRight</span><span class="token punctuation">(</span>right<span class="token operator">:</span> PiExpression<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

    <span class="token function">piPriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 <span class="token operator">*</span><span class="token operator">/</span></code>`;return{c(){t=u("h1"),P=r("PiBinaryExpression"),d=A(),p=u("p"),w=r("An object that implements "),h=u("code"),v=r("PiBinaryExpression"),b=r(` can be a node in the model AST. It represents
an expression that has exactly two operands, which are usually written to the left and right of
the operator symbol. For example, \u20184+5\u2019.`),m=A(),o=u("p"),B=r("This interface extends the xref:expression-interface["),x=u("code"),S=r("PiExpression"),T=r("] interface."),E=A(),i=u("pre"),this.h()},l(s){t=k(s,"H1",{});var a=f(t);P=c(a,"PiBinaryExpression"),a.forEach(n),d=C(s),p=k(s,"P",{});var y=f(p);w=c(y,"An object that implements "),h=k(y,"CODE",{});var H=f(h);v=c(H,"PiBinaryExpression"),H.forEach(n),b=c(y,` can be a node in the model AST. It represents
an expression that has exactly two operands, which are usually written to the left and right of
the operator symbol. For example, \u20184+5\u2019.`),y.forEach(n),m=C(s),o=k(s,"P",{});var _=f(o);B=c(_,"This interface extends the xref:expression-interface["),x=k(_,"CODE",{});var I=f(x);S=c(I,"PiExpression"),I.forEach(n),T=c(_,"] interface."),_.forEach(n),E=C(s),i=k(s,"PRE",{class:!0});var j=f(i);j.forEach(n),this.h()},h(){q(i,"class","language-ts")},m(s,a){l(s,t,a),e(t,P),l(s,d,a),l(s,p,a),e(p,w),e(p,h),e(h,v),e(p,b),l(s,m,a),l(s,o,a),e(o,B),e(o,x),e(x,S),e(o,T),l(s,E,a),l(s,i,a),i.innerHTML=R},p:F,i:F,o:F,d(s){s&&n(t),s&&n(d),s&&n(p),s&&n(m),s&&n(o),s&&n(E),s&&n(i)}}}class z extends D{constructor(t){super();O(this,t,null,J,g,{})}}export{z as default};
