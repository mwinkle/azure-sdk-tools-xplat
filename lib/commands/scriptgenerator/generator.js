/*** Generated by streamline 0.4.5 (callbacks) - DO NOT EDIT ***/ var __rt=require('streamline/lib/callbacks/runtime').runtime(__filename),__func=__rt.__func,__cb=__rt.__cb; var fs = require("fs");
var path = require("path");
var utils = require("../../utils");

if (!fs.existsSync) {
  fs.existsSync = path.existsSync;};


var templatesDir = __dirname;
var log = { info: function() {  }};
var confirm = function() { return false;};

var ScriptType = {
  batch: "BATCH",
  bash: "BASH"};


var ProjectType = {
  wap: "WAP",
  website: "WEBSITE",
  node: "NODE",
  basic: "BASIC"};


exports.ScriptType = ScriptType;
exports.ProjectType = ProjectType;

function ScriptGenerator(repositoryRoot, projectType, projectPath, solutionPath, sitePath, scriptType, noDotDeployment, logger, confirmFunc) {
  argNotNull(repositoryRoot, "repositoryRoot");
  argNotNull(projectType, "projectType");
  argNotNull(scriptType, "scriptType");
  argNotNull(sitePath, "sitePath");

  scriptType = scriptType.toUpperCase();
  if (((scriptType !== ScriptType.batch) && (scriptType !== ScriptType.bash))) {
    throw new Error("Script type should be either batch or bash"); };

  this.scriptType = scriptType;

  log = (logger || log);
  confirm = (confirmFunc || confirm);

  if (projectPath) {
    if (!isPathSubDir(repositoryRoot, projectPath)) {
      throw new Error("The project file path should be a sub-directory of the repository root"); } ;


    var relativeProjectPath = path.relative(repositoryRoot, projectPath);
    log.info((("Project file path: ." + path.sep) + relativeProjectPath));
    this.projectPath = relativeProjectPath; };


  if (solutionPath) {
    if (!isPathSubDir(repositoryRoot, solutionPath)) {
      throw new Error("The solution file path should be the same as repository root or a sub-directory of it."); } ;


    var relativeSolutionPath = path.relative(repositoryRoot, solutionPath);
    log.info((("Solution file path: ." + path.sep) + relativeSolutionPath));
    this.solutionPath = relativeSolutionPath; };


  if (!isPathSubDir(repositoryRoot, sitePath)) {
    throw new Error("The site directory path should be the same as repository root or a sub-directory of it."); };


  var relativeSitePath = path.relative(repositoryRoot, sitePath);
  if (relativeSitePath) {
    relativeSitePath = (path.sep + relativeSitePath);
    log.info(("The site directory path: ." + relativeSitePath)); };

  this.sitePath = (relativeSitePath || "");

  projectType = projectType.toUpperCase();

  this.repositoryRoot = repositoryRoot;
  this.projectType = projectType;
  this.noDotDeployment = noDotDeployment;
  this.absoluteSitePath = path.join(this.repositoryRoot, this.sitePath);

  this.generators = [];
  this.generators[ProjectType.wap] = generateWapDeploymentScript;
  this.generators[ProjectType.website] = generateWebSiteDeploymentScript;
  this.generators[ProjectType.node] = generateNodeDeploymentScript;
  this.generators[ProjectType.basic] = generateBasicWebSiteDeploymentScript;};


function generateWapDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateWapDeploymentScript", line: 88 }; return __func(_, this, arguments, generateWapDeploymentScript, 1, __frame, function __$generateWapDeploymentScript() {
    return scriptGenerator.generateWapDeploymentScript(__cb(_, __frame, 1, 4, _, true)); });};


function generateWebSiteDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateWebSiteDeploymentScript", line: 92 }; return __func(_, this, arguments, generateWebSiteDeploymentScript, 1, __frame, function __$generateWebSiteDeploymentScript() {
    return scriptGenerator.generateWebSiteDeploymentScript(__cb(_, __frame, 1, 4, _, true)); });};


function generateNodeDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateNodeDeploymentScript", line: 96 }; return __func(_, this, arguments, generateNodeDeploymentScript, 1, __frame, function __$generateNodeDeploymentScript() {
    return scriptGenerator.generateNodeDeploymentScript(__cb(_, __frame, 1, 4, _, true)); });};


function generateBasicWebSiteDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateBasicWebSiteDeploymentScript", line: 100 }; return __func(_, this, arguments, generateBasicWebSiteDeploymentScript, 1, __frame, function __$generateBasicWebSiteDeploymentScript() {
    if (scriptGenerator.solutionPath) {
      return _(new Error("Solution path is not supported with this website type")); } ;

    return scriptGenerator.generateWebSiteDeploymentScript(__cb(_, __frame, 4, 4, _, true)); });};


ScriptGenerator.prototype.generateDeploymentScript = function ScriptGenerator_prototype_generateDeploymentScript__1(_) { var generator, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateDeploymentScript__1", line: 107 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateDeploymentScript__1, 0, __frame, function __$ScriptGenerator_prototype_generateDeploymentScript__1() {
    generator = __this.generators[__this.projectType];
    if (!generator) {
      return _(new Error(("Invalid project type received: " + __this.projectType))); } ;


    return generator(__this, __cb(_, __frame, 6, 4, _, true)); });};


