import p5 from 'p5';
import { P5AsciifyGrid } from 'p5.asciify';
import { renderers } from 'p5.asciify';
import { P5AsciifyFontManager } from 'p5.asciify';
import { P5AsciifyGradient } from './gradients/Gradient';
import { GradientType } from './gradients/types';
/** Default configuration options for `"gradient"` ASCII renderer */
export declare const GRADIENT_DEFAULT_OPTIONS: {
    /** Enable/disable the renderer */
    enabled: boolean;
    /** Color of the ASCII characters. Only used when `characterColorMode` is set to `fixed` */
    characterColor: string;
    /** Character color mode */
    characterColorMode: string;
    /** Cell background color. Only used when `characterColorMode` is set to `fixed` */
    backgroundColor: string;
    /** Background color mode */
    backgroundColorMode: string;
    /** Swap the cells ASCII character colors with it's cell background colors */
    invertMode: boolean;
    /** Rotation angle of all characters in the grid in degrees */
    rotationAngle: number;
};
declare const P5AsciifyPatternRenderer_base: typeof renderers.renderer2d.feature.P5AsciifyAbstractFeatureRenderer2D;
/**
 * An ASCII renderer that applies all defined ASCII gradients/patterns to the input framebuffer.
 */
export declare class P5AsciifyPatternRenderer extends P5AsciifyPatternRenderer_base {
    private grayscaleShader;
    private colorSampleShader;
    private grayscaleFramebuffer;
    private inversionShader;
    private rotationShader;
    private asciiCharacterShader;
    private prevAsciiGradientFramebuffer;
    private nextAsciiGradientFramebuffer;
    private gradientManager;
    constructor(p5Instance: p5, captureFramebuffer: p5.Framebuffer, grid: P5AsciifyGrid, fontManager: P5AsciifyFontManager, options?: renderers.FeatureAsciiRendererOptions);
    resizeFramebuffers(): void;
    resetShaders(): void;
    add(gradientName: GradientType, brightnessStart: number, brightnessEnd: number, characters: string, options?: any): P5AsciifyGradient;
    remove(gradientInstance: P5AsciifyGradient): void;
    render(): void;
}
export {};
