import p5 from 'p5';
import { P5AsciifyGradient } from '../Gradient';
import { P5AsciifyFontManager } from 'p5.asciify';
import { SpiralGradientParams } from '../types';
/**
 * A spiral gradient that moves in a spiral pattern across the screen.
 */
export declare class P5AsciifySpiralGradient extends P5AsciifyGradient {
    protected p: p5;
    protected _fontManager: P5AsciifyFontManager;
    protected _shader: p5.Shader;
    protected _characters: string;
    direction: number;
    centerX: number;
    centerY: number;
    speed: number;
    density: number;
    constructor(p: p5, _fontManager: P5AsciifyFontManager, _shader: p5.Shader, _characters: string, brightnessStart: number, brightnessEnd: number, params: SpiralGradientParams);
    setUniforms(framebuffer: p5.Framebuffer, referenceFramebuffer: p5.Framebuffer): void;
}
