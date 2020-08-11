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
    
      
      
    
      var element = document.getElementById("aaf28064-a115-498a-8f7d-f8f4b35f72bf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aaf28064-a115-498a-8f7d-f8f4b35f72bf' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;cf238099-6b9e-45cb-828e-12ef17b72181&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66670&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66629&quot;}},&quot;id&quot;:&quot;66628&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66645&quot;}},&quot;id&quot;:&quot;66640&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66675&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66642&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66655&quot;}},&quot;id&quot;:&quot;66659&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66624&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66637&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66673&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66657&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66674&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;66666&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66636&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66629&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;66628&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;66631&quot;},{&quot;id&quot;:&quot;66635&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;66632&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;66658&quot;},{&quot;id&quot;:&quot;66663&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;66666&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;66646&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;66620&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;66624&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;66622&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;66626&quot;}},&quot;id&quot;:&quot;66619&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66668&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66626&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66668&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66633&quot;}},&quot;id&quot;:&quot;66632&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66656&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66655&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66656&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66657&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66659&quot;}},&quot;id&quot;:&quot;66658&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66660&quot;}},&quot;id&quot;:&quot;66664&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66641&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66670&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66645&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66632&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;66635&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;66643&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66644&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66644&quot;}},&quot;id&quot;:&quot;66638&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66620&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66633&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;Dq6zzdFeuL+oRa2lkSe3v1bZpwEs4bW/F2mj4aCLtL/s9J9F8Cazv9V8nS0as7G/0gCcmR4wsL/GATcT+zutvw76N/tt+am/fuo665WYpr8W0z/jchmjv6hnjcYJ+J6/eBmf1peAl78od2ntH5mPvwA4OZvIb3+/ANALRWZQND9weOWRFnaBP+BYzehqYZE/OAWkeGBEmj+gYDv89bGhP3zGIrQGYKY/MDQIZGIsqz/g1PWFhAuwP5KT5lX9j7I/MlbWoZsjtT+8HMVpX8a3PzTnsq1IeLo/1refbVc5vT999ElIGXm/PyWdRtCp7sA/4PuEwRc6wj++801j953DP4MFiwK+e8U/1d9CdyNZxz8XMxWNITXJP0v1SbGtDss//mHR8rjkzD/1Q87YtGzOPyD4AQHLis8/yESKUS9C0D/HE1MBK8DQP7rwMVs6kdE/gLZzJRFv0j/8lzTt7EzTP9secoyYPdQ/AxT8Pjf81D/Nnzt7WiDWPzB1PgdwQ9c/XeQptNF02D+DMswTQZ/ZP9rSZ/YyKNs/Syjm+qxl3D8r/7TjIrndPyaTkfY3+94/mHk1zEUU4D8UERK2LsfgP8wZ5AerUuE/2OWTqHXh4T+1IKV3HIviP9wi/kCSN+M/DfjF1JDD4z/ZhmIOOzHkP5t2WnYZrOQ/u59cnyIs5T+7+ft8vp/lP4mM8ddrB+Y/Bp3rzWRd5j+ScCk2Ws7mP62pnn0CNOc/jTwM3tKV5z+l5zukkvbnP0o9T8iJd+g/Ff1O0H7l6D8kervvOCvpP+iPASz70ek/h6Jcx6JG6j9+7zxl+5zqP38mHKtE9Oo//t4/j9RL6z/c02rBdLjrP2bSjj33Euw/98jFQ0xn7D+/V8RzRs3sP93ac4fDQu0/k6TSus657T9Roxa3pSDuPymY6p0weu4/DPQqMvYJ7z9Ef4zrWlnvP8wybWVkqu8/8dyNdBsG8D/n/amPfTTwP72AtF0OZfA/PwvJkSGf8D/DO1aBheDwP+zz3lUBK/E/xAsOVrJn8T/YPRE/mKTxPy/dyEmr5PE/RGoiDJUi8j8F59rRNXHyP1lQNzoRqvI/0w2hFi3o8j80Rd8n/SrzP604qX+revM/sb8W4vCr8z/glgSTNuHzP6J3FAPyCPQ/fwuOUbpA9D9MP5FtF5P0P6zyS5xj0/Q/jrScAT4e9T842XByeGz1P5hSB7A2rvU/8eEWgeDc9T+D2Sc9Eh72P0Gb2M/xc/Y/FjihQUXI9j9/jRWDMRv3PwKepvhhafc/z/2jW3Cv9z+Gd9JJGPf3P6nhthm2KPg/Y1CA5gxb+D+RRkJjjZH4P+Aw2hbwzPg/GJi84CT8+D8hcNZDUzT5PzfjEl/BhPk/+N7OtbKl+T9J6SMPa9/5P2QN1exaIPo/gHdBA6Za+j8hKT6dt476P7FfdF/xuvo/tDDBMffw+j/Mg5gVjyr7P03iq/9BXPs/ypAwA2aF+z+Flt2WZ6z7P5acItqa2/s/gu0l68IU/D/TI4KdkiH8P7vTMQuzR/w/DexbyA1r/D8c5FT9uoH8P011FYKIj/w/rQ72xQnL/D8Jgg9sUgT9P+7ztKi6O/0/FZiwm4Fu/T9nOVnegJ39P8v/jQCOyf0/DnC2iHrz/T/0a8LzExz+PzIyKrUjRP4/eWxniXxq/j8MNm6in43+P+B8uoATrv4/zyELafLL/j9ttYsmnu/+P212ktKyHP8/7FBu1O1N/z8N34BzeoT/P7sS7Nxwtv8/TJ6cDuH3/z+/D2Xpih0AQDtx+9OIPwBA9b9+FmlhAEBvv1o+/YoAQHOHoTsKswBAqloqh8TYAEBX0vpbW/sAQCqRIqM+HgFAd4l3FrRBAUDxufm1u2UBQJkiqYFVigFAbsOFeYGvAUBwnI+dP9UBQKCtxu2P+wFA/vYqanIiAkCIeLwS50kCQEEye+ftcQJAJyRn6IaaAkA6ToAVssMCQHuwxm5v7QJA6Uo69L4XA0CEHduloEIDQE4oqYMUbgNARGukjRqaA0Bo5szDssYDQLmZIibd8wNAOIWltJkhBEDkqFVv6E8EQL4EM1bJfgRAxZg9aTyuBED6ZHWoQd4EQFxp2hPZDgVA7KVsqwJABUCoGixvvnEFQBLSBF+TtxFAoEl+/yifEUAnYf5OG4cRQKoYhU1qbxFAKHAS+xVYEUChZ6ZXHkERQBX/QGODKhFAhDbiHUUUEUDuDYqHY/4QQFSFOKDe6BBAtJztZ7bTEEAPVKne6r4QQGWrawR8qhBAtqI02WmWEEACOgRdtIIQQEpx2o9bbxBAjEi3cV9cEEDJv5oCwEkQQAHXhEJ9NxBANY51MZclEEBj5WzPDRQQQIzcahzhAhBAYefeMCLkD0CgVfWGO8MPQNUDGTsOow9AAPJJTZqDD0AgIIi932QPQJ6Q04veRg9A9zsNniErD0AwaEb+fg4PQEBp0OU78Q5A8DIim5vTDkASRzlGl7cOQJ4v7amcmg5Ayp3IURJ9DkARwx9oW18OQC4mkuUhVA5ADacENP4+DkDPp8mTOygOQI6YVoCaDg5AwJiD/QL3DUCm9SZSBeINQN1OcFwBzA1AzDxtrh61DUC4gQ7azJ0NQF2xYx1rhw1A90e2GqpxDUC5ZYs4XVwNQFUKJPFWRw1A7BR90mgyDUAjRE9+Yx0NQAg2D6oWCA1AKdKtCTD0DEDtGe2IxOEMQCwLt1iY4gxAdw3AYfriDECsamq3IdYMQFqFhmBr0AxAa85FOcrJDEBPi7rQKq0MQLCkrhb5jAxAQzBMdmBsDECSqexuUGIMQPccD0mOUwxAI8rmAF5ADEAs+bID9SUMQKBfvIZcEQxAKqxaDyDyC0BhexH/uckLQPGgY5JWmwtAXdJc24x3C0A1+pvNDVcLQA/wUGelOAtAjdYV0ZIgC0BSdCljQAMLQOMzg21i1wpAUYubJhqyCkDp2kQT8pIKQC1o73gneApA1mP+FkVVCkBSe6Pc2ysKQLUQXIW4AQpAW2aJAd/WCUCrLz5PNrgJQF/v6KnulAlA5tquzWN3CUDPbck2KF8JQBYlXQd8QglAzD9Uj9okCUBt4+fsrAoJQOUsAov/8ghAHRwPrxTFCEDZ2DZUZaYIQMKxKUq0jwhAQlJG5P1zCECLmImDH1UIQOj1sVwqMAhAMQ5+uTMWCECXf8CXKfoHQEXTbTyS3AdAhcStlVG5B0BTtixMoZcHQGLvDtsBdgdAvQbDvFlWB0A8J6avHzYHQAXsbcunHgdAcrjY008JB0CktCVjSfIGQEBPlHXf2wZA+MmIaTvBBkCMo++4l6MGQExn8dF7jQZAAzI44L5qBkB8YyPe8kAGQJqJNTAnKwZAZOXevzUZBkABc7YMcgsGQPy/Yj6K5wVACv/2nEvEBUDKM9f8mqEFQD10+KUKgwVAGMS5NmpYBUB2YRiZCy8FQGlQHCNgDAVAuoEC0wjwBED2V89sjMgEQMhSUbocowRA28a1BJ18BECb3B/rK00EQH4HHgtQJQRACGOrl6cKBECGyOniRusDQAvdJz7xxgNA/2Q+uJ2eA0D0QosQ5n8DQD9/Y9SyawNA8mjAXapZA0BUOEiEf0kDQGrNULghMANAyYVRimMdA0AcjCsFFwcDQKRg5BX56wJAuukUE2nTAkAkvQVkob0CQBKgcpe7pgJAaYUtPmqIAkCACS5mG2wCQNvQp43BSQJAXqSOQIIjAkDtWLNT0AECQPOFXyEf4AFAC77I7BfCAUAqRsAFSpoBQJIn92LCdAFAQiLMbe1RAUDjKuAnQjYBQIRve97VGwFAgbzf8ngEAUDEauAmku4AQG2QoxEo3QBAnaEbNiHGAEA6rFgIqq4AQFtQbSU4mABAUdp9o91+AEC4/l2oBV8AQFog5KcPQQBA+SzRVW4lAEDW8XNUmQwAQGY3Umka7v8/2nIjJG/C/z/rjKUn35b/PzcVjF/eav8/FxXYpGU7/z/IcAsOywf/PwKrfj0F1P4/XcExMxSg/j/YsyTv92v+P3SCV3GwN/4/Mi3KuT0D/j8PtHzIn879Pw4Xb53Wmf0/LFahOOJk/T9scROawi/9P8xoxcF3+vw/Tjy3rwHF/D/v6+hjYI/8P7J3Wt6TWfw/ld8LH5wj/D+YI/0lee37P71DLvMqt/s/AkCfhrGA+z9oGFDgDEr7P+7MQAA9E/s/ll1x5kHc+j9eyuGSG6X6P0YTkgXKbfo/TziCPk02+j95ObI9pf75P8QWIgPSxvk/L9DRjtOO+T8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66674&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66673&quot;}},&quot;id&quot;:&quot;66655&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66628&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;66631&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;xbuQWkI/BcC2htS3VSoBwHgCMAz2ggDA3C9DnLyf/79uCSspu0r/vzn92aggK/6/EypCYdQS/r9eZH2c2/n4v+B/AKJQN/e/2SA0Xmsy97/P0YKO3Bz3v47pq2kAFPS/2Q3gsUq987/q5D0Ie5Dxv7FxMqRmuPC/c2Xsk8tp8L/Kjo0t96bsvw6a4Gt5/+u/XKqep4DF67+ltIxpqgrrv7i/SDtdq+m/D6FW+2uV6L/MMSokPWnovzBcwu7Lque/S5deY5Wd57+fhOTxpcrlv81ReEeMMuW/izzRyHxJ5L+m3buf5b7hvwqke/PPbeG/yvuJ9o7v4L8RsSqGQlTgv2UiJsZkB+C/PAfS5mzI3b9TLyWZ2yjav0MNsILHB9q/tx4QBk+a2b+lBE6/7OXXv/VVjqacXNW/kg8Mycvr0r+k0rb0uELQv3to+ZmQv82/YDTs6mA4yb9Y7vF8CrLHv67EF/PTH8e/tadmCI5oxL9n9K5i3Fi0v3LaJ7MHJbK/aGL7N4Z6sb/AslYVKkSoP/SO5ZUaLKk/PXRTPHfQsz9wYikq2kW/P5W979k2KcE/4E3zwbIoyD9I8FCMeQrKP0yta718WdI/Wdzr665d1D8/10QYz67UP1ikhUKPRto/o3pEDLWB2j9CSQOAs+LaPz7M9kQ+B9s/FAJNqWAm4D8xpBlnUDvgP++Mc1RGSuA/Bi19jp2a4D+QIyEIPTvhP9RnHt5WauE/VddYkBuS4j+Os+72csXiPxHqYW34gOM/NgaZeNFV5D+z/EQzUjnmP/D8zF8cZOw/M39xBF/O7D/Nbw4K99/vP9J3MNMVTfA/dxFpJzps8T+3NABU7I/xPy+TLcHfwPE/f1/wgcLr8T/qtAjCAyTyPwHrsD6esfM/9BjCgV4H9D+DG7cbJxH2P5IVd0ewlPY/flftJ23i9z9lbakNmVT5PxW5saRJtPo/pjEU9RsA+z9xiFc5ohX7PyhF21prTvw/fokuo9Kx/D91tJaXIaL/P2RhBcRTGgFAVFiVgtYeAUCDqvoUmF4BQHKIY0zInwRA1VW8n0DtBkA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;dojeSnuB5T+U8laQVKvtPxD7n+cT+u4/EmjesSEw8D9Je2prolrwP2QBk6tv6vA/9upez5X28D/RTcExEoPzPxDA/65XZPQ/lO/lUMpm9D8Yl764kXH0PzkLKsv/9fU/FPkPp1oh9j+LDeF7wjf3PyjH5q3Mo/c/Rs0JNhrL9z9OnJw0Qtb4P3zZB6UhAPk/aVUY1p8O+T/X0pxlVT35PxLQLbEolfk/vFcqAaXa+T+Nc/W2sOX5P/RoTwRNFfo/LVoop5oY+j/Y3oaDVo36P43rIe5cs/o/3bDLzaDt+j+WCBGYRpD7P/4WIQOMpPs/DoFdQhzE+z+8U3Ve7+r7P2d3ds4m/vs/GL8lY/JG/D8WWtuM5Lr8P1j+qQ8Hv/w/Kfw9H7bM/D9rPxZoQgP9P0E1LmtsVP0/Dn7ehoai/T+sJWnhqPf9P3hpYPYGJP4/ujxR8Xls/j8a4TBY34T+P7WDzsACjv4/hZV5H3e5/j9diOocOV3/PyzBZsLXbv8/7SRAzit0/z9mrSpUiDAAQB7LKzVYMgBA0U3x3EFPAECKpahoF30AQO19z7ZJiQBAb5oPlkXBAECCh2LMU9AAQNW61suXJQFAxr2+7tpFAUB0TYTx7EoBQEZaKPRopAFAqkfEUBuoAUCUNAA4K64BQMRsT+RzsAFAQqApFcwEAkCGNOMMagcCQJ5xjspICQJAoaXPsVMTAkByJAShZycCQPrMw9tKLQJA6xoLckNSAkBy1t1erlgCQEI9rA0fcAJAxyATL7qKAkCWn2hGKscCQJ6f+YuDjANA5i+O4MuZA0D6zUHh/vsDQPQdzHRFEwRAXkTaiQ5bBEAuDQAV+2MEQMxkS/A3cARA4Bd8oPB6BEA6LYLwAIkEQMA6rI9n7ARAPYZwoNcBBUDhxu3GSYQFQGTF3REspQVA4FX7SZv4BUBZW2pDJlUGQEVuLGkSrQZAagxF/QbABkAc4lWOaMUGQErRttaaEwdAYKLLqHQsB0AdreVliOgHQLKwAuIpjQhAKqxKQWuPCEBCVX0KTK8IQDnEMSbkTwpA6ireT6B2C0A=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66676&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66675&quot;}},&quot;id&quot;:&quot;66660&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66662&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66676&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66639&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66660&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66661&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66662&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66664&quot;}},&quot;id&quot;:&quot;66663&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66661&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66622&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;66636&quot;},{&quot;id&quot;:&quot;66637&quot;},{&quot;id&quot;:&quot;66638&quot;},{&quot;id&quot;:&quot;66639&quot;},{&quot;id&quot;:&quot;66640&quot;},{&quot;id&quot;:&quot;66641&quot;},{&quot;id&quot;:&quot;66642&quot;},{&quot;id&quot;:&quot;66643&quot;}]},&quot;id&quot;:&quot;66646&quot;,&quot;type&quot;:&quot;Toolbar&quot;}],&quot;root_ids&quot;:[&quot;66619&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"cf238099-6b9e-45cb-828e-12ef17b72181","root_ids":["66619"],"roots":{"66619":"aaf28064-a115-498a-8f7d-f8f4b35f72bf"}}];
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