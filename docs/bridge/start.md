---
sidebar_position: 4
sidebar_label: 启动 Bridge
title: 启动 Bridge
description: Cloudflare Quick / Named 与 ngrok 三种隧道的配置与启动
---

# 启动 Bridge

Bridge 把当前工作区的 MCP 工具通过公网隧道暴露出去。换电脑、换手机、换系统，只要能打开浏览器、能联网就能连上；读写仍发生在你这台装着 ShunCode 的机器上。常用入口见 [连接网站](./clients.md)。

:::info[先停再切]

切换隧道模式前必须先 **停止 Bridge**。三种模式共用同一套 MCP 工具，差别只在公网地址怎么来。

:::

## 开始之前

登录和开通授权请看专门的两页，不要和隧道配置混在一起：

1. [登录账号](./account.md)：GitHub 或 Gitee。
2. [购买套餐](./license.md)：购买套餐，确认当前设备已授权。
3. 打开侧栏 **Bridge → 连接设置**，选下面三种隧道之一，配好后再点 **启动 Bridge**。

## 选哪种隧道

| 模式 | 地址 | 需要什么 | 适合 |
| --- | --- | --- | --- |
| Cloudflare Quick Tunnel | 临时，每次启动都会变 | 只需安装 cloudflared | 默认 · 零配置，先跑起来 |
| Cloudflare Named Tunnel | 固定主机名 | Cloudflare 账号、域名、Tunnel Token、Published application | 长期给各设备用同一个地址 |
| ngrok 开发域名 | 固定开发域名 | ngrok 账号、Authtoken、保留域名 | 免费额度内要固定地址 |

对应设置：`shuncode.bridge.tunnelProvider`，取值 `cloudflare` / `cloudflare-named` / `ngrok`。

## Cloudflare Quick Tunnel

默认模式。无需 Cloudflare 账号、Token 或域名。每次点 **启动 Bridge** 都会生成新的临时 MCP 地址，ShunCode 会自动复制，请到手机或另一台电脑的对话里替换。

限制：官方未列每月请求额度；最多 200 个并发请求；无 SLA。

### 配置

1. 安装 cloudflared。Windows 可在 Bridge 页点 **一键安装 cloudflared**，或在 PowerShell 执行：

```powershell
winget install --id Cloudflare.cloudflared --exact --accept-package-agreements --accept-source-agreements
cloudflared --version
```

官方安装包见 [cloudflared 下载](https://developers.cloudflare.com/tunnel/downloads/)。

2. 隧道模式选 **Cloudflare Quick Tunnel（无需账号或域名）**。
3. 点 **启动 Bridge**，把复制到的 MCP 地址贴到那台设备的对话或 MCP 设置里。

:::tip[网络]

cloudflared 走 QUIC / UDP 7844 连 Cloudflare 边缘。普通 HTTP 代理对它无效；连不上时请开系统 / 全局（TUN）代理。

:::

## Cloudflare Named Tunnel

固定地址。ShunCode 重启后主机名不变，手机或其他电脑里的 MCP 地址通常不用改。

### 在 Cloudflare 控制台

1. 同样先安装 cloudflared（命令同上）。
2. 打开 [Cloudflare Tunnels](https://dash.cloudflare.com/?to=%2F%3Aaccount%2Ftunnels)，创建远程管理的 Tunnel，复制 **Tunnel Token**。
3. 添加 **Published application** 路由：
   - 公网主机名 = 你要给各设备用的域名，例如 `mcp.example.com`
   - Service URL = ShunCode 显示的完整地址，必须是 `http://127.0.0.1:<端口>`（默认端口 `48271`）
4. 在 [DNS](https://dash.cloudflare.com/?to=%2F%3Aaccount%2F%3Azone%2Fdns%2Frecords) 确认该主机名记录已指向这条 Tunnel。

### 在 ShunCode

隧道模式选 **Cloudflare Named Tunnel**，填写后点 **保存 Named Tunnel**：

| 字段 | 说明 |
| --- | --- |
| 公网主机名 | 与 Cloudflare 上发布的主机名一致 |
| Tunnel Token | 粘贴后会安全保存；下次留空表示沿用已保存的 Token |
| 固定本地端口 | 1024–65535，默认 `48271`；必须与 Cloudflare Service URL 的端口完全一致 |

设置项：

- `shuncode.bridge.cloudflareNamedDomain`
- `shuncode.bridge.cloudflareNamedLocalPort`（默认 `48271`）
- Token 不进 `settings.json`，由 Bridge 安全存储

## ngrok 开发域名

账号分配的开发域名重启后可复用。免费额度大约每月 20,000 次 HTTP/S 请求和 1 GB 出站流量。

### 一次性配置（Windows PowerShell）

安装完成后请重启 ShunCode，让扩展主机能找到 `ngrok`。

```powershell
winget install --id 9MVS1J51GMK6 --source msstore --accept-package-agreements --accept-source-agreements
ngrok config add-authtoken <YOUR_AUTHTOKEN>
ngrok version; ngrok config check
```

- Authtoken：[ngrok Authtoken](https://dashboard.ngrok.com/get-started/your-authtoken)
- 保留域名：[ngrok Domains](https://dashboard.ngrok.com/domains)
- 安装包：[ngrok for Windows](https://ngrok.com/download/windows)

### 在 ShunCode

1. 隧道模式选 **ngrok 开发域名**。
2. 在 **ngrok 域名** 填控制台里的保留域名，例如 `your-name.ngrok-free.dev`。
3. 点 **启动 Bridge**。

设置项：`shuncode.bridge.ngrokDomain`。

:::info[代理]

免费 ngrok 遇到 HTTP 代理会报 `ERR_NGROK_9009`。默认 `shuncode.bridge.ngrokUseHttpProxy` 为关，让 ngrok 直连。付费 Pay-as-you-go 才需要打开这项。

:::

## 启动与自动打开

1. 连接设置显示 **已就绪** 后再点 **启动 Bridge**。
2. 运行中复制 **MCP 地址**（或 **复制提示词**），在任意能开浏览器、能联网的设备上使用。传输协议是 Streamable HTTP。
3. 地址里带随机秘密路径；泄露了就点 **重置 MCP 地址**，旧链接立即失效。
4. 勾选 **随 ShunCode 启动 Bridge**（`shuncode.bridge.persistentMode`）后，应用准备完成会自动打开并启动 Bridge。须先完成 [购买套餐](./license.md)。

切换模式或改域名 / Token 前，先 **停止 Bridge**。

## 安全与排障

- Bridge 能改文件、跑终端，MCP 地址不要发到公开场合。
- 远程侧只看到工具返回的片段，仓库仍在本机。
- 公网健康检查超时或不可达：配置 `http.proxy`，或开系统 / 全局（TUN）代理。
- `shuncode.bridge.startupTimeoutMs` 默认 `20000`，是隧道就绪后等公网健康检查的上限。
