import{S as H,i as L,s as O,e as k,t as c,k as E,c as m,a as d,h as l,d as s,m as z,b as B,g as r,H as p,J as j}from"../../../chunks/vendor-0dc77bd0.js";function N(R){let o,g,b,a,w,f,v,$,h,T,S,y,u,_,x,e,D=`<code class="language-scss"><span class="token comment">// docu-project/webapp/style/_freon_theme-light.scss</span>

<span class="token keyword">@use</span> <span class="token string">'sass:color'</span><span class="token punctuation">;</span>

<span class="token keyword">@use</span> <span class="token string">'@material/theme/color-palette'</span><span class="token punctuation">;</span>

<span class="token comment">// Freon Colors!!</span>
<span class="token keyword">@use</span> <span class="token string">'@material/theme/index'</span> <span class="token module-modifier keyword">as</span> theme <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token comment">//$primary: #80cbc4,</span>
  <span class="token property"><span class="token variable">$primary</span></span><span class="token punctuation">:</span> #4f9a94<span class="token punctuation">,</span>
  <span class="token comment">//$secondary: #ce93d8,</span>
  <span class="token property"><span class="token variable">$secondary</span></span><span class="token punctuation">:</span> #ffcc80<span class="token punctuation">,</span>
  <span class="token property"><span class="token variable">$surface</span></span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">,</span>
  <span class="token property"><span class="token variable">$background</span></span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>
  <span class="token property"><span class="token variable">$error</span></span><span class="token punctuation">:</span> #B00020<span class="token punctuation">,</span>
  <span class="token comment">//$on-primary: color-palette.$orange-50,</span>
  <span class="token property"><span class="token variable">$on-secondary</span></span><span class="token punctuation">:</span> #00695c<span class="token punctuation">,</span>   <span class="token comment">// a slighter darker version of 'primary'</span>
  <span class="token comment">//$on-surface: black,</span>
  <span class="token comment">//$on-error: black,</span>
  <span class="token comment">//accessible-ink-color,</span>
  <span class="token comment">//contrast,</span>
  <span class="token comment">//contrast-tone,</span>
  <span class="token comment">//luminance,</span>
  <span class="token comment">//text-emphasis,</span>
  <span class="token comment">//tone</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Include all the global styles that do not involve dark/light modes.</span>
<span class="token keyword">@use</span> <span class="token string">'./app'</span><span class="token punctuation">;</span>

<span class="token comment">// linear-progress is included for the progress indicator in the EditorPart component</span>
<span class="token keyword">@use</span> <span class="token string">'@material/linear-progress/index'</span> <span class="token module-modifier keyword">as</span> linear-progress<span class="token punctuation">;</span>

<span class="token comment">// my-colored-bar style is used for the progress indicator in the EditorPart component</span>
<span class="token selector">.my-colored-bar </span><span class="token punctuation">&#123;</span>
  <span class="token keyword">@include</span> linear-progress.<span class="token function">bar-color</span><span class="token punctuation">(</span>theme.<span class="token variable">$red-500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">@include</span> linear-progress.<span class="token function">buffer-color</span><span class="token punctuation">(</span>theme.<span class="token variable">$red-100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">:focus </span><span class="token punctuation">&#123;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token comment">// status-bar style is used for the StatusBar component above the editor</span>
<span class="token selector">.status-bar </span><span class="token punctuation">&#123;</span>
  <span class="token comment">//--freon-colors-bg-status: #4f9a94;</span>
  <span class="token property">--freon-colors-bg-status</span><span class="token punctuation">:</span> #80cbc4<span class="token punctuation">;</span>
  <span class="token property">--freon-colors-text-status</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">--freon-text-style-status</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.main-frame </span><span class="token punctuation">&#123;</span>
  <span class="token comment">/* SplitPane divider */</span>
  <span class="token property">--freon-colors-slider</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>theme.<span class="token variable">$on-secondary</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>    <span class="token comment">/* The color of the slider between the error/search pane and the editor */</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* The following are CSS variables that are used in the editor part of Freon, i.e. in the package 'core-svelte'. */</span>
<span class="token comment">/* Change the values as you like. */</span>
<span class="token comment">/* Note that you need to use a different syntax to be able to use SCSS variables as value
for CSS variables, see https://www.sass-lang.com/documentation/breaking-changes/css-vars */</span>
<span class="token selector">.editor-part </span><span class="token punctuation">&#123;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token comment">/* Selectable */</span>
  <span class="token property">--freon-selected-background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>211<span class="token punctuation">,</span> 227<span class="token punctuation">,</span> 253<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--freon-selected-outline-color</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>theme.<span class="token variable">$blue-900</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token property">--freon-selected-outline-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">--freon-selected-outline-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token comment">/* Normal text colors */</span>
  <span class="token comment">//--freon-colors-inverse_color: #&#123;theme.$on-secondary&#125;;     /* Text color on non_normal background */</span>
  <span class="token property">--freon-editor-component-background-color</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>theme.<span class="token variable">$surface</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>              <span class="token comment">/* The background color of the editor */</span>
  <span class="token property">--freon-editor-component-color</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>--mdc-theme-primary<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>       <span class="token comment">/* The color of the text, unless set otherwise by the projection */</span>
  <span class="token property">--freon-editor-component-margin</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">--freon-editor-component-padding</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token comment">/* Fonts */</span>
  <span class="token property">--freon-editor-component-font-family</span><span class="token punctuation">:</span> <span class="token string">"Roboto"</span><span class="token punctuation">;</span>    <span class="token comment">/* The font family of the text, unless set otherwise by the projection */</span>
  <span class="token property">--freon-editor-component-font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>          <span class="token comment">/* The font size of the text, unless set otherwise by the projection */</span>
  <span class="token property">--freon-editor-component-font-style</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>       <span class="token comment">/* The font style of the text, unless set otherwise by the projection */</span>
  <span class="token property">--freon-editor-component-font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>      <span class="token comment">/* The font weight of the text, unless set otherwise by the projection */</span>
  <span class="token comment">/* Dropdown colors */</span>
  <span class="token property">--freon-dropdown-component-border-color</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>theme.<span class="token variable">$blue-900</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token property">--freon-dropdown-component-background-color</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>theme.<span class="token variable">$surface</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token property">--freon-dropdown-component-color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>

  <span class="token property">--freon-dropdownitem-component-color</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>theme.<span class="token variable">$blue-900</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token property">--freon-dropdownitem-component-background-color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">--freon-dropdownitem-component-border-color</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>theme.<span class="token variable">$blue-900</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token property">--freon-dropdownitem-component-selected-color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">--freon-dropdownitem-component-selected-background-color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">--freon-dropdownitem-component-hover-color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">--freon-dropdownitem-component-hover-background-color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>

  <span class="token property">--freon-text-component-color</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>theme.<span class="token variable">$blue-900</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token property">--freon-text-component-font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>		<span class="token comment">/* The font size of the text, unless set otherwise by the projection */</span>
  <span class="token property">--freon-text-component-font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>		<span class="token comment">/* The font size of the text, unless set otherwise by the projection */</span>
  <span class="token property">--freon-text-component-font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>	<span class="token comment">/* The font size of the text, unless set otherwise by the projection */</span>
  <span class="token property">--freon-text-component-font-family</span><span class="token punctuation">:</span> <span class="token string">"Arial"</span><span class="token punctuation">;</span>	<span class="token comment">/* The font size of the text, unless set otherwise by the projection */</span>
  <span class="token property">--freon-text-component-padding</span><span class="token punctuation">:</span> 0px 1px 0px 1px<span class="token punctuation">;</span>
  <span class="token property">--freon-text-component-margin</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>

  <span class="token property">--freon-label-component-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">--freon-label-component-background-color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">--freon-label-component-font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>		<span class="token comment">/* The font size of the text, unless set otherwise by the projection */</span>
  <span class="token property">--freon-label-component-font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>		<span class="token comment">/* The font size of the text, unless set otherwise by the projection */</span>
  <span class="token property">--freon-label-component-font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>	<span class="token comment">/* The font size of the text, unless set otherwise by the projection */</span>
  <span class="token property">--freon-label-component-font-family</span><span class="token punctuation">:</span> <span class="token string">"Arial"</span><span class="token punctuation">;</span>	<span class="token comment">/* The font size of the text, unless set otherwise by the projection */</span>
  <span class="token property">--freon-label-component-padding</span><span class="token punctuation">:</span> 0px 1px 0px 1px<span class="token punctuation">;</span>
  <span class="token property">--freon-label-component-margin</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>

  <span class="token comment">/* Popup */</span>
  <span class="token property">--freon-popup-box-shadow</span><span class="token punctuation">:</span> 0 0 6px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--freon-horizontallist-component-padding</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">--freon-horizontallist-component-margin</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>

  <span class="token property">--freon-verticallist-component-padding</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">--freon-verticallist-component-margin</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>


<span class="token punctuation">&#125;</span>

<span class="token selector">.gridcellOdd </span><span class="token punctuation">&#123;</span>
  <span class="token property">--freon-gridcell-component-background-color</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>theme.<span class="token variable">$grey-300</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.gridcellEven </span><span class="token punctuation">&#123;</span>
  <span class="token property">--freon-gridcell-component-background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.gridcell-header </span><span class="token punctuation">&#123;</span>
  <span class="token property">--freon-gridcell-component-background-color</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>theme.<span class="token variable">$grey-500</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.Rules-name-textbox, .CheckingRule-name-textbox </span><span class="token punctuation">&#123;</span>
  <span class="token property">--freon-text-component-background-color</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.Entity-name-textbox </span><span class="token punctuation">&#123;</span>
  <span class="token property">--freon-text-component-background-color</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.StringLiteralExpression-value-textbox </span><span class="token punctuation">&#123;</span>
  <span class="token property">--freon-text-component-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">./*, .*/ </span><span class="token punctuation">&#123;</span>
  <span class="token comment">//--freon-label-component-font-weight: lighter;</span>
  <span class="token property">--freon-label-component-font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
  <span class="token property">--freon-label-component-color</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>theme.<span class="token variable">$grey-500</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.</span><span class="token punctuation">&#123;</span> <span class="token punctuation">&#123;</span>
  <span class="token property">--freon-label-component-font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.using.entity: , .Validation </span><span class="token punctuation">&#123;</span>
  <span class="token property">--freon-label-component-font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">--freon-label-component-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.unit </span><span class="token punctuation">&#123;</span>
  <span class="token property">--freon-label-component-font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">--freon-label-component-color</span><span class="token punctuation">:</span> darkmagenta<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.alias-SetValue-attribute-referencebox-textbox </span><span class="token punctuation">&#123;</span>
  <span class="token property">--freon-text-component-background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.,, .%, .. </span><span class="token punctuation">&#123;</span>
  <span class="token property">--freon-label-component-margin</span><span class="token punctuation">:</span> 0px 0px 0px 0px<span class="token punctuation">;</span>
  <span class="token property">--freon-label-component-padding</span><span class="token punctuation">:</span> 0px 0px 0px 0px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token comment">//.EuroLiteral-cents-numberbox &#123;</span>
<span class="token comment">//  --freon-label-component-margin: 0px;</span>
<span class="token comment">//  --freon-label-component-padding: 0px 1px 0px 1px;</span>
<span class="token comment">//&#125;</span>
<span class="token selector">.alias-binary-pre-textbox, .alias-binary-post-textbox, .alias-exp-left-textbox, .alias-exp-right-textbox </span><span class="token punctuation">&#123;</span>
  <span class="token property">--freon-text-component-margin</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">--freon-text-component-padding</span><span class="token punctuation">:</span> -1px 1px 0px 1px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">html,
body </span><span class="token punctuation">&#123;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> theme.<span class="token variable">$surface</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> theme.<span class="token variable">$on-surface</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">--mdc-theme-primary</span><span class="token punctuation">:</span> #<span class="token punctuation">&#123;</span>theme.<span class="token variable">$primary</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`;return{c(){o=k("h1"),g=c("Styling the Web Application and the Editor"),b=E(),a=k("p"),w=c("The web application, including the editor, can be styled using the scss files in the folder "),f=k("code"),v=c("~webapp/style"),$=c(`. There are two sets of
CSS variables that determine the look of the web application, one for the light theme, and one for the dark theme.
The latter can be found in the folder `),h=k("code"),T=c("~webapp/style/dark"),S=c("."),y=E(),u=k("p"),_=c("The comments and naming should (hopefully) indicate where each variable is being used."),x=E(),e=k("pre"),this.h()},l(n){o=m(n,"H1",{});var t=d(o);g=l(t,"Styling the Web Application and the Editor"),t.forEach(s),b=z(n),a=m(n,"P",{});var i=d(a);w=l(i,"The web application, including the editor, can be styled using the scss files in the folder "),f=m(i,"CODE",{});var C=d(f);v=l(C,"~webapp/style"),C.forEach(s),$=l(i,`. There are two sets of
CSS variables that determine the look of the web application, one for the light theme, and one for the dark theme.
The latter can be found in the folder `),h=m(i,"CODE",{});var P=d(h);T=l(P,"~webapp/style/dark"),P.forEach(s),S=l(i,"."),i.forEach(s),y=z(n),u=m(n,"P",{});var A=d(u);_=l(A,"The comments and naming should (hopefully) indicate where each variable is being used."),A.forEach(s),x=z(n),e=m(n,"PRE",{class:!0});var F=d(e);F.forEach(s),this.h()},h(){B(e,"class","language-scss")},m(n,t){r(n,o,t),p(o,g),r(n,b,t),r(n,a,t),p(a,w),p(a,f),p(f,v),p(a,$),p(a,h),p(h,T),p(a,S),r(n,y,t),r(n,u,t),p(u,_),r(n,x,t),r(n,e,t),e.innerHTML=D},p:j,i:j,o:j,d(n){n&&s(o),n&&s(b),n&&s(a),n&&s(y),n&&s(u),n&&s(x),n&&s(e)}}}class W extends H{constructor(o){super();L(this,o,null,N,O,{})}}export{W as default};
