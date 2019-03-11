/**
 * 全局异常处理方法
 */
export default {

    /**
     *
     * @param vm
     * @param err
     */
    handle: function (error,vm) {
      if (error.response) {
        if (error.response.data) {
          if (error.response.data.code == 10002) {
            vm.lauchSnackbar(vm.$t('message.error_no_login'), 'error');
          }else {
            vm.lauchSnackbar(vm.$t('message.error_system'), 'error');

          }

        }
      }else {
        vm.lauchSnackbar(`${error}`, 'error');

      }
    }

};
