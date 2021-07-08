import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/services/jwt/jwt.service";
import siteConstants from "@/constants/siteConstants";
import saxLoading from "~/plugins/saxLoading";

const ServerError = "Sunuc ile iletişime geçilirken bir hata ile karşılaşıldı.";
class ResData {
  _responsestate;
  _message;
  _notAuthhenticated;
  constructor(resState, message,notAuthenticated = false) {
    this._responsestate = resState;
    this._message = message;
    this._notAuthhenticated = notAuthenticated;
  }
}

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = siteConstants.baseApiURL;
    Vue.axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
      ] = `Token ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[KT] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[KT] ApiService ${error}`);
    });
  },

  getBearer(resource) {
    let loader = saxLoading.textLoading("Bilgiler işleniyor");
    this.setHeader();
       return new Promise((resolve, reject) => {
      Vue.axios
        .get(resource)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err =>{


          if(err.response.status === 401){
            window.location.href = "/login"

          }
          else reject(new ResData(false, ServerError));

        }).finally(() => {
        loader.close();
      });
    });
  },


  post(resource, params) {
    return new Promise((resolve, reject) => {
      Vue.axios
        .post(resource, params)
        .then(({data}) => {
          resolve(data);
        })
        .catch(({ response }) => {
          if (!response) {
            reject(new ResData(false, ServerError));
          }
          reject(new ResData(false,response));
        });
    });
  },

  postBearer(resource, params) {
    let loader = saxLoading.textLoading("Bilgiler işleniyor");
    this.setHeader();
    return new Promise((resolve, reject) => {
      Vue.axios
        .post(resource, params)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err =>{


          if(err.response.status === 401){
            window.location.href = "/login"

          }
          else reject(new ResData(false, ServerError));

        }).finally(() => {
        loader.close();
      });
    });
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};
ApiService.init();

export default ApiService;
