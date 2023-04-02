import{_ as s,o as n,c as a,a as l}from"./app.075271e8.js";const e="/assets/fix-matplotlib-chinese.00ea804e.svg",y=JSON.parse('{"title":"\u4FEE\u590D matplotlib \u4E2D\u82F1\u6DF7\u6392\u95EE\u9898","description":"","frontmatter":{"title":"\u4FEE\u590D matplotlib \u4E2D\u82F1\u6DF7\u6392\u95EE\u9898","date":"2021-09-19T00:00:00.000Z","tags":["python","matplotlib"]},"headers":[],"relativePath":"posts/fix-matplotlib-chinese.md"}'),p={name:"posts/fix-matplotlib-chinese.md"},t=l(`<p>\u4F17\u6240\u5468\u77E5\uFF0Cmatplotlib \u9ED8\u8BA4\u5B57\u4F53\u4E0D\u80FD\u663E\u793A\u4E2D\u6587\uFF0C\u4F46\u8BBA\u6587\u901A\u5E38\u8981\u6C42 Times + \u5B8B\u4F53\uFF0C\u4E8E\u662F\u8003\u8651\u8FD9\u6837\u5199\uFF1A</p><div class="language-py line-numbers-mode"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#24292F;">plt.rcParams[</span><span style="color:#0A3069;">&#39;font.sans-serif&#39;</span><span style="color:#24292F;">] </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> [</span><span style="color:#0A3069;">&#39;Times New Roman&#39;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&#39;Simsun&#39;</span><span style="color:#24292F;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7ED3\u679C\u5E76\u6CA1\u6709\u4EC0\u4E48\u5375\u7528\uFF0C\u8FD8\u662F\u53EA\u80FD Times\uFF0C\u4E8E\u662F\u7FFB\u9605\u4E86\u4E00\u4E0B\u5176\u6E90\u7801\uFF0C\u63D0\u51FA\u4EE5\u4E0B\u89E3\u51B3\u65B9\u6848\uFF1A</p><p>\u627E\u5230\u6587\u4EF6 <code>_mathtext.py</code>\uFF0C222\u884C\u9644\u8FD1\uFF0C\u589E\u52A0\u4E00\u884C\u4E2D\u6587\u5B57\u4F53</p><div class="language-diff line-numbers-mode"><button class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:#24292F;">class TruetypeFonts(Fonts):</span></span>
<span class="line"><span style="color:#24292F;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292F;">    A generic base class for all font setups that use Truetype fonts</span></span>
<span class="line"><span style="color:#24292F;">    (through FT2Font).</span></span>
<span class="line"><span style="color:#24292F;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292F;">    def __init__(self, default_font_prop, mathtext_backend):</span></span>
<span class="line"><span style="color:#24292F;">        super().__init__(default_font_prop, mathtext_backend)</span></span>
<span class="line"><span style="color:#24292F;">        self.glyphd = {}</span></span>
<span class="line"><span style="color:#24292F;">        self._fonts = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">        filename = findfont(default_font_prop)</span></span>
<span class="line"><span style="color:#24292F;">        default_font = get_font(filename)</span></span>
<span class="line"><span style="color:#24292F;">        self._fonts[&#39;default&#39;] = default_font</span></span>
<span class="line"><span style="color:#24292F;">        self._fonts[&#39;regular&#39;] = default_font</span></span>
<span class="line"><span style="color:#116329;">+       self._fonts[&#39;chinese&#39;] = get_font(findfont(&#39;Simsun&#39;))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>530\u884C\u9644\u8FD1\uFF0C\u589E\u52A0\u4E00\u6761\u5224\u65AD\u8BED\u53E5</p><div class="language-diff line-numbers-mode"><button class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:#24292F;">        if not found_symbol:</span></span>
<span class="line"><span style="color:#24292F;">            if self.cm_fallback:</span></span>
<span class="line"><span style="color:#24292F;">                if (fontname in (&#39;it&#39;, &#39;regular&#39;)</span></span>
<span class="line"><span style="color:#24292F;">                        and isinstance(self.cm_fallback, StixFonts)):</span></span>
<span class="line"><span style="color:#24292F;">                    fontname = &#39;rm&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">                g = self.cm_fallback._get_glyph(fontname, font_class,</span></span>
<span class="line"><span style="color:#24292F;">                                                sym, fontsize)</span></span>
<span class="line"><span style="color:#24292F;">                fname = g[0].family_name</span></span>
<span class="line"><span style="color:#24292F;">                if fname in list(BakomaFonts._fontmap.values()):</span></span>
<span class="line"><span style="color:#24292F;">                    fname = &quot;Computer Modern&quot;</span></span>
<span class="line"><span style="color:#24292F;">                _log.info(&quot;Substituting symbol %s from %s&quot;, sym, fname)</span></span>
<span class="line"><span style="color:#24292F;">                return g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329;">+           elif fontname != &#39;chinese&#39;:</span></span>
<span class="line"><span style="color:#116329;">+               return self._get_glyph(&#39;chinese&#39;, font_class, sym, fontsize)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">            else:</span></span>
<span class="line"><span style="color:#24292F;">                if (fontname in (&#39;it&#39;, &#39;regular&#39;)</span></span>
<span class="line"><span style="color:#24292F;">                        and isinstance(self, StixFonts)):</span></span>
<span class="line"><span style="color:#24292F;">                    return self._get_glyph(&#39;rm&#39;, font_class, sym, fontsize)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u8FD9\u6837\u4E00\u6765\u4F1A\u628A\u9ED8\u8BA4\u5B57\u4F53\u627E\u4E0D\u5230\u7684\u7B26\u53F7\u7528\u5B8B\u4F53\u4EE3\u66FF\uFF0C\u5982\u679C\u8FD8\u627E\u4E0D\u5230\u624D\u6E32\u67D3\u6210\u6846\u3002</p><p><img src="`+e+'" alt="demo"></p><p>\u6700\u540E\uFF0C\u8FD9\u53EA\u662F\u4E2A\u4E34\u65F6\u89E3\u51B3\u65B9\u6848\uFF0C\u5750\u7B49<a href="https://github.com/matplotlib/matplotlib/pull/20740" target="_blank" rel="noreferrer">\u8FD9\u6761PR</a>\u5408\u5E76\u3002</p>',10),o=[t];function r(c,i,b,m,u,f){return n(),a("div",null,o)}const d=s(p,[["render",r]]);export{y as __pageData,d as default};