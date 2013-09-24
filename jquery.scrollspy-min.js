 /*!
 * jQuery wScrollspy ( https://github.com/willianis4w/jQuery-wScrollspy )
 * Copyright (c) 2013 Willian Costa Souza ( https://github.com/willianis4w )
 * Version: 1.0
 * Under MIT License
 *
 * Thanks to: Fernando Da2k ( https://github.com/fdaciuk ) for some pointers.
 *
 * Based on jQuery Boilerplate ( http://jqueryboilerplate.com )
 *
 */

(function(e,t,n,r){function o(t,n){this.element=t;this.settings=e.extend({},s,n);this._defaults=s;this._name=i;this.init()}var i="wScrollspy",s={classActive:"active"};o.prototype={init:function(){this.lastId="";this.topMenu=e(this.element);this.topMenuHeight=this.topMenu.outerHeight();this.menuItems=this.topMenu.find('a[href^="#"]');this.scrollItems=e(this.menuItems).map(function(){var t=e(e(this).attr("href"));if(t.length){return t}});this.initEvents()},initEvents:function(){var n=this;e(this.menuItems).on("click",function(t){t.preventDefault();var r=e(this).attr("href"),i=r==="#"?0:e(r).offset().top-n.topMenuHeight+1;e("html, body").stop().animate({scrollTop:i},700)});e(t).scroll(function(){var t=e(this).scrollTop()+n.topMenuHeight;var r=e(n.scrollItems).map(function(){if(e(this).offset().top<t){return this}});r=r[r.length-1];var i=r&&r.length?r[0].id:"";if(n.lastId!==i){n.lastId=i;e(n.menuItems).removeClass(n.settings.classActive).filter("[href=#"+i+"]").addClass(n.settings.classActive)}})}};e.fn[i]=function(t){return this.each(function(){if(!e.data(this,"plugin_"+i)){e.data(this,"plugin_"+i,new o(this,t))}})}})(jQuery,window,document);