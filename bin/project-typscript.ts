#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { ProjectTypscriptStack } from '../lib/project-typscript-stack';

const app = new cdk.App();
new ProjectTypscriptStack(app, 'ProjectTypscriptStack');
