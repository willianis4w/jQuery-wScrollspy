 /*!
 * jQuery wScrollspy ( https://github.com/willianis4w/jQuery-wScrollspy )
 * Copyright (c) 2013 Willian Costa Souza ( https://github.com/willianis4w )
 * Version: 1.0
 * Under MIT License
 *
 * Thanks to: Fernando Da2k ( https://github.com/fdaciuk ) for some pointers.
 *
 * Usage:
 *     // your links' wrapper
 *     $( '#main-header' ).wScrollspy();
 *
 * Based on jQuery Boilerplate ( http://jqueryboilerplate.com )
 *
 */

;(function ( $, window, document, undefined ) {

		// Create the defaults once
		var pluginName = "wScrollspy",
			defaults = {
				classActive: 'active'
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;

			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		Plugin.prototype = {
			init: function () {

				this.lastId        = '';
				this.topMenu       = $( this.element );
				this.topMenuHeight = this.topMenu.outerHeight();

				// All list items
				this.menuItems     = this.topMenu.find( 'a[href^="#"]' );

				// Anchors corresponding to menu items
				this.scrollItems   = $( this.menuItems ).map( function() {
					var item = $( $( this ).attr( 'href' ) );
					if( item.length ) {
						return item;
					}
				});

				// Events
				this.initEvents();

			},

			initEvents: function() {

				var self = this;

				// Bind click handler to menu items
				// so we can get a fancy scroll animation
				$( this.menuItems ).on( 'click', function( event ) {

					event.preventDefault();

					var href = $( this ).attr( 'href' ),
						offsetTop = href === '#' ? 0 : $( href ).offset().top - self.topMenuHeight + 1;

					$( 'html, body' ).stop().animate({
						scrollTop: offsetTop
					}, 700);

				});

				// Bind to scroll
				$( window ).scroll( function() {

					// Get container scroll position
					var fromTop = $( this ).scrollTop() + self.topMenuHeight;

					// Get id of current scroll item
					var cur = $( self.scrollItems ).map( function() {
						if( $( this ).offset().top < fromTop ) {
							return this;
						}
					});

					// Get the id of the current element
					cur = cur[cur.length-1];
					var id = cur && cur.length ? cur[0].id : '';


					if( self.lastId !== id ) {

						self.lastId = id;

						// Set/remove active class
						$( self.menuItems )
							.removeClass( self.settings.classActive )
							.filter( '[href=#' + id + ']' ).addClass( self.settings.classActive );
					}
				});

			}
		};

		$.fn[ pluginName ] = function ( options ) {
			return this.each(function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
				}
			});
		};

})( jQuery, window, document );