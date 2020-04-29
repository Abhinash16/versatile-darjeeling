import homeContent from './components/homeContent';
import about from './components/about'
import videos from './components/videos'
import contact from './components/contact'
// import services from './components/services'
// import profile from './components/profile'
// import vehicles from './components/vehicles'
// import newService from './components/newService'
// import createBooking from './components/createBooking'
// import search from './components/search'
// import vehicleDetails from './components/vehicleDetails'
// import serviceDetails from './components/serviceDetails'
// import endService from './components/endService'
// import sucessfull from './components/sucessfull'


export default[
    {path:'/', component:homeContent},
    // {path:'/home', component:homeContent},
    {path:'/about', component:about},
    {path:'/videos', component:videos},
    // {path:'/services', component:services},
    {path:'/contact', component:contact},
    // {path:'/profile', component:profile},
    // {path:'/successful', component:sucessfull},
    // {path:'/endService/:id', component:endService},
    // {path:'/serviceDetails/:id', component:serviceDetails},
    // {path:'/vehicleDetails/:id', component:vehicleDetails},
    // {path:'/search', component:search},
    // {path:'/createBooking', component:createBooking},
    // {path:'/newService', component:newService},
    // {path:'/vehicles', component:vehicles},

    ]