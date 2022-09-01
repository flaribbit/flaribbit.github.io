import{_ as s,o as n,c as a,a as l}from"./app.a1f6b5b3.js";const m=JSON.parse('{"title":"d3.js \u5B66\u4E60\u7B14\u8BB0","description":"","frontmatter":{"title":"d3.js \u5B66\u4E60\u7B14\u8BB0","date":"2021-08-16T00:00:00.000Z","tags":["d3","\u524D\u7AEF","\u7B14\u8BB0"]},"headers":[],"relativePath":"posts/d3-note.md"}'),p={name:"posts/d3-note.md"},o=l(`<p>\u8FB9\u5B66\u8FB9\u968F\u4FBF\u5199\u7684\uFF0C\u6CA1\u6709\u5B9E\u9645\u5E94\u7528\uFF0C\u5404\u79CD\u64CD\u4F5C\u8BE6\u89C1\u6CE8\u91CA</p><ul><li>\u521D\u59CB\u5316</li><li>\u65B0\u6570\u636E\u6DFB\u52A0</li><li>\u6570\u636E\u7ED1\u5B9A</li><li>\u5E26\u4E3B\u952E\u7684\u6570\u636E\u7ED1\u5B9A</li><li>\u6570\u636E\u66F4\u65B0</li><li>\u6570\u636E\u5220\u9664</li><li>\u8FC7\u6E21\u6548\u679C\u6216\u8865\u95F4</li></ul><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">html</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">lang</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;zh&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">head</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">meta</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">charset</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;UTF-8&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">meta</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">name</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;viewport&quot;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">content</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">src</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;https://d3js.org/d3.v6.min.js&quot;</span><span style="color:#24292F;">&gt;&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">title</span><span style="color:#24292F;">&gt;Document&lt;/</span><span style="color:#116329;">title</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">head</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">body</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">body</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">var</span><span style="color:#24292F;"> svg </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> d3.</span><span style="color:#8250DF;">select</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;body&quot;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">        .</span><span style="color:#8250DF;">append</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;svg&quot;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">        .</span><span style="color:#8250DF;">attr</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;width&quot;</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">640</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">        .</span><span style="color:#8250DF;">attr</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;height&quot;</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">480</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">//\u6570\u636E\u96C6 id\u7528\u4E8E\u5339\u914D\u65B0\u6DFB\u52A0\u548C\u5220\u9664\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">var</span><span style="color:#24292F;"> dataset </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> [{ id: </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">, n: </span><span style="color:#0550AE;">5</span><span style="color:#24292F;"> }, { id: </span><span style="color:#0550AE;">2</span><span style="color:#24292F;">, n: </span><span style="color:#0550AE;">10</span><span style="color:#24292F;"> }, { id: </span><span style="color:#0550AE;">3</span><span style="color:#24292F;">, n: </span><span style="color:#0550AE;">15</span><span style="color:#24292F;"> }, { id: </span><span style="color:#0550AE;">4</span><span style="color:#24292F;">, n: </span><span style="color:#0550AE;">20</span><span style="color:#24292F;"> }, { id: </span><span style="color:#0550AE;">5</span><span style="color:#24292F;">, n: </span><span style="color:#0550AE;">25</span><span style="color:#24292F;"> }, { id: </span><span style="color:#0550AE;">6</span><span style="color:#24292F;">, n: </span><span style="color:#0550AE;">30</span><span style="color:#24292F;"> }];</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">//\u4ECE\u96F6\u5F00\u59CB\u6DFB\u52A0\u6570\u636E\u7684\u6A21\u677F</span></span>
<span class="line"><span style="color:#24292F;">    svg.</span><span style="color:#8250DF;">selectAll</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;circle&quot;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">        .</span><span style="color:#8250DF;">data</span><span style="color:#24292F;">(dataset)</span></span>
<span class="line"><span style="color:#24292F;">        .</span><span style="color:#8250DF;">enter</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">//\u4F7F\u7528append\u521B\u5EFA\u65B0\u7684\u7A7A\u5143\u7D20\uFF0C\u6570\u91CF\u4E0E\u6570\u636E\u96C6\u957F\u5EA6\u4E00\u81F4</span></span>
<span class="line"><span style="color:#24292F;">        .</span><span style="color:#8250DF;">append</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;circle&quot;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">//\u66F4\u65B0\u6570\u636E</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">//d: \u6570\u636E, i:\u7D22\u5F15</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">//\u5982\u679C\u524D\u9762\u6CA1\u6709transition\u5C31\u662F\u7ACB\u5373\u66F4\u65B0</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">//\u8FD9\u91CC\u7684\u5C5E\u6027\u53C2\u89C1svg\u8BED\u6CD5</span></span>
<span class="line"><span style="color:#24292F;">        .</span><span style="color:#8250DF;">attr</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;cx&quot;</span><span style="color:#24292F;">, (</span><span style="color:#953800;">d</span><span style="color:#24292F;">, </span><span style="color:#953800;">i</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> (i </span><span style="color:#CF222E;">*</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">50</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">25</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">        .</span><span style="color:#8250DF;">attr</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;cy&quot;</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">240</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">        .</span><span style="color:#8250DF;">attr</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;r&quot;</span><span style="color:#24292F;">, </span><span style="color:#953800;">d</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> d.n)</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">//transition\u7684\u6700\u57FA\u672C\u5199\u6CD5</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">//\u9ED8\u8BA4\u5E73\u6ED1\u8FC7\u6E21\uFF0C\u5176\u4ED6\u9700\u8981\u65F6\u81EA\u884C\u641C\u7D22</span></span>
<span class="line"><span style="color:#24292F;">        .</span><span style="color:#8250DF;">transition</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">        .</span><span style="color:#8250DF;">duration</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">1000</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">//\u524D\u9762\u6709transition\u5C31\u662F\u8865\u95F4</span></span>
<span class="line"><span style="color:#24292F;">        .</span><span style="color:#8250DF;">attr</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;r&quot;</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">20</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">setTimeout</span><span style="color:#24292F;">(() </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">        dataset.</span><span style="color:#8250DF;">splice</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">3</span><span style="color:#24292F;">,</span><span style="color:#0550AE;">1</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">//\u9009\u4E2Dupdate\u90E8\u5206\uFF0C\u6CE8\u610F\u5E26\u4E3B\u952E</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">var</span><span style="color:#24292F;"> update </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> svg.</span><span style="color:#8250DF;">selectAll</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;circle&quot;</span><span style="color:#24292F;">).</span><span style="color:#8250DF;">data</span><span style="color:#24292F;">(dataset, </span><span style="color:#953800;">d</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> d.id);</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">//\u9009\u4E2Denter\u90E8\u5206</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">var</span><span style="color:#24292F;"> enter </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> update.</span><span style="color:#8250DF;">enter</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">//\u9009\u4E2Dexit\u90E8\u5206</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">var</span><span style="color:#24292F;"> exit </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> update.</span><span style="color:#8250DF;">exit</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">//\u63A5\u4E0B\u6765\u5206\u522B\u5904\u7406\u4E09\u4E2A\u90E8\u5206\u7684\u5143\u7D20\uFF0C\u548C\u524D\u9762\u57FA\u672C\u4E00\u6837</span></span>
<span class="line"><span style="color:#24292F;">        update</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">transition</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">duration</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">1000</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">attr</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;cx&quot;</span><span style="color:#24292F;">, (</span><span style="color:#953800;">d</span><span style="color:#24292F;">, </span><span style="color:#953800;">i</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> (i </span><span style="color:#CF222E;">*</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">50</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">25</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">attr</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;r&quot;</span><span style="color:#24292F;">, </span><span style="color:#953800;">d</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> d.n);</span></span>
<span class="line"><span style="color:#24292F;">        enter</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">append</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;circle&quot;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">attr</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;cx&quot;</span><span style="color:#24292F;">, (</span><span style="color:#953800;">d</span><span style="color:#24292F;">, </span><span style="color:#953800;">i</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> (i </span><span style="color:#CF222E;">*</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">50</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">25</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">attr</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;cy&quot;</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">240</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">transition</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">duration</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">1000</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">attr</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;r&quot;</span><span style="color:#24292F;">, </span><span style="color:#953800;">d</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> d.n);</span></span>
<span class="line"><span style="color:#24292F;">        exit</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">transition</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">duration</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">1000</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">attr</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;r&quot;</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">0</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">            </span><span style="color:#6E7781;">//\u4F7F\u7528remove\u5220\u9664\u4E0D\u9700\u8981\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">remove</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#24292F;">    }, </span><span style="color:#0550AE;">1000</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">html</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div>`,3),e=[o];function t(r,c,y,F,i,b){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{m as __pageData,d as default};
