import { Amplify } from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import config from './src/aws-exports';

let awsconfig = {
  ...config,
  graphql_headers: async () => {
    const currentSession = await Auth.currentSession();
    return { Authorization: currentSession.getIdToken().getJwtToken() };
  }
}

Amplify.configure(config);
