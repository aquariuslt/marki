import webpackTestConf from '../../tasks/config/webpack.test.babel';

import puppeteerPkg from 'puppeteer/package.json';
import Downloader from 'puppeteer/utils/ChromiumDownloader';

const ChromiumRevision = puppeteerPkg['puppeteer']['chromium_revision'];
const revisionInfo = Downloader.revisionInfo(Downloader.currentPlatform(), ChromiumRevision);
process.env.CHROMIUM_BIN = revisionInfo.executablePath;

let karmaConfig = function(config) {
  config.set({
    browsers: [
      'ChromiumHeadless'
    ],
    frameworks: ['mocha'],
    reporters: ['spec', 'coverage'],
    files: [
      './specs/**/*.spec.js'
    ],
    preprocessors: {
      './specs/**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: webpackTestConf,
    webpackMiddleware: {
      noInfo: true
    },
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
