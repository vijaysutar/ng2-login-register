import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },

    /**    otherwise redirect to home */
    {
        path: '**',
        redirectTo: ''
    }
];

export const routing = RouterModule.forRoot(appRoutes);