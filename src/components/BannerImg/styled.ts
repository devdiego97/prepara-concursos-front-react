const BannerWrapper = styled.div<Pick<BannerProps, 'height'>>`
  width: 100%;
  height: ${(props) => props.height || "300px"};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
