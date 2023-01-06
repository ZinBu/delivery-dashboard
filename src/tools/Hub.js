import {getHubs} from "./api";
import {string} from "prop-types";

const HUB_STORE_KEY = "hubs"

export const requestHubs = (onSuccessAction, onFailAction = null) => {
    if (HUB_STORE_KEY in sessionStorage) {
      let cachedValue = sessionStorage.getItem(HUB_STORE_KEY);
      if (cachedValue.isPrototypeOf(string)) {
        onSuccessAction(JSON.parse(cachedValue));
        return
      }
    }
    getHubs()
      .then(result => {
        return result.data;
      })
      .then(result => {
          sessionStorage.setItem(HUB_STORE_KEY, JSON.stringify(result));
          onSuccessAction(result);
      }).catch(() => {
        if (onFailAction !== null) {
            onFailAction()
        }
    })
};
