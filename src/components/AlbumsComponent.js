import {useEffect, useState} from "react"
import {getAlbums} from "../services/service.api"

import AlbumComponent from "../components/AlbumComponent"


export default function AlbumsComponent (){

        let [albums, setAlbums] = useState([]);

        useEffect(()=>{
            getAlbums().then(value => setAlbums([...value]))
        }, []);



    return(<div>
        {albums.map(value => <AlbumComponent item={value} key={value.id}/>)}
    </div>)
}