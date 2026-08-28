---
sidebar_position: 2
sidebar_label: MCP
title: MCP
description: MCP 仅在 Chat 模式支持；Bridge 无法调用 Chat 模式配置的 MCP
---

# MCP

:::tip[核心]

**MCP 仅在 Chat 模式支持。Bridge 模式无法调用 Chat 模式配置的 MCP。**

:::

## 它是什么

MCP（Model Context Protocol）是给 Agent **外接工具**的标准插头。你配上某个 MCP 服务，本地模型就能多一批能力：查库、读设计稿、连内部系统，而不必把这些能力写进 ShunCode 本体。

原理很简单：模型本身不会「变聪明」，是工具变多了。MCP 把「再接一个工具」做成约定，Chat 模式的 `agent-host` 在本机跑循环，才能去连你配的那些服务。

## 为什么 Bridge 用不了

两条路里的「MCP」方向是反的，不要混：

| 对比 | Chat 模式 | Bridge 模式 |
| --- | --- | --- |
| 谁当 Agent | 本机 Chat 模式里的模型 | 对面网站上的 Agent（ChatGPT、Arena 等） |
| MCP 往哪走 | **你去连别人的 MCP**（外接工具） | **你把自己变成 MCP**，让对面来指挥本机项目（工作区） |
| Chat 里配的 MCP | 可以用 | **不能用** |

Bridge 交出去的是本机项目的读写和终端。对面 Agent 用的是它自己那套工具生态，不会跑你在 Chat 模式里配的 MCP 列表。

所以：要外接 MCP，请走 [Chat 模式](../chat/overview.md)，配好模型再接入。要用手机或另一台电脑指挥本机，走 [Bridge 模式](../bridge/overview.md)，不要指望 Chat 里那套 MCP 跟着过去。

:::warning[不要混用]

Bridge 的连接地址也叫 MCP，那是 **ShunCode 对外提供的工具入口**，不是 Chat 模式里你配置的那些 MCP。两边不能互相调用。

:::

