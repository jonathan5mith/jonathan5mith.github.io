    $(function() {

  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
Parse.initialize("ImFHWsA4AQ8lDUSfaDlsokY2C6ld3e12bDtfecJ0", "7FynBYH2bC7k3NCvGoKtFsyNw0aTytfvtFo0H2Ei");

  // Router
  var Workspace = Backbone.Router.extend({

    routes: {
      "help":                 "help",    // #help
      ":query":        "search"  // #search/kiwis
    },

    help: function() {
      // 
      alert("help");
    },

    search: function(query, page) {
      //
      alert("search query is "+query);
    }

  });
  this.Router = new Workspace();
  Backbone.history.start();