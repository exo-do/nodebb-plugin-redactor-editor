(function () {
	var Configuration, Route, cfg, defConfig, pkg, plg, plugin, release;
	
	pkg = require("./package.json"), 
	plg = require("./plugin.json"), 
	Configuration = require("./services/Configuration"), 
	Route = require("./services/Route"), 
	release = !1,
	plugin = Object.freeze({
		name: plg.id.substring(14),
		version: pkg.version,
		adminPage: {
			name: plg.name,
			icon: "fa-pencil",
			route: "/plugins/" + plg.id.substring(14)
		}
	}), 
	defConfig = {}, 
	cfg = new Configuration(plugin, defConfig, !1, !release), 
	module.exports.addAdminNavigation = Route.addAdminNavigations(plugin),
	module.exports.init = function (params, callback) {
		Route.templateAdmin(params.router, params.middleware, plugin.adminPage.route);
		callback();
	}, 
	module.exports.pluginActivation = function (id) {
		return id === plg.id ? cfg.setOnEmpty() : void 0
	}
}).call(this);