#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { ProjectTypscriptStack } from '../lib/project-typscript-stack';
const envUSA = { account: '326703389397', region: 'us-east-1' };

const app = new cdk.App();
new ProjectTypscriptStack(app, 'ProjectTypscriptStack',{env: envUSA});
