using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Sample.MVC.Ang2
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}-{action}/{id}",
                defaults: new { controller = "App", action = "Index", id = UrlParameter.Optional },
                // Set a constraint to only use this for routes identified as server-side routes
                constraints: new
                {
                    serverRoute = new ServerRouteConstraint(url =>
                    {
                        bool isServerRouting = url.PathAndQuery.Contains("-");
                        return isServerRouting;
                    })
                }
            );

            // This is a catch-all for when no other routes matched. Let the Angular 2 router take care of it
            routes.MapRoute(
                name: "angular",
                url: "{*url}",
                defaults: new { controller = "App", action = "Index" } // The view that bootstraps Angular 2
            );
        }
    }
}

