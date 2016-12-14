import { TempComponent } from './temp/temp.component';
import { BmiComponent } from './bmi/bmi.component';
import { HomeComponent } from './home/home.component';
 
export const AppRoutes: any = [
    { path: "temp", component: TempComponent },
    { path: "bmi", component: BmiComponent },
    { path: "home", component: HomeComponent }
];
 
export const AppComponents: any = [
    TempComponent,
    BmiComponent,
    HomeComponent
];