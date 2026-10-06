import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/hooks/use-theme";

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isLight = theme === "light";

  const sceneContextRef = useRef<{
    scene: THREE.Scene;
    ribbonMaterial: THREE.MeshBasicMaterial;
    coreLineMaterial: THREE.LineBasicMaterial;
    wireMaterial: THREE.MeshBasicMaterial;
    starsMaterial: THREE.PointsMaterial;
    ringMaterials: THREE.MeshBasicMaterial[];
  } | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const bgFogColor = isLight ? 0xf8fafc : 0x02060d;
    scene.fog = new THREE.FogExp2(bgFogColor, isLight ? 0.048 : 0.055);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0.25, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.className = "absolute inset-0 h-full w-full";
    mount.insertBefore(renderer.domElement, mount.firstChild);

    const root = new THREE.Group();
    scene.add(root);

    const curve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-4.8, -1.5, -1.2),
        new THREE.Vector3(-2.2, 1.2, 0.8),
        new THREE.Vector3(0.2, -0.55, -0.6),
        new THREE.Vector3(2.2, 1.05, 0.4),
        new THREE.Vector3(4.7, -1.05, -1.1),
      ],
      true,
      "catmullrom",
      0.45,
    );

    // Smooth ribbon geometry with high radial segments for circular smoothness
    const ribbonGeometry = new THREE.TubeGeometry(curve, 260, 0.042, 20, true);
    const ribbonMaterial = new THREE.MeshBasicMaterial({
      color: isLight ? 0x10b981 : 0xb8ff5a,
      transparent: true,
      opacity: isLight ? 0.24 : 0.34,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
    });
    const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
    root.add(ribbon);

    // Glowing core spine line running through the ribbon
    const curvePoints = curve.getPoints(260);
    const coreLineGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const coreLineMaterial = new THREE.LineBasicMaterial({
      color: isLight ? 0x059669 : 0xb8ff5a,
      transparent: true,
      opacity: isLight ? 0.7 : 0.85,
    });
    const coreLine = new THREE.Line(coreLineGeometry, coreLineMaterial);
    root.add(coreLine);

    // Architectural wire knot
    const wireGeometry = new THREE.TorusKnotGeometry(1.4, 0.011, 240, 8, 2, 5);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: isLight ? 0x0284c7 : 0x7ce7ff,
      transparent: true,
      opacity: isLight ? 0.22 : 0.23,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
    });
    const wire = new THREE.Mesh(wireGeometry, wireMaterial);
    wire.position.set(2.8, -0.35, -1.8);
    wire.rotation.set(0.4, -0.6, 0.2);
    root.add(wire);

    // Constellation / particle field
    const starCount = 850;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const paletteDark = [
      new THREE.Color(0xb8ff5a),
      new THREE.Color(0x7ce7ff),
      new THREE.Color(0xfff4d6),
      new THREE.Color(0xff7d90),
    ];
    const paletteLight = [
      new THREE.Color(0x10b981),
      new THREE.Color(0x0284c7),
      new THREE.Color(0x6366f1),
      new THREE.Color(0xf59e0b),
    ];
    const palette = isLight ? paletteLight : paletteDark;

    for (let i = 0; i < starCount; i += 1) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 8.5;
      positions[i3 + 2] = (Math.random() - 0.5) * 12;

      const color = palette[i % palette.length];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const starsMaterial = new THREE.PointsMaterial({
      size: isLight ? 0.022 : 0.025,
      vertexColors: true,
      transparent: true,
      opacity: isLight ? 0.42 : 0.58,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite: false,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    root.add(stars);

    // Ambient floating icosahedron wireframes
    const ambient = new THREE.Group();
    const ringMaterials: THREE.MeshBasicMaterial[] = [];

    for (let i = 0; i < 3; i += 1) {
      const ringMat = new THREE.MeshBasicMaterial({
        color: isLight ? 0x0f172a : 0xffffff,
        transparent: true,
        opacity: isLight ? 0.03 : 0.055,
        wireframe: true,
      });
      ringMaterials.push(ringMat);

      const ring = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.2 + i * 0.7, 1),
        ringMat,
      );
      ring.position.set(-3.3 + i * 2.1, 1.15 - i * 0.55, -2.4 - i * 0.65);
      ring.rotation.set(i * 0.45, i * 0.2, -i * 0.35);
      ambient.add(ring);
    }
    root.add(ambient);

    sceneContextRef.current = {
      scene,
      ribbonMaterial,
      coreLineMaterial,
      wireMaterial,
      starsMaterial,
      ringMaterials,
    };

    const pointer = new THREE.Vector2(0, 0);
    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);

    let frame = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      root.rotation.y = elapsed * 0.045 + pointer.x * 0.045;
      root.rotation.x = Math.sin(elapsed * 0.34) * 0.055 - pointer.y * 0.035;
      ribbon.rotation.z = Math.sin(elapsed * 0.32) * 0.18;
      ribbon.position.y = Math.sin(elapsed * 0.42) * 0.16;
      coreLine.rotation.z = ribbon.rotation.z;
      coreLine.position.y = ribbon.position.y;
      wire.rotation.x += 0.0028;
      wire.rotation.y += 0.004;
      stars.rotation.y = elapsed * 0.018;
      stars.rotation.x = Math.sin(elapsed * 0.2) * 0.025;
      ambient.children.forEach((child, index) => {
        child.rotation.x += 0.0015 + index * 0.0005;
        child.rotation.y -= 0.001 + index * 0.00035;
      });

      camera.position.x += (pointer.x * 0.22 - camera.position.x) * 0.035;
      camera.position.y += (-pointer.y * 0.16 + 0.25 - camera.position.y) * 0.035;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      ribbonGeometry.dispose();
      ribbonMaterial.dispose();
      coreLineGeometry.dispose();
      coreLineMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      ringMaterials.forEach((rm) => rm.dispose());
      renderer.dispose();
    };
  }, []);

  // Dynamically update Three.js fog and materials when theme changes
  useEffect(() => {
    if (!sceneContextRef.current) return;
    const {
      scene,
      ribbonMaterial,
      coreLineMaterial,
      wireMaterial,
      starsMaterial,
      ringMaterials,
    } = sceneContextRef.current;

    if (isLight) {
      scene.fog = new THREE.FogExp2(0xf8fafc, 0.048);
      ribbonMaterial.color.setHex(0x10b981);
      ribbonMaterial.opacity = 0.24;
      ribbonMaterial.blending = THREE.NormalBlending;
      ribbonMaterial.needsUpdate = true;

      coreLineMaterial.color.setHex(0x059669);
      coreLineMaterial.opacity = 0.7;
      coreLineMaterial.needsUpdate = true;

      wireMaterial.color.setHex(0x0284c7);
      wireMaterial.opacity = 0.22;
      wireMaterial.blending = THREE.NormalBlending;
      wireMaterial.needsUpdate = true;

      starsMaterial.opacity = 0.42;
      starsMaterial.blending = THREE.NormalBlending;
      starsMaterial.needsUpdate = true;

      ringMaterials.forEach((rm) => {
        rm.color.setHex(0x0f172a);
        rm.opacity = 0.03;
        rm.needsUpdate = true;
      });
    } else {
      scene.fog = new THREE.FogExp2(0x02060d, 0.055);
      ribbonMaterial.color.setHex(0xb8ff5a);
      ribbonMaterial.opacity = 0.34;
      ribbonMaterial.blending = THREE.AdditiveBlending;
      ribbonMaterial.needsUpdate = true;

      coreLineMaterial.color.setHex(0xb8ff5a);
      coreLineMaterial.opacity = 0.85;
      coreLineMaterial.needsUpdate = true;

      wireMaterial.color.setHex(0x7ce7ff);
      wireMaterial.opacity = 0.23;
      wireMaterial.blending = THREE.AdditiveBlending;
      wireMaterial.needsUpdate = true;

      starsMaterial.opacity = 0.58;
      starsMaterial.blending = THREE.AdditiveBlending;
      starsMaterial.needsUpdate = true;

      ringMaterials.forEach((rm) => {
        rm.color.setHex(0xffffff);
        rm.opacity = 0.055;
        rm.needsUpdate = true;
      });
    }
  }, [isLight]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden transition-colors duration-700 ${
        isLight ? "bg-[#f8fafc]" : "bg-[#02060d]"
      }`}
    >
      {/* Blueprint grid */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isLight
            ? "opacity-[0.06] [background-image:linear-gradient(rgba(15,23,42,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.3)_1px,transparent_1px)] [background-size:64px_64px]"
            : "opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:72px_72px]"
        }`}
      />
      {/* Ambient gradient orbs */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isLight
            ? "bg-[radial-gradient(circle_at_20%_25%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_78%_22%,rgba(6,182,212,0.10),transparent_38%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.06),transparent_45%)]"
            : "bg-[radial-gradient(circle_at_22%_24%,rgba(184,255,90,0.12),transparent_28%),radial-gradient(circle_at_74%_18%,rgba(124,231,255,0.1),transparent_26%),linear-gradient(180deg,rgba(2,6,13,0.18),rgba(2,6,13,0.78))]"
        }`}
      />
      {/* Vignette */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isLight
            ? "bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(248,250,252,0.35)_100%)]"
            : "bg-[linear-gradient(90deg,rgba(2,6,13,0.86)_0%,rgba(2,6,13,0.28)_48%,rgba(2,6,13,0.84)_100%)]"
        }`}
      />
    </div>
  );
}
