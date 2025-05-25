import p5 from 'p5';
import { P5AsciifyPattern } from '../Pattern';
import { P5AsciifyFontManager } from 'p5.asciify';
import { RadialGradientParams } from '../types';

/**
 * A radial gradient that moves in a radial pattern across the screen.
 */
export class P5AsciifyRadialPattern extends P5AsciifyPattern {
    public direction: number;
    public centerX: number;
    public centerY: number;
    public radius: number;

    constructor(
            protected p: p5,
            protected _fontManager: P5AsciifyFontManager,
            protected _shader: p5.Shader,
            protected _characters: string,
            brightnessStart: number,
            brightnessEnd: number,
            params: RadialGradientParams
        ) {
            super(p, _fontManager, _shader, _characters, brightnessStart, brightnessEnd,);
        this.direction = params.direction;
        this.centerX = params.centerX;
        this.centerY = params.centerY;
        this.radius = params.radius;
    }

    setUniforms(
        framebuffer: p5.Framebuffer,
        referenceFramebuffer: p5.Framebuffer
    ): void {
        super.setUniforms(framebuffer, referenceFramebuffer);
        this._shader.setUniform('u_gradientDirection', this.direction);
        this._shader.setUniform('u_centerX', this.centerX);
        this._shader.setUniform('u_centerY', this.centerY);
        this._shader.setUniform('u_radius', this.radius);
    }
}