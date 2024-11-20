---
title: docker中国镜像源、ubuntu apt source-list
description: docker中国镜像源、ubuntu apt source-list
date: 2024-11-18
tags:
- docker
- ubuntu
---


# Docker镜像配置

## 国内源

https://github.com/tech-shrimp/docker_installer


# Ubuntu
## ubuntu系统 apt source-list

> 给docker配置完国内镜像地址之后，如果需要FROM一些linux操作系统，则有时也会需要用到apt等包管理工具，但是source是从官方镜像拉取的，在国内更新安装包也特别慢
> 配置在/etc/apt/sources.list

ubuntu(x86)和ubuntu ports(arm)是不同的系统镜像，在配置镜像源的时候一定要区分运行ubuntu的设备是x86还是arm

## 阿里巴巴镜像源
https://developer.aliyun.com/mirror/
https://developer.aliyun.com/mirror/ubuntu/


# python

如何在dockerfile中下载python

```dockerfile

# 使用适合构建 HackRF 和 FastAPI 服务的基础镜像
FROM ubuntu:20.04

# 设置工作目录
WORKDIR /data_forwarding

# 设置环境变量
ENV DEBIAN_FRONTEND=noninteractive \
    PYTHON_VERSION=3.12.0 \
    PATH="/usr/local/bin:${PATH}"

# 替换为阿里云的 Ubuntu-Ports APT 软件源并安装基础依赖
RUN apt-get update && \
    apt-get install -y --no-install-recommends gnupg software-properties-common && \
    echo "deb https://mirrors.aliyun.com/ubuntu-ports/ focal main restricted universe multiverse" > /etc/apt/sources.list && \
    echo "deb-src https://mirrors.aliyun.com/ubuntu-ports/ focal main restricted universe multiverse" >> /etc/apt/sources.list && \
    echo "deb https://mirrors.aliyun.com/ubuntu-ports/ focal-security main restricted universe multiverse" >> /etc/apt/sources.list && \
    echo "deb-src https://mirrors.aliyun.com/ubuntu-ports/ focal-security main restricted universe multiverse" >> /etc/apt/sources.list && \
    echo "deb https://mirrors.aliyun.com/ubuntu-ports/ focal-updates main restricted universe multiverse" >> /etc/apt/sources.list && \
    echo "deb-src https://mirrors.aliyun.com/ubuntu-ports/ focal-updates main restricted universe multiverse" >> /etc/apt/sources.list && \
    echo "deb https://mirrors.aliyun.com/ubuntu-ports/ focal-backports main restricted universe multiverse" >> /etc/apt/sources.list && \
    echo "deb-src https://mirrors.aliyun.com/ubuntu-ports/ focal-backports main restricted universe multiverse" >> /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
        ca-certificates \
        wget \
        build-essential \
        libssl-dev \
        libffi-dev \
        zlib1g-dev \
        libbz2-dev \
        libreadline-dev \
        libsqlite3-dev \
        libncurses5-dev \
        libgdbm-dev \
        libnss3-dev \
        liblzma-dev \
        libusb-1.0-0-dev \
        libfftw3-dev \
        libboost-all-dev \
        autoconf \
        libtool \
        cmake \
        make \
        pkg-config \
        ca-certificates \
        curl && \
        apt-get clean && \
        rm -rf /var/lib/apt/lists/*

# 下载并安装指定版本的 Python 源码
RUN wget https://www.python.org/ftp/python/${PYTHON_VERSION}/Python-${PYTHON_VERSION}.tar.xz && \
    tar -xf Python-${PYTHON_VERSION}.tar.xz && \
    rm Python-${PYTHON_VERSION}.tar.xz && \
    cd Python-${PYTHON_VERSION} && \
    ./configure --enable-optimizations && \
    make -j$(nproc) && \
    make install && \
    cd /data_forwarding && \
    rm -rf Python-${PYTHON_VERSION}

# 验证 Python 和 SSL 模块是否正确安装
# 
RUN python3 -m ssl && python3 --version

# 复制 Python 依赖文件并安装依赖
COPY requirements.txt /data_forwarding/
RUN pip3 install --no-cache-dir \
    --index-url https://mirrors.aliyun.com/pypi/simple/ \
    --trusted-host mirrors.aliyun.com \
    -r requirements.txt

# 复制整个项目到容器内
COPY data_forwarding /data_forwarding

# 暴露容器的端口（HTTP 和 UDP）
EXPOSE 8000 8002

# 设置启动命令
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]


```

# pip
## 设置docker中的pip源

临时设置源
RUN pip install --no-cache-dir --index-url https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt
