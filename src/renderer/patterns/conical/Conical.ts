import p5 from 'p5';
import { P5AsciifyFontManager } from 'p5.asciify';
import { P5AsciifyPattern } from '../Pattern';
import { ConicalGradientParams } from '../types';

/**
 * A conical gradient that moves in a conical pattern across the screen.
 */
export class P5AsciifyConicalPattern extends P5AsciifyPattern {
    public centerX: number;
    public centerY: number;
    public speed: number;

    constructor(
        protected p: p5,
        protected _fontManager: P5AsciifyFontManager,
        protected _shader: p5.Shader,
        protected _characters: string,
        brightnessStart: number,
        brightnessEnd: number,
        params: ConicalGradientParams
    ) {
        super(p, _fontManager, _shader, _characters, brightnessStart, brightnessEnd, );
        this.centerX = params.centerX;
        this.centerY = params.centerY;
        this.speed = params.speed;
    }

    setUniforms(
        framebuffer: p5.Framebuffer,
        referenceFramebuffer: p5.Framebuffer
    ): void {
        super.setUniforms(framebuffer, referenceFramebuffer);
        this._shader.setUniform('u_centerX', this.centerX);
        this._shader.setUniform('u_centerY', this.centerY);
        this._shader.setUniform('u_speed', this.speed);
    }
}