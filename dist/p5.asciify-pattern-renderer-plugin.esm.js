var p = Object.defineProperty;
var x = (l, r, e) => r in l ? p(l, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[r] = e;
var i = (l, r, e) => x(l, typeof r != "symbol" ? r + "" : r, e);
import { P5AsciifyColorPalette as C, P5AsciifyError as u, renderers as g } from "p5.asciify";
class c {
  constructor(r, e, t, n, o, s) {
    /** The start brightness value of the gradient. Should be a value between 0 and 255. */
    i(this, "_brightnessStart");
    /** The end brightness value of the gradient. Should be a value between 0 and 255. */
    i(this, "_brightnessEnd");
    /** Whether the gradient is enabled. */
    i(this, "_enabled");
    /** The color palette for the gradient, corresponding to the characters. */
    i(this, "_palette");
    this.p = r, this._fontManager = e, this._shader = t, this._characters = n, this._palette = new C(
      this.p,
      this._fontManager.glyphColors(this._characters)
    ), this._brightnessStart = Math.floor(o / 255 * 100) / 100, this._brightnessEnd = Math.ceil(s / 255 * 100) / 100, this._enabled = !0;
  }
  /**
   * Sets the uniforms for the gradient shader.
   * @param framebuffer - The framebuffer to use.
   * @param referenceFramebuffer - The reference framebuffer, which is used so two gradients cannot write onto the same pixels.
   */
  setUniforms(r, e) {
    this._shader.setUniform("textureID", r), this._shader.setUniform("originalTextureID", e), this._shader.setUniform("gradientTexture", this._palette.framebuffer), this._shader.setUniform("gradientTextureDimensions", [this._palette.colors.length, 1]), this._shader.setUniform("u_brightnessRange", [this._brightnessStart, this._brightnessEnd]), this._shader.setUniform("frameCount", this.p.frameCount);
  }
  /**
   * Sets the start brightness value.
   * @param value The brightness value to set.
   * @throws P5AsciifyError If the value is not a number or is not within the range [0, 255].
   */
  brightnessStart(r) {
    this._brightnessStart = r;
  }
  /**
   * Sets the end brightness value.
   * @param value The brightness value to set.
   * @throws P5AsciifyError If the value is not a number or is not within the range [0, 255].
   */
  brightnessEnd(r) {
    this._brightnessEnd = r;
  }
  /**
   * Sets the brightness range.
   * @param start The start brightness value.
   * @param end The end brightness value.
   * @throws P5AsciifyError If the start or end value is not a number or is not within the range [0, 255].
   */
  brightnessRange(r, e) {
    this.brightnessStart(r), this.brightnessEnd(e);
  }
  /**
   * Sets the characters to use for the gradient.
   * @param value The characters to use.
   * @throws P5AsciifyError If the string does contain characters that are not available in the font texture atlas.
   */
  characters(r) {
    if (typeof r != "string")
      throw new u("Characters must be a string.");
    this._fontManager.validateCharacters(r), this.palette.setColors(this._fontManager.glyphColors(r));
  }
  /**
   * Enables or disables the gradient.
   * @param value Whether to enable or disable the gradient.
   */
  enabled(r) {
    this._enabled = r;
  }
  /**
   * Enables the gradient.
   */
  enable() {
    this.enabled(!0);
  }
  /**
   * Disables the gradient.
   */
  disable() {
    this.enabled(!1);
  }
  /**
   * Toggles the enabled state of the gradient.
   */
  toggle() {
    this.enabled(!this._enabled);
  }
  isEnabled() {
    return this._enabled;
  }
  // Getters
  get shader() {
    return this._shader;
  }
  get palette() {
    return this._palette;
  }
}
class v extends c {
  constructor(e, t, n, o, s, d, a) {
    super(e, t, n, o, s, d);
    i(this, "direction");
    i(this, "angle");
    i(this, "speed");
    i(this, "zigzag");
    this.p = e, this._fontManager = t, this._shader = n, this._characters = o, this.direction = a.direction, this.angle = a.angle, this.speed = a.speed, this.zigzag = a.zigzag;
  }
  setUniforms(e, t) {
    super.setUniforms(e, t), this._shader.setUniform("u_gradientDirection", this.direction), this._shader.setUniform("u_angle", this.angle * Math.PI / 180), this._shader.setUniform("u_speed", this.speed), this._shader.setUniform("u_zigzag", this.zigzag);
  }
}
class b extends c {
  constructor(e, t, n, o, s, d, a) {
    super(e, t, n, o, s, d);
    i(this, "direction");
    i(this, "centerX");
    i(this, "centerY");
    i(this, "speed");
    i(this, "density");
    this.p = e, this._fontManager = t, this._shader = n, this._characters = o, this.direction = a.direction, this.centerX = a.centerX, this.centerY = a.centerY, this.speed = a.speed, this.density = a.density;
  }
  setUniforms(e, t) {
    super.setUniforms(e, t), this._shader.setUniform("u_gradientDirection", this.direction), this._shader.setUniform("u_centerX", this.centerX), this._shader.setUniform("u_centerY", this.centerY), this._shader.setUniform("u_speed", this.speed), this._shader.setUniform("u_density", this.density);
  }
}
class T extends c {
  constructor(e, t, n, o, s, d, a) {
    super(e, t, n, o, s, d);
    i(this, "direction");
    i(this, "centerX");
    i(this, "centerY");
    i(this, "radius");
    this.p = e, this._fontManager = t, this._shader = n, this._characters = o, this.direction = a.direction, this.centerX = a.centerX, this.centerY = a.centerY, this.radius = a.radius;
  }
  setUniforms(e, t) {
    super.setUniforms(e, t), this._shader.setUniform("u_gradientDirection", this.direction), this._shader.setUniform("u_centerX", this.centerX), this._shader.setUniform("u_centerY", this.centerY), this._shader.setUniform("u_radius", this.radius);
  }
}
class D extends c {
  constructor(e, t, n, o, s, d, a) {
    super(e, t, n, o, s, d);
    i(this, "centerX");
    i(this, "centerY");
    i(this, "speed");
    this.p = e, this._fontManager = t, this._shader = n, this._characters = o, this.centerX = a.centerX, this.centerY = a.centerY, this.speed = a.speed;
  }
  setUniforms(e, t) {
    super.setUniforms(e, t), this._shader.setUniform("u_centerX", this.centerX), this._shader.setUniform("u_centerY", this.centerY), this._shader.setUniform("u_speed", this.speed);
  }
}
var h = `precision mediump float;

attribute vec3 aPosition;\r
attribute vec2 aTexCoord;

varying vec2 v_texCoord;

void main() {\r
    vec4 positionVec4 = vec4(aPosition, 1.0);

    positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

    gl_Position = positionVec4;

    v_texCoord = aTexCoord;\r
}`, S = `precision mediump float;
varying vec2 v_texCoord;

uniform bool u_zigzag;
uniform sampler2D textureID;
uniform sampler2D originalTextureID;
uniform sampler2D gradientTexture;
uniform int frameCount;
uniform float u_gradientDirection;
uniform float u_speed;
uniform float u_angle;
uniform vec2 gradientTextureDimensions;
uniform vec2 u_brightnessRange;

void main() {
    vec4 texColor = texture2D(textureID, v_texCoord);
    vec4 originalTexColor = texture2D(originalTextureID, v_texCoord);
    
    if(originalTexColor.a >= 0.01 &&
        originalTexColor.r >= u_brightnessRange[0] &&
        originalTexColor.r <= u_brightnessRange[1]) {
        float index;
        if(u_zigzag) {
            vec2 coord = gl_FragCoord.xy;
            float posX = coord.x * cos(u_angle) - coord.y * sin(u_angle);
            float posY = coord.x * sin(u_angle) + coord.y * cos(u_angle);
            float direction = mod(floor(posY), 2.0) == 0.0 ? 1.0 : -1.0;
            index = mod(posX + float(frameCount) * u_speed * direction * u_gradientDirection, gradientTextureDimensions.x);
        } else {
            vec2 coord = floor(gl_FragCoord.xy);
            float pos = coord.x * cos(u_angle) + coord.y * sin(u_angle);
            index = mod(pos + float(frameCount) * u_gradientDirection * u_speed, gradientTextureDimensions.x);
        }

        index = floor(index);
        float texelPos = (index + 0.5) / gradientTextureDimensions.x;
        vec4 gradientColor = texture2D(gradientTexture, vec2(texelPos, 0.0));
        gl_FragColor = vec4(gradientColor.rgb, texColor.a);
    } else {
        gl_FragColor = texColor;
    }
}`, y = `precision mediump float;

varying vec2 v_texCoord;

uniform sampler2D textureID; 
uniform sampler2D originalTextureID; 
uniform sampler2D gradientTexture; 
uniform int frameCount;
uniform float u_gradientDirection; 
uniform float u_centerX;
uniform float u_centerY;
uniform float u_speed; 
uniform float u_density; 
uniform vec2 gradientTextureDimensions; 
uniform vec2 u_brightnessRange; 

void main() {
    vec4 texColor = texture2D(textureID, v_texCoord);
    vec4 originalTexColor = texture2D(originalTextureID, v_texCoord);

    if(originalTexColor.a >= 0.01 &&
        originalTexColor.r >= u_brightnessRange[0] &&
        originalTexColor.r <= u_brightnessRange[1]) {

        vec2 relativePosition = v_texCoord - vec2(u_centerX, u_centerY);
        float distance = length(relativePosition);
        float angle = atan(relativePosition.y, relativePosition.x);
        float adjustedAngle = angle + float(frameCount) * u_gradientDirection * u_speed;

        
        float index = mod((distance + adjustedAngle * u_density) * gradientTextureDimensions.x, gradientTextureDimensions.x);

        
        float normalizedIndex = (floor(index) + 0.5) / gradientTextureDimensions.x;

        
        vec4 gradientColor = texture2D(gradientTexture, vec2(normalizedIndex, 0));

        
        gl_FragColor = vec4(gradientColor.rgb, texColor.a);
    } else {
        gl_FragColor = texColor;
    }
}`, F = `precision mediump float;

varying vec2 v_texCoord;

uniform sampler2D textureID; 
uniform sampler2D originalTextureID; 
uniform sampler2D gradientTexture; 
uniform float u_centerX; 
uniform float u_centerY; 
uniform float u_radius; 
uniform int frameCount; 
uniform int u_gradientDirection; 
uniform vec2 gradientTextureDimensions; 
uniform vec2 u_brightnessRange; 

void main() {
    vec4 texColor = texture2D(textureID, v_texCoord);
    vec4 originalTexColor = texture2D(originalTextureID, v_texCoord);

    if(originalTexColor.a >= 0.01 &&
        originalTexColor.r >= u_brightnessRange[0] &&
        originalTexColor.r <= u_brightnessRange[1]) {

        
        vec2 relativePosition = v_texCoord - vec2(u_centerX, u_centerY);
        float distance = length(relativePosition);

        
        float normalizedDistance = clamp(distance / u_radius, 0.0, 1.0);
        float index = normalizedDistance * (gradientTextureDimensions.x - 1.0);

        
        
        float animatedIndex = mod(index + float(frameCount) * 0.1 * float(-u_gradientDirection), gradientTextureDimensions.x);

        
        float normalizedIndex = (floor(animatedIndex) + 0.5) / gradientTextureDimensions.x;

        
        vec4 gradientColor = texture2D(gradientTexture, vec2(normalizedIndex, 0));

        
        gl_FragColor = vec4(gradientColor.rgb, texColor.a);
    } else {
        gl_FragColor = texColor;
    }
}`, A = `precision mediump float;

varying vec2 v_texCoord;

uniform sampler2D textureID; 
uniform sampler2D originalTextureID; 
uniform sampler2D gradientTexture; 
uniform float u_centerX;
uniform float u_centerY;
uniform int frameCount; 
uniform float u_speed; 
uniform vec2 gradientTextureDimensions; 
uniform vec2 u_brightnessRange; 

void main() {
    
    vec2 flippedTexCoord = vec2(v_texCoord.x, v_texCoord.y);
    vec4 texColor = texture2D(textureID, flippedTexCoord);
    vec4 originalTexColor = texture2D(originalTextureID, flippedTexCoord);

    if(originalTexColor.a >= 0.01 &&
        originalTexColor.r >= u_brightnessRange[0] &&
        originalTexColor.r <= u_brightnessRange[1]) {

        
        vec2 relativePosition = flippedTexCoord - vec2(u_centerX, u_centerY);

        
        float angle = atan(relativePosition.y, relativePosition.x);

        
        float adjustedAngle = angle + float(frameCount) * u_speed;

        
        float normalizedAngle = mod(adjustedAngle + 3.14159265, 2.0 * 3.14159265) / (2.0 * 3.14159265);

        
        float index = normalizedAngle * gradientTextureDimensions.x;
        float normalizedIndex = mod(floor(index) + 0.5, gradientTextureDimensions.x) / gradientTextureDimensions.x;

        
        vec4 gradientColor = texture2D(gradientTexture, vec2(normalizedIndex, 0));

        
        gl_FragColor = vec4(gradientColor.rgb, texColor.a);
    } else {
        
        gl_FragColor = texColor;
    }
}`;
class w {
  constructor(r, e) {
    /** The default parameters for each gradient type. */
    i(this, "_gradientParams", {
      linear: { direction: 1, angle: 0, speed: 0.01, zigzag: !1 },
      spiral: { direction: 1, centerX: 0.5, centerY: 0.5, speed: 0.01, density: 0.01 },
      radial: { direction: 1, centerX: 0.5, centerY: 0.5, radius: 0.5 },
      conical: { centerX: 0.5, centerY: 0.5, speed: 0.01 }
    });
    /** The shader sources for each gradient type. */
    i(this, "_gradientShaderSources", {
      linear: S,
      spiral: y,
      radial: F,
      conical: A
    });
    /** The gradient shaders. */
    i(this, "_gradientShaders", {});
    /** The gradient constructors. */
    i(this, "_gradientConstructors", {
      linear: (r, e, t, n, o, s, d) => new v(r, e, t, n, o, s, d),
      spiral: (r, e, t, n, o, s, d) => new b(r, e, t, n, o, s, d),
      radial: (r, e, t, n, o, s, d) => new T(r, e, t, n, o, s, d),
      conical: (r, e, t, n, o, s, d) => new D(r, e, t, n, o, s, d)
    });
    /** The list of gradients to render on the gradient ascii renderer. */
    i(this, "_gradients", []);
    this._p = r, this._fontManager = e;
    for (const t of Object.keys(this._gradientShaderSources)) {
      const n = this._gradientShaderSources[t];
      this._gradientShaders[t] = this._p.createShader(h, n);
    }
  }
  /**
   * Add a gradient to the gradient manager.
   * @param gradientName The name of the gradient to add.
   * @param brightnessStart The start brightness of the gradient.
   * @param brightnessEnd The end brightness of the gradient.
   * @param characters The characters to use for the gradient.
   * @param options The parameters for the gradient.
   * @returns The gradient instance.
   */
  add(r, e, t, n, o) {
    if (typeof r != "string")
      throw new u("Gradient name must be a string");
    if (!this.gradientConstructors[r])
      throw new u(
        `Gradient '${r}' does not exist! Available gradients: ${Object.keys(this.gradientConstructors).join(", ")}`
      );
    if (typeof t != "number")
      throw new u("Brightness start value must be a number");
    if (typeof n != "number")
      throw new u("Brightness end value must be a number");
    if (typeof e != "string")
      throw new u("Characters must be a string");
    if (e.length === 0)
      throw new u("Characters string cannot be empty");
    if (!o || typeof o != "object" || Array.isArray(o))
      throw new u("User parameters must be an object");
    const s = Object.keys(this.gradientParams[r]), d = Object.keys(o).filter((m) => !s.includes(m));
    if (d.length > 0)
      throw new u(
        `Invalid parameter(s) for gradient '${r}': ${d.join(", ")}
Valid parameters are: ${s.join(", ")}`
      );
    const a = this._gradientConstructors[r](
      this._p,
      this._fontManager,
      this._gradientShaders[r],
      e,
      t,
      n,
      { ...this._gradientParams[r], ...o }
    );
    return this._gradients.push(a), a;
  }
  /**
   * Remove a gradient from the gradient manager.
   * @param gradient The gradient to remove.
   */
  remove(r) {
    const e = this._gradients.indexOf(r);
    e > -1 && this._gradients.splice(e, 1);
  }
  // Getters
  get gradientParams() {
    return this._gradientParams;
  }
  get gradients() {
    return this._gradients;
  }
  get gradientConstructors() {
    return this._gradientConstructors;
  }
}
var U = `precision mediump float;

uniform sampler2D u_image; 
varying vec2 v_texCoord; 

void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    float luminance = 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;
    color.rgb = vec3(luminance);
    gl_FragColor = color;
}`, I = `precision mediump float;

uniform sampler2D u_sketchTexture;             
uniform sampler2D u_previousColorTexture;      
uniform sampler2D u_sampleTexture;             
uniform sampler2D u_sampleReferenceTexture;    
uniform vec2 u_gridCellDimensions;             
uniform int u_sampleMode;                      
uniform vec4 u_staticColor;                    

void main() {
    
    vec2 cellCoord = floor(gl_FragCoord.xy);

    
    vec2 cellSizeInTexCoords = 1.0 / u_gridCellDimensions;

    
    vec2 cellCenterTexCoord = (cellCoord + vec2(0.5)) * cellSizeInTexCoords;

    
    vec4 finalColor;

        
    vec4 sampleColor = texture2D(u_sampleTexture, cellCenterTexCoord);
    vec4 referenceColor = texture2D(u_sampleReferenceTexture, cellCenterTexCoord);

        
    bool isMatchingSample = (sampleColor == referenceColor);

    if(isMatchingSample) {
            
        finalColor = texture2D(u_previousColorTexture, cellCenterTexCoord);
    } else if(u_sampleMode == 0) {
            
        finalColor = texture2D(u_sketchTexture, cellCenterTexCoord);
    } else {
            
        finalColor = u_staticColor;
    }

    
    gl_FragColor = finalColor;
}`, P = `precision mediump float;

uniform sampler2D u_sampleTexture;
uniform sampler2D u_sampleReferenceTexture;  
uniform sampler2D u_previousInversionTexture;
uniform vec2 u_gridCellDimensions;
uniform bool u_invert;

void main() {
    
    vec2 cellCoord = floor(gl_FragCoord.xy);

    
    vec2 cellSizeInTexCoords = vec2(1.0) / u_gridCellDimensions;

    
    vec2 cellCenterTexCoord = (cellCoord + vec2(0.5)) * cellSizeInTexCoords;

    bool shouldInvert;

        
    shouldInvert = texture2D(u_sampleTexture, cellCenterTexCoord) !=
        texture2D(u_sampleReferenceTexture, cellCenterTexCoord);

    if(shouldInvert) {
        gl_FragColor = u_invert ? vec4(1.0) : vec4(vec3(0.0), 1.0);
        return;
    } else {
        gl_FragColor = texture2D(u_previousInversionTexture, cellCenterTexCoord);
    }
}`, G = `precision mediump float;

uniform sampler2D u_sampleTexture;
uniform sampler2D u_previousRotationTexture;
uniform vec2 u_gridCellDimensions;
uniform vec3 u_rotationColor;

uniform sampler2D u_sampleReferenceTexture;

void main() {
    
    vec2 cellCoord = floor(gl_FragCoord.xy);

    
    vec2 cellSizeInTexCoords = vec2(1.0) / u_gridCellDimensions;

    
    vec2 cellCenterTexCoord = (cellCoord + vec2(0.5)) * cellSizeInTexCoords;

    bool shouldRotate;
        
    shouldRotate = texture2D(u_sampleTexture, cellCenterTexCoord) !=
        texture2D(u_sampleReferenceTexture, cellCenterTexCoord);

    if(shouldRotate) {
        gl_FragColor = vec4(u_rotationColor, 1.0);
    } else {
        gl_FragColor = texture2D(u_previousRotationTexture, cellCenterTexCoord);
    }
}`, R = `precision mediump float;

uniform sampler2D u_prevAsciiCharacterTexture;
uniform sampler2D u_prevGradientTexture;
uniform sampler2D u_nextGradientTexture;
uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    
    vec4 prevAscii = texture2D(u_prevAsciiCharacterTexture, uv);
    vec4 prevGradient = texture2D(u_prevGradientTexture, uv);
    vec4 nextGradient = texture2D(u_nextGradientTexture, uv);
    
    
    bool colorsMatch = prevGradient == nextGradient;
    
    gl_FragColor = colorsMatch ? vec4(0.0) : nextGradient;
}`;
const f = {
  /** Enable/disable the renderer */
  enabled: !1,
  /** Color of the ASCII characters. Only used when `characterColorMode` is set to `fixed` */
  characterColor: "#FFFFFF",
  /** Character color mode */
  characterColorMode: "sampled",
  /** Cell background color. Only used when `characterColorMode` is set to `fixed` */
  backgroundColor: "#000000",
  /** Background color mode */
  backgroundColorMode: "fixed",
  /** Swap the cells ASCII character colors with it's cell background colors */
  invertMode: !1,
  /** Rotation angle of all characters in the grid in degrees */
  rotationAngle: 0
}, z = () => {
  if (typeof g.renderer2d.feature.P5AsciifyAbstractFeatureRenderer2D < "u")
    return g.renderer2d.feature.P5AsciifyAbstractFeatureRenderer2D;
  if (typeof window < "u" && window.P5AsciifyAbstractFeatureRenderer2D)
    return window.P5AsciifyAbstractFeatureRenderer2D;
  throw console.error("P5AsciifyAbstractFeatureRenderer2D not found. Ensure p5.asciify is properly loaded."), new Error("`P5AsciifyAbstractFeatureRenderer2D` not found. Please ensure p5.asciify is loaded before this plugin.");
};
class M extends z() {
  constructor(e, t, n, o, s = f) {
    const d = { ...f, ...s };
    super(e, t, n, o, d);
    i(this, "grayscaleShader");
    i(this, "colorSampleShader");
    i(this, "grayscaleFramebuffer");
    i(this, "inversionShader");
    i(this, "rotationShader");
    i(this, "asciiCharacterShader");
    i(this, "prevAsciiGradientFramebuffer");
    i(this, "nextAsciiGradientFramebuffer");
    i(this, "gradientManager");
    this.gradientManager = new w(this._p, this._fontManager), this.grayscaleShader = this._p.createShader(h, U), this.colorSampleShader = this._p.createShader(h, I), this.inversionShader = this._p.createShader(h, P), this.rotationShader = this._p.createShader(h, G), this.asciiCharacterShader = this._p.createShader(h, R), this.grayscaleFramebuffer = this._p.createFramebuffer({
      density: 1,
      width: this._grid.cols,
      height: this._grid.rows,
      depthFormat: this._p.UNSIGNED_INT,
      textureFiltering: this._p.NEAREST
    }), this.prevAsciiGradientFramebuffer = this._p.createFramebuffer({
      density: 1,
      width: this._grid.cols,
      height: this._grid.rows,
      depthFormat: this._p.UNSIGNED_INT,
      textureFiltering: this._p.NEAREST
    }), this.nextAsciiGradientFramebuffer = this._p.createFramebuffer({
      density: 1,
      width: this._grid.cols,
      height: this._grid.rows,
      depthFormat: this._p.UNSIGNED_INT,
      textureFiltering: this._p.NEAREST
    });
  }
  resizeFramebuffers() {
    super.resizeFramebuffers(), this.grayscaleFramebuffer.resize(this._grid.cols, this._grid.rows), this.prevAsciiGradientFramebuffer.resize(this._grid.cols, this._grid.rows), this.nextAsciiGradientFramebuffer.resize(this._grid.cols, this._grid.rows);
  }
  resetShaders() {
  }
  add(e, t, n, o, s = {}) {
    return this.gradientManager.add(e, o, t, n, s);
  }
  remove(e) {
    this.gradientManager.remove(e);
  }
  render() {
    this.grayscaleFramebuffer.begin(), this._p.clear(), this._p.shader(this.grayscaleShader), this.grayscaleShader.setUniform("u_image", this._captureFramebuffer), this._p.rect(0, 0, this._p.width, this._p.height), this.grayscaleFramebuffer.end(), this.prevAsciiGradientFramebuffer.begin(), this._p.clear(), this._p.image(this.grayscaleFramebuffer, -this._grid.cols / 2, -this._grid.rows / 2), this.prevAsciiGradientFramebuffer.end(), this.nextAsciiGradientFramebuffer.begin(), this._p.clear(), this._p.image(this.grayscaleFramebuffer, -this._grid.cols / 2, -this._grid.rows / 2), this.nextAsciiGradientFramebuffer.end();
    for (const e of this.gradientManager.gradients)
      e.isEnabled() && ([this.prevAsciiGradientFramebuffer, this.nextAsciiGradientFramebuffer] = [this.nextAsciiGradientFramebuffer, this.prevAsciiGradientFramebuffer], this.nextAsciiGradientFramebuffer.begin(), this._p.clear(), this._p.shader(e.shader), e.setUniforms(this.prevAsciiGradientFramebuffer, this.grayscaleFramebuffer), this._p.rect(0, 0, this._grid.cols, this._grid.rows), this.nextAsciiGradientFramebuffer.end());
    this._characterFramebuffer.begin(), this._p.clear(), this._p.shader(this.asciiCharacterShader), this.asciiCharacterShader.setUniform("u_prevGradientTexture", this.grayscaleFramebuffer), this.asciiCharacterShader.setUniform("u_nextGradientTexture", this.nextAsciiGradientFramebuffer), this.asciiCharacterShader.setUniform("u_resolution", [this._grid.cols, this._grid.rows]), this._p.rect(0, 0, this._grid.cols, this._grid.rows), this._characterFramebuffer.end(), this._primaryColorFramebuffer.begin(), this._p.clear(), this._p.shader(this.colorSampleShader), this.colorSampleShader.setUniform("u_sketchTexture", this._captureFramebuffer), this.colorSampleShader.setUniform("u_sampleTexture", this.nextAsciiGradientFramebuffer), this.colorSampleShader.setUniform("u_sampleReferenceTexture", this.grayscaleFramebuffer), this.colorSampleShader.setUniform("u_gridCellDimensions", [this._grid.cols, this._grid.rows]), this.colorSampleShader.setUniform("u_sampleMode", this._options.characterColorMode), this.colorSampleShader.setUniform("u_staticColor", this._options.characterColor._array), this._p.rect(0, 0, this._p.width, this._p.height), this._primaryColorFramebuffer.end(), this._secondaryColorFramebuffer.begin(), this._p.clear(), this._p.shader(this.colorSampleShader), this.colorSampleShader.setUniform("u_sketchTexture", this._captureFramebuffer), this.colorSampleShader.setUniform("u_sampleTexture", this.nextAsciiGradientFramebuffer), this.colorSampleShader.setUniform("u_sampleReferenceTexture", this.grayscaleFramebuffer), this.colorSampleShader.setUniform("u_gridCellDimensions", [this._grid.cols, this._grid.rows]), this.colorSampleShader.setUniform("u_sampleMode", this._options.backgroundColorMode), this.colorSampleShader.setUniform("u_staticColor", this._options.backgroundColor._array), this._p.rect(0, 0, this._p.width, this._p.height), this._secondaryColorFramebuffer.end(), this._transformFramebuffer.begin(), this._p.clear(), this._p.shader(this.inversionShader), this.inversionShader.setUniform("u_invert", this._options.invertMode), this.inversionShader.setUniform("u_gridCellDimensions", [this._grid.cols, this._grid.rows]), this.inversionShader.setUniform("u_sampleTexture", this.nextAsciiGradientFramebuffer), this.inversionShader.setUniform("u_sampleReferenceTexture", this.grayscaleFramebuffer), this._p.rect(0, 0, this._p.width, this._p.height), this._transformFramebuffer.end(), this._rotationFramebuffer.begin(), this._p.clear(), this._p.shader(this.rotationShader), this.rotationShader.setUniform("u_rotationColor", this._options.rotationAngle._array), this.rotationShader.setUniform("u_gridCellDimensions", [this._grid.cols, this._grid.rows]), this.rotationShader.setUniform("u_sampleTexture", this.nextAsciiGradientFramebuffer), this.rotationShader.setUniform("u_sampleReferenceTexture", this.grayscaleFramebuffer), this._p.rect(0, 0, this._p.width, this._p.height), this._rotationFramebuffer.end();
  }
}
const _ = {
  id: "pattern",
  name: "ASCII Pattern Renderer",
  description: "An ASCII pattern render that applies a pattern to a given brightness range in the texture that is captured.",
  version: "1.0.0",
  author: "humanbydefinition",
  /**
   * Creates a new instance of the accurate ASCII renderer.
   * @param p The p5 instance.
   * @param captureFramebuffer The framebuffer to apply the ASCII effect to.
   * @param grid The grid to use.
   * @param fontManager The font manager to use.
   * @param options The options to use.
   * @returns The new instance of the accurate ASCII renderer.
   */
  create(l, r, e, t, n) {
    return new M(
      l,
      r,
      e,
      t,
      n || f
    );
  }
};
typeof window < "u" && (window.PatternRendererPlugin = _);
typeof window < "u" && (window.PatternRendererPlugin = _);
export {
  D as P5AsciifyConicalGradient,
  c as P5AsciifyGradient,
  w as P5AsciifyGradientManager,
  v as P5AsciifyLinearGradient,
  M as P5AsciifyPatternRenderer,
  T as P5AsciifyRadialGradient,
  b as P5AsciifySpiralGradient,
  _ as PatternRendererPlugin
};
