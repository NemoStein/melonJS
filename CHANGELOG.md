# Changelog

## [13.1.0] (melonJS 2) - _2022-xx-xx_

### Added
- Color: added a `setHSL(h, s, l)` and `setHSV(h, s, v)` method to the Color class
- Tiled: add support for the new `class` property (note: melonJS will still set the deprecated `type` one for backward compatibility)
- Renderer: Canvas rendering mode can now be forced by adding `[#/&]canvas` to the URL (similarly with WebGL1/2 already)
- Vector: new `moveTowards()` method for `[Observable]Vector2d/3d` objects (limited to x and y axis for 3d vectors)

### Changed
- Renderer: the double-buffering option for the Canvas Renderer is now deprecated, this to better align both renderer and enable further improvements

### Fixed
- 9-Slice Sprite: fix resizing of a 9-slice sprite (thanks @NemoStein)
- Tiled: fix missing text property in TMX Object documentation
- Vector: fix `lerp()` not triggering the callback in `ObservableVector2/3d` objects
- Renderer: fix the manual canvas scaling option (thanks @NemoStein)

## [13.0.0] (melonJS 2) - _2022-07-18_

### added
- Event: also provide a reference to the camera viewport being resized when emitting `VIEWPORT_ONRESIZE`
- Unit Test: added base64 encoded data preload testing for image and audio assets
- Utils: new `isDataUrl()` helper returning true if the given url is in the `data:[<mediatype>][;base64],<data>` format.

### Changed
- Core: full ES6 refactoring of `me.device`, and API clean-up (@see https://github.com/melonjs/melonJS/wiki/Upgrade-Guide#120x-to-130x-stable)
- Game: refactoring of the global `game` into an instantiable `Application` object, with `game` now being the default instance of it (@see #1091)
- Loader: `onload` and `onerror` callbacks are now optionals when directly loading assets (easier with base64 encoded assets)
- Physic: World physic implementation is now properly tight to its corresponding parent application/game (@see #1091)
- Physic: Gravity is now properly applied as a force, instead of directly modifying a body velocity
- Physic: Gravity now properly takes in account the body mass
- Physic: resulting force is now properly cancelled at the end of an update cycle (not required anymore to manually set it to 0 in user code)

### Fixed
- Doc: fix missing `Timer` documentation following previous refactoring
- Loader: fix loading/preloading of base64 audio assets, and base64 encoded FontFace
- Renderer: fix a regression with the masking features in the Canvas Rendering mode
- Text: fix an uncaught exception when removing Text object from the game world that use offScreenCanvas texture caching (thanks @wpernath)

## [12.0.0] (melonJS 2) - _2022-06-27_

### Changed
- Loader: the default loading screen has been updated with the new melonjs logo
- String: replaced own `trim[left/right]` functions with native es10 equivalent (with polyfill)

## [11.0.0] (melonJS 2) - _2022-06-23_

### Added
- Event: new `DOM_READY` event triggered when the DOM is loaded and ready (now used internally to trigger the `onReady()` function)

### Changed
- Renderable: update the Light2d constructor to allow creating elliptical shaped lights

### Fixed
- Core: fix an uncaught exception when using parcel (thanks @8Observer8)

## [10.12.0] (melonJS 2) - _2022-06-20_

### Added
- State: new `get(state)` function that return the instance to the Stage associated with the given state

### Changed
- Physic: simplify the collision api and implementation (removed `collision.response` that serves no purpose anymore)
- Pooling: silently fail if internally failing at recycling body physic shapes

### Fixed
- Physic: fix a regression with Ellipse vs Polygon SAT collision detection
- Text: make sure the optional `x` and `y` arguments of the draw method are set to a default value
- TypeScript: fix and uniform draw method signature across all renderables
- TypeScript: fix typings for the `onCollision` method
- TypeScript: fix `setMaxVelocity` and `setFriction` method scope
- Webdoc: fix wrong or missing  argument names (`Path2D.arcTo`, `Rect.centerOn`, `Texture.AdduVs`)


## [10.11.0] (melonJS 2) - _2022-06-14_

### Changed
- Core: fix all rollup "$1" related duplicated declaration and/or export
- Core: refactored Timer into an instantiable class with `timer` (namespace) now being the default instance of the Timer class
- Doc: replaced JSDoc by Webdoc for documentation generation (huge thanks to @ShukantPal)

### Fixed
- Bounds: fix the `addFrame()` method
- Core: fix a regression when accessing `localStorage`
- Core: fix a regression when when running melonJS in node.js (undefined global reference in the roundRect polyfill)
- Geometry: fix the RoundRect `clone()` method
- Input: fix PointerEvent detection on Firefox for Android mobile (thanks @kutyamutya)
- Renderer: fix a regression with `strokeLine()` in the CanvasRenderer

## [10.10.0] (melonJS 2) - _2022-06-07_

### Added
- Core: new `CanvasTexture` object to allow recycling canvas through the engine (text caching, default particles, effect, etc..)
- Core : new experimental light effect that simply simulate a spot/point light for now (work in progress)
- Color : allow overriding the alpha component with a specific value when calling `toRGBA` or `toHex8`
- Renderer: support reverse clipping when applying geometry masks (alpha component of the masked area is ignored in legacy Canvas rendering mode)
- Renderer: added multiple clipping region for masks (only works with overlapping region in legacy Canvas rendering mode)

### Changed
- TMX: replace use of `eval()` by `Function()` when parsing map including executable code
- Core: replace internal calls to deprecated `substr` function with `slice`

### Fixed
- Renderable: mark renderable(s) as dirty when their pos or bounds are updated
- Geometry: fix a regression with roundRect shape drawing

## [10.9.0] (melonJS 2) - _2022-05-21_

### Added
- Geometry : add a proper `contains` and other utility methods to RoundRect

### Fixed
- Renderer: fix clipping of RoundRect mask with the Canvas Renderer

## [10.8.0] (melonJS 2) - _2022-05-16_

### Added
- Geometry : new RoundRect geometry object
- Geometry : new Path2D API to provide better abstraction when drawing primitives in WebGL

### Changed
- Renderer: refactored the WebGL renderer to use the new Path2D API for primitive drawing

### Fixed
- Core: improve internal object recycling, to fix instance leaking or hoarding by the pool system
- Input: fix a warning on using passive target disabling swipe on a WebView (thanks @zngb)

## [10.7.1] (melonJS 2) - _2022-05-05_

### Fixed
- Renderer: fix a crash on context restore when using the canvas renderer

## [10.7.0] (melonJS 2) - _2022-05-04_

### Added
- Core : new `device.nodeJS` to detect if running under node.js
- Particle Emitter: added the possibility to define a specific tint and blend mode for particles
- Renderable: new `centerOn` method to center a renderable around given coordinates
- Renderer: added "additive" as an alias for the "lighter" blend mode
- Renderer: listen to `contextlost` & `contextrestored` events in Canvas rendering mode (@see https://developer.chrome.com/blog/canvas2d/#context-loss)

### Changed
- Core : replace internal use of global window object by `globalThis`
- Core : refactor the boot process, and device/feature detection/initialisation to better work within node.js (will still require jsdom and node-canvas)
- Particle Emitter: refactoring of the Emitter class to directly extend `Container` instead of `Renderable`

### Fixed
- Particle Emitter: fix a regression in `ParticleEmitter` causing a crash, after es6 class reformatting
- Particle Emitter: fix particle additive blend mode in WebGL

## [10.6.1] (melonJS 2) - _2022-04-25_

### Fixed
- Renderable: fix a regression in BitmapText when specifying a scaling size through the constructor

## [10.6.0] (melonJS 2) - _2022-04-25_

### Added
- Renderable : added the possibility to specify a blend mode per renderable
- Renderer: added missing compatible/supported blend mode across the canvas and WebGL renderer ("normal", "multiply", "lighter, "screen")
- Renderable : new (simple) word wrapping feature for Text and BitmapText classes

### Changed
- Renderable : refactor of Text and BitmapText to isolate metrics related features/functions and standardize the api between the 2 classes

### Fixed
- Container: mark a container as dirty when changing own child(s) order using `MoveTo[Top/Bottom]`, `move[Up/Down]` and `swapChildren`
- Renderable : fix NineSliceSprite bounding box not being properly scaled up
- Renderer: fix blend mode in WebGL rendering mode

## [10.5.2] (melonJS 2) - _2022-03-17_

### Fixed
- WebGL: fix shader attribute for the projection matrix not being properly updated when using the flex scaling mode

## [10.5.1] (melonJS 2) - _2022-03-17_

### Fixed
- Renderer: fix a regression when zooming the canvas in WebGL rendering mode
- TypeScript : fix definition of the base Renderable class

## [10.5.0] (melonJS 2) - _2022-03-15_

### Changed
- Physic: set collision shapes as static by default (those should be fixed anyway)
- Renderable : refactor of Draggable and DropTarget base objects

### Fixed
- Physic: fix improper behavior for static bodies responding to collisions (thanks @dynamo-foundation)
- Physic: static bodies are now properly filtered out if within the same node or overlapping
- Renderable : fix a me.Sprite bug when reusing the same image/texture with different frame width/height (thanks @dynamo-foundation)

## [10.4.0] (melonJS 2) - _2022-03-08_

### Added
- Renderable : containers now define a `backgroundColor` property allowing to defined a background color for a specific container
- Renderable : new `inset[x/y]` property setting allowing to define the size of a corner for NineSliceSprite (thanks @dynamo-foundation)

### Changed
- Renderer: the video.renderer.Texture class is now directly exported (and available) as TextureAtlas

### Fixed
- TypeScript : fix all typings and other issues with the typescript definition file (now with 0 warnings and linting errors)
- Input : fix a regression (undefined error) with the `releasePointerEvent` method (thanks @siauderman)

## [10.3.0] (melonJS 2) - _2022-02-02_

### Added
- TMX: melonJS will now throw an error if collision polygons defined in Tiled are not forming a convex shape
- WebGL : vertex element and buffer size are now dynamically calculated based on attribute definition

### Changed
- WebGL : switch from drawElements to drawArrays when drawing quads
- WebGL : optimize ColorLayer rendering and `clearRect` method by using `clipRect` & `clearColor` instead of drawing primitives
- Device : modernize the `pointerLock` implementation (2.0 specs) and moved it under `me.input`

### Fixed
- Renderable : properly delete me.Text cache WebGL texture upon deactivation (if created)
- WebGL : Optimize vertex buffer allocated size following tint color packing into Uint32
- Device : fix `pointerLock` feature detection

## [10.2.3] (melonJS 2) - _2021-12-18_

### Fixed
- Core: fix a regression with the quadtree implementation and non floating objects
- Preloader: optimize defined cache canvas size in the default loading screen when using WebGL2

## [10.2.2] (melonJS 2) - _2021-12-14_

### Added
- Renderable: new `isFloating` getter returning true if the renderable is a floating object or contained in a floating container

### Fixed
- TypeScript: fix most of method parameters and return type declaration when applicable
- Input: fix an issue with pointer event detection on nested floating items

## [10.2.1] (melonJS 2) - _2021-11-23_

### Fixed
- changelog release date and links

## [10.2.0] (melonJS 2) - _2021-11-23_

### Added
- Bounds: faster condition assessment for the `overlaps` method
- Renderable: added a basic `NineSliceSprite` renderable object
- Renderable: new `offScreenCanvas` option for me.Text allowing to use an individual offscreen canvas texture per text element

### Fixed
- Input: fix a regression with me.input.pointer not being updated on pointer events
- Loader: fix a "double initialization and double reset" bug with the default loading screen

## [10.1.1] (melonJS 2) - _2021-11-12_

### Fixed
- documentation: add missing pages for `Container` and `World` object
- Renderable: also flag as "dirty" when changing opacity, or when viewport change is triggering an `ImageLayer` update

## [10.1.0] (melonJS 2) - _2021-11-08_

### Changed
- Input: refactor me.Pointer by extending me.Bounds instead of me.Rect (simplify implementation and memory usage when using pointer Event)
- WebGL: refactor/simplify the WebGLCompositor implementation to be more generic
- WebGL: prevent temporary Array Buffer Allocation when using WebGL2
- WebGL: tint color are now packed into Uint32 before passing them to the Vertex Shader
- Device: replace use of deprecated `onorientationchange()` event listener by the standard ScreenOrientation one

### Fixed
- Input: fix a regression, throwing an undefined property exception, when accessing me.input.pointer before registering on any events (thanks @kkeiper1103)
- WebGL: fix initial declaration of the WebGLVersion property

## [10.0.2] (melonJS 2) - _2021-10-29_

### Fixed
- Documentation: fix missing class definition after the 10.0.0 release

## [10.0.1] (melonJS 2) - _2021-10-25_

### Fixed
- Physic: fix a regression (crash) with undefined reference in the minified ES6 module

## [10.0.0] (melonJS 2) - _2021-10-23_

### Added
- melonJS is now a pure ES6 library, for class definition, inheritance and semantic
- melonJS now includes typescript definition for the ESM `melonjs.module` bundle (thanks @qpwo)
- Core : new `me.event.BOOT` event that will be triggered when melonJS is initialized
- Physic : physic bodies can now be configured as static bodies (which do not move automatically and do not check for collision with others)
- Event : new system events at the beginning and end of both the update and draw "loop"

### Changed
- Jay Inheritance has been replaced with ES6 standard inheritance
- Core : object using the pooling function *must* now implement a `onResetEvent` method and use the `recycling` flag when registered
- Core : manually pushing a non recyclable object into the object pool will now throw an exception instead of silently failing
- Physic : physic body update and collision check is now automatically done through the world simulation update loop
- Physic : fixed gravitational acceleration (thanks @neilsf)
- Event: minPubSub event based implementation has been replaced by a nodeJS event emitter based implementation
- Renderable: calling `flipX/Y()` without argument will now flip the renderable as expected

### Deprecated
- all deprecated API from the legacy melonJS version have been removed

### Fixed
- Renderer: fix the stencil masking feature on renderable components (for both WebGL and Canvas mode)
- Loader: fix a graphic glitch in the default preloading screen

-------------------------------------------------------------------------------

## [9.1.2] - _2021-10-03_

### Fixed
- fix a regression with state pause & resume when losing & gaining window focus
- remove duplicated translate method for basic shapes and add missing shift method to Polygon

## [9.1.1] - _2021-09-26_

### Fixed
- Renderable : fix the error message in me.Sprite on undefined image/texture source

## [9.1.0] - _2021-09-26_

### Added
- Renderable : simplify ImageLayer implementation by extending Sprite object
- TMX : add missing tinting support for Image Layers (was added "only" for Tiled Layer in 9.0.0)
- TMX : add support for the new Tiled Parallax Layers x and y ratio properties

### Fixed
- TMX : fix a regression with Parallax scrolling ratio

## [9.0.2] - _2021-09-24_

### Fixed
- fix name of the ES6 version (> melons.module.js) so that it's properly uploaded on jsDeliver

## [9.0.1] - _2021-09-24_

### Fixed
- release fix for NPM

## [9.0.0] - _2021-09-24_

### Added
- Audio : Howler audio core update (2.2.3)
- Core : overall code rewrite to comply with ES6 module and class semantic (at the exception of #1021)
- Core : melonJS build process now automatically output one ES5 umd "legacy" bundle, and one pure ES6 module
- Core : the "legacy" es5 umd bundle is now automatically transpiled (from ES6 to ES5) using rollup and bubble
- Core : internal rewrite on object bound implementation, with all Renderable now fully using/relying on the me.Bounds object introduced in last version
- Container : Unified bound management between Container and Renderable (Container now follow its parent Renderable implementation)
- Container : Containers defines an additional `enableChildBoundsUpdate` flag to enable full bounds update, including child bounds (disabled by default)
- Math : add missing `applyInverse()` method to the Matrix3d implementation
- Renderer : WebGL2 is now the default mode when using the WebGL renderer (use `preferWebGL1 = true` calling me.video.init if you need to force WebGL1)
- Tiled : add TMX `tintcolor` parsing for tile and object layers
- Stage : `me.Stage` constructor now accept new argument properties to specify the `onResetEvent` and `onDestroyEvent` functions
- TMX : "unnamed" object in Tiled will now instantiate base Renderable object (with a physic body) rather than an "sprite-less" Entity object
- Tween: allow to pass a set of tween properties to the '.to' method instead of just the duration (thanks @0xf0f0f0)

### Deprecated
- Entity : me.CollectableEntity is now deprecated and replaced by a more generic `me.Collectable` base object that do not extend me.Entity anymore
- Entity : me.LevelEntity is now deprecated and replaced by a more generic `me.Trigger` objects that do not extend me.Entity anymore

### Fixed

- Math : fix Matrix3d translate method when passing a 2d vector as argument
- Renderable : fix Renderables bounds not correctly respecting the anchor point.
- Stage : fix a crash with legacy API when using the deprecated me.ScreenObject object
- TMX : fix a crash when trying to add collisionType to text nodes (thanks @framp)
- TMX : fix a regression with the Tile Layer preRender feature
- TMX : fix tile properties import for the new Tiled JSON format (thanks @3ck0o)

## [8.0.1] - _2020-09-12_
- release fix for NPM & jsDeliver

## [8.0.0] - _2020-09-12_
- Audio : audio core update (2.2.0)
- Audio : `me.audio.stop()` will now stop all sounds if none is specified
- Color : new `lerp()` method to provide linear interpolation between two different colors
- Color : allow specifying minimum and maximum value range when generating random colors
- Core : new me.event.VIDEO_INIT system event that will be triggered once the display canvas is initialized
- Core : a default stage is now instantiated at boot time, allowing to more easily write basic examples to test features
- Input : improved input detection when the canvas is embedded into a complex css layout and the page is being scrolled up/down
- Input : Changed the device accelerometer and orientation detection to comply with the latest API changes where a user permission is now required
- Input : fix an issue with uncorrect horizontal delta value for wheel event
- Input : all registered events for a specific renderable are now automatically released upon the object destruction
- Physic : me.game.world is now a specific container (based on me.Container) that will hold and manage all related physic updates
- Physic : gravity for physic bodies is now defined globally under me.game.world.gravity, and can be scaled individually using me.Body.gravityScale
- Physic : added a rotate method to me.Body to allow rotating all the body shapes properly (by default around the body bounding box center)
- Physic : melonJS will now automatically enable body physic when when a me.Body object is added to any renderable
- Renderable : add support for free-texture-packer (http://free-tex-packer.com), the free Texture Packer alternative (thanks @PLAYERKILLERS)
- Renderable : optimized and tidied up me.Text and me.BitmapText implementation
- Renderable : new isFlippedX & isFlippedY getter to check the current renderable "flip" state
- Renderable : fix implementation and usage of the isDirty flag across Renderables
- Renderable : fix a regression with transformation when a renderable is directly added to a me.Container object
- Renderable : apply a tint color to BitmapText if a `fillStyle` is specified in the constructor
- Renderer : new optional parameter for createCanvas() to request an OffScreenCanvas if supported by the browser
- Renderer : use OffscreenCanvas by default for all secondary canvas (e.g. debugPanel, double buffering, font texture in WebGL)
- Renderer : properly fallback to the Canvas Renderer including when the WebGL renderer is not able to compile the built-in shaders
- Renderer : dynamically activate WebGL texture sampler instead of pre-indexing them (accordingly to GLSL 1.30 specifications and later)
- Renderer : added support for WebGL2 (disabled by default, use `preferWebGL1 = false` to enable it when calling me.video.init)
- Renderer : enable use of NPOT textures when in WebGL2 mode for texture mapping and pattern drawing
- Renderer : allow specifying the default `powerPreference` value for the WebGL Renderer (on Safari and Chrome 80+ default is now `low-power`)
- Renderer : display GPU information in the console when available (WebGL)
- Renderer : implemented sprite tint support for the Canvas Renderer
- Shapes : vectors and shapes can now be rotated around a given (optional) point instead of the default origin point
- Shapes : added a center vector property for me.Rect, giving the center point of the rectangle
- TMX : fix parsing of tileset image when the "last" tile spacing was truncated
- TMX : fix staggered map rendering, where computed tiles coordinates were non integer values (thanks @siauderman)
- TMX : fix parsing of animated tile with the latest version of Tiled (thanks @alcor)
- TMX : fix anti-diagonal tile flipping (thanks @alcor)
- TMX : fix world bounds not being updated if a level is added manually using `addTo` (thanks @siauderman)
- Video : fix an issue when using the "flex" scaling mode, and where the reported parent container size could be floating values
- Video : the `scale` parameter is now optional if scaleMethod is specified (auto-scaling will then automatically be enabled)

## [7.1.1] - _2019-08-20_
- Core : fix a crash when a game reset is triggered manually before any default stage has been defined
- Core : new option to automatically change to a newly define stage
- Input : fixed a regression with gamepad polling
- Renderer : fixed an issue where a failed attempt at creating a WebGL context would then prevent from creating a canvas context as fallback

## [7.1.0] - _2019-07-16_
- Audio : audio core update (2.1.2) to fix audio unlock on Firefox 66 and onwards
- Core : new me.event.GAME_UPDATE system event that will be triggered at the beginning of the update loop
- Core : me.game.HASH is deprecated and replaced by the `me.utils.getUriFragment()` function
- Debug : fixed DebugPanel minimum version requirements (should have been 7.0 since last release)
- Font : fix an issue with setText wrongly converting a given array of string to a string representing the array
- Input : use passive event listeners when preventDefault is used (default behaviour)
- Input : simplified pointer / keyboard / gamepad implementation and removed support for legacy API (e.g. mousewheel event)
- Input : added a new getBindingKey() method that returns the associated action to a given key
- Input : exposed default targets for Keyboard and Pointer events under me.input
- Physic : fix an issue where gravity was not properly applied on the x axis
- Renderer : fix fill and stroke operations for arc and ellipse in the Canvas Renderer
- Renderer : added missing fill and stroke operations for arc in WebGL mode
- Renderer : align the canvas renderer with the WebGL renderer to properly use CSS scaling
- Sprite : new rotate method as a shortcut to apply a rotation transform to the sprite
- TMX : fixed parsing of string custom properties containing newline(s)
- TMX : use the offsetx/offsety properties when parsing ImageLayer data over the deprecated x/y ones
- TMX : add support for Staggered Isometric maps
- TMX : fix rendering of Staggered Hexagonal maps
- TMX : fix pointer position detection on Hexagonal maps (was slightly off previously)

## [7.0.0] - _2019-03-26_
- General : new "grunt-free" build process based on npm, rollup & friends
- Core : removed support for CocoonJS (following service shutdown)
- Core : simplified error/exception handling by removing the custom me.Error class
- Input : removed obsolete support for proprietary windows 8 accelerometer API (not a thing anymore)
- Input : fixed potential issue with hardware not reporting proper event geometry
- Input : improved pointer detection when using complex css layouts
- Math : prevent recalculating edges and normals when resizing a rectangle shape with the same width and height values
- Renderer : renderer selection now set to AUTO by default (Attempt WebGL first, with fallback to Canvas)
- Timer : added arguments passing to setTimeout and setInterval
- TMX : fixed temporary vectors recycling in the hexagonal map renderer
- WebGL : shader implementation has been rewritten to allow for a more generic approach, and ease definition of custom shader (see me.GLShader)
- WebGL : properly handle WebGL context lost and restore
- WebGL : updated earcut to version 2.1.5

## [6.4.0] - _2019-02-18_
- Documentation : new documentation format, including a search feature
- Math : new PI related constants under me.Math (TAU, ETA, etc..)
- Renderable : added a basic color tint feature (WebGL mode only)
- Renderable : added support for Texture Packer multipack textures
- Renderable : moved the name property definition at the me.Renderable level (prevent mostly all deriving objects from re-defining one)
- Renderable : fixed an issue where a non Boolean value was passed to the onVisibilityChange callback
- Sprite : cleaned up/simplified animation data handling
- TMX : small memory optimization in the isometric renderer, where one temporary vector object was not properly recycled
- Renderer : fixed stroke and fill default color to match standard W3C canvas stroke and fill style (black)

## [6.3.0 (24 Dec 2018)] - _2018-12-24_
- Audio : audio core update (2.1.1), mostly improve auto audio unlock on latest (non-mobile) browser versions
- Color : fixed alpha value not being properly clamped (leading to issue in WebGL mode when passing the glArray buffer)
- Debug : fixed wrong bounding box drawing position for nested containers and entity childs
- Entity : fixed ancestor value for renderable component
- Renderable : added support for rendering mask (in both Canvas and WebGL mode), allowing to use any me.Shape object as a mask
- Renderer : `drawShape()` is deprecated and has been replaced by a `fill()` and `stroke()` methods
- Renderer : cleaned and aligned drawing APIs between the Canvas and WebGL Renderer
- WebGLRenderer : added stroke and fill operations for all me.Shape objects
- WebGLRenderer : fillRect() now use newly added fill method, instead of creating/using a fill texture
- WebGLRenderer : optimized memory usage for shape drawing operations
- WebGLRenderer : enable batching of triangle vertices to speed up shape drawing (when applicable)
- WebGLRenderer : fixed a clipping issue with nested containers
- WebGLRenderer : fixed the clearRect method

## [6.2.0] - _2018-11-29_
- Audio : fixed a regression when passing an initial volume value to the play function (thanks @PLAYERKILLERS)
- Container : new `getNextChild` function that returns the next child within the container
- Core : renamed `me.ScreenObject` to `me.Stage` (with an alias to `me.ScreenObject` for Backward compatibility)
- Core : cleaned and improved the window auto focus feature
- Core : improve automatic object instance collection & recycling of base components like vectors and shapes.
- Core : ensure the internal coordinates system is updated when the DOM tree structure is modified
- Camera : `me.Camera2d` objects can now be defined per Stage, rather than having one static global camera under `me.game`
- Camera : fix infinite generation of the VIEWPORT_ONCHANGE event when using camera damping
- Device : added a me.device.focus() function
- Entity : fix "DRAGEND" event triggering for Draggable Entity, when pointer is moved outside of the screen area
- Entity : fix a regression introduced in 6.0 on optional me.Entity constructor parameters
- Font : fix bounds calculation for BitmapFont objects
- Font : enable Font & BitmapFont bounding box drawing through the Debug Panel
- Font : fix missing documentation on properties for BitmapFont Object.
- Font : Font & BitmapFont objects can now be directly added to a container like any other me.Renderable
- Font : Improved performances when drawing regular me.Font objects
- Font : new me.Text and me.BitmapText generic object replacing me.Font and me.BitmapFont (now deprecated)
- Input : fix a potential issue with "undefined" pointer location upon loading
- Loader : added support for Font Face preloading
- Math : new `toBeCloseTo` function to determine if two values are closed "enough" to eachother
- Renderable : new onVisibilityChange event handler that is called when leaving or entering a camera viewport
- Renderable : fix documentation for the container `clipping` flag (was accidentally left private)
- Renderable : update visibility flag for floating objects using actual screen coordinates
- Sprite : fix an issue when flipping trimmed sprite textures (@YosuaHamonangan)
- TMX : add support for orthogonal tile rendering order
- TMX : add support for Text object, allowing to add me.Text or me.BitmapText directly from Tiled
- TMX : optimized the getTile function to avoid duplicate calls to the pixel to tile coordinates functions
- WebGLRenderer : fix a bug when clipping is disabled due to the clipping area being equal to the canvas size

## [6.1.0] - _2018-09-11_
- Audio : latest audio core update (2.0.15)
- Core : new linux detection flag under me.device
- Renderer : now systematically warn when using non POT texture in both Canvas and WebGL mode
- Sprite : new function to allow reversing a given or current animation
- TMX : support for the Tiled 1.2 beta JSON property format (backward compatible with previous 1.1 version)
- CanvasRenderer : fix drawImage sub-pixel rendering in Canvas mode when using the short notation (2 or 4 parameters)
- WebGLRenderer : only throw an exception (e.g. stop execution) when using repeat/wrap mode with a non POT texture
- WebGLRenderer : properly fallback to Canvas mode in AUTO and WEBGL mode when failing at creating a valid WebGL Context

## [6.0.0] - _2018-08-13_
- Audio : latest audio core update to fix HTML5 Audio issue with FB Instant Games, and Chrome API deprecation
- Camera : renamed `me.Viewport` to `me.Camera2d` and move it to its own folder
- Container : new `clipping` feature to automatically clip childrens to their parent container bounds (disable by default)
- Core : Removed unnecessary ES6 polyfill (based on melonJS 5.x minimum browser version)
- Core : API update to sandbox all previous language extension under the `me` namespace
- Core : added console debug information (melonJS version & basic device capabilities)
- Core : properly support (requires the official weapp-adapter) WeChat Mini Games (@qinchunren)
- Color : fix the me.Color.toHex8() function
- Debug : fix "undefined width error" when instantiating the debug panel
- Font : fix a regression where drawing a web font was not restoring the renderer context properly
- Input : fix an issue where the focus was sometimes lost when using an integrated WebView (e.g. Instant Games)
- Loader : new loader feature to allow preloading of javascript files
- Math : new vector linear interpolation functions
- Math : new `equals` function for me.Rect shape
- Physic : avoid duplicating the given collision shape through addShape, and directly use the object references
- Physic : gravity property for solid bodies is now a vector object, allowing to defined gravity for both axis
- Physic : new mass property for solid bodies
- Physic : new me.Body.force property allowing to automatically apply a force or acceleration to a solid body
- Physic : me.Body.accel and me.Body.setVelocity are now deprecated and to be replaced by me.Body.force
- Physic : automatically apply any defined physic properties when importing a physic editor JSON file
- Renderable : fix onComplete not being called for me.Sprite single animation frame (@Adrian)
- Renderable : fix animation not cycling when using GUI_Object(s)
- Renderable : fix a regression in Sprite when using Texture Packer
- Renderable : fix floating renderable's bounds following its parent container position (@YosuaHamonangan)
- Renderable : fix a potential parameter mismatch in me.Sprite for an animation `onComplete` callback
- Renderer : use prefixed "image-rendering" CSS properties for non standard browsers
- Renderer : new clipRect function to clip the specified rectangle area
- TMX : allows different tile size per layer (not supported by Tiled, only works with "manually" generated maps) (@YosuaHamonangan)
- TMX : optimised object allocation to lower memory usage (and later GC) when loading a level
- Viewport : new damping feature to enable smooth camera movement
- WebGLRenderer : enable `failIfMajorPerformanceCaveat` by default when attempting to create a GL Context
- WebGLRenderer : feature to change the blending mode (experimental and limited to "normal" and "multiply" for now)
- WebGLRenderer : fix a deprecation warning in Firefox

## [5.1.0] - _2018-01-21_
- Audio : Howler core update (2.0.8)
- Core : window.onReady is now marked as deprecated, and replaced by me.device.onReady
- Container : new `onChildChange` callback for when a child is added or removed
- Input : further improvements to multitouch support (compatibility on latest device/browser)
- Input : new me.input.setTouchAction function to enable/disable gesture by default (default to "none")
- Input : fix a pointer offset issue when using the browser zoom
- Loader : new "withCredentials" setting to specify if cross-site Access-Control requests should be made using credentials
- Physic : new me.collision.rayCast function for basic Line of Sight implementation
- Physic : slight me.Body refactoring to allow adding a physic body to any base me.Renderable
- Physic : new bounce property for solid bodies
- Renderable : `isKinematic` is now true by default except for me.Entity, me.Container and me.GUI object
- Renderable : anchor point and transform are now properly applied to me.Sprite Bounding Rect
- TMX : add support for "Collection of Image" tilesets
- Viewport : apply current transformation when converting given coordinates from localToWorld and WorldToLocal
- Viewport : fix a regression where transforms were not applied anymore to the camera/viewport

## [5.0.1] - _2017-12-03_
- Input : fix a regression with bindPointer
- Loader : fix the progressBar position when resizing the screen

## [5.0.0] - _2017-12-01_
- Audio : Howler core update (2.0.5)
- Audio : added a function to check if audio is muted globally
- Core : fix fullscreen detection when not set on the main canvas
- Core : remove obsolete ES5 shim (it's 2017, update your browser!)
- Core : updated orientation detection, based on the new (draft) Orientation API
- Debug : fixed debug panel toggle features, and automatically display the toggle key
- Geometry : new specific values can be returned through the callback for Observable Vectors
- Input : fix a bug where the gamepad axes may not trigger KEYUP events
- Input : remove deprecated argument type for `me.input.bindGamepad()`
- Input : remove deprecated `mousewheel` event
- Input : remove deprecated `MS` prefixed Pointer Event
- Input : standardize Event.button value and usage across all input models
- Input : me.input.preventDefault now correctly define the default action for pointer events
- Input : fix potential multitouch issues on "hybrid" browsers supporting both TouchEvent and PointerEvent
- Renderable : properly apply transformation and anchor for all me.Renderable objects
- Renderable : move flipX/flipY to me.Renderable, and remove deprecation warning
- Renderable : new `isKinematic` property allowing to opt-out from collision and input events
- Renderable : slightly refactored me.ColorLayer and exposed its me.Color property
- TMX : added support for layer grouping (Tiled 1.0.0)
- Viewport : added a method to unfollow the current target

## [4.1.1] - _2017-02-28_
- Core : fixed a bug in `Number.prototype.round()`
- Core : throw an exception when attempting to add an invalid state in `me.state.set()`
- Core : fixed `falling` and `jumping` flags on `me.Body` when gravity is reversed
- Geometry : fixed a bug in `me.Vector3d.abs()`
- Geometry : added a new `me.Matrix2d.multiplyVectorInverse()` method
- Pointer : fixed `touchstart` events
- Pointer : replaced non-standard `mousewheel` with W3C standard `wheel` events
- Pointer : fixed duplicate `wheel` events

## [4.1.0] - _2017-01-16_
- Audio : updated to latest Howler 2.0.2 (WebAudio resume/seek fixes, and IE related security issues)
- Audio : added a `me.audio.seek` function, to change or get the current position of a specific audio clip
- Core : throw an error message when registering a non valid object in the object pool (i.e. undefined class)
- Loader : added the possibility to configure path (baseUrl) by asset types.
- Loader : added a 'crossOrigin' option to enable/allow cross-origin image loading for WebGL
- Loader : fixed an issue where callbacks were randomly fired twice when refreshing the page (krojew)
- Loader : reduced memory usage (reduced overlay size for the logo, and prevent from creating the Font overlay in WebGL)
- Particles : fixed a (huge) performance regression with particle generation / handling
- Pointer: fixed bug where a device allowing both mouse & touch events would only emit touch events.
- Pointer: fixed a regression with multi-touch event detection on iOS & Android
- Pointer: fixed a regression with callback handling & cleaning in the releasePointerEvent function
- Renderable : fixed a regression in me.Sprite.isCurrentAnimation()
- TMX : TMX maps and renderers are now fully contained in their own space, and do no pollute me.game anymore
- TMX : exposed the TMX renderers API and related utility functions to convert tile to/from pixel coordinates
- TMX : improved API to manage isometric map & coordinates (e.g. vector and shape conversion)
- TMX : added a simple isometric "tile selector" in the isometric map example
- TMX : me.Layer.getTile() will now return `null` if there is no corresponding tile, instead of throwing an exception
- TMX : added a getRenderer() function to me.Layer that returns the layer TMX renderer.
- Viewport : added the possibility to define a global transformation to the viewport
- WebGLRenderer : now properly complain when using NPOT textures, and throw an exception for repetitive ones
- WebGLRenderer : does not create anymore a default overlay for me.Font drawing, unless required (reminder: me.Font+WebGL = Bad!)

## [4.0.0] - _2016-11-29_
- Audio : updated to the latest Howler 2.0.1 version
- Container : added a 'forEach' function that allows to iterate through all children
- Core : largely improved and completed the matrix implementation and usage
- Core : Object.assign polyfill update
- Core : various improvements and fixes to jasmine test units
- Debug : fixed the debug panel display when using the WebGL renderer
- Font : added true support for bitmap font generated out of true type fonts (e.g. Littera, bmfont, bmglypgh, etc...)
- Particles : reduced creation/use of temporary (vector) objects
- Pointer : fixed bug with Chrome on Windows touch devices where touch input would register, but mouse input would not. (credit to BrianRosamilia)
- Pointer : PointerEvent detection is now fully W3C compliant
- Pointer : automaticaly free any defined region if there is no callback left
- Renderable : added a new `currentTransform` property that defines the renderable transformation matrix
- Renderable : transformations can now be automatically applied through the `autoTransform` flag (off by default for user-defined objects)
- Renderable : me.AnimationSheet has been merged into me.Sprite (me.AnimationSheet is now only an alias), and rendering function simplified
- Renderable : fixed image layer first update, when added to a child container (and not directly the root one)
- Renderer : simplified/aligned both the Canvas and WebGL renderer API in a more WebGL fashion
- Renderer : added a subPixel rendering option (off by default)
- Shapes : polygon based shapes can now be freely transformed, and bounding box will be resized accordingly
- TMX : scaling and rotation can now be applied to a tilemap (see me.levelDirector.loadLevel() for example)
- TMX : fixed some issues when loading TMX level into a child container.
- WebGLRenderer : fixed the currentColor alpha not taking in account the "globalAlpha" (now better match canvas renderer)

## [3.1.0] - _2016-05-17_
- Audio : exposed a `me.audio.rate` function to allow modifying the playback rate of the specified audio clip.
- Audio : added back the possibility to stream audio elements (through the `stream` flag when defining audio assets)
- Camera : use the `alpha` component of the given color as the threshold for fading effect
- Color : normalized support for #RGBA and #RRGGBBAA formats (to match CSS standard)
- Core : added a `me.game.updateFrameRate` function to change the renderer framerate at runtime
- Core : simplified the "startup" functions to allow for shorter initialization code (see boilerplate)
- Core : removed previous Ejecta "hacks" (requires the latest Ejecta 2.1/development version)
- Documentation : various fixes and missing items added (e.g me.Object that was missing)
- Debug : debug panel(s) now automatically register themselves upon loading (see boilerplate)
- Input : added support for gamepad analogue axis binding
- Input : fixed a regression with pointer events not firing with "floating" regions (@thedrumchannell)
- Particles : fixed a crash when removing a particle emmiter during a level change/reset
- Renderable : fixed missing `onDestroyEvent` function when adding basic renderables to the game world.
- Renderable : fixed Sprite objects initialization when using a string argument for "image" (@trevorjwilliams)
- TMX : added support for JSON-format external tilesets
- TMX : fixed the clearTile function when using `preRender` and the WebGL renderer
- TMX : fixed `prerender` on browsers that support Canvas2DContextAttributes.alpha
- TMX : disabled animated tiles when using the `prerender` mode (these two are not compatible)
- TMX : fixed a regression with Tile property parsing
- TMX : fixed a regression with level loading when no tilesets are defined.
- TMX : fixed decoding of maps using CSV data format (in Tiled) and exported to JSON
- TMX : added support for typed custom properties (Tiled 0.16)
- WebGLRenderer : added a workaround for Safari resetting WebGL attributes bindings (see #783)

## [3.0.1] - _2016-02-23_
- Core : fixed/improved compatibility with Ejecta (e.g. initialization, CAFF support)
- Input : actually really truly fix pointer event z-ordering, finally

## [3.0.0] - _2015-11-03_
- Audio : updated to the latest Howler v2.0.0 beta version
- Audio : added a `me.audio.resume` function for added convenience (was already possible by calling back `me.audio.play`)
- Container : added an `autoDepth` feature that auto-increments a child's z-coordinate when inserted
- Color : add support for the #ARGB and #AARRGGBB formats
- Core : renamed `Object.extend` to `me.Object.extend` (fixes conflicts with FaceBook SDK and underscore/lodash) (@jdrorrer)
- Core : plugins are now registered to `me.plugins` to prevent collisions within the `me.plugin` namespace
- Core : replaced `String.contains` by its ES6 equivalent: `String.includes`
- Core : replaced `Number.sign` by its ES6 equivalentL `Math.sign`
- Core : `me.game.currentLevel` has been removed in favor of accessing objects through `me.game.world` -- added `me.LevelDirector.getCurrentLevel()` as a stop-gap
- Core : added `me.sys.updatesPerSecond` to configure updating less often than drawing (@Giwayume)
- Entity : new positioning method, where the renderable is positioned according to its anchor and the Entity's body anchor (@Giwayume)
- Examples : added an example showing how to build a basic menu (with a panel, checkboxes and buttons)
- Font : fixed font height not being set when specifying a CSS Unit for the size
- Font : added basic CSS Unit conversion from ‘pt’,’ex’,’em’ to ‘px’ (these are approximation and not guaranteed accurate)
- General : the release build files are no longer versioned; this replaces the old style "melonJS-x.x.x.js" file naming convention with just "melonJS.js"
- Geometry : added a new `me.Vector3d` and `me.ObservableVector3d` class
- Geometry : removed `reverse` method from Vector classes; use `negateSelf` instead
- Geometry : removed `reflect` and `reflectN` methods from Vector classes
- Geometry : fixed `floor` and `floorSelf` methods on Vector classes with negative values
- Geometry : fixed `angle` method on Vector classes
- LevelDirector : level loading is now asynchronous; for sequential behavior, use the LEVEL_LOADED event or new `onLoaded` callback
- LevelDirector : added an `options` argument to the loading method; for specifying a target container, callback, and whether to merge (flatten) object groups
- Input : renamed last remaining mouse-related objects : `me.input.mouse` => `me.input.pointer`, `me.event.MOVEMOVE` => `me.event.POINTERMOVE`
- Input : added HTML5 Gamepad API support, with button and axis remapping
- Input : optimised pointer detection using the quadtree
- Input : now properly respect object z ordering when firing pointer events
- Input : fixed event detection on items in a nested container
- Renderable : prevent position vector re-allocation when pooling renderable objects
- Renderable : renderables are now using a 3d Vector for position, using the z axis for layer ordering.
- Renderable : fixed a distortion issue when scaling and rotating sprites (@Giwayume)
- Renderable : fixed frame position when using cropping in TexturePacker (@Giwayume)
- Renderable : `anchorPoints` now defines the renderable position, scaling and rotation default origin point (@Giwayume)
- Renderable : better animation definition, allowing to set the animation delay on a per-frame basis
- Renderable : added `anchorPoint` setting to the constructor
- Renderer : added `renderer.createPattern()` and `renderer.drawPattern()`
- Shapes : added support for the free Physic Body Editor tool (in addition to the existing PhysicsEditor support)
- Shapes : refactored `me.Rect` to inherit from `me.Polygon`
- Texture : added support for per-frame pivot points in animations (@Giwayume)
- TMX : added hexagonal map support (@matthewmmorrow)
- TMX : optimized all renderers to be more GC friendly (using the pooling system for temporary objects)
- TMX : refactored the `me.TMXTileMap` object, so that it can be used to easily add level into a container object
- TMX : `me.ImageLayer` is now drawn relative to the viewport boundary, and can be anchored appropriately
- TMX : internally normalizes XML into the same JSON format supported by Tiled; cleans up many compatibility functions and removes several fallback cases
- TMX : removed `me.TMXTileMap.moveToCenter` and `me.TMXTileMap.reset` methods
- TMX : added support for per-frame animation delay to Tiled Objects (for tileset animations)
- TMX : added support for layer data encoding in JSON map format (Tiled 0.13)
- TMX : added support for evaluations in TMX data; see spike entities in the platformer for a useful example
- TMX : fixed an isometric rendering bug with odd tile heights
- TMX : throw an error message when using map exported in XML (deprecated in Tiled 0.15)
- TMX : allow to parse the `backgroundcolor` attribute as formatted in Tiled 0.15 (#AARRGGBB)
- TMX : use the new `columns` property (if available) when parsing maps (Tiled 0.15)
- TMX : fixed a regression in AD tile rotation (squares tiles only)
- Video : optimized ImageLayer repeat modes (repeat modes require power-of-two sized images for WebGL)
- Video : added `fill-min` and `flex` scaling modes
- Video : animations are now able to skip frames for low FPS devices and high-speed animations
- WebGLRenderer : added a `repeat` parameter to `createTexture` method

## [2.1.4] - _2015-09-09_
- Audio : fixed the audio-enable workaround on iOS9
- Tween : fixed potential re-initialization issues when recycling tween objects.

## [2.1.3] - _2015-07-26_
- Audio : fixed an issue with decoding audio data on Opera
- Audio : updated to the latest 2.0 Howler beta (fixes a loop issue on Chrome mobile, and touch event for iOS playback)
- Core : fixed an exception in the Map polyfill
- Documentation : added docs for the Renderer interface, including the beta WebGLRenderer and shader
- Particles : fix an exception in `me.ParticleContainer` (introduced in 2.1.2)
- TMX : fixed TMXLayer opacity when preRender is enabled
- TMX : fixed ImageLayer opacity
- Video : fixed a regression where `me.device.getPixelRatio()` no longer works when called before `me.video.init()` (introduced in 2.1.0)
- WebGLRenderer : fixed a bug that causes a compile failure with the quad fragment shader on a small number of platforms

## [2.1.2] - _2015-07-09_
- LevelDirector : do not replace Tile Object's `renderable`
- Renderable : fixed renderable bounds initialization with object pooling

## [2.1.1] - _2015-06-06_
- Container : fixed child bounds when manipulating the container position.
- Core : fixed a regression when using the pooling system with renderables.
- Examples : fixed conditional debugPanel loading in cocoonJS
- Font : fixed the drawStroke function (@zoiba)
- Input : fixed an uncaught exception with the 'maxTouchPoints' polyfill under Chrome 43+
- Input : fixed/improved `pointerEvent` and `pointerLeave` event bindings for the sample GUI Object
- Loader : throw an exception indicating to use JSON if XML parsing is not supported by the browser/platform

## [2.1.0] - _2018-12-24_
- Audio & Loader : file/clip names passed to various methods are now case sensitive. Removed uses of toLowerCase on variables.
- Audio : properly dispose of audio resources when using cocoonJS
- Container : `getChildByProp` and friends now accepts a RegExp for value matching
- Color : added high-precision color transformation for me.Color
- Core : added `me.pool.exists` (@xorinzor)
- Core : fixed collision detection with nested Containers
- Core : added `me.game.HASH` to pass key-value options in the URL
- Core : now uses only case-sensitive string matching; DoN't MiX cAsE!
- Device : added browser language detection
- Entity : entity bodies now have a default shape if not overridden by the entity constructor.
- Entity : renderables are now positioned relative to the body bounds
- Font : updated me.Font to work with me.Color (@xorinzor)
- Font : updated the me.Font api to be consistent with me.BitmapFont and the Renderer class
- Font : added support for WebGL (using me.Font is however not recommended for performances reason)
- Input : added support for `pointerenter` and `pointerleave` events (@TheManuz)
- Input : allow regions to be any shape when registering pointer event, and not just me.Rect
- Input : `releasePointerEvent` now accepts an optional extra argument that references "which callback" to release
- Particles : fixed angle variation and speed variation in `me.ParticleEmitter`
- Renderable : normalized constructors for `me.Sprite` and `me.AnimationSheet` (see the wiki upgrade guide)
- Renderable : removed `hWidth` and `hHeight` properties
- Shapes : added basic support for the PhysicsEditor tool (mainly shapes definition)
- Texture : added support for the WebGL Renderer
- Texture : texture atlas can now be created using a “standard” sprite sheet
- Texture : `me.TextureAtlas` has been renamed to `me.video.renderer.Texture`
- TMX : added parsing of the new `id` (unique ID) property for objects (Tiled 0.11.0)
- TMX : fixed horizontal, vertical and antidiagonal flipping for tile objects
- TMX : remove deprecated "transparency color" - use PNG images with alpha channel instead
- Video : refactored the me.video.init to be more flexible in terms of mandatory/optional arguments
- Video : turn canvas transparency off by default; can be enabled by passing `options.transparent = true` to `me.video.init()`
- Video : renderers are now classes that can be instantiated with `new me.CanvasRenderer` and `new me.WebGLRenderer`
- Video : added support for the `image-rendering` CSS property standard "pixelated" value
- Video : added new `scaleMethod` option : `fit`, `fill-max`, `flex-height`, `flex-width`, and `stretch`; replaces old `maintainAspectRatio` flag (@Djokal)

## [2.0.2] - _2014-12-15_
- Audio : automatically cleanup `onend` callbacks in `me.audio.play`
- Audio : `me.audio.play` now applies the `loop`, `onend`, and `volume` properties only to the expected sound instance ID
- Audio : fix `me.audio.unmute()`
- Audio : updated to the latest Howler 2.0 build (various fixes and improvements)
- Audio : added `instance_id` parameter to `mute` and `unmute` methods
- Audio : updated documentation
- CanvasRenderer : fixed an issue/regression with the `globalAlpha` functions
- Core : fixed collision detection between `me.Ellipse` (circle) and `me.Line` shapes
- Core : fixed renderable positioning with nested me.Container objects
- Core : fixed an uncaught exception in IE9 with Float32Array
- Documentation : fixed anchor positioning
- Documentation : added anchor target highlighting
- Documentation : fixes in me.Font, me.BitmapFont, and me.Entity
- Entity : removed `me.ObjectSettings`
- Font : fixed globalAlpha not being set when using `me.Font.setOpacity()`
- TMX : fixed an uncaught exception when loading a map with an empty object layer (thanks @Tiagojdferreira)

## [2.0.1] - _2014-11-28_
- Core : fixed loading under CocoonJS when using Canvas+
- Shapes : replaced the isometric magic numbers used for scaling, by proper and more accurate math constants (ldd)
- Audio : fixed sound looping
- Audio : fixed onend callback not being repeatedly fired when looping a sound
- Audio : cleaned the onend callback when stopping a sound
- Audio : added a me.audio.fade() function

## [2.0.0] - _2014-11-18_
- Core : implemented a new shape based collision system for the collision layer
- Core : added user agent detection for Kindle devices
- Core : fixed the collision response for circles (me.Ellipse with a uniform radius)
- Shapes : renamed me.PolyShape to me.Polygon and simplified the constructor (no longer needs a fourth param)
- Shapes : added a new shape: me.Line
- Shapes : added multi shapes support for body
- Shapes : added rotation and scaling support for `me.Polygon`/`me.Line` shapes.
- Audio : the Howler library has been updated to the last 2.0 beta
- Audio : removed the cocoonJS hack, as the pause/resume function have been fixed through Howler 2.0
- Entity : added automatic collision response handling (not fully done yet actually)
- Container : fixed an issue where "non-floating" containers always passed the in-viewport test
- CanvasRenderer : All fill & stroke methods have removed the color & line width parameters. Use the new setColor and setLineWidth methods.
- CanvasRenderer : Removed strokeLine, was duplicate with drawLine
- WebGLRenderer : New WebGLRenderer has reached "alpha", and can be enabled by passing the `me.video.WEBGL` flag to `me.video.init()`
- Particles : fixed randomness in the emitter for scaling and rotation of particles
- Particles : fixed widget drawing in Particle Editor
- TMX : added rotation support for Polygon/PolyLine objects (Tiled 0.10+)
- TMX : added support for tileset animations (Tiled 0.10+)
- TMX : fixed isometric projection for Polygon/PolyLine objects
- TMX : fixed TSX external tileset loading

## [1.1.0] - _2014-09-03_
- Core : reorganised source code for all basic object definition/augmentation
- Core : new CI and unit testing frameworks
- Core : new object inheritance mechanism: http://github.com/parasyte/jay-inheritance
- Core : added array random and weightedRandom functions (aaschmitz)
- Core : added a Base64 Encode function (aaschmitz)
- Core : new `me.Error` class to help better track down exceptions' origin
- Core : brand new "Separate Axis Theorem " based collision algorithm (support polygon/ellipse, and provides more accurate collision response)
- Core : added collision filtering support
- Core : added a spatial partitioning algorithm (QuadTree) for super fast collision detection
- Container : `addChild` and `addChildAt` now return the added child
- Video : refactored canvas drawing out to me.CanvasRenderer. Video is now agnostic of rendering target. Use me.video.renderer to call things like getWidth, getHeight, getCanvas, getContext, etc.
- Video : constructor parameters changed. 2nd parameter now expects renderer type. For now, just supports me.video.CANVAS
- CanvasRenderer : object is passed to the draw calls of each object in the world Container. Implemented various draw apis fillRect, and fillArc for example. me.Font still requires an instance of Context2d.
- Renderable : renamed `me.SpriteObject` to `me.Sprite` and `me.ObjectContainer` to `me.Container`, for a cleaner API
- Renderable : constructors refactored to accept x & y numeric values, over a single vector object. Effects: me.Container, me.Rect, me.PolyShape, me.Ellipse, me.Renderable
- Shapes : setShape updated to accept x & y numeric values over a vector object for: me.Rect, me.PolyShape, me.Ellipse
- Camera : fixed viewport bounds setting when using isometric map (Juhana Paavola)
- Entity : entity object redesign with a full polygon shape based physic body implementation
- Entity : `me.ObjectEntity` has been renamed to `me.Entity` to avoid confusion between the old and new entity component.
- Audio : fixed some audio load issues and error callbacks
- Audio : sync'ed with last Howler 1.1.25 version (fixes numerous issues, see official changelog for more details)
- TMX : fixed the background color drawing when the level is smaller than the display canvas
- TMX : fixed the getTile function returning wrong tiles when using isometric maps
- TMX : fixed collision layer rendering issue with isometric map
- TMX : fixed world container size not being updated after a new level is loaded

## [1.0.2] - _2014-07-02_
- Core : improved general compatibility with IE9/IE10 (Desktop/Mobile/Tablets)
- Geometry : added basic type check for the `me.Vector2d` constructor
- Input : fixed event detection on Chrome 35+

## [1.0.1] - _2014-07-01_
- Core : removed unused `Object.mixin` method, (caused compatibility issues with socket.io and other libs)
- Entity : disable falling flag when gravity is disabled
- Entity : fix an exception in ObjectEntity.checkCollision()
- Entity : fixed a regression on breakable tiles
- Entity : use width and height by default if spritewidth and spriteheight are not defined
- Entity : throw an exception if mandatory fields width and height are not defined
- Entity : fixed an exception in ObjectEntity.flipX/Y()
- Loader : fixed asset loading when named as a number
- ObjectContainer : use cyclic zIndex by default instead of Infinity
- Audio : sync'ed with last Howler version (as now officially and properly support CocoonJS)
- Audio : melonJS now throws an exception when attempting to load audio assets before audio is initialized
- TMX : fixed a potential issue with ImageLayer when ratio is set to 0 in Tiled
- Font : fixed opacity property usage for me.BitmapFont object.
- Renderable : added a tap and hold feature to the me.GUI_Object object (juhanapaavola)
- Particles : fixed the particle emitter bounds (aaschmitz)
- Input : added several keyboard keys for input mapping (aaschmitz)

## [1.0.0] - _2014-05-29_
- Core : now pass the elapsed time as a parameter when calling any object update function
- Core : cleaned-up/renamed conflicting set function in shape and font objects
- Core : added new shapes objects (Ellipse, Polygon) on top of the existing Rectangle one
- Core : added a mixing property to object (insidiator)
- Core : deprecated object manipulation (add, remove) have been removed from me.game
- Core : renamed the `me.entityPool` API to `me.pool` and related functions (see documentation & upgrade guide)
- Entity : deprecated helper function (doJump, doWalk) have been removed
- ObjectContainer : renamed getEntityByProp to getChildByProp
- ObjectContainer : getChildByProp now returns all matching object type and not only "entities"
- Camera : camera bounds are now defined as a rectangle and not only in width and height
- Loader : added resource information to loader progress event (warpten)
- Loader : added loading of TMX data from javascript (json) objects (paulmedwal)
- Color : melonJS now defines a new me.Color class for advanced color manipulation
- Particles : added basic Particle System, with emitters and particles (aaschmitz/insidiator)
- Particles : added a particle emitter editor, see the example folder (insidiator)
- Device : added full cross-browser support for the Fullscreen API (see me.device)
- Device : added support for the vibration API (me.device.vibrate)
- Device : renamed the me.save.delete function to me.save.removed (delete is a reserved keyword)
- Device : added support for the visibilitychange API (pause/stop state on window show/hidden status)
- Audio : modernised (and also mobile compatible) web audio API based on the awesome Howler library
- Input : added the possibility to disable globally or per key the default browser action
- Input : automatically enable keyboard even on desktop type devices
- Input : the registerPointerEvent function now only accepts the standardized Pointer Event names.
- TMX : added proper support for all shape type (collision is still however resolved using AABB detection)
- TMX : XML TMX map are now converted to a JXON object on-the-fly, allowing to remove duplicated parsing code
- TMX : added the Tiled "type" property to TMXObject
- TMX : melonJS will now respect the object size as defined in Tiled when parsing/creating related object in the game world
- Timer : added a setTimeout and setIntevral function obeying the engine pause state
- Tween : fixed tweens to properly maintain time state when paused
- Renderable : `collisionBox` has been replaced by a more cleaner implementation (see `getShape`/`addShape`/`getBounds`)
- Renderable : the flicker function now takes the global flickering duration in ms (as opposed in frame count)
- Renderable : removed the visible property

## [0.9.11]
- Documentation : numerous fixes and improvements
- General : fix initial loading for me.save, and update documentation
- General : fix detection of localStorage on some phones (agmcleod)
- General : fix uncaught exception when objects without a position vector are added to a container
- Input : fully support event-driven key input with me.event.KEYDOWN and me.event.KEYUP
- Input : multiple keys bound to the same action will no longer cancel each other
- Input : fixed pointerEvent support on IE11
- ObjectContainer : fixed rendering of nested containers (again) - Thanks to Peter Hull
- ObjectContainer : fixed getEntityByProp with nested containers
- Animation : (quick) fixed hWidth and hHeight not being updated when the frame size is different
- Core : better support object reset through a onResetEvent function when using object pooling
- Tween : updated the me.Tween object to be usable with the object pooling mechanism
- Font : added a trimRight polyfill to the String class to help fixing multi-line ASCII rendering
- Font : added a drawStroke function
- Font : fixed a bug that broke some CSS font-family names, like `monospace` and `"Trebuchet MS"`

## [0.9.10]
- Core : fixed object `visible` flag not being set based on their parent group visible status
- Core : fixed both `pauseOnBlur` and `StopOnBlur` being enabled by default
- TMX : fixed the imageLayer reset bug (when unsubscribing the viewport change event)
- TMX : fixed an undefined tileset issue when adding a new Tile through the `setTile` function
- Documentation : fixed the parameter value of the hasChild function
- Renderable : moved the opacity related getter/setter function into the Renderable class
- Renderable : fixed group opacity setting fully overwriting renderable opacity settings
- ScreenObject : fixed cases where ScreenObjects may not be considered in the viewport
- ObjectContainer : fixed rendering of nested containers

## [0.9.9]
- General : added proper support for a jslint task and cleaned source code accordingly (nvlbg)
- General : added a renderable container object (me.ObjectContainer) and reorganize `me.game` accordingly
- General : added `me.game.world` as a reference to the game world root object container.
- General : added a new me.save class to manage localStorage, and moved (deprecated) the old me.stat to the plugin repository
- Core : improved game pause management (by swmuron)
- Core : added a `me.device` object containing device specific capabilities and events (agmcleod)
- Core : moved all device read-only flags to the new me.device object
- Core : fixed Opera Mobile detection when sniffing user agent
- Core : improved orientation change detection, added me.device.orientation and a specific minpubsub channel
- Core : moved debug flags to the debugPanel plugin
- Input : fixed accelerometer event registration when supported
- Input : added support for windows 8 accelerometer (Halfman)
- Input : improved mouse wheel event support to be compatible with all recent browsers
- Input : added support for the touchCancel and mousecancel events
- Input : added TAB key definition to key bindings (agmcleod)
- Loader : refreshed the loader a bit, and added the new logo
- Loader : fixed binary loader (agmcleod)
- Video : added support for CocoonJS 1.4 ('antialias' parameter and the new `dispose` function)
- Video : added proper support for video scaling on High-DPI devices (no longer requires the JS hack in the index HTML file)
- Video : fix `me.sys.scalingInterpolation` when display is resized.
- TMX : fixed default group opacity value not being applied to child objects.
- TMX : optimized tile rendering, by using a tileset reference in Tile object
- TMX : added preliminary support for non rectangular shapes in Tiled (although currently converted to me.Rect)
- TMX : fixed multiple image backgrounds with `ratio` properties that are different values
- TMX : fixed me.ImageLayer drawing being delayed by one frame
- Font : Font objects now properly extend me.Renderable
- GUI : `HUD` objects have been completely replaced by me.ObjectContainer; See Platformer example for new HUD implementation pattern.
- Animation : the `animationspeed` property, now defines the delay between frames in terms of milliseconds (as opposed to framecount)
- Animation : allow animation callback to prevent resetting to first frame by returning `false` *really fixed this time*
- Shapes : new shapes added for future expansion: me.Ellipse, me.PolyShape
- Shapes : `me.Rect.getRect()` renamed `getBounds()`
- Tween : the tween implementation has been updated to the last official r11 version.
- Camera : renamed the mislabeled worldToScreen and ScreenToWorld, and fixed a bug in one of the function.

## [0.9.8]
- Renderable : added ShoeBox Packed Texture Support (see `me.TextureAtlas`)
- Loader : the `tps` data type has been changed to a more generic `json` data type (agmcleaod)
- Input : added MSPointer support (Halfman)
- Input : normalized API and management of input event and enabled multi-touch for PointerEvent
- Input : added throttling support for `****move` events
- Core : main loop now uses requestAnimationFrame by default with a fallback to setTimeout
- Video : added the possibility to specify a maximum size when enabling video scaling
- Video : automatically limit the maximum size if the corresponding CSS properties are set
- TMX : added the possibility to specify different axis value for the scrolling ratio
- Font : fixed drawing characters with charCode smaller than the firstChar value.
- Renderable : allow animation callback to prevent resetting to first frame by returning `false`
- Core : added "Mobile" to `me.sys.isMobile` UA sniffer (fix Firefox OS detection)

## [0.9.7]
- General : melonJS now uses Grunt, the task manager, for the build system
- General : game objects will not update unless inside the viewport or `obj.alwaysUpdate` flag is enabled
- Audio : preliminary audio support for mobile devices (iOS6 for now)
- Core : added a `me.sys.isMobile` flag to detect running on a mobile device
- Core : now using `screencanvas` extension for CocoonJS
- Core : fixed `me.game.remove()` destroying the object too early
- Entity : ObjectEntity is now composed with a `renderable` component (does not anymore inherit from AnimationSheet)
- Entity : renderable default position is now set based on the me.ObjectEntity default anchor point.
- Entity : fixed ladder collision detection/management
- Examples : new collision_test example (see ticket #103)
- Examples : new font_test example
- Font : changed default alignement to `left`/`top`
- Font : added multiline support for `me.Font` and `me.BitmapFont`
- Geometry : most `me.Vector2d` methods return a reference to `this`, to allow method chaining
- Input : added a `me.input.unlockKey()` function that allows to manually unlock key (DblK)
- Loader : fixed loader when repeatedly calling the preloader
- Renderable : new base class for any objects that needs to draw (Sprite, ImageLayer, GUI, etc...)
- Renderable : added TexturePacker Support (see `me.TextureAtlas`)
- TMX : fixed `me.ImageLayer.ratio` on Firefox & Opera
- TMX : allows changing the imageLayer default origin using the imageLayer anchorPoint
- TMX : added a new `me.game.getEntityByProp()` function (DblK)
- TMX : added JSON map parsing support
- TMX : small optimization for isometric rendering (`pixelToTileCoords()` function)
- TMX : fixed access to inherited properties
- TMX : added an entry point for a potential gzip/zlib TMX decompression plugin
- TMX : fixed object positioning on isometric maps (andyveliz)
- TMX : property value convention for automatically JSON-decoding; prefix with `json:`
- Video : fixed `viewport.shake()`
- Video : optimized framerate on cocoonJS platforms by using the 'screencanvas' extension
- Video : disable video scaling interpolation by default

## [0.9.6]
- General : fix compatibility issue with previous iOS(5.x) and Android version
- Core : workaround for useNativeFrame when cancelAnimationRequest is not supported
- Audio : added volume and mute control settings
- Audio : added the possibility to stream audio elements
- TMX : code optimization to lower memory usage
- TMX : fixed layer scrolling when using pre-rendering
- Loader : fixed `me.loader.load` not adding TMX into the `me.levelDirector`

## [0.9.5]
- Audio : added mp4/aac pre-loading support
- Audio : added codec selection based on audio support level
- Core : fixed requestAnimationFrame
- Core : added an official plugin API
- Core : fixed a object removing and sorting lock issue
- Core : added a 'floating' property for renderables
- Core : added Object Pooling support
- Core : fixed the `me.game.getEntityByName` function when using camelcase names
- Debug : added a simple debug panel plugin
- Font : fixed font name starting with a decimal value
- Font : added changes to allow specifying a flat number of px,em, etc for font sizes.
- Font : added support for comma separated font names like in CSS
- Event : added Daniel Lamb minPubSub library for event publishing
- Event : fixed touch event support detection on cocoonJS
- Event : added `click`, `dblclick`, `tap` events
- Event : fixed mouse event conflict and mousewheel event
- Geometry : added a function to return the angle between two vectors
- Input : me.GUI_Object's onClicked() function has been renamed to onClick()
- Loader : use asynchronous mode when loading XML files
- Entity : added spacing and margin capacities for sprite (same as Tile Map Sprite)
- Entity : fixed flickering when using requestAnimationFrame
- Entity : added opacity setting
- Entity : fixed visible property automatic setting
- Entity : moved collision check outside of the Entity Object
- Entity : cleaned and renamed the collision utility function
- Entity : added the possibility to check for multiple collision
- Entity : added a `collideType` function to check for collision with a specific type
- Entity : moved collisionBox from SpriteObject to Entity Object
- Entity : added a distanceToPoint, angleTo and angleToPoint function
- Tween : fixed tween when pausing game
- Tween : various fixes and optimization from the official repository
- TMX : fixed a bug that was preventing a non visible layer to be set visible later
- TMX : fixed the clearTile function on non visible layers (e.g. collision map)
- TMX : added official support for Opacity in TiledLayer, TMXLayer, colorLayer and ImageLayer
- TMX : added support for TSX files
- TMX : added a `repeat` property to Image Layer instances, similar to CSS background-position
- TMX : parallax layer is now based on the new "official" Image Layer support (from Tiled 0.9.0)
- TMX : fixed the `getObjectGroupByName()` function
- TMX : added support for custom tile type
- Tutorial : fixed camel case issue in resource names
- Tutorial : update the parallax part to reflect last changes in melonJS (Image Layer)
- Video : added support for display scaling
- Video : added a setImageSmoothing function
- Example : added "whack-a-mole" as an official example
- Example : added a new "platfomer" example (using legal assets) and removed alex kidd based examples

## [0.9.4]
- General : melonJS is now only using Google Closure (removed YUI compressor)
- General : melonJS is now ES5 strict mode compliant
- General : added a .editorconfig file to provide basic rules to editors
- Core : added a flag to enable/disable automatic pause on loosing/gaining focus
- Core : fixed rendering loop when using requestAnimationFrame (parasyte)
- Core : added a renderCollisionMap debug setting (parasyte)
- Core : use console.error instead of window.alert
- Core : added the possibility to specify a user-defined sort function
- Core : fixed mixing screenObject added as object, and TMX level loading
- Core : fixed screenObject when extending update & draw function
- Entity : added an anchor point for renderables (through SpriteObject)
- Entity : added rotation support (through SpriteObject)
- Entity : added the possibility to pause an animation (parasyte)
- Entity : fixed default position by using top-left coordinates as in Tiled
- Entity : fixed invisible entities being removed when colliding
- Font : fixed me.Font horizontal alignement
- General : fixed & enhanced object/memory deallocation when switching levels
- General : rewrote the parallax code using the new Generic Image Layer Object
- General : added support for vertical parallax layer
- Geometry : added a function to test for vector "equality"
- Geometry : added a couple of Self function (to help avoid object creation)
- Loader : fixed a case issue between filename and asset name
- Input : added the possibility to check for mouse event based on world or screen coordinates
- Input : fixed a false-positive issue at initialization, and usage of special keys (parasyte)
- TMX : added dynamic layer rendering (configurable globally or per layer through Tiled)
- TMX : added Image Layer Support (Tiled daily builds only)
- TMX : added support for the new map background property (Tiled daily builds only)
- TMX : added a Color Layer (used when a background color is defined)
- TMX : another round of clean-up and various bug fixing
- TMX : added support for TMX Object without name (parasyte)
- TMX : added preliminary support for polygon and polyline objects (parasyte)
- TMX : fixed visible flag and user-defined properties not being applied to ObjectGroup
- TMX : fixed rendering issue with transformed tiles (AD, H, V)
- TMX : fixed display of map being smaller than the viewport
- TMX : fixed TMXObject not being declared correctly under the "me" namespace
- Utils : fixed the HexToRGB function and added support for the 3 char format (#hhh)
- Tween : fixed exception in the tween library (parasyte)
- Documentation : corrected and added missing documentation

## [0.9.3]
- General : better error management and reporting
- General : added a dummy console.log for platforms not supporting it
- General : melonJS now uses Google Closure for library minification
- General : added a global gravity setting that will override entities default value if defined
- Core : now properly calls all objects onDestroyEvent function when resetting game
- Core : added the possibility to define a callback when a level is fully loaded
- Core : added a couple of utility functions (degToRad, radToDeg)
- Core : fixed GUID creation when passing a non string parameter
- Core : only check for collision when the projection vector is set
- TMX : global rewrite, code optimization and clean-up
- TMX : added support for isometric map loading and display
- TMX : added support for perspective map loading and display
- TMX : relaxed TMX property case sensitive checks
- TMX : added tile rotation support (Tiled 0.8.0)
- TMX : fixed level name property not being set, and use it when required
- LevelDirector : fixed the nextLevel & previousLevel functions
- Loader : added binary file support
- Loader : added possibility to dynamically load any resources (i.e. during the game)
- AnimationSheet : the entire sprite-sheet is now use to create the default animation
- Entity : fixed CollisionBox not being properly used on y axis when checking for collision
- Entity : fixed CollisionBox issue when dealing with sub-pixel positioning
- Entity : fixed setVelocity not setting y velocity when x velocity is null
- Entity : added missing properties (GUID, name) in InvisibleEntity
- Entity : fixed res.obj not defined in InvisibleEntity
- HUD : added a removeItem function
- GUI  : rewrote the GUI Object accordingly to the new event management
- Geometry : added a containsPoint function
- Geometry : added a floor() and ceil() function to Vector2d
- BitmapFont : fixed BitmapFont ignoring  'center' alignment
- BitmapFont : avoid implicit object conversion when rendering a bitmapFont
- Input : fixed use of numeric keys by using a proper constant value.
- Input : rewrote mouse event management
- Input : added touch event management (with mouse event emulation)
- Input : (beta) multitouch support
- Input : added Accelerometer event management
- Documentation : added a lots of missing documentation on various API
- Documentation : added JS syntax highlighting in the tutorial
- Documentation : don't use onDestroyEvent to manage score in the examples
- Documentation : exposed more TMX objects and APIs

## [0.9.2]
- General : melonJS is now licensed under the terms of the MIT License
- General : added some Cake magic, allowing to use melonJS with CoffeeScript (by scan)
- General : added melonJS UML Class Diagram in the official repository (by Ben2303)
- General : melonJS now properly stays in it's own namespace (me)
- Audio : configurable behavior in case of audio loading error
- Core : fixed a shaking bug when collision box is not aligned with the sprite box
- Core : fixed collision detection bug (object being tested again itself)
- Core : refactored fading function using Tween objects (API CHANGE, see documentation)
- Core : added a helper method to know the sign of an number
- Core : corrected variables definition (global->local)
- Core : added a GUID (Game Unique Identifier) to objects
- Core : getEntityByName now also returns non Entity Object (like layers)
- Core : fixed state change when using custom state values
- Core : me.game.collide now also returns an object reference in the collision vector
- Core : renamed and correctly initialize the localStorage flag capability
- Documentation : various documentation correction and improvements
- Entity : added friction management
- Entity : updateMovement function now returns a collision "vector" (API CHANGE, see documentation)
- Entity : refactored/cleaned-up movement/collision function
- Entity : added support for multiline spritesheet (fixed cell size)
- Entity : added the possibility to define a specific transparent color for spritesheet
- Entity : implemented a resize function, allowing to resize a sprite on the fly
- Entity : optimized/refactored SpriteObject
- Entity : fixed object with 1 single sprite (no animation) not begin updated
- Entity : added the possibility to also specify a callback when an animation is over
- Entity : fixed an initialization issue when using melonJS without a Tilemap
- GUI : corrected me.GUI_Object and added missing documentation
- GUI : marked me.GUI_Object as deprecated, as it will be rewritten in a next release
- Event : also cancel event bubbling
- Font : added support for multiline fontsheet
- HUD : added a setItemValue() function
- HUD : corrected display issue on Opera
- Loader : added possibility to add graphics resources after pre-loading (e.g. ingame)
- TMX : use native Base64 decoding when available
- Viewport : object to follow can either be a Object Entity or a position Vector
- Viewport : fixed default value (if parameter not specified) for Axis to follow on
- Video : cleaned-up the applyRGBFilter function

## [0.9.1]
- Core : "cache image" option (disabled by default) to use canvas instead of directly using Image Object
- Core : add onPause and onResume callback when game is paused/resumed on losing/gaining focus
- Core : added possibility to pass more than 1 extra argument to me.state.change (extra arguments will be passed to the reset function of the target object)
- Core : object can now only be destroyed using me.game.remove(obj), made of ObjectEntity.destroy a private function
- Core : beta dirty Rectangle support (only working for non scrolling level for now)
- Core : experimental webGL wrapper
- Core : added a getEntityByName function
- Core : fixed some kind of "lag" issues when deleting objects
- Core : improved the requestAnimFrame usage, and fallback to setInterval. me.sys.useNativeAnimFrame to enable it (disable by default)
- Core : optimized the way objects are managed in the game loop
- Core : defined (and used) a Object.defineProperty function to replace __defineGetter__ / __defineSetter__ (was not supported on IE9/IE10)
- TMX : implemented Tiled "transparency" property for Tileset, allowing to specify which color should be transparent (note: this slows down level loading)
- TMX : fixed unnecessary canvas creation for the collision layer (should free some memory)
- TMX : cleaned/optimized data loading and fixed an issue on FF with XML parsing of "big" Base64 encoded maps (only first nodeValue was parsed by the engine)
- TMX : added support for CSV data encoding
- TMX : added support for flipped tiles, as supported in Tiled 0.7
- TMX : added multiple tileset support
- TMX : added a "background_image" property. To be set through Tiled, and allowing to specify a fix background.
- Entity : merge AnimatedSpriteObject into SpriteObject. SpriteObject now takes an optional additional argument to create an animated sprite
- Entity : added a distanceTo function
- Viewport : fixed camera refresh when changing "deadzone" values
- Loader : added a "onProgress" callback to get progress notification, removing the need to poll the loader each frame for loading progress
- Loader : fix progress notification when TMX files are loaded into the levelDirector
- Loader : added a retry counter for the audio loading : script will now stop and throw an exception after 3 unsuccessful loading attempts.
- Video : renamed "applyEffect" to "applyRGBFilter", and fixed an issue on Opera
- Audio : fixed compatibility issues with IE9/10
- Geometry : added a merge function to me.Rect

## 0.9.0
- Documentation : API documentation using jsdoc-toolkit (finally!)
- Geometry : define getter for me.Rect coordinates (simplify code)
- Level : support for fadeOut/fadeIn effect in me.LevelEntity (when changing levels)
- Entity : correctly implemented InvisibleEntity Objects (no longer inherit from ObjectEntity)
- Entity : makes SpriteObjet inherit from me.Rect (make it easier to manage sprite pos and size)
- Loader : cosmetic update of the preloader screen
- Viewport : rounding issue fix in the viewportEntity (aroun 30% less CPU usage on Safari/OSX!)
- TMX : cleaned & refactored tilemap collision detection (still not perfect though)

## 0.8.0
- TMX : support for "TiledObject" (as supported in Tiled 0.6.2)
- Entity : re-factored constructor call to Object Entities (to use the settings obj produced through Tiled)
- Entity : moved collision function from AnimatedSpriteObject to ObjectEntity

## 0.7.9
- Viewport : added some effects to the camera object (shaking, fading, ...)
- Viewport : re-factored and fixed the camera/viewport code
- Core : re-factored public objects using John Resig Inheritance mechanism.
- Core : fixed the "bootstrap" (unnecessary double call)
- Entity : re-factored parallax code & corrected a bug that was causing the layers to be drawn 2x times
- Audio : partially fix crash audio in safari when audio is enabled
- Core : fixed gfx glitches (rounding issues)

## 0.7.6 - _2011-05-16_
- first public version with alex4 !
- www.melonjs.org is live :)

[13.0.0]: https://github.com/melonjs/melonJS/compare/13.0.0...12.0.0
[12.0.0]: https://github.com/melonjs/melonJS/compare/12.0.0...11.0.0
[11.0.0]: https://github.com/melonjs/melonJS/compare/10.12.0...11.0.0
[10.12.0]: https://github.com/melonjs/melonJS/compare/10.11.0...10.12.0
[10.11.0]: https://github.com/melonjs/melonJS/compare/10.10.0...10.11.0
[10.10.0]: https://github.com/melonjs/melonJS/compare/10.9.0...10.10.0
[10.9.0]: https://github.com/melonjs/melonJS/compare/10.8.0...10.9.0
[10.8.0]: https://github.com/melonjs/melonJS/compare/10.7.1...10.8.0
[10.7.1]: https://github.com/melonjs/melonJS/compare/10.7.0...10.7.1
[10.7.0]: https://github.com/melonjs/melonJS/compare/10.6.1...10.7.0
[10.6.1]: https://github.com/melonjs/melonJS/compare/10.6.0...10.6.1
[10.6.0]: https://github.com/melonjs/melonJS/compare/10.5.2...10.6.0
[10.5.2]: https://github.com/melonjs/melonJS/compare/10.5.1...10.5.2
[10.5.1]: https://github.com/melonjs/melonJS/compare/10.5.0...10.5.1
[10.5.0]: https://github.com/melonjs/melonJS/compare/10.4.0...10.5.0
[10.4.0]: https://github.com/melonjs/melonJS/compare/10.3.0...10.4.0
[10.3.0]: https://github.com/melonjs/melonJS/compare/10.2.3...10.3.0
[10.2.3]: https://github.com/melonjs/melonJS/compare/10.2.2...10.2.3
[10.2.2]: https://github.com/melonjs/melonJS/compare/10.2.0...10.2.2
[10.2.1]: https://github.com/melonjs/melonJS/compare/10.2.0...10.2.1
[10.2.0]: https://github.com/melonjs/melonJS/compare/10.1.1...10.2.0
[10.1.1]: https://github.com/melonjs/melonJS/compare/10.1.0...10.1.1
[10.1.0]: https://github.com/melonjs/melonJS/compare/10.0.2...10.1.0
[10.0.2]: https://github.com/melonjs/melonJS/compare/10.0.1...10.0.2
[10.0.1]: https://github.com/melonjs/melonJS/compare/10.0.0...10.0.1
[10.0.0]: https://github.com/melonjs/melonJS/compare/9.1.2...10.0.0
[9.1.2]: https://github.com/melonjs/melonJS/compare/9.1.1...9.1.2
[9.1.1]: https://github.com/melonjs/melonJS/compare/9.1.0...9.1.1
[9.1.0]: https://github.com/melonjs/melonJS/compare/9.0.2...9.1.0
[9.0.2]: https://github.com/melonjs/melonJS/compare/9.0.1...9.0.2
[9.0.1]: https://github.com/melonjs/melonJS/compare/9.0.0...9.0.1
[9.0.0]: https://github.com/melonjs/melonJS/compare/8.0.1...9.0.0
[8.0.1]: https://github.com/melonjs/melonJS/compare/8.0.0...8.0.1
[8.0.0]: https://github.com/melonjs/melonJS/compare/7.1.1...8.0.0
[7.1.1]: https://github.com/melonjs/melonJS/compare/7.1.0...7.1.1
[7.1.0]: https://github.com/melonjs/melonJS/compare/7.0.0...7.1.0
[7.0.0]: https://github.com/melonjs/melonJS/compare/6.4.0...7.0.0
[6.4.0]: https://github.com/melonjs/melonJS/compare/6.3.0...6.4.0
[6.3.0]: https://github.com/melonjs/melonJS/compare/6.2.0...6.3.0
[6.2.0]: https://github.com/melonjs/melonJS/compare/6.1.1...6.2.0
[6.1.1]: https://github.com/melonjs/melonJS/compare/6.0.0...6.1.1
[6.0.0]: https://github.com/melonjs/melonJS/compare/5.1.0...6.0.0
[5.1.0]: https://github.com/melonjs/melonJS/compare/5.0.1...5.1.0
[5.0.1]: https://github.com/melonjs/melonJS/compare/5.0.0...5.0.1
[5.0.0]: https://github.com/melonjs/melonJS/compare/4.1.1...5.0.0
[4.1.1]: https://github.com/melonjs/melonJS/compare/4.1.0...4.1.1
[4.1.0]: https://github.com/melonjs/melonJS/compare/4.0.0...4.1.0
[4.0.0]: https://github.com/melonjs/melonJS/compare/3.1.0...4.0.0
[3.1.0]: https://github.com/melonjs/melonJS/compare/3.0.1...3.1.0
[3.0.1]: https://github.com/melonjs/melonJS/compare/3.0.0...3.0.1
[3.0.0]: https://github.com/melonjs/melonJS/compare/2.1.4...3.0.0
[2.1.4]: https://github.com/melonjs/melonJS/compare/2.1.3...2.1.4
[2.1.3]: https://github.com/melonjs/melonJS/compare/2.1.2...2.1.3
[2.1.2]: https://github.com/melonjs/melonJS/compare/2.1.1...2.1.2
[2.1.1]: https://github.com/melonjs/melonJS/compare/2.1.0...2.1.1
[2.1.0]: https://github.com/melonjs/melonJS/compare/2.0.2...2.1.0
[2.0.2]: https://github.com/melonjs/melonJS/compare/2.0.1...2.0.2
[2.0.1]: https://github.com/melonjs/melonJS/compare/2.0.0...2.0.1
[2.0.0]: https://github.com/melonjs/melonJS/compare/1.1.0...2.0.0
[1.1.0]: https://github.com/melonjs/melonJS/compare/1.0.2...1.1.0
[1.0.2]: https://github.com/melonjs/melonJS/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/melonjs/melonJS/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/melonjs/melonJS/compare/0.9.11...1.0.0
[0.9.11]: https://github.com/melonjs/melonJS/compare/0.9.10...0.9.11
[0.9.10]: https://github.com/melonjs/melonJS/compare/0.9.9...0.9.10
[0.9.9]: https://github.com/melonjs/melonJS/compare/0.9.8...0.9.9
[0.9.8]: https://github.com/melonjs/melonJS/compare/0.9.7...0.9.8
[0.9.7]: https://github.com/melonjs/melonJS/compare/0.9.6...0.9.7
[0.9.6]: https://github.com/melonjs/melonJS/compare/0.9.5...0.9.6
[0.9.5]: https://github.com/melonjs/melonJS/compare/0.9.4...0.9.5
[0.9.4]: https://github.com/melonjs/melonJS/compare/0.9.3...0.9.4
[0.9.3]: https://github.com/melonjs/melonJS/compare/0.9.2...0.9.3
[0.9.2]: https://github.com/melonjs/melonJS/compare/0.9.1...0.9.2
[0.9.1]: https://github.com/melonjs/melonJS/compare/0.9.0...0.9.1
