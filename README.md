An R HTMLWidget project template.

# Installation in R

1. `library(devtools)`
1. `install_github('NumbersInternational/rhtmlTemplate')`

Simplest Example to verify installation:

```
rhtmlTemplate::template()
```

**Prerequisites** - For help installing prerequisites see the `Prequisite Installation Help` section below

1. nodejs >= 5.0
1. python 2.7 - one of the nodejs libraries needs python during the installation process

# Local Installation to Develop/Contribute

## Installing the rhtmlTemplate code

1. On windows open git shell (or install it first). On OSX open terminal
    1. Tim note : Type enter when prompted for a passpahrase when opening git shell
1. Change directory to the place where you put git projects
1. type `git clone git@github.com:NumbersInternational/rhtmlTemplate.git`
1. `cd rhtmlTemplate`
1. `npm install`
1. `gulp serve` .
    1. If `gulp serve` does not work try `./node_modules/.bin/gulp serve`. To correct this and to make your nodejs life easier you should add `./node_modules/.bin` to your PATH. Consult the Internet for instructions on how to do so on your OS of choice.

If this worked, then gulp opened your browser and you are looking at `http://localhost:9000`. You should see a page listing a bunch of links to examples, each example shows the simple 4 square widget template. These examples are defined in the [features.json file](resources/data/features.json).

Choose an example or add another example to [features.json](resources/data/features.json). When changes to any file in `./theSrc` are saved, the browser will automatically reload.

## Prerequisite Installation Help

### Install nodejs on OSX

1. Install brew by following instructions here : http://brew.sh/
1. Install nvm (node version manager) by running `brew install nvm`
1. Install node by running `nvm install 5.8.0` on the terminal

### Install nodejs on Windows

1. Setup nodist. https://github.com/marcelklehr/nodist and find the link to the official installer.
1. Open the command prompt. Type: `nodist v5.8.0`
1. Type `node -v` and verify the version is correct

### Python on OSX - it should come installed. If not

1. Install brew (if not done already) by following instructions here : http://brew.sh/
1. Install python by running `brew install python` on the terminal - make sure you get 2.7

### Python on Windows

1. Download version 2.7 from https://www.python.org/downloads/

# Developing and Contributing

See docs on the [htmlwidget_build_system](docs/htmlwidget_build_system.md) to understand what gulp tasks are available and to understand the role of each file in the project. Here are a few important notes (both detailed in the htmlwidget_build_system docs) you must keep in mind:

1. The last thing you do before committing is run `gulp build` to ensure all the autogenerated files are up to date.
2. (With some exceptions) ONLY EDIT THINGS IN these directories: `theSrc`, `resources`, `docs` !! Many of the other files are auto generated based on the contents of `theSrc`. As an example, if you eidt `R/rhtmlTemplate.R` and then run `gulp build` your changes will be DELETED FOREVER!, because `R/rhtmlTemplate.R` is just a copy of `theSrc/R/htmlwidget.R`. See [htmlwidget_build_system](docs/htmlwidget_build_system.md) for more details

## Contributing to rhtmlTemplate
1. Do not work in master, as the master branch of rhtmlTemplate is used to verify the R server build process.
1. Create a branch, make some changes, push your branch, and create a pull request on github.

# Docs

**Doc manifest**
* [htmlwidget_build_system](docs/htmlwidget_build_system.md) - gulp task descriptions and file role breakdown
* [extending_the_template](docs/extending_the_template.md) - instructions on using the template to create a new htmlwidget project

## R docs

The [R file](theSrc/R/htmlwidget.R) has inline documentation that is compiled into an [Rd file](man/template.Rd). This documentation can be accessed from R using the following sequence:

```
install_github("NumbersInternational/rhtmlTemplate")
library(rhtmlTemplate)
help(template)
```

## R Examples

There are example widget use in R in the [features.R file](examples/features.R), which is autogenerated based on the features and scenarios defined in the [features.json file](resources/data/features.json).
