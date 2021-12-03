// import Cookies from 'js.cookie/dst/Cookie';

const axios = require("axios").default;
import { authInfo64 } from "../positions/reports/AuthInfo";

function ChartAPI() {
  this.axiosRequest = axios;
  this.hostname = window.location.hostname;
  this.protocol = `${process.env.VUE_APP_CLIENT_PROTOCOL}`;
  this.domen = `${process.env.VUE_APP_CLIENT_API_DOMEN}`;
  this.client = `${process.env.VUE_APP_CLIENT_URI}`;
  this.stats = `${process.env.VUE_APP_STATS_URI}`;
  this.parseCount = `${process.env.VUE_APP_PARSE_COUNT}`;
  this.keywords = `${process.env.VUE_APP_KEYWORDS}`;
  this.keywordsStats = `${process.env.VUE_APP_KEYWORDS_STATS_URI}`;
  this.keywordsTypes = `${process.env.VUE_APP_KEYWORDS_TYPES_URI}`;
  this.clients = `${process.env.VUE_APP_CLIENTS_URI}`;
  this.competitors = `${process.env.VUE_APP_ADVERTISERS_URI}`;
  this.usp = `${process.env.VUE_APP_USP_URI}`;
  this.requestingTypeURL = {"getPivotChart": this.client, "getKeywords": this.keywords,
      "getClients": this.clients, "getKeywordsStats": this.keywordsStats, "getKeywordsTypes": this.keywordsTypes,
      "getUsp": this.usp, "getCompetitors": this.competitors}
}

ChartAPI.prototype.sendRequest = async function(requestType ="common", clientID=null, prefix=null) {
      let ourURL = `${this.protocol}://${window.location.hostname}${this.domen}/${this.requestingTypeURL[requestType]}`;
      if (clientID) {
            ourURL = ourURL + "/" + clientID;
      }
      if (prefix) {
          ourURL += prefix;
      }

      return await this.axiosRequest
        .get(ourURL, {
          headers: {
            Authorization: `Basic ${authInfo64}`,
          },
          mode: "no-cors",
          credentials: "include",
        })
        .then((response) => response.data)
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
          if (requestType === "getPivotChart") {
              if (err.response.status === 400) {
                if (err.response.data['detail'] === "Advertiser on this client not exist") {
                    return {error: "Отсутствует рекламодатель"}
                } else {
                    return {error: "Ошибка"}
                }
              } else if (err.response.status === 404) {
                return {error: "Запрашиваемый клиент не найдет"}
              }
              return {
                  error: err.response.status
              }
          }
        });
}

ChartAPI.prototype.getStatsClientReport = async function (prefix, clientID) {
  let ourURL = `${this.protocol}://${window.location.hostname}${this.domen}/${this.client}`;
  if (prefix) {
    ourURL = ourURL + "/" + clientID + prefix + "&top=0" + "&format=csv";
  } else {
    ourURL = ourURL + "/" + clientID + "?top=0" + "&format=csv";
  }
  return this.axiosRequest
    .get(ourURL, {
      headers: {
        Authorization: `Basic ${authInfo64}`,
      },
      mode: "no-cors",
      credentials: "include",
    })
    .then((response) => response.data)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};


ChartAPI.prototype.getCompetitors = async function (clientID) {
    return await this.sendRequest("getCompetitors", clientID)
};

export default ChartAPI;
