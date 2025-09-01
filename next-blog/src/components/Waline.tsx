"use client";
import { init } from "@waline/client";
import React, { useEffect, useRef } from "react";

const Waline = (props) => {
  const walineInstanceRef = useRef(null);
  const containerRef = React.createRef();
  useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      el: containerRef.current,
    });
    return () => walineInstanceRef!.current!.destroy();
  }, []);
  useEffect(() => {
    walineInstanceRef.current.update(props);
  }, [props]);
  return <div ref={containerRef} />;
};
export default Waline;
