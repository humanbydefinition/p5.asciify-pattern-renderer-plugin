[**p5.asciify-pattern-renderer-plugin v1.0.0**](../README.md)

***

[p5.asciify-pattern-renderer-plugin](../README.md) / P5AsciifyPatternRenderer

# Class: P5AsciifyPatternRenderer

Defined in: [renderer/PatternAsciiRenderer.ts:54](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/PatternAsciiRenderer.ts#L54)

An ASCII renderer that applies all defined ASCII gradients/patterns to the input framebuffer.

## Extends

- `P5AsciifyAbstractFeatureRenderer2D`\<`FeatureAsciiRendererOptions`, `this`\>

## Constructors

### Constructor

> **new P5AsciifyPatternRenderer**(`p5Instance`, `captureFramebuffer`, `grid`, `fontManager`, `options`): `P5AsciifyPatternRenderer`

Defined in: [renderer/PatternAsciiRenderer.ts:65](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/PatternAsciiRenderer.ts#L65)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `p5Instance` | `__module` | `undefined` |
| `captureFramebuffer` | `Framebuffer` | `undefined` |
| `grid` | `P5AsciifyGrid` | `undefined` |
| `fontManager` | `P5AsciifyFontManager` | `undefined` |
| `options` | `FeatureAsciiRendererOptions` | `GRADIENT_DEFAULT_OPTIONS` |

#### Returns

`P5AsciifyPatternRenderer`

#### Overrides

`getBaseClass().constructor`

## Methods

### add()

> **add**(`gradientName`, `brightnessStart`, `brightnessEnd`, `characters`, `options`): [`P5AsciifyGradient`](P5AsciifyGradient.md)

Defined in: [renderer/PatternAsciiRenderer.ts:117](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/PatternAsciiRenderer.ts#L117)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gradientName` | [`GradientType`](../type-aliases/GradientType.md) |
| `brightnessStart` | `number` |
| `brightnessEnd` | `number` |
| `characters` | `string` |
| `options` | `any` |

#### Returns

[`P5AsciifyGradient`](P5AsciifyGradient.md)

***

### remove()

> **remove**(`gradientInstance`): `void`

Defined in: [renderer/PatternAsciiRenderer.ts:125](https://github.com/humanbydefinition/p5.asciify-pattern-renderer-plugin/blob/78587b3ed9c9440a400d453e44e7d55e63d8c70c/src/plugin/renderer/PatternAsciiRenderer.ts#L125)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gradientInstance` | [`P5AsciifyGradient`](P5AsciifyGradient.md) |

#### Returns

`void`
