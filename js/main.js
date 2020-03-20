const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content Item
function selectItem(e)
{
	//remove border from all tabs
	removeBorder();

	//remove show class from all the tab content
	removeShow();

	//Add border to current tab
	this.classList.add('tab-border');

	//grab contenet item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	//Add show class to selected content item
	tabContentItem.classList.add('show');
}

//Remove border funtion
function removeBorder()
{
	tabItems.forEach(item => item.classList.remove('tab-border'));
}

//Remove content funtion
function removeShow()
{
	tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for Tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem));