System.register(["./application.js"], function (_export, _context) {
  "use strict";

  var Application, canvas, parent, bounds, application;

  function topLevelImport(url) {
    return System.import(url);
  }

  return {
    setters: [function (_applicationJs) {
      Application = _applicationJs.Application;
    }],
    execute: function () {
      canvas = document.getElementById("GameCanvas");
      parent = canvas.parentElement;
      bounds = parent.getBoundingClientRect();
      canvas.width = bounds.width;
      canvas.height = bounds.height;
      application = new Application();

      topLevelImport("cc").then(function (engine) {
        return application.init(engine);
      }).then(function () {
        return application.start();
      }).catch(function (error) {
        console.error(error);
      });
    }
  };
});
