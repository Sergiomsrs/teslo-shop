import { Routes } from "@angular/router";
import { AdminDashboardLayoutComponent } from "./pages/admin-dashboard-layout/admin-dashboard-layout.component";
import { Component } from "@angular/core";
import { ProducsAdminPageComponent } from "./pages/producs-admin-page/producs-admin-page.component";
import { ProductAdminPageComponent } from "./pages/product-admin-page/product-admin-page.component";


export const adminDashboardRoutes: Routes = [
    {
        path: '',
        component: AdminDashboardLayoutComponent,
        children: [
            {
                path: 'products',
                component: ProducsAdminPageComponent
            },
            {
                path: 'product/:id',
                component: ProductAdminPageComponent
            },
            {
                path: '**',
                redirectTo: 'products'
            }
        ]
    },
]

export default adminDashboardRoutes;