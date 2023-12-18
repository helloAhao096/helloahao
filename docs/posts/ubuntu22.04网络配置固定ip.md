---
title: ubuntu22.04网络配置固定ip
description: ubuntu22.04网络配置固定ip
date: 2023-12-08
tags:
- linux
- ubuntu
- 网络
---

> 适用于Ubuntu 17.04及更高版本
## 配置文件
1. 进入 netplan 配置文件目录

    通常在 /etc/netplan/ 目录下。 一般有一些不同的名字，但是都是yaml文件
2. 在编辑前先拷贝一份，以防万一
    ```shell
    cp 01-network-manager-all.yaml 01-network-manager-all.yaml.bak
    ```
3. 查看本地使用的网络模式

    如果是有线连接一般就是eth0,wifi就是wlan0
    ```shell
    nmcli device show
    ```
    查看顶部的 GENERAL.DEVICE是什么，下面配置文件要用
4. 配置netplan的yaml文件
    ```shell
    sudo nano /etc/netplan/01-network-manager-all.yaml
    ```
    ```shell
    network:
      version: 2
      renderer: NetworkManager  # NetworkManager: 广泛用于 Linux 桌面环境的网络管理器/networkd:一般适用于ssh连接，轻量
      ethernets:
        wlan0:  # 请将 wlan0 替换为您的 GENERAL.DEVICE 网络接口名称
          addresses:
            - 192.168.52.223/24  # 请替换为您的静态 IP 地址和子网掩码
          # gateway4: 192.168.52.1  gateway4 已经被废弃，建议使用默认路由（default routes）来代替。
           routes:
            - to: 0.0.0.0/0
              via: 192.168.52.1
    ```
## 重启网络
5. 应用配置并且重启网络
    ```shell
    sudo netplan apply
    sudo systemctl restart network-manager
    ```
6. 查看静态ip是否配置成功
    ```shell
   # 喜欢哪个运行哪个
    ifconfig
    
   ip addr show
    ```

> 参考资料
> https://cloud.tencent.com/developer/article/2323503
> https://www.cnblogs.com/zjdxr-up/p/17444844.html
> https://blog.csdn.net/Neutionwei/article/details/107130995
> https://blog.csdn.net/ly2020_/article/details/89330404