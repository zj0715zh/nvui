/**
 * @author itzou
 * Date: 18/03/24
 */
import Tag from './src/tag.vue'

Tag.install = function(Vue) {
  Vue.component(Tag.name, Tag)
}

export default Tag
