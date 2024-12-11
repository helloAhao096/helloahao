import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.b1192e57.js";const d=JSON.parse('{"title":"docker 自动化安装部署、配置镜像源","description":"docker 自动化安装部署、配置镜像源","frontmatter":{"title":"docker 自动化安装部署、配置镜像源","description":"docker 自动化安装部署、配置镜像源","date":"2024-11-18T00:00:00.000Z","tags":["docker","ubuntu"]},"headers":[],"relativePath":"posts/docker 自动化安装部署、配置镜像源.md","filePath":"posts/docker 自动化安装部署、配置镜像源.md","lastUpdated":1733884820000}'),l={name:"posts/docker 自动化安装部署、配置镜像源.md"},o=p(`<h2 id="docker-自动安装部署脚本" tabindex="-1">Docker 自动安装部署脚本 <a class="header-anchor" href="#docker-自动安装部署脚本" aria-label="Permalink to &quot;Docker 自动安装部署脚本&quot;">​</a></h2><p><a href="https://linuxmirrors.cn/other/#docker-%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC" target="_blank" rel="noreferrer">https://linuxmirrors.cn/other/#docker-安装脚本</a></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 三条url命令都是使用sh脚本部署docker，在所需的环境执行和运行后，即可自动化安装docker，并且配置镜像源</span></span>
<span class="line"><span style="color:#6A737D;"># 具体命令和参数参考上面的 linuxmirrors 的文档</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-sSL</span><span style="color:#9ECBFF;"> https://linuxmirrors.cn/docker.sh)</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 推荐</span></span>
<span class="line"><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-sSL</span><span style="color:#9ECBFF;"> https://raw.githubusercontent.com/SuperManito/LinuxMirrors/main/DockerInstallation.sh)</span></span>
<span class="line"><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-sSL</span><span style="color:#9ECBFF;"> https://gitee.com/SuperManito/LinuxMirrors/raw/main/DockerInstallation.sh)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 三条url命令都是使用sh脚本部署docker，在所需的环境执行和运行后，即可自动化安装docker，并且配置镜像源</span></span>
<span class="line"><span style="color:#6A737D;"># 具体命令和参数参考上面的 linuxmirrors 的文档</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-sSL</span><span style="color:#032F62;"> https://linuxmirrors.cn/docker.sh)</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 推荐</span></span>
<span class="line"><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-sSL</span><span style="color:#032F62;"> https://raw.githubusercontent.com/SuperManito/LinuxMirrors/main/DockerInstallation.sh)</span></span>
<span class="line"><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-sSL</span><span style="color:#032F62;"> https://gitee.com/SuperManito/LinuxMirrors/raw/main/DockerInstallation.sh)</span></span></code></pre></div><h2 id="docker-手动更换镜像源" tabindex="-1">Docker 手动更换镜像源 <a class="header-anchor" href="#docker-手动更换镜像源" aria-label="Permalink to &quot;Docker 手动更换镜像源&quot;">​</a></h2><p><a href="https://github.com/tech-shrimp/docker_installer" target="_blank" rel="noreferrer">https://github.com/tech-shrimp/docker_installer</a></p><h2 id="linux" tabindex="-1">linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;linux&quot;">​</a></h2><p>GNU/Linux 更换系统软件源脚本</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-sSL</span><span style="color:#9ECBFF;"> https://linuxmirrors.cn/main.sh)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-sSL</span><span style="color:#032F62;"> https://linuxmirrors.cn/main.sh)</span></span></code></pre></div><h1 id="python" tabindex="-1">python <a class="header-anchor" href="#python" aria-label="Permalink to &quot;python&quot;">​</a></h1><p>如何在dockerfile中下载python</p><div class="language-dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
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
<span class="line"><span style="color:#6A737D;"># 设置启动命令</span></span>
<span class="line"><span style="color:#D73A49;">CMD</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;uvicorn&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;main:app&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;--host&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;0.0.0.0&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;--port&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;8000&quot;</span><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="设置pip源" tabindex="-1">设置pip源 <a class="header-anchor" href="#设置pip源" aria-label="Permalink to &quot;设置pip源&quot;">​</a></h2><h3 id="临时设置源" tabindex="-1">临时设置源 <a class="header-anchor" href="#临时设置源" aria-label="Permalink to &quot;临时设置源&quot;">​</a></h3><p>pip install --no-cache-dir --index-url <a href="https://pypi.tuna.tsinghua.edu.cn/simple" target="_blank" rel="noreferrer">https://pypi.tuna.tsinghua.edu.cn/simple</a> -r requirements.txt</p><h3 id="设置全局源" tabindex="-1">设置全局源 <a class="header-anchor" href="#设置全局源" aria-label="Permalink to &quot;设置全局源&quot;">​</a></h3><p>pip3 config set global.index-url <a href="https://mirrors.aliyun.com/pypi/simple/" target="_blank" rel="noreferrer">https://mirrors.aliyun.com/pypi/simple/</a></p><h2 id="文档参考地址" tabindex="-1">文档参考地址 <a class="header-anchor" href="#文档参考地址" aria-label="Permalink to &quot;文档参考地址&quot;">​</a></h2><blockquote><p><a href="https://linuxmirrors.cn/" target="_blank" rel="noreferrer">https://linuxmirrors.cn/</a></p></blockquote>`,18),e=[o];function t(r,c,i,E,y,u){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{d as __pageData,h as default};