function isPathSubDir(parentPath, childPath) {
  var relativePath = path.relative(parentPath, childPath);




  return ((relativePath.indexOf("..") != 0) && (relativePath != path.resolve(childPath)));};



ScriptGenerator.prototype.generateNodeDeploymentScript = function ScriptGenerator_prototype_generateNodeDeploymentScript__2(_) { var __this = this; var __frame = { name: "ScriptGenerator_prototype_generateNodeDeploymentScript__2", line: 126 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateNodeDeploymentScript__2, 0, __frame, function __$ScriptGenerator_prototype_generateNodeDeploymentScript__2() {
    createIisNodeWebConfigIfNeeded(__this.absoluteSitePath);
    return utils.copyIisNodeWhenServerJsPresent(log, __this.absoluteSitePath, __cb(_, __frame, 2, 4, function __$ScriptGenerator_prototype_generateNodeDeploymentScript__2() {

      return __this.generateBasicDeploymentScript("node.template", __cb(_, __frame, 4, 4, _, true)); }, true)); });};


function getNodeStartFile(sitePath) {
  var nodeStartFiles = ["server.js","app.js",];

  for (var i in nodeStartFiles) {
    var nodeStartFilePath = path.join(sitePath, nodeStartFiles[i]);

    if (fs.existsSync(nodeStartFilePath)) {
      return nodeStartFiles[i]; } ; };



  return null;};


function createIisNodeWebConfigIfNeeded(sitePath) {
  var webConfigPath = path.join(sitePath, "web.config");

  log.info("Generating deployment script for node.js Web Site");

  if (!fs.existsSync(webConfigPath)) {
    log.info("Creating Web.config to enable Node.js activation.");

    var nodeStartFilePath = getNodeStartFile(sitePath);
    if (!nodeStartFilePath) {
      throw new Error("Missing server.js/app.js file which is required for a node.js site"); } ;


    var webConfigContent = getTemplateContent("iisnode.config.template");
    webConfigContent = webConfigContent.replace(/{NodeStartFile}/g, nodeStartFilePath);

    writeContentToFile(webConfigPath, webConfigContent); };};



ScriptGenerator.prototype.generateWapDeploymentScript = function ScriptGenerator_prototype_generateWapDeploymentScript__3(_) { var msbuildArguments, solutionDir, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateWapDeploymentScript__3", line: 167 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateWapDeploymentScript__3, 0, __frame, function __$ScriptGenerator_prototype_generateWapDeploymentScript__3() {
    argNotNull(__this.projectPath, "projectPath");

    if ((__this.scriptType != ScriptType.batch)) {
      return _(new Error("Only batch script files are supported for .NET Web Application")); } ;


    log.info("Generating deployment script for .NET Web Application");

    msbuildArguments = (("\"%DEPLOYMENT_SOURCE%\\" + __this.projectPath) + "\" /nologo /verbosity:m /t:pipelinePreDeployCopyAllFilesToOneFolder /p:_PackageTempDir=\"%DEPLOYMENT_TEMP%\";AutoParameterizationWebConfigConnectionStrings=false;Configuration=Release");

    if ((__this.solutionPath != null)) {
      solutionDir = path.dirname(__this.solutionPath);
      msbuildArguments += ((" /p:SolutionDir=\"%DEPLOYMENT_SOURCE%\\" + solutionDir) + "\""); } ;


    return __this.generateDotNetDeploymentScript("deploy.batch.aspnet.wap.template", msbuildArguments, __cb(_, __frame, 16, 4, _, true)); });};


ScriptGenerator.prototype.generateWebSiteDeploymentScript = function ScriptGenerator_prototype_generateWebSiteDeploymentScript__4(_) { var msbuildArguments, packageJsonFilePath, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateWebSiteDeploymentScript__4", line: 186 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateWebSiteDeploymentScript__4, 0, __frame, function __$ScriptGenerator_prototype_generateWebSiteDeploymentScript__4() { return (function __$ScriptGenerator_prototype_generateWebSiteDeploymentScript__4(__then) {
      if (__this.solutionPath) {

        log.info("Generating deployment script for .NET Web Site");

        if ((__this.scriptType != ScriptType.batch)) {
          return _(new Error("Only batch script files are supported for .NET Web Site")); } ;


        msbuildArguments = (("\"%DEPLOYMENT_SOURCE%\\" + __this.solutionPath) + "\" /verbosity:m /nologo");
        return __this.generateDotNetDeploymentScript("deploy.batch.aspnet.website.template", msbuildArguments, __cb(_, __frame, 10, 8, __then, true)); } else {



        packageJsonFilePath = path.join(__this.absoluteSitePath, "package.json"); return (function __$ScriptGenerator_prototype_generateWebSiteDeploymentScript__4(__then) {
          if (fs.existsSync(packageJsonFilePath)) {

            return __this.generateBasicDeploymentScript("node.template", __cb(_, __frame, 17, 12, __then, true)); } else {



            return __this.generateBasicDeploymentScript("basic.template", __cb(_, __frame, 21, 12, __then, true)); } ; })(__then); } ; })(_); });};




