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

    this._loadPlugins = function(url) {
        var jp = this;
        $.getJSON(url, function(data) {
            for(var i = 0; i < data.plugins.length; i++){
                var plugin = data.plugins[i];
                $(jp.listingSelector).append(jp.listingTmpl.template(plugin));
            }
            console.log("Loaded " + data.plugins.length + " plugins.");
        });
    };

    this.loadLatest = function() {
        this._loadPlugins("latest.json");
    };

    this.loadArchive = function() {
        this._loadPlugins("plugins.json");
    }
}

