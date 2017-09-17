import baseConfig from '../../tasks/config/base.config';
import webpackTestConfig from '../../tasks/config/webpack.test.babel.js';

import pathUtil from '../../tasks/utils/path.util';

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
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      './specs/**/*.spec.js'
    ],
    preprocessors: {
      './specs/**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: webpackTestConfig,
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['spec', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      dir: pathUtil.resolve(baseConfig.dir.test.unit)+ '/coverage',
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
      thresholds: {
        emitWarning: false,
        global: {
          statements: 80,
          lines: 80,
          branches: 80,
          functions: 80
        }
      }
    }
  });
};

export default karmaConfig;
