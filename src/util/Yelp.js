const apiKey = '5Om_vHjbTmCuN3inxw_7Xgk1kbovx3iu_gvP-zgubozTpc8U4AuaGN0TfmClrGSbH3A26KT_mZYdapZZLHLRrPD5CfBUEHDfEif1BG1W7lKDuoI_F0vmmJGSXPlPXnYx'

const yelp = {
    search(term, location, sortBy){
        //return a promise that will ultimately resolve to our list of businesses
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&$location=${location}&sort_by=${sortBy}`,{
                headers: {
                    Authorisation: `Bearer ${apiKey}`
            }
        //convert the returned response to JSON for us to be able to effectively utilize our list of businesses
        }).then(response => {
            return response.json();
        //retrieve the list of businesses from the converted JSON response    
        }).then(jsonResponse => {
            console.log(jsonResponse);
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                  return {
                    id: business.id,
                    imageSrc: busines.image_url,
                    name: business.name,
                    address: business.location.address,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                  }  
                })
            }
        }
    },
}

export default yelp;