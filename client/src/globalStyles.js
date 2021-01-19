import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
*{  
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: ${(props) => props.theme.body};
    overflow-y: scroll !important;
    color: ${(props) => props.theme.fontColor};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 18px;
    transition: 0.8s all ease;
}

ol,
ul {
    list-style: none;
}

hr {
    border-top-width: 1px;
    display: block;
    unicode-bidi: isolate;
    margin: 0;
}

button:focus{
    outline: none;
}

.react-switch-handle{
    box-shadow: ${(props) => props.theme.activeLinkColor} 0px 0px 2px 3px;
}

.spinner {
    display: block;
    font-size: 0;
    color: ${(props) => props.theme.activeLinkColor};
}

.modal-content{
  background-color: ${(props) => props.theme.itemBackground};
}

.FilterBar-wrapper{
    display: block;

    @media only screen and (max-width: 767px) {

      display: none;
      
    }
}

.SideFilterBar-wrapper{
display: none;
  @media only screen and (max-width: 767px) {
      display: block;
    }
}


  .ant-drawer,
.ant-modal-mask,
.ant-image-preview-mask {
    z-index: 1050;
}

.ant-modal-wrap,
.ant-image-preview-wrap {
    z-index: 1060;
}

.ant-drawer-close {
    height: 100%;
}
.ant-drawer-close,
.ant-modal-close-x {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.ant-modal-close-x {
    width: 55px;
    height: 55px;
    font-size: 16px;
}

.anticon{
    vertical-align: 0.125em;
}
.ant-tag{
    background: transparent;
    font-weight: 400;
}

.pagination{
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}
.ant-pagination-prev .ant-pagination-item-link,
.ant-pagination-next .ant-pagination-item-link {
    display: flex;
    align-items: center;
    justify-content: center;
}

.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector::after,
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item{
    line-height: 38px;
    color: #262626;
    font-weight: 400;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder {
    line-height: 38px;
    color: #999;
    font-weight: 400;
}

/* Social Icons */
i.fa-twitter {
    color: #38a1f3;
}
i.fa-facebook {
    color: #3b5998;
}
i.fa-instagram {
    color: transparent;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background-clip: text;
    -webkit-background-clip: text;
    margin-right: 2px;
}
/* Social Icons */
  
  

`;
