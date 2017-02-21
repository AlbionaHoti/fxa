#!/usr/bin/env node

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable no-console */
var path = require('path'),
  spawn = require('child_process').spawn

var COVERAGE_ARGS = ['--coverage', '--cov']
if (process.env.NO_COVERAGE) {
  COVERAGE_ARGS = []
}

spawn(path.join(path.dirname(__dirname), 'node_modules', '.bin', 'tap'),
  process.argv.slice(2).concat(COVERAGE_ARGS), { stdio: 'inherit', env: process.env })