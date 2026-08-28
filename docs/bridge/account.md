---
sidebar_position: 2
sidebar_label: 登录账号
title: 登录账号
description: 用 GitHub 或 Gitee 登录，绑定当前设备的安装 ID
---

# 登录账号

Bridge 授权挂在账号上。本地 Chat 模式（Ask / Plan / Code）不要求登录；要 **启动 Bridge**，必须先登录。

入口在 ShunCode 侧栏 **Bridge → 账号与授权**。GitHub 和 Gitee 二选一即可。

## 用 GitHub 登录

1. 打开侧栏 **Bridge**。
2. 点 **使用 GitHub 登录**。
3. 在浏览器里完成 GitHub 授权（只需 `read:user`，用来识别账号）。
4. 回到 ShunCode，**账号与授权** 应显示已登录的 GitHub 用户名。

若状态没更新，点 **刷新登录状态**。

## 用 Gitee 登录

国内访问 GitHub 不便时，用 Gitee：

1. 打开侧栏 **Bridge**。
2. 点 **使用 Gitee 登录**。
3. 浏览器会打开 Gitee 授权页；请在 **5 分钟内** 完成授权，并保持回调页打开，直到提示可以返回 ShunCode。
4. 若提示授权已取消或回调无效，回到 ShunCode 重新点登录。

:::info[等待授权]

点登录后若出现「正在等待 Gitee 授权…」，不要关掉浏览器里的授权页。完成或取消后再回 ShunCode。同一时间不要重复点登录。

:::

## 安装 ID

登录后会看到 **当前安装 ID**。这是本机这次安装的设备标识，用来在授权后台识别当前设备。

- 点 **复制安装 ID**，需要核对设备时发给对方。
- 换电脑或重装会得到新的安装 ID，授权要重新落到这台设备上。

## 退出登录

点 **退出登录** 前请确认：

- 正在运行的 Bridge **会停止**。
- 已购买的授权仍留在该 GitHub / Gitee 账号下，不会因为退出而清掉套餐。

下一步：[购买套餐](./license.md)，然后 [启动 Bridge](./start.md)。
