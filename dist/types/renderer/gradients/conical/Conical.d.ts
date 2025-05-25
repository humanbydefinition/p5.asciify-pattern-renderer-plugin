import p5 from 'p5';
import { P5AsciifyFontManager } from 'p5.asciify';
import { P5AsciifyGradient } from '../Gradient';
import { ConicalGradientParams } from '../types';
/**
 * A conical gradient that moves in a conical pattern across the screen.
 */
export declare class P5AsciifyConicalGradient extends P5AsciifyGradient {
    protected p: p5;
    protected _fontManager: P5AsciifyFontManager;
    protected _shader: p5.Shader;
    protected _characters: string;
    centerX: number;
    centerY: number;
    speed: number;
    constructor(p: p5, _fontManager: P5AsciifyFontManager, _shader: p5.Shader, _characters: string, brightnessStart: number, brightnessEnd: number, params: ConicalGradientParams);
    setUniforms(framebuffer: p5.Framebuffer, referenceFramebuffer: p5.Framebuffer): void;
}
