import p5 from 'p5';
import { P5AsciifyFontManager } from 'p5.asciify';
import { P5AsciifyGradient } from '../Gradient';
import { LinearGradientParams } from '../types';
/**
 * A linear gradient that moves in a linear pattern across the screen.
 */
export declare class P5AsciifyLinearGradient extends P5AsciifyGradient {
    protected p: p5;
    protected _fontManager: P5AsciifyFontManager;
    protected _shader: p5.Shader;
    protected _characters: string;
    direction: number;
    angle: number;
    speed: number;
    zigzag: boolean;
    constructor(p: p5, _fontManager: P5AsciifyFontManager, _shader: p5.Shader, _characters: string, brightnessStart: number, brightnessEnd: number, params: LinearGradientParams);
    setUniforms(framebuffer: p5.Framebuffer, referenceFramebuffer: p5.Framebuffer): void;
}
