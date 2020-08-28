class Router {
    constructor(routes) {
        this.routes = routes || [];
    }

    set(path, component, children = []) {
    	if(!path || !component) return;

        this.routes.push(
            {
                path,
                component,
                children
            }
        );
    }

    init() {
    	for(const route of this.routes){
    		let path = window.location.pathname;
            if(path.match(route.path)){
                return route.component.call(this);
            }
    	}
    }
}
