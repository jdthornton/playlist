import React from 'react';

import styles from './index.css';

const Loader = () =>
  <div className={styles.container}>
    <svg viewBox="0 0 135 140" fill="#d28273">
        <rect y="7%" width="11%" height="86%" rx="4%">
            <animate attributeName="height"
                 begin="0.5s" dur="1s"
                 values="86%;76%;71%;64%;57%;50%;43%;36%;29%;100%;86%" calcMode="linear"
                 repeatCount="indefinite" />
            <animate attributeName="y"
                 begin="0.5s" dur="1s"
                 values="7%;10.5%;14%;17.5%;21%;24.5%;28%;31.5%;35%;0%;7%" calcMode="linear"
                 repeatCount="indefinite" />
        </rect>
        <rect x="22%" y="7%" width="11%" height="86%" rx="4%">
            <animate attributeName="height"
                 begin="0.25s" dur="1s"
                 values="86%;76%;71%;64%;57%;50%;43%;36%;29%;100%;86%" calcMode="linear"
                 repeatCount="indefinite" />
            <animate attributeName="y"
                 begin="0.25s" dur="1s"
                 values="7%;10.5%;14%;17.5%;21%;24.5%;28%;31.5%;35%;0%;7%" calcMode="linear"
                 repeatCount="indefinite" />
        </rect>
        <rect x="44%" width="11%" height="100%" rx="4%">
            <animate attributeName="height"
                 begin="0s" dur="1s"
                 values="86%;76%;71%;64%;57%;50%;43%;36%;29%;100%;86%" calcMode="linear"
                 repeatCount="indefinite" />
            <animate attributeName="y"
                 begin="0s" dur="1s"
                 values="7%;10.5%;14%;17.5%;21%;24.5%;28%;31.5%;35%;0%;7%" calcMode="linear"
                 repeatCount="indefinite" />
        </rect>
        <rect x="66%" y="7%" width="11%" height="86%" rx="4%">
            <animate attributeName="height"
                 begin="0.25s" dur="1s"
                 values="86%;76%;71%;64%;57%;50%;43%;36%;29%;100%;86%" calcMode="linear"
                 repeatCount="indefinite" />
            <animate attributeName="y"
                 begin="0.25s" dur="1s"
                 values="7%;10.5%;14%;17.5%;21%;24.5%;28%;31.5%;35%;0%;7%" calcMode="linear"
                 repeatCount="indefinite" />
        </rect>
        <rect x="88%" y="7%" width="11%" height="86%" rx="4%">
            <animate attributeName="height"
                 begin="0.5s" dur="1s"
                 values="86%;76%;71%;64%;57%;50%;43%;36%;29%;100%;86%" calcMode="linear"
                 repeatCount="indefinite" />
            <animate attributeName="y"
                 begin="0.5s" dur="1s"
                 values="7%;10.5%;14%;17.5%;21%;24.5%;28%;31.5%;35%;0%;7%" calcMode="linear"
                 repeatCount="indefinite" />
        </rect>
    </svg>
  </div>


export default Loader;
