import { brotliDecode } from './third_party/decode.js'

export function decode(bytes: Uint8Array, options?: {
  customDictionary: Int8Array | null
}): Uint8Array {
  const arr = brotliDecode(new Int8Array(bytes), options)

  return new Uint8Array(arr)
}
