import styled from 'styled-components';

export const ProfileHeader__Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const PictureContainer__Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 140px;
  margin-right: 32px;

  @media (max-width: 767px) {
    justify-content: flex-start;
    width: fit-content;
    margin-right: 15px;
  }
`;

export const UserIcon__Img = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* margin: 0;
  cursor: pointer; */
`;

export const ProfileHeaderText__Div = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
export const ManageGravatar__Span = styled.span`
  color: #475366;
  font-size: 14px;

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export const SocialIcons = styled.div`
  display: block;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const SocialIconsName = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;
