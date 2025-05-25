import p5 from 'p5';
import { P5AsciifyGrid, P5AsciifyFontManager, renderers, plugins } from 'p5.asciify';
import { P5AsciifyPatternRenderer, GRADIENT_DEFAULT_OPTIONS } from './renderer/PatternAsciiRenderer';

// Declare Window interface augmentation right here
declare global {
  interface Window {
    PatternRendererPlugin: plugins.P5AsciifyRendererPlugin;
  }
}

/**
 * `p5.asciify` plugin that provides an accurate ASCII renderer.
 * This renderer attempts to pick the most fitting ASCII representation
 * to accurately represent the input sketch using the available ASCII characters.
 */
export const PatternRendererPlugin: plugins.P5AsciifyRendererPlugin = {
    id: 'pattern',
    name: 'ASCII Pattern Renderer',
    description: 'An ASCII pattern render that applies a pattern to a given brightness range in the texture that is captured.',
    version: '1.0.0',
    author: 'humanbydefinition',
    
    /**
     * Creates a new instance of the accurate ASCII renderer.
     * @param p The p5 instance.
     * @param captureFramebuffer The framebuffer to apply the ASCII effect to.
     * @param grid The grid to use.
     * @param fontManager The font manager to use.
     * @param options The options to use.
     * @returns The new instance of the accurate ASCII renderer.
     */
    create(
        p: p5,
        captureFramebuffer: p5.Framebuffer,
        grid: P5AsciifyGrid,
        fontManager: P5AsciifyFontManager,
        options?: renderers.AsciiRendererOptions
    ): renderers.P5AsciifyRenderer {
        return new P5AsciifyPatternRenderer(
            p,
            captureFramebuffer,
            grid,
            fontManager,
            options || GRADIENT_DEFAULT_OPTIONS
        );
    }
};

if (typeof window !== 'undefined') {
  window.PatternRendererPlugin = PatternRendererPlugin;
}