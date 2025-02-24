import React from "react";
import styled from "styled-components";

interface BannerProps {
  imageUrl: string;
  altText?: string;
  height?: string;
}

const BannerWrapper = styled.div<Pick<BannerProps, 'height'>>`
  width: 100%;
  height: ${(props) => props.height || "300px"};
  background-size: cover;
  background-position: auto;
  border-radius: 10px;
  overflow: hidden;

`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  object-fit: contain;
`;

export const BannerImg: React.FC<BannerProps> = ({ imageUrl, altText = "Banner", height }) => {
  return (
    <BannerWrapper height={height}>
      <BannerImage src={imageUrl} alt={altText} />
    </BannerWrapper>
  );
};


