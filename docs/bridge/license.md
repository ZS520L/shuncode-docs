---
sidebar_position: 3
sidebar_label: 购买套餐
title: 购买套餐
description: 购买 Bridge 套餐，确认当前设备授权有效；激活码仅用于 10 人以上公司团购
---

# 购买套餐

启动 Bridge 前，当前账号必须有有效授权，并且 **当前设备已授权**。请先完成 [登录账号](./account.md)。

套餐往划算了做，有问题能问到人。主打交个朋友，不是再卖你一套编辑器。

## 质保

国内用 ChatGPT 时，网络环境可能导致账号被限制或封号。Bridge 不是反代：官方支持创建自定义插件 / 连接器 / MCP 的，按官方方式填；不支持的也是网页上正常对话，只是第一句带链接，不是高并发。封号若来自网络和风控，**不是 ShunCode 的责任**。

另外提供低价质保方案，吃的是信息差，比自己硬抗划算。货比百家：

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

入口在侧栏 **Bridge → 账号与授权**。未开通时显示「Bridge 尚未开通」；有效时会显示到期时间或 **永久顺**。

## 个人购买

1. 在 **套餐** 里选服务端下发的方案（名称、价格、时长由服务端提供）。
2. **支付方式** 选择 **支付宝**。
3. 点 **购买**（已开通过期后，同一位置是 **续费**）。
4. 浏览器打开结算页，完成支付。回到 ShunCode 后，页面会自动检查订单。
5. 若没有自动变成「支付已确认」，点 **检查支付状态**。

:::info[结算在浏览器里]

套餐列表来自授权服务。加载失败时先点 **刷新授权**，不要连续重复下单。

:::

支付过程中的状态：

| 状态 | 含义 |
| --- | --- |
| 等待支付 | 订单已创建，请在浏览器完成付款 |
| 已支付 | 正在刷新 Bridge 授权 |
| 已过期 / 已取消 / 支付失败 | 重新选择套餐下单 |

## 公司团购（激活码）

兑换激活码 **暂不对普通用户开放**。个人请直接走上方支付宝购买。

激活码只给 **10 人以上的公司团购** 用，方便对公开通、统一发码。界面里若仍能看到激活码输入框，那是团购通道，不是个人自助入口。

:::info[个人用户]

未参加团购时，不要在激活码框里试填。开通方式就是购买套餐。

:::

## 确认当前设备

授权挂在账号上，Bridge 还要求 **当前安装** 可用：

- **账号与授权** 应类似「某账号 · 授权有效至 … · 当前设备已授权」。
- **永久顺** 表示长期授权；否则会显示到期日。
- 换机后先复制新的 [安装 ID](./account.md)，再点 **刷新授权**。仍未授权就重新购买，或在管理后台绑定该 ID。

## 刷新与异常

- **刷新授权**：向服务器重新拉取许可，不改变登录态。
- 「Bridge 授权服务不可用」：检查网络或代理后重试。
- 提示当前构建未包含授权信任锚：不是账号问题，请换官方安装包。

开通后去 [启动 Bridge](./start.md) 选隧道并启动。
