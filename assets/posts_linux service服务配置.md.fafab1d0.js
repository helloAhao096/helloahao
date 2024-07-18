import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.676e9b8e.js";const u=JSON.parse('{"title":"linux service服务配置","description":"linux service服务配置","frontmatter":{"title":"linux service服务配置","description":"linux service服务配置","date":"2024-07-18T00:00:00.000Z","tags":["linux"]},"headers":[],"relativePath":"posts/linux service服务配置.md","filePath":"posts/linux service服务配置.md","lastUpdated":1721285897000}'),p={name:"posts/linux service服务配置.md"},o=l(`<blockquote><p>参考文档 <a href="https://blog.csdn.net/blood_Z/article/details/128848056" target="_blank" rel="noreferrer">https://blog.csdn.net/blood_Z/article/details/128848056</a></p></blockquote><h1 id="默认配置路径" tabindex="-1">默认配置路径 <a class="header-anchor" href="#默认配置路径" aria-label="Permalink to &quot;默认配置路径&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">1.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/systemd/system/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 这个目录是Systemd服务管理器的主要配置目录。在这个目录中，可以找到各种系统服务的配置文件，</span></span>
<span class="line"><span style="color:#6A737D;"># 这些文件以.service为后缀名。</span></span>
<span class="line"><span style="color:#6A737D;"># 例如，一个名为&quot;my-service.service&quot;的服务配置文件将存放在/etc/systemd/system/目录下。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">2.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/lib/systemd/system/</span></span>
<span class="line"><span style="color:#6A737D;"># 这个目录也是Systemd服务管理器的配置目录，</span></span>
<span class="line"><span style="color:#6A737D;"># 但是与/etc/systemd/system/目录不同的是，</span></span>
<span class="line"><span style="color:#6A737D;"># 这个目录中的服务配置文件通常是由Linux发行版提供的默认服务。</span></span>
<span class="line"><span style="color:#6A737D;"># 这个目录中的服务文件一般不建议用户直接修改，以免对系统造成不可预料的影响。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">1.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/systemd/system/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 这个目录是Systemd服务管理器的主要配置目录。在这个目录中，可以找到各种系统服务的配置文件，</span></span>
<span class="line"><span style="color:#6A737D;"># 这些文件以.service为后缀名。</span></span>
<span class="line"><span style="color:#6A737D;"># 例如，一个名为&quot;my-service.service&quot;的服务配置文件将存放在/etc/systemd/system/目录下。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">2.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/lib/systemd/system/</span></span>
<span class="line"><span style="color:#6A737D;"># 这个目录也是Systemd服务管理器的配置目录，</span></span>
<span class="line"><span style="color:#6A737D;"># 但是与/etc/systemd/system/目录不同的是，</span></span>
<span class="line"><span style="color:#6A737D;"># 这个目录中的服务配置文件通常是由Linux发行版提供的默认服务。</span></span>
<span class="line"><span style="color:#6A737D;"># 这个目录中的服务文件一般不建议用户直接修改，以免对系统造成不可预料的影响。</span></span></code></pre></div><h1 id="常用管理命令" tabindex="-1">常用管理命令 <a class="header-anchor" href="#常用管理命令" aria-label="Permalink to &quot;常用管理命令&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#常用命令</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务名</span><span style="color:#E1E4E8;">                       </span><span style="color:#9ECBFF;">开启服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务名</span><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">关闭服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务名</span><span style="color:#E1E4E8;">                      </span><span style="color:#9ECBFF;">显示状态</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务名</span><span style="color:#E1E4E8;">                     </span><span style="color:#9ECBFF;">重启服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务名</span><span style="color:#E1E4E8;">                      </span><span style="color:#9ECBFF;">开机启动服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">disable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务名</span><span style="color:#E1E4E8;">                     </span><span style="color:#9ECBFF;">禁止开机启动</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list-units</span><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">查看系统中所有正在运行的服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list-unit-files</span><span style="color:#E1E4E8;">                   </span><span style="color:#9ECBFF;">查看系统中所有服务的开机启动状态</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list-dependencies</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务名</span><span style="color:#E1E4E8;">           </span><span style="color:#9ECBFF;">查看系统中服务的依赖关系</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mask</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务名</span><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">冻结服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unmask</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务名</span><span style="color:#E1E4E8;">                      </span><span style="color:#9ECBFF;">解冻服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set-default</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">multi-user.target</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">开机时不启动图形界面</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set-default</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">graphical.target</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">开机时启动图形界面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">daemon-reload</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">重载服务配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务名.service</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is-enabled</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务名.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">journalctl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">xxx.service</span><span style="color:#E1E4E8;">                   </span><span style="color:#79B8FF;">**</span><span style="color:#9ECBFF;">查看服务运行日志</span><span style="color:#79B8FF;">**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">取消服务器开机自启动</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">disable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postgresql.service</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#常用命令</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务名</span><span style="color:#24292E;">                       </span><span style="color:#032F62;">开启服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务名</span><span style="color:#24292E;">                        </span><span style="color:#032F62;">关闭服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务名</span><span style="color:#24292E;">                      </span><span style="color:#032F62;">显示状态</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务名</span><span style="color:#24292E;">                     </span><span style="color:#032F62;">重启服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务名</span><span style="color:#24292E;">                      </span><span style="color:#032F62;">开机启动服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">disable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务名</span><span style="color:#24292E;">                     </span><span style="color:#032F62;">禁止开机启动</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list-units</span><span style="color:#24292E;">                        </span><span style="color:#032F62;">查看系统中所有正在运行的服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list-unit-files</span><span style="color:#24292E;">                   </span><span style="color:#032F62;">查看系统中所有服务的开机启动状态</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list-dependencies</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务名</span><span style="color:#24292E;">           </span><span style="color:#032F62;">查看系统中服务的依赖关系</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mask</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务名</span><span style="color:#24292E;">                        </span><span style="color:#032F62;">冻结服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unmask</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务名</span><span style="color:#24292E;">                      </span><span style="color:#032F62;">解冻服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set-default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">multi-user.target</span><span style="color:#24292E;">     </span><span style="color:#032F62;">开机时不启动图形界面</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set-default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">graphical.target</span><span style="color:#24292E;">      </span><span style="color:#032F62;">开机时启动图形界面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">daemon-reload</span><span style="color:#24292E;">  </span><span style="color:#032F62;">重载服务配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务名.service</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is-enabled</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务名.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">journalctl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">xxx.service</span><span style="color:#24292E;">                   </span><span style="color:#005CC5;">**</span><span style="color:#032F62;">查看服务运行日志</span><span style="color:#005CC5;">**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">取消服务器开机自启动</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">disable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postgresql.service</span></span></code></pre></div><h1 id="service文件编写" tabindex="-1">service文件编写 <a class="header-anchor" href="#service文件编写" aria-label="Permalink to &quot;service文件编写&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 基本模版</span></span>
<span class="line"><span style="color:#E1E4E8;">[Unit]</span></span>
<span class="line"><span style="color:#E1E4E8;">Description</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">My</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Service</span></span>
<span class="line"><span style="color:#E1E4E8;">After</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">network.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[Service]</span></span>
<span class="line"><span style="color:#E1E4E8;">Type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">simple</span></span>
<span class="line"><span style="color:#E1E4E8;">ExecStart</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">/path/to/your/command</span></span>
<span class="line"><span style="color:#E1E4E8;">Restart</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">always</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[Install]</span></span>
<span class="line"><span style="color:#E1E4E8;">WantedBy</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">multi-user.target</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 基本模版</span></span>
<span class="line"><span style="color:#24292E;">[Unit]</span></span>
<span class="line"><span style="color:#24292E;">Description</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">My</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Service</span></span>
<span class="line"><span style="color:#24292E;">After</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">network.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[Service]</span></span>
<span class="line"><span style="color:#24292E;">Type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">simple</span></span>
<span class="line"><span style="color:#24292E;">ExecStart</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">/path/to/your/command</span></span>
<span class="line"><span style="color:#24292E;">Restart</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">always</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[Install]</span></span>
<span class="line"><span style="color:#24292E;">WantedBy</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">multi-user.target</span></span></code></pre></div><h2 id="一键配置service启动项的shell脚本" tabindex="-1">一键配置service启动项的shell脚本 <a class="header-anchor" href="#一键配置service启动项的shell脚本" aria-label="Permalink to &quot;一键配置service启动项的shell脚本&quot;">​</a></h2><blockquote><p>需要将其中的路径替换为自己系统需要配置的路径</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 确保脚本以 root 用户运行</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">id</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#9ECBFF;">)&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-ne</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> ]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;请以 root 用户或使用 sudo 运行此脚本。&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">exit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 定义路径变量</span></span>
<span class="line"><span style="color:#E1E4E8;">SCRIPT_PATH</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/home/firefly/Desktop/hackrf_build&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">SERVICE_NAME</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;hackrf_signal&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">SERVICE_FILE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/etc/systemd/system/\${</span><span style="color:#E1E4E8;">SERVICE_NAME</span><span style="color:#9ECBFF;">}.service&quot;</span></span>
<span class="line"><span style="color:#6A737D;">#START_SCRIPT=&quot;\${SCRIPT_PATH}/zjyg_signal/sweep-back.py&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">START_SCRIPT</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">SCRIPT_PATH</span><span style="color:#9ECBFF;">}/run.sh&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 赋予启动脚本执行权限</span></span>
<span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+x</span><span style="color:#E1E4E8;"> \${START_SCRIPT}</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;启动脚本已创建并赋予执行权限: \${</span><span style="color:#E1E4E8;">START_SCRIPT</span><span style="color:#9ECBFF;">}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建 systemd 服务文件</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;创建 systemd 服务文件...&quot;</span></span>
<span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#9ECBFF;">EOL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> \${SERVICE_FILE}</span></span>
<span class="line"><span style="color:#9ECBFF;">[Unit]</span></span>
<span class="line"><span style="color:#9ECBFF;">Description=hackrf_signal</span></span>
<span class="line"><span style="color:#9ECBFF;">After=network.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">[Service]</span></span>
<span class="line"><span style="color:#9ECBFF;">Type=simple</span></span>
<span class="line"><span style="color:#9ECBFF;">WorkingDirectory=\${</span><span style="color:#E1E4E8;">SCRIPT_PATH</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">User=root</span></span>
<span class="line"><span style="color:#9ECBFF;">ExecStart=\${</span><span style="color:#E1E4E8;">START_SCRIPT</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">Restart=always</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">[Install]</span></span>
<span class="line"><span style="color:#9ECBFF;">WantedBy=multi-user.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">EOL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重新加载 systemd，启用并启动服务</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;重新加载 systemd 守护进程...&quot;</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">daemon-reload</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;启用服务...&quot;</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> \${SERVICE_NAME}</span><span style="color:#9ECBFF;">.service</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;启动服务...&quot;</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> \${SERVICE_NAME}</span><span style="color:#9ECBFF;">.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检查服务状态</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;检查服务状态...&quot;</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> \${SERVICE_NAME}</span><span style="color:#9ECBFF;">.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;配置完成！&#39;sweep-backy.py&#39; 将在系统启动时自动运行。&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 确保脚本以 root 用户运行</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [ </span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">id</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-u</span><span style="color:#032F62;">)&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-ne</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> ]; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;请以 root 用户或使用 sudo 运行此脚本。&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">exit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 定义路径变量</span></span>
<span class="line"><span style="color:#24292E;">SCRIPT_PATH</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/home/firefly/Desktop/hackrf_build&quot;</span></span>
<span class="line"><span style="color:#24292E;">SERVICE_NAME</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;hackrf_signal&quot;</span></span>
<span class="line"><span style="color:#24292E;">SERVICE_FILE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/etc/systemd/system/\${</span><span style="color:#24292E;">SERVICE_NAME</span><span style="color:#032F62;">}.service&quot;</span></span>
<span class="line"><span style="color:#6A737D;">#START_SCRIPT=&quot;\${SCRIPT_PATH}/zjyg_signal/sweep-back.py&quot;</span></span>
<span class="line"><span style="color:#24292E;">START_SCRIPT</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">SCRIPT_PATH</span><span style="color:#032F62;">}/run.sh&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 赋予启动脚本执行权限</span></span>
<span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+x</span><span style="color:#24292E;"> \${START_SCRIPT}</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;启动脚本已创建并赋予执行权限: \${</span><span style="color:#24292E;">START_SCRIPT</span><span style="color:#032F62;">}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建 systemd 服务文件</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;创建 systemd 服务文件...&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#032F62;">EOL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> \${SERVICE_FILE}</span></span>
<span class="line"><span style="color:#032F62;">[Unit]</span></span>
<span class="line"><span style="color:#032F62;">Description=hackrf_signal</span></span>
<span class="line"><span style="color:#032F62;">After=network.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">[Service]</span></span>
<span class="line"><span style="color:#032F62;">Type=simple</span></span>
<span class="line"><span style="color:#032F62;">WorkingDirectory=\${</span><span style="color:#24292E;">SCRIPT_PATH</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">User=root</span></span>
<span class="line"><span style="color:#032F62;">ExecStart=\${</span><span style="color:#24292E;">START_SCRIPT</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">Restart=always</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">[Install]</span></span>
<span class="line"><span style="color:#032F62;">WantedBy=multi-user.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">EOL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重新加载 systemd，启用并启动服务</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;重新加载 systemd 守护进程...&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">daemon-reload</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;启用服务...&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> \${SERVICE_NAME}</span><span style="color:#032F62;">.service</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;启动服务...&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> \${SERVICE_NAME}</span><span style="color:#032F62;">.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检查服务状态</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;检查服务状态...&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> \${SERVICE_NAME}</span><span style="color:#032F62;">.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;配置完成！&#39;sweep-backy.py&#39; 将在系统启动时自动运行。&quot;</span></span></code></pre></div>`,10),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const B=s(p,[["render",t]]);export{u as __pageData,B as default};
