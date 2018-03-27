/**
 * @author itzou
 * Date: 18/03/25
 */
import Alert from './src/alert.vue';

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;
