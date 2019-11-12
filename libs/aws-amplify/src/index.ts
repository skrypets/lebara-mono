import Amplify from '@aws-amplify/core';
import awsconfig from '../src/lib/aws-exports';
Amplify.configure(awsconfig);

export * from './lib/aws-amplify.module';
