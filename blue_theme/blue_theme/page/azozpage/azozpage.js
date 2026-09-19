frappe.pages["azozpage"].on_page_load = function (wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: __("azozpage"),
		single_column: true,
	});
};

frappe.pages["azozpage"].on_page_show = function (wrapper) {
	load_desk_page(wrapper);
};

function load_desk_page(wrapper) {
	let $parent = $(wrapper).find(".layout-main-section");
	$parent.empty();

	frappe.require("azozpage.bundle.js").then(() => {
		frappe.azozpage = new frappe.ui.Azozpage({
			wrapper: $parent,
			page: wrapper.page,
		});
	});
}