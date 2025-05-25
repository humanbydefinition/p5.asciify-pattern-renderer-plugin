[**p5.asciify-pattern-renderer-plugin v1.0.0**](../../../../README.md)

***

[p5.asciify-pattern-renderer-plugin](../../../../README.md) / [patterns](../README.md) / P5AsciifyGradientManager

# Class: P5AsciifyGradientManager

Defined in: renderer/patterns/PatternManager.ts:20

Manages the creation and removal of gradients for the gradient ascii renderer.

## Constructors

### Constructor

> **new P5AsciifyGradientManager**(`_p`, `_fontManager`): `P5AsciifyPatternManager`

Defined in: renderer/patterns/PatternManager.ts:56

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `_p` | `__module` | The p5 instance. |
| `_fontManager` | `P5AsciifyFontManager` | The font texture atlas instance. |

#### Returns

`P5AsciifyPatternManager`

## Accessors

### gradientConstructors

#### Get Signature

> **get** **gradientConstructors**(): [`GradientConstructorMap`](../type-aliases/GradientConstructorMap.md)

Defined in: renderer/patterns/PatternManager.ts:158

##### Returns

[`GradientConstructorMap`](../type-aliases/GradientConstructorMap.md)

***

### gradientParams

#### Get Signature

> **get** **gradientParams**(): [`GradientParams`](../type-aliases/GradientParams.md)

Defined in: renderer/patterns/PatternManager.ts:156

##### Returns

[`GradientParams`](../type-aliases/GradientParams.md)

***

### gradients

#### Get Signature

> **get** **gradients**(): [`P5AsciifyGradient`](P5AsciifyGradient.md)[]

Defined in: renderer/patterns/PatternManager.ts:157

##### Returns

[`P5AsciifyGradient`](P5AsciifyGradient.md)[]

## Methods

### add()

> **add**(`gradientName`, `characters`, `brightnessStart`, `brightnessEnd`, `options`): [`P5AsciifyGradient`](P5AsciifyGradient.md)

Defined in: renderer/patterns/PatternManager.ts:79

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

Defined in: renderer/patterns/PatternManager.ts:148

Remove a gradient from the gradient manager.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gradient` | [`P5AsciifyGradient`](P5AsciifyGradient.md) | The gradient to remove. |

#### Returns

`void`
