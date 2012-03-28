JQuery Sumtr
============

Allows you to summarize table rows with ease.

Just apply the plugin as follows

    $('#myTable').sumtr();

[Working demo](http://jsfiddle.net/hZqGg/) on JSFiddle.

How it Works
------------

First, finds all the rows in the `tbody` and looks for cells with the `sum` class.
Next, it sums those column by column.
Lastly, it displays in the results in any row matching the selector `tr.summary`.

You can call Sumtr with options to override these defaults:

    $('#myTable').sumtr({
        sumCells : 'td.summableCell',
        bodyRows : 'tr.summableRow',
        summaryRows : 'tr.total'
    });

Parsing and Formatting
------------------------
You can pass in custom functions to handle value parsing and formatting.


    $('#myTable').sumtr({
        readValue : function(e) { return parseFloat(e.data('val')); },
        formatValue : function(val) { return '$' + val; },
    });