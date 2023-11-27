import { Suspense } from 'react'

import {useEffect, useState} from 'react'
import './reader.css'
import {Link, useParams} from "react-router-dom";

interface IPageItem {
    value: string,
    type: number
}

interface IPageChoice {
    value: string,
    targetBook: number,
    targetPage: number
}

interface IPage {
    items: IPageItem[],
    choices: IPageChoice[]
}

const emptyPage = {
    items: [],
    choices: []
};

function cleanUpPageLoad() {

}

function Loading() {
    return (<h2>🌀Loading...</h2>);
}

function Reader() {
  const [page, setPage] = useState(emptyPage);
    let { bookId, pageId } = useParams();


    const [serverUrl, setServerUrl] = useState('http://localhost:3000'); // This is a reactive value too

    useEffect(  () => {
      fetch(
          `${serverUrl}/api/book/${bookId}/page/${pageId}`
      ).then(function(data) {


          data.json().then(function(parsedData) {

              setPage(parsedData);
          });

      });

      return cleanUpPageLoad;
  }, [
        serverUrl, bookId, pageId
  ]);

  return (
      <Suspense fallback={<Loading />}>
          <div>
              {
                  page.items.map(function(item) {
                      if (item.type === 1) {
                          return (
                              <p key={item.id}>
                                  {item.value}
                              </p>
                          );
                      }
                      if (item.type === 2) {
                          return (
                              <img key={item.id} src={item.value} alt={item.value}></img>
                          );
                      }
                  })
              }
          </div>

          <hr/>

          <div>
              {
                  page.choices.map(function(item) {
                      return <div key={item.id}>
                          <Link to={`/reader/${item.targetBook}/page/${item.targetPage}`} >
                              {item.value}
                          </Link>
                      </div>
                  })
              }
          </div>
    </Suspense>
  );

}

export default Reader
