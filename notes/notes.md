
## ToDo

file size is too big - 4Mb in total
centre vids and title vertically
how can we fit all the content onscreen vertically e.g. on a laptop it's too wide 
how low can we go with vid quality?
cut up film into quarters or eights with some overlap, easier to cut up
switch between random and film order
other movies e.g. Platoon, Withnail...

## defer

`ended` event doesn't alway fire - add timeout?
in chrome, sometimes, width of content is much smaller than width of viewport and content is unresponsive to click...
pulling down on PWA on android phone seems to update PWA - check

### Video converters

#### avconvert

installed `avconvert` with `brew install libav`. One of the presets sounds promising:

    avconvert -p PresetAppleM4VCellular -s source.mp4 -o output.mp4

e.g.:

    [  1:55am ]  [ kvogel@kvogel-macbook-2018:~/Projects/ocpcares/clips/openshot(master✗) ]
    $ avconvert -p PresetAppleM4VCellular -s wecare-short.mp4 -o wecare-avconvert-PresetAppleM4VCellular.mp4

not bad:

    -rw-r--r--@ 1 kvogel  staff   187K 22 Oct 12:03 wecare-short.mp4
    -rw-r--r--@ 1 kvogel  staff   114K 23 Oct 01:56 wecare-avconvert-PresetAppleM4VCellular.mp4

#### ffmpegx

installed ffmpegx from https://www.ffmpegx.com/download.html.


### Video editors (for Mac)

Convert whole film into low res before cutting up

#### iMovie

lowest res is 540 which is still too big for mobile
you can't seem to save a project file to remember all the markers

#### avidemux

How to Cut/Split Video using Avidemux
>Open and select the file you want to split (File / Open).
Then, with the bar below, select the point where we want to start our video and clicking on the letter A using icon ( or press [ ) and mark point B ( or press ] ) where you want to end (cut) your video.
Finally from the menu select File / Save / Save Video.

Easiest so far to cut out clips, but only saves mkv?
    oh, you set the format in the sidebar
    what about quality?
has trouble setting markers finely...

#### DaVince Resolve

Free? version of professional software suite?

#### shotcut

how do you use this?
seems to struggle with a whole film

#### openshot

setting markers is tricky
wide range of outputs, including 320 for mobile
can save project file with markers
playback seems to get stuck at low speed - no obvious way to cancel
no skip to next marker control

#### MPEG Streamclip

ui fubar - wtf?

#### Blender

does video editing - https://www.blender.org/features/video-editing/
how?

### deployment

#### surge

`surge` publishes to e.g. http://living-orange.surge.sh/, or a domain of your choosing e.g. `surge --domain ocpcares.surgh.sh`.

#### netlify

netlify wouldn't auth repos with github, sent support request
2018-10-23 02:08:25 works now, looks very slick
    https://hungry-wright-9eae3c.netlify.com/

### creating icons

I found an image with a white background, opened it in GIMP, added a layer (which creates an alpha channel), used the magic wand to select the white, did Colours -> Colour to Alpha, saved.

Then I loaded the image in https://realfavicongenerator.net/favicon_result?file_id=p1cqentrn0vbs1q4fbjg10tk1miq6#.W842BxNKiAw, which is "the bomb" and ["the way to go"](https://discourse.gohugo.io/t/what-if-i-wanna-create-things-like-favicon-and-apple-touch-icon/1050/6), rather than doing it manually somehow in GIMP or similar.

I downloaded a zip file to /images, and now am working out where to put those files and how to link it all up.

I need to change `manifest.json` to reflect this.

## done

### html5 video source src attribute

html5 video source src attribute must be present even if empty, otherwise the video won't load even if src is set later.
https://stackoverflow.com/questions/1944271/html5-video-tag-with-no-source

```html
<video>
    <source src="">
```

### scaffolding

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

### Video format

>MP4. MPEG-4 is the HTML5 supported file format that has been around longest

https://clipchamp.com/en/blog/2017/optimize-videos-web-design
>the best settings for background videos are either Web, 720p, medium quality, MP4 or WebM or Mobile, 720p, medium quality, MP4

### loading screen

on mobile it's slow loading clips, should display a loading image (e.g. OCP logo)-



favicon doesn't show on chrome, does on firefox
    it does eventually