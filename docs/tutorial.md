---
sidebar_position: 2.5
sidebar_label: 图文教程
title: 图文教程：从安装到启动 Bridge
description: 25 张截图跟着点。安装、登录、订阅、选隧道（Quick Tunnel / Ngrok）、winget 报错处理、高级设置
---

# 图文教程：从安装到启动 Bridge

不想看视频，就跟着截图一步步点。全程 25 张图，覆盖 **安装 → 登录 → 订阅 → 选隧道 → 启动 Bridge**，最后附常见报错处理。

:::tip[配合视频]

- [Windows 覆盖安装，一键启动](https://www.bilibili.com/video/BV1PUtu6zEGs/)
- [Mac 替换安装，ngrok 配置](https://www.bilibili.com/video/BV1NMt36yEZt/)
- [工具演示、解决问题、AI 配置 ngrok](https://www.bilibili.com/video/BV1W3t36kEZR/)

:::

## 一、安装

安装包两个地方拿：

- [GitHub Releases](https://github.com/ZS520L/shuncode)（见 [下载安装](./install.md)）
- QQ 群文件的「下载」文件夹（群号见 [产品简介](./intro.md#qq)）

![群文件中的软件下载入口与下载文件夹](/img/tutorial/image1.png)

![群文件下载目录](/img/tutorial/image2.png)

群里还有两样东西值得翻：

- **群精华**：最新的 AI 消息与使用经验。
- **Chat-Plus 插件**：[github.com/aiguicai/Chat-Plus](https://github.com/aiguicai/Chat-Plus)，Chrome 插件，让 Gemini、DeepSeek 等网页也能配合 MCP 使用，仓库内有 B 站视频教程。

## 二、登录与订阅

### 1. 打开软件，进入初始页面

![软件初始页面：打开工作文件夹与设置入口](/img/tutorial/image3.png)

### 2. 打开工作文件夹，设置工作区

![文件菜单中的工作区与打开文件夹入口](/img/tutorial/image4.png)

### 3. 选择「信任工作区」

![信任工作区提示](/img/tutorial/image5.png)

![受限模式与信任工作区说明](/img/tutorial/image6.png)

### 4. 进入设置，切到 Bridge 页

右上角齿轮进设置，左侧选 **Bridge**。

![右上角设置入口](/img/tutorial/image7.png)

![Bridge 与 API 接入相关设置页面](/img/tutorial/image8.png)

### 5. 登录账户（GitHub / Gitee）

:::caution[先把网络备好]

Bridge 启动和运行需要访问外网。经验：**日韩节点、低延迟**的比较稳；watt 加速器不行。智能分流或全局都可以，但 **TUN / 增强模式会影响 Quick Tunnel**，开着的话先关掉。具体工具群里问。

:::

![Bridge 启动、网页对话启动链接与登录方式](/img/tutorial/image9.png)

![GitHub 注册登录与浏览器授权提示](/img/tutorial/image10.png)

登录成功后回到软件，能看到账号信息：

![GitHub 登录完成页面](/img/tutorial/image11.png)

### 6. 订阅 Bridge

选套餐、支付，然后点 **刷新授权**，状态变为已授权即可。价格见 [产品简介](./intro.md)，细节见 [购买套餐](./bridge/license.md)。

![Bridge 订阅状态、刷新授权与订阅方案](/img/tutorial/image12.png)

## 三、选隧道并启动

:::info

配置隧道需要联网。配好之后点 **启动 Bridge** 即可。三种隧道的完整说明见 [启动 Bridge](./bridge/start.md)，这里只讲最常用的两种。

:::

### 1. 选哪个

| 通道 | 特点 | 适合 |
|---|---|---|
| **Quick Tunnel** | 一键安装、配置简单、安全；**重启后 MCP 地址会变** | 对话链接。点启动按钮旁的「复制提示词」，直接发给 Arena 等网站的 Agent 模式即可 |
| **Ngrok** | 要自己下载、去官网复制 Token 和域名；**MCP 地址重启不变** | 配合浏览器插件，或接 GPT / Grok / Claude 自制插件（开发者模式） |

![MCP 通道选择：Quick Tunnel 与 Ngrok](/img/tutorial/image13.png)

### 2. Quick Tunnel：一键安装

1. 点 **一键安装**。
2. 成功后显示「已安装」。
3. 留意右下角弹窗；报错先检查网络。
4. 网络没问题仍失败，复制旁边的命令到终端自己装。
5. 报「缺少 winget」→ 看下面 [winget 问题](#四winget-报错处理)。

![Cloudflared 一键下载与下载命令](/img/tutorial/image14.png)

装好是这样：

![Cloudflared 安装检查与已安装状态](/img/tutorial/image15.png)

### 3. Ngrok：终端配置

#### 3.1 拿到下载命令、Token 和域名

打开 Ngrok 配置页，按界面提示分别复制下载命令、打开 Authtoken 页面、填写域名。

![Ngrok 配置页：复制下载命令、打开 Authtoken 页面并填写域名](/img/tutorial/image16.png)

#### 3.2 打开终端执行下载

![在 ShunCode 中打开终端](/img/tutorial/image17.png)

![将复制的下载命令粘贴到终端执行](/img/tutorial/image18.png)

无报错、下载成功后，打开 [ngrok 官网](https://dashboard.ngrok.com/) 注册登录：

![Ngrok 登录页面](/img/tutorial/image19.png)

#### 3.3 配置 Authtoken

在 Authtoken 页面复制配置命令，粘贴到终端执行。

![Ngrok Authtoken 页面：展示密钥并复制配置命令](/img/tutorial/image20.png)

:::note

ngrok 免费额度不适合多开工作区。

:::

![终端中配置 Ngrok Authtoken 成功](/img/tutorial/image21.png)

#### 3.4 配置域名

在 Domains 页面复制域名，填回 ShunCode 的 Bridge 设置。

![Ngrok Domains 页面：复制域名](/img/tutorial/image22.png)

![在 ShunCode Bridge 设置中填写 Ngrok 域名](/img/tutorial/image23.png)

配置完毕，回到 Bridge 页点 **启动 Bridge**。

## 四、winget 报错处理

一键安装 cloudflared 依赖 winget。报错说明电脑没装 winget，或环境变量里没有它的路径。

### 节点选择

下载慢或失败，先把节点切到日韩（ngrok 服务器在日本）。

### 手动安装 winget

1. 打开 [winget 发布页](https://github.com/microsoft/winget-cli/releases)（需要外网）。
2. 下载最新的 `.msixbundle`，例如：

   ```text
   Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle
   ```

3. 双击运行，按提示安装。

### 已安装但仍提示「找不到」

环境变量没自动加上，手动补：

1. `Win + R`，输入 `sysdm.cpl` 回车 → **高级** → **环境变量**。
2. 在「系统变量」里找到 `Path`，双击编辑。
3. **新建**，粘贴：

   ```text
   %LOCALAPPDATA%\Microsoft\WindowsApps
   ```

4. 逐层确定保存，重启 PowerShell 或 ShunCode，再试：

   ```powershell
   winget --version
   ```

看到类似 `v1.7.xxxx` 的版本号就说明可用了，回去重新点一键安装。

### 补充

- **Windows Server / 企业版 LTSC** 可能不支持 winget，改用 `choco` 或 `scoop`。
- 装完仍报错，试试在 **CMD**（而不是 PowerShell）里运行，PowerShell 有时需要刷新环境变量。

## 五、高级设置

### 快速打开：添加快速访问

把常用的网站加进去，以后一键在内置浏览器打开。

![快速打开：添加快速访问](/img/tutorial/image24.png)

### MCP 地址可重置

怀疑地址泄露，或想换一个：先断开 Bridge，再重置 MCP 地址。

![高级设置：断开 Bridge 并重置 MCP 地址](/img/tutorial/image25.png)

## 装好之后

- 把 MCP 地址（或「复制提示词」的内容）发到 [连接网站](./bridge/clients.md) 里任意一个 Agent 入口，就能开始干活。
- 抽到的模型好不好，看 [抽卡判断](./advanced/gacha.md)。
- 卡住了，群里问：群号见 [产品简介](./intro.md#qq)。
