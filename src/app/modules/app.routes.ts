import { NgModule} from '@angular/core'
import { HomeComponent } from '../components/home/home.component'
import { DetailsComponent } from '../components/details/details.component'
import { RouterModule, Routes } from '@angular/router'

const routes : Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'details', component: DetailsComponent },
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutes {}