# vr-makeitrain

WebXRを活用した拡張現実（AR）体験で、さまざまなオブジェクトを「雨のように降らせる（make it rain）」ことができます。このプロジェクトでは、Three.jsを使用し、AR対応デバイスを通じて現実世界の環境にシンプルな物理演算を適用したオブジェクトをレンダリングします。

## Demos

さまざまなバージョンのシミュレーションを体験できます。これらはAR向けに設計されており、デバイスのカメラへのアクセスを要求します。

-   **[Cards](https://code4fukui.github.io/vr-makeitrain/)**: トランプを雨のように降らせます。
-   **[Money](https://code4fukui.github.io/vr-makeitrain/money.html)**: 一万円札を雨のように降らせます。
-   **[Bean Throwing (Right Hand)](https://code4fukui.github.io/vr-makeitrain/mamemaki.html)**: 日本の節分の風習である豆まきを行います。
-   **[Bean Throwing (Left Hand)](https://code4fukui.github.io/vr-makeitrain/mamemaki-left.html)**: 左手用の豆まきデモです。
-   **[Shooter Test](https://code4fukui.github.io/vr-makeitrain/shooter.html)**: トリガーを1回押すことで球体を撃つことができるテストシーンです。

## Features

-   **WebXR AR Integration**: 没入型拡張現実体験（`immersive-ar`）のためにWebXR APIを使用して構築されています。
-   **Physics Simulation**: オブジェクトは重力で落下し、シンプルな風や乱流のシミュレーションの影響を受けます。
-   **Controller Interaction**: VR/ARコントローラーを使用してオブジェクトを投げます。視覚化のために、コントローラーには3Dの手のモデルがアタッチされています。
-   **Multiple Object Types**: デモには、テクスチャ付きの平面（カード、お金）や球体（豆）など、さまざまなオブジェクトが登場します。
-   **Right and Left Hand Support**: 右手用と左手用の操作に合わせて設定された個別のデモが含まれています。

## How to Use

1.  AR対応デバイス（例: Meta Quest、AR対応スマートフォン）で、WebXR対応ブラウザ（ChromeやFirefoxなど）を使用していることを確認します。
2.  [デモ](#demos)のリンクのいずれかを開きます。
3.  `ENTER XR` ボタンをクリックしてARセッションを開始します。カメラの権限を許可する必要がある場合があります。
4.  コントローラーのトリガーまたは選択ボタンを使用します。長押しすると連続してオブジェクトを投げます（シューターテストでは1回押します）。
5.  オブジェクトが環境と相互作用し、床に落ちる様子を観察します。

## Technical Details

-   **3D Engine**: [Three.js](https://threejs.org/)を使用して構築されています（デモによってv0.111.0およびv0.149.0を使用）。
-   **XR**: WebXR APIを利用して、ARセッションとコントローラーの入力を管理します。
-   **3D Models**: `.obj`形式の手のモデルを読み込みます。
-   **Assets**: カードやお金のテクスチャは`.png`画像として読み込まれます。

## Credits and Attribution

-   このプロジェクトは、Glitch上のオリジナルの[vr-makeitrain](https://vr-makeitrain.glitch.me/)をフォークしたものです。
-   **3D Hand Model**: [Google Poly](https://poly.google.com/view/btWmPNVSKUc)より。
-   **Card Texture**: [いらすとや](https://www.irasutoya.com/2017/05/cardback.html)より。
