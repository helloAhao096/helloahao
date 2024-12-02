import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.b1192e57.js";const d=JSON.parse('{"title":"docker中国镜像源、ubuntu apt source-list","description":"docker中国镜像源、ubuntu apt source-list","frontmatter":{"title":"docker中国镜像源、ubuntu apt source-list","description":"docker中国镜像源、ubuntu apt source-list","date":"2024-11-18T00:00:00.000Z","tags":["docker","ubuntu"]},"headers":[],"relativePath":"posts/docker镜像源和ubuntu apt source-list.md","filePath":"posts/docker镜像源和ubuntu apt source-list.md","lastUpdated":1733131585000}'),l={name:"posts/docker镜像源和ubuntu apt source-list.md"},e=p(`<h1 id="docker镜像配置" tabindex="-1">Docker镜像配置 <a class="header-anchor" href="#docker镜像配置" aria-label="Permalink to &quot;Docker镜像配置&quot;">​</a></h1><h2 id="国内源" tabindex="-1">国内源 <a class="header-anchor" href="#国内源" aria-label="Permalink to &quot;国内源&quot;">​</a></h2><p><a href="https://github.com/tech-shrimp/docker_installer" target="_blank" rel="noreferrer">https://github.com/tech-shrimp/docker_installer</a></p><h1 id="ubuntu" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu" aria-label="Permalink to &quot;Ubuntu&quot;">​</a></h1><h2 id="ubuntu系统-apt-source-list" tabindex="-1">ubuntu系统 apt source-list <a class="header-anchor" href="#ubuntu系统-apt-source-list" aria-label="Permalink to &quot;ubuntu系统 apt source-list&quot;">​</a></h2><blockquote><p>给docker配置完国内镜像地址之后，如果需要FROM一些linux操作系统，则有时也会需要用到apt等包管理工具，但是source是从官方镜像拉取的，在国内更新安装包也特别慢 配置在/etc/apt/sources.list</p></blockquote><p>ubuntu(x86)和ubuntu ports(arm)是不同的系统镜像，在配置镜像源的时候一定要区分运行ubuntu的设备是x86还是arm</p><h2 id="阿里巴巴镜像源" tabindex="-1">阿里巴巴镜像源 <a class="header-anchor" href="#阿里巴巴镜像源" aria-label="Permalink to &quot;阿里巴巴镜像源&quot;">​</a></h2><p><a href="https://developer.aliyun.com/mirror/" target="_blank" rel="noreferrer">https://developer.aliyun.com/mirror/</a><a href="https://developer.aliyun.com/mirror/ubuntu/" target="_blank" rel="noreferrer">https://developer.aliyun.com/mirror/ubuntu/</a></p><h1 id="python" tabindex="-1">python <a class="header-anchor" href="#python" aria-label="Permalink to &quot;python&quot;">​</a></h1><p>如何在dockerfile中下载python</p><div class="language-dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用适合构建 HackRF 和 FastAPI 服务的基础镜像</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> ubuntu:20.04</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置工作目录</span></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /data_forwarding</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置环境变量</span></span>
<span class="line"><span style="color:#F97583;">ENV</span><span style="color:#E1E4E8;"> DEBIAN_FRONTEND=noninteractive \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    PYTHON_VERSION=3.12.0 \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    PATH=</span><span style="color:#9ECBFF;">&quot;/usr/local/bin:\${PATH}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 替换为阿里云的 Ubuntu-Ports APT 软件源并安装基础依赖</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> apt-get update &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    apt-get install -y --no-install-recommends gnupg software-properties-common &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    echo </span><span style="color:#9ECBFF;">&quot;deb https://mirrors.aliyun.com/ubuntu-ports/ focal main restricted universe multiverse&quot;</span><span style="color:#E1E4E8;"> &gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    echo </span><span style="color:#9ECBFF;">&quot;deb-src https://mirrors.aliyun.com/ubuntu-ports/ focal main restricted universe multiverse&quot;</span><span style="color:#E1E4E8;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    echo </span><span style="color:#9ECBFF;">&quot;deb https://mirrors.aliyun.com/ubuntu-ports/ focal-security main restricted universe multiverse&quot;</span><span style="color:#E1E4E8;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    echo </span><span style="color:#9ECBFF;">&quot;deb-src https://mirrors.aliyun.com/ubuntu-ports/ focal-security main restricted universe multiverse&quot;</span><span style="color:#E1E4E8;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    echo </span><span style="color:#9ECBFF;">&quot;deb https://mirrors.aliyun.com/ubuntu-ports/ focal-updates main restricted universe multiverse&quot;</span><span style="color:#E1E4E8;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    echo </span><span style="color:#9ECBFF;">&quot;deb-src https://mirrors.aliyun.com/ubuntu-ports/ focal-updates main restricted universe multiverse&quot;</span><span style="color:#E1E4E8;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    echo </span><span style="color:#9ECBFF;">&quot;deb https://mirrors.aliyun.com/ubuntu-ports/ focal-backports main restricted universe multiverse&quot;</span><span style="color:#E1E4E8;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    echo </span><span style="color:#9ECBFF;">&quot;deb-src https://mirrors.aliyun.com/ubuntu-ports/ focal-backports main restricted universe multiverse&quot;</span><span style="color:#E1E4E8;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    apt-get update &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    apt-get install -y --no-install-recommends \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        ca-certificates \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        wget \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        build-essential \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        libssl-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        libffi-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        zlib1g-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        libbz2-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        libreadline-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        libsqlite3-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        libncurses5-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        libgdbm-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        libnss3-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        liblzma-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        libusb-1.0-0-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        libfftw3-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        libboost-all-dev \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        autoconf \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        libtool \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        cmake \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        make \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        pkg-config \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        ca-certificates \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        curl &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        apt-get clean &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">        rm -rf /var/lib/apt/lists/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载并安装指定版本的 Python 源码</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> wget https://www.python.org/ftp/python/\${PYTHON_VERSION}/Python-\${PYTHON_VERSION}.tar.xz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    tar -xf Python-\${PYTHON_VERSION}.tar.xz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    rm Python-\${PYTHON_VERSION}.tar.xz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    cd Python-\${PYTHON_VERSION} &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    ./configure --enable-optimizations &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    make -j$(nproc) &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    make install &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    cd /data_forwarding &amp;&amp; \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    rm -rf Python-\${PYTHON_VERSION}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 验证 Python 和 SSL 模块是否正确安装</span></span>
<span class="line"><span style="color:#6A737D;"># </span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> python3 -m ssl &amp;&amp; python3 --version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制 Python 依赖文件并安装依赖</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> requirements.txt /data_forwarding/</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> pip3 install --no-cache-dir \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    --index-url https://mirrors.aliyun.com/pypi/simple/ \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    --trusted-host mirrors.aliyun.com \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    -r requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制整个项目到容器内</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> data_forwarding /data_forwarding</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 暴露容器的端口（HTTP 和 UDP）</span></span>
<span class="line"><span style="color:#F97583;">EXPOSE</span><span style="color:#E1E4E8;"> 8000 8002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置启动命令</span></span>
<span class="line"><span style="color:#F97583;">CMD</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;uvicorn&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;main:app&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;--host&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;0.0.0.0&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;--port&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;8000&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用适合构建 HackRF 和 FastAPI 服务的基础镜像</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> ubuntu:20.04</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置工作目录</span></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /data_forwarding</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置环境变量</span></span>
<span class="line"><span style="color:#D73A49;">ENV</span><span style="color:#24292E;"> DEBIAN_FRONTEND=noninteractive \\</span></span>
<span class="line"><span style="color:#24292E;">    PYTHON_VERSION=3.12.0 \\</span></span>
<span class="line"><span style="color:#24292E;">    PATH=</span><span style="color:#032F62;">&quot;/usr/local/bin:\${PATH}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 替换为阿里云的 Ubuntu-Ports APT 软件源并安装基础依赖</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> apt-get update &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    apt-get install -y --no-install-recommends gnupg software-properties-common &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    echo </span><span style="color:#032F62;">&quot;deb https://mirrors.aliyun.com/ubuntu-ports/ focal main restricted universe multiverse&quot;</span><span style="color:#24292E;"> &gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    echo </span><span style="color:#032F62;">&quot;deb-src https://mirrors.aliyun.com/ubuntu-ports/ focal main restricted universe multiverse&quot;</span><span style="color:#24292E;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    echo </span><span style="color:#032F62;">&quot;deb https://mirrors.aliyun.com/ubuntu-ports/ focal-security main restricted universe multiverse&quot;</span><span style="color:#24292E;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    echo </span><span style="color:#032F62;">&quot;deb-src https://mirrors.aliyun.com/ubuntu-ports/ focal-security main restricted universe multiverse&quot;</span><span style="color:#24292E;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    echo </span><span style="color:#032F62;">&quot;deb https://mirrors.aliyun.com/ubuntu-ports/ focal-updates main restricted universe multiverse&quot;</span><span style="color:#24292E;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    echo </span><span style="color:#032F62;">&quot;deb-src https://mirrors.aliyun.com/ubuntu-ports/ focal-updates main restricted universe multiverse&quot;</span><span style="color:#24292E;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    echo </span><span style="color:#032F62;">&quot;deb https://mirrors.aliyun.com/ubuntu-ports/ focal-backports main restricted universe multiverse&quot;</span><span style="color:#24292E;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    echo </span><span style="color:#032F62;">&quot;deb-src https://mirrors.aliyun.com/ubuntu-ports/ focal-backports main restricted universe multiverse&quot;</span><span style="color:#24292E;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    apt-get update &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    apt-get install -y --no-install-recommends \\</span></span>
<span class="line"><span style="color:#24292E;">        ca-certificates \\</span></span>
<span class="line"><span style="color:#24292E;">        wget \\</span></span>
<span class="line"><span style="color:#24292E;">        build-essential \\</span></span>
<span class="line"><span style="color:#24292E;">        libssl-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        libffi-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        zlib1g-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        libbz2-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        libreadline-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        libsqlite3-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        libncurses5-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        libgdbm-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        libnss3-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        liblzma-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        libusb-1.0-0-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        libfftw3-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        libboost-all-dev \\</span></span>
<span class="line"><span style="color:#24292E;">        autoconf \\</span></span>
<span class="line"><span style="color:#24292E;">        libtool \\</span></span>
<span class="line"><span style="color:#24292E;">        cmake \\</span></span>
<span class="line"><span style="color:#24292E;">        make \\</span></span>
<span class="line"><span style="color:#24292E;">        pkg-config \\</span></span>
<span class="line"><span style="color:#24292E;">        ca-certificates \\</span></span>
<span class="line"><span style="color:#24292E;">        curl &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">        apt-get clean &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">        rm -rf /var/lib/apt/lists/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载并安装指定版本的 Python 源码</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> wget https://www.python.org/ftp/python/\${PYTHON_VERSION}/Python-\${PYTHON_VERSION}.tar.xz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    tar -xf Python-\${PYTHON_VERSION}.tar.xz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    rm Python-\${PYTHON_VERSION}.tar.xz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    cd Python-\${PYTHON_VERSION} &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    ./configure --enable-optimizations &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    make -j$(nproc) &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    make install &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    cd /data_forwarding &amp;&amp; \\</span></span>
<span class="line"><span style="color:#24292E;">    rm -rf Python-\${PYTHON_VERSION}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 验证 Python 和 SSL 模块是否正确安装</span></span>
<span class="line"><span style="color:#6A737D;"># </span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> python3 -m ssl &amp;&amp; python3 --version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制 Python 依赖文件并安装依赖</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> requirements.txt /data_forwarding/</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> pip3 install --no-cache-dir \\</span></span>
<span class="line"><span style="color:#24292E;">    --index-url https://mirrors.aliyun.com/pypi/simple/ \\</span></span>
<span class="line"><span style="color:#24292E;">    --trusted-host mirrors.aliyun.com \\</span></span>
<span class="line"><span style="color:#24292E;">    -r requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制整个项目到容器内</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> data_forwarding /data_forwarding</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 暴露容器的端口（HTTP 和 UDP）</span></span>
<span class="line"><span style="color:#D73A49;">EXPOSE</span><span style="color:#24292E;"> 8000 8002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置启动命令</span></span>
<span class="line"><span style="color:#D73A49;">CMD</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;uvicorn&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;main:app&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;--host&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;0.0.0.0&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;--port&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;8000&quot;</span><span style="color:#24292E;">]</span></span></code></pre></div><h1 id="pip" tabindex="-1">pip <a class="header-anchor" href="#pip" aria-label="Permalink to &quot;pip&quot;">​</a></h1><h2 id="设置docker中的pip源" tabindex="-1">设置docker中的pip源 <a class="header-anchor" href="#设置docker中的pip源" aria-label="Permalink to &quot;设置docker中的pip源&quot;">​</a></h2><p>临时设置源 RUN pip install --no-cache-dir --index-url <a href="https://pypi.tuna.tsinghua.edu.cn/simple" target="_blank" rel="noreferrer">https://pypi.tuna.tsinghua.edu.cn/simple</a> -r requirements.txt</p>`,15),o=[e];function t(c,r,i,u,E,y){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{d as __pageData,h as default};
