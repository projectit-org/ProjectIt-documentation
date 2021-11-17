import{S as j,i as w,s as D,e as k,t as m,k as y,c as f,a as d,g as h,d as a,n as b,b as H,f as c,F as i,H as A}from"../../../../chunks/vendor-0216fdcb.js";function S(C){let n,_,r,t,P,p,v,x,l,o,O=`<code class="language-ts"><span class="token comment">/* File: core/src/editor/PiAction.ts */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PiActions</span> <span class="token punctuation">&#123;</span>
	expressionCreators<span class="token operator">:</span> PiExpressionCreator<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	binaryExpressionCreators<span class="token operator">:</span> PiBinaryExpressionCreator<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	customBehaviors<span class="token operator">:</span> PiCustomBehavior<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	keyboardActions<span class="token operator">:</span> KeyboardShortcutBehavior<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){n=k("h1"),_=m("PiAction"),r=y(),t=k("p"),P=m("An object that implements "),p=k("code"),v=m("PiAction"),x=m(" // TODO"),l=y(),o=k("pre"),this.h()},l(s){n=f(s,"H1",{});var e=d(n);_=h(e,"PiAction"),e.forEach(a),r=b(s),t=f(s,"P",{});var u=d(t);P=h(u,"An object that implements "),p=f(u,"CODE",{});var E=d(p);v=h(E,"PiAction"),E.forEach(a),x=h(u," // TODO"),u.forEach(a),l=b(s),o=f(s,"PRE",{class:!0});var B=d(o);B.forEach(a),this.h()},h(){H(o,"class","language-ts")},m(s,e){c(s,n,e),i(n,_),c(s,r,e),c(s,t,e),i(t,P),i(t,p),i(p,v),i(t,x),c(s,l,e),c(s,o,e),o.innerHTML=O},p:A,i:A,o:A,d(s){s&&a(n),s&&a(r),s&&a(t),s&&a(l),s&&a(o)}}}class F extends j{constructor(n){super();w(this,n,null,S,D,{})}}export{F as default};
