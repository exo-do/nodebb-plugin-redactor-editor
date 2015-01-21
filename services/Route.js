var __slice = [].slice;
module.exports = {
	templateAdmin: function (app, middleware, route, obj, template) {
		return null == obj && (obj = {}), null == template && (template = "admin" + route), app.get("/admin" + route, middleware.admin.buildHeader, function (req, res) {
			return res.render(template, obj)
		})
	},
	template: function (app, middleware, route, obj, template) {
		return null == obj && (obj = {}), null == template && (template = route.substring(1)), this.get(app, middleware.admin.buildHeader, route, function (req, res) {
			return res.render(template, obj)
		})
	},
	addAdminNavigations: function () {
		var plugins;
		return plugins = 1 <= arguments.length ? __slice.call(arguments, 0) : [],
			function (header, cb) {
				var plugin, _i, _len;
				for (_i = 0, _len = plugins.length; _len > _i; _i++) plugin = plugins[_i], header.plugins.push({
					name: plugin.adminPage.name,
					icon: plugin.adminPage.icon,
					route: plugin.adminPage.route
				});
				return cb(null, header)
			}
	},
	get: function (app, middleware, url, cb, cbApi) {
		return null == cbApi && (cbApi = cb), app.get(url, middleware, cb), null != cbApi ? app.get("/api" + url, cbApi) : void 0
	},
	post: function (app, middleware, url, cb, cbApi) {
		return null == cbApi && (cbApi = cb), app.post(url, middleware, cb), null != cbApi ? app.post("/api" + url, cbApi) : void 0
	}
};