ScriptGenerator.prototype.generateBasicDeploymentScript = function ScriptGenerator_prototype_generateBasicDeploymentScript__5(templateFileName, _) { var lowerCaseScriptType, templateContent, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateBasicDeploymentScript__5", line: 212 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateBasicDeploymentScript__5, 1, __frame, function __$ScriptGenerator_prototype_generateBasicDeploymentScript__5() {
    argNotNull(templateFileName, "templateFileName");

    log.info("Generating deployment script for Web Site");

    lowerCaseScriptType = __this.scriptType.toLowerCase();





    templateContent = getTemplatesContent([(("deploy." + lowerCaseScriptType) + ".prefix.template"),((("deploy." + lowerCaseScriptType) + ".") + templateFileName),(("deploy." + lowerCaseScriptType) + ".postfix.template"),]).replace(/{SitePath}/g, __this.sitePath);

    return __this.writeDeploymentFiles(templateContent, __cb(_, __frame, 13, 4, _, true)); });};


ScriptGenerator.prototype.generateDotNetDeploymentScript = function ScriptGenerator_prototype_generateDotNetDeploymentScript__6(templateFileName, msbuildArguments, _) { var templateContent, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateDotNetDeploymentScript__6", line: 228 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateDotNetDeploymentScript__6, 2, __frame, function __$ScriptGenerator_prototype_generateDotNetDeploymentScript__6() {
    argNotNull(templateFileName, "templateFileName");








    templateContent = getTemplatesContent(["deploy.batch.prefix.template","deploy.batch.aspnet.template",templateFileName,"deploy.batch.postfix.template",]).replace(/{MSBuildArguments}/g, msbuildArguments).replace(/{SitePath}/g, __this.sitePath);

    return __this.writeDeploymentFiles(templateContent, __cb(_, __frame, 12, 4, _, true)); });};


function getTemplatesContent(fileNames) {
  var content = "";

  for (var i in fileNames) {
    content += getTemplateContent(fileNames[i]); };


  return content;};


ScriptGenerator.prototype.writeDeploymentFiles = function ScriptGenerator_prototype_writeDeploymentFiles__7(templateContent, _) { var deployScriptFileName, deploymentCommand, deployScriptPath, deploymentFilePath, __this = this; var __frame = { name: "ScriptGenerator_prototype_writeDeploymentFiles__7", line: 253 }; return __func(_, this, arguments, ScriptGenerator_prototype_writeDeploymentFiles__7, 1, __frame, function __$ScriptGenerator_prototype_writeDeploymentFiles__7() {
    argNotNull(templateContent, "templateContent");



    if ((__this.scriptType == ScriptType.batch)) {
      deployScriptFileName = "deploy.cmd";
      deploymentCommand = deployScriptFileName; }

     else {
      deployScriptFileName = "deploy.sh";
      deploymentCommand = ("bash " + deployScriptFileName); } ;


    deployScriptPath = path.join(__this.repositoryRoot, deployScriptFileName);
    deploymentFilePath = path.join(__this.repositoryRoot, ".deployment");


    return writeContentToFile(deployScriptPath, templateContent, __cb(_, __frame, 18, 4, function __$ScriptGenerator_prototype_writeDeploymentFiles__7() { return (function __$ScriptGenerator_prototype_writeDeploymentFiles__7(__then) {

        if (!__this.noDotDeployment) {

          return writeContentToFile(deploymentFilePath, ("[config]\ncommand = " + deploymentCommand), __cb(_, __frame, 22, 8, __then, true)); } else { __then(); } ; })(function __$ScriptGenerator_prototype_writeDeploymentFiles__7() {


        log.info("Generated deployment script files"); _(); }); }, true)); });};


function getTemplateContent(templateFileName) {
  return fs.readFileSync(getTemplatePath(templateFileName), "utf8");};


function getTemplatePath(fileName) {
  return path.join(templatesDir, fileName);};


function writeContentToFile(path, content, _) { var __frame = { name: "writeContentToFile", line: 289 }; return __func(_, this, arguments, writeContentToFile, 2, __frame, function __$writeContentToFile() { return (function __$writeContentToFile(__then) {

      if (fs.existsSync(path)) {
        return confirm((("The file: \"" + path) + "\" already exists\nAre you sure you want to overwrite it (y/n): "), __cb(_, __frame, 3, 13, function ___(__0, __2) { var __1 = !__2; return (function __$writeContentToFile(__then) { if (__1) { return _(null); } else { __then(); } ; })(__then); }, true)); } else { __then(); } ; })(function __$writeContentToFile() {





      return fs.writeFile(path, content, __cb(_, __frame, 9, 4, _, true)); }); });};


function argNotNull(arg, argName) {
  if (((arg === null) || (arg === undefined))) {
    throw new Error((("The argument \"" + argName) + "\" is null")); };};



exports.ScriptGenerator = ScriptGenerator;