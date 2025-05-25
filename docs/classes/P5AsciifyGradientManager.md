[**p5.asciify-pattern-renderer-plugin v1.0.0**](../README.md)

***

[p5.asciify-pattern-renderer-plugin](../README.md) / P5AsciifyGradientManager

# Class: P5AsciifyGradientManager

Defined in: [renderer/gradients/GradientManager.ts:20](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/GradientManager.ts#L20)

Manages the creation and removal of gradients for the gradient ascii renderer.

## Constructors

### Constructor

> **new P5AsciifyGradientManager**(`_p`, `_fontManager`): `P5AsciifyGradientManager`

Defined in: [renderer/gradients/GradientManager.ts:56](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/GradientManager.ts#L56)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `_p` | `__module` | The p5 instance. |
| `_fontManager` | `P5AsciifyFontManager` | The font texture atlas instance. |

#### Returns

`P5AsciifyGradientManager`

## Accessors

### gradientConstructors

#### Get Signature

> **get** **gradientConstructors**(): [`GradientConstructorMap`](../type-aliases/GradientConstructorMap.md)

Defined in: [renderer/gradients/GradientManager.ts:158](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/GradientManager.ts#L158)

##### Returns

[`GradientConstructorMap`](../type-aliases/GradientConstructorMap.md)

***

### gradientParams

#### Get Signature

> **get** **gradientParams**(): [`GradientParams`](../type-aliases/GradientParams.md)

Defined in: [renderer/gradients/GradientManager.ts:156](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/GradientManager.ts#L156)

##### Returns

[`GradientParams`](../type-aliases/GradientParams.md)

***

### gradients

#### Get Signature

> **get** **gradients**(): [`P5AsciifyGradient`](P5AsciifyGradient.md)[]

Defined in: [renderer/gradients/GradientManager.ts:157](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/GradientManager.ts#L157)

##### Returns

[`P5AsciifyGradient`](P5AsciifyGradient.md)[]

## Methods

### add()

> **add**(`gradientName`, `characters`, `brightnessStart`, `brightnessEnd`, `options`): [`P5AsciifyGradient`](P5AsciifyGradient.md)

Defined in: [renderer/gradients/GradientManager.ts:79](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/GradientManager.ts#L79)

Add a gradient to the gradient manager.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gradientName` | [`GradientType`](../type-aliases/GradientType.md) | The name of the gradient to add. |
| `characters` | `string` | The characters to use for the gradient. |
| `brightnessStart` | `number` | The start brightness of the gradient. |
| `brightnessEnd` | `number` | The end brightness of the gradient. |
| `options` | `Partial`\<[`ConicalGradientParams`](../type-aliases/ConicalGradientParams.md) \| [`LinearGradientParams`](../type-aliases/LinearGradientParams.md) \| [`RadialGradientParams`](../type-aliases/RadialGradientParams.md) \| [`SpiralGradientParams`](../type-aliases/SpiralGradientParams.md)\> | The parameters for the gradient. |

#### Returns

[`P5AsciifyGradient`](P5AsciifyGradient.md)

The gradient instance.

***

### remove()

> **remove**(`gradient`): `void`

Defined in: [renderer/gradients/GradientManager.ts:148](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/gradients/GradientManager.ts#L148)

Remove a gradient from the gradient manager.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gradient` | [`P5AsciifyGradient`](P5AsciifyGradient.md) | The gradient to remove. |

#### Returns

`void`
