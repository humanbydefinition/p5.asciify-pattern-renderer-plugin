**p5.asciify-pattern-renderer-plugin v1.0.0**

***

# p5.asciify-pattern-renderer-plugin v1.0.0

## Classes

| Class | Description |
| ------ | ------ |
| [P5AsciifyConicalGradient](classes/P5AsciifyConicalGradient.md) | A conical gradient that moves in a conical pattern across the screen. |
| [P5AsciifyGradient](classes/P5AsciifyGradient.md) | Represents a gradient that can be applied to the gradient ascii renderer. |
| [P5AsciifyGradientManager](classes/P5AsciifyGradientManager.md) | Manages the creation and removal of gradients for the gradient ascii renderer. |
| [P5AsciifyLinearGradient](classes/P5AsciifyLinearGradient.md) | A linear gradient that moves in a linear pattern across the screen. |
| [P5AsciifyPatternRenderer](classes/P5AsciifyPatternRenderer.md) | An ASCII renderer that applies all defined ASCII gradients/patterns to the input framebuffer. |
| [P5AsciifyRadialGradient](classes/P5AsciifyRadialGradient.md) | A radial gradient that moves in a radial pattern across the screen. |
| [P5AsciifySpiralGradient](classes/P5AsciifySpiralGradient.md) | A spiral gradient that moves in a spiral pattern across the screen. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ConicalGradientParams](type-aliases/ConicalGradientParams.md) | The available gradient options for the `"conical"` gradient type. |
| [GradientConstructorMap](type-aliases/GradientConstructorMap.md) | Gradient constructor type. |
| [GradientParams](type-aliases/GradientParams.md) | The available gradient parameters. |
| [GradientType](type-aliases/GradientType.md) | The available gradient types. |
| [LinearGradientParams](type-aliases/LinearGradientParams.md) | The available gradient options for the `"linear"` gradient type. |
| [RadialGradientParams](type-aliases/RadialGradientParams.md) | The available gradient options for the `"radial"` gradient type. |
| [SpiralGradientParams](type-aliases/SpiralGradientParams.md) | The available gradient options for the `"spiral"` gradient type. |

## Variables

| Variable | Description |
| ------ | ------ |
| [PatternRendererPlugin](variables/PatternRendererPlugin.md) | `p5.asciify` plugin that provides an accurate ASCII renderer. This renderer attempts to pick the most fitting ASCII representation to accurately represent the input sketch using the available ASCII characters. |
