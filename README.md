# Allow jQuery plugin [Chosen](https://harvesthq.github.io/chosen/) Auto Add

* Backend Framework - Ruby on Rails

I used Chosen plugin for option selection, and I made some modifications allow `Auto Add` an option which is not shown on the selection bar by `pressing Enter`.

If you are interested in this plugin, just follow the introduction below.


## Step 1 - Initial chosen-select

  ```
  $(".chosen-select").chosen();
  ```
          

## Step 2 - Overwrite case 13 in  `chosen.js`

```
  var select, chosen;
    // cache the select element as we'll be using it a few times
    select = $('#' + $(this).prev('select').attr('id'));

    // init the chosen plugin
    select.chosen();

    // get the chosen object
    chosen = select.data('chosen');

    // Bind the keyup event to the search box input
    chosen.dropdown.find('input').on('keyup', function(e) {

      // if we hit Enter and the results list is empty (no matches) add the option

      if (e.which == 13 && chosen.dropdown.find('li.no-results').length > 0) {
        $.ajax({
          method: 'post',
          url: '/candidates/auto_add_country',
          data: {
            name: $(this).val(),
          },
          success: function(response) {
            var option = $("<option>").val(response.id).text(response.name);
            //var option = "<option value='" + new_id + "'>" + $(this).val() + "</option>";
            // add the new option
            select.prepend(option);
            // automatically select it
            //select.find(option).prop('selected', true);
            // trigger the update
            select.trigger("chosen:updated");
          }
        });
      }
    
```

## You could clone this project to see the Demo.
        
