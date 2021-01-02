import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Card = styled.div`
  border-radius: 3px;
  box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.15);
  display: flex;
  overflow: hidden;
  width: 80%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 3px 3px 0;
    border-radius: 0;
  }
`;

export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.12);
  width: 200px;
  height: 200px;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 395px;
  }
  @media only screen and (max-width: 320px) {
    height: 290px;
  }
`;
export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.div`
  display: block;
  width: calc(100% - 200px);
  padding: 10px 10px 10px 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ContentDetails = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;
export const HeaderAvatar = styled.img`
  vertical-align: middle;
  margin-right: 10px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const HeaderUserFullName = styled.span`
  color: rgba(var(--i1d, 38, 38, 38), 1);
  font-size: 14px;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderEllipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #8e8e8e;
  cursor: pointer;

  &:hover {
    color: rgba(var(--i1d, 38, 38, 38), 1);
  }
`;

export const DetailsUnOrderedList = styled.ul`
  display: block;
  margin-bottom: 5px;
`;

export const ListItems = styled.li`
  display: grid;
  text-align: -webkit-match-parent;
  margin-right: 40px;
`;

export const ListItemSpan = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
  font-size: 14px;
  color: inherit;
`;
export const ListItemName = styled.span`
  font-weight: 600;
`;

export const ItemDescriptionDiv = styled.div`
  @media only screen and (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const ItemDescription = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
  font-size: 14px;
  color: inherit;
`;

export const ContentFooter = styled.div`
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
`;
export const ContentBtn = styled.button`
  position: relative;
  display: block;
  appearance: none;
  background: 0 0;
  border: 0;
  box-sizing: border-box;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  width: auto;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  color: rgba(var(--f75, 38, 38, 38), 1);
  user-select: auto;
  cursor: pointer;
`;

export const ContentDate = styled.span`
  margin-left: auto;
  margin-right: 12.5px;
  font-size: 10px;
  color: #8e8e8e;
  text-transform: uppercase;
`;

// Card actions menu

export const DropdownActionsList = styled.div`
  position: absolute;
  transform: translate(-65px, 65%);
  width: 140px;
  font-size: 14px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const DropdownAction = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: #262626;

  &:hover {
    background: lightgray;
  }
`;

export const ActionIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-right: 12px;
`;
