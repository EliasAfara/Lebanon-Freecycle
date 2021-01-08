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
  width: 100%;
  background: ${(props) =>
    props.currentStatus === 'Available' ? `#fafffa` : `#fff`};

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
  /* background: rgba(0, 0, 0, 0.12); */
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
  padding: 6px 10px 6px 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 10px 20px 10px 20px;
  }
`;

export const ContentDetails = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.7fr;
  width: 100%;
  height: 100%;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  height: fit-content;
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
  flex-direction: column;
  justify-content: center;
`;

export const ItemLocation = styled.div`
  height: fit-content;
  margin-top: -6px;
`;
export const ItemLocationLink = styled.a`
  font-size: 11px;
  color: #8e8e8e;

  &:hover {
    color: rgba(var(--i1d, 38, 38, 38), 1);
  }
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

export const ItemName = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const ItemDescriptionDiv = styled.div`
  height: fit-content;
  @media only screen and (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const ItemDescription = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
  font-size: 13px;
  color: inherit;
`;

// Card Footer

export const ContentFooter = styled.div`
  margin-top: 5px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  font-size: 12px;
`;
export const FooterTags = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 319px) {
    display: block;
  }
`;

export const LowerFooter = styled.div`
  margin-top: 5px;
  display: inline-flex;
  align-items: center;
  font-size: 12px;
`;
export const LikeWrapper = styled.span`
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
