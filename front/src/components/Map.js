import React, {useState,useEffect} from "react";
import KakaoMapCategory from "./KakaoMapCategory";

function SelectList(props) {
  const [listMode, setListMode] = useState(false);
  const list = [];
  for(let i = 0; i < props.moyeoList.length; i++){
    let data = props.moyeoList[i];
    list.push(<li key={data.key} className='map_moyeo_list'>
      <a id={'/moyeoList/'+data.key} className={'moyeo '+ (listMode === '/moyeoList/'+data.key && 'active')} href={'/entryList/'+data.key} onClick={event =>{
        event.preventDefault();
        setListMode(event.target.id);
        props.onActive(event.target.id);
      }}>{data.title} {data.peoples}</a>
    </li>)
  }

  return <ul className='map_list_ul'>
      {list}
    </ul>
}

export default function Map(props) {

  useEffect(() => {
    KakaoMapCategory();
  }, []);

  return <article className="article">
    <div className="map_wrap">
      <ul id="category">
          <li id="CS2" data-order="0"> 
              <span className="category_bg 24store"></span>
              편의점
          </li>       
          <li id="SW8" data-order="1"> 
              <span className="category_bg food"></span>
              지하철
          </li>    
          <li id="AT4" data-order="2"> 
              <span className="category_bg tour"></span>
              관광
          </li>  
          <li id="FD6" data-order="3"> 
              <span className="category_bg foods"></span>
              음식점
          </li>  
          <li id="CE7" data-order="4"> 
              <span className="category_bg cafe"></span>
              카페
          </li>   
          <li id="OL7" data-order="5"> 
              <span className="category_bg oil"></span>
              주유소
          </li>      
      </ul>
    </div>
    <div id="Map"></div>
    <div className="moyeo_list"><SelectList moyeoList={props.moyeoList} onActive={(activeId)=>{
      props.onChange(activeId)
    }}/></div>
  </article>
}