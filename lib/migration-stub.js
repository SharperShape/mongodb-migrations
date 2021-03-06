(function() {
  module.exports = function(id, coffeeScript) {
    if (coffeeScript) {
      return "module.exports.id = \"" + id + "\"\n\nmodule.exports.up = (done) ->\n  # use @db for MongoDB communication, and @log() for logging\n  done()\n\nmodule.exports.down = (done) ->\n  # use @db for MongoDB communication, and @log() for logging\n  done()";
    } else {
      return "module.exports.id = \"" + id + "\";\n\nmodule.exports.up = function (done) {\n  // use this.db for MongoDB communication, and this.log() for logging\n  done();\n};\n\nmodule.exports.down = function (done) {\n  // use this.db for MongoDB communication, and this.log() for logging\n  done();\n};";
    }
  };

}).call(this);
