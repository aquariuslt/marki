import webpackTestConf from '../../tasks/config/webpack.test.babel.js';

import puppeteerPkg from 'puppeteer/package.json';
import Downloader from 'puppeteer/utils/ChromiumDownloader.js';

const ChromiumRevision = puppeteerPkg['puppeteer']['chromium_revision'];
const revisionInfo = Downloader.revisionInfo(Downloader.currentPlatform(), ChromiumRevision);
process.env.CHROMIUM_BIN = revisionInfo.executablePath;

let karmaConfig = function (config) {
  config.set({
    browsers: [
      'ChromiumHeadless'
    ],
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      './specs/**/*.spec.ts'
    ],
    preprocessors: {
      './specs/**/*.spec.ts': ['webpack', 'sourcemap']
    },
    webpack: webpackTestConf,
    // webpackMiddleware: {
    //   noInfo: true,
    // },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [
        {type: 'lcovonly', subdir: '.'},
        {type: 'text-summary'}
      ]
    }
  });
};

export default karmaConfig;
