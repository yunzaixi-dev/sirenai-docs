# 认证接口文档

本文档详细说明了认证系统的所有API接口。

## 基础信息

- 基础URL: `https://n1-api.sirenai.org/v1`
- 所有请求和响应均使用JSON格式
- 所有时间戳使用ISO 8601格式
- 所有请求都需要设置 `Content-Type: application/json` 请求头

## API 接口列表

### 1. 用户注册
- **接口**: `/auth/register`
- **方法**: POST
- **请求体**:
  ```json
  {
    "email": "string",
    "password": "string",
    "verificationCode": "string",
    "recaptchaToken": "string"
  }
  ```
- **响应**:
  ```json
  {
    "success": true,
    "message": "success",
    "userId": "string"
  }
  ```

### 2. 邮箱验证码
- **接口**: `/auth/email/verify`
- **方法**: POST
- **请求体**:
  ```json
  {
    "email": "string",
    "type": "string" // "register" 或 "reset-password"
  }
  ```
- **响应**:
  ```json
  {
    "success": true,
    "message": "success"
  }
  ```

### 3. 用户登录
- **接口**: `/auth/login`
- **方法**: POST
- **请求体**:
  ```json
  {
    "email": "string",
    "password": "string",
    "recaptchaToken": "string"
  }
  ```
- **响应**:
  ```json
  {
    "success": true,
    "token": "string",
    "user": {
      "id": "string",
      "email": "string",
      "preferences": {
        "theme": "light|dark",
        "language": "zh|en"
      }
    }
  }
  ```

### 4. 密码重置请求
- **接口**: `/auth/password/reset-request`
- **方法**: POST
- **请求体**:
  ```json
  {
    "email": "string",
    "verificationCode": "string",
    "recaptchaToken": "string"
  }
  ```
- **响应**:
  ```json
  {
    "success": true,
    "message": "密码重置链接已发送"
  }
  ```

### 5. 密码重置
- **接口**: `/auth/password/reset`
- **方法**: POST
- **请求体**:
  ```json
  {
    "token": "string",
    "newPassword": "string"
  }
  ```
- **响应**:
  ```json
  {
    "success": true,
    "message": "密码重置成功"
  }
  ```

### 6. 用户偏好设置
- **接口**: `/auth/preferences`
- **方法**: PUT
- **请求头**: Authorization: Bearer {token}
- **请求体**:
  ```json
  {
    "theme": "light|dark",
    "language": "zh|en"
  }
  ```
- **响应**:
  ```json
  {
    "success": true,
    "preferences": {
      "theme": "light|dark",
      "language": "zh|en"
    }
  }
  ```

## 安全说明

### 请求频率限制
- 登录接口：每IP每分钟最多5次尝试
- 邮箱验证码：每邮箱每小时最多3次请求
- 密码重置：每账户每天最多3次尝试
- 注册接口：每IP每天最多创建3个账户
- 其他接口：每IP每分钟最多60次请求
- 超出限制将返回 429 (Too Many Requests) 状态码

### 安全措施
- 注册、登录和密码重置需要提供reCAPTCHA令牌防止机器人攻击
- 邮箱验证码10分钟内有效
- 密码要求：
  - 最少8个字符
  - 至少包含一个大写字母
  - 至少包含一个小写字母
  - 至少包含一个数字
  - 至少包含一个特殊字符
- 认证令牌(JWT)有效期为24小时

## 状态码说明
- 200: 请求成功
- 400: 请求参数错误
- 401: 未认证或认证失败
- 403: 权限不足
- 404: 资源不存在
- 429: 请求频率超限
- 500: 服务器内部错误

## 错误响应格式
所有接口在发生错误时会返回统一的错误响应格式：
```json
{
  "success": false,
  "error": {
    "code": "string",
    "message": "string"
  }
}
```
