import container from '../dependencies/container';

var Location = container.getType('Location');

class SearchProvider {
  find(params) {
    var url = params.url;
    var val = params.value;
    var href = this._getSearchUrl(url, val, '$filter');
    if(href) Location.href=href;
  }

  _getSearchUrl(url, val) {
    var Notify = container.getType('Notify');
    var href;
    href=null;
    Notify.show("Search provider not set", 3000);
    return href;
    /*if (url.indexOf('/User') > -1) {
     href = '/User/List/1?search_FirstName_LastName=' + val;
     Notify.show("Searching for '" + val + "'", 3000);
     return href;
     } else if (url.indexOf('/Order') > -1) {
     href = '/Order/List/1?search_FirstName_LastName=' + val;
     Notify.show("Searching for '" + val + "'", 3000);
     return href;
     } else {
     href = '/User/List/1?search_FirstName_LastName=' + val;
     Notify.show("Searching for '" + val + "'", 3000);
     return href;
     }*/
  }
}

container.registerType('$SearchProvider', new SearchProvider());
