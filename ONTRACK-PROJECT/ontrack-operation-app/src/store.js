import Vue from "vue";
import Vuex from "vuex";
import toast from './toast'
import * as _ from 'lodash'
const axios = require('axios');

Vue.use(Vuex);


export default new Vuex.Store({
state: {
    new_bookings:[],
    customers:[],
    waitlist:[],
    load_chat: false,
    notes:[],
    failed_bookings:[],
    models_list:[],
    reminders:[],
    drop_vehicle:[],
    new_customers:[],
    total_vehicles:[],
    dropped_vehicle_by_date:[],
    vehicle_count:[],
    sidenav_toggler: false,
    loading_api: false,
    reminder_count:0,
    services:[],
    username:'' || localStorage.getItem('username'),
    // id:'' || localStorage.getItem('agent_id')
    id:'' || 81
    },
  mutations: {
    LOADING_API(state, value){
      state.loading_api = value
    },
    GET_NEW_BOOKING(state, new_booking){
      state.new_bookings = new_booking
    },
    GET_CX(state, customers){
        state.customers = customers
    },
    GET_WAITLIST(state, waitlist){
      state.waitlist = waitlist
    },
    GET_FAILED_BOOKING(state, failed_booking){
      state.failed_bookings = failed_booking
    },
    GET_NOTES(state, value){
      state.notes = value
    },
    GET_MODELS(state, value){
      state.models_list = value
    },
    GET_REMINDER(state, value){
      state.reminders = value
    },
    GET_REMINDER_COUNT(state, value){
      state.reminder_count = value
    },
    GET_SERVICES(state, value){
      state.services = value
    },
    GET_NEW_CUSTOMERS(state, value){
      state.new_customers = value
    },
    GET_TOTAL_VEHICLES(state, value){
      state.total_vehicles = value
    },
    GET_DROP_VEHICLE_BY_DATE(state, value){
      state.dropped_vehicle_by_date = value
    },
    VEHICLE_COUNT(state, value){
      state.vehicle_count = value
    },
    SET_USER(state, value){
      state.username = value.username
      state.id = value.id
    }

  },
  actions: {
    set_user({commit, payload}){
      commit('SET_USER', payload)
    },
    get_new_bookings({commit}) {
      commit('LOADING_API', true);
      axios.post(this.getters.baseUrl+'getBookingByQuery',{
        status:0,
        paymentStatus:1
      },{
          headers: {
              'Content-Type':  'application/json',
              'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
          }
      }).then(result => {
        commit('LOADING_API', false);
        commit('GET_NEW_BOOKING', result.data);
      }).catch(error => {
        // throw new Error(`API ${error}`);
        if (error.response) {
          toast.error('Something is wrong with API');
          window.console.log(error.message)
          }else{
            toast.error(error.message);
            window.console.log(error.message)
          }
      });
    },
    get_vehicle_count({commit}) {
      commit('LOADING_API', true);
        axios.get(this.getters.baseUrl+'getModels',{
            headers: {
                'Content-Type':  'application/json',
                'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
            }
        }).then(result => {
          commit('VEHICLE_COUNT', result.data);
          commit('LOADING_API', false);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    get_customers({commit}) {
      commit('LOADING_API', true);
        axios.get(this.getters.baseUrl+'getVendor',{
            headers: {
                'Content-Type':  'application/json',
                'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
            }
        }).then(result => {
          commit('GET_CX', result);
          commit('LOADING_API', false);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    notes({commit}) {
      commit('LOADING_API', true);
        axios.post(this.getters.baseUrl+'readNotes',{},{
          headers: {
              'Content-Type':  'application/json',
              'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
          }
      }).then(result => {
          commit('GET_NOTES', result.data);
          commit('LOADING_API', false);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    get_waitlist({commit}) {
      commit('LOADING_API', true);
      axios.post(this.getters.baseUrl+'waitlistQuery',{},{
          headers: {
              'Content-Type':  'application/json',
              'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
          }
      }).then(result => {
        commit('LOADING_API', false);
        commit('GET_WAITLIST', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    get_drop_vehicle({commit}) {
      commit('LOADING_API', true);
      axios.post(this.getters.baseUrl+'droppedVehicle?endDate='+this.getters.yesterday,{},{
          headers: {
              'Content-Type':  'application/json',
              'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
          }
      }).then(result => {
        commit('LOADING_API', false);
        commit('GET_DROP_VEHICLE', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    get_drop_vehicle_byDate({commit}, payload) {
      commit('LOAD_STATUS', true);
      window.console.log(payload.date)
      axios.post(this.getters.baseUrl+'droppedVehicle?endDate='+payload.date,{},{
        headers: {
            'Content-Type':  'application/json',
            'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
        }
      }).then(result => {
        commit('GET_DROP_VEHICLE_BY_DATE', result.data);
        commit('LOAD_STATUS', false);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    get_new_customers({commit}) {
      commit('LOADING_API', true);
      axios.post(this.getters.baseUrl+'newUsersByDay?createdAt='+this.getters.date,{},{
          headers: {
              'Content-Type':  'application/json',
              'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
          }
      }).then(result => {
        commit('LOADING_API', false);
        commit('GET_NEW_CUSTOMERS', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    get_total_vehicles({commit}) {
      commit('LOADING_API', true);
      axios.get(this.getters.baseUrl+'getVehicles',{
          headers: {
              'Content-Type':  'application/json',
              'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
          }
      }).then(result => {
        commit('LOADING_API', false);
        commit('GET_TOTAL_VEHICLES', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
  },
  get_services({commit}) {
        commit('LOADING_API', true);
        axios.post(this.getters.baseUrl+'getServiceListByQuery',{
          "status":1
        },{
            headers: {
                'Content-Type':  'application/json',
                'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
            }
        }).then(result => {
          commit('LOADING_API', false);
          commit('GET_SERVICES', result.data);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    get_models({commit}) {
        commit('LOADING_API', true);
        axios.get(this.getters.baseUrl+'getModels',{
            headers: {
                'Content-Type':  'application/json',
                'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
            }
        }).then(result => {
          commit('LOADING_API', false);
          commit('GET_MODELS', result.data);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    get_reminder({commit}){
      commit('LOADING_API', true);
      window.db.collection("reminder").where("reminder_date", "==", this.getters.date).onSnapshot((querySnapshot) => {
        let allMessages = []
        querySnapshot.forEach((doc) => {
        allMessages.push(doc.data())
        });
        commit('LOADING_API', false);
        commit('GET_REMINDER', allMessages);
        })
    },
    get_reminder_count({commit}){
      commit('LOADING_API', true);
      window.db.collection("reminder").where("reminder_date", "==", this.getters.date).where("read", "==", 0).onSnapshot((querySnapshot) => {
        let allMessages = []
        querySnapshot.forEach((doc) => {
        allMessages.push(doc.data())
        });
        commit('LOADING_API', false);
        commit('GET_REMINDER_COUNT', allMessages.length);
        })
    }
    },
  getters:{
    baseUrl(){
        return "https://api.on-track.in/api/"
    },
    waitlistdata(state){
      return id => _.filter(_.uniqBy(state.waitlist, 'mobile'), function(o) { return o.status == id; }); 
    },
    
    failed_booking_data(state){
      return id => _.filter(_.uniqBy(state.failed_bookings, 'customerMobile'), function(o) { return o.flag === id; }); 
    },
    drop_vehicle_data(state){
      return id => _.filter(_.uniqBy(state.drop_vehicle, 'mobile'), function(o) { return o.flag === id; }); 
    },
    bookingDetali(state){
      return id => _.filter(state.new_bookings, function(o) { return o.bookingId === id; }); 
    },

    // demo(state){
    //   return _.uniqBy(state.waitlist, 'mobile').map((items) => ({ length: items.length }))
    // }

    // ,
    waitlist_count(state){
      return {
        "new":(_.filter(_.uniqBy(state.waitlist, 'mobile'), function(o) { return o.status == 0; })).length,
        "postponed":(_.filter(_.uniqBy(state.waitlist, 'mobile'), function(o) { return o.status == 1; })).length,
        "action_taken":(_.filter(_.uniqBy(state.waitlist, 'mobile'), function(o) { return o.status == 2; })).length,
        "not_interested":(_.filter(_.uniqBy(state.waitlist, 'mobile'), function(o) { return o.status == 3; })).length,
        "successful":(_.filter(_.uniqBy(state.waitlist, 'mobile'), function(o) { return o.status == 4; })).length
      } 
    },
    failed_booking_count(state){
      return {
        "new":(_.filter(_.uniqBy(state.failed_bookings, 'customerMobile'), function(o) { return o.flag == 0 || null; })).length,
        "postponed":(_.filter(_.uniqBy(state.failed_bookings, 'customerMobile'), function(o) { return o.flag === 1; })).length,
        "action_taken":(_.filter(_.uniqBy(state.failed_bookings, 'customerMobile'), function(o) { return o.flag == 2; })).length,
        "not_interested":(_.filter(_.uniqBy(state.failed_bookings, 'customerMobile'), function(o) { return o.flag == 3; })).length,
        "successful":(_.filter(_.uniqBy(state.failed_bookings, 'customerMobile'), function(o) { return o.flag == 4; })).length

      } 
    },
    drop_vehicle_count(state){
      return {
        "new":(_.filter(_.uniqBy(state.drop_vehicle, 'mobile'), function(o) { return o.flag == 0 || null; })).length,
        "postponed":(_.filter(_.uniqBy(state.drop_vehicle, 'mobile'), function(o) { return o.flag === 1; })).length,
        "action_taken":(_.filter(_.uniqBy(state.drop_vehicle, 'mobile'), function(o) { return o.flag == 2; })).length,
        "not_interested":(_.filter(_.uniqBy(state.drop_vehicle, 'mobile'), function(o) { return o.flag == 3; })).length,
        "successful":(_.filter(_.uniqBy(state.drop_vehicle, 'mobile'), function(o) { return o.flag == 4; })).length,
        "satisfied":(_.filter(_.uniqBy(state.drop_vehicle, 'mobile'), function(o) { return o.flag == 5; })).length
      } 
    },
    vehicle_count(state){
      return {
        "Available":(_.filter(state.total_vehicles, function(o) { return o.status == 0 || null; })).length,
        "Booked":(_.filter(state.total_vehicles, function(o) { return o.status === 1; })).length,
        "Under Service":(_.filter(state.total_vehicles, function(o) { return o.status == 2; })).length,
        "Ongoing Under Service":(_.filter(state.total_vehicles, function(o) { return o.status == 3; })).length,
      } 
    },
    notesbyid(state){
      return id => _.filter(state.notes, function(o) { return o.status == id; }); 
    },
    serviceByAgent(state){
      return id => _.filter(state.services, function(o) { return o.agentId == id; }); 
    },
    getModelsById(state){
      return id => _.filter(state.models_list, function(o) { return o.name == id; }); 
    },
    date(){
      var date = new Date()
      var month = date.getMonth() + 1;
      if(month < 10){
        month = '0' + month
      }
      var day = date.getDate();
      var year = date.getFullYear();
      return  year + '-' + month + '-' + day
      },
      yesterday(){
        var date = new Date()
        var month = date.getMonth() + 1;
        if(month < 10){
          month = '0' + month
        }
        var day = date.getDate() - 1;
        var year = date.getFullYear();
        return  year + '-' + month + '-' + day
        },
 
      },
      dayBeforeYesterday(){
        var date = new Date()
        var month = date.getMonth() + 1;
        if(month < 10){
          month = '0' + month
        }
        var day = date.getDate() - 2;
        var year = date.getFullYear();
        return  year + '-' + month + '-' + day   
      },
});
