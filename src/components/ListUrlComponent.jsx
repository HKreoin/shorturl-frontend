import React, {useEffect, useState} from 'react'
import { listUrls } from '../services/UrlService'
import { useNavigate } from 'react-router-dom'

const ListUrlComponent = () => {
    
    const [urls, setUrls] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        listUrls().then((response) => {
            setUrls(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    const currentUrl = "http://localhost:8080/";

    function createShortUrlToken() {
        navigator('/create-short-url');
    }

  return (
    <div className='container'>
        <h2 className=' '>List of URLs</h2>
        <button className='btn btn-primary mb-2' onClick={createShortUrlToken}>Create short url</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Full URL</th>
                    <th>Short URL</th>
                    <th>Request count</th>
                </tr>
            </thead>
            <tbody>
                {
                    urls.map(url =>
                        <tr key={url.id}>
                            <td>{url.id}</td>
                            <td><a href={url.longUrl}>{url.longUrl}</a></td>
                            <td><a href={currentUrl + url.shortUrlToken}>{currentUrl + url.shortUrlToken}</a></td>
                            <td>{url.requestCount}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListUrlComponent