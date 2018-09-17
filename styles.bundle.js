webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*styling for general body*/\nbody {\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n/*    --main-bg-color: #7a7979;*/\n    --main-bg-color: #b4b4b4;\n    --main-light-color: #f4f4f4;\n/*    --main-dark-color: #464a4c;*/\n    --main-dark-color: rgba(70, 74, 76, 0.84);\n    --secondary-light-color: #dfdfdf;\n    --box-shadow-default: 2px 2px 2px rgba(0, 0, 0, 0.24);\n    --box-shadow-hover: 2px 2px 8px rgba(0, 0, 0, 0.48);\n    --text-shadow-default: 1px 1px 2px rgba(0, 0, 0, 0.24);\n    background: #7a7979;\n    background: var(--main-bg-color, #7a7979);\n}\n\n.background {\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    background: #7a7979;\n    background: var(--main-bg-color, #7a7979);\n/*    background: radial-gradient(var(--main-bg-color, #313131), white);*/\n    position: absolute;\n}\n\n@-webkit-keyframes move {\n  0% {\n    -webkit-transform-origin: bottom left;\n    transform-origin: bottom left;\n    transform: scale(1.0);\n    -ms-transform: scale(1.0);\n    /* IE 9 */\n    \n    -webkit-transform: scale(1.0);\n    /* Safari and Chrome */\n    \n    -o-transform: scale(1.0);\n    /* Opera */\n    \n    -moz-transform: scale(1.0);\n    /* Firefox */\n  }\n  50% {\n    transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    /* IE 9 */\n    \n    -webkit-transform: scale(1.2);\n    /* Safari and Chrome */\n    \n    -o-transform: scale(1.2);\n    /* Opera */\n    \n    -moz-transform: scale(1.2);\n    /* Firefox */\n  }\n  100% {\n    -webkit-transform-origin: bottom left;\n    transform-origin: bottom left;\n    transform: scale(1.0);\n    -ms-transform: scale(1.0);\n    /* IE 9 */\n    \n    -webkit-transform: scale(1.0);\n    /* Safari and Chrome */\n    \n    -o-transform: scale(1.0);\n    /* Opera */\n    \n    -moz-transform: scale(1.0);\n    /* Firefox */\n  }\n}\n\n.frosted:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    background: inherit;\n    position: absolute;\n    box-shadow: inset 0 0 0 3000px #18110f0f;\n    -webkit-filter: blur(10px);\n    filter: blur(8px);\n}\n\n.frosted-dark:before {\n    box-shadow: inset 0 0 0 3000px #18110f0f;\n}\n\nh1 {\n    \n\tfont-family: -apple-system, BlinkMacSystemFont, 'Montserrat', Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n\tfont-size: 64px;\n\tfont-style: normal;\n\tfont-variant: normal;\n\tfont-weight: 100;\n\tline-height: 48px;\n    color: #323232;\n    \n    transition: font-size 0.48s ease;\n}\nh2 {\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Montserrat', Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n\tfont-size: 48px;\n\tfont-style: normal;\n\tfont-variant: normal;\n\tfont-weight: 500;\n\tline-height: 36px;\n    color: #323232;\n    \n    transition: font-size 0.48s ease;\n}\nh3 {\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Montserrat', Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n\tfont-size: 36px;\n\tfont-variant: normal;\n\tfont-weight: 100;\n\tline-height: 28px;\n    color: #323232;\n        \n    transition: font-size 0.48s ease;\n}\nh4 {\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Montserrat', Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n\tfont-size: 18px;\n\tfont-style: oblique;\n\tfont-variant: normal;\n\tfont-weight: 500;\n\tline-height: 28px;\n    color: #f7f7f7;\n        \n    transition: font-size 0.48s ease;\n}\n\n/*effect-underline*/\n.effect-underline:after {\n  color: #f7f7f7;\n  max-width: 500px;\n  margin: auto;\n/*  margin-top: 0;*/\n  margin-bottom: 0;\n  content: '';\n  position: absolute;\n  left: 0;\n  display: inline-block;\n  height: 0;\n  width: 100%;\n  border-bottom: 1px solid;\n/*  margin-top: 10px;*/\n  opacity: 0;\n\ttransition: opacity 0.35s, -webkit-transform 0.35s;\n\ttransition: opacity 0.35s, transform 0.35s;\n\ttransition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\n\t-webkit-transform: scale(0,1);\n\ttransform: scale(0,1);\n}\n\n.effect-underline:hover:after {\n  opacity: 1;\n\t-webkit-transform: scale(1);\n\ttransform: scale(1);\n}\n\n.adv-icons {\n    position: absolute;\n    bottom: 4px;\n    font-size: 12px;\n    left: 8px;\n    color: #cbcbcb;\n    font-family: -apple-system, BlinkMacSystemFont, 'Montserrat', Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n}\n\n\n#loader-flash {\n    position: fixed;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background: var(--main-light-color);\n    background: var(--main-light-color);\n    opacity: 0;\n    transition: all 0.48s ease;\n    z-index: -1;\n}\n#loader-flash.out {\n    display: none;\n}\n#loader-flash.active {\n    opacity: 1;\n    display: block;\n    z-index: 4000;\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map