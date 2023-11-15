/**
 * @author mrdoob / http://mrdoob.com
 * @author Mugen87 / https://github.com/Mugen87
 * @author taisukef / https://github.com/taisukef
 */

// base code https://unpkg.com/three@0.111.0/examples/jsm/webxr/VRButton.js

class XRButton {

	static createButton(renderer) {
		let button;

		function showEnterXR() {

			let currentSession = null;

			async function onSessionStarted(session) {

				session.addEventListener( 'end', onSessionEnded );

        // https://developer.mozilla.org/ja/docs/Web/API/XRSession/requestReferenceSpace
        //await session.requestReferenceSpace("local");
				//renderer.xr.setReferenceSpaceType("local"); // for immersive-ar?

				await renderer.xr.setSession(session);
				button.textContent = 'EXIT XR';
        //session.isImmersive = true;
        
				currentSession = session;
			}

			function onSessionEnded( /*event*/ ) {

				currentSession.removeEventListener( 'end', onSessionEnded );

				button.textContent = 'ENTER XR';

				currentSession = null;

			}

			//

			button.style.display = '';

			button.style.cursor = 'pointer';
			button.style.left = 'calc(50% - 50px)';
			button.style.width = '100px';

			button.textContent = 'ENTER XR';

			button.onmouseenter = function () {

				button.style.opacity = '1.0';

			};

			button.onmouseleave = function () {

				button.style.opacity = '0.5';

			};

			button.onclick = function () {

				if ( currentSession === null ) {

					// WebXR's requestReferenceSpace only works if the corresponding feature
					// was requested at session creation time. For simplicity, just ask for
					// the interesting ones as optional features, but be aware that the
					// requestReferenceSpace call will fail if it turns out to be unavailable.
					// ('local' is always available for immersive sessions and doesn't need to
					// be requested separately.)

					const sessionInit = { optionalFeatures: [ 'local-floor', 'bounded-floor' ] };
					//const sessionInit = { optionalFeatures: [ 'local-floor', 'bounded-floor', 'hand-tracking', 'layers' ] };
					//navigator.xr.requestSession( 'immersive-vr', sessionInit ).then( onSessionStarted );
					navigator.xr.requestSession( 'immersive-ar', sessionInit ).then( onSessionStarted );
				} else {

					currentSession.end();

				}

			};

		}

		function disableButton() {

			button.style.display = '';

			button.style.cursor = 'auto';
			button.style.left = 'calc(50% - 75px)';
			button.style.width = '150px';

			button.onmouseenter = null;
			button.onmouseleave = null;

			button.onclick = null;

		}

		function showXRNotFound() {

			disableButton();

			button.textContent = 'XR NOT FOUND';

		}

		function stylizeElement( element ) {

			element.style.position = 'absolute';
			element.style.bottom = '20px';
			element.style.padding = '12px 6px';
			element.style.border = '1px solid #fff';
			element.style.borderRadius = '4px';
			element.style.background = 'rgba(0,0,0,0.1)';
			element.style.color = '#fff';
			element.style.font = 'normal 13px sans-serif';
			element.style.textAlign = 'center';
			element.style.opacity = '0.5';
			element.style.outline = 'none';
			element.style.zIndex = '999';

		}

		if ( 'xr' in navigator ) {

			button = document.createElement( 'button' );
			button.style.display = 'none';

			stylizeElement( button );

			navigator.xr.isSessionSupported( 'immersive-vr' ).then( function ( supported ) {

				if ( supported ) {

					showEnterXR();

					/*
					if (XRButton.xrSessionIsGranted) {
						button.click();
					}
					*/

				} else {

					showXRNotFound();

				}

			} );
			return button;
		} else {

			const message = document.createElement( 'a' );
			message.href = 'https://immersive-web.github.io/webxr/';
			message.innerHTML = 'WEBXR NOT SUPPORTED';

			message.style.left = 'calc(50% - 90px)';
			message.style.width = '180px';
			message.style.textDecoration = 'none';

			stylizeElement( message );

			return message;

		}

	}
	/*
	static xrSessionIsGranted = false;

	static registerSessionGrantedListener() {

		if ( 'xr' in navigator ) {

			// WebXRViewer (based on Firefox) has a bug where addEventListener
			// throws a silent exception and aborts execution entirely.
			if ( /WebXRViewer\//i.test( navigator.userAgent ) ) return;

			navigator.xr.addEventListener( 'sessiongranted', () => {

				XRButton.xrSessionIsGranted = true;

			} );

		}

	}
	*/
};

//XRButton.registerSessionGrantedListener();

export { XRButton };
