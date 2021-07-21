import Vue from "vue";


const saxLoading = {
  textLoading(text){

    return Vue.prototype.$vs.loading({
      text: text
    });
  }
  ,
  loadingClose(loading){
    loading.close() ;
  }
}

export default saxLoading;
