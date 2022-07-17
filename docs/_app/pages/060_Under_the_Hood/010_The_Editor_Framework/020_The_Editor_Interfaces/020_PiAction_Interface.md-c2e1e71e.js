import{S as w,i as H,s as S,e as l,t as P,k as E,c as u,a as k,h as x,d as a,m as y,b as j,g as c,H as m,J as A}from"../../../../chunks/vendor-0dc77bd0.js";function q(C){let n,f,i,e,h,p,_,r,o,b=`<code class="language-ts"><span class="token comment">/* File: core/src/editor/PiAction.ts */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PiActions</span> <span class="token punctuation">&#123;</span>
	expressionCreators<span class="token operator">:</span> PiExpressionCreator<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	binaryExpressionCreators<span class="token operator">:</span> PiBinaryExpressionCreator<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	customBehaviors<span class="token operator">:</span> PiCustomBehavior<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	keyboardActions<span class="token operator">:</span> KeyboardShortcutBehavior<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){n=l("h1"),f=P("PiAction"),i=E(),e=l("p"),h=P("An object that implements "),p=l("code"),_=P("PiAction"),r=E(),o=l("pre"),this.h()},l(s){n=u(s,"H1",{});var t=k(n);f=x(t,"PiAction"),t.forEach(a),i=y(s),e=u(s,"P",{});var d=k(e);h=x(d,"An object that implements "),p=u(d,"CODE",{});var v=k(p);_=x(v,"PiAction"),v.forEach(a),d.forEach(a),r=y(s),o=u(s,"PRE",{class:!0});var B=k(o);B.forEach(a),this.h()},h(){j(o,"class","language-ts")},m(s,t){c(s,n,t),m(n,f),c(s,i,t),c(s,e,t),m(e,h),m(e,p),m(p,_),c(s,r,t),c(s,o,t),o.innerHTML=b},p:A,i:A,o:A,d(s){s&&a(n),s&&a(i),s&&a(e),s&&a(r),s&&a(o)}}}class F extends w{constructor(n){super();H(this,n,null,q,S,{})}}export{F as default};
