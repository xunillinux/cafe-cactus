export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon-cafe-cactus.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.589b9ad4.js","imports":["_app/immutable/entry/start.589b9ad4.js","_app/immutable/chunks/index.4a373090.js","_app/immutable/chunks/singletons.3221ffd3.js","_app/immutable/chunks/index.36c6109f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.2ea8513c.js","imports":["_app/immutable/entry/app.2ea8513c.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.4a373090.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
