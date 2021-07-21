import ApiService from "@/services/api/api.service";
const sURL = "Academic/SearchWId";

const searchService = {
  searchWID(id){
    return ApiService.getBearer(`${sURL}?id=${id}`);
  }
}

export default searchService;
