
const lastNameOut = 'Doess';

//We cereate a new vue app
//by calling the createApp method
// Passing an object to configure how the 
//app will interact with the document
Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}).mount('#app');

Vue.createApp({
    data(){
        return {
            firstName: 'Jonathan',
            lastName: 'Doe'
        }
    }
}).mount('#app2');