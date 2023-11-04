## brotli

> [!NOTE]  
> This library uses [google/brotli's](https://github.com/google/brotli) JavaScript implementation under the hood.

### Setup

#### Deno

```ts
import { decode } from 'https://den.ooo/brotli'
```

#### Node.js

```bash
npm i @boywithkeyboard/brotli
```

```ts
import { decode } from '@boywithkeyboard/brotli'
```

### Usage

```ts
const decodedBuffer = decode(encodedBuffer)
const decodedText = new TextDecoder().decode(buffer)
```
