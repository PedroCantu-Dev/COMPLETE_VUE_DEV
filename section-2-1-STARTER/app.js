
const lastNameOut = 'Doess';

//We cereate a new vue app
//by calling the createApp method
// Passing an object to configure how the 
//app will interact with the document
const vm = Vue.createApp({ //vm stands for view model
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    //whe define the methods that we want to use in the template
    methods: {
        fullName(){
            return `${this.firstName} ${this.firstName.toUpperCase()}`
        }
    }
}).mount('#app');

//vue proxies the data behind the scenes
//so we can access directly without having to use the data object
//like vm.data.firstName
setTimeout(() => {
    vm.firstName = 'Bob';
}, 2000);
//whitout proxy:
//vm.$data.firstName = 'Bob';
//vue create getters and setters for each property
//under the hood, so that is convinient to access the data for us as developers

//with the proxy we can access the data directly
//vm.firstName = 'Bob';

// Vue.createApp({
//     data(){
//         return {
//             firstName: 'Jonathan',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2');