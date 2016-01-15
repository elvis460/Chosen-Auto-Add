$(document).ready(function() {
	$(".chosen-select").chosen();

	$('#country_select').change(function() {
		$.ajax({
			method : 'post',
			url : '/candidate/update',
			data : {
				country_id : $(this).val(),
				candidate_id : $(this).data('candidateid')
			}
		});
	});


	$('.chosen-container').on('click', function() {
		var select,
		    chosen;
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
						method : 'post',
						url : '/' + select.data('function') + '/auto_add',
						data : {
							name : $(this).val(),
						},
						success : function(response) {
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
		});
	});



});
