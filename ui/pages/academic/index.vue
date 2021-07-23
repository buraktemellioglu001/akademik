<template>
  <div>
    <div class="content">

      <div id="search-page">
        <h1>Akademisyen Arama</h1>

        <div class="col-md-12">
          <vs-input style="width: 100%" v-model="academicanId" size="large" placeholder="Akademisyen ID sini giriniz."/>
        </div>
        <div class="col-md-12 text-right mt-1">
          <div class="float-right text-right">
            <vs-button color="primary" @click="academicanSearch" type="filled">Arama Yap</vs-button>
          </div>
        </div>
        <div v-if="foundedResearcher" class="researcher-profile-page-container">
          <div class="researcher-profile-page-header">
            <div class="white-box-with-light-shadow">
              <div class="gradient-bar"></div>
              <div class="researcher-card-container"><img class="researcher-card-photo"
                                                          :src="foundedResearcher.photo"
                                                          :alt="foundedResearcher.publishing_name">
                <div class="researcher-card-header">
                  <div class="researcher-card-names"><h2 class="margin-right-md margin-bottom-none"
                                                         :title="foundedResearcher.publishing_name">
                    {{ this.foundedResearcher.publishing_name }}</h2>
                    <div class="researcher-card-alt-names margin-top-xs"><span
                      class="researcher-card-alt-name">{{ this.foundedResearcher.publishing_name }}</span>
                      <vs-button @click="searchDetailWID">Detayları Yükle</vs-button>
                    </div>

                  </div>
                  <div class="researcher-card-header-researcher-id">
                    <p class="researcher-id-widget light-bar-left padding-left-sm"><b class="large">Publons ID</b>&nbsp;<a
                      title="Publons academic uygulamasındaki ID değeri"><i
                      class="material-icons material-icons-xs inline"></i></a><br>
                      <span>{{ this.foundedResearcher.ids.id }}</span>
                    </p>
                    <hr>
                    <p class="researcher-id-widget light-bar-left padding-left-sm"><b class="large">Publons Researcher
                      ID</b>&nbsp;<a
                      title="Publons academic uygulamasındaki Researcher DI değeri"><i
                      class="material-icons material-icons-xs inline"></i></a><br><span>{{
                        this.foundedResearcher.ids.rid
                      }}</span>
                    </p>
                    <hr>
                    <p class="researcher-id-widget light-bar-left padding-left-sm"><b class="large">Unique ID
                      (truid)</b>&nbsp;<a
                      title="Publons academic uygulamasındaki TRUID değeri"><i
                      class="material-icons material-icons-xs inline"></i></a><br><a class="very-dark-gray-link"

                                                                                      title="Copy and share this profile's URL"><span>{{
                        this.foundedResearcher.ids.truid
                      }}</span></a>
                    </p>

                  </div>


                </div>
                <div class="researcher-card-badges"></div>
                <div class="researcher-card-institution"></div>
                <div class="researcher-card-metrics left-bar-figures">
                  <div class="left-bar-figure" title="All publications, including those not indexed in Web of Science">
                    <h5>Publications</h5>
                    <p>{{this.numPublications}}</p></div>
                  <div class="left-bar-figure" title="Total citations from the Web of Science Core Collection">
                    <div class="left-bar-figure-loading-indicator loadingStats" style="display: none;"></div>
                    <div class="left-bar-figure-loading loadingStats" style="display: none;"></div>
                    <h5>Total times cited</h5>
                    <p class="researcher-card-total-citations-val">{{this.timesCited}}</p></div>
                  <div class="left-bar-figure left-bar-figure-large" title="Web of Science h-index">
                    <div class="left-bar-figure-loading-indicator loadingStats" style="display: none;"></div>
                    <div class="left-bar-figure-loading loadingStats" style="display: none;"></div>
                    <h5>H-index</h5>
                    <p class="researcher-card-h-index-val">{{this.hIndex}}</p></div>
                  <div class="left-bar-figure left-bar-figure-large" title="Web of Science h-index">
                    <div class="left-bar-figure-loading-indicator loadingStats" style="display: none;"></div>
                    <div class="left-bar-figure-loading loadingStats" style="display: none;"></div>
                    <h5>Last Update</h5>
                    <p class="researcher-card-h-index-val">{{this.getLastUpdate}}</p></div>
                </div>
              </div>
            </div>
          </div>

          <div class="researcher-profile-page-content">
            <div class="researcher-profile-summary-container">
              <div class="researcher-profile-summary-researcher-summary white-box-with-light-shadow">
                <div class="researcher-profile-bio"><h3>Institutions </h3>
                  <p class="researcher-profile-research-fields">
                    <a v-for="inst in foundedResearcher.affiliations.institutions"

                       class="button small autowidth">{{inst.name}}</a>

                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
      <div id="loading" class="hidden">
        <h1>Searching...</h1>
        <div class="searchbar-searching">
          <div class="large-loading-gif margin-top-lg"></div>
          <span class="sr-only">Loading...</span></div>
      </div>
    </div>

  </div>
</template>

<script>
import "@/assets/app-52e167.css";
import "@/assets/lib-52e167.css";

import verifyService from "../../services/verify/verify.service";
import saxNotifications from "../../plugins/saxNotifications";
import saxLoading from "../../plugins/saxLoading";
import searchService from "../../services/search/search.service";

const searchStillContinueMessage = "Arama işlemi devam ediyor lütfen bekleyiniz.";
const fieldCannotBeNull = "Akademisyen ID belirtmeden arama işlemi yapamazsınız.";
const detailFetchError = "Detaylar publons tarafından çekilirken bir hata ile karşılaşıldı.";
export default {
  name: "index",
  layout: "pubLayout",
  beforeMount() {
    verifyService.verifyInPage();
  },

  mounted() {


  },
  data() {
    return {
      academicanId: ""
      , foundedResearcher: false,
      timesCited : "-",
      hIndex : "-",
      numPublications : "-"

    }
  },
  methods: {
    setDefaultValues(){
     this.timesCited = "-";
     this.hIndex = "-";
     this.numPublications = "-";
    },
    academicanSearch() {
      this.setDefaultValues();
      if (!this.academicanId)
        saxNotifications.error(fieldCannotBeNull);
      else
        searchService.searchWID(this.academicanId).then((resp) => {
          console.log("your resp");
          console.log(resp);
          if (!resp.isCompletedSuccessfully) {
            saxNotifications.error(`${this.academicanId} ID li araştırmacı publons üzerinde bulunamadı , lütfen kontrol edip tekrar deneyiniz.`)
          } else {
            this.foundedResearcher = resp.result;
            saxNotifications.success(`${this.academicanId} ID li araştırmacı bilgileri başarı ile getirildi.`);
          }
        })
    },
    searchDetailWID(id) {
      this.setDefaultValues();
       searchService.searchDetailWID(this.foundedResearcher.ids.id).then((resp) => {
         if(resp && resp.result && resp.isCompletedSuccessfully){
          saxNotifications.success(`${this.foundedResearcher.ids.id} ID detayları getirildi`) ;
          this.hIndex = resp.result.hIndex;
          this.timesCited = resp.result.timesCited;
          this.numPublications = resp.result.numPublicationsInWos;
         }
         else{
           saxNotifications.error(detailFetchError);
         }
       }).catch((err) => {
         saxNotifications.error(detailFetchError) ;
         console.log(err);
       })
    }
  }
  ,
  computed : {
   getLastUpdate : function(){
     return new Date(this.foundedResearcher.datetime_records_last_updated).toDateString();
   }
  }
}
</script>
<style>
.vs-input {
  width: 100% !important;
}
</style>


