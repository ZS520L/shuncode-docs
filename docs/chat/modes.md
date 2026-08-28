---
sidebar_position: 3
sidebar_label: Ask / Plan / Code
title: Ask / Plan / Code
description: Chat 模式用 Ask / Plan / Code 锁工具：Ask、Plan 只读，Code 才能改仓库
---

# Ask / Plan / Code

这是 **Chat 模式** 里的三档。选错档时模型不能改文件。

## 三种模式

| 模式 | 能做什么 |
| --- | --- |
| Ask | 只读探查 |
| Plan | 只读出方案；多模型从同一起点博弈，一致后再行动 |
| Code | 允许 `apply_patch` 和终端；应对齐后的那条方案动手 |

## 怎么选

- 先摸清代码、问「这是干什么的」：Ask。
- 要方案、要多模型对齐：Plan。
- 方案已定、开始改仓库：Code。

重要改动请先在 Plan 里走完 [多模型博弈](./multi-model.md)，再切 Code。还没配模型见 [配置模型](./api-key.md)。
