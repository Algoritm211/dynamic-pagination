import React from 'react';
import styled from 'styled-components'


const PhotoContainer = styled.div`
  display: flex;
  width: 600px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`

const Photo = styled.div`
  width: 300px;
  max-height: 600px;
  margin-right: 10px;
  
  > img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`

const Description = styled.div`
  > div {
    font-weight: bold;
  }
  span {
    font-weight: normal;
  }
`

const PhotosElement = ({photo}) => {

  return (
    <div>
      <PhotoContainer>
        <Photo>
          <img src={photo.url} alt="car"/>
        </Photo>
        <Description>
          <div>Номер фотографии: <span>{photo.id}</span> </div>
          <div>Описание:</div>
          {photo.title}
        </Description>
      </PhotoContainer>
    </div>
  );
};

export default PhotosElement;
