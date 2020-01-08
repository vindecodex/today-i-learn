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

Under `dependincies` or `devDependincies` modules versions will be displayed example

```JavaScript
"dependincies": {
  "express": "^1.3.7"
}
```

Versions has pattern first digit is `Major Update`, second digit `Minor Update` and last `Patch/Bug fix`.

Major Update - Will affect your sytem if you update.(Big changes was happen)
Minor Update - Might affect your system.(Added some new features)
Patch/Bug fix - Will not affect your system.(Fixed some bugs)

#### Note

Running `npm outdated` will display info about modules that are outdated

Use `^` if want to update only Minor and Bug fix (Safe)
```JavaScript
"dependincies": {
  "express": "^1.3.7"
}
```

Use `~` if want to update only Bug fix (Safest)
```JavaScript
"dependincies": {
  "express": "~1.3.7"
}
```

Use `*` if want to update Everything (Not good it may destroy your system)
```JavaScript
"dependincies": {
  "express": "*1.3.7"
}
```
