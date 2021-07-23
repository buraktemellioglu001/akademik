import ApiService from "@/services/api/api.service";
const sURL = "Academic/SearchWId";
const searchDetailURL = "Academic/SearchDetail";
const searchService = {
  searchWID(id){
    return ApiService.getBearer(`${sURL}?id=${id}`);
  }
  ,
  searchDetailWID(id){
    return ApiService.getBearer(`${searchDetailURL}?id=${id}`);
  }
}

export default searchService;
