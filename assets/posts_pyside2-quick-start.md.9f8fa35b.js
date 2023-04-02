import{_ as s,o as n,c as a,a as l}from"./app.075271e8.js";const p="/assets/pyside2-quick-start_1.21507bc5.png",m=JSON.parse('{"title":"pyside2 \u5FEB\u901F\u5165\u95E8","description":"","frontmatter":{"title":"pyside2 \u5FEB\u901F\u5165\u95E8","date":"2022-04-22T23:16:00.000Z","tags":["python","qt"]},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":2,"title":"\u7ED8\u5236\u754C\u9762\u8349\u56FE","slug":"\u7ED8\u5236\u754C\u9762\u8349\u56FE","link":"#\u7ED8\u5236\u754C\u9762\u8349\u56FE","children":[]},{"level":2,"title":"\u7F16\u5199\u4E3B\u7A0B\u5E8F","slug":"\u7F16\u5199\u4E3B\u7A0B\u5E8F","link":"#\u7F16\u5199\u4E3B\u7A0B\u5E8F","children":[]},{"level":2,"title":"qt \u8054\u52A8 matplotlib","slug":"qt-\u8054\u52A8-matplotlib","link":"#qt-\u8054\u52A8-matplotlib","children":[]}],"relativePath":"posts/pyside2-quick-start.md"}'),e={name:"posts/pyside2-quick-start.md"},o=l(`<h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-Bash line-numbers-mode"><button class="copy"></button><span class="lang">Bash</span><pre><code><span class="line"><span style="color:#24292F;">pip install pyside2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\u662F\u57FA\u4E8E qt5 \u7684 pyside2\uFF0C\u4E0D\u8FC7\u5BF9\u4E8E qt6 \u7684 pyside6 \u4E5F\u9002\u7528\u3002</p><h2 id="\u7ED8\u5236\u754C\u9762\u8349\u56FE" tabindex="-1">\u7ED8\u5236\u754C\u9762\u8349\u56FE <a class="header-anchor" href="#\u7ED8\u5236\u754C\u9762\u8349\u56FE" aria-hidden="true">#</a></h2><p>\u8FD0\u884C <code>pyside2-designer</code>\uFF0C\u6253\u5F00\u754C\u9762\u8BBE\u8BA1\u5DE5\u5177</p><p><img src="`+p+`" alt=""></p><p>\u8FD9\u91CC\u6CE8\u610F\u4E00\u4E9B\u5730\u65B9\uFF1A</p><ul><li>\u4E24\u4E2A\u6309\u94AE\u5927\u5C0F\u662F\u56FA\u5B9A\u7684\uFF0C<strong>\u5148\u5728\u5BB9\u5668\u5916\u9762\u6446</strong>\uFF0C\u76EE\u6D4B\u597D\u5927\u5C0F\u7136\u540E<strong>\u53F3\u952E\u56FA\u5B9A\u5C3A\u5BF8</strong></li><li><strong>\u4ECE\u5C0F\u5230\u5927\u521B\u5EFA</strong>\u3002\u56FA\u5B9A\u5927\u5C0F\u7684\u7EC4\u4EF6\u8C03\u6574\u597D\u4E4B\u540E\uFF0C<strong>\u5148\u770B\u7B2C\u4E09\u884C</strong>\uFF0C\u521B\u5EFA\u6C34\u5E73\u5E03\u5C40\uFF0C\u628A\u4E24\u4E2A\u6309\u94AE\u585E\u8FDB\u53BB\uFF0C\u518D\u653E\u4E00\u4E2A\u6C34\u5E73\u586B\u5145</li><li>\u521B\u5EFA\u7AD6\u76F4\u5BB9\u5668\uFF0C\u628A\u8FD9\u4E09\u884C\u5185\u5BB9\u585E\u8FDB\u53BB\uFF0C\u4F1A\u53D1\u73B0\u4ED6\u4EEC\u7684\u9AD8\u5EA6\u662F\u5E73\u5747\u5206\u7684\uFF0C\u4F46\u6211\u4EEC\u53EA\u9700\u8981\u4E8C\u884C\u53D8\u9AD8</li><li>\u4FEE\u6539\u7AD6\u76F4\u5BB9\u5668\u7684\u62C9\u4F38\u5C5E\u6027\uFF0C\u9ED8\u8BA4\u662F <code>0,0,0</code>\uFF0C\u8FD9\u4E9B\u6570\u503C\u8868\u793A\u91CC\u9762<strong>\u5143\u7D20\u6240\u5360\u7684\u6BD4\u4F8B</strong>\uFF0C\u4F8B\u5982 <code>1,2,1</code> \u5C31\u662F 1:2:1 \u7684\u610F\u601D\u3002\u8FD9\u91CC\u6539\u6210 <code>0,1,0</code> \u5C31\u662F\u60F3\u8981\u7684\u6548\u679C\u3002</li><li>\u5728\u7A97\u53E3\u5185\u5BB9\u5668\u5916\u7684\u4EFB\u610F\u4F4D\u7F6E\u53F3\u952E\uFF0C\u5E03\u5C40\u91CC\u9762\u4FEE\u6539\u7A97\u53E3\u7684\u5E03\u5C40\uFF0C\u4F8B\u5982\u7AD6\u76F4\u5E03\u5C40\u3002</li><li>\u6B64\u65F6\u7A97\u53E3\u5185\u7684\u7EC4\u4EF6\u5C31\u4F1A\u81EA\u52A8\u9002\u5E94\u7A97\u53E3\u5C3A\u5BF8\u4E86\u3002</li><li>\u53E6\u5916\u8BB0\u5F97\u7ED9\u9700\u8981\u7ED1\u5B9A\u4FE1\u53F7\u7684\u7EC4\u4EF6\u8BBE\u7F6E\u540D\u5B57\u3002</li></ul><p>\u8FD0\u884C <code>pyside2-uic MainWindow.ui -o MainWindow.py</code></p><h2 id="\u7F16\u5199\u4E3B\u7A0B\u5E8F" tabindex="-1">\u7F16\u5199\u4E3B\u7A0B\u5E8F <a class="header-anchor" href="#\u7F16\u5199\u4E3B\u7A0B\u5E8F" aria-hidden="true">#</a></h2><div class="language-Python line-numbers-mode"><button class="copy"></button><span class="lang">Python</span><pre><code><span class="line"><span style="color:#CF222E;">from</span><span style="color:#24292F;"> PySide2.QtWidgets </span><span style="color:#CF222E;">import</span><span style="color:#24292F;"> QApplication, QMainWindow</span></span>
<span class="line"><span style="color:#CF222E;">from</span><span style="color:#24292F;"> MainWindow </span><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Ui_MainWindow</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> sys</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">MainWindow</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">QMainWindow</span><span style="color:#24292F;">):</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">def</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">__init__</span><span style="color:#24292F;">(self):</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0550AE;">super</span><span style="color:#24292F;">().</span><span style="color:#0550AE;">__init__</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0550AE;">self</span><span style="color:#24292F;">.ui </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> Ui_MainWindow()</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0550AE;">self</span><span style="color:#24292F;">.ui.setupUi(</span><span style="color:#0550AE;">self</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">        </span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;"># connect signals</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;"># self.ui.button_ok.clicked.connect(self.foo)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">if</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">__name__</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">==</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;__main__&#39;</span><span style="color:#24292F;">:</span></span>
<span class="line"><span style="color:#24292F;">    app </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> QApplication(sys.argv)</span></span>
<span class="line"><span style="color:#24292F;">    mainWindow </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> MainWindow()</span></span>
<span class="line"><span style="color:#24292F;">    mainWindow.show()</span></span>
<span class="line"><span style="color:#24292F;">    sys.exit(app.exec_())</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="qt-\u8054\u52A8-matplotlib" tabindex="-1">qt \u8054\u52A8 matplotlib <a class="header-anchor" href="#qt-\u8054\u52A8-matplotlib" aria-hidden="true">#</a></h2><p>\u4FEE\u6539\u548C\u5BF9\u63A5\u65B9\u6CD5\uFF1A</p><ul><li>\u5148\u628A\u7ED8\u56FE\u7A0B\u5E8F\u6539\u6210\u7528 <code>fig</code> \u548C <code>ax</code> \u7684</li><li>\u5728\u8BBE\u8BA1\u5DE5\u5177\u91CC\u9762\u7ED9\u8981\u653E\u56FE\u7684\u5730\u65B9\u9884\u7559\u4F4D\u7F6E\uFF0C\u6CE8\u610F\u62C9\u4F38\u53C2\u6570\u8BBE\u7F6E\uFF0C\u8FD9\u662F\u4E3A\u4E86\u6700\u5C0F\u5316\u4EE3\u7801\u91CF</li><li>\u5F53\u7136\u4F60\u8981\u662F\u80FD\u5168\u7528\u4EE3\u7801\u521B\u5EFA\u754C\u9762\u90A3\u5F53\u6211\u4E0A\u4E00\u6761\u6CA1\u8BF4</li><li>\u521B\u5EFA\u753B\u5E03\u5E76\u4FDD\u5B58\u8D77\u6765</li><li><code>fig = self.canvas.figure</code></li><li><code>ax = fig.subplots()</code></li><li>\u540E\u9762\u5C31\u662F\u628A\u7ED8\u56FE\u7A0B\u5E8F\u6284\u8FC7\u6765\u4E86</li><li>\u6CE8\u610F\u7ED8\u56FE\u4E0D\u8981\u5360\u7528\u592A\u591A\u65F6\u95F4\uFF0C\u4F1A\u5361\u4E3B\u7EBF\u7A0B</li></ul><div class="language-Python line-numbers-mode"><button class="copy"></button><span class="lang">Python</span><pre><code><span class="line"><span style="color:#CF222E;">from</span><span style="color:#24292F;"> matplotlib.figure </span><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Figure</span></span>
<span class="line"><span style="color:#CF222E;">from</span><span style="color:#24292F;"> matplotlib.backends.backend_qt5agg </span><span style="color:#CF222E;">import</span><span style="color:#24292F;"> FigureCanvas</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">MainWindow</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">QMainWindow</span><span style="color:#24292F;">):</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">def</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">__init__</span><span style="color:#24292F;">(self):</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0550AE;">super</span><span style="color:#24292F;">().</span><span style="color:#0550AE;">__init__</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0550AE;">self</span><span style="color:#24292F;">.ui </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> Ui_MainWindow()</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0550AE;">self</span><span style="color:#24292F;">.ui.setupUi(</span><span style="color:#0550AE;">self</span><span style="color:#24292F;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;"># setup</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0550AE;">self</span><span style="color:#24292F;">.canvas </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> FigureCanvas(Figure(</span><span style="color:#953800;">figsize</span><span style="color:#CF222E;">=</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">6</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">6</span><span style="color:#24292F;">)))</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0550AE;">self</span><span style="color:#24292F;">.axes </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">self</span><span style="color:#24292F;">.canvas.figure.subplots()</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0550AE;">self</span><span style="color:#24292F;">.ui.container.addWidget(</span><span style="color:#0550AE;">self</span><span style="color:#24292F;">.canvas)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,15),c=[o];function r(i,t,y,d,b,u){return n(),a("div",null,c)}const _=s(e,[["render",r]]);export{m as __pageData,_ as default};