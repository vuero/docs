import{_ as a,c as t,o,a as s,b as n}from"./app.6662d0ca.js";const b='{"title":"ویوئِرو و Vue 3","description":"","frontmatter":{},"headers":[{"level":2,"title":"ساختار سراسری","slug":"global-structure"},{"level":2,"title":"روتر و ساختار صفحات","slug":"router-and-pages-structure"},{"level":3,"title":"تنظیمات سفارشی روت با تگ <route>","slug":"custom-route-settings-with-route-tag"},{"level":3,"title":"مسیرها را در فایل ./src/router.ts به صورت دستی تعریف کنید","slug":"manually-define-routes-in-the-src-router-ts-file"},{"level":2,"title":"ساختار کامپوننت‌ها","slug":"components-structure"},{"level":3,"title":"کامپوننت بدون پارامتر setup","slug":"component-without-setup-syntax"},{"level":3,"title":"کامپوننت همراه با پارامتر setup","slug":"component-with-setup-syntax"},{"level":3,"title":"نام‌گذاری کامپوننت","slug":"naming-a-component"},{"level":2,"title":"API ترکیبی","slug":"the-composition-api"},{"level":3,"title":"عمیق تر در Vue 3","slug":"going-deeper-in-vue-3"},{"level":2,"title":"Data API fixtures","slug":"data-api-fixtures"},{"level":2,"title":"Vite ، Rollup و Typescript","slug":"vite-rollup-and-typescript"},{"level":2,"title":"با لاینترز (linters) کد را تمیز نگه دارید","slug":"keep-it-clean-with-linters"},{"level":2,"title":"سازگاری کامپایلر تایپ‌اسکریپت با ویو","slug":"keep-it-consistant-with-typescript-checker"}],"relativePath":"documentation/vuero-and-vue-3.md","lastUpdated":1633498117000}',e={},p=s(`<h1 id="vuero-and-vue-3"><a class="header-anchor" href="#vuero-and-vue-3" aria-hidden="true">#</a> ویوئِرو و Vue 3</h1><p>ویو 3 API ترکیبی را معرفی می کند که مجموعه ای از API های افزودنی و مبتنی بر عملکرد است که ترکیب انعطاف پذیر کامپوننت را امکان پذیر می کند.</p><p>می‌توانید آنچه را که از Vue 2 تغییر کرده است در اینجا مشاهده کنید:<br><a href="https://v3.vuejs.org/guide/migration/introduction.html#overview" target="_blank" rel="noopener noreferrer">https://v3.vuejs.org/guide/migration/introduction.html#overview</a></p><p>هنوز هم می توانید کامپوننت‌ها را با استفاده از گزینه های قدیمی API (فیلدهای <code>data</code> / <code>computed</code> / <code>method</code>) بنویسید.<br> بنابراین ، همه افزونه ها/کامپوننت‌های Vue2 باید با Vue3 سازگار باشند.</p><div class="tip custom-block"><p class="custom-block-title">نکته</p><p>توسط تیم اصلی Vue یک راهنمای خوب ارائه شده است تا به شما در شروع کار با API Composition کمک کند:<br><a href="https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf" target="_blank" rel="noopener noreferrer">https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf</a></p></div><h2 id="global-structure"><a class="header-anchor" href="#global-structure" aria-hidden="true">#</a> ساختار سراسری</h2><div class="language-jolie"><pre><code>Vuero
<span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>vscode<span class="token operator">/</span>
<span class="token symbol">|</span><span class="token operator">--</span> nginx<span class="token operator">/</span>
<span class="token symbol">|</span><span class="token operator">--</span> public<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> api<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> img<span class="token operator">/</span>
<span class="token symbol">|</span>
<span class="token symbol">|</span><span class="token operator">--</span> src<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> assets<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> components<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> composable<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> data<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> directives<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> layouts<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> locales<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> models<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> pages<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> scss<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> utils<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> App<span class="token punctuation">.</span>vue
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> i18n<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> <span class="token keyword">main</span><span class="token punctuation">.</span>ts
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> router<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> shims<span class="token operator">-</span>vue<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> window<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>
<span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>dockerignore
<span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>editorconfig
<span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>js
<span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>gitignore
<span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>prettierignore
<span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>prettierrc<span class="token punctuation">.</span>js
<span class="token symbol">|</span><span class="token operator">--</span> components<span class="token operator">-</span><span class="token keyword">global</span><span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts
<span class="token symbol">|</span><span class="token operator">--</span> components<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts
<span class="token symbol">|</span><span class="token operator">--</span> Dockerfile
<span class="token symbol">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token symbol">|</span><span class="token operator">--</span> package<span class="token operator">-</span>lock<span class="token punctuation">.</span>json
<span class="token symbol">|</span><span class="token operator">--</span> package<span class="token punctuation">.</span>json
<span class="token symbol">|</span><span class="token operator">--</span> stylelint<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
<span class="token symbol">|</span><span class="token operator">--</span> tsconfig<span class="token punctuation">.</span>json
<span class="token symbol">|</span><span class="token operator">--</span> vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts
<span class="token symbol">|</span><span class="token operator">--</span> yarn<span class="token punctuation">.</span>lock
</code></pre></div><p>ساختار دایرکتوری می تواند برای افرادی که با ابزارهای ساخت و بسته های جاوا اسکریپت آشنا نیستند غیر معمول به نظر برسد. ما هر قسمت آن را توضیح می‌دهیم تا با چگونکی کارکرد آنها آشنا شوید.</p><h2 id="router-and-pages-structure"><a class="header-anchor" href="#router-and-pages-structure" aria-hidden="true">#</a> روتر و ساختار صفحات</h2><div class="language-jolie"><pre><code>Vuero
<span class="token symbol">|</span><span class="token operator">--</span> src<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> pages<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> admin<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> auth<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> components<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> elements<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> error<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> webapp<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> admin<span class="token punctuation">.</span>vue
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> auth<span class="token punctuation">.</span>vue
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>vue
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token symbol">|</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> router<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>
</code></pre></div><p>ویوئِرو <code>vue-router</code> را از Vue 3 استفاده می کند، می‌توانید با مراجعه به اسناد مربوطه اطلاعات بیشتری را بیابید: <a href="https://next.router.vuejs.org/" target="_blank" rel="noopener noreferrer">https://next.router.vuejs.org/</a></p><p>روتر Vue اجازه می دهد تا به صورت پویا یک کامپوننت را بر اساس یک URL ارائه شده به عنوان صفحه نمایش داد.<br> برای انجام این کار ، ما باید هر روت را به یک کامپوننت متصل کنیم.</p><p>به لطف افزونه‌ی <code>vite-plugin-pages</code>، روت‌ها از فایلهای <code>src/pages/*.vue</code> ایجاد می شوند</p><h3 id="custom-route-settings-with-route-tag"><a class="header-anchor" href="#custom-route-settings-with-route-tag" aria-hidden="true">#</a> تنظیمات سفارشی برای روت با تگ <code>&lt;route&gt;</code></h3><p>اگر می‌خواهید از امکانات مسیردهی استفاده کنید می‌توانید از تگ <code>&lt;route&gt;</code> در فایل‌های <code>src/pages/*.vue</code> استفاده کنید</p><p><strong>تغییر آدرس دادن از یک صفحه به صفحه دیگر</strong></p><div class="language-vue"><pre><code><span class="token comment">&lt;!-- ./src/pages/custom-redirect.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yaml<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
redirect:
  name: index
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><blockquote><p>در صورت بازدید از <a href="http://localhost:3000/custom-redirect" target="_blank" rel="noopener noreferrer">http://localhost:3000/custom-redirect</a> شما به <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer" class="ltr">http://localhost:3000/</a>  انتقال خواهید یافت.</p></blockquote><p><strong>افزودن متاداده‌هایی که در رویدادهای چرخه‌ی عملکرد روتر می‌توانند استفاده شوند</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yaml<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
meta:
  requiresAuth: true
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// </span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><blockquote><p>برای فهم بهتر عملکردها به این صفحه <code>src/app.ts</code> نگاهی بیندازید</p></blockquote><div class="tip custom-block"><p class="custom-block-title">نکته</p><p>می توانید همه گزینه ها را از RouteRecordRaw تنظیم کنید<br> در اینجا اسناد مربوط به next router را بخوانید: <a href="https://next.router.vuejs.org/api/#routerecordraw" target="_blank" rel="noopener noreferrer">https://next.router.vuejs.org/api/#routerecordraw</a></p></div><h3 id="manually-define-routes-in-the-src-router-ts-file"><a class="header-anchor" href="#manually-define-routes-in-the-src-router-ts-file" aria-hidden="true">#</a> مسیرها را در فایل <code>./src/router.ts</code> به صورت دستی تعریف کنید</h3><div class="warning custom-block"><p class="custom-block-title">هشدار</p><p>توصیه ما استفاده از <code>vite-plugin-pages</code> می‌باشد که صفحات را به طور خودکار بر اساس سیستم فایل ثبت می کند (مانند نحوه عملکرد NuxtJS)<br><a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noopener noreferrer">لطفاً اسناد آن را در github بخوانید</a></p></div><p>در اینجا نمونه ای از ثبت صفحه‌ای جدید به صورت دستی آورده شده است.</p><div class="language-typescript"><pre><code><span class="token comment">// file ./src/router.ts</span>

<span class="token comment">// First you need to comment generated page loading</span>
<span class="token comment">// import routes from &#39;virtual:pages-generated&#39; &lt;--</span>

<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Then we can define our routes</span>
<span class="token keyword">const</span> routes<span class="token operator">:</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// This is a simple route</span>
  <span class="token punctuation">{</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;/@src/pages/index.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    props<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// This is a nested route, they will all share src/pages/auth.vue layout</span>
  <span class="token comment">// which need to have a &lt;RouterView /&gt; component</span>
  <span class="token comment">// to render they childrens content</span>
  <span class="token punctuation">{</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;/@src/pages/auth.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/auth&quot;</span><span class="token punctuation">,</span>
    props<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;/@src/pages/auth/login-1.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&quot;auth-login-1&quot;</span><span class="token punctuation">,</span>
        path<span class="token operator">:</span> <span class="token string">&quot;login-1&quot;</span><span class="token punctuation">,</span>
        props<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// This is a &quot;catch-all&quot; 404 route</span>
  <span class="token punctuation">{</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;/@src/pages/[...all].vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;404&quot;</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/:all(.*)&quot;</span><span class="token punctuation">,</span>
    props<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>مثال صفحه ساده</p><div class="language-vue"><pre><code>// file ./src/pages/index.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useHead <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/head&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> pageTitle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@src/state/sidebarLayoutState&#39;</span>

pageTitle<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;Blank Page 3&#39;</span>
<span class="token function">useHead</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&quot;Blank Page 3 - Sidebar - Vuero&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SidebarLayout</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Content Wrapper --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page-content-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!--
        Page content goes here

        You can see pages content samples from 
        files in /src/components/pages directory
      --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SidebarLayout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="components-structure"><a class="header-anchor" href="#components-structure" aria-hidden="true">#</a> ساختار کامپوننت‌ها</h2><div class="language-jolie"><pre><code>Vuero
<span class="token symbol">|</span><span class="token operator">--</span> src<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> layouts<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> AuthLayout<span class="token punctuation">.</span>vue
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> DefaultLayout<span class="token punctuation">.</span>vue
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> MinimalLayout<span class="token punctuation">.</span>vue
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token symbol">|</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> components<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> base<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> navigation<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> pages<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> partials<span class="token operator">/</span>
<span class="token symbol">|</span>
<span class="token symbol">|</span><span class="token operator">--</span> components<span class="token operator">-</span><span class="token keyword">global</span><span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts
<span class="token symbol">|</span><span class="token operator">--</span> components<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts
</code></pre></div><p>پوشه <code>components</code> همه المان‌های قابل استفاده مجدد را در خود نگه می دارد. شامل قطعاتی از کد هستند که می توانید در برنامه خود بارها استفاده کنید: می تواند یک دکمه ، فهرست ، بخش محتوا یا هر چیزی که می خواهید باشد. شما می توانید هر تعداد زیر پوشه ای که می خواهید  برای سازماندهی کامپوننت‌ها ایجاد کنید.</p><ul><li>کامپوننت‌های <code>/base</code> شامل همه بلوک های پایه قابل استفاده مجدد مانند <code> &lt;v-button&gt; </code> و <code> &lt;v-tag&gt; </code> هستند.</li><li>کامپوننت‌های <code>/navigation</code> شامل  طرحبندی‌های اصلی سایدبر، فهرست‌ها و پانل‌ها می‌شود.</li><li><code>/pages</code> نشان دهنده محتوای داخلی هر صفحه در ویوئِرو است. به این صورت انتزاعی شده است بنابراین می توان از آن در هر نوع طرح بندی مجدداً استفاده کرد.</li><li>کامپوننت‌های <code>/partials</code> اجزا و تکه هایی از صفحات هستند که در کل قالب مجدداً قابل استفاده می‌باشند.</li></ul><p>پوشه <code>layouts</code> کامپوننت‌هایی را که نقش بسته بندی صفحه را دارند نگه می دارد. آنها یک نگهدارنده پیش فرض دارند که باید محتوای صفحه خود را در آن وارد کنید.</p><div class="tip custom-block"><p class="custom-block-title">نکته</p><p>اگر در نظر دارید نسخه جدید ویوئِرو را هنگام انتشار دریاف و نصب کنید، توصیه می‌کنیم کامپوننت‌های خود را در پوشه <code>/components/custom </code> بر اساس اجزایی که می خواهید تغییر دهید، ایجاد کنید. برای طرح‌بندی‌ها نیز از روی طرح نمونه کپی بسازید. <br> هنگامی که نسخه های جدید را ارسال می کنیم ، می توانید پرونده ها را با فایل جدید جایگزین کنید.</p></div><h3 id="component-without-setup-syntax"><a class="header-anchor" href="#component-without-setup-syntax" aria-hidden="true">#</a> کامپوننت بدون پارامتر setup</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// file: ./src/components/MyComponent.vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// we also need to export component here</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;MyComponent&quot;</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    myProps<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Object<span class="token punctuation">,</span>
      required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// MyComponent Composition API</span>
    <span class="token keyword">const</span> myVar <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// note that we have to return variables that</span>
    <span class="token comment">// we want to expose to our template</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      myVar<span class="token punctuation">,</span>
      props<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- MyComponent Template --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ myVar }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>{{ props.myProps }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 
    OtherComponent is lazyloaded automaticaly 
    due to unplugin-vue-components

    @see https://github.com/antfu/unplugin-vue-components
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtherComponent</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="component-with-setup-syntax"><a class="header-anchor" href="#component-with-setup-syntax" aria-hidden="true">#</a> کامپوننت همراه با پارامتر setup</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// component will be named with it filename</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MyComponentOptions</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> string<span class="token punctuation">;</span>
  link<span class="token operator">:</span> string<span class="token punctuation">;</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// define our props using typescript interface</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MyComponentProps</span> <span class="token punctuation">{</span>
  options<span class="token operator">:</span> MyComponentOptions<span class="token punctuation">;</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span> <span class="token comment">// using ?: make the props optional, so we have to define its defaults</span>
<span class="token punctuation">}</span>

<span class="token comment">// we can use defineProps and withDefaults which are globally defined</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span>defineProps<span class="token operator">&lt;</span>MyComponentProps<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">// no default colors will be set as default</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// here all declared/imported variables will be available in our template</span>
<span class="token keyword">const</span> myVar <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- MyComponent Template --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ myVar }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ props }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 
    OtherComponent is lazyloaded automaticaly 
    due to unplugin-vue-components

    @see https://github.com/antfu/unplugin-vue-components
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtherComponent</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>همه کامپوننت‌های موجود در ویوئِرو از نحو <code>&lt;script setup</code>  استفاده می کنند که به ما امکان می دهد فقط تابع <code>setup()</code> را بنویسیم بدون نیاز به برگرداندن آنچه که می خواهیم در قالب خود قرار دهیم.</p><div class="tip custom-block"><p class="custom-block-title">استفاده کنندگان VSCode</p><p>شروع به تایپ <code>&lt;script</code> در یک فایل خالی <code>.vue</code> کنید تا یک پیشنهاد فعال شود.</p></div><h3 id="naming-a-component"><a class="header-anchor" href="#naming-a-component" aria-hidden="true">#</a> نام‌گذاری کامپوننت</h3><p>هنگام ارجاع به کامپوننت‌های داخل قالب، از <code>CamelCase</code> به جای نوتیشن <code>pascal-case</code> استفاده کنید. <br> نام همه کامپوننت‌ها باید منحصر به فرد باشد زیرا بارگیری خودکار به کمک <a href="https://github.com/antfu/unplugin-vue-components" target="_blank" rel="noopener noreferrer"><code>unplugin-vue-components</code></a> فعال است.</p><div class="tip custom-block"><p class="custom-block-title">نکته</p><p>می توانید همه توصیه ها و بهترین شیوه ها را در راهنمای استایل بندی Vue3 بیابید<br><a href="https://v3.vuejs.org/style-guide" target="_blank" rel="noopener noreferrer">https://v3.vuejs.org/style-guide</a></p></div><h2 id="the-composition-api"><a class="header-anchor" href="#the-composition-api" aria-hidden="true">#</a> API ترکیبی</h2><div class="language-jolie"><pre><code>Vuero
<span class="token symbol">|</span><span class="token operator">--</span> src<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> composable<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> useCreditcardMask<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> useDropdown<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> useMarkdownToc<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> useNotyf<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> state<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> activePanelState<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> activeSidebarState<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> darkModeState<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> mobileSidebarState<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> navbarLayoutState<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> navbarState<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> responsiveState<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> sidebarLayoutState<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> themeColors<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> wizardState<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>
</code></pre></div><p>از آنجا که ما در حال حاضر API قدرتمند ترکیبی داریم ، دیگر نیازی به استفاده از <code>vuex</code> برای به اشتراک گذاشتن وضعیت بین کامپوننت‌ها نداریم. <br><em><a href="https://github.com/vuejs/vuex/tree/4.0/examples/composition/chat" target="_blank" rel="noopener noreferrer">اینجا مثالی از استفاده‌ی API ترکیبی vuex آمده است</a></em></p><p>در عوض ما متغیرها را در فایلهای جداگانه با استفاده از روشهای <code>ref</code> یا <code>reactive</code> از بسته جدید <code>vue</code> تعریف می کنیم. آن متغیرها در کل پروژه شما واکنش پذیر خواهند بود. <br> <em> شما می توانید نمونه های مرتبط را در <code>./src/state</code> </em> مشاهده کنید</p><p>همچنین برای کاهش اندازه کامپوننت و امکان استفاده مجدد آسان از کد ، منطق کد بصورت توابع <strong>ترکیبی</strong> جداگانه تعریف می‌شود. آن توابع یک وضعیت محدوده‌دار (scoped state) ایجاد می کنند (برای مثال در یک دراپ دان با قابلیت استفاده مجدد مناسب است). <br> <em> نمونه های مرتبط را می توانید در <code>./src/composable</code> </em> مشاهده کنید</p><div class="tip custom-block"><p class="custom-block-title">نکته</p><p>راهنما را باز نگه دارید!<br><a href="https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf" target="_blank" rel="noopener noreferrer">https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf</a></p><p>به <code>pinia</code> یک ذخیره‌سازی بصری ، ایمن و انعطاف پذیر برای Vue مراجعه کنید.<br><a href="https://github.com/posva/pinia/" target="_blank" rel="noopener noreferrer">https://github.com/posva/pinia/</a></p><p>پیشرفته: چرا Composition API در Vue معرفی شد <a href="https://v3.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noopener noreferrer">https://v3.vuejs.org/guide/composition-api-introduction.html</a></p></div><h3 id="going-deeper-in-vue-3"><a class="header-anchor" href="#going-deeper-in-vue-3" aria-hidden="true">#</a> عمیق تر در Vue 3</h3>`,50),c=n("div",{style:{"text-align":"center",margin:"30px 0"}},[n("iframe",{width:"720",height:"405",src:"https://www.youtube.com/embed/0JJPfz5dg20",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),l=s(`<div class="tip custom-block"><p class="custom-block-title">نکته</p><p>مشاهده دوره کامل موجود در Vue Mastery:<br><a href="https://www.vuemastery.com/courses/vue3-deep-dive-with-evan-you/vue3-overview" target="_blank" rel="noopener noreferrer">https://www.vuemastery.com/courses/vue3-deep-dive-with-evan-you/vue3-overview</a></p></div><h2 id="data-api-fixtures"><a class="header-anchor" href="#data-api-fixtures" aria-hidden="true">#</a> Data API fixtures</h2><div class="language-jolie"><pre><code>Vuero
<span class="token symbol">|</span><span class="token operator">--</span> public<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> api<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> companies<span class="token punctuation">.</span>json
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> conversation1<span class="token punctuation">.</span>json
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> conversation2<span class="token punctuation">.</span>json
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> conversation3<span class="token punctuation">.</span>json
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> conversation4<span class="token punctuation">.</span>json
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> conversation5<span class="token punctuation">.</span>json
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> search<span class="token punctuation">.</span>json
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> users<span class="token punctuation">.</span>json
<span class="token symbol">|</span><span class="token operator">--</span> src<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> data<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> apps<span class="token operator">/</span>
<span class="token symbol">|</span>               <span class="token symbol">|</span><span class="token operator">--</span> kanban<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>               <span class="token symbol">|</span><span class="token operator">--</span> saas<span class="token operator">-</span>billing<span class="token punctuation">.</span>ts
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> dashboard<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> documentation<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> landing<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> layouts<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> users<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> widgets<span class="token operator">/</span>
<span class="token symbol">|</span>          <span class="token symbol">|</span><span class="token operator">--</span> wizard<span class="token operator">/</span>
</code></pre></div><p>احتمالاً قبلاً متوجه شده اید که فایل های <code>json</code> در پوشه <code>public/api</code> قرار دارند. <br> برخی از کامپوننت‌ها این فایل ها را برای شبیه سازی درخواست‌ها از یک API واقعی مورد استفاده قرار می‌دهند.</p><p>این فایل‌ها ساختار دلخواه دارند و بصورت فیک ساخته شده‌اند که مثالی از نحوه‌ی استفاده و درخواست با API ترکیبی باشد (از <code>axios</code> برای درخواست‌ها استفاده شده است که پکیجی محبوب بدین منظور می‌باشد)</p><p>فایل های داده که در پوشه <code>src/data</code> قرار دارند مستقیماً به عنوان داده‌های ایستا در کامپوننت‌ها آورده شده‌اند.</p><h2 id="vite-rollup-and-typescript"><a class="header-anchor" href="#vite-rollup-and-typescript" aria-hidden="true">#</a> Vite ، Rollup و Typescript</h2><div class="language-jolie"><pre><code>Vuero
<span class="token symbol">|</span><span class="token operator">--</span> tsconfig<span class="token punctuation">.</span>json
<span class="token symbol">|</span><span class="token operator">--</span> vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts
</code></pre></div><p>ویوئِرو از Vite استفاده می‌کند که ابزاری برای بیلد کردن پروژه‌های وب است که موارد زیر را پشتیبانی می‌کند:</p><ul><li>محیط توسعه‌س سریع با پشتیبانی از نمایش سریع تغییرات <em>محیط توسعه‌س سریع با پشتیبانی از نمایش سریع تغییرات(با استفاده از <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noopener noreferrer"><code>native javascript modules</code></a>)</em></li><li>بیلد کردن نسخه‌ی نهایی آپتیمایز شده <em>(با استفاده از<a href="https://github.com/rollup/rollup" target="_blank" rel="noopener noreferrer"><code>rollup</code></a> و <a href="https://webpack.js.org/guides/tree-shaking/" target="_blank" rel="noopener noreferrer"><code>tree-shaking</code></a>)</em></li><li>پشتیبانی پیشفرض از تایپ اسکریپت</li></ul><p>در حقیقت موقع ران کردن دستور <code>npm run dev</code> این دستور در پشت پرده ران می‌شود <code>vite</code>.</p><p>برای کسب اطلاعات بیشتر در مورد این ابزار فوق العاده که توسط تیم اصلی vuejs ساخته شده است ، <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">اسناد Vite</a> را بررسی کنید. شما یاد خواهید گرفت که چگونه:</p><ul><li>اضافه کردن پیش پردازنده postcss</li><li>JSX را ادغام کنید</li><li>کد وب اسمبلی را پیاده سازی کنید</li><li>نام مستعار مسیردهی فایل‌ها را اضافه کنید</li><li>و خیلی بیشتر</li></ul><p>Typescript فقط افزونه Javascript است ، اگر تازه کار هستید ، نترسید زیرا همه کدهای جاوا اسکریپت معتبر نیز کد TypeScript هستند. <em>(<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">مستندات تایپ اسکریپت</a>)</em><br> مزایای اصلی استفاده از Typescript عبارتند از:</p><ul><li>کد خود را زودتر معتبر می کند</li><li>تکمیل خودکار را ارائه می دهد</li><li>پشتیبانی از بررسی انواع داده</li></ul><h2 id="keep-it-clean-with-linters"><a class="header-anchor" href="#keep-it-clean-with-linters" aria-hidden="true">#</a> با لاینترز (linters) کد را تمیز نگه دارید</h2><div class="language-jolie"><pre><code>Vuero
<span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>vscode<span class="token operator">/</span>
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> extensions<span class="token punctuation">.</span>json
<span class="token symbol">|</span>   <span class="token symbol">|</span><span class="token operator">--</span> settings<span class="token punctuation">.</span>json
<span class="token symbol">|</span>
<span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>editorconfig
<span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>js
<span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>prettierignore
<span class="token symbol">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>prettierrc<span class="token punctuation">.</span>js
<span class="token symbol">|</span><span class="token operator">--</span> commitlint<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
<span class="token symbol">|</span><span class="token operator">--</span> stylelint<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
</code></pre></div><p>از آنجا که ما عاشق کد تمیز هستیم ، 4 لاینتر را پیکربندی کرده ایم که اهداف خود را دارند:</p><ul><li><code>eslint</code>: جلوگیری از نگرانی های مربوط به کیفیت کد (بدون متغییرهای بلا استفاده ، ...)</li><li><code>stylelint</code>: جلوگیری از نگرانی های مربوط به کیفیت CSS (بدون رنگ نامعتبر ، ...)</li><li><code>prettier</code>: دسته بندی قوانین قالب بندی (حداکثر طول خط ، ...)</li><li><code>commitlint</code>: قالب بندی پیام های کامیت را مدیریت می کند</li></ul><p>با اجرای کد زیر می توانید کیفیت کد خود را بررسی کنید</p><div class="language-bash"><pre><code><span class="token comment"># using npm</span>
<span class="token function">npm</span> run test:lint

<span class="token comment"># using yarn</span>
<span class="token function">yarn</span> test:lint
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">نکته</p><p>همچنین می توانید از دستور <code>test:tsc</code> برای بررسی خطاهای تایپ اسکریپت از طریق بسته <code>vue-tsc</code> استفاده کنید!</p></div><p>لاینترها به تنهایی می توانند بسیاری از مسائل را برطرف کنند. برای انجام این کار ، سعی کنید این کد را اجرا کنید</p><div class="language-bash"><pre><code><span class="token comment"># using npm</span>
<span class="token function">npm</span> run lint

<span class="token comment"># using yarn</span>
<span class="token function">yarn</span> lint
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">استفاده کنندگان VSCode</p><p>برنامه های افزودنی توصیه شده را نصب کنید ، سپس با هر بار ذخیره فایل ها ، خطایابی رخ می دهد!</p></div><h2 id="keep-it-consistant-with-typescript-checker"><a class="header-anchor" href="#keep-it-consistant-with-typescript-checker" aria-hidden="true">#</a> سازگاری کامپایلر تایپ‌اسکریپت با ویو</h2><p>با تشکر از کار فوق العاده ای که توسط <a href="https://github.com/johnsoncodehk" target="_blank" rel="noopener noreferrer">https://github.com/johnsoncodehk</a> انجام شده است ، می توانیم کد Vue را با کامپایلر تایپ اسکریپت بررسی کنیم. این به ما این امکان را می دهد تا بررسی کنیم که آیا کامپوننت‌ها آنطور که باید کار کرده‌اند یا نه و از خطا جلوگیری می کنیم.</p><p>برای بررسی خطاها می توانید کامپایلر را اجرا کنید:</p><div class="language-bash"><pre><code><span class="token comment"># using npm</span>
<span class="token function">npm</span> run test:tsc

<span class="token comment"># using yarn</span>
<span class="token function">yarn</span> test:tsc
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">نکته</p><p>شما می توانید بررسی خطای آنی را در VSCode با افزونه <a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" target="_blank" rel="noopener noreferrer">volar</a> فعال کنید.<br> این مراحل را دنبال کنید تا فعال شود:<br><a href="https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669" target="_blank" rel="noopener noreferrer">https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669</a></p></div>`,30),r=[p,c,l];function u(i,k,m,d,g,h){return o(),t("div",null,r)}var v=a(e,[["render",u]]);export{b as __pageData,v as default};
