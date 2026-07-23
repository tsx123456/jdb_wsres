System.register([], function (_export, _context) {
  "use strict";

  var cc, Application;

  return {
    setters: [],
    execute: function () {
      _export("Application", Application = function () {
        function Application() {
          this.settingsPath = "src/settings.json";
          this.showFPS = false;
        }

        Application.prototype.init = function (engine) {
          cc = engine;
          cc.game.onPostBaseInitDelegate.add(this.onPostInitBase.bind(this));
          cc.game.onPostSubsystemInitDelegate.add(this.onPostSystemInit.bind(this));
        };

        Application.prototype.onPostInitBase = function () {};
        Application.prototype.onPostSystemInit = function () {};

        Application.prototype.start = function () {
          return cc.game.init({
            debugMode: cc.DebugMode.ERROR,
            settingsPath: this.settingsPath,
            overrideSettings: {
              profiling: {
                showFPS: this.showFPS
              }
            }
          }).then(function () {
            return cc.game.run();
          });
        };

        return Application;
      }());
    }
  };
});
