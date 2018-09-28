# NUI Lab Website

Front end website developed with Angular 5 on.

## Required Software

You need to have at least.

- [NodeJS](https://nodejs.org/en/)
- [Angular CLI](https://cli.angular.io/)
- Text Editor ([VSCode](https://code.visualstudio.com/) recommended)
- Version control terminal/GUI ([Git](https://git-scm.com/) recomended)
- Internet Connection
- Linux/Windows/Mac

## Download Repo

Download a copy of the repository or clone it on your personal computer

```
https://github.com/OpenHID/NUILabWeb.git
```

NOTE: Make sure you are part of the contibutors, and have an SSH Key on your computer log to be able to upload and download from the repo.

## Getting  Started

Once the repo has been downloaded completely on your computer, Make sure to install Angular CLI:

Using terminal and Node Package Manager install Angular CLI

```
npm install -g @angular/cli
```

Note: You have to be Administrator (Windows) or Sudo (Linux/Mac) to be able to install it.

## Installing the Site Dependencies Localy

Make sure to navigate to the folder where you root folder was installed clonned. Using VSCode terminal or your Computer terminal install all the packages and depencies required for the site to work (npm modules) by typing the following command.


```
npm install
```

NOTE: There could be some warnings, skim trough them and update acordingly. It is not critical but might be necessary from time to time.

## Running the site locally

Once the files have been installed, navigate to the folder where you root folder was installed clonned. Using VSCode terminal or your Computer terminal run the local server using Angular CLI:

```
ng serve --open
```

This comand creates a local server and opens a Internet Application that shows your website.

Every time you make a change in the site, the page will refresh automatically after saving the changes.

NOTE: If Github ever tells you that the Repo contains vulnerabilities, run:

```
npm audit
```

And then run whatever commands it tells you to run to fix the vulnerabilities. DO NOT TRY:

```
npm audit --force
```
YOU'VE BEEN WARNED.

---

Code away!

Support provided by [Stonb](https://github.com/stonb) [Email](sboli001@fiu.edu).
