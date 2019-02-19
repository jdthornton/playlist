export const renderHeader = (helmet) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <link rel="icon" type="image/png" href="/favicon.ico" />
            <link rel="manifest" href="/manifest.json">
            <style>
              html, body, #root, #root>div {
                height: 100%
              }
              body {
                margin: 0;
              }
              ul {
                  list-style: none;
                  margin: 0;
                  padding: 0;
              }
              a {
                text-decoration: none;
              }
              a:hover {
                text-decoration: none;
              }
              input:focus {
                  outline: none;
              }
              .container {
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #3e3e3e;
                overflow: hidden;
              }
              .portal {
                background-color: #a6c580;
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                align-items: center;
                justify-content: space-between;
                position: relative;
                transform-style: preserve-3d;
                transition: background-color 0.35s linear;
                transition: transform 0.5s;
                max-height: 100%;
              }
              .outer {
                perspective: 100px;
                height: 100%;
                max-height: 100%;
              }
              .portal.sketch {
                background-color: #a6c580;
              }
              .portal.cornerstone {
                background-color: #8ac1bf;
              }
              .portal.playlist {
                background-color: #d09e94;
              }
              .app {
                background-color: white;
                box-shadow: 0 -7px 18px rgba(0,0,0,0.17), 0 -4px 5px rgba(0,0,0,0.20);
                height: 150px;
                width: 100%;
              }
              .info {
                font-size: 12px;
                line-height: 31px;
                margin-top: 20px;
              }
              .info span {
                background-color: #fff;
                color: #a6c580;
                padding: 3px;
                border-radius: 4px;
                margin-right: 4px;
              }
              .info.sketch span {
                color: #a6c580;
              }
              .info.cornerstone span {
                color: #8ac1bf;
              }
              .info.playlist span {
                color: #d09e94;
              }
              .title {
                text-transform: capitalize;
                margin-top: 0;
                margin-bottom: 14px;
                font-size: 40px;
              }
              .links {
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-family: 'Roboto', sans-serif;
                color: #fff;
                flex-grow: 1;
                text-transform: capitalize;
                padding: 0;
              }
              .portal a {
                color: white;
                text-decoration: none;
              }
              .links span {
                font-size: 14px;
                color: white;
                text-decoration: none;
                transition: font-size 0.35s ease-out;
                display: block;
                cursor: pointer;
                text-shadow:
                             0 1px 0 #aaa,
                             0 1px 1px rgba(0,0,0,.1),
                             0 0 2px rgba(0,0,0,.1),
                             0 1px 1px rgba(0,0,0,.22),
                             0 1px 3px rgba(0,0,0,.2),
                             0 1px 4px rgba(0,0,0,.3);
              }
              .links .active {
                font-size: 18px;
              }
              .sun {
                background-color: #f9f9f9;
                border-radius: 50%;
                width: 75px;
                height: 75px;
                flex: 0 0 75px;
                box-shadow: 2px -7px 18px rgba(0,0,0,0.19), 1px -4px 5px rgba(0,0,0,0.23);
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                font-family: 'Roboto', sans-serif;
                color: #777;
                cursor: pointer;
              }
              .name {
                font-size: 8px;
                font-weight: bold;
              }
              .profession {
                font-size: 6px;
              }
              .github {
                font-weight: bold;
                color: #fff;
                text-decoration: none;
                font-family: 'Roboto', sans-serif;
              }
              .header {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                width: 100%;
                padding: 8px;
              }
              .description {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-size: 16px;
                font-family: 'Roboto', sans-serif;
                padding: 0 25px;
                color: #fff;
              }
              .actions {
                flex-grow: 0;
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: baseline;
                position: relative;
                padding: 20px;
                box-sizing: border-box;
              }
              .button {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-left: 50px;
                box-sizing: border-box;
              }
              .button span {
                margin-top: 4px;
                font-size: 12px;
              }
              .button svg,.button img {
                width: 42px;
                height: 42px;
              }
              @media (max-width:765px) AND (orientation: landscape){
                .info {
                  font-size: 10px;
                  line-height: 18px;
                  margin-top: 8px;
                }
              }
              @media (min-width: 768px) and (max-width: 1024px) {
                .outer {
                  height: auto;
                }
                .portal {
                  height: 550px;
                  width: 400px;
                }
              }
              @media (min-width: 1025px){
                .outer {
                  height: auto;
                }
                .portal {
                  width: 460px;
                  box-shadow: 5px 11px 26px rgba(0,0,0,0.30), 4px 7px 12px rgba(0,0,0,0.22), 1px -3px 5px rgba(0,0,0,0.1), 3px -3px 5px rgba(0,0,0,0.15);
                  border-radius: 12px;
                  height: 95vh;
                }
                .header {
                  padding: 15px 20px;
                }
                .links {
                  padding: 0 10px;
                }
                .links .active {
                  font-size: 28px;
                  font-weight: normal;
                }
                .description {
                  font-size: 17px;
                  padding: 0 44px;
                }
                .title {
                  font-size: 42px;
                }
                .sun {
                  width: 95px;
                  height: 95px;
                  flex: 0 0 95px;
                }
                .name {
                  font-size: 13px;
                }
                .profession {
                  font-size: 10px;
                }
                .button svg,.button img {
                  width: 38px;
                  height: 38px;
                }
                .actions {
                  padding: 30px 50px;
                }
              }
              @media (min-width: 1440px){
                .portal {
                  width: 516px;
                  height: 78vh;
                }
                .title {
                  font-size: 46px;
                }
                .links {
                  padding: 0;
                }
                .links span {
                  font-size: 15px;
                }
                .links .active {
                  font-size: 27px;
                }
                .sun {
                  width: 105px;
                  height: 105px;
                  flex: 0 0 105px;
                }
                .description {
                  font-size: 22px;
                  padding: 0 25px;
                }
                .actions {
                  padding: 50px;
                  font-size: 18px;
                }
                .button {
                  font-size: 14px;
                  font-weight: bold;
                }
                .button svg,.button img {
                  width: 40px;
                  height: 40px;
                }
              }
            </style>
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="root">
`;

export const renderFooter = (loadable, preloadedState) => `
            </div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script>
            (function() {
              if('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/serviceWorker.js');
              }
            })();
            </script>
            ${loadable.getScriptTags()}
            ${loadable.getStyleTags()}
            <noscript>Your browser does not support JavaScript!</noscript>
        </body>
    </html>

`;
