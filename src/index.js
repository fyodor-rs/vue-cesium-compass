import compass from './packages/compass/index'
import flyButton from './packages/flyButton/index'

const components = [
    compass,flyButton
]

const install = function (Vue) {
    components.forEach(component => {
      Vue.component(component.name,component)
    })
}
  
  /* 支持使用标签的方式引入 */
if (typeof window !== undefined && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    compass,
    flyButton
}