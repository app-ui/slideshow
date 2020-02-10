# APP UI: Slideshow

This is a simple UI component to create a slideshow.

## Examples

...


## Dependencies

This component relies on the following third-party libraries:

* [APP](http://makesites.org/projects/app)
* [jQuery](http://jquery.com)
* [Underscore](http://underscorejs.org)


## Install

Download the component and extract in 'components/app-ui-slideshow'
```
cd [project folder]
wget https://github.com/app-ui/slideshow/archive/master.zip
unzip master.zip -d ./components/
```

Using bower: (Old method)
```
bower install app.ui.slideshow

```


## Usage

The component is built on top of [APP](http://makesites.org/projects/app) which should be loaded before the component in the <head> section of your website. This library uses the non-standard method of "html imports" for loading custom elements. 


1. Include APP library

```html
<script src="components/app/build/app.min.js"></script>
```

2. Import the custom element

```html
<link rel="import" href="component/app-ui-slideshow">
```

3. Start using the element applying it to an appropriate tag

```html
<div is="app-ui-slideshow"></div>
```
Currently the component extends the ```<div>``` tag.


## Options

These are the set of options you can use as attributes in your custom element:

...


## Events

...


## Credits

Originally based on [Backbone.UI.Slideshow](https://github.com/backbone-ui/slideshow) by [Makis Tracend](http://github.com/tracend)

Initiated by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org)


### License

Released under the [MIT License](http://makesites.org/licenses/MIT)


