JQuery Sumtr
============

Allows you to summarize table rows with ease.

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

Example
------------

Given the following markup:

    <table id="myTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>First</th>
          <th>Second</th>
          <th>Third</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>Bob</td>
            <td class="sum">1</td>
            <td>A</td>
            <td class="sum">3</td>
          </tr>
          <tr>
            <td>Henry</td>
            <td class="sum">5</td>
            <td>B</td>
            <td class="sum">9</td>
          </tr>
          <tr>
            <td>Janet</td>
            <td class="sum">1</td>
            <td>C</td>
            <td class="sum">3</td>
          </tr>
      </tbody>
      <tfoot>
          <tr class="summary">
            <td>Total:</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
      </tfoot>
    </table>
    
Just apply the plugin as follows

    $('#myTable').sumtr();