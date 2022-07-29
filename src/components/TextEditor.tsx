import React, { useEffect, useRef, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import katex from "katex";
import "katex/dist/katex.min.css";

const editorOptions = {
  height: 200,
  buttonList: [
    ["undo", "redo"],
    ["removeFormat"],
    ["bold", "underline", "italic", "fontSize"],
    ["fontColor", "hiliteColor"],
    ["align", "horizontalRule", "list"],
    ["table", "link", "image", "imageGallery"],
    ["showBlocks", "codeView"],
    ["math"]
  ],
  katex: katex,
  imageRotation: false,
  fontSize: [12, 14, 16, 18, 20],
  colorList: [
    [
      "#828282",
      "#FF5400",
      "#676464",
      "#F1F2F4",
      "#FF9B00",
      "#F00",
      "#fa6e30",
      "#000",
      "rgba(255, 153, 0, 0.1)",
      "#FF6600",
      "#0099FF",
      "#74CC6D",
      "#FF9900",
      "#CCCCCC"
    ]
  ],
  imageUploadUrl: "http://localhost:8080/chazki-gateway/orders/upload",
  imageGalleryUrl: "http://localhost:8080/chazki-gateway/orders/gallery"
};

export const TextEditor = () => {
  const editorRef = useRef<HTMLDivElement>();
  const contentRef = useRef<HTMLDivElement>();
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(editorRef.current.editor);
  }, []);

  // const onImageUploadError = (errorMessage, result, core) => {
  //   alert(errorMessage);
  // core.noticeOpen(errorMessage);
  // return false;
  // console.log('error!')
  // return true;
  // }

  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.innerHTML = value;
  }, [value]);

  const onChangeHandler = (content) => {
    console.log(content);
    setValue(content);
  };
  // const onClickHandler = () => {
  //   if(!contentRef.current) return;
  //   contentRef.current.innerHTML = valueRef.current;
  // }
  return (
    <div>
      <SunEditor
        ref={editorRef}
        setOptions={editorOptions}
        lang="es"
        // onImageUploadError={onImageUploadError}
        onChange={onChangeHandler}
      />
      {/* <button onClick={onClickHandler} type="button">parsear</button> */}
      <div ref={contentRef}></div>
    </div>
  );
};
