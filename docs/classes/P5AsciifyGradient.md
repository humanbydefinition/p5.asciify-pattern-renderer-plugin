[**p5.asciify-pattern-renderer-plugin v1.0.0**](../README.md)

***

[p5.asciify-pattern-renderer-plugin](../README.md) / P5AsciifyGradient

# Class: `abstract` P5AsciifyGradient

Defined in: [renderer/gradients/Gradient.ts:7](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L7)

Represents a gradient that can be applied to the gradient ascii renderer.

## Extended by

- [`P5AsciifyConicalGradient`](P5AsciifyConicalGradient.md)
- [`P5AsciifyLinearGradient`](P5AsciifyLinearGradient.md)
- [`P5AsciifyRadialGradient`](P5AsciifyRadialGradient.md)
- [`P5AsciifySpiralGradient`](P5AsciifySpiralGradient.md)

## Constructors

### Constructor

> **new P5AsciifyGradient**(`p`, `_fontManager`, `_shader`, `_characters`, `brightnessStart`, `brightnessEnd`): `P5AsciifyGradient`

Defined in: [renderer/gradients/Gradient.ts:21](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L21)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p` | `__module` | The p5 instance. |
| `_fontManager` | `P5AsciifyFontManager` | The font texture atlas instance. |
| `_shader` | `Shader` | The gradient shader to use. |
| `_characters` | `string` | The characters to use for the gradient. |
| `brightnessStart` | `number` | - |
| `brightnessEnd` | `number` | - |

#### Returns

`P5AsciifyGradient`

## Accessors

### palette

#### Get Signature

> **get** **palette**(): `P5AsciifyColorPalette`

Defined in: [renderer/gradients/Gradient.ts:145](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L145)

##### Returns

`P5AsciifyColorPalette`

***

### shader

#### Get Signature

> **get** **shader**(): `Shader`

Defined in: [renderer/gradients/Gradient.ts:144](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L144)

##### Returns

`Shader`

## Methods

### brightnessEnd()

> **brightnessEnd**(`value`): `void`

Defined in: [renderer/gradients/Gradient.ts:78](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L78)

Sets the end brightness value.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The brightness value to set. |

#### Returns

`void`

#### Throws

P5AsciifyError If the value is not a number or is not within the range [0, 255].

***

### brightnessRange()

> **brightnessRange**(`start`, `end`): `void`

Defined in: [renderer/gradients/Gradient.ts:89](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L89)

Sets the brightness range.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start` | `number` | The start brightness value. |
| `end` | `number` | The end brightness value. |

#### Returns

`void`

#### Throws

P5AsciifyError If the start or end value is not a number or is not within the range [0, 255].

***

### brightnessStart()

> **brightnessStart**(`value`): `void`

Defined in: [renderer/gradients/Gradient.ts:68](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L68)

Sets the start brightness value.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The brightness value to set. |

#### Returns

`void`

#### Throws

P5AsciifyError If the value is not a number or is not within the range [0, 255].

***

### characters()

> **characters**(`value`): `void`

Defined in: [renderer/gradients/Gradient.ts:99](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L99)

Sets the characters to use for the gradient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The characters to use. |

#### Returns

`void`

#### Throws

P5AsciifyError If the string does contain characters that are not available in the font texture atlas.

***

### disable()

> **disable**(): `void`

Defined in: [renderer/gradients/Gradient.ts:126](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L126)

Disables the gradient.

#### Returns

`void`

***

### enable()

> **enable**(): `void`

Defined in: [renderer/gradients/Gradient.ts:119](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L119)

Enables the gradient.

#### Returns

`void`

***

### enabled()

> **enabled**(`value`): `void`

Defined in: [renderer/gradients/Gradient.ts:112](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L112)

Enables or disables the gradient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `boolean` | Whether to enable or disable the gradient. |

#### Returns

`void`

***

### isEnabled()

> **isEnabled**(): `boolean`

Defined in: [renderer/gradients/Gradient.ts:139](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L139)

#### Returns

`boolean`

***

### setUniforms()

> **setUniforms**(`framebuffer`, `referenceFramebuffer`): `void`

Defined in: [renderer/gradients/Gradient.ts:54](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L54)

Sets the uniforms for the gradient shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `framebuffer` | `Framebuffer` | The framebuffer to use. |
| `referenceFramebuffer` | `Framebuffer` | The reference framebuffer, which is used so two gradients cannot write onto the same pixels. |

#### Returns

`void`

***

### toggle()

> **toggle**(): `void`

Defined in: [renderer/gradients/Gradient.ts:133](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L133)

Toggles the enabled state of the gradient.

#### Returns

`void`
