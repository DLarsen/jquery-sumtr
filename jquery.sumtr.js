;(function($) {

  $.fn.sumtr = function(options) {

    var settings = null;
    if(typeof options === 'object')
    {
        settings = options;
    }

    // extend user settings with default settings
    settings = $.extend({}, $.fn.sumtr.defaultSettings, settings || {});

    this.each(function() {
      var s = []; // we hold the results here

      var table       = $(this);
      var bodyRows    = $(this).find(settings.bodyRows);
      var summaryRows = $(this).find(settings.summaryRows);

      // do nothing if there is nothing to sum
      if (bodyRows.length == 0) return;

      bodyRows.each(function(index) {
          var col = 0;
          $(this).children("td").each(function() {
              if ($(this).is(settings.sumCells)){
                if (s.length < col + 1) s[col] = 0;
                var val = settings.readValue($(this));
                s[col] = s[col] + val;
              } else {
                s[col] = "noCount"; // a flag which tells us we're not counting that column
              }
              var colspan = (parseInt($(this).attr('colspan'))) || 1;
              col = col + colspan;
          });
      });

      summaryRows.each(function(index) {
        var col = 0;
        $(this).children("td").each(function() {
            if (s[col] != "noCount"){
              $(this).html(settings.formatValue(s[col]));
              settings.onSum($(this), s[col]);
            }
            var colspan = (parseInt($(this).attr('colspan'))) || 1;
            col = col + colspan;
        });
      });

      settings.onComplete(table);
    });
  };

  $.fn.sumtr.defaultSettings = {
    readValue : function(e) { var r = parseFloat(e.html()); return !isNaN(r) ? r : 0; },
    formatValue : function(val) { return val; },
    onComplete : function(e) {  },
    onSum : function(e,sum) { e.data('sumtr', sum); },
    sumCells : '.sum',
    bodyRows : 'tbody tr',
    summaryRows : 'tr.summary',
  };

  // a related helper
  $.fn.sumtrRatio = function(n,d,q) {

    function format_percent(n){
      return roundNumber(n, 2).toString() + "%";
    }

    function roundNumber(num, dec) {
      var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
      return result;
    }

    var _n = $(this).find(n).data('sumtr');
    var _d = $(this).find(d).data('sumtr');
    var _q = _d > 0 ? (_n / _d) : 0;

    $(this).find(q).html(_q > 0 ? format_percent(_q * 100) : '-');
  }

})(jQuery);
