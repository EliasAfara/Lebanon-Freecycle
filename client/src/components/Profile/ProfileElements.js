import styled from 'styled-components';

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 767px) {
    padding-top: 10px;
  }
`;

export const HeaderImage = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  margin-right: 30px;
  width: 220px;

  @media only screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

export const ImageSpan = styled.span`
  background-color: #fafafa;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
  width: 150px;
  height: 150px;

  @media only screen and (max-width: 768px) {
    width: 96px;
    height: 96px;
  }
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  font-size: 24px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const SocialIconsV2 = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    font-size: 24px;
  }
`;

export const UserInfoSection = styled.section`
  display: grid;
  width: 60%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 20px 0;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const DisplayUserV1 = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const DisplayUserV2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const UserName = styled.h2`
  display: inline-block;
  font-size: 28px;
  font-weight: 400;
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const EditBtnDiv = styled.div`
  margin: 0 0 0 20px;
  height: fit-content;
`;

export const EditBtn = styled.button`
  display: block;
  position: relative;
  text-align: center;
  padding: 5px 9px;
  width: auto;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  color: rgba(var(--f75, 38, 38, 38), 1);
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  margin-left: 5px;
`;

export const IconBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  height: 30px;
  width: 30px;
  font-size: 25px;
  margin: 0 0 0 4px;
  cursor: pointer;
`;

export const SettingIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: 0 0;
  border: 0;
  font-size: 28px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const UnOrderedList = styled.ul`
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ListItems = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  font-size: 16px;
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 300px) {
    margin-right: 10px;
  }
`;

export const ListItemSpan = styled.span`
  display: inline-table;
  text-align: center;
  color: inherit;
`;

export const ItemCount = styled.span`
  font-weight: 600;
`;

export const ProfileBio = styled.div`
  display: grid;
  line-height: 24px;
  font-size: 16px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
export const UserFullName = styled.h1`
  display: inline;
  font-size: 16px;
  font-weight: 600;
`;

// export const BottomTabBorder = styled.div`
//   border-radius: 3px;
//   border: 1px solid #f0f0f0;
//   background: #fff;

//   @media (max-width: 600px) {
//     border-radius: 0;
//     border-right: 0;
//     border-left: 0;
//     border-bottom: 0;
//   }
// `;
