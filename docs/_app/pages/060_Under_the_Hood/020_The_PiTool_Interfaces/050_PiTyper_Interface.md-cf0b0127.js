import{S as D,i as H,s as I,e as r,t as u,k as v,c as m,a as k,g as f,d as s,n as R,b as L,f as o,F as c,H as q}from"../../../chunks/vendor-0216fdcb.js";function C(A){let a,P,y,t,E,i,b,w,h,l,_,d,p,S=`<code class="language-ts"><span class="token comment">/* File: core/src/typer/PiTyper.ts */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PiTyper</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">/**
	 * Returns the type of 'modelelement' according to the type rules in the Typer Definition
	 * @param modelelement
	 */</span>
	<span class="token function">inferType</span><span class="token punctuation">(</span>modelelement<span class="token operator">:</span> PiElement<span class="token punctuation">)</span><span class="token operator">:</span> PiElement<span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Returns true if the type that inferType(elem1) returns equals the type inferType(elem2) returns.
	 * This is a strict equal.
	 * @param elem1
	 * @param elem2
	 */</span>
	<span class="token function">equalsType</span><span class="token punctuation">(</span>elem1<span class="token operator">:</span> PiElement<span class="token punctuation">,</span> elem2<span class="token operator">:</span> PiElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Returns true if the type that inferType(elem1) returns conforms to the type inferType(elem2) returns, according to
	 * the type rules in the Typer definition. The direction is elem2 conforms to elem1.
	 * @param elem1
	 * @param elem2
	 */</span>
	<span class="token function">conformsTo</span><span class="token punctuation">(</span>elem1<span class="token operator">:</span> PiElement<span class="token punctuation">,</span> elem2<span class="token operator">:</span> PiElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Returns true if all types in typelist1 conform to the types in typelist2, in the given order.
	 * @param typelist1
	 * @param typelist2
	 */</span>
	<span class="token function">conformList</span><span class="token punctuation">(</span>typelist1<span class="token operator">:</span> PiElement<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> typelist2<span class="token operator">:</span> PiElement<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Returns true if 'elem' is marked as 'type' in the Typer definition
	 * @param elem
	 */</span>
	<span class="token function">isType</span><span class="token punctuation">(</span>elem<span class="token operator">:</span> PiElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>


<span class="token comment">/**
 * This interface is being used to implement the three-tier approach.
 * Both the generated and custom type providers should implement this interface.
 * The generated class that implement the PiTyper interface connects all the classes
 * that implement this interface and returns the correct value to the (external) user.
 *
 * When the implementor of this interface does not provide for a result of one of the methods,
 * this method should return 'null'.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PiTyperPart</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">/**
	 * Returns the type of 'modelelement' according to the type rules in the Typer Definition.
	 * @param modelelement
	 */</span>
	<span class="token function">inferType</span><span class="token punctuation">(</span>modelelement<span class="token operator">:</span> PiElement<span class="token punctuation">)</span><span class="token operator">:</span> PiElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Returns true if the type that inferType(elem1) returns equals the type inferType(elem2) returns.
	 * This is a strict equal.
	 * @param elem1
	 * @param elem2
	 */</span>
	<span class="token function">equalsType</span><span class="token punctuation">(</span>elem1<span class="token operator">:</span> PiElement<span class="token punctuation">,</span> elem2<span class="token operator">:</span> PiElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Returns true if the type that inferType(elem1) returns conforms to the type inferType(elem2) returns, according to
	 * the type rules in the Typer definition. The direction is elem2 conforms to elem1.
	 * @param elem1
	 * @param elem2
	 */</span>
	<span class="token function">conformsTo</span><span class="token punctuation">(</span>elem1<span class="token operator">:</span> PiElement<span class="token punctuation">,</span> elem2<span class="token operator">:</span> PiElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Returns true if all types in typelist1 conform to the types in typelist2, in the given order.
	 * @param typelist1
	 * @param typelist2
	 */</span>
	<span class="token function">conformList</span><span class="token punctuation">(</span>typelist1<span class="token operator">:</span> PiElement<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> typelist2<span class="token operator">:</span> PiElement<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Returns true if 'elem' is marked as 'type' in the Typer definition.
	 * @param elem
	 */</span>
	<span class="token function">isType</span><span class="token punctuation">(</span>elem<span class="token operator">:</span> PiElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

</code>`;return{c(){a=r("h1"),P=u("PiTyper"),y=v(),t=r("p"),E=u("An object that implements "),i=r("code"),b=u("PiTyper"),w=u(" is answer a set of question concerning the type of a node in the AST."),h=v(),l=r("p"),_=u("If you want to write your own typer you will need to implement this interface."),d=v(),p=r("pre"),this.h()},l(n){a=m(n,"H1",{});var e=k(a);P=f(e,"PiTyper"),e.forEach(s),y=R(n),t=m(n,"P",{});var T=k(t);E=f(T,"An object that implements "),i=m(T,"CODE",{});var x=k(i);b=f(x,"PiTyper"),x.forEach(s),w=f(T," is answer a set of question concerning the type of a node in the AST."),T.forEach(s),h=R(n),l=m(n,"P",{});var g=k(l);_=f(g,"If you want to write your own typer you will need to implement this interface."),g.forEach(s),d=R(n),p=m(n,"PRE",{class:!0});var j=k(p);j.forEach(s),this.h()},h(){L(p,"class","language-ts")},m(n,e){o(n,a,e),c(a,P),o(n,y,e),o(n,t,e),c(t,E),c(t,i),c(i,b),c(t,w),o(n,h,e),o(n,l,e),c(l,_),o(n,d,e),o(n,p,e),p.innerHTML=S},p:q,i:q,o:q,d(n){n&&s(a),n&&s(y),n&&s(t),n&&s(h),n&&s(l),n&&s(d),n&&s(p)}}}class B extends D{constructor(a){super();H(this,a,null,C,I,{})}}export{B as default};
