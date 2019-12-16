import compass from './compass'
compass.install =function(Vue){
  Vue.component(compass.name,compass);
}
export default compass