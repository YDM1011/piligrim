const glob = require('glob');

module.exports = function (backendApp) {

  let apiControllers = glob.sync(backendApp.config.root+'/services/controll/*.js');

  apiControllers.forEach((controller) => {
      let path = controller.split('/');
      let file;
      if (path) {
          file = path[path.length-1];
          file = file.split(".")[0]
      }
      backendApp.service[file] = require(controller)(backendApp);
  });
};
