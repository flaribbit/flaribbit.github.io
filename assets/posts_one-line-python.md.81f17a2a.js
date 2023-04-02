import{_ as s,o as n,c as a,a as p}from"./app.075271e8.js";const b=JSON.parse('{"title":"\u628A python \u4EE3\u7801\u538B\u7F29\u5230\u4E00\u884C","description":"","frontmatter":{"title":"\u628A python \u4EE3\u7801\u538B\u7F29\u5230\u4E00\u884C","date":"2023-04-02T23:00:00.000Z","tags":["python"]},"headers":[],"relativePath":"posts/one-line-python.md"}'),l={name:"posts/one-line-python.md"},o=p(`<p>\u628A\u7A0B\u5E8F\u53D8\u6210\u522B\u4EBA\u770B\u4E0D\u61C2\u7684\u6837\u5B50 hhh\u3002</p><hr><p>\u539F\u7A0B\u5E8F\uFF1A</p><div class="language-py line-numbers-mode"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> numpy </span><span style="color:#CF222E;">as</span><span style="color:#24292F;"> np</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">def</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">fun</span><span style="color:#24292F;">(m, n, ratio</span><span style="color:#CF222E;">=</span><span style="color:#0550AE;">0.7</span><span style="color:#24292F;">):</span></span>
<span class="line"><span style="color:#24292F;">    data </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> np.zeros(m</span><span style="color:#CF222E;">*</span><span style="color:#24292F;">n, </span><span style="color:#953800;">dtype</span><span style="color:#CF222E;">=</span><span style="color:#0550AE;">int</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">    data[:</span><span style="color:#0550AE;">int</span><span style="color:#24292F;">(m</span><span style="color:#CF222E;">*</span><span style="color:#24292F;">n</span><span style="color:#CF222E;">*</span><span style="color:#24292F;">ratio)] </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span></span>
<span class="line"><span style="color:#24292F;">    np.random.shuffle(data)</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> data.reshape((m, n))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">fun(</span><span style="color:#0550AE;">10</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">10</span><span style="color:#24292F;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u9996\u5148\u58F0\u660E\u4E86\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u6362\u6210 lambda\u3002</p><p>\u4F46\u662F lambda \u53EA\u80FD\u6267\u884C\u4E00\u6761\u8868\u8FBE\u5F0F\uFF0C\u4E0D\u80FD\u5199\u8BED\u53E5\uFF0C\u56E0\u6B64\u5C40\u90E8\u53D8\u91CF\u548C\u8D4B\u503C\u8BED\u53E5\u9700\u8981\u53E6\u60F3\u529E\u6CD5\u3002</p><p>\u601D\u8003\uFF0C\u5982\u679C\u6211\u4EEC\u518D\u5957\u4E00\u5C42 lambda\uFF0C\u5C31\u6709\u53D8\u91CF\u4E86\uFF01</p><p>\u90A3\u4E48\u8D4B\u503C\u600E\u4E48\u529E\u5462\uFF1F</p><p>\u7B80\u5355\uFF01python \u91CC <code>a[b]=c</code> \u5B9E\u9645\u4E0A\u8C03\u7528\u7684\u662F <code>__setitem__</code>\uFF0C\u90A3\u5C31\u76F4\u63A5\u5199\u8FD9\u4E2A\u561B\uFF01</p><p>\u63A5\u4E0B\u6765\u628A\u591A\u6761\u8868\u8FBE\u5F0F\u5408\u6210\u4E00\u6761\uFF0C\u76F4\u63A5\u7528 tuple \u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u7ED3\u679C\uFF1A</p><div class="language-py line-numbers-mode"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> numpy </span><span style="color:#CF222E;">as</span><span style="color:#24292F;"> np</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">(</span><span style="color:#CF222E;">lambda</span><span style="color:#24292F;"> m, n, ratio</span><span style="color:#CF222E;">=</span><span style="color:#0550AE;">0.7</span><span style="color:#24292F;">: (</span><span style="color:#CF222E;">lambda</span><span style="color:#24292F;"> d: (d.</span><span style="color:#0550AE;">__setitem__</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">slice</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">None</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">int</span><span style="color:#24292F;">(m</span><span style="color:#CF222E;">*</span><span style="color:#24292F;">n</span><span style="color:#CF222E;">*</span><span style="color:#24292F;">ratio)), </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">),</span></span>
<span class="line"><span style="color:#24292F;"> np.random.shuffle(d), d.reshape((m, n)))[</span><span style="color:#0550AE;">2</span><span style="color:#24292F;">])(np.zeros(m</span><span style="color:#CF222E;">*</span><span style="color:#24292F;">n)))(</span><span style="color:#0550AE;">10</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">10</span><span style="color:#24292F;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,12),e=[o];function r(t,c,y,i,F,d){return n(),a("div",null,e)}const u=s(l,[["render",r]]);export{b as __pageData,u as default};