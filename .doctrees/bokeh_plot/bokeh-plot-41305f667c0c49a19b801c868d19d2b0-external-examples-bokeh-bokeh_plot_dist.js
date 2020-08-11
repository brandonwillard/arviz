(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("c87e33a1-115f-406b-a8f4-de03b3e755c4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c87e33a1-115f-406b-a8f4-de03b3e755c4' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;c6f1bda7-c85f-47a9-ac6d-f5897794cc8d&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65154&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65198&quot;}},&quot;id&quot;:&quot;65202&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65137&quot;},{&quot;id&quot;:&quot;65138&quot;},{&quot;id&quot;:&quot;65139&quot;},{&quot;id&quot;:&quot;65140&quot;},{&quot;id&quot;:&quot;65141&quot;},{&quot;id&quot;:&quot;65142&quot;}]},&quot;id&quot;:&quot;65144&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;65197&quot;}]},&quot;id&quot;:&quot;65196&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65207&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65138&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65198&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65199&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65200&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65202&quot;}},&quot;id&quot;:&quot;65201&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65174&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65158&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65213&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65165&quot;}},&quot;id&quot;:&quot;65164&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65129&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65132&quot;},{&quot;id&quot;:&quot;65136&quot;},{&quot;id&quot;:&quot;65196&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65133&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65185&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65188&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65144&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65121&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65125&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65123&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65127&quot;}},&quot;id&quot;:&quot;65120&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;65185&quot;}]},&quot;id&quot;:&quot;65197&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[512]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[512]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65221&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65220&quot;}},&quot;id&quot;:&quot;65198&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;exSuR+F6lD+cxCCwcmixP3sUrkfhesQ/+n5qvHSTyD/D9Shcj8LFP3Noke18P8U/2c73U+Oluz/8qfHSTWKwP/yp8dJNYqA/uB6F61G4jj/6fmq8dJNoP/yp8dJNYmA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[12]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65195&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65194&quot;}},&quot;id&quot;:&quot;65182&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65165&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65215&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65127&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65182&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65183&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65184&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65186&quot;}},&quot;id&quot;:&quot;65185&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65174&quot;}},&quot;id&quot;:&quot;65170&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65137&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65199&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65221&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65164&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65167&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65169&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65194&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65133&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65136&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65121&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65141&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#000000&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#000000&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65184&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65129&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65132&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;65120&quot;},{&quot;id&quot;:&quot;65151&quot;}]},&quot;id&quot;:&quot;65203&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65130&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#000000&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0},&quot;line_color&quot;:{&quot;value&quot;:&quot;#000000&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65183&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65172&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65160&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65163&quot;},{&quot;id&quot;:&quot;65167&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65164&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65201&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65207&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65175&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65152&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65156&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65154&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65158&quot;}},&quot;id&quot;:&quot;65151&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65200&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65134&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65168&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65220&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65152&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65173&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65190&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65160&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65163&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65195&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65215&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65161&quot;}},&quot;id&quot;:&quot;65160&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65142&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65156&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65190&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65134&quot;}},&quot;id&quot;:&quot;65133&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65161&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65143&quot;}},&quot;id&quot;:&quot;65139&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65171&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65123&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65192&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65213&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65125&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65143&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65140&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65188&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65192&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65130&quot;}},&quot;id&quot;:&quot;65129&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65168&quot;},{&quot;id&quot;:&quot;65169&quot;},{&quot;id&quot;:&quot;65170&quot;},{&quot;id&quot;:&quot;65171&quot;},{&quot;id&quot;:&quot;65172&quot;},{&quot;id&quot;:&quot;65173&quot;}]},&quot;id&quot;:&quot;65175&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65182&quot;}},&quot;id&quot;:&quot;65186&quot;,&quot;type&quot;:&quot;CDSView&quot;}],&quot;root_ids&quot;:[&quot;65203&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"c6f1bda7-c85f-47a9-ac6d-f5897794cc8d","root_ids":["65203"],"roots":{"65203":"c87e33a1-115f-406b-a8f4-de03b3e755c4"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();