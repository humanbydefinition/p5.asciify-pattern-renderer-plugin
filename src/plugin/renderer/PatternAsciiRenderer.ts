import p5 from 'p5';

import { P5AsciifyGrid } from 'p5.asciify';
import { renderers } from 'p5.asciify';
import { P5AsciifyGradientManager } from './gradients/GradientManager';

import grayscaleShader from './shaders/grayscale.frag';
import colorSampleShader from './shaders/colorSample.frag';
import inversionShader from './shaders/inversion.frag';
import rotationShader from './shaders/rotation.frag';
import asciiCharacterShader from './shaders/asciiCharacter.frag';
import vertexShader from './shaders/shader.vert?raw';
import { P5AsciifyFontManager } from 'p5.asciify';
import { P5AsciifyGradient } from './gradients/Gradient';
import { GradientType } from './gradients/types';

/** Default configuration options for `"gradient"` ASCII renderer */
export const GRADIENT_DEFAULT_OPTIONS = {
    /** Enable/disable the renderer */
    enabled: false,
    /** Color of the ASCII characters. Only used when `characterColorMode` is set to `fixed` */
    characterColor: "#FFFFFF",
    /** Character color mode */
    characterColorMode: "sampled",
    /** Cell background color. Only used when `characterColorMode` is set to `fixed` */
    backgroundColor: "#000000",
    /** Background color mode */
    backgroundColorMode: "fixed",
    /** Swap the cells ASCII character colors with it's cell background colors */
    invertMode: false,
    /** Rotation angle of all characters in the grid in degrees */
    rotationAngle: 0,
};

const getBaseClass = (): typeof renderers.renderer2d.feature.P5AsciifyAbstractFeatureRenderer2D => {
    // For ESM mode - direct import works
    if (typeof renderers.renderer2d.feature.P5AsciifyAbstractFeatureRenderer2D !== 'undefined') {
        return renderers.renderer2d.feature.P5AsciifyAbstractFeatureRenderer2D;
    }

    // For UMD mode - use the global export
    if (typeof window !== 'undefined' && window.P5AsciifyAbstractFeatureRenderer2D) {
        return window.P5AsciifyAbstractFeatureRenderer2D;
    }

    console.error('P5AsciifyAbstractFeatureRenderer2D not found. Ensure p5.asciify is properly loaded.');

    throw new Error('`P5AsciifyAbstractFeatureRenderer2D` not found. Please ensure p5.asciify is loaded before this plugin.');
};

/**
 * An ASCII renderer that applies all defined ASCII gradients/patterns to the input framebuffer.
 */
export class P5AsciifyPatternRenderer extends getBaseClass() {
    private grayscaleShader: p5.Shader;
    private colorSampleShader: p5.Shader;
    private grayscaleFramebuffer: p5.Framebuffer;
    private inversionShader: p5.Shader;
    private rotationShader: p5.Shader;
    private asciiCharacterShader: p5.Shader;
    private prevAsciiGradientFramebuffer: p5.Framebuffer;
    private nextAsciiGradientFramebuffer: p5.Framebuffer;
    private gradientManager: P5AsciifyGradientManager;

    constructor(
        p5Instance: p5,
        captureFramebuffer: p5.Framebuffer,
        grid: P5AsciifyGrid,
        fontManager: P5AsciifyFontManager,
        options: renderers.FeatureAsciiRendererOptions = GRADIENT_DEFAULT_OPTIONS
    ) {
        const mergedOptions = { ...GRADIENT_DEFAULT_OPTIONS, ...options };
        super(p5Instance, captureFramebuffer, grid, fontManager, mergedOptions);

        this.gradientManager = new P5AsciifyGradientManager(this._p, this._fontManager);

        this.grayscaleShader = this._p.createShader(vertexShader, grayscaleShader);
        this.colorSampleShader = this._p.createShader(vertexShader, colorSampleShader);
        this.inversionShader = this._p.createShader(vertexShader, inversionShader);
        this.rotationShader = this._p.createShader(vertexShader, rotationShader);
        this.asciiCharacterShader = this._p.createShader(vertexShader, asciiCharacterShader);

        this.grayscaleFramebuffer = this._p.createFramebuffer({
            density: 1,
            width: this._grid.cols,
            height: this._grid.rows,
            depthFormat: this._p.UNSIGNED_INT,
            textureFiltering: this._p.NEAREST
        });

        this.prevAsciiGradientFramebuffer = this._p.createFramebuffer({
            density: 1,
            width: this._grid.cols,
            height: this._grid.rows,
            depthFormat: this._p.UNSIGNED_INT,
            textureFiltering: this._p.NEAREST
        });

        this.nextAsciiGradientFramebuffer = this._p.createFramebuffer({
            density: 1,
            width: this._grid.cols,
            height: this._grid.rows,
            depthFormat: this._p.UNSIGNED_INT,
            textureFiltering: this._p.NEAREST
        });
    }

    resizeFramebuffers(): void {
        super.resizeFramebuffers();
        this.grayscaleFramebuffer.resize(this._grid.cols, this._grid.rows);
        this.prevAsciiGradientFramebuffer.resize(this._grid.cols, this._grid.rows);
        this.nextAsciiGradientFramebuffer.resize(this._grid.cols, this._grid.rows);
    }

    resetShaders(): void { };

    add(gradientName: GradientType,
        brightnessStart: number,
        brightnessEnd: number,
        characters: string,
        options: any = {}): P5AsciifyGradient {
        return this.gradientManager.add(gradientName, characters, brightnessStart, brightnessEnd, options);
    }

