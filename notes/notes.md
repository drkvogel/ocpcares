
## Video format

>MP4. MPEG-4 is the HTML5 supported file format that has been around longest

https://clipchamp.com/en/blog/2017/optimize-videos-web-design
>the best settings for background videos are either Web, 720p, medium quality, MP4 or WebM or Mobile, 720p, medium quality, MP4

## Video editors (for Mac)

Convert whole film into low res before cutting up

### iMovie

lowest res is 540 which is still too big for mobile
you can't seem to save a project file to remember all the markers

### avidemux

How to Cut/Split Video using Avidemux
>Open and select the file you want to split (File / Open).
Then, with the bar below, select the point where we want to start our video and clicking on the letter A using icon ( or press [ ) and mark point B ( or press ] ) where you want to end (cut) your video.
Finally from the menu select File / Save / Save Video.

Easiest so far to cut out clips, but only saves mkv?
    oh, you set the format in the sidebar
    what about quality?
has trouble setting markers finely...

### DaVince Resolve

Free? version of professional software suite?

### shotcut

how do you use this?
seems to struggle with a whole film

### openshot

setting markers is tricky
wide range of outputs, including 320 for mobile
can save project file with markers
playback seems to get stuck at low speed - no obvious way to cancel
no skip to next marker control

### MPEG Streamclip

ui fubar - wtf?

### Blender

does video editing - https://www.blender.org/features/video-editing/

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
    but easily solved by moving package-lock.json into the correct folder
doesn't do hot reload? yes it does (serves from source folder)
doesn't do linting
doesn't do bundling - have to add jQuery manually

## deployment

`surge` publishes to e.g. http://living-orange.surge.sh/, or a domain of your choosing with 

netlify wouldn't auth repos with github, send support request
