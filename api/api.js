import app from './app';
import {apiPort, apiHost} from './../src/config';

if (apiPort) {

  app.listen(apiPort, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> 🌎  API is running on port %s', apiPort);
    console.info('==> 💻  Send requests to http://%s:%s', apiHost, apiPort);
  });
}
else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
