(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);

	// Fires when an instance of the element is created
	el.createdCallback = function() {

	};

	// Fires when an instance was inserted into the document
	el.attachedCallback = function() {

		// gather attributes
		var src = this.getAttribute("src");
		var html = this.innerHTML;
		// variables
		var self = this;
		// set options
		var options = {
			slideClass: "slide",
			silentRender: true, // don't trigger event when rendering
			inRender: true // include options in render
		};
		options.url = ( src ) ? src : "/components/backbone.ui.slideshow/assets/html/slides.html"; // fallback
		//if( html ) options.html = this._convertSlides( html ); // converting slide tags to traditional div tags...
		if( html ) options.html = html;
		// ...
		// shadowroot option (resolve issues before exposing as option...)
		var hidden = false;
		options.el = ( hidden ) ? this.createShadowRoot() : this;
		// instantiate view
		this.view = new APP.UI.Slideshow( options );

	};

	// Fires when an instance was removed from the document
	el.detachedCallback = function() {
		//if( this.view ) this.view.destroy();
	};

	// Fires when an attribute was added, removed, or updated
	el.attributeChangedCallback = function(attr, oldVal, newVal) {
		/*
		// prerequisite(s)
		if(!this.view) return;
		if( attr == "class") return;

		// filter options?
		this.view.options[attr] = newVal;
		this.view.update();
		*/
	};

	/*
	el._convertSlides = function( html ){
		// select all slide tags
		var output = "";
		var body = document.createElement( 'body' );
		body.innerHTML = html;
		var slideNodes = body.getElementsByTagName("slide");
		var slides = Array.prototype.slice.call( slideNodes );
		for(var i in slides ){
			var slide = slides[i].outerHTML.replace(/<slide/g,'<div class="slide"').replace(/<\/slide/g,"<\/div");
			output += slide;
		}

		return output;
	}
	*/

	document.registerElement('ui-slideshow', {
		prototype: el
	});

}());
