
var export_files = [

	"assets/lib/directives/directive.js",
	"assets/js/filters.js"
	/*controller调试*/];

if ( typeof (exports) != "undefined") {
	var rootPath = "";
	var i = 0;
	for (; i < export_files.length; i++) {
		export_files[i] = rootPath + export_files[i];
	}
	exports.files = export_files;
	exports.mergeFilesFor = function() {
		return export_files;
	};
} else {
	var i;
	for (i = 0; i < export_files.length; i++) {
		addTag('script', {
			"type" : "text/javascript",
			"src" : export_files[i]
		});
	}
	window.addTag = addTag;
}

function addTag(name, attributes) {

	var el = document.createElement(name), attrName;

	for (attrName in attributes) {
		el.setAttribute(attrName, attributes[attrName]);
	}
	document.write(outerHTML(el));
	document.close();
}

function outerHTML(node) {
	// if IE, Chrome take the internal method otherwise build one
	return node.outerHTML || (function(n) {
		var div = document.createElement('div'), h;
		div.appendChild(n);
		h = div.innerHTML;
		div = null;
		return h;
	})(node);
}



