---
sidebar_position: 3
sidebar_label: Skills
title: Skills
description: Skills 本质是文件夹；Bridge 支持，路径不局限当前工作区，别的 Agent 留下的可无缝衔接
---

# Skills

:::tip[核心]

**Skills 本质上是文件夹。** 把文件夹路径给 AI，AI 就会使用。

**Bridge 模式支持 Skills。** 路径不局限在当前工作区。以前用别的 Agent 工具留下来的 Skills，可以直接无缝衔接。

:::

## 它是什么

Skill 不是插件市场里的「安装包」，就是一个目录：里面是说明书、约定、有时还有脚本。模型读到这个目录，就按里面的办法干活，不必每次从零教。

所以它和 MCP 不一样。MCP 是再接一条工具通道，要本机 Agent 去连；Skill 是 **可读的文件夹**。只要对面能读文件、能按说明执行，就能用。

## 怎么用

对话里把路径告诉模型即可，例如「按 `D:\skills\release` 这份 Skill 发版」。也可以写进项目规则，让它每次都知道去哪找。

不必先把 Skill 拷进当前项目（工作区）。本机任意位置都行——别的盘、共享目录、你给 Cursor / Claude / Codex 用过的那份，指过去就能用。

## 为什么 Bridge 也支持

Bridge 对面的 Agent 本来就能通过工具读本机文件、跑终端。Skill 既然是文件夹，它就能打开、就能照做。

这就是无缝衔接的原因：Skill 不绑死在某一个产品的配置里，绑在磁盘上。换工具、换 Chat / Bridge，路径还在，能力还在。

:::info[和 MCP 的分工]

要外接在线服务、专用协议，用 [MCP](./mcp.md)（只在 Chat 模式）。要把一套可复用的做法固化下来、两边都能用，用 Skills。

:::

