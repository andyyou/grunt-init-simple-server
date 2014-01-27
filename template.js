'use strict'

/************************************
  Parse gitconfig to object 
  ex: gitconfig.user.name 
*************************************/

var regex = {
  section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
  param: /^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/,
  comment: /^\s*;.*$/
};

var parse = function (data) {
  var lines, section, value;
  value = {};
  lines = data.split(/\r\n|\r|\n/);
  section = null;
  for (var _i=0, _len=lines.length; _i<_len; _i++) {
    var line = lines[_i], match;
    if (regex.comment.test(line)) {

    } else if (regex.param.test(line)) {
      match = line.match(regex.param);
      if (section) {
        value[section][match[1]] = match[2];
      } else {
        value[match[1]] = match[2];
      }
    } else if (regex.section.test(line)) {
      match = line.match(regex.section);
      value[match[1]] = {};
      section = match[1];
    } else if (line.length == 0 && section) {
      section = null;
    }
  }
  return value;
}

/* test
 var gitconfig = parse("[color]\r\n ui = true\r\n[alias]\r\n co = checkout\r\n[user]\r\nname=AndyYou");
 console.log(gitconfig.alias.co);
*/

exports.description = "Create a simple server to exists project";
exports.notes = "It\'s will create a simple server on project !!";
exports.warnOn = ['Gruntfile.js', 'Gruntfile.coffee'];

exports.template = function (grunt, init, done) {
  var gitconfig = parse(grunt.file.read(process.env.HOME + "/.gitconfig"));
  init.process(
    {type: 'simple server'},
    [
      init.prompt('name'),
      init.prompt('description', 'N/A'),
      init.prompt('version','0.0.0'),
      init.prompt('licenses', 'MIT'),
      init.prompt('author_name', gitconfig.user.name),
      init.prompt('author_email', gitconfig.user.email)
    ],
    function (err, props) {
      var files = init.filesToCopy(props);
      init.addLicenseFiles(files, props.licenses);
      init.copyAndProcess(files, props);

      // Generate package.json
      
      done();
    }
  );

}