    remove(gradientInstance: P5AsciifyGradient): void {
        this.gradientManager.remove(gradientInstance);
    }

    render(): void {
        // Grayscale pass
        this.grayscaleFramebuffer.begin();
        this._p.clear();
        this._p.shader(this.grayscaleShader);
        this.grayscaleShader.setUniform('u_image', this._captureFramebuffer);
        this._p.rect(0, 0, this._p.width, this._p.height);
        this.grayscaleFramebuffer.end();

        // Initial ASCII character setup
        this.prevAsciiGradientFramebuffer.begin();
        this._p.clear();
        this._p.image(this.grayscaleFramebuffer, -this._grid.cols / 2, -this._grid.rows / 2);
        this.prevAsciiGradientFramebuffer.end();

        this.nextAsciiGradientFramebuffer.begin();
        this._p.clear();
        this._p.image(this.grayscaleFramebuffer, -this._grid.cols / 2, -this._grid.rows / 2);
        this.nextAsciiGradientFramebuffer.end();

        // Gradient passes
        for (const gradient of this.gradientManager.gradients) {
            if (gradient.isEnabled) {
                [this.prevAsciiGradientFramebuffer, this.nextAsciiGradientFramebuffer] = [this.nextAsciiGradientFramebuffer, this.prevAsciiGradientFramebuffer];

                this.nextAsciiGradientFramebuffer.begin();
                this._p.clear();
                this._p.shader(gradient.shader);
                gradient.setUniforms(this.prevAsciiGradientFramebuffer, this.grayscaleFramebuffer);
                this._p.rect(0, 0, this._grid.cols, this._grid.rows);
                this.nextAsciiGradientFramebuffer.end();
            }
        }

        // Ascii character conversion pass
        this._characterFramebuffer.begin();
        this._p.clear();
        this._p.shader(this.asciiCharacterShader);
        this.asciiCharacterShader.setUniform('u_prevGradientTexture', this.grayscaleFramebuffer);
        this.asciiCharacterShader.setUniform('u_nextGradientTexture', this.nextAsciiGradientFramebuffer);
        this.asciiCharacterShader.setUniform('u_resolution', [this._grid.cols, this._grid.rows]);
        this._p.rect(0, 0, this._grid.cols, this._grid.rows);
        this._characterFramebuffer.end();

        // Color sample passes
        this._primaryColorFramebuffer.begin();
        this._p.clear();
        this._p.shader(this.colorSampleShader);
        this.colorSampleShader.setUniform('u_sketchTexture', this._captureFramebuffer);
        this.colorSampleShader.setUniform('u_sampleTexture', this.nextAsciiGradientFramebuffer);
        this.colorSampleShader.setUniform('u_sampleReferenceTexture', this.grayscaleFramebuffer);
        this.colorSampleShader.setUniform('u_gridCellDimensions', [this._grid.cols, this._grid.rows]);
        this.colorSampleShader.setUniform('u_sampleMode', this._options.characterColorMode as number);
        this.colorSampleShader.setUniform('u_staticColor', (this._options.characterColor as p5.Color)._array);
        this._p.rect(0, 0, this._p.width, this._p.height);
        this._primaryColorFramebuffer.end();

        this._secondaryColorFramebuffer.begin();
        this._p.clear();
        this._p.shader(this.colorSampleShader);
        this.colorSampleShader.setUniform('u_sketchTexture', this._captureFramebuffer);
        this.colorSampleShader.setUniform('u_sampleTexture', this.nextAsciiGradientFramebuffer);
        this.colorSampleShader.setUniform('u_sampleReferenceTexture', this.grayscaleFramebuffer);
        this.colorSampleShader.setUniform('u_gridCellDimensions', [this._grid.cols, this._grid.rows]);
        this.colorSampleShader.setUniform('u_sampleMode', this._options.backgroundColorMode as number);
        this.colorSampleShader.setUniform('u_staticColor', (this._options.backgroundColor as p5.Color)._array);
        this._p.rect(0, 0, this._p.width, this._p.height);
        this._secondaryColorFramebuffer.end();

        // Inversion pass
        this._transformFramebuffer.begin();
        this._p.clear();
        this._p.shader(this.inversionShader);
        this.inversionShader.setUniform('u_invert', this._options.invertMode!);
        this.inversionShader.setUniform('u_gridCellDimensions', [this._grid.cols, this._grid.rows]);
        this.inversionShader.setUniform('u_sampleTexture', this.nextAsciiGradientFramebuffer);
        this.inversionShader.setUniform('u_sampleReferenceTexture', this.grayscaleFramebuffer);
        this._p.rect(0, 0, this._p.width, this._p.height);
        this._transformFramebuffer.end();

        this._rotationFramebuffer.begin();
        this._p.clear();
        this._p.shader(this.rotationShader);
        this.rotationShader.setUniform('u_rotationColor', (this._options.rotationAngle as p5.Color)._array);
        this.rotationShader.setUniform('u_gridCellDimensions', [this._grid.cols, this._grid.rows]);
        this.rotationShader.setUniform('u_sampleTexture', this.nextAsciiGradientFramebuffer);
        this.rotationShader.setUniform('u_sampleReferenceTexture', this.grayscaleFramebuffer);
        this._p.rect(0, 0, this._p.width, this._p.height);
        this._rotationFramebuffer.end();
    }
}