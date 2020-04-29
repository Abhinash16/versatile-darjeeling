import homepage from './components/homepage';
import bookingdetails from './components/bookingDetails'
import assignVehicle from './components/assignVehicle'

export default[
    {path:'/', component:homepage},
    {path:'/bookingdetails/:id', component:bookingdetails},
    {path:'/assign-vehicle/:id', component:assignVehicle}
    ]