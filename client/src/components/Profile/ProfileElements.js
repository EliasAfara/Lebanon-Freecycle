import styled from 'styled-components';

export const ProfileHeader = styled.header`
  padding-top: 30px;
  display: flex;
  align-items: center;
  /* Vertical */
  justify-content: center;
  /* Horizontal */
  padding-right: 20px;
`;

export const HeaderImage = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  margin-right: 30px;
  width: 220px;
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
`;

export const UserInfoSection = styled.section`
  display: grid;
  width: 60%;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 20px 0;
`;

export const UserName = styled.h2`
  display: inline-block;
  font-size: 28px;
  margin: 0;
`;

export const EditBtnDiv = styled.div`
  margin: 0 0 0 20px;
  height: fit-content;
`;

export const EditBtn = styled.button`
  font-size: 14px;
  appearance: none;
  background: 0 0;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  width: auto;
  border-radius: 4px;
  position: relative;
  background-color: transparent;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  color: rgba(var(--f75, 38, 38, 38), 1);
  user-select: auto;
`;

export const SettingBtnDiv = styled.div`
  display: inline-block;
  height: fit-content;
  margin-left: 5px;
`;

export const SettingBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: 0 0;
  border: 0;
  font-size: 28px;
  margin: 0 0 0 4px;
  cursor: pointer;
`;

export const UnOrderedList = styled.ul`
  margin-bottom: 20px;
  display: inline-flex;
`;

export const ListItems = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  font-size: 16px;
  margin-right: 40px;

  &::last-child {
    margin-right: 0;
  }
`;

export const ListItemSpan = styled.span`
  color: inherit;
  text-align: center;
`;

export const ItemCount = styled.span`
  font-weight: 600;
`;

export const ProfileBio = styled.div`
  display: grid;
  line-height: 24px;
  font-size: 16px;
  width: 100%;
`;
export const UserFullName = styled.h1`
  display: inline;
  font-size: 16px;
  font-weight: 600;
`;
export const ProfileWebsite = styled.div`
  display: inline-block;
  width: fit-content;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
