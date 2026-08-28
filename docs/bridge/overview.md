---
sidebar_position: 1
sidebar_label: 概览
title: Bridge 模式
description: 任意能开浏览器、能联网的设备都能连本机项目（工作区），需登录并购买套餐
---

# Bridge 模式

Bridge 把当前工作区的 MCP 工具通过公网隧道交出去。只要设备 **能打开浏览器、能联网**——换一台电脑、换手机、换操作系统都可以连，指挥你这台装着 ShunCode 的机器。读写发生在本机，对端只看到工具返回的片段。

只用本地 Chat 模式的话，不必看这一整节。

:::tip[越来越多网站能当指挥台]

网页端工具调用是趋势。新站点只要支持 Agent、能用终端、能访问外网，用同一条 MCP 就能接到你的本机项目（工作区）。不必坐在跑 ShunCode 的那台电脑前。[连接网站](./clients.md) 列出的是目前已知、已经测试过的入口，**不是全部**。

:::

## 适合谁

<div className="card-grid">
  <div className="ink-card">
    <div className="ink-card__kicker">Plus 用户</div>
    <div className="ink-card__title">Codex 额度不够用</div>
    <p className="ink-card__desc">想用手机或另一台电脑的浏览器接到 ChatGPT，继续改本机项目（工作区）。</p>
  </div>
  <div className="ink-card">
    <div className="ink-card__kicker">不想买 Plus</div>
    <div className="ink-card__title">用免费 Arena</div>
    <p className="ink-card__desc">同样走 Bridge，换设备也能用。</p>
  </div>
  <div className="ink-card">
    <div className="ink-card__kicker">代码留在本机</div>
    <div className="ink-card__title">指挥可以换设备</div>
    <p className="ink-card__desc">任意能开浏览器、能联网的设备都能指挥；读写仍在装着 ShunCode 的机器上。</p>
  </div>
  <div className="ink-card">
    <div className="ink-card__kicker">打辅助</div>
    <div className="ink-card__title">不替代 ChatGPT / Arena</div>
    <p className="ink-card__desc">接受先登录、购买套餐，再开隧道。</p>
  </div>
</div>

:::warning[ChatGPT 封号风险]

Bridge **不是反代官网**。对方支持创建自定义插件 / 连接器 / MCP 的，按官方方式填地址；**官方不支持的，也是在网页上正常对话**，只是第一句带上 MCP 链接，之后一轮一轮聊，不是高并发刷接口。

但在国内，代理、节点、网络波动仍可能触发风控、限制甚至封号。这不是 ShunCode 造成的，也不由我们承担责任。

需要兜底的，可以买低价质保方案——这类坑我们熟，保费压得低（信息差）。货比百家：

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

:::

## 能做什么

- 本机 MCP + Cloudflare / ngrok 隧道。
- 内置浏览器一键打开目前已知、已经测试过的入口（ChatGPT、Arena、WorkBuddy、Trae、Qwen、Manus、Shunova），不是全部；也可以自己加网站。名单和接法见 [连接网站](./clients.md)。
- 地址带随机秘密路径，可重置。
- `set_todos` / `report_progress` 在本地 UI 显示进度。

## 使用顺序

1. [下载安装](../install.md)
2. [登录账号](./account.md)（GitHub 或 Gitee）
3. [购买套餐](./license.md)（个人走支付宝；激活码仅 10 人以上团购）
4. [启动 Bridge](./start.md)（三种隧道里选一种）
5. [连接网站](./clients.md)：支持创建自定义插件 / 连接器 / MCP 的按官方方式填；不支持的就新开对话发带链接的提示词

:::info[先买再开]

没有有效授权、当前设备未授权时，无法启动隧道。不要先去配 Cloudflare / ngrok。

:::
