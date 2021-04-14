import sanityClient from '@sanity/client'
import envi from './environment'
import {settings} from './connector_settings.json'
// import { ACTIONS as DATA_ACTIONS } from "../reducers/DataReducer"
// import toast from '../services/toast'
import imageUrlBuilder from '@sanity/image-url'

const prevFetched = {};

export const client = (dispatch)=>{
    const environment = envi();
    let _ = settings;
    const sc = sanityClient({
        projectId: _.projectId,
        dataset: _.dataset,
        token: _.token, // or leave blank to be anonymous user
        ignoreBrowserTokenWarning: true,
        useCdn: false
    })

    const fetch = (query)=>{
        return new Promise((resolve, reject)=>{
            if (prevFetched[query]){
                if (environment.dev){
                    console.log("reused cached query");
                }
                resolve(prevFetched[query]);
            } else {
                sc.fetch(query)
                .then((data)=>{
                    prevFetched[query] = data;
                    resolve(data);
                }).catch(reject);
            }
        })
    }

    const builder = imageUrlBuilder(sc)

    const squareImage = (url, width)=>{
        return builder.image(url).width(width).height(width).url();
    }

    
    if (environment.dev){
        environment.printstatus()
    } 

    return {
        fetch,
        environment,
        squareImage
    }
}



export default client;

