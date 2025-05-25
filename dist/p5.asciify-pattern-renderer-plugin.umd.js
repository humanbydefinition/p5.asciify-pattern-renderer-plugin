(function(d,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("p5.asciify")):typeof define=="function"&&define.amd?define(["exports","p5.asciify"],s):(d=typeof globalThis<"u"?globalThis:d||self,s((d.p5=d.p5||{},d.p5["asciify-plugin-template"]={}),d.p5asciify))})(this,function(d,s){"use strict";var R=Object.defineProperty;var z=(d,s,h)=>s in d?R(d,s,{enumerable:!0,configurable:!0,writable:!0,value:h}):d[s]=h;var t=(d,s,h)=>z(d,typeof s!="symbol"?s+"":s,h);class h{constructor(r,e,i,n,o,a){t(this,"_brightnessStart");t(this,"_brightnessEnd");t(this,"_enabled");t(this,"_palette");this.p=r,this._fontManager=e,this._shader=i,this._characters=n,this._palette=new s.P5AsciifyColorPalette(this.p,this._fontManager.glyphColors(this._characters)),this._brightnessStart=Math.floor(o/255*100)/100,this._brightnessEnd=Math.ceil(a/255*100)/100,this._enabled=!0}setUniforms(r,e){this._shader.setUniform("textureID",r),this._shader.setUniform("originalTextureID",e),this._shader.setUniform("gradientTexture",this._palette.framebuffer),this._shader.setUniform("gradientTextureDimensions",[this._palette.colors.length,1]),this._shader.setUniform("u_brightnessRange",[this._brightnessStart,this._brightnessEnd]),this._shader.setUniform("frameCount",this.p.frameCount)}brightnessStart(r){this._brightnessStart=r}brightnessEnd(r){this._brightnessEnd=r}brightnessRange(r,e){this.brightnessStart(r),this.brightnessEnd(e)}characters(r){if(typeof r!="string")throw new s.P5AsciifyError("Characters must be a string.");this._fontManager.validateCharacters(r),this.palette.setColors(this._fontManager.glyphColors(r))}enabled(r){this._enabled=r}enable(){this.enabled(!0)}disable(){this.enabled(!1)}toggle(){this.enabled(!this._enabled)}isEnabled(){return this._enabled}get shader(){return this._shader}get palette(){return this._palette}}class _ extends h{constructor(e,i,n,o,a,u,l){super(e,i,n,o,a,u);t(this,"direction");t(this,"angle");t(this,"speed");t(this,"zigzag");this.p=e,this._fontManager=i,this._shader=n,this._characters=o,this.direction=l.direction,this.angle=l.angle,this.speed=l.speed,this.zigzag=l.zigzag}setUniforms(e,i){super.setUniforms(e,i),this._shader.setUniform("u_gradientDirection",this.direction),this._shader.setUniform("u_angle",this.angle*Math.PI/180),this._shader.setUniform("u_speed",this.speed),this._shader.setUniform("u_zigzag",this.zigzag)}}class p extends h{constructor(e,i,n,o,a,u,l){super(e,i,n,o,a,u);t(this,"direction");t(this,"centerX");t(this,"centerY");t(this,"speed");t(this,"density");this.p=e,this._fontManager=i,this._shader=n,this._characters=o,this.direction=l.direction,this.centerX=l.centerX,this.centerY=l.centerY,this.speed=l.speed,this.density=l.density}setUniforms(e,i){super.setUniforms(e,i),this._shader.setUniform("u_gradientDirection",this.direction),this._shader.setUniform("u_centerX",this.centerX),this._shader.setUniform("u_centerY",this.centerY),this._shader.setUniform("u_speed",this.speed),this._shader.setUniform("u_density",this.density)}}class x extends h{constructor(e,i,n,o,a,u,l){super(e,i,n,o,a,u);t(this,"direction");t(this,"centerX");t(this,"centerY");t(this,"radius");this.p=e,this._fontManager=i,this._shader=n,this._characters=o,this.direction=l.direction,this.centerX=l.centerX,this.centerY=l.centerY,this.radius=l.radius}setUniforms(e,i){super.setUniforms(e,i),this._shader.setUniform("u_gradientDirection",this.direction),this._shader.setUniform("u_centerX",this.centerX),this._shader.setUniform("u_centerY",this.centerY),this._shader.setUniform("u_radius",this.radius)}}class C extends h{constructor(e,i,n,o,a,u,l){super(e,i,n,o,a,u);t(this,"centerX");t(this,"centerY");t(this,"speed");this.p=e,this._fontManager=i,this._shader=n,this._characters=o,this.centerX=l.centerX,this.centerY=l.centerY,this.speed=l.speed}setUniforms(e,i){super.setUniforms(e,i),this._shader.setUniform("u_centerX",this.centerX),this._shader.setUniform("u_centerY",this.centerY),this._shader.setUniform("u_speed",this.speed)}}var f=`precision mediump float;

attribute vec3 aPosition;\r
attribute vec2 aTexCoord;

varying vec2 v_texCoord;

void main() {\r
    vec4 positionVec4 = vec4(aPosition, 1.0);

    positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

    gl_Position = positionVec4;

    v_texCoord = aTexCoord;\r
}`,T=`precision mediump float;
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
}`,D=`precision mediump float;

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
}`,y=`precision mediump float;

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
}`,S=`precision mediump float;

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
}`;class v{constructor(r,e){t(this,"_gradientParams",{linear:{direction:1,angle:0,speed:.01,zigzag:!1},spiral:{direction:1,centerX:.5,centerY:.5,speed:.01,density:.01},radial:{direction:1,centerX:.5,centerY:.5,radius:.5},conical:{centerX:.5,centerY:.5,speed:.01}});t(this,"_gradientShaderSources",{linear:T,spiral:D,radial:y,conical:S});t(this,"_gradientShaders",{});t(this,"_gradientConstructors",{linear:(r,e,i,n,o,a,u)=>new _(r,e,i,n,o,a,u),spiral:(r,e,i,n,o,a,u)=>new p(r,e,i,n,o,a,u),radial:(r,e,i,n,o,a,u)=>new x(r,e,i,n,o,a,u),conical:(r,e,i,n,o,a,u)=>new C(r,e,i,n,o,a,u)});t(this,"_gradients",[]);this._p=r,this._fontManager=e;for(const i of Object.keys(this._gradientShaderSources)){const n=this._gradientShaderSources[i];this._gradientShaders[i]=this._p.createShader(f,n)}}add(r,e,i,n,o){if(typeof r!="string")throw new s.P5AsciifyError("Gradient name must be a string");if(!this.gradientConstructors[r])throw new s.P5AsciifyError(`Gradient '${r}' does not exist! Available gradients: ${Object.keys(this.gradientConstructors).join(", ")}`);if(typeof i!="number")throw new s.P5AsciifyError("Brightness start value must be a number");if(typeof n!="number")throw new s.P5AsciifyError("Brightness end value must be a number");if(typeof e!="string")throw new s.P5AsciifyError("Characters must be a string");if(e.length===0)throw new s.P5AsciifyError("Characters string cannot be empty");if(!o||typeof o!="object"||Array.isArray(o))throw new s.P5AsciifyError("User parameters must be an object");const a=Object.keys(this.gradientParams[r]),u=Object.keys(o).filter(I=>!a.includes(I));if(u.length>0)throw new s.P5AsciifyError(`Invalid parameter(s) for gradient '${r}': ${u.join(", ")}
Valid parameters are: ${a.join(", ")}`);const l=this._gradientConstructors[r](this._p,this._fontManager,this._gradientShaders[r],e,i,n,{...this._gradientParams[r],...o});return this._gradients.push(l),l}remove(r){const e=this._gradients.indexOf(r);e>-1&&this._gradients.splice(e,1)}get gradientParams(){return this._gradientParams}get gradients(){return this._gradients}get gradientConstructors(){return this._gradientConstructors}}var F=`precision mediump float;

uniform sampler2D u_image; 
varying vec2 v_texCoord; 

void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    float luminance = 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;
    color.rgb = vec3(luminance);
    gl_FragColor = color;
}`,A=`precision mediump float;

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
}`,P=`precision mediump float;

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
}`,w=`precision mediump float;

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
}`,U=`precision mediump float;

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
}`;const g={enabled:!1,characterColor:"#FFFFFF",characterColorMode:"sampled",backgroundColor:"#000000",backgroundColorMode:"fixed",invertMode:!1,rotationAngle:0},G=()=>{if(typeof s.renderers.renderer2d.feature.P5AsciifyAbstractFeatureRenderer2D<"u")return s.renderers.renderer2d.feature.P5AsciifyAbstractFeatureRenderer2D;if(typeof window<"u"&&window.P5AsciifyAbstractFeatureRenderer2D)return window.P5AsciifyAbstractFeatureRenderer2D;throw console.error("P5AsciifyAbstractFeatureRenderer2D not found. Ensure p5.asciify is properly loaded."),new Error("`P5AsciifyAbstractFeatureRenderer2D` not found. Please ensure p5.asciify is loaded before this plugin.")};class b extends G(){constructor(e,i,n,o,a=g){const u={...g,...a};super(e,i,n,o,u);t(this,"grayscaleShader");t(this,"colorSampleShader");t(this,"grayscaleFramebuffer");t(this,"inversionShader");t(this,"rotationShader");t(this,"asciiCharacterShader");t(this,"prevAsciiGradientFramebuffer");t(this,"nextAsciiGradientFramebuffer");t(this,"gradientManager");this.gradientManager=new v(this._p,this._fontManager),this.grayscaleShader=this._p.createShader(f,F),this.colorSampleShader=this._p.createShader(f,A),this.inversionShader=this._p.createShader(f,P),this.rotationShader=this._p.createShader(f,w),this.asciiCharacterShader=this._p.createShader(f,U),this.grayscaleFramebuffer=this._p.createFramebuffer({density:1,width:this._grid.cols,height:this._grid.rows,depthFormat:this._p.UNSIGNED_INT,textureFiltering:this._p.NEAREST}),this.prevAsciiGradientFramebuffer=this._p.createFramebuffer({density:1,width:this._grid.cols,height:this._grid.rows,depthFormat:this._p.UNSIGNED_INT,textureFiltering:this._p.NEAREST}),this.nextAsciiGradientFramebuffer=this._p.createFramebuffer({density:1,width:this._grid.cols,height:this._grid.rows,depthFormat:this._p.UNSIGNED_INT,textureFiltering:this._p.NEAREST})}resizeFramebuffers(){super.resizeFramebuffers(),this.grayscaleFramebuffer.resize(this._grid.cols,this._grid.rows),this.prevAsciiGradientFramebuffer.resize(this._grid.cols,this._grid.rows),this.nextAsciiGradientFramebuffer.resize(this._grid.cols,this._grid.rows)}resetShaders(){}add(e,i,n,o,a={}){return this.gradientManager.add(e,o,i,n,a)}remove(e){this.gradientManager.remove(e)}render(){this.grayscaleFramebuffer.begin(),this._p.clear(),this._p.shader(this.grayscaleShader),this.grayscaleShader.setUniform("u_image",this._captureFramebuffer),this._p.rect(0,0,this._p.width,this._p.height),this.grayscaleFramebuffer.end(),this.prevAsciiGradientFramebuffer.begin(),this._p.clear(),this._p.image(this.grayscaleFramebuffer,-this._grid.cols/2,-this._grid.rows/2),this.prevAsciiGradientFramebuffer.end(),this.nextAsciiGradientFramebuffer.begin(),this._p.clear(),this._p.image(this.grayscaleFramebuffer,-this._grid.cols/2,-this._grid.rows/2),this.nextAsciiGradientFramebuffer.end();for(const e of this.gradientManager.gradients)e.isEnabled()&&([this.prevAsciiGradientFramebuffer,this.nextAsciiGradientFramebuffer]=[this.nextAsciiGradientFramebuffer,this.prevAsciiGradientFramebuffer],this.nextAsciiGradientFramebuffer.begin(),this._p.clear(),this._p.shader(e.shader),e.setUniforms(this.prevAsciiGradientFramebuffer,this.grayscaleFramebuffer),this._p.rect(0,0,this._grid.cols,this._grid.rows),this.nextAsciiGradientFramebuffer.end());this._characterFramebuffer.begin(),this._p.clear(),this._p.shader(this.asciiCharacterShader),this.asciiCharacterShader.setUniform("u_prevGradientTexture",this.grayscaleFramebuffer),this.asciiCharacterShader.setUniform("u_nextGradientTexture",this.nextAsciiGradientFramebuffer),this.asciiCharacterShader.setUniform("u_resolution",[this._grid.cols,this._grid.rows]),this._p.rect(0,0,this._grid.cols,this._grid.rows),this._characterFramebuffer.end(),this._primaryColorFramebuffer.begin(),this._p.clear(),this._p.shader(this.colorSampleShader),this.colorSampleShader.setUniform("u_sketchTexture",this._captureFramebuffer),this.colorSampleShader.setUniform("u_sampleTexture",this.nextAsciiGradientFramebuffer),this.colorSampleShader.setUniform("u_sampleReferenceTexture",this.grayscaleFramebuffer),this.colorSampleShader.setUniform("u_gridCellDimensions",[this._grid.cols,this._grid.rows]),this.colorSampleShader.setUniform("u_sampleMode",this._options.characterColorMode),this.colorSampleShader.setUniform("u_staticColor",this._options.characterColor._array),this._p.rect(0,0,this._p.width,this._p.height),this._primaryColorFramebuffer.end(),this._secondaryColorFramebuffer.begin(),this._p.clear(),this._p.shader(this.colorSampleShader),this.colorSampleShader.setUniform("u_sketchTexture",this._captureFramebuffer),this.colorSampleShader.setUniform("u_sampleTexture",this.nextAsciiGradientFramebuffer),this.colorSampleShader.setUniform("u_sampleReferenceTexture",this.grayscaleFramebuffer),this.colorSampleShader.setUniform("u_gridCellDimensions",[this._grid.cols,this._grid.rows]),this.colorSampleShader.setUniform("u_sampleMode",this._options.backgroundColorMode),this.colorSampleShader.setUniform("u_staticColor",this._options.backgroundColor._array),this._p.rect(0,0,this._p.width,this._p.height),this._secondaryColorFramebuffer.end(),this._transformFramebuffer.begin(),this._p.clear(),this._p.shader(this.inversionShader),this.inversionShader.setUniform("u_invert",this._options.invertMode),this.inversionShader.setUniform("u_gridCellDimensions",[this._grid.cols,this._grid.rows]),this.inversionShader.setUniform("u_sampleTexture",this.nextAsciiGradientFramebuffer),this.inversionShader.setUniform("u_sampleReferenceTexture",this.grayscaleFramebuffer),this._p.rect(0,0,this._p.width,this._p.height),this._transformFramebuffer.end(),this._rotationFramebuffer.begin(),this._p.clear(),this._p.shader(this.rotationShader),this.rotationShader.setUniform("u_rotationColor",this._options.rotationAngle._array),this.rotationShader.setUniform("u_gridCellDimensions",[this._grid.cols,this._grid.rows]),this.rotationShader.setUniform("u_sampleTexture",this.nextAsciiGradientFramebuffer),this.rotationShader.setUniform("u_sampleReferenceTexture",this.grayscaleFramebuffer),this._p.rect(0,0,this._p.width,this._p.height),this._rotationFramebuffer.end()}}const m={id:"pattern",name:"ASCII Pattern Renderer",description:"An ASCII pattern render that applies a pattern to a given brightness range in the texture that is captured.",version:"1.0.0",author:"humanbydefinition",create(c,r,e,i,n){return new b(c,r,e,i,n||g)}};typeof window<"u"&&(window.PatternRendererPlugin=m),typeof window<"u"&&(window.PatternRendererPlugin=m),d.P5AsciifyConicalGradient=C,d.P5AsciifyGradient=h,d.P5AsciifyGradientManager=v,d.P5AsciifyLinearGradient=_,d.P5AsciifyPatternRenderer=b,d.P5AsciifyRadialGradient=x,d.P5AsciifySpiralGradient=p,d.PatternRendererPlugin=m,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
