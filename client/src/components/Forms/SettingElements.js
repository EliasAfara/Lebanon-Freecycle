import styled from 'styled-components';

export const ProfileHeader__Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 10px;

  @media (max-width: 980px) {
    margin-top: 0;
  }
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

export const RequiredMessage__Div = styled.div`
  width: 140px;
  margin-right: 85px;

  @media (max-width: 767px) {
    margin: 10px 0 10px 0;
    width: 100%;
  }
`;

export const ActionsContainer__Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
`;

export const DeleteAccount__Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DeleteAccount__Button = styled.button`
  appearance: none;
  background: 0 0;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  user-select: none;
  width: auto;
  border: none;
  color: #ff002c;
`;
