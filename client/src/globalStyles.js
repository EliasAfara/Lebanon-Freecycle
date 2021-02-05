import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
*{  
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html {
    scroll-behavior: smooth;
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
p{
    margin-bottom: 0;
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
h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.fontColor};
}

button:focus{
    outline: none;
}

.card-header{
    font-weight: 600;
    background-color: ${(props) => props.theme.cardHeaderBackground};
}
.card-body, .list-group-item{
    background-color: ${(props) => props.theme.models.background};
}

.ant-spin{
    color: ${(props) => props.theme.activeLinkColor};
}

.ant-spin-dot-item{
    background-color: ${(props) => props.theme.activeLinkColor};
}
/* collapse */

.ant-collapse > .ant-collapse-item > .ant-collapse-header {
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.cardHeaderBackground};
}

.ant-collapse-content, .ant-collapse-content > .ant-collapse-content-box{
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.models.background};
}

/* collapse */

.ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link {
    background-color: ${(props) => props.theme.models.background};
}
.ant-pagination-item {
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.models.background};
}
.ant-pagination-item-active {
    font-weight: 500;
    background: ${(props) => props.theme.models.background};
    border-color: ${(props) => props.theme.activeLinkColor};
}
.ant-pagination-item-active a {
    color: ${(props) => props.theme.activeLinkColor} !important;
}
.ant-pagination-item:focus, .ant-pagination-item:hover {
    border-color: ${(props) => props.theme.activeLinkColor};
}
.ant-pagination-item:focus a, .ant-pagination-item:hover a {
    color: ${(props) => props.theme.activeLinkColor};
}
.ant-pagination-prev:focus .ant-pagination-item-link, .ant-pagination-next:focus .ant-pagination-item-link, .ant-pagination-prev:hover .ant-pagination-item-link, .ant-pagination-next:hover .ant-pagination-item-link {
    color: ${(props) => props.theme.activeLinkColor};
    border-color: ${(props) => props.theme.activeLinkColor};
}

.modal-content {
    background-color: ${(props) => props.theme.models.background};
}
.action-popup-link:hover,
.action-popup-button:hover {
    background: ${(props) => props.theme.models.hoverColor};
}

.modal-dialog .modal-content {
    border-radius: 12px;
}

.modal-open {
    overflow: hidden;
    overflow-y: scroll;
    padding-right: 0 !important;
}

.modal-body {
    padding: 0;
}
.actions-popup{
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
}

.action-popup-button{
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid ${(props) => props.theme.toggleBorder};
    background: transparent;
    cursor: pointer;
    line-height: 1.5;
    margin: 0;
    min-height: 48px;
    padding: 4px 8px;
    width: 100%;
}
.action-popup-button-danger{
    color: #ed4956;
    font-weight: 700;
}
.action-popup-button:active .action-popup-button:focus {
    outline: 0;
}

.action-popup-button:first-of-type{
    border-top: 0;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
.action-popup-button:last-of-type{
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}

.action-popup-link {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid ${(props) => props.theme.toggleBorder};
    background: transparent;
    line-height: 1.5;
    margin: 0;
    min-height: 48px;
    padding: 4px 8px;
    width: 100%;
    color: #1980fa;
    font-weight: 700;
}



.ant-drawer-header {
    color: ${(props) => props.theme.fontColor};
    background: ${(props) => props.theme.headerBackground};
    border-bottom: 1px solid ${(props) => props.theme.toggleBorder};
}
.ant-drawer-title{
    color: ${(props) => props.theme.fontColor};
}
.ant-drawer-close{
    color: ${(props) => props.theme.fontColor};

}
.ant-drawer-content {
    background-color: ${(props) => props.theme.models.background};
}

.leaflet-marker-pane img {
    filter: ${(props) => props.theme.markerFilter};
}

.ant-tabs{
    color: ${(props) => props.theme.fontColor};
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn, .ant-tabs-tab-btn:focus, .ant-tabs-tab-remove:focus, .ant-tabs-tab-btn:active, .ant-tabs-tab-remove:active, .ant-tabs-tab:hover {
    
    color: ${(props) => props.theme.activeLinkColor};
}

.ant-tabs-ink-bar {
    position: absolute;
    background: ${(props) => props.theme.activeLinkColor};
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

.ant-tag, .ant-tag a, .ant-tag a:hover {
    color: ${(props) => props.theme.fontColor};
}

.ant-tag-processing {
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.activeLinkColor};
    background: transparent;
    border-color: ${(props) => props.theme.activeLinkColor};
}

.ant-tag-success {
    align-items: center;
    justify-content: center;
    color: #52c41a;
    background: transparent;
    border-color: #b7eb8f;
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
  
/* Form Inputs */

.react-tel-input .form-control{
    color: ${(props) => props.theme.fontColor};
    background: ${(props) => props.theme.formBackground + `!important`};
}

input.phoneNumber-Select-Inactive.form-control{
    background: ${(props) => props.theme.inValidInputBackground};

}

label.invalid-selected-images.custom-file-label{
    background: ${(props) => props.theme.inValidInputBackground};
}

.custom-file-label {
  background: ${(props) => props.theme.formBackground};
}

.Ant-Select-isInvalid .ant-select-selector {
    border: 1px solid #fa1529 !important;
    background: ${(props) => props.theme.inValidInputBackground};
}

.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: ${(props) => props.theme.formBackground};
}

.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector::after, .ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item {
    color: ${(props) => props.theme.fontColor};

}
.ant-select-arrow{
    color: ${(props) => props.theme.fontColor};

}


.ant-select:not(.ant-select-customize-input) .ant-select-selector:hover{
    border-color: #2e186a;
}

.phone__Input{
outline: none;
width: 100%;
height: 40px;
border: 1px solid #d5dbd9;
border-radius: 3px;
font-size: 15px;
padding: 8px 10px;
transition: all 0.3s ease;
}

.react-tel-input .form-control {
    position: relative;
    font-size: 14px;
    margin: 0 !important;
    padding-left: 48px;
    background: #FFFFFF;
    border: 1px solid #d5dbd9;
    border-radius: 3px;
    line-height: 25px;
    width: 100%;
    outline: none;
    height: 40px;
}
.react-tel-input .form-control:hover {border-color: #2e186a;}

.react-tel-input {
    font-family: inherit;
    position: relative;
    width: 100%;
}

.react-tel-input .form-control.invalid-number {
    border: 1px solid #fa1529;
    background-color: #fffafa;
}

.react-tel-input .flag-dropdown.invalid-number {
    border-color: #fa1529;
}


.react-tel-input .selected-flag {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    padding: 0;
    width: 38px;
    height: 100%;
    border-radius: 3px 0 0 3px;
    cursor: default;
}

.react-tel-input .flag-dropdown:hover,
.react-tel-input .flag-dropdown:focus {
    cursor: default;
}
.react-tel-input .selected-flag:hover,
.react-tel-input .selected-flag:focus {
    background-color: #f5f5f5;
}


/* Form Inputs */

`;
