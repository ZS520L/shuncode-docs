---
sidebar_position: 1
sidebar_label: 概览
title: Chat 模式
description: 用惯 API 的人走这里：自己填 Key，免费模型多，多模型博弈是卖点
---

# Chat 模式

Chat 模式是写在编辑器里的本地对话。模型跑在本机 `agent-host`，不经过 Bridge 隧道，**不用登录、不用买 Bridge 套餐**。

## 适合谁

- 用惯了 API：自己有 Key，或常用免费模型、交流群里分享的接口。
- 想在熟悉的编辑器里对话、改项目，而不是另开网页聊天。
- 希望 Ask 只读、Code 才能写，避免模型在错误模式下改文件。
- 重要任务走 [多模型博弈](./multi-model.md)：几个模型从同一起点作答，**意见一致再行动**。这是 Chat 模式的卖点。

## 能做什么

| 场景 | Chat 模式能做的事 |
| --- | --- |
| 读代码 | `find_files` / `search_files` / `lsp` / `read_files` |
| 改代码 | Code 模式下 `apply_patch`，带 `sha256` 防脏写 |
| 跑命令 | 独立 PTY 执行构建与测试 |
| 对齐方案 | Plan 里多模型独立作答，意见一致再进入 Code |

工具轨迹以卡片出现在对话里。

## 使用顺序

1. [下载安装](../install.md)
2. [配置模型](./api-key.md)
3. 按 [Ask / Plan / Code](./modes.md) 选模式
4. 重要改动走 [多模型博弈](./multi-model.md)，再切 Code

:::tip[和 Bridge 的区别]

Chat 模式是你在本机对话框里用。Bridge 是让手机或另一台电脑的浏览器连过来指挥同一套工具。同一份 ShunCode 里两条路都在，按任务选。

:::
