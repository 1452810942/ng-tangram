# 🐞 Bug 提交

### 问题描述

<!-- ✍️ 简短描述您的问题 
例子：
  用户登录时图形验证码未按预期返回。
-->

### 问题发生环境

<!-- ✍️ 请说明问题发生的环境，以及其他有帮助的信息，比如问题发生时使用的浏览器品牌和版本信息，网络环境等 
例子：
  产品环境（https://cloud-api.codelet.net）
  浏览器：Google Chrome 78.0.xxx
-->

### 预期结果（需求）

<!-- ✍️ 描述您所预期的结果 
例子：
  以下情况下，用户再次登录时需要识别图形验证码：

  - 同一 IP 地址、同一账号**连续**输错登录密码达三次时（计数器的 KEY 为 `AUTHENTICATE-FAILED-TIMES:IP地址:登录账号`，TTL 为 60 秒）；
  - 同一 IP 地址、任意账号输错登录密码达三十次时（计数器的 KEY 为 `AUTHENTICATE-FAILED-TIMES:IP地址`，TTL 为 60 秒）；
-->

### 实际结果（现象）

<!-- ✍️ 描述您遇到的实际结果，可以是文字，图片 
例子：
  始终要求识别图形验证码。
-->

### 重现方法

<!-- ✍️ 可以给出您遇到问题时所使用的测试数据等信息来更快的帮助处理者找到问题发生的原因。 

例如：
- 请求方法：GET
- 请求路径：...
- 请求数据：
  ```json
  {
    "username": "someone",
    "password": "P@s5w0rd"
  }
  ```
- 响应数据：
  ```json
  {
    "success": false,
    "error": []
  }
  ```
- 响应错误：
  ```text
  错误日志
  ```
-->


/label ~bug
/cc @项目经理
/assign @开发者