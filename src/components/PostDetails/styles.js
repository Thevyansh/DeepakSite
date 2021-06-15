import styled from 'styled-components';
import { rgba } from 'polished';

export const CKContent = styled.div`
  --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
  --ck-color-mention-text: hsl(341, 100%, 30%);
  --ck-highlight-marker-blue: hsl(201, 97%, 72%);
  --ck-highlight-marker-green: hsl(120, 93%, 68%);
  --ck-highlight-marker-pink: hsl(345, 96%, 73%);
  --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
  --ck-highlight-pen-green: hsl(112, 100%, 27%);
  --ck-highlight-pen-red: hsl(0, 85%, 49%);
  --ck-image-style-spacing: 1.5em;
  --ck-todo-list-checkmark-size: 16px;
  /* Overrides the border radius setting in the theme. */
  --ck-border-radius: 4px;

  /* Overrides the default font size in the theme. */
  --ck-font-size-base: 16px;

  /* Helper variables to avoid duplication in the colors. */
  --ck-custom-background: ${(props) => props.theme.background};
  --ck-custom-foreground: ${(props) => props.theme.body};
  --ck-custom-border: ${(props) => props.theme.highlight};
  --ck-custom-white: ${(props) => props.theme.text};
  --ck-custom-background-dark: ${(props) => props.theme.body};

  /* -- Overrides generic colors. ------------------------------------------------------------- */

  --ck-color-base-foreground: var(--ck-custom-background);
  --ck-color-focus-border: ${(props) => props.theme.gray5};
  --ck-color-text: ${(props) => props.theme.text};
  --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
  --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

  /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

  --ck-color-button-default-background: var(--ck-custom-background);
  --ck-color-button-default-hover-background: var(--ck-custom-foreground);
  --ck-color-button-default-active-background: var(--ck-custom-foreground);
  --ck-color-button-default-active-shadow: rgba(0, 0, 0, 0);
  --ck-color-button-default-disabled-background: var(--ck-custom-background);

  --ck-color-button-on-background: var(--ck-custom-foreground);
  --ck-color-button-on-hover-background: ${(props) => props.theme.gray2};
  --ck-color-button-on-active-background: ${(props) => props.theme.gray2};
  --ck-color-button-on-active-shadow: rgba(0, 0, 0, 0);
  --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

  --ck-color-button-action-background: hsl(168, 76%, 42%);
  --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
  --ck-color-button-action-active-background: hsl(168, 76%, 36%);
  --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
  --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
  --ck-color-button-action-text: var(--ck-custom-white);

  --ck-color-button-save: hsl(120, 100%, 46%);
  --ck-color-button-cancel: hsl(15, 100%, 56%);

  /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

  --ck-color-dropdown-panel-background: var(--ck-custom-background);
  --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

  /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

  --ck-color-split-button-hover-background: var(
    --ck-color-button-default-hover-background
  );
  --ck-color-split-button-hover-border: var(--ck-custom-foreground);

  /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

  --ck-color-input-background: var(--ck-custom-background);
  --ck-color-input-border: hsl(257, 3%, 43%);
  --ck-color-input-text: ${(props) => props.theme.text};
  --ck-color-input-disabled-background: hsl(255, 4%, 21%);
  --ck-color-input-disabled-border: hsl(250, 3%, 38%);
  --ck-color-input-disabled-text: hsl(0, 0%, 78%);

  /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

  --ck-color-labeled-field-label-background: var(--ck-custom-background);

  /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

  --ck-color-list-background: var(--ck-custom-background);
  --ck-color-list-button-hover-background: var(--ck-color-base-foreground);
  --ck-color-list-button-on-background: var(--ck-color-base-active);
  --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
  --ck-color-list-button-on-text: var(--ck-color-base-background);

  /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

  --ck-color-panel-background: var(--ck-custom-background);
  --ck-color-panel-border: var(--ck-custom-border);

  /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

  --ck-color-toolbar-background: var(--ck-custom-background);
  --ck-color-toolbar-border: var(--ck-custom-border);

  /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

  --ck-color-tooltip-background: ${(props) => props.theme.highlight};
  --ck-color-tooltip-text: ${(props) => props.theme.text};

  /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

  --ck-color-image-caption-background: ${(props) => props.theme.highlight};
  --ck-color-image-caption-text: ${(props) => props.theme.text};

  /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

  --ck-color-widget-blurred-border: hsl(0, 0%, 87%);
  --ck-color-widget-hover-border: hsl(43, 100%, 68%);
  --ck-color-widget-editable-focus-background: var(--ck-custom-white);

  /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

  --ck-color-link-default: hsl(190, 100%, 75%);
  --ck-focus-ring: 1px solid transparent;
  --ck-spacing-large: 50px;

  border-radius: 10px;
  font-size: 20px;
  flex: 1 1 700px;
  display: flex;
  flex-direction: column;
  min-width: 600px;

  @media (max-width: 760px) {
    min-width: initial;
    width: 100%;
  }
  /* .ck.ck-toolbar .ck.ck-toolbar__separator {
    margin: 0 10px;
  }
  .ck.ck-toolbar .ck.ck-toolbar__separator:last-of-type {
    opacity: 0;
    margin-right: auto;
  } */
  .ck.ck-editor__editable_inline {
    padding: 0;
  }
  .ck.ck-toolbar {
    border: none;
    box-shadow: ${(props) => props.theme.shadowSoft};
  }
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    box-shadow: none;
  }
  .ck {
    .ck.ck-editor__main > .ck-editor__editable {
      background-color: transparent;
      box-shadow: none;
      outline: none;
    }
  }
  .ck-focused {
    border: none;
  }
  .ck-blurred {
    border: none;
  }
  .ck.ck-list__item .ck-button:hover {
    background: var(--ck-custom-border);
    &.ck-on {
      background: var(--ck-custom-border);
    }
  }
  .ck.ck-list__item .ck-button {
    &.ck-on {
      background: var(--ck-custom-background-dark);
    }
  }
  .ck-button .ck-button__label {
    cursor: pointer;
    color: ${(props) => props.theme.text};
  }
  .ck-content pre {
    background: ${(props) => props.theme.highlight} !important;
    code {
      color: ${(props) => props.theme.text};
    }
  }
  // CONTENT
  .ck-content {
    color: ${(p) => p.theme.text};
    h2 {
      font-size: calc(1.325rem + 0.9vw);
    }
    h3 {
      font-size: calc(1.3rem + 0.6vw);
    }
    h4 {
      font-size: calc(1.275rem + 0.3vw);
    }
    /* ckeditor5-font/theme/fontsize.css */
    .text-tiny {
      font-size: 0.7em;
    }
    /* ckeditor5-font/theme/fontsize.css */
    .text-small {
      font-size: 0.85em;
    }
    /* ckeditor5-font/theme/fontsize.css */
    .text-big {
      font-size: 1.4em;
    }
    /* ckeditor5-font/theme/fontsize.css */
    .text-huge {
      font-size: 4rem;
    }
    /* ckeditor5-highlight/theme/highlight.css */
    .marker-yellow {
      background-color: var(--ck-highlight-marker-yellow);
    }
    /* ckeditor5-highlight/theme/highlight.css */
    .marker-green {
      background-color: var(--ck-highlight-marker-green);
    }
    /* ckeditor5-highlight/theme/highlight.css */
    .marker-pink {
      background-color: var(--ck-highlight-marker-pink);
    }
    /* ckeditor5-highlight/theme/highlight.css */
    .marker-blue {
      background-color: var(--ck-highlight-marker-blue);
    }
    /* ckeditor5-highlight/theme/highlight.css */
    .pen-red {
      color: var(--ck-highlight-pen-red);
      background-color: transparent;
    }
    /* ckeditor5-highlight/theme/highlight.css */
    .pen-green {
      color: var(--ck-highlight-pen-green);
      background-color: transparent;
    }
    /* ckeditor5-image/theme/image.css */
    .image {
      display: table;
      clear: both;
      text-align: center;
      margin: 1em auto;
    }
    /* ckeditor5-image/theme/image.css */
    .image img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      min-width: 50px;
    }
    /* ckeditor5-image/theme/imagecaption.css */
    .image > figcaption {
      display: table-caption;
      caption-side: bottom;
      word-break: break-word;
      color: var(--ck-color-image-caption-text);
      background-color: var(--ck-color-image-caption-background) !important;
      padding: 0.6em;
      font-size: 0.75em;
      outline-offset: -1px;
    }
    /* ckeditor5-image/theme/imageresize.css */
    .image.image_resized {
      max-width: 100%;
      display: block;
      box-sizing: border-box;
    }
    /* ckeditor5-image/theme/imageresize.css */
    .image.image_resized img {
      width: 100%;
    }
    /* ckeditor5-image/theme/imageresize.css */
    .image.image_resized > figcaption {
      display: block;
    }
    /* ckeditor5-horizontal-line/theme/horizontalline.css */
    hr {
      margin: 15px 0;
      height: 4px;
      background: hsl(0, 0%, 87%);
      border: 0;
    }
    /* ckeditor5-image/theme/imagestyle.css */
    .image-style-side {
      float: right;
      margin-left: var(--ck-image-style-spacing);
      max-width: 50%;
    }
    /* ckeditor5-image/theme/imagestyle.css */
    .image-style-align-left {
      float: left;
      margin-right: var(--ck-image-style-spacing);
    }
    /* ckeditor5-image/theme/imagestyle.css */
    .image-style-align-center {
      margin-left: auto;
      margin-right: auto;
    }
    /* ckeditor5-image/theme/imagestyle.css */
    .image-style-align-right {
      float: right;
      margin-left: var(--ck-image-style-spacing);
    }
    /* ckeditor5-block-quote/theme/blockquote.css */
    blockquote {
      overflow: hidden;
      padding-right: 1.5em;
      padding-left: 1.5em;
      margin-left: 0;
      margin-right: 0;
      font-style: italic;
      border-left: solid 5px hsl(0, 0%, 80%);
    }
    /* ckeditor5-block-quote/theme/blockquote.css */
    [dir='rtl'] blockquote {
      border-left: 0;
      border-right: solid 5px hsl(0, 0%, 80%);
    }
    /* ckeditor5-basic-styles/theme/code.css */
    code {
      background-color: hsla(0, 0%, 78%, 0.3);
      padding: 0.15em;
      border-radius: 2px;
    }
    /* ckeditor5-table/theme/table.css */
    .table {
      margin: 1em auto;
      display: table;
    }
    /* ckeditor5-table/theme/table.css */
    .table table {
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      height: 100%;
      border: 1px double hsl(0, 0%, 70%);
    }
    /* ckeditor5-table/theme/table.css */
    .table table td,
    .table table th {
      min-width: 2em;
      padding: 0.4em;
      border: 1px solid hsl(0, 0%, 75%);
    }
    /* ckeditor5-table/theme/table.css */
    .table table th {
      font-weight: bold;
      background: hsla(0, 0%, 0%, 5%);
    }
    /* ckeditor5-table/theme/table.css */
    [dir='rtl'] .table th {
      text-align: right;
    }
    /* ckeditor5-table/theme/table.css */
    [dir='ltr'] .table th {
      text-align: left;
    }
    /* ckeditor5-page-break/theme/pagebreak.css */
    .page-break {
      position: relative;
      clear: both;
      padding: 5px 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    /* ckeditor5-page-break/theme/pagebreak.css */
    .page-break::after {
      content: '';
      position: absolute;
      border-bottom: 2px dashed hsl(0, 0%, 77%);
      width: 100%;
    }
    /* ckeditor5-page-break/theme/pagebreak.css */
    .page-break__label {
      position: relative;
      z-index: 1;
      padding: 0.3em 0.6em;
      display: block;
      text-transform: uppercase;
      border: 1px solid hsl(0, 0%, 77%);
      border-radius: 2px;
      font-family: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;
      font-size: 0.75em;
      font-weight: bold;
      color: hsl(0, 0%, 20%);
      background: hsl(0, 0%, 100%);
      box-shadow: 2px 2px 1px hsla(0, 0%, 0%, 0.15);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    /* ckeditor5-media-embed/theme/mediaembed.css */
    .media {
      clear: both;
      margin: 1em 0;
      display: block;
      min-width: 15em;
    }
    /* ckeditor5-list/theme/todolist.css */
    .todo-list {
      list-style: none;
    }
    /* ckeditor5-list/theme/todolist.css */
    .todo-list li {
      margin-bottom: 5px;
    }
    /* ckeditor5-list/theme/todolist.css */
    .todo-list li .todo-list {
      margin-top: 5px;
    }
    /* ckeditor5-list/theme/todolist.css */
    .todo-list .todo-list__label > input {
      -webkit-appearance: none;
      display: inline-block;
      position: relative;
      width: var(--ck-todo-list-checkmark-size);
      height: var(--ck-todo-list-checkmark-size);
      vertical-align: middle;
      border: 0;
      left: -25px;
      margin-right: -15px;
      right: 0;
      margin-left: 0;
    }
    /* ckeditor5-list/theme/todolist.css */
    .todo-list .todo-list__label > input::before {
      display: block;
      position: absolute;
      box-sizing: border-box;
      content: '';
      width: 100%;
      height: 100%;
      border: 1px solid hsl(0, 0%, 20%);
      border-radius: 2px;
      transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background,
        250ms ease-in-out border;
    }
    /* ckeditor5-list/theme/todolist.css */
    .todo-list .todo-list__label > input::after {
      display: block;
      position: absolute;
      box-sizing: content-box;
      pointer-events: none;
      content: '';
      left: calc(var(--ck-todo-list-checkmark-size) / 3);
      top: calc(var(--ck-todo-list-checkmark-size) / 5.3);
      width: calc(var(--ck-todo-list-checkmark-size) / 5.3);
      height: calc(var(--ck-todo-list-checkmark-size) / 2.6);
      border-style: solid;
      border-color: transparent;
      border-width: 0 calc(var(--ck-todo-list-checkmark-size) / 8)
        calc(var(--ck-todo-list-checkmark-size) / 8) 0;
      transform: rotate(45deg);
    }
    /* ckeditor5-list/theme/todolist.css */
    .todo-list .todo-list__label > input[checked]::before {
      background: hsl(126, 64%, 41%);
      border-color: hsl(126, 64%, 41%);
    }
    /* ckeditor5-list/theme/todolist.css */
    .todo-list .todo-list__label > input[checked]::after {
      border-color: hsl(0, 0%, 100%);
    }
    /* ckeditor5-list/theme/todolist.css */
    .todo-list .todo-list__label .todo-list__label__description {
      vertical-align: middle;
    }
    /* ckeditor5-html-embed/theme/htmlembed.css */
    .raw-html-embed {
      margin: 1em auto;
      min-width: 15em;
      font-style: normal;
    }
    /* ckeditor5-code-block/theme/codeblock.css */
    pre {
      padding: 1em;
      color: hsl(0, 0%, 20.8%);
      background: hsla(0, 0%, 78%, 0.3);
      border: 1px solid hsl(0, 0%, 77%);
      border-radius: 2px;
      text-align: left;
      direction: ltr;
      tab-size: 4;
      white-space: pre-wrap;
      font-style: normal;
      min-width: 200px;
    }
    /* ckeditor5-code-block/theme/codeblock.css */
    pre code {
      background: unset;
      padding: 0;
      border-radius: 0;
    }
    /* ckeditor5-mention/theme/mention.css */
    .mention {
      background: var(--ck-color-mention-background);
      color: var(--ck-color-mention-text);
    }
    @media print {
      /* ckeditor5-page-break/theme/pagebreak.css */
      .page-break {
        padding: 0;
      }
      /* ckeditor5-page-break/theme/pagebreak.css */
      .page-break::after {
        display: none;
      }
    }
  }
`;
export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
`;
export const StyledTitle = styled.h1`
  width: 100%;
  font-size: 5rem;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.text};
  width: calc(100% - 4rem);
  border-radius: 24px;
  z-index: 20;
  padding: 2rem 4rem;
  position: absolute;
  bottom: 0;
  ${(p) => p.theme.elevation3};

  margin: 0 2rem 3rem 2rem;
`;
export const StyledContainer = styled.div`
  width: 100%;
  margin: 2rem;
`;
export const StyledHeader = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  margin-bottom: 2rem;
`;
export const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  z-index: 5;

  img {
    max-width: 100%;
    border-radius: 24px;
    max-height: 100%;
  }
`;

export const StyledContent = styled.div`
  border-radius: 0 0 15px 15px;
  padding: 5rem;
  border-radius: 24px;
  flex: 1;
  max-width: 1200px;
  box-shadow: ${(props) => props.theme.shadowSoft};
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
  margin: 2rem;
`;

export const StyledAds = styled.div`
  padding: 2rem;
  flex: 0 1 300px;
`;

export const StyledPost = styled.div`
  display: flex;
  justify-content: center;
`;
