#### Simple notes for Node Package Manager

###### Setting up NPM to your project

`npm init` - let you fill in some informations

or

`npm init -y` - no filling up of information it will set all to defaults

###### Installing Modules (LOCAL)

> New

`npm install module-name` or `npm i module-name`

> Old ways

`npm install module-name --save` or `npm i module-name --save`

###### Installing Modules (GLOBAL)

`npm i module-name --global` or `npm i module-name -g`

###### Installing Modules only for Development (Not on Production)

`npm i module-name --save-dev`

#### Note

Different between LOCAL vs GLOBAL modules installed.

###### LOCAL
local installed modules can't be run on terminal but can be run using scripts inside your package.json.

###### GLOBAL
global installed modules can be run on terminal directly.

#### Versioning