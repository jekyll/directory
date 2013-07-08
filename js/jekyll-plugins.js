//
// Fills a string containing special templating syntax with the data provided.
//
// Ex:
//    tmpl = "${name} got a ${grade} in ${course}.";
//    data = { name: "John", grade: "B", course: "Plant Pathology" };
//    tmpl.template(data); // outputs "John got a B in Plant Pathology."
//
String.prototype.template = function(data){
  var regex = null, completed = this.toString();
  for(el in data){
      regex = new RegExp('\\${'+ el +'}', 'g');
      completed = completed.replace(regex, data[el]);
  }
  return completed.toString();
};

var JekyllPlugins = function(){
    this.items = new Array();

    this.listingSelector = ".plugins-listing";

    this.listingTmpl = ' \
        <div class="plugin"> \
          <p class="title">${title}</p> \
          <p class="description">${description}</p> \
          <p class="author">@${author}</p> \
          <p class="repository">${repository}</p> \
        </div>';

    this.loadPlugins = function() {
        var jp = this;
        $.getJSON("plugins.json", function(data) {
            for(var i = 0; i < data.plugins.length; i++){
                var plugin = data.plugins[i];
                $(jp.listingSelector).append(jp.listingTmpl.template(plugin));
            }
        });
    };
}

$(function(){
    var jp = new JekyllPlugins();
    jp.loadPlugins();
});

