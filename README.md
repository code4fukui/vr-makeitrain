# vr-makeitrain

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A WebXR Augmented Reality experience where you can "make it rain" with various objects. This project uses Three.js to render objects with simple physics in your real-world environment via an AR-capable device.

## Demos

Experience different versions of the simulation. These are designed for AR and will request access to your device's camera.

-   **[Cards](https://code4fukui.github.io/vr-makeitrain/)**: Make it rain with playing cards.
-   **[Money](https://code4fukui.github.io/vr-makeitrain/money.html)**: Make it rain with 10,000 yen bills.
-   **[Bean Throwing (Right Hand)](https://code4fukui.github.io/vr-makeitrain/mamemaki.html)**: Toss beans, a practice from the Japanese Setsubun festival.
-   **[Bean Throwing (Left Hand)](https://code4fukui.github.io/vr-makeitrain/mamemaki-left.html)**: A left-handed version of the bean-throwing demo.
-   **[Shooter Test](https://code4fukui.github.io/vr-makeitrain/shooter.html)**: A test scene where you can shoot spheres with a single trigger press.

## Features

-   **WebXR AR Integration**: Built with the WebXR API for immersive augmented reality experiences (`immersive-ar`).
-   **Physics Simulation**: Objects fall with gravity and are affected by a simple wind/turbulence simulation.
-   **Controller Interaction**: Use your VR/AR controller to throw objects. A 3D hand model is attached to the controller for visualization.
-   **Multiple Object Types**: Demos feature different objects, including textured planes (cards, money) and spheres (beans).
-   **Right and Left Hand Support**: Includes separate demos configured for right- or left-handed interaction.

## How to Use

1.  Ensure you have a WebXR-compatible browser (like Chrome or Firefox) on an AR-capable device (e.g., Meta Quest, AR-enabled smartphone).
2.  Open one of the [demo links](#demos).
3.  Click the `ENTER XR` button to start the AR session. You may need to grant camera permissions.
4.  Use your controller's trigger or select button. Press and hold to continuously throw objects (or press once in the Shooter Test).
5.  Watch the objects interact with your environment and fall to the floor.

## Technical Details

-   **3D Engine**: Built with [Three.js](https://threejs.org/) (uses v0.111.0 and v0.149.0 across different demos).
-   **XR**: Utilizes the WebXR API to manage the AR session and controller inputs.
-   **3D Models**: Loads a hand model in `.obj` format.
-   **Assets**: Textures for cards and money are loaded as `.png` images.

## Credits and Attribution

-   This project is a fork of the original [vr-makeitrain on Glitch](https://vr-makeitrain.glitch.me/).
-   **3D Hand Model**: from [Google Poly](https://poly.google.com/view/btWmPNVSKUc).
-   **Card Texture**: from [Irasutoya](https://www.irasutoya.com/2017/05/cardback.html).