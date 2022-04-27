const apiKey = 'x9IXA9Jo3ZOXlN7s90UnBqgwf-m4MVVD5J5V-3TdDhDT5xQa2nWjCNXLlgoI-bG9AnTRMpNIbu--roCzv0n2b9Ht3cWHldMGiYcP-t_GK0tTZJV3JYkKpdRBcbFpYnYx';

const Yelp = {
    search: (term, location, sortBy) => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {
            Authorization: `Bearer ${apiKey}`
        }}
        ).then( (response) => {
            return response.json()
        }).then( (jsonResponse) => {
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map( (business) => {
                    return {
                        id: business.id,
                        imageSrc: business.photo,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipcode: business.location.postal_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
}

export default Yelp;