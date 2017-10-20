
app.filter('titleCase',function(){
	var titlecase = function(title,num){
		var words = title.split(' ');
		for(var i=0; i<words.length; i++){
			words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
		}
		return num+'. '+words.join(' ')
	};
	return titlecase
});
