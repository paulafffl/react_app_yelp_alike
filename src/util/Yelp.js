const apiKey = '5Om_vHjbTmCuN3inxw_7Xgk1kbovx3iu_gvP-zgubozTpc8U4AuaGN0TfmClrGSbH3A26KT_mZYdapZZLHLRrPD5CfBUEHDfEif1BG1W7lKDuoI_F0vmmJGSXPlPXnYx'

const yelp = {
    search(term, location, sortBy){
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&$location=${LOCATION}&sort_by=${SORT_BY}`,{
                headers: {
                    Authorisation: `Bearer ${apiKey}`
            }
        //convert the returned response to JSON for us to be able to effectively utilize our list of businesses
        }).then(response => {
            return response.json();
        //retrieve the list of businesses from the converted JSON response    
        }).then(jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    
                })

            }
        }
        ;
    }
}