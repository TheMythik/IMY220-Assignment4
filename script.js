$('.btn').on('click', function(){
	let editBtn = this;
	let title = $(this).siblings('b').text();
	let content = $(this).siblings('span').text();
	let dataType = $(this).parent().attr('data-type');
	
	$(editBtn).siblings().remove();
	$(editBtn).parent().addClass('row');
	
	$('<div></div>', {
		class: 'col-8'
	}).append(
		$('<input>', {
			type: dataType,
			class: 'form-control',
			value: (dataType == 'date') ? content.toString("YYYY-MM-DD") : content
		})
	).insertBefore(editBtn);
	
	$('<div></div>', {
		class: 'col'
	}).append(
		$("<button></button>", {
			html: 'Update',
			class: 'btn btn-dark pull-right'
		}).on('click', function(){
			content = $(this).parent().prev().find('input').val();
			$(this).parent().siblings('div').remove();

			$('<b></b>', {html: title}).insertBefore(editBtn).append(" ");
			$('<span></span>', {html: content}).insertBefore(editBtn)

			$(this).parent().remove();
			$(editBtn).show();
			$(editBtn).parent().removeClass('row');
		})
	).insertBefore(editBtn);
	
	$(editBtn).hide();
});