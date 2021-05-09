import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';

export class ProjectTypscriptStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'CDKVPC', {
      cidr: "10.0.0.0/16",
      maxAzs: 2,
      natGateways: 0,
    });
    
    const ec2instance = new ec2.Instance(this,'CDKEC2Instance', {instanceType:new ec2.InstanceType('t2.micro'),
      machineImage:new ec2.LookupMachineImage({name:'amzn2-ami-hvm-2.0.20210421.0-x86_64-gp2'}),
      vpc: vpc
    })
    
  }
}
