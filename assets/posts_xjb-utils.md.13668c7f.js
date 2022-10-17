import{_ as s,o as n,c as a,a as l}from"./app.ea5a7620.js";const m=JSON.parse('{"title":"\u5404\u79CD\u5947\u602A\u7684\u7A0B\u5E8F\u5907\u4EFD","description":"","frontmatter":{"title":"\u5404\u79CD\u5947\u602A\u7684\u7A0B\u5E8F\u5907\u4EFD","date":"2022-04-13T22:00:00.000Z","tags":["c++"]},"headers":[{"level":2,"title":"\u519B\u5907\u7ADE\u8D5B\u4E4B c++ \u5B9E\u73B0 enumerate","slug":"\u519B\u5907\u7ADE\u8D5B\u4E4B-c-\u5B9E\u73B0-enumerate","link":"#\u519B\u5907\u7ADE\u8D5B\u4E4B-c-\u5B9E\u73B0-enumerate","children":[]},{"level":2,"title":"c++ \u81EA\u5E26\u7684\u7F16\u7801\u8F6C\u6362","slug":"c-\u81EA\u5E26\u7684\u7F16\u7801\u8F6C\u6362","link":"#c-\u81EA\u5E26\u7684\u7F16\u7801\u8F6C\u6362","children":[]},{"level":2,"title":"\u7F3A\u5565\u8865\u5565","slug":"\u7F3A\u5565\u8865\u5565","link":"#\u7F3A\u5565\u8865\u5565","children":[]}],"relativePath":"posts/xjb-utils.md"}'),p={name:"posts/xjb-utils.md"},o=l(`<h2 id="\u519B\u5907\u7ADE\u8D5B\u4E4B-c-\u5B9E\u73B0-enumerate" tabindex="-1">\u519B\u5907\u7ADE\u8D5B\u4E4B c++ \u5B9E\u73B0 enumerate <a class="header-anchor" href="#\u519B\u5907\u7ADE\u8D5B\u4E4B-c-\u5B9E\u73B0-enumerate" aria-hidden="true">#</a></h2><p>\u548C\u9524\u54E5\u7684\u4E00\u6B21\u519B\u5907\u7ADE\u8D5B\uFF0C\u5B9E\u73B0\u65B9\u6CD5\u6BD4\u8F83\u66B4\u529B\uFF0C\u4F46\u5C45\u7136\u8FD8\u633A\u597D\u7528</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#CF222E;">#include</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#CF222E;">#include</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#CF222E;">#include</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&lt;string&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">using</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">namespace</span><span style="color:#24292F;"> </span><span style="color:#953800;">std</span><span style="color:#24292F;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">template</span><span style="color:#24292F;"> &lt;</span><span style="color:#CF222E;">typename</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">enumerate</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">   </span><span style="color:#CF222E;">private:</span></span>
<span class="line"><span style="color:#24292F;">    T</span><span style="color:#CF222E;">&amp;</span><span style="color:#24292F;"> obj;</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">using</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">iter_t</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">decltype</span><span style="color:#24292F;">(obj.</span><span style="color:#8250DF;">begin</span><span style="color:#24292F;">());</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">using</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">item_t</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">decltype</span><span style="color:#24292F;">(</span><span style="color:#CF222E;">*</span><span style="color:#24292F;">obj.</span><span style="color:#8250DF;">begin</span><span style="color:#24292F;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">   </span><span style="color:#CF222E;">public:</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">enumerate</span><span style="color:#24292F;">(</span><span style="color:#953800;">T</span><span style="color:#CF222E;">&amp;</span><span style="color:#24292F;"> </span><span style="color:#953800;">obj</span><span style="color:#24292F;">) : </span><span style="color:#8250DF;">obj</span><span style="color:#24292F;">(obj) {}</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">iterator</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">       </span><span style="color:#CF222E;">public:</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">size_t</span><span style="color:#24292F;"> i;</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0550AE;">iter_t</span><span style="color:#24292F;"> iter;</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#8250DF;">iterator</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">iter_t</span><span style="color:#24292F;"> </span><span style="color:#953800;">iter</span><span style="color:#24292F;">) : </span><span style="color:#8250DF;">i</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">0</span><span style="color:#24292F;">), </span><span style="color:#8250DF;">iter</span><span style="color:#24292F;">(iter) {}</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#953800;">iterator</span><span style="color:#CF222E;">&amp;</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">operator</span><span style="color:#953800;">++</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#24292F;">            i</span><span style="color:#CF222E;">++</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">            iter</span><span style="color:#CF222E;">++</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">            </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">*</span><span style="color:#0550AE;">this</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">        }</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#953800;">pair</span><span style="color:#24292F;">&lt;</span><span style="color:#CF222E;">size_t</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">item_t</span><span style="color:#24292F;">&gt; </span><span style="color:#CF222E;">operator</span><span style="color:#953800;">*</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#24292F;">            </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> {i, </span><span style="color:#CF222E;">*</span><span style="color:#24292F;">iter};</span></span>
<span class="line"><span style="color:#24292F;">        }</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">bool</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">operator</span><span style="color:#953800;">!=</span><span style="color:#24292F;">(</span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#953800;">iterator</span><span style="color:#CF222E;">&amp;</span><span style="color:#24292F;"> </span><span style="color:#953800;">other</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">            </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> iter </span><span style="color:#CF222E;">!=</span><span style="color:#24292F;"> other.iter;</span></span>
<span class="line"><span style="color:#24292F;">        }</span></span>
<span class="line"><span style="color:#24292F;">    };</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#953800;">iterator</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">begin</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">iterator</span><span style="color:#24292F;">(obj.</span><span style="color:#8250DF;">begin</span><span style="color:#24292F;">());</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#953800;">iterator</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">end</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">iterator</span><span style="color:#24292F;">(obj.</span><span style="color:#8250DF;">end</span><span style="color:#24292F;">());</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">int</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">main</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#24292F;">    vector</span><span style="color:#CF222E;">&lt;int&gt;</span><span style="color:#24292F;"> nums </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span><span style="color:#0550AE;">1</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">4</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">5</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">4</span><span style="color:#24292F;">};</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">for</span><span style="color:#24292F;"> (</span><span style="color:#CF222E;">auto&amp;&amp;</span><span style="color:#24292F;"> [i, num] : </span><span style="color:#8250DF;">enumerate</span><span style="color:#24292F;">(nums)) {</span></span>
<span class="line"><span style="color:#24292F;">        cout </span><span style="color:#CF222E;">&lt;&lt;</span><span style="color:#24292F;"> i </span><span style="color:#CF222E;">&lt;&lt;</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot; &quot;</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">&lt;&lt;</span><span style="color:#24292F;"> num </span><span style="color:#CF222E;">&lt;&lt;</span><span style="color:#24292F;"> endl;</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">    vector</span><span style="color:#CF222E;">&lt;</span><span style="color:#24292F;">string</span><span style="color:#CF222E;">&gt;</span><span style="color:#24292F;"> words </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span><span style="color:#0A3069;">&quot;hello&quot;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&quot;world&quot;</span><span style="color:#24292F;">};</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">for</span><span style="color:#24292F;"> (</span><span style="color:#CF222E;">auto&amp;&amp;</span><span style="color:#24292F;"> [i, word] : </span><span style="color:#8250DF;">enumerate</span><span style="color:#24292F;">(words)) {</span></span>
<span class="line"><span style="color:#24292F;">        cout </span><span style="color:#CF222E;">&lt;&lt;</span><span style="color:#24292F;"> i </span><span style="color:#CF222E;">&lt;&lt;</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot; &quot;</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">&lt;&lt;</span><span style="color:#24292F;"> word </span><span style="color:#CF222E;">&lt;&lt;</span><span style="color:#24292F;"> endl;</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">0</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h2 id="c-\u81EA\u5E26\u7684\u7F16\u7801\u8F6C\u6362" tabindex="-1">c++ \u81EA\u5E26\u7684\u7F16\u7801\u8F6C\u6362 <a class="header-anchor" href="#c-\u81EA\u5E26\u7684\u7F16\u7801\u8F6C\u6362" aria-hidden="true">#</a></h2><p>\u653E\u5728\u8FD9\u91CC\u5907\u4EFD\u4E00\u4E0B \u5F53\u6A21\u677F\u4E86</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#CF222E;">#include</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&lt;string&gt;</span></span>
<span class="line"><span style="color:#CF222E;">#include</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&lt;codecvt&gt;</span><span style="color:#24292F;">  </span><span style="color:#6E7781;">// for std::codecvt_utf8</span></span>
<span class="line"><span style="color:#CF222E;">#include</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&lt;locale&gt;</span><span style="color:#24292F;">   </span><span style="color:#6E7781;">// for std::wstring_convert</span></span>
<span class="line"><span style="color:#CF222E;">#include</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&lt;cstdio&gt;</span></span>
<span class="line"><span style="color:#CF222E;">#ifdef</span><span style="color:#24292F;"> </span><span style="color:#953800;">_WIN32</span></span>
<span class="line"><span style="color:#CF222E;">#include</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&lt;windows.h&gt;</span></span>
<span class="line"><span style="color:#CF222E;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">int</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">main</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#CF222E;">#ifdef</span><span style="color:#24292F;"> </span><span style="color:#953800;">_WIN32</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">SetConsoleOutputCP</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">65001</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#CF222E;">#endif</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#953800;">std</span><span style="color:#24292F;">::wstring_convert</span><span style="color:#CF222E;">&lt;</span><span style="color:#953800;">std</span><span style="color:#24292F;">::codecvt_utf8</span><span style="color:#CF222E;">&lt;</span><span style="color:#0550AE;">char32_t</span><span style="color:#CF222E;">&gt;</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">char32_t</span><span style="color:#CF222E;">&gt;</span><span style="color:#24292F;"> u32conv;</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#953800;">std</span><span style="color:#24292F;">::string u8string </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;\u4F60\u597D\u4E16\u754C&quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#953800;">std</span><span style="color:#24292F;">::u32string unicode_string </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> u32conv.</span><span style="color:#8250DF;">from_bytes</span><span style="color:#24292F;">(u8string);</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#953800;">std</span><span style="color:#24292F;">::string u8string2 </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> u32conv.</span><span style="color:#8250DF;">to_bytes</span><span style="color:#24292F;">(unicode_string);</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">for</span><span style="color:#24292F;"> (</span><span style="color:#CF222E;">auto</span><span style="color:#24292F;"> c : unicode_string) </span><span style="color:#8250DF;">printf</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;</span><span style="color:#0550AE;">%x</span><span style="color:#0A3069;"> &quot;</span><span style="color:#24292F;">, c);</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">printf</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;</span><span style="color:#0550AE;">%s\\n</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">, u8string2.</span><span style="color:#8250DF;">c_str</span><span style="color:#24292F;">());</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">0</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u7F3A\u5565\u8865\u5565" tabindex="-1">\u7F3A\u5565\u8865\u5565 <a class="header-anchor" href="#\u7F3A\u5565\u8865\u5565" aria-hidden="true">#</a></h2><p>\u5F85\u8865\u5145</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#CF222E;">#include</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#CF222E;">#include</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&lt;vector&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">#include</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;co/unitest.h&quot;</span></span>
<span class="line"><span style="color:#CF222E;">#include</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;co/os.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">template</span><span style="color:#24292F;"> &lt;</span><span style="color:#CF222E;">typename</span><span style="color:#24292F;"> </span><span style="color:#953800;">S</span><span style="color:#24292F;">, </span><span style="color:#CF222E;">typename</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#953800;">S</span><span style="color:#CF222E;">&amp;</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">operator</span><span style="color:#953800;">&lt;&lt;</span><span style="color:#24292F;">(</span><span style="color:#953800;">S</span><span style="color:#CF222E;">&amp;</span><span style="color:#24292F;"> </span><span style="color:#953800;">output</span><span style="color:#24292F;">, </span><span style="color:#953800;">std</span><span style="color:#24292F;">::</span><span style="color:#953800;">vector</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">&gt;</span><span style="color:#CF222E;">&amp;</span><span style="color:#24292F;"> </span><span style="color:#953800;">vec</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">    output </span><span style="color:#CF222E;">&lt;&lt;</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;[&quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">bool</span><span style="color:#24292F;"> first </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">true</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">for</span><span style="color:#24292F;"> (T</span><span style="color:#CF222E;">&amp;</span><span style="color:#24292F;"> x : vec) {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (</span><span style="color:#CF222E;">!</span><span style="color:#24292F;">first) output </span><span style="color:#CF222E;">&lt;&lt;</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;, &quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">        output </span><span style="color:#CF222E;">&lt;&lt;</span><span style="color:#24292F;"> x;</span></span>
<span class="line"><span style="color:#24292F;">        first </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">false</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> output </span><span style="color:#CF222E;">&lt;&lt;</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;]&quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF;">DEF_test</span><span style="color:#24292F;">(fun) {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">DEF_case</span><span style="color:#24292F;">(compare vector) {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#953800;">std</span><span style="color:#24292F;">::vector</span><span style="color:#CF222E;">&lt;int&gt;</span><span style="color:#24292F;"> v1{</span><span style="color:#0550AE;">6</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">5</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">4</span><span style="color:#24292F;">};</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#953800;">std</span><span style="color:#24292F;">::vector</span><span style="color:#CF222E;">&lt;int&gt;</span><span style="color:#24292F;"> v2{</span><span style="color:#0550AE;">6</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">5</span><span style="color:#24292F;">};</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#8250DF;">EXPECT_EQ</span><span style="color:#24292F;">(v1, v2);</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">int</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">main</span><span style="color:#24292F;">(</span><span style="color:#CF222E;">int</span><span style="color:#24292F;"> </span><span style="color:#953800;">argc</span><span style="color:#24292F;">, </span><span style="color:#CF222E;">char*</span><span style="color:#24292F;"> </span><span style="color:#953800;">argv</span><span style="color:#24292F;">[]) {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#953800;">flag</span><span style="color:#24292F;">::</span><span style="color:#8250DF;">init</span><span style="color:#24292F;">(argc, argv);</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#953800;">unitest</span><span style="color:#24292F;">::</span><span style="color:#8250DF;">run_all_tests</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">0</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,9),e=[o];function r(c,t,y,F,i,b){return n(),a("div",null,e)}const E=s(p,[["render",r]]);export{m as __pageData,E as default};