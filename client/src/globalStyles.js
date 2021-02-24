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
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
}

h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.fontColor};
}

button:focus{
    outline: none;
}

.container {
    width: 100%;
    padding: 75px 15px 62px 15px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 600px) {
    max-width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
}
    @media (max-width: 767px) {
        padding-top: 54px;
    }
}
.public-container {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    padding: 75px 15px 0 15px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    margin-bottom: 20px;
}

.containerMother{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
}

.styled-hr {	
    border-top-width: 1px;	
    display: block;	
    unicode-bidi: isolate;	
    margin-block-start: 0.5em;	
    margin-block-end: 0.5em;	
    margin-inline-start: auto;	
    margin-inline-end: auto;	
}

.ant-input-search>.ant-input-group>.ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary) {
    color: rgba(0,0,0,.45);
    display: flex;
    justify-content: center;
    align-items: center;
}

.ant-btn-primary{
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.activeLinkColor};
    border-color: ${(props) => props.theme.activeLinkColor};
    transition: 0.8s all ease;
}
.ant-list{    
    margin-right: 15px;
    @media only screen and (max-width: 991px){
        margin-right: 0;
    }
}

.ant-list, .ant-list-item{
    color: ${(props) => props.theme.fontColor};
}

.ant-list-header{
    font-weight: 600;
    background-color: ${(props) => props.theme.cardHeaderBackground};
}
.ant-list-split .ant-list-header {
    border-bottom: 1px solid rgba(0,0,0,.125);
}


.ant-list-item:last-child {
    border-bottom: none;
}
.ant-list-bordered .ant-list-item{
    padding-right: 0;
    padding-left: 0;
}
.ant-list-item{
    background-color: ${(props) => props.theme.models.background};
    padding: 0;
}

