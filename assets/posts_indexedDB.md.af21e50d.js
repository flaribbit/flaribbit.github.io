import{_ as n,o as s,c as a,a as p}from"./app.9935db8c.js";const m='{"title":"indexedDB \u5165\u95E8","description":"","frontmatter":{"title":"indexedDB \u5165\u95E8","date":"2022-06-01T16:42:00.000Z","tags":["js","\u7B14\u8BB0"]},"headers":[{"level":2,"title":"\u6253\u5F00\u6570\u636E\u5E93","slug":"\u6253\u5F00\u6570\u636E\u5E93"},{"level":2,"title":"\u5982\u679C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6570\u636E\u5E93","slug":"\u5982\u679C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6570\u636E\u5E93"},{"level":2,"title":"\u5B58\u50A8\u6D88\u606F","slug":"\u5B58\u50A8\u6D88\u606F"},{"level":2,"title":"\u8BFB\u53D6\u6D88\u606F","slug":"\u8BFB\u53D6\u6D88\u606F"}],"relativePath":"posts/indexedDB.md"}',t={},e=p(`<p>\u7B80\u5355\u5B66\u4E60\u4E86\u4E00\u4E0B indexedDB\uFF0C\u7136\u540E\u5C01\u88C5\u4E86\u4E00\u4E0B\u3002</p><hr><h2 id="\u6253\u5F00\u6570\u636E\u5E93" tabindex="-1">\u6253\u5F00\u6570\u636E\u5E93 <a class="header-anchor" href="#\u6253\u5F00\u6570\u636E\u5E93" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> openDatabase <span class="token operator">=</span> <span class="token punctuation">(</span>dbname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>IDBDatabase<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> request <span class="token operator">=</span> window<span class="token punctuation">.</span>indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>dbname<span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>result<span class="token punctuation">)</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onupgradeneeded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u5982\u679C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6570\u636E\u5E93" tabindex="-1">\u5982\u679C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6570\u636E\u5E93 <a class="header-anchor" href="#\u5982\u679C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6570\u636E\u5E93" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">const</span> prepareMessageStore <span class="token operator">=</span> <span class="token punctuation">(</span>db<span class="token operator">:</span> IDBDatabase<span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>db<span class="token punctuation">.</span>objectStoreNames<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">createObjectStore</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token punctuation">{</span> keyPath<span class="token operator">:</span> <span class="token string">&#39;message_id&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  store<span class="token punctuation">.</span><span class="token function">createIndex</span><span class="token punctuation">(</span><span class="token string">&#39;user_id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;user_id&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> unique<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  store<span class="token punctuation">.</span><span class="token function">createIndex</span><span class="token punctuation">(</span><span class="token string">&#39;time&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;time&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> unique<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u770B\u7740\u633A\u597D\uFF0C\u4F46\u662F\u8FD9\u91CC\u9519\u4E86\u3002</p><p>\u8FD0\u884C\u65F6\u4F1A\u62A5\u9519\uFF1A<code>DOMException: Failed to execute &#39;createObjectStore&#39; on &#39;IDBDatabase&#39;: The database is not running a version change transaction.</code></p><p>\u539F\u56E0\u662F\u53EA\u6709\u5728 <code>onupgradeneeded</code> \u56DE\u8C03\u4E2D\u624D\u80FD\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u5982\u679C\u662F <code>onsuccess</code> \u7684\u56DE\u8C03\u4E2D\u6267\u884C\u5219\u4F1A\u62A5\u8FD9\u4E2A\u9519\u8BEF\u3002</p><p>\u6240\u4EE5\u8981\u521B\u5EFA\u65B0\u8868\uFF0C\u5C31\u9700\u8981\u7528\u4E00\u4E2A\u66F4\u9AD8\u7684\u7248\u672C\u53F7\u91CD\u65B0 <code>open</code>\uFF0C\u7136\u540E\u5728 <code>onupgradeneeded</code> \u56DE\u8C03\u4E2D <code>createObjectStore</code>\u3002</p><p><s>\u4E0D\u5982\u628A\u6240\u6709\u6D88\u606F\u5806\u5230\u4E00\u4E2A\u8868\u91CC\u5427\uFF01</s></p><h2 id="\u5B58\u50A8\u6D88\u606F" tabindex="-1">\u5B58\u50A8\u6D88\u606F <a class="header-anchor" href="#\u5B58\u50A8\u6D88\u606F" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> storeMessage <span class="token operator">=</span> <span class="token punctuation">(</span>db<span class="token operator">:</span> IDBDatabase<span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">prepareMessageStore</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> request <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;readwrite&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        message_id<span class="token operator">:</span> message<span class="token punctuation">.</span>message_id<span class="token punctuation">,</span>
        user_id<span class="token operator">:</span> message<span class="token punctuation">.</span>user_id<span class="token punctuation">,</span>
        name<span class="token operator">:</span> message<span class="token punctuation">.</span>sender<span class="token punctuation">.</span>card <span class="token operator">||</span> message<span class="token punctuation">.</span>sender<span class="token punctuation">.</span>nickname<span class="token punctuation">,</span>
        time<span class="token operator">:</span> message<span class="token punctuation">.</span>time<span class="token punctuation">,</span>
        text<span class="token operator">:</span> message<span class="token punctuation">.</span>message<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u8BFB\u53D6\u6D88\u606F" tabindex="-1">\u8BFB\u53D6\u6D88\u606F <a class="header-anchor" href="#\u8BFB\u53D6\u6D88\u606F" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> getMessage <span class="token operator">=</span> <span class="token punctuation">(</span>db<span class="token operator">:</span> IDBDatabase<span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> limit<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> request <span class="token operator">=</span> db
      <span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&#39;time&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">openCursor</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;prev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> cursor <span class="token operator">=</span> request<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>cursor<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          cursor<span class="token punctuation">.</span><span class="token function">continue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,15),o=[e];function c(u,l,r,i,k,b){return s(),a("div",null,o)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};