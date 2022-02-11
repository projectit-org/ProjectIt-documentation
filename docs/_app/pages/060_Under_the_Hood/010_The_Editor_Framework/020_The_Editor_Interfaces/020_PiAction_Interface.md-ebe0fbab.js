import{S as w,i as D,s as H,e as k,t as m,k as y,c as f,a as h,h as _,d as a,m as C,b as S,g as c,H as i,J as v}from"../../../../chunks/vendor-492729b6.js";function T(b){let n,d,r,t,P,p,x,A,l,o,O=`<code class="language-ts"><span class="token comment">/* File: core/src/editor/PiAction.ts */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PiActions</span> <span class="token punctuation">&#123;</span>
	expressionCreators<span class="token operator">:</span> PiExpressionCreator<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	binaryExpressionCreators<span class="token operator">:</span> PiBinaryExpressionCreator<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	customBehaviors<span class="token operator">:</span> PiCustomBehavior<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	keyboardActions<span class="token operator">:</span> KeyboardShortcutBehavior<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){n=k("h1"),d=m("PiAction"),r=y(),t=k("p"),P=m("An object that implements "),p=k("code"),x=m("PiAction"),A=m(" // TODO"),l=y(),o=k("pre"),this.h()},l(s){n=f(s,"H1",{});var e=h(n);d=_(e,"PiAction"),e.forEach(a),r=C(s),t=f(s,"P",{});var u=h(t);P=_(u,"An object that implements "),p=f(u,"CODE",{});var E=h(p);x=_(E,"PiAction"),E.forEach(a),A=_(u," // TODO"),u.forEach(a),l=C(s),o=f(s,"PRE",{class:!0});var B=h(o);B.forEach(a),this.h()},h(){S(o,"class","language-ts")},m(s,e){c(s,n,e),i(n,d),c(s,r,e),c(s,t,e),i(t,P),i(t,p),i(p,x),i(t,A),c(s,l,e),c(s,o,e),o.innerHTML=O},p:v,i:v,o:v,d(s){s&&a(n),s&&a(r),s&&a(t),s&&a(l),s&&a(o)}}}class q extends w{constructor(n){super();D(this,n,null,T,H,{})}}export{q as default};
