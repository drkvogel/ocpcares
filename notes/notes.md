
## Video format

>MP4. MPEG-4 is the HTML5 supported file format that has been around longest

https://clipchamp.com/en/blog/2017/optimize-videos-web-design
>the best settings for background videos are either Web, 720p, medium quality, MP4 or WebM or Mobile, 720p, medium quality, MP4

## Video editors (for Mac)

### avidemux

How to Cut/Split Video using Avidemux
Open and select the file you want to split (File / Open).
Then, with the bar below, select the point where we want to start our video and clicking on the letter A using icon ( or press [ ) and mark point B ( or press ] ) where you want to end (cut) your video.
Finally from the menu select File / Save / Save Video.

only saves mkv?

### shotcut


### openshot


## scaffolding

### generator-static-webapp

```
npm install -g yo
yo                      # run "Static Webapp"
npm run                 # list run scripts
npm start               # falls over
npm run dev             # same
npm install             # yo had run this anyway, but run again to be sure
npm run                 # still falls over
npm run dev             # same
npm run start:dev       # same
./node_modules/webpack-cli/bin/webpack.js   # generates the error
npm list | grep webpack                     # 2.1.something
npm install webpack-cli@latest
npm run dev             # doesn't fall over, but page displays ENOENT ./dist/[something] - do you have to build it first
npm run start:dev       # same
npm run testdev         # runs tests?
npm run dev             # later, works...?
```

### generator-h5package

```
 cd Projects/misc
 mkdir generator-h5package
 cd generator-h5package             # test folder
 yo                                 # choose h5package
 npm run                            # lists run scripts
 npm start                          # falls over, webpack error
 npm install webpack-cli@latest     # install latest webpack-cli
 npm start                          # works, displays page
 ```

### generator-pwa

has bug: package-lock.json created outside app folder · Issue #18 · hemanth/generator-pwa (https://github.com/hemanth/generator-pwa/issues/18)

doesn't do hot reload

## deployment

`surge` publishes to http://living-orange.surge.sh/