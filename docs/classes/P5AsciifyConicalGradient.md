[**p5.asciify-pattern-renderer-plugin v1.0.0**](../README.md)

***

[p5.asciify-pattern-renderer-plugin](../README.md) / P5AsciifyConicalGradient

# Class: P5AsciifyConicalGradient

Defined in: [renderer/gradients/conical/Conical.ts:9](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/conical/Conical.ts#L9)

A conical gradient that moves in a conical pattern across the screen.

## Extends

- [`P5AsciifyGradient`](P5AsciifyGradient.md)

## Constructors

### Constructor

> **new P5AsciifyConicalGradient**(`p`, `_fontManager`, `_shader`, `_characters`, `brightnessStart`, `brightnessEnd`, `params`): `P5AsciifyConicalGradient`

Defined in: [renderer/gradients/conical/Conical.ts:14](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/conical/Conical.ts#L14)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `p` | `__module` |
| `_fontManager` | `P5AsciifyFontManager` |
| `_shader` | `Shader` |
| `_characters` | `string` |
| `brightnessStart` | `number` |
| `brightnessEnd` | `number` |
| `params` | [`ConicalGradientParams`](../type-aliases/ConicalGradientParams.md) |

#### Returns

`P5AsciifyConicalGradient`

#### Overrides

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`constructor`](P5AsciifyGradient.md#constructor)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="centerx"></a> `centerX` | `public` | `number` | [renderer/gradients/conical/Conical.ts:10](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/conical/Conical.ts#L10) |
| <a id="centery"></a> `centerY` | `public` | `number` | [renderer/gradients/conical/Conical.ts:11](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/conical/Conical.ts#L11) |
| <a id="speed"></a> `speed` | `public` | `number` | [renderer/gradients/conical/Conical.ts:12](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/conical/Conical.ts#L12) |

## Accessors

### palette

#### Get Signature

> **get** **palette**(): `P5AsciifyColorPalette`

Defined in: [renderer/gradients/Gradient.ts:145](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L145)

##### Returns

`P5AsciifyColorPalette`

#### Inherited from

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`palette`](P5AsciifyGradient.md#palette)

***

### shader

#### Get Signature

> **get** **shader**(): `Shader`

Defined in: [renderer/gradients/Gradient.ts:144](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L144)

##### Returns

`Shader`

#### Inherited from

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`shader`](P5AsciifyGradient.md#shader)

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

#### Inherited from

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`brightnessEnd`](P5AsciifyGradient.md#brightnessend)

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

#### Inherited from

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`brightnessRange`](P5AsciifyGradient.md#brightnessrange)

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

#### Inherited from

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`brightnessStart`](P5AsciifyGradient.md#brightnessstart)

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

#### Inherited from

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`characters`](P5AsciifyGradient.md#characters)

***

### disable()

> **disable**(): `void`

Defined in: [renderer/gradients/Gradient.ts:126](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L126)

Disables the gradient.

#### Returns

`void`

#### Inherited from

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`disable`](P5AsciifyGradient.md#disable)

***

### enable()

> **enable**(): `void`

Defined in: [renderer/gradients/Gradient.ts:119](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L119)

Enables the gradient.

#### Returns

`void`

#### Inherited from

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`enable`](P5AsciifyGradient.md#enable)

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

#### Inherited from

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`enabled`](P5AsciifyGradient.md#enabled)

***

### isEnabled()

> **isEnabled**(): `boolean`

Defined in: [renderer/gradients/Gradient.ts:139](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L139)

#### Returns

`boolean`

#### Inherited from

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`isEnabled`](P5AsciifyGradient.md#isenabled)

***

### setUniforms()

> **setUniforms**(`framebuffer`, `referenceFramebuffer`): `void`

Defined in: [renderer/gradients/conical/Conical.ts:29](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/conical/Conical.ts#L29)

Sets the uniforms for the gradient shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `framebuffer` | `Framebuffer` | The framebuffer to use. |
| `referenceFramebuffer` | `Framebuffer` | The reference framebuffer, which is used so two gradients cannot write onto the same pixels. |

#### Returns

`void`

#### Overrides

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`setUniforms`](P5AsciifyGradient.md#setuniforms)

***

### toggle()

> **toggle**(): `void`

Defined in: [renderer/gradients/Gradient.ts:133](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/Gradient.ts#L133)

Toggles the enabled state of the gradient.

#### Returns

`void`

#### Inherited from

[`P5AsciifyGradient`](P5AsciifyGradient.md).[`toggle`](P5AsciifyGradient.md#toggle)
