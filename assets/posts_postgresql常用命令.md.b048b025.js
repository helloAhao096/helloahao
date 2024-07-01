import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.676e9b8e.js";const g=JSON.parse('{"title":"postgresql 常用命令","description":"postgresql 常用命令","frontmatter":{"title":"postgresql 常用命令","description":"postgresql 常用命令","date":"2024-07-01T00:00:00.000Z","tags":["linux","sql"]},"headers":[],"relativePath":"posts/postgresql常用命令.md","filePath":"posts/postgresql常用命令.md","lastUpdated":1719812812000}'),p={name:"posts/postgresql常用命令.md"},o=l(`<blockquote><p>参考资料: <a href="https://ken.io/note/macos-postgresql-install-and-configuration" target="_blank" rel="noreferrer">https://ken.io/note/macos-postgresql-install-and-configuration</a></p></blockquote><h1 id="mac-命令" tabindex="-1">mac 命令 <a class="header-anchor" href="#mac-命令" aria-label="Permalink to &quot;mac 命令&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看服务状态</span></span>
<span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">services</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动服务</span></span>
<span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">services</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postgresql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 连接进入数据库</span></span>
<span class="line"><span style="color:#B392F0;">psql</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-U</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postgres</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># -U 指定用户</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">psql</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postgres</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># -d 指定数据库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启服务（brew安装）</span></span>
<span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">services</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postgresql@15</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启服务（dmg安装，通过-D指定数据目录）</span></span>
<span class="line"><span style="color:#B392F0;">pg_ctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/Library/PostgreSQL/15/data</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看服务状态</span></span>
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">services</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动服务</span></span>
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">services</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postgresql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 连接进入数据库</span></span>
<span class="line"><span style="color:#6F42C1;">psql</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-U</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postgres</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># -U 指定用户</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">psql</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postgres</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># -d 指定数据库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启服务（brew安装）</span></span>
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">services</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postgresql@15</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启服务（dmg安装，通过-D指定数据目录）</span></span>
<span class="line"><span style="color:#6F42C1;">pg_ctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/Library/PostgreSQL/15/data</span></span></code></pre></div><h1 id="postgresql-操作命令" tabindex="-1">postgresql 操作命令 <a class="header-anchor" href="#postgresql-操作命令" aria-label="Permalink to &quot;postgresql 操作命令&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查看所有用户</span></span>
<span class="line"><span style="color:#B392F0;">\\du</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有数据库</span></span>
<span class="line"><span style="color:#B392F0;">\\l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换当前数据库</span></span>
<span class="line"><span style="color:#B392F0;">\\c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{dbname}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看当前库下所有的表</span></span>
<span class="line"><span style="color:#B392F0;">\\dt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看指定表</span></span>
<span class="line"><span style="color:#B392F0;">\\d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{tablename}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看数据目录</span></span>
<span class="line"><span style="color:#B392F0;">SHOW</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">data_directory</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 退出psql</span></span>
<span class="line"><span style="color:#B392F0;">\\q</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查看所有用户</span></span>
<span class="line"><span style="color:#6F42C1;">\\du</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有数据库</span></span>
<span class="line"><span style="color:#6F42C1;">\\l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换当前数据库</span></span>
<span class="line"><span style="color:#6F42C1;">\\c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{dbname}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看当前库下所有的表</span></span>
<span class="line"><span style="color:#6F42C1;">\\dt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看指定表</span></span>
<span class="line"><span style="color:#6F42C1;">\\d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{tablename}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看数据目录</span></span>
<span class="line"><span style="color:#6F42C1;">SHOW</span><span style="color:#24292E;"> </span><span style="color:#032F62;">data_directory</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 退出psql</span></span>
<span class="line"><span style="color:#6F42C1;">\\q</span></span></code></pre></div>`,5),e=[o];function c(t,r,i,y,E,F){return n(),a("div",null,e)}const C=s(p,[["render",c]]);export{g as __pageData,C as default};
