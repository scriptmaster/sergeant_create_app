import * as React from "react";
import * as ReactDOMServer from "react-dom/server";

import { Header } from "./components/header.tsx";
import { routes } from "./routes.tsx";

import Home from "./pages/home/home.tsx";
import Settings from "./pages/settings/settings.tsx";
// import { Outlet, Route, RouterProvider, Routes } from "react-router-dom";
// import { createStaticRouter, StaticRouter } from "react-router-dom/server";

// https://reactrouter.com/en/main/routers/create-static-router

interface RenderRoute {
    path: string;
    app?: string;
    component?: string;
    context?: object;
    output?: string;
}

export function renderRoutes(renderRoutes: RenderRoute[] = []): RenderRoute[] {
    renderRoutes = renderRoutes.map(r => {
        // const context = React.createContext(r.context || {});
        // let router = createStaticRouter(dataRoutes, context);
        // const componentRoutes = routes.map(rm => ({
        //     'path': rm.path,
        //     'Component': rm.element
        // }));
        // return r;
        
        // ReactDOMServer.renderToString(<Router url="/" context={{}} location={"/"} navigator={{}}></Router>);

        switch(r.path) {
            case "/":
                r.output = ReactDOMServer.renderToString(<>
                    <Header />
                    <main>
                        <Home />
                    </main>
                </>);
                break;
            case "/settings":
                r.output = ReactDOMServer.renderToString(<Settings />);
                break;
            default:
                r.output = ReactDOMServer.renderToString(<center>404</center>);
        }
        return r;
    });

    return renderRoutes;
}


// // import { h } from 'preact';
// // import render from 'preact-render-to-string/jsx';
// // import Router from 'preact-router';
// // import { Home } from "./pages/home.tsx";
// // import { About } from "./pages/about.tsx";
// // import { Search } from "./pages/search.tsx";

// export function StaticApp(props: {url:string}) {
//     return <Router url={props.url}>
//         <Home path="/" />
//         <About path="/about" />
//         <Search path="/search/:query/:advanced?" />
//     </Router>
// }

// export default function StaticApp() {
//     // const router = StaticRouter(routes);

//     let router = createStaticRouter(dataRoutes, context);
//     return ReactDOMServer.renderToString(
//     <React.StrictMode>
//         <StaticRouterProvider
//         router={router}
//         context={context}
//         />
//     </React.StrictMode>
//     );

// return <>
//         <Header />
//         <main>
//             <RouterProvider router={router} />
//         </main>
//     </>
// }

// r.output = ReactDOMServer.renderToString(<React.StrictMode>
//     <StaticRouter location={r.path} context={context}>
//         <Route path="*" component={<div>hii</div>}>
//         </Route>
//     </StaticRouter>
// </React.StrictMode>);
