# grunt-init-simple-server

Create a simple-server module with [grunt-init][]
> 使用 `grunt-init` 建立 `simple server` 樣板專案，此樣板單純提供簡單的 Server 功能。適用于任何已存在的前端專案。

## 功能 Feature


## 安裝 Installation 

If you haven't already done so, install [grunt-init][].
> 如果您尚未了解什麼是 `grunt-init` 工具，請先閱讀[官方網站](http://gruntjs.com/project-scaffolding)

### 快速安裝 Quick Install

```
npm install -g grunt-init
```

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:
> 一旦 `grunt-init` 安裝完畢，只要將樣板放置 `~/.grunt-init/` 目錄，您就可以使用此樣板。下列指令為快速下載安裝樣板：

```
git clone git@github.com:AndyYou/grunt-init-simple-server.git ~/.grunt-init/simple-server
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## 使用方式 Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.
> 在指令界面切換至一個空目錄，接著執行下列指令

```
grunt-init simple-server
```

## 快速入門 Quick Start

```
grunt-init simple-server
npm install
bower install
grunt server
```

## 指令

## 記錄 History

* 0.1.0 -> first version implement basic feature 


## Manual

0. cd 'path/folder'
1. npm init
2. npm install grunt grunt-contrib-watch grunt-contrib-connect --save-dev
3. copy Gruntfile.js