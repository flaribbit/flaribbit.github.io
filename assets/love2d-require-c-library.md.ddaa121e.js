import{_ as n,c as s,o as a,d as e}from"./app.4924d596.js";const m='{"title":"\u5173\u4E8Elove2d\u5F15\u64CErequire\u5BFC\u5165C/C++\u7F16\u5199\u7684.dll/.so\u6269\u5C55\u5E93\u95EE\u9898","description":"","frontmatter":{"title":"\u5173\u4E8Elove2d\u5F15\u64CErequire\u5BFC\u5165C/C++\u7F16\u5199\u7684.dll/.so\u6269\u5C55\u5E93\u95EE\u9898"},"headers":[{"level":2,"title":"\u6E90\u7801","slug":"\u6E90\u7801"},{"level":3,"title":"test.c","slug":"test-c"},{"level":2,"title":"\u7F16\u8BD1","slug":"\u7F16\u8BD1"},{"level":3,"title":"windows \u548C linux","slug":"windows-\u548C-linux"},{"level":3,"title":"\u5B89\u5353","slug":"\u5B89\u5353"},{"level":2,"title":"\u8C03\u7528","slug":"\u8C03\u7528"}],"relativePath":"love2d-require-c-library.md","lastUpdated":1642819587470}',p={},t=e(`<h2 id="\u6E90\u7801"><a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a> \u6E90\u7801</h2><p>\u6E38\u620F\u9879\u76EE\u4E2D\u9047\u5230\u7684\u72D7\u5C4E\u95EE\u9898\uFF0C\u5206\u4EAB\u4E00\u4E0B\u89E3\u51B3\u7ECF\u9A8C\uFF0C\u4EE5\u4E00\u4E2A\u6700\u57FA\u672C\u7684\u7A0B\u5E8F\u4E3A\u4F8B\uFF1A</p><h3 id="test-c"><a class="header-anchor" href="#test-c" aria-hidden="true">#</a> <code>test.c</code></h3><div class="language-c line-numbers-mode"><pre><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;lua.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;lualib.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;lauxlib.h&quot;</span></span>

<span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">about</span><span class="token punctuation">(</span>lua_State <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">lua_pushstring</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span><span class="token string">&quot;test by flaribbit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">luaL_Reg</span> funcList<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">{</span><span class="token string">&quot;about&quot;</span><span class="token punctuation">,</span> about<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">luaopen_test</span><span class="token punctuation">(</span>lua_State <span class="token operator">*</span>L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">luaL_register</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> funcList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u7F16\u8BD1"><a class="header-anchor" href="#\u7F16\u8BD1" aria-hidden="true">#</a> \u7F16\u8BD1</h2><h3 id="windows-\u548C-linux"><a class="header-anchor" href="#windows-\u548C-linux" aria-hidden="true">#</a> windows \u548C linux</h3><p>\u5728windows\u7CFB\u7EDF\u548Clinux\u7CFB\u7EDF\u4E2D\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528gcc\u7F16\u8BD1\uFF0C\u6CE8\u610F\u94FE\u63A5<code>lua51.dll</code>\u6216\u8005<code>libluajit.so</code>\uFF0C\u8BB0\u5F97\u6539\u6389\u4E0B\u9762\u547D\u4EE4\u4E2D\u7684<code>path/to/</code></p><div class="language-bash line-numbers-mode"><pre><code>gcc test.c path/to/lua51.dll -s -O2 -DNDEBUG -o test.dll
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><pre><code>gcc test.c path/to/libluajit.so -s -O2 -DNDEBUG -o libtest.so
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u5728lua\u4E2D\u8C03\u7528<code>require&quot;test&quot;</code>\u5C31\u53EF\u4EE5\u5BFC\u5165\u4F7F\u7528\u4E86\uFF0C\u6253\u5305\u6E38\u620F\u7684\u65F6\u5019\u8BB0\u5F97\u628A\u5E93\u653E\u5728\u5916\u9762\uFF0C\u548C<code>love.dll</code>\u653E\u5728\u4E00\u8D77\uFF0C\u4E0D\u8981\u585E\u8FDB<code>game.love</code>\u6216\u8005<code>exe</code></p><p>android\u7CFB\u7EDF\u5C31\u6BD4\u8F83\u6076\u5FC3\u4E86\uFF0C\u81EA\u5907NDK\uFF0C\u4EE5\u4E0B\u6559\u7A0B\u5199\u4E8Ewindows\u7CFB\u7EDF\uFF0C\u5728<code>test.c</code>\u6240\u5728\u7684\u76EE\u5F55\u521B\u5EFA<code>Android.mk</code>\u548C<code>Application.mk</code>\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u4E2D\u8BB0\u5F97\u4FEE\u6539<code>path/to/</code>\uFF0C\u4E3Aliblove.so\u6240\u5728\u7684\u76EE\u5F55\uFF08\u53EF\u4EE5\u76F4\u63A5\u89E3\u538Blove2d\u7684\u5B89\u88C5\u5305\u62FF\uFF09</p><h3 id="\u5B89\u5353"><a class="header-anchor" href="#\u5B89\u5353" aria-hidden="true">#</a> \u5B89\u5353</h3><h4 id="android-mk"><a class="header-anchor" href="#android-mk" aria-hidden="true">#</a> <code>Android.mk</code></h4><div class="language-makefile line-numbers-mode"><pre><code>LOCAL_PATH <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">call</span> my-dir<span class="token punctuation">)</span>
<span class="token keyword">include</span> <span class="token variable">$</span><span class="token punctuation">(</span>CLEAR_VARS<span class="token punctuation">)</span>
LOCAL_MODULE <span class="token operator">:=</span> test
LOCAL_SRC_FILES <span class="token operator">:=</span> test.c
LOCAL_LDFLAGS <span class="token operator">:=</span> -Lpath/to/<span class="token variable">$</span><span class="token punctuation">(</span>TARGET_ARCH_ABI<span class="token punctuation">)</span> -llove
LOCAL_C_INCLUDES <span class="token operator">:=</span> <span class="token keyword">include</span>
<span class="token keyword">include</span> <span class="token variable">$</span><span class="token punctuation">(</span>BUILD_SHARED_LIBRARY<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="application-mk"><a class="header-anchor" href="#application-mk" aria-hidden="true">#</a> <code>Application.mk</code></h4><div class="language-makefile line-numbers-mode"><pre><code>APP_CPPFLAGS <span class="token operator">:=</span> -frtti 
APP_LDFLAGS <span class="token operator">:=</span> -latomic
APP_ABI <span class="token operator">:=</span> armeabi-v7a arm64-v8a
APP_PLATFORM <span class="token operator">:=</span> android-16
APP_OPTIM <span class="token operator">:=</span> release
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7136\u540E\u8C03\u7528<code>ndk-build</code>\u7F16\u8BD1\uFF0C\u65E5\u5E38\u8BB0\u5F97\u4FEE\u6539<code>path/to/</code></p><div class="language-bash line-numbers-mode"><pre><code>path/to/ndk-build <span class="token assign-left variable">NDK_PROJECT_PATH</span><span class="token operator">=</span>. <span class="token assign-left variable">NDK_APPLICATION_MK</span><span class="token operator">=</span>Application.mk <span class="token assign-left variable">APP_BUILD_SCRIPT</span><span class="token operator">=</span>Android.mk
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F1A\u62A5\u53EF\u80FD\u9519\u8BEF\u94FE\u63A5\u7684warning\uFF0C\u95EE\u9898\u4E0D\u5927\uFF0C\u7F16\u8BD1\u5B8C\u6210\u540E\u4F1A\u5728<code>libs</code>\u6587\u4EF6\u5939\u91CC\u5F97\u5230\u4E24\u4E2A<code>libtest.so</code></p><h2 id="\u8C03\u7528"><a class="header-anchor" href="#\u8C03\u7528" aria-hidden="true">#</a> \u8C03\u7528</h2><p>\u6700\u540E\u7F16\u5199lua\u7A0B\u5E8F\uFF0C\u8FD9\u91CC\u6709\u4E2A\u5DE8\u5751\uFF0C<code>*.so</code>\u5FC5\u987B\u653E\u5230<code>/data/data/package.name</code>\u91CC\u9762\u624D\u80FD\u88AB<code>require</code>\u6B63\u786E\u52A0\u8F7D\uFF0C\u5426\u5219\u4F1A\u7206\u7C7B\u4F3C\u4E0B\u9762\u7684\u795E\u79D8\u9519\u8BEF</p><div class="language-txt line-numbers-mode"><pre><code>Error

error loading module &#39;test&#39; from file &#39;/sdcard/libtest.so&#39;:
dlopen failed: library &quot;/sdcard/libtest.so&quot; needed or dlopened by &quot;/data/app/org.love2d.android.embed-cfg2TKQ-XsSj13FxWVvTUw==/lib/arm64/liblove.so&quot; is not accessible for the namespace &quot;classloader-namespace&quot;

Traceback
[C]: at 0x7a3d813a7c
[C]: in function &#39;require&#39;
/sdcard/prog.lua:2: in main chunk
[C]: in function &#39;require&#39;
main.lua:2: in main chunk
[C]: in function &#39;require&#39;
[C]: in function &#39;xpcall&#39;
[C]: in function &#39;xpcall&#39;
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF0C\u5982\u4F55\u653E\u5230<code>/data/data/package.name</code>\u91CC\u9762\u5462\u2026\uFF1F</p><p>\u628A<code>*.so</code>\u6587\u4EF6\u6253\u5305\u8FDB<code>game.love</code>\uFF0C\u7136\u540E\u7528\u4E0B\u9762\u7684\u4EE3\u7801copy\u5230save\u6587\u4EF6\u5939\u91CC\uFF0C\u4E5F\u7B97\u662F\u4E2A\u529E\u6CD5\u5427\u3002</p><div class="language-lua line-numbers-mode"><pre><code>package<span class="token punctuation">.</span>cpath<span class="token operator">=</span><span class="token string">&#39;/data/data/org.love2d.android.embed/files/save/archive/lib?.so;&#39;</span><span class="token operator">..</span>package<span class="token punctuation">.</span>cpath
love<span class="token punctuation">.</span>filesystem<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;libtest.so&quot;</span><span class="token punctuation">,</span> love<span class="token punctuation">.</span>filesystem<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&quot;libtest.so&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
require <span class="token string">&quot;test&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>it just works</p><p><a href="https://github.com/flaribbit/love2d-c-library-template" target="_blank" rel="noopener noreferrer">github</a></p>`,27),o=[t];function l(c,r,i,u,d,b){return a(),s("div",null,o)}var h=n(p,[["render",l]]);export{m as __pageData,h as default};
