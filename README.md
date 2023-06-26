# push-attachment

Tiny library for pushing attachments to browser

# How to use

```bash
npm i push-attachement
```

```javascript
import pushAttachment from "./push-attachment.js"

pushAttachment("Hello!", {attachmentName: "hello.doc", contentType: "text/html;charset=utf-8"})
```

See example at [dist/index.html](./dist/index.html)

## Arguments:
```typescript
declare const pushAttachment: (data: string /* like "Hello!"*/, options: PushAttachmentOptions /* See Below*/) => void;

interface PushAttachmentOptions {
    contentType: string  // like  "text/html;charset=utf-8"
    attachmentName: string  // like my.doc
}
```