.ant-spin{
    color: ${(props) => props.theme.activeLinkColor};
    display: flex;
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

.ant-pagination-item a, .ant-pagination-next button, .ant-pagination-prev button{
    color: ${(props) => props.theme.fontColor};
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

.ant-notification{
    z-index: 1100;
}

.ant-modal-confirm .ant-modal-confirm-btns{
    display: flex;
}

// Modal Pop up
.popup-content{
    width: 280px;
    background: ${(props) => props.theme.models.background};
    padding: 0;
    border: 0;
    border-radius: 12px;

}

.popup-overlay {
    z-index: 1100 !important;
}

// costume 

.action-popup-link:hover,
.action-popup-button:hover {
    background: ${(props) => props.theme.models.hoverColor};
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
// Modal Pop up


// Search Input

.ant-input{
    color: ${(props) => props.theme.fontColor};
    background: ${(props) => props.theme.formBackground};
    transition: 0.8s all ease;
}

.ant-input-affix-wrapper{
    color: ${(props) => props.theme.fontColor};
    background: ${(props) => props.theme.formBackground};
    transition: 0.8s all ease;
}

.ant-input-clear-icon{
    color: ${(props) => props.theme.fontColor};
    transition: 0.8s all ease;
}

.ant-input-group-addon{
color: ${(props) => props.theme.fontColor};
    background: ${(props) => props.theme.formBackground};
    transition: 0.8s all ease;
}

// Search Input 

.ant-select-single .ant-select-selector .ant-select-selection-item {
    color: ${(props) => props.theme.fontColor};
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

// Leaflet map
.leaflet-marker-pane img {
    filter: ${(props) => props.theme.markerFilter};
}
.leaflet-container {
    width: inherit;
    height: 400px;
    position: fixed;
    border: 1px solid #cdcdcd;
    border-radius: 3px;

    @media only screen and (max-width: 1024px) {
        width: 100%;
        height: 350px;
        position: relative;
    }
    @media only screen and (max-width: 1090px) {
        height: 300px;
    }
    @media only screen and (max-width: 991px) {
        width: 100%;
        height: 350px;
        position: relative;
    }
}

// Leaflet map


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
.ant-tag{
    display: inline-flex;
    width: fit-content;
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
    left: 0;
    z-index: 1;
    background: ${(props) => props.theme.formBackground};
    border: 1px solid #ced4da;
}

.custom-control-label:before, .custom-file-label, .custom-select {
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.custom-file-label, .custom-file-label:after {
    position: absolute;
    top: 0;
    right: 0;
    padding: .375rem .75rem;
    line-height: 1.5;
    color: #495057;
}

.custom-file-label:after {
    bottom: 0;
    z-index: 3;
    display: block;
    height: calc(1.5em + .75rem);
    content: "Browse";
    background-color: #e9ecef;
    border-left: inherit;
    border-radius: 0 .25rem .25rem 0;
}



.Ant-Select-isInvalid .ant-select-selector {
    border: 1px solid #fa1529 !important;
    background: ${(props) => props.theme.inValidInputBackground};
    transition: 0.8s all ease;
}

.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: ${(props) => props.theme.formBackground};
    transition: 0.8s all ease;
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



.target-link{
    text-decoration: underline;
    color: #006deb;
}

/* Contact us css */

.required {
    color: #fa1529;
}

.all-fields-required {
    font-size: .75rem;
    font-weight: 500;
    line-height: 1;
    color: #68d1f1;
}

.contactUS__info--link {
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size cubic-bezier(0, .5, 0, 1) 0.3s;
}

.contactUS__info--link:hover,
.contactUS__info--link:focus {
    text-decoration: none;
    background-size: 100% 2px;
}

/* Contact us css */


/* Error Page CSS */
.PageNotFound {
    font-family: 'Lato', sans-serif;
    color: #888;
    transition: all 0.6s;
    margin: 0;
    display: table;
    width: 100%;
    height: 80vh;
    text-align: center;
}

.PageNotFound__Error {
    display: table-cell;
    vertical-align: middle;
}

.PageNotFound__Error h1 {
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type .5s alternate infinite;
}

@keyframes type {
    from {
        box-shadow: inset -3px 0px 0px #888;
    }

    to {
        box-shadow: inset -3px 0px 0px transparent;
    }
}

/* Error Page CSS */



/* Spinner */

.spinner-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: none;
}

/*!
 * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
 * Copyright 2015 Daniel Cardoso <@DanielCardoso>
 * Licensed under MIT
 */
.spinner,
.spinner>div {
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.spinner.la-dark {
    color: #333;
}

.spinner>div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}

.spinner {
    width: 32px;
    height: 32px;
}

.spinner>div {
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    opacity: 0;
    -webkit-animation: ball-scale-multiple 1s 0s linear infinite;
    -moz-animation: ball-scale-multiple 1s 0s linear infinite;
    -o-animation: ball-scale-multiple 1s 0s linear infinite;
    animation: ball-scale-multiple 1s 0s linear infinite;
}

.spinner>div:nth-child(2) {
    -webkit-animation-delay: .2s;
    -moz-animation-delay: .2s;
    -o-animation-delay: .2s;
    animation-delay: .2s;
}

.spinner>div:nth-child(3) {
    -webkit-animation-delay: .4s;
    -moz-animation-delay: .4s;
    -o-animation-delay: .4s;
    animation-delay: .4s;
}

.spinner.la-sm {
    width: 16px;
    height: 16px;
}

.spinner.la-sm>div {
    width: 16px;
    height: 16px;
}

.spinner.la-2x {
    width: 64px;
    height: 64px;
}

.spinner.la-2x>div {
    width: 64px;
    height: 64px;
}

.spinner.la-3x {
    width: 96px;
    height: 96px;
}

.spinner.la-3x>div {
    width: 96px;
    height: 96px;
}

/*
 * Animation
 */
@-webkit-keyframes ball-scale-multiple {
    0% {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    5% {
        opacity: .75;
    }

    100% {
        opacity: 0;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@-moz-keyframes ball-scale-multiple {
    0% {
        opacity: 0;
        -moz-transform: scale(0);
        transform: scale(0);
    }

    5% {
        opacity: .75;
    }

    100% {
        opacity: 0;
        -moz-transform: scale(1);
        transform: scale(1);
    }
}

@-o-keyframes ball-scale-multiple {
    0% {
        opacity: 0;
        -o-transform: scale(0);
        transform: scale(0);
    }

    5% {
        opacity: .75;
    }

    100% {
        opacity: 0;
        -o-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes ball-scale-multiple {
    0% {
        opacity: 0;
        -webkit-transform: scale(0);
        -moz-transform: scale(0);
        -o-transform: scale(0);
        transform: scale(0);
    }

    5% {
        opacity: .75;
    }

    100% {
        opacity: 0;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
    }
}

/* Spinner */


`;
