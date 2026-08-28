---
sidebar_position: 5
sidebar_label: 连接网站
title: 连接网站
description: 能填 MCP 地址，或支持 Agent、终端且能访问外网的网站，都可以连 Bridge
---

# 连接网站

Bridge 给出的是 **Streamable HTTP MCP 地址**。任意能打开浏览器、能联网的设备拿到这个地址后，就能指挥你本机项目（工作区）——换电脑、换手机、换操作系统都可以。读写仍发生在装着 ShunCode 的那台机器上。

连法有两种：网站支持创建自定义插件 / 连接器 / MCP 的，按官方方式把地址填进去；**官方不支持也没关系**——只要该站支持 Agent、能用终端、并且能访问外网，每次新开对话直接发一条带 MCP 链接的提示词即可。

ShunCode 在 Bridge 页顶部提供一键打开，站点在 **内置浏览器** 里打开，不必另开系统浏览器。

## 网页端工具调用是趋势

大模型正在从「对话框」变成「能调工具的 Agent」。能在网页里跑终端、访问外网的站点会越来越多——每多一个，ShunCode 就多一个远程指挥台，本机项目（工作区）不用搬、编辑器不用换。

目前已知、已经测试过的包括 ChatGPT、Arena、WorkBuddy、Trae、Qwen、Manus、Shunova，**不是全部**。官方不支持创建自定义插件 / 连接器 / MCP 的，用提示词也能连。符合条件的新站点同样能接，名单会变长，**接法不用变**：还是这一条 MCP。

## 内置入口

<div className="card-grid card-grid--sites">
  <a className="ink-card ink-card--compact" href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">
    <div className="ink-card__kicker">内置入口</div>
    <div className="ink-card__title">ChatGPT</div>
    <p className="ink-card__desc">chatgpt.com</p>
  </a>
  <a className="ink-card ink-card--compact" href="https://arena.ai/agent" target="_blank" rel="noopener noreferrer">
    <div className="ink-card__kicker">内置入口</div>
    <div className="ink-card__title">Arena</div>
    <p className="ink-card__desc">arena.ai/agent</p>
  </a>
  <a className="ink-card ink-card--compact" href="https://www.workbuddy.cn/app" target="_blank" rel="noopener noreferrer">
    <div className="ink-card__kicker">内置入口</div>
    <div className="ink-card__title">WorkBuddy</div>
    <p className="ink-card__desc">workbuddy.cn/app</p>
  </a>
  <a className="ink-card ink-card--compact" href="https://work.trae.cn" target="_blank" rel="noopener noreferrer">
    <div className="ink-card__kicker">内置入口</div>
    <div className="ink-card__title">Trae</div>
    <p className="ink-card__desc">work.trae.cn</p>
  </a>
  <a className="ink-card ink-card--compact" href="https://qwenwork.cn/app/chat" target="_blank" rel="noopener noreferrer">
    <div className="ink-card__kicker">内置入口</div>
    <div className="ink-card__title">Qwen</div>
    <p className="ink-card__desc">qwenwork.cn/app/chat</p>
  </a>
  <a className="ink-card ink-card--compact" href="https://manus.im/app" target="_blank" rel="noopener noreferrer">
    <div className="ink-card__kicker">内置入口</div>
    <div className="ink-card__title">Manus</div>
    <p className="ink-card__desc">manus.im/app</p>
  </a>
  <a className="ink-card ink-card--compact" href="https://shunova.cc/" target="_blank" rel="noopener noreferrer">
    <div className="ink-card__kicker">内置入口</div>
    <div className="ink-card__title">Shunova</div>
    <p className="ink-card__desc">shunova.cc</p>
  </a>
</div>

以上是目前已知、已经测试过、产品里带了按钮的入口，不是全部。

## 两种接法

先 [启动 Bridge](./start.md)，等状态变成运行中，再点 **复制 MCP 地址** 或 **复制提示词**。

### 1. 网站支持创建自定义插件 / 连接器 / MCP

在该站的插件 / 连接器 / MCP 设置里粘贴地址，保存后再开始对话。填过一次，之后同一配置通常还能用（Quick Tunnel 重启后地址会变，要再贴一次）。

### 2. 网站不支持创建自定义插件 / 连接器 / MCP

只要同时满足下面三点，也可以连：

- 支持 Agent（能自己调工具、跑任务）
- 能使用终端
- 能访问外网（才能连上你的 MCP 地址）

做法：**每次新开对话**，把提示词整段贴进输入框发出去，不要拆开、不要先聊两句再补地址。

这不是破解，也不是高并发调接口。就是网页上正常开对话，**只有第一句比较特殊**（整段提示词），后面该怎么聊怎么聊。

点 **复制提示词** 会得到类似：

```text
https://xxxx.trycloudflare.com/mcp/<秘密路径>

快速连接这个 MCP（URL），明确使用规则，熟悉可用工具，做好处理接下来一系列工作的准备。
```

新开一个对话就要再发一次。旧对话不会自动记住这条 MCP。

:::warning[不要暴露 MCP]

MCP 地址带秘密路径，拿到的人可以改你电脑上的文件、跑终端。不要发到群、论坛、公开 Issue，也不要截图带上完整地址。泄露了立刻在 Bridge 页点 **重置 MCP 地址**，旧链接马上失效。

:::

:::info[Quick Tunnel 注意]

Quick Tunnel 每次启动地址都会变。重启 Bridge 后，要到那台设备的对话里换成新地址。Named Tunnel 和 ngrok 固定域名通常不用改。

:::

## 自己加网站

列表里没有的站点，用 Bridge 页的 **快速打开**：

1. 填名称和 `https://` 地址，点 **添加**。
2. 之后和内置按钮一样出现在本页顶部，点击仍在内置浏览器打开。
3. 不需要的项可以删除。

设置项：`shuncode.bridge.quickLinks`。
