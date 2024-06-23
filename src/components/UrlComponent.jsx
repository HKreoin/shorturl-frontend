import React, { useState } from 'react'
import { createUrl } from '../services/UrlService'
import { useNavigate } from 'react-router-dom'

const UrlComponent = () => {

    const [longUrl, setLongUrl] = useState('');
    const [shortUrlToken, setShortUrlToken] = useState('');
    const navigator = useNavigate();

    function saveUrl(e){
      e.preventDefault();

      const url = {longUrl, shortUrlToken};
      console.log(url);

      createUrl(url).then((response) => {
        console.log(response.data);
        navigator('/urls')
      })
    }

  return (
    <div className='container'>
      <br />
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          <h2 className='text-center'>Create short URL</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Long URL</label>
                <input 
                  type="text"
                  placeholder='Enter url'
                  name='longUrl'
                  value={longUrl}
                  className='form-control'
                  onChange={(e) => setLongUrl(e.target.value)}
                >
                </input>
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Custom short URL token</label>
                <input 
                  type="text"
                  placeholder='You can try create your token (max 20 symbols A-z0-9)'
                  name='shortUrlToken'
                  value={shortUrlToken}
                  className='form-control'
                  onChange={(e) => setShortUrlToken(e.target.value)}
                >
                </input>
              </div>

              <button className='btn btn-success' onClick={saveUrl}>Создать</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UrlComponent