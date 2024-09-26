uniform sampler2D uTexture;
uniform float uTime;
varying vec2 vUv;

void main() {
  vec2 center = vec2(0.5, 0.5);
  float dist = distance(vUv, center);

  // Apply a sinusoidal distortion based on the distance and time
  float ripple = sin((dist - uTime * 0.5) * 20.0) * 0.03;

  // Modify the texture coordinates using the ripple effect
  vec2 rippleUv = vUv + normalize(vUv - center) * ripple;

  // Sample the texture
  vec4 textureColor = texture2D(uTexture, rippleUv);

  gl_FragColor = textureColor;
}