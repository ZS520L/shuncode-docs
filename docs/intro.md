---
sidebar_position: 1
sidebar_label: 产品简介
title: 产品简介
description: 打辅助、不做替代。Plus 额度不够走 Bridge，用惯 API 走 Chat 模式
---

# 产品简介

ShunCode **打辅助，不做替代**。ChatGPT Plus、Codex、Arena、你自己的 API 都继续用；它只是把本机项目（工作区）接出去。Chat 模式在本机对话；Bridge 则让你在任意能开浏览器、能联网的设备上指挥这台电脑——换电脑、换手机、换系统都可以。

同一份软件里有两条用法，对上号再往下看。

## 先看这个：一键启动全教程

不知道从哪开始，跟着这条走一遍就通了。

<div className="bilibili-embed">
  <iframe
    src="https://player.bilibili.com/player.html?isOutside=true&bvid=BV1PUtu6zEGs&p=1"
    scrolling="no"
    frameBorder="no"
    allowFullScreen={true}
    title="Token 自助餐，ShunCode 一键启动全教程"
  />
</div>

[在 Bilibili 打开](https://www.bilibili.com/video/BV1PUtu6zEGs/)

:::tip[分系统的安装教程]

[下载安装](./install.md) 页还有 macOS 4 步配置和 Windows 完整功能演示两条视频。

:::

## 谁最合适

<div className="card-grid">
  <a className="ink-card" href="bridge/overview">
    <div className="ink-card__kicker">Bridge</div>
    <div className="ink-card__title">已经有 Plus，Codex 额度不够用</div>
    <p className="ink-card__desc">用浏览器接到 ChatGPT。不是反代；国内网络仍有封号风险，可买低价质保。</p>
    <div className="ink-card__meta">看 Bridge 模式 →</div>
  </a>
  <a className="ink-card" href="bridge/clients">
    <div className="ink-card__kicker">Bridge + Arena</div>
    <div className="ink-card__title">不想买 Plus</div>
    <p className="ink-card__desc">用免费 Arena，同样走 Bridge，换设备也能用。</p>
    <div className="ink-card__meta">连接网站 →</div>
  </a>
  <a className="ink-card" href="chat/overview">
    <div className="ink-card__kicker">Chat 模式</div>
    <div className="ink-card__title">用惯了 API</div>
    <p className="ink-card__desc">自己填 Key。免费模型很多，交流群里也常有接口福利。</p>
    <div className="ink-card__meta">看 Chat 模式 →</div>
  </a>
  <a className="ink-card" href="chat/multi-model">
    <div className="ink-card__kicker">卖点</div>
    <div className="ink-card__title">重要任务想一次做对</div>
    <p className="ink-card__desc">Chat 模式里的多模型博弈：意见一致再行动。</p>
    <div className="ink-card__meta">多模型博弈 →</div>
  </a>
</div>

:::tip[交个朋友]

套餐往划算了做，有问题能问到人。不是再卖你一套编辑器来替代 ChatGPT。

:::

## 先选路径

<div className="card-grid card-grid--2">
  <a className="ink-card" href="chat/overview">
    <div className="ink-card__kicker">Chat 模式</div>
    <div className="ink-card__title">在编辑器里自己和模型对话、调用工具</div>
    <p className="ink-card__desc">安装 → 配置模型 → Ask / Plan / Code。不用登录，也不用买 Bridge 套餐。</p>
    <div className="ink-card__meta">走 Chat 模式 →</div>
  </a>
  <a className="ink-card" href="bridge/overview">
    <div className="ink-card__kicker">Bridge 模式</div>
    <div className="ink-card__title">用浏览器指挥本机项目（工作区）</div>
    <p className="ink-card__desc">手机、另一台电脑或别的系统都可以。安装 → 登录 → 买套餐 → 启动隧道 → 连接网站。</p>
    <div className="ink-card__meta">走 Bridge →</div>
  </a>
</div>

:::info[两条路互不替代]

Chat 模式 **不用**登录、也 **不用**买 Bridge 套餐。Bridge 让别的设备通过浏览器连过来，不替代本地对话框。可以都用，但文档按路径分开。

:::

## ShunCode 是什么

- 编辑器是 Code-OSS 载体；模型循环跑在独立 `agent-host`，不写进 VS Code 内核。
- Chat 模式用 Ask / Plan / Code 锁工具：Ask、Plan 只读，Code 才能改文件、跑终端。
- Plan 里可以 [多模型博弈](./chat/multi-model.md)：几个模型从同一起点独立作答，**意见一致再行动**。
- 主编辑工具是 `apply_patch`：带版本哈希、整包预检，失败不部分写入。

网页端工具调用会越来越普遍。新出的 Agent 网站只要能跑终端、访问外网，用 [Bridge](./bridge/overview.md) 的同一条 MCP 就能从任意联网浏览器指挥本机项目（工作区），不必换编辑器。目前已知、已经测试过的入口见 [连接网站](./bridge/clients.md)，不是全部。

官方仓库：[https://github.com/ZS520L/shuncode](https://github.com/ZS520L/shuncode) · 当前版本 0.7.1。

## 接下来

<div className="card-grid">
  <a className="ink-card ink-card--compact" href="install">
    <div className="ink-card__kicker">1</div>
    <div className="ink-card__title">下载安装</div>
    <p className="ink-card__desc">含 macOS / Windows 上手视频。先装上，再选路径。</p>
  </a>
  <a className="ink-card ink-card--compact" href="chat/overview">
    <div className="ink-card__kicker">2 · Chat 模式</div>
    <div className="ink-card__title">Chat 模式</div>
    <p className="ink-card__desc">本机对话、调用工具。</p>
  </a>
  <a className="ink-card ink-card--compact" href="bridge/overview">
    <div className="ink-card__kicker">3 · Bridge</div>
    <div className="ink-card__title">Bridge 模式</div>
    <p className="ink-card__desc">任意联网浏览器指挥本机。</p>
  </a>
  <a className="ink-card ink-card--compact" href="advanced/overview">
    <div className="ink-card__kicker">4 · 高级</div>
    <div className="ink-card__title">高级玩法</div>
    <p className="ink-card__desc">MCP、Skills、记忆、思维训练营。</p>
  </a>
  <a className="ink-card ink-card--compact" href="faq">
    <div className="ink-card__kicker">5</div>
    <div className="ink-card__title">常见问答</div>
    <p className="ink-card__desc">对不上号再看这里。</p>
  </a>
</div>
