---
sidebar_position: 2
sidebar_label: 配置模型
title: 配置模型
description: 为本地 Chat 模式填写模型地址和 API Key
---

# 配置模型

本地 Chat 模式要先有可用的模型。这一步属于 **Chat 模式**，和 Bridge 登录、买套餐无关。

## 填写

在 **Agent Customizations** 里填写 OpenAI 兼容的 `baseUrl` 和 API Key，或登录 Codex 账号。

## 说明

- 本地 Chat 模式走独立进程 `agent-host`，不进 VS Code 内核。
- 协议支持 Chat Completions、Responses、Anthropic、Codex。

配好后去 [Ask / Plan / Code](./modes.md) 选模式。还没安装的先看 [下载安装](../install.md)。
