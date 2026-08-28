---
sidebar_position: 6
sidebar_label: 常见问答
title: 常见问答
description: 按 Chat 模式、Bridge 模式和高级玩法分开的常见问题
---

# 常见问答

先确认你走的是 [Chat 模式](./chat/overview.md) 还是 [Bridge 模式](./bridge/overview.md)，进阶看 [高级玩法](./advanced/overview.md)。

## 产品

### ShunCode 是 VS Code 插件还是独立软件？

独立桌面软件。编辑器是 Code-OSS 载体，Agent 跑在单独的 `agent-host` 进程，模型调用不进 workbench 内核。

安装见 [下载安装](./install.md)。

## Chat 模式

### Ask / Plan / Code 有什么区别？

Ask、Plan 只有只读工具。Code 才允许 `apply_patch` 和终端。需要改仓库时请切到 Code。对照表见 [Ask / Plan / Code](./chat/modes.md)。

### 为什么要多模型博弈，而不是一个模型直接改？

一个模型容易流畅地走偏。Plan 里让几个模型从同一起点独立作答，合并出共识再动手，成功率更高。详见 [多模型博弈](./chat/multi-model.md)。

### 补丁失败提示 STALE_FILE 怎么办？

文件在读过之后被改过。重新 `read_files` 取新哈希，再生成补丁，不要用旧上下文硬打。

### Chat 模式要登录、买套餐吗？

不用。Chat 模式只需 [配置模型](./chat/api-key.md)。登录和购买只属于 Bridge。

## Bridge 模式

### 远程 Agent 会不会把代码拷到别人电脑？

不会整仓外传。远程侧只看到工具返回的片段；写入发生在本机。仍须保管好 Bridge 链接。

### 用 Bridge 接 ChatGPT，会封号吗？

不是反代。官方支持创建自定义插件 / 连接器 / MCP 的，按官方方式填；不支持的也是网页上正常对话，只是第一句带 MCP 链接，不是高并发。但在国内，代理和网络仍可能触发风控。封号不是 ShunCode 造成的，我们也不承担责任。需要兜底可买低价质保方案。说明见 [Bridge 概览](./bridge/overview.md)。

货比百家：

<div className="card-grid card-grid--2">
  <a className="ink-card" href="https://priceai.cc/" target="_blank" rel="noopener noreferrer">
    <div className="ink-card__kicker">买号比价</div>
    <div className="ink-card__title">PriceAI</div>
    <p className="ink-card__desc">AI 低价卡网订阅与中转 API 比价雷达</p>
    <div className="ink-card__meta">priceai.cc →</div>
  </a>
  <a className="ink-card" href="https://oken.ai" target="_blank" rel="noopener noreferrer">
    <div className="ink-card__kicker">买 API 比价</div>
    <div className="ink-card__title">Oken.ai</div>
    <p className="ink-card__desc">官方与中转 API 价格、线路对比</p>
    <div className="ink-card__meta">oken.ai →</div>
  </a>
</div>

### 三种隧道怎么选？

Quick Tunnel 零配置，但每次启动地址都会变。要固定地址，用 Cloudflare Named Tunnel 或 ngrok 开发域名。详见 [启动 Bridge](./bridge/start.md)。

### 启动 Bridge 前为什么要登录、买套餐？

登录把授权绑到 GitHub / Gitee 账号；购买套餐后，当前设备才有权开隧道。激活码只给 10 人以上公司团购，不对个人开放。详见 [登录账号](./bridge/account.md) 和 [购买套餐](./bridge/license.md)。

### Bridge 能连哪些网站？

目前已知、已经测试过、产品里带了按钮的入口有 ChatGPT、Arena、WorkBuddy、Trae、Qwen、Manus、Shunova，**不是全部**。点按钮在内置浏览器打开，也可以在 **快速打开** 里自己加站点。支持创建自定义插件 / 连接器 / MCP 的按官方方式填；不支持、但支持 Agent、能用终端且能访问外网的，每次新开对话发一条带 MCP 链接的提示词即可。不要把地址发到公开场合。名单和接法见 [连接网站](./bridge/clients.md)。

## 高级玩法

### Bridge 能用我在 Chat 模式配的 MCP 吗？

不能。MCP 仅在 Chat 模式支持，Bridge 无法调用 Chat 模式配置的 MCP。详见 [MCP](./advanced/mcp.md)。

### Skills 能给 Bridge 用吗？路径必须在当前项目里吗？

能用。Skills 本质是文件夹，把路径给 AI 就会用；不局限当前工作区。以前用别的 Agent 留下的 Skills 可无缝衔接。详见 [Skills](./advanced/skills.md)。

### 有外置记忆吗？

没有，也不做。项目即记忆；外置记忆有损，目的是省 Token。ShunCode 用户 Token 自由，不需要。详见 [记忆](./advanced/memory.md)。

## 文档

### 这份文档怎么本地预览？

在仓库根目录执行：

```bash
cd docs-site
npm install
npm start
```

浏览器打开 `http://localhost:3000`，会跳到产品简介。左侧按 Chat 模式 / Bridge 模式 / 高级玩法分类，右侧是本页大纲。
