# Project Title

Technical Exercise for NZ Trade Group

## Description

A few automated test case scripts for youtube.com using the following tools:

* Language - JavaScript
* Test framework – Mocha
* WebDriver library - WebdriverIO
* Package manager – NPM
* Version control – Git

1) Search functionality - The search query should be working as expected
2) Trending video description accuracy - Title & View count matches from the trending video list and video page
3) Theme tests - Switching between device, light & dark mode
4) Video functionality tests - Mute, full screen, pausing video, enabling captions

### Installing

* Pre-requisites: Nodejs (includes NPM) - download [here](https://nodejs.org/en/download/)
* Verify it's installed with:

```
C:\Users\wills>node -v
v16.18.0

C:\Users\wills>npm -v
8.19.2
```
* Download the zip or clone the repository & CD into the directory and run the following to install all the dependencies

```
npm install
```

### Executing program

Enter the following command to run the test cases

```
npm run test1
npm run test2
npm run test3
npm run test4
npm run allTests / npx wdio wdio.conf.js
```

## Authors

Will Smal 
- [GitHub Profile](https://github.com/Spykerwolf)

## Version History

* 1.0
* Initial Release

## License

Repo only for NZ Trade Group